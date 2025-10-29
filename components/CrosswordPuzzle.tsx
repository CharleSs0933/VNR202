"use client";

import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, RotateCcw, Lightbulb, CheckCircle2, Info } from "lucide-react";
import styled from "styled-components";

interface CrosswordClue {
  number: number;
  clue: string;
  answer: string;
  direction: "across" | "down";
  row: number;
  col: number;
}

const crosswordData: CrosswordClue[] = [
  {
    number: 1,
    clue: "Thủ đô được tiếp quản ngày 10/10/1954",
    answer: "HANOI",
    direction: "across",
    row: 0,
    col: 0,
  },
  {
    number: 2,
    clue: "Chiến thắng lịch sử ngày 7/5/1954, kết thúc thống trị của Pháp",
    answer: "DIENBIENPHU",
    direction: "down",
    row: 0,
    col: 0,
  },
  {
    number: 3,
    clue: "Nơi bùng nổ phong trào Đồng Khởi 17/1/1960",
    answer: "BENTRE",
    direction: "across",
    row: 2,
    col: 1,
  },
  {
    number: 4,
    clue: "Nơi quân Mỹ đổ bộ ngày 8/3/1965, mở đầu 'Chiến tranh cục bộ'",
    answer: "DANANG",
    direction: "across",
    row: 4,
    col: 0,
  },
  {
    number: 5,
    clue: "Thành phố giải phóng ngày 30/4/1975, thống nhất đất nước",
    answer: "SAIGON",
    direction: "down",
    row: 2,
    col: 4,
  },
  {
    number: 6,
    clue: "Chiến thắng ngày 2/1/1963, đánh bại chiến thuật trực thăng vận",
    answer: "APBAC",
    direction: "across",
    row: 6,
    col: 2,
  },
  {
    number: 7,
    clue: "Tổng tiến công và nổi dậy năm 1968 (gọi tắt, viết liền không dấu)",
    answer: "TETMAUTHAN",
    direction: "across",
    row: 8,
    col: 0,
  },
  {
    number: 8,
    clue: "Thành phố anh hùng trong chiến dịch Hè 1972",
    answer: "QUANGTRI",
    direction: "down",
    row: 4,
    col: 6,
  },
];

const GridContainer = styled.div`
  display: inline-block;
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

const GridTable = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 40px);
  gap: 2px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(12, 32px);
  }
`;

const Cell = styled.div<{
  $isActive: boolean;
  $isCorrect: boolean;
  $isWrong: boolean;
  $isSelected: boolean;
}>`
  width: 40px;
  height: 40px;
  border: 2px solid
    ${(props) =>
      props.$isSelected
        ? "#3b82f6"
        : props.$isCorrect
        ? "#22c55e"
        : props.$isWrong
        ? "#ef4444"
        : "#d1d5db"};
  background: ${(props) =>
    props.$isSelected
      ? "#dbeafe"
      : props.$isCorrect
      ? "#dcfce7"
      : props.$isWrong
      ? "#fee2e2"
      : props.$isActive
      ? "white"
      : "#111827"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
  transition: all 0.2s;
  font-weight: 600;
  font-size: 18px;
  color: #000;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }

  &:hover {
    ${(props) =>
      props.$isActive &&
      `
      background: #fef3c7;
      border-color: #f59e0b;
    `}
  }
`;

const ClueNumber = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  font-size: 10px;
  font-weight: bold;
  color: #dc2626;

  @media (max-width: 768px) {
    font-size: 8px;
    top: 1px;
    left: 1px;
  }
`;

const ClueList = styled.div`
  max-height: 600px;
  overflow-y: auto;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #94a3b8;
    border-radius: 3px;
  }
`;

const ClueItem = styled.div<{ $isCompleted: boolean }>`
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 8px;
  background: ${(props) => (props.$isCompleted ? "#dcfce7" : "white")};
  border: 1px solid ${(props) => (props.$isCompleted ? "#22c55e" : "#e5e7eb")};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.$isCompleted ? "#bbf7d0" : "#f9fafb")};
    border-color: ${(props) => (props.$isCompleted ? "#16a34a" : "#d1d5db")};
  }
`;

function createGrid(clues: CrosswordClue[]): (string | null)[][] {
  const grid: (string | null)[][] = Array(12)
    .fill(null)
    .map(() => Array(12).fill(null));

  clues.forEach((clue) => {
    const letters = clue.answer.split("");
    letters.forEach((letter, index) => {
      if (clue.direction === "across") {
        grid[clue.row][clue.col + index] = letter;
      } else {
        grid[clue.row + index][clue.col] = letter;
      }
    });
  });

  return grid;
}

export function CrosswordPuzzle() {
  const [grid, setGrid] = useState<(string | null)[][]>([]);
  const [userGrid, setUserGrid] = useState<(string | null)[][]>([]);
  const [selectedCell, setSelectedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [showHints, setShowHints] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const inputRefs = useRef<{ [key: string]: HTMLInputElement }>({});

  useEffect(() => {
    const initialGrid = createGrid(crosswordData);
    setGrid(initialGrid);
    setUserGrid(
      initialGrid.map((row) => row.map((cell) => (cell ? "" : null)))
    );
  }, []);

  const getCellKey = (row: number, col: number) => `${row}-${col}`;

  const handleCellClick = (row: number, col: number) => {
    if (grid[row][col]) {
      setSelectedCell({ row, col });
      const key = getCellKey(row, col);
      inputRefs.current[key]?.focus();
    }
  };

  const handleInput = (row: number, col: number, value: string) => {
    const upperValue = value.toUpperCase().replace(/[^A-Z]/g, "");
    if (upperValue.length > 1) return;

    const newUserGrid = userGrid.map((r) => [...r]);
    newUserGrid[row][col] = upperValue;
    setUserGrid(newUserGrid);

    checkProgress(newUserGrid);

    if (upperValue) {
      moveToNextCell(row, col);
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    row: number,
    col: number
  ) => {
    if (e.key === "Backspace" && !userGrid[row][col]) {
      e.preventDefault();
      moveToPreviousCell(row, col);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      moveRight(row, col);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      moveLeft(row, col);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      moveUp(row, col);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      moveDown(row, col);
    }
  };

  const moveToNextCell = (row: number, col: number) => {
    // Try right first
    if (col < 11 && grid[row][col + 1]) {
      focusCell(row, col + 1);
    } else {
      // Find next available cell
      for (let r = row; r < 12; r++) {
        for (let c = r === row ? col + 1 : 0; c < 12; c++) {
          if (grid[r][c]) {
            focusCell(r, c);
            return;
          }
        }
      }
    }
  };

  const moveToPreviousCell = (row: number, col: number) => {
    if (col > 0 && grid[row][col - 1]) {
      focusCell(row, col - 1);
    }
  };

  const moveRight = (row: number, col: number) => {
    for (let c = col + 1; c < 12; c++) {
      if (grid[row][c]) {
        focusCell(row, c);
        return;
      }
    }
  };

  const moveLeft = (row: number, col: number) => {
    for (let c = col - 1; c >= 0; c--) {
      if (grid[row][c]) {
        focusCell(row, c);
        return;
      }
    }
  };

  const moveUp = (row: number, col: number) => {
    for (let r = row - 1; r >= 0; r--) {
      if (grid[r][col]) {
        focusCell(r, col);
        return;
      }
    }
  };

  const moveDown = (row: number, col: number) => {
    for (let r = row + 1; r < 12; r++) {
      if (grid[r][col]) {
        focusCell(r, col);
        return;
      }
    }
  };

  const focusCell = (row: number, col: number) => {
    setSelectedCell({ row, col });
    const key = getCellKey(row, col);
    setTimeout(() => inputRefs.current[key]?.focus(), 0);
  };

  const checkProgress = (currentGrid: (string | null)[][]) => {
    let correct = 0;
    let total = 0;

    for (let r = 0; r < 12; r++) {
      for (let c = 0; c < 12; c++) {
        if (grid[r][c]) {
          total++;
          if (currentGrid[r][c] === grid[r][c]) {
            correct++;
          }
        }
      }
    }

    setCorrectCount(correct);

    if (correct === total && total > 0) {
      setTimeout(() => setCompleted(true), 500);
    }
  };

  const handleReset = () => {
    setUserGrid(grid.map((row) => row.map((cell) => (cell ? "" : null))));
    setCorrectCount(0);
    setCompleted(false);
    setShowHints(false);
    setSelectedCell(null);
  };

  const handleHint = (clue: CrosswordClue) => {
    const newUserGrid = userGrid.map((row) => [...row]);
    const letters = clue.answer.split("");

    letters.forEach((letter, index) => {
      if (clue.direction === "across") {
        newUserGrid[clue.row][clue.col + index] = letter;
      } else {
        newUserGrid[clue.row + index][clue.col] = letter;
      }
    });

    setUserGrid(newUserGrid);
    checkProgress(newUserGrid);
  };

  const getClueNumber = (row: number, col: number) => {
    const clue = crosswordData.find((c) => c.row === row && c.col === col);
    return clue?.number;
  };

  const isClueCompleted = (clue: CrosswordClue) => {
    const letters = clue.answer.split("");
    return letters.every((letter, index) => {
      if (clue.direction === "across") {
        return userGrid[clue.row]?.[clue.col + index] === letter;
      } else {
        return userGrid[clue.row + index]?.[clue.col] === letter;
      }
    });
  };

  const totalCells = grid.flat().filter((cell) => cell !== null).length;
  const progress = Math.round((correctCount / totalCells) * 100);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-linear-to-br from-red-50 via-yellow-50 to-green-50 rounded-2xl shadow-2xl p-6 md:p-8 border-2 border-red-200"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-2 flex items-center justify-center gap-3">
            <span>🧩</span>Ô Chữ Lịch Sử Việt Nam
            <span>🧩</span>
          </h2>
          <p className="text-gray-600">
            Kháng chiến chống Mỹ cứu nước (1954-1975)
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 flex-wrap">
            <div className="bg-white px-4 py-2 rounded-lg shadow">
              <span className="text-sm text-gray-600">Tiến độ:</span>
              <span className="ml-2 text-xl font-bold text-blue-600">
                {progress}%
              </span>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow">
              <span className="text-sm text-gray-600">Đúng:</span>
              <span className="ml-2 text-xl font-bold text-green-600">
                {correctCount}/{totalCells}
              </span>
            </div>
            <button
              onClick={() => setShowHints(!showHints)}
              className={`px-4 py-2 ${
                showHints ? "bg-yellow-600" : "bg-yellow-500"
              } text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center gap-2`}
            >
              <Lightbulb className="w-4 h-4" />
              {showHints ? "Ẩn gợi ý" : "Hiện gợi ý"}
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Chơi lại
            </button>
          </div>
        </div>

        {/* Game Container */}
        <div className="grid lg:grid-cols-[auto,1fr] gap-8 items-start">
          {/* Crossword Grid */}
          <div className="flex justify-center">
            <GridContainer>
              <GridTable>
                {grid.map((row, rowIndex) =>
                  row.map((cell, colIndex) => {
                    const clueNumber = getClueNumber(rowIndex, colIndex);
                    const isActive = cell !== null;
                    const isSelected =
                      selectedCell?.row === rowIndex &&
                      selectedCell?.col === colIndex;
                    const userValue = userGrid[rowIndex][colIndex];
                    const isCorrect = userValue && userValue === cell;
                    const isWrong = userValue && userValue !== cell;
                    const key = getCellKey(rowIndex, colIndex);

                    return (
                      <Cell
                        key={key}
                        $isActive={isActive}
                        $isSelected={isSelected}
                        $isCorrect={isCorrect || false}
                        $isWrong={isWrong || false}
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                      >
                        {clueNumber && <ClueNumber>{clueNumber}</ClueNumber>}
                        {isActive && (
                          <input
                            ref={(el) => {
                              if (el) inputRefs.current[key] = el;
                            }}
                            type="text"
                            maxLength={1}
                            value={userValue || ""}
                            onChange={(e) =>
                              handleInput(rowIndex, colIndex, e.target.value)
                            }
                            onKeyDown={(e) =>
                              handleKeyDown(e, rowIndex, colIndex)
                            }
                            onFocus={() =>
                              setSelectedCell({ row: rowIndex, col: colIndex })
                            }
                            style={{
                              width: "100%",
                              height: "100%",
                              textAlign: "center",
                              fontSize: "inherit",
                              fontWeight: "inherit",
                              background: "transparent",
                              border: "none",
                              outline: "none",
                              color: "#000",
                              textTransform: "uppercase",
                              caretColor: "transparent",
                            }}
                          />
                        )}
                      </Cell>
                    );
                  })
                )}
              </GridTable>
            </GridContainer>
          </div>

          {/* Clues */}
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-4 md:p-6 border-2 border-blue-200">
              <h3 className="text-lg md:text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                ➡️ Hàng ngang
              </h3>
              <ClueList>
                {crosswordData
                  .filter((clue) => clue.direction === "across")
                  .map((clue) => (
                    <ClueItem
                      key={clue.number}
                      $isCompleted={isClueCompleted(clue)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <span className="font-bold text-blue-600">
                            {clue.number}.
                          </span>{" "}
                          <span className="text-gray-700 text-sm">
                            {clue.clue}
                          </span>
                        </div>
                        {showHints && !isClueCompleted(clue) && (
                          <button
                            onClick={() => handleHint(clue)}
                            className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 transition-colors text-xs"
                          >
                            Gợi ý
                          </button>
                        )}
                        {isClueCompleted(clue) && (
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                        )}
                      </div>
                    </ClueItem>
                  ))}
              </ClueList>
            </div>

            <div className="bg-green-50 rounded-xl p-4 md:p-6 border-2 border-green-200">
              <h3 className="text-lg md:text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                ⬇️ Hàng dọc
              </h3>
              <ClueList>
                {crosswordData
                  .filter((clue) => clue.direction === "down")
                  .map((clue) => (
                    <ClueItem
                      key={clue.number}
                      $isCompleted={isClueCompleted(clue)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <span className="font-bold text-green-600">
                            {clue.number}.
                          </span>{" "}
                          <span className="text-gray-700 text-sm">
                            {clue.clue}
                          </span>
                        </div>
                        {showHints && !isClueCompleted(clue) && (
                          <button
                            onClick={() => handleHint(clue)}
                            className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 transition-colors text-xs"
                          >
                            Gợi ý
                          </button>
                        )}
                        {isClueCompleted(clue) && (
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                        )}
                      </div>
                    </ClueItem>
                  ))}
              </ClueList>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-blue-50 border-2 border-blue-300 rounded-xl p-4">
          <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Hướng dẫn:
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Click vào ô để chọn và gõ chữ cái (KHÔNG DẤU, CHỮ HOA)</li>
            <li>• Dùng phím mũi tên để di chuyển giữa các ô</li>
            <li>• Nhấn "Hiện gợi ý" để xem và điền tự động câu trả lời</li>
            <li>• Ô xanh lá = đúng, ô đỏ = sai, ô xanh dương = đang chọn</li>
          </ul>
        </div>
      </motion.div>

      {/* Completion Modal */}
      <AnimatePresence>
        {completed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
            >
              <div className="mb-6">
                <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4 animate-bounce" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  🎉 Xuất sắc! 🎉
                </h3>
                <p className="text-lg text-gray-600">
                  Bạn đã hoàn thành ô chữ lịch sử!
                </p>
              </div>

              <div className="bg-linear-to-r from-yellow-50 to-orange-50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                  <p className="text-4xl font-bold text-orange-600">100%</p>
                </div>
                <p className="text-sm text-gray-600">
                  {correctCount}/{totalCells} ô đúng
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Bạn là chuyên gia lịch sử Việt Nam! 🇻🇳
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleReset}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Chơi lại
                </button>
                <button
                  onClick={() => setCompleted(false)}
                  className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Đóng
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

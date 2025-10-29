"use client";

import { ImageIcon, Video } from "lucide-react";
import { motion } from "framer-motion";

interface MediaPlaceholderProps {
  type: "image" | "video";
  note: string;
  title?: string;
  className?: string;
}

export function MediaPlaceholder({
  type,
  note,
  title,
  className = "",
}: MediaPlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 hover:border-red-400 hover:bg-red-50 transition-all ${className}`}
    >
      <div className="flex flex-col items-center justify-center space-y-3">
        {type === "image" ? (
          <ImageIcon className="h-12 w-12 text-gray-400" />
        ) : (
          <Video className="h-12 w-12 text-gray-400" />
        )}
        {title && (
          <h4 className="font-semibold text-gray-700 text-center">{title}</h4>
        )}
        <div className="bg-yellow-100 border border-yellow-300 rounded-md p-3 w-full">
          <p className="text-xs font-mono text-yellow-900">
            📝 <strong>GHI CHÚ:</strong> {note}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface InfoTooltipProps {
  content: string | string[];
  children?: React.ReactNode;
}

export function InfoTooltip({ content, children }: InfoTooltipProps) {
  const formattedContent = Array.isArray(content) ? content : [content];

  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          {children || (
            <button className="inline-flex items-center justify-center ml-1 text-blue-600 hover:text-blue-800 transition-colors">
              <Info className="h-4 w-4" />
            </button>
          )}
        </TooltipTrigger>
        <TooltipContent className="max-w-sm p-3 bg-white border border-gray-200 shadow-lg">
          {formattedContent.length === 1 ? (
            <p className="text-sm text-gray-700">{formattedContent[0]}</p>
          ) : (
            <ul className="space-y-1 text-sm text-gray-700">
              {formattedContent.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

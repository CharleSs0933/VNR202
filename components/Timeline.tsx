"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
}

export function TimelineItem({
  year,
  title,
  description,
  index,
}: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
      }
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative mb-8 flex items-start gap-6"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg"
        >
          <Calendar className="h-6 w-6" />
        </motion.div>
        <div className="mt-2 h-full w-0.5 bg-linear-to-b from-red-600 to-transparent" />
      </div>

      <div className="flex-1 pb-8">
        <div className="rounded-lg border-l-4 border-red-600 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="mb-2 inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-800">
            {year}
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface TimelineProps {
  items: Array<{
    year: string;
    title: string;
    description: string;
  }>;
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-4xl">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          index={index}
          year={item.year}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface SectionProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  delay?: number;
}

export function Section({ title, children, icon, delay = 0 }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="mb-8"
    >
      <Card className="overflow-hidden border-2 hover:border-red-600 transition-colors">
        <CardHeader className="bg-linear-to-r from-red-600 to-red-800 text-white">
          <CardTitle className="flex items-center gap-3 text-2xl">
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-6">{children}</CardContent>
      </Card>
    </motion.div>
  );
}

interface SubSectionProps {
  title: string;
  items: string[];
  delay?: number;
}

export function SubSection({ title, items, delay = 0 }: SubSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay }}
      className="mb-6"
    >
      <h3 className="mb-3 text-xl font-bold text-gray-800 border-l-4 border-red-600 pl-4">
        {title}
      </h3>
      <ul className="space-y-2 pl-8">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.4, delay: delay + index * 0.1 }}
            className="text-gray-700 flex items-start"
          >
            <span className="mr-2 text-red-600">•</span>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

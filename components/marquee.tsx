"use client"

import { motion } from "framer-motion"
import { techStacks } from "@/data/marquee"

export function Marquee() {
  return (
    <div className="relative flex w-full overflow-x-hidden border-b-4 border-black bg-primary py-2 text-white">
      <motion.div
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        {[...techStacks, ...techStacks].map((tech, index) => (
          <span key={index} className="mx-4 text-lg font-black italic uppercase tracking-widest">
            {tech} •
          </span>
        ))}
      </motion.div>
    </div>
  )
}

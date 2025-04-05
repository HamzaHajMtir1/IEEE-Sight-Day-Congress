"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface SpinnerProps {
  size?: number;
}

export function Spinner({ size = 120 }: SpinnerProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {/* Outer spinning circle */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-green-500 border-t-transparent"
          style={{
            width: size,
            height: size,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Inner pulsing logo */}
        <motion.div
          className="flex items-center justify-center"
          style={{
            width: size,
            height: size,
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/IASPESISIMMlogo.webp" 
            alt="IAS-PES Logo"
            width={size * 0.6}
            height={size * 0.6}
            className="object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
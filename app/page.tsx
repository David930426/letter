'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [showHearts, setShowHearts] = useState(false)

  useEffect(() => {
    setShowHearts(true)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Floating hearts background */}
      {showHearts && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-rose-300 opacity-60"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: (typeof window !== 'undefined' ? window.innerHeight : 1000) + 50,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{
                y: -100,
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                rotate: 360
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
              style={{
                fontSize: `${Math.random() * 30 + 20}px`
              }}
            >
              ❤️
            </motion.div>
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-7xl md:text-9xl font-display font-bold text-rose-600 mb-4 tracking-tight">
            Happy
          </h1>
          <motion.h2 
            className="text-6xl md:text-8xl font-display italic text-burgundy"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Valentine's Day
          </motion.h2>
        </motion.div>

        {/* Main message box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl mb-12 border-4 border-rose-200"
        >
          <motion.p 
            className="text-2xl md:text-3xl font-elegant text-center leading-relaxed text-burgundy mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            To the most beautiful person in my world,
          </motion.p>
          
          <motion.p 
            className="text-xl md:text-2xl font-body text-center leading-relaxed text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Every moment with you feels like a dream I never want to wake up from.
            You make my heart skip beats and my face hurt from smiling so much.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="text-center mt-8"
          >
            <span className="text-6xl">💝</span>
          </motion.div>
        </motion.div>

        {/* Navigation buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          <Link href="/letter">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(225, 29, 72, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xl font-display rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-rose-600"
            >
              Open My Love Letter 💌
            </motion.button>
          </Link>
          
          <Link href="/memories">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(219, 39, 119, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-rose-600 text-xl font-display rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-rose-300"
            >
              Our Memories 📸
            </motion.button>
          </Link>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 text-6xl opacity-20"
        >
          🌹
        </motion.div>
        
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 text-6xl opacity-20"
        >
          💐
        </motion.div>
      </div>

      {/* Bottom decorative border */}
      <div className="fixed bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 z-20"></div>
    </main>
  )
}
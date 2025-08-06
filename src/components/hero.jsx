'use client'

import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroImage from '../../public/top-view-globe-with-academic-cap-laptop.jpg'
import { BookOpen, Star, GraduationCap, Rocket, Globe, BrainCircuit } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-6">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20 pt-9">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>

      <div className="relative h-full container mx-auto px-6 md:px-12 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-16 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 sm:mb-6 mb-3">
                <Rocket className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">TRENDING PLATFORM</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                <span className="block">Learn Beyond</span>
                <span className="block">The Classroom</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
                Join 50,000+ students mastering skills with our AI-powered learning platform. Get personalized mentorship and career-ready skills.
              </p>

              <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Start Learning Free
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
                >
                  Meet Our Tutors
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* 3D Image Container */}
          <motion.div 
            className="relative w-full h-[100px] sm:h-[300px] lg:h-[400px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Image with 3D Perspective */}
            <motion.div
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ rotateY: 5, rotateX: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                transformStyle: 'preserve-3d',
                transformPerspective: 1000,
              }}
            >
              <Image
                src={HeroImage}
                alt="Students learning"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            {/* Floating Elements */}
            <FloatingElement
              icon={<GraduationCap className="w-8 h-8 text-yellow-400" />}
              initial={{ x: -50, y: -30 }}
              animate={{ y: [-30, -50, -30] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <FloatingElement
              icon={<BookOpen className="w-8 h-8 text-blue-400" />}
              initial={{ x: 50, y: -20 }}
              animate={{ y: [-20, -40, -20], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            
            <FloatingElement
              icon={<Star className="w-8 h-8 text-purple-400" />}
              initial={{ x: -30, y: 50 }}
              animate={{ y: [50, 30, 50], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            
            <FloatingElement
              icon={<Globe className="w-8 h-8 text-green-400" />}
              initial={{ x: 40, y: 40 }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <FloatingElement
              icon={<BrainCircuit className="w-8 h-8 text-pink-400" />}
              initial={{ x: 0, y: 0 }}
              animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const FloatingElement = ({ icon, ...motionProps }) => (
  <motion.div
    className="absolute z-10 p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 shadow-lg"
    {...motionProps}
  >
    {icon}
  </motion.div>
)

export default Hero
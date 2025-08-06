'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { Globe, Award, Users, Sparkles } from 'lucide-react'

const stats = [
  { number: '500K+', label: 'Happy Learners', icon: <Users className="w-8 h-8" /> },
  { number: '200K+', label: 'Certificates Awarded', icon: <Award className="w-8 h-8" /> },
  { number: '120+', label: 'Countries Reached', icon: <Globe className="w-8 h-8" /> },
]

const parseNumber = (str) => {
  if (str.includes('K')) return parseFloat(str) * 1000
  if (str.includes('M')) return parseFloat(str) * 1000000
  return parseFloat(str)
}

const StatsSection = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-gray-950 to-gray-900">
      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              opacity: Math.random() * 0.3 + 0.1,
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

      {/* Animated Gradients */}
      <motion.div
        className="absolute -top-40 -left-40 w-[800px] h-[800px] opacity-20"
        animate={{
          background: [
            'radial-gradient(circle, rgba(101, 163, 13, 0.5) 0%, rgba(0,0,0,0) 70%)',
            'radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, rgba(0,0,0,0) 70%)',
            'radial-gradient(circle, rgba(220, 38, 38, 0.5) 0%, rgba(0,0,0,0) 70%)',
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <motion.div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] opacity-20"
        animate={{
          background: [
            'radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, rgba(0,0,0,0) 70%)',
            'radial-gradient(circle, rgba(220, 38, 38, 0.5) 0%, rgba(0,0,0,0) 70%)',
            'radial-gradient(circle, rgba(101, 163, 13, 0.5) 0%, rgba(0,0,0,0) 70%)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-600/20 to-purple-600/20 border border-green-400/30 mb-6"
          >
            <Sparkles className="w-5 h-5 mr-2 text-green-400" />
            <span className="font-medium text-green-400">GLOBAL IMPACT</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white"
          >
            Our Learning Revolution
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Join millions transforming their lives through our innovative education platform
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-b from-gray-900/50 to-gray-800/30 backdrop-blur-md border border-gray-800 shadow-xl"
            >
              {/* Animated Card Background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ background: 'conic-gradient(from 0deg, transparent, transparent, transparent, transparent)' }}
                whileHover={{
                  background: 'conic-gradient(from 0deg, rgba(101, 163, 13, 0.3), rgba(124, 58, 237, 0.3), rgba(101, 163, 13, 0.3), rgba(124, 58, 237, 0.3))',
                  transition: { duration: 2, repeat: Infinity }
                }}
              />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-purple-600 flex items-center justify-center text-white mb-6 mx-auto group-hover:rotate-[360deg] transition-transform duration-700">
                  {stat.icon}
                </div>
                
                <div className="text-5xl font-extrabold mb-3 text-center">
                  <CountUp
                    end={parseNumber(stat.number)}
                    duration={2.5}
                    separator=","
                    suffix={stat.number.includes('+') ? '+' : ''}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400"
                  />
                </div>
                
                <div className="text-xl font-medium text-center text-gray-300 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
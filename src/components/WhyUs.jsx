"use client"
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, BookOpenCheck, MonitorSmartphone, Sparkles } from 'lucide-react'

const features = [
  {
    icon: <GraduationCap />,
    title: 'Expert Tutors',
    description: 'Learn directly from experienced industry professionals who care about your progress.',
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    icon: <BookOpenCheck />,
    title: 'Comprehensive Curriculum',
    description: 'Well-structured content covering real-world projects, assessments, and guided sessions.',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    icon: <MonitorSmartphone />,
    title: 'Flexible Learning',
    description: 'Attend classes live or on your own schedule — with full access to all materials.',
    gradient: 'from-orange-500 to-pink-500',
  },
]

const WhyUs = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-gray-950 to-gray-900">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(124, 58, 237, 0.2) 0%, transparent 70%)',
            'radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 20%, rgba(236, 72, 153, 0.2) 0%, transparent 70%)',
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
            <span className="font-medium text-green-400">PREMIUM BENEFITS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white"
          >
            Why Learners Choose Us
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            The complete learning ecosystem designed for maximum knowledge retention
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r ${feature.gradient} transition-opacity duration-500`}
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 1 }}
              />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-full mb-6 mx-auto flex items-center justify-center text-white bg-gradient-to-r ${feature.gradient} group-hover:rotate-[360deg] transition-transform duration-700`}>
                  {React.cloneElement(feature.icon, { size: 28 })}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-center text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-white to-gray-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 text-center group-hover:text-white transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
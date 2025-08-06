"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, animate } from 'framer-motion'
import { User, BookOpen, GraduationCap, Monitor, MessageCircle, Award } from 'lucide-react'
import Globe from "../../public/0a44fb26-5ef7-47c3-8ee3-4e977448eaef.jpg"

const faqData = [
  {
    question: 'What exactly is EduLink?',
    answer: 'EduLink is not a marketplace like Udemy. Instead, we help students connect directly with instructors, manage sessions, assign tasks, and collaborate — all in one place.',
    icon: <User className="w-5 h-5" />
  },
  {
    question: 'Can I sell my course materials on EduLink?',
    answer: 'Yes. Instructors can upload and sell content, manage classrooms, and provide interactive sessions to their students.',
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    question: 'Is EduLink free for students?',
    answer: 'Students can sign up for free and join classrooms. Some features or classes may be paid depending on the tutor.',
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    question: 'Do tutors get paid through EduLink?',
    answer: 'Yes. Tutors receive payments for sessions or course content they sell, with flexible pricing and secure transactions.',
    icon: <Monitor className="w-5 h-5" />
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const globeRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const smoothX = useSpring(x, { damping: 20, stiffness: 300 })
  const smoothY = useSpring(y, { damping: 20, stiffness: 300 })

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (globeRef.current) {
        const rect = globeRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        setMousePosition({
          x: (e.clientX - centerX) / 20,
          y: (e.clientY - centerY) / 20
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    animate(x, mousePosition.x)
    animate(y, mousePosition.y)
  }, [mousePosition, x, y])

  const orbitingIcons = [
    { icon: <User className="w-6 h-6" />, color: "text-blue-400" },
    { icon: <BookOpen className="w-6 h-6" />, color: "text-purple-400" },
    { icon: <GraduationCap className="w-6 h-6" />, color: "text-green-400" },
    { icon: <Monitor className="w-6 h-6" />, color: "text-yellow-400" },
    { icon: <MessageCircle className="w-6 h-6" />, color: "text-pink-400" },
    { icon: <Award className="w-6 h-6" />, color: "text-red-400" },
  ]

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about our platform and how it works.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* FAQ Items */}
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`border border-gray-700 rounded-2xl p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/30 backdrop-blur-md cursor-pointer hover:border-blue-400 transition-all ${openIndex === index ? 'border-blue-400' : ''}`}
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-orange-600">{item.question}</h3>
                  </div>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className="text-2xl"
                  >
                    {openIndex === index ? '-' : '+'}
                  </motion.span>
                </div>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 text-gray-300"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>

          {/* 3D Globe with Orbiting Icons */}
          <div className="hidden lg:flex justify-center">
            <motion.div 
              className="relative w-[400px] h-[400px]"
              ref={globeRef}
              style={{
                x: smoothX,
                y: smoothY
              }}
            >
              {/* Globe */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-64 h-64 rounded-full overflow-hidden border-2 border-blue-400/30 shadow-xl"
                  animate={{
                    rotateY: [0, 360],
                    boxShadow: [
                      '0 0 60px rgba(96, 165, 250, 0.3)',
                      '0 0 90px rgba(168, 85, 247, 0.4)',
                      '0 0 60px rgba(96, 165, 250, 0.3)'
                    ]
                  }}
                  transition={{
                    rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                    boxShadow: { duration: 8, repeat: Infinity, repeatType: "reverse" }
                  }}
                >
                  <Image
                    src={Globe} // Replace with your globe image path
                    alt="Globe"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>

              {/* Orbiting Icons */}
              {orbitingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute top-0 left-0 w-12 h-12 rounded-full flex items-center justify-center ${item.color} bg-gray-900 border border-gray-700 shadow-lg`}
                  animate={{
                    x: [0, Math.sin(index * 1.047) * 180, 0],
                    y: [0, Math.cos(index * 1.047) * 180, 0],
                    rotateZ: [0, 360],
                  }}
                  transition={{
                    duration: 12 + index,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
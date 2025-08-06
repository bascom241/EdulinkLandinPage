import React from 'react'
import { Star, Clock, Users, BookOpen, Zap } from 'lucide-react'

const classrooms = [
  {
    title: 'Frontend Mastery by Sarah A.',
    description: 'Master HTML, CSS & React with weekly live coding sessions, real-world projects, and 1:1 feedback.',
    rating: '4.9',
    students: '1.2k',
    duration: '8 weeks',
    category: 'Web Dev',
    featured: true,
  },
  {
    title: 'Backend Bootcamp by John D.',
    description: 'Build scalable APIs with Node.js, Express & MongoDB. Includes AWS deployment & performance tuning.',
    rating: '4.8',
    students: '950',
    duration: '6 weeks',
    category: 'Backend',
  },
  {
    title: 'UX Design Studio by Mia K.',
    description: 'From Figma to prototypes—learn UI/UX best practices with live design critiques & portfolio reviews.',
    rating: '4.7',
    students: '800',
    duration: '5 weeks',
    category: 'Design',
  },
  {
    title: 'React Native for Beginners by Leo G.',
    description: 'Zero to app in 4 weeks. Cross-platform mobile development with Firebase integration.',
    rating: '4.6',
    students: '1.5k',
    duration: '4 weeks',
    category: 'Mobile',
  },
  {
    title: 'Crack DSA with Tobi M.',
    description: 'Ace coding interviews with LeetCode patterns, system design breakdowns & mock whiteboarding.',
    rating: '4.9',
    students: '2.3k',
    duration: '10 weeks',
    category: 'Algorithms',
  },
  {
    title: 'Cloud & DevOps with Jane S.',
    description: 'Hands-on AWS, Docker, Kubernetes & CI/CD pipelines. Deploy real microservices with monitoring.',
    rating: '4.8',
    students: '1.1k',
    duration: '7 weeks',
    category: 'DevOps',
  },
]

const TopClassrooms = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Top Classrooms
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Learn from industry experts with hands-on projects and live mentorship.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classrooms.map((classroom, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-2xl p-6 shadow-xl transition-all duration-500 hover:shadow-2xl ${classroom.featured ? 'border-2 border-yellow-400' : 'border border-gray-700'} bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700`}
          >
            {classroom.featured && (
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                <Zap className="w-3 h-3 mr-1" /> Featured
              </div>
            )}
            
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold mr-4">
                {classroom.category.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{classroom.title}</h3>
                <p className="text-sm text-gray-400">{classroom.category}</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">{classroom.description}</p>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm text-gray-400">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                {classroom.rating}
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Users className="w-4 h-4 text-blue-400 mr-1" />
                {classroom.students}
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Clock className="w-4 h-4 text-purple-400 mr-1" />
                {classroom.duration}
              </div>
            </div>
            
            <button className="mt-6 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all transform group-hover:-translate-y-1">
              Join Classroom
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TopClassrooms
import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Jane Doe',
    comment: 'This platform helped me land my first tech job. The instructors are super supportive!',
    rating: 5,
  },
  {
    name: 'Ahmed Yusuf',
    comment: 'The courses are well-structured and easy to follow. I recommend it to all beginners.',
    rating: 4,
  },
  {
    name: 'Chloe Smith',
    comment: 'I love the flexibility of learning on my own schedule. Amazing content!',
    rating: 5,
  },
]

const Comment = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12">What Users Are Saying</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md text-left hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-yellow-500 mr-1" />
                ))}
                {[...Array(5 - item.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-gray-300 mr-1" />
                ))}
              </div>
              <p className="text-gray-800 mb-4 italic">"{item.comment}"</p>
              <p className="font-semibold text-gray-700">— {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Comment

'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const benefits = [
  'Built with Next.js 14 and React 18',
  'TypeScript for type safety',
  'Tailwind CSS for styling',
  'Framer Motion for animations',
  'Fully responsive design',
  'SEO optimized',
  'Accessibility compliant',
  'Performance optimized',
]

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built with Modern
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                Best Practices
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              This landing page demonstrates industry-standard practices for
              building modern web applications. From performance optimization to
              accessibility, every aspect has been carefully considered.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-gray-400">{'// Modern Stack'}</div>
                  <div>
                    <span className="text-purple-600">const</span>{' '}
                    <span className="text-blue-600">stack</span> ={' '}
                    <span className="text-green-600">[</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-yellow-600">&apos;Next.js&apos;</span>,<br />
                    <span className="text-yellow-600">&apos;TypeScript&apos;</span>,<br />
                    <span className="text-yellow-600">&apos;Tailwind CSS&apos;</span>,<br />
                    <span className="text-yellow-600">&apos;Framer Motion&apos;</span>
                  </div>
                  <div>
                    <span className="text-green-600">]</span>;
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Smartphone, Globe, Code, Heart } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Optimized for performance with Next.js server-side rendering and static generation.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description:
      'Built with security best practices and modern authentication patterns.',
  },
  {
    icon: Smartphone,
    title: 'Fully Responsive',
    description:
      'Perfect experience on all devices, from mobile phones to large desktops.',
  },
  {
    icon: Globe,
    title: 'SEO Optimized',
    description:
      'Server-side rendering ensures excellent search engine visibility.',
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description:
      'Clean code, TypeScript support, and comprehensive documentation.',
  },
  {
    icon: Heart,
    title: 'Accessible',
    description:
      'WCAG 2.1 compliant with keyboard navigation and screen reader support.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build modern, scalable web applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}


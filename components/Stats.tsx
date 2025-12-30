'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '99%', label: 'Uptime' },
  { value: '50ms', label: 'Avg Response' },
  { value: '100+', label: 'Happy Clients' },
  { value: '24/7', label: 'Support' },
]

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.div
        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {value}
      </motion.div>
      <div className="text-gray-600 text-lg font-medium">{label}</div>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <Counter key={index} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}


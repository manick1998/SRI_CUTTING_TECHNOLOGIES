'use client'

import { motion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'none'

const offset: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 40 },
  right: { x: -40 },
  scale: { scale: 0.94 },
  none: {},
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'span' | 'section'
}) {
  const o = offset[direction]
  const variants: Variants = {
    hidden: { opacity: 0, x: o.x ?? 0, y: o.y ?? 0, scale: o.scale ?? 1 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </MotionTag>
  )
}

export function Stagger({
  children,
  className,
  delayChildren = 0.05,
  staggerChildren = 0.09,
}: {
  children: ReactNode
  className?: string
  delayChildren?: number
  staggerChildren?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren, staggerChildren } },
      }}
    >
      {children}
    </motion.div>
  )
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}

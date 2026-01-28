'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

interface Logo3DProps {
  size?: number
}

export default function Logo3D({ size = 280 }: Logo3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const lastPosition = useRef({ x: 0, y: 0 })

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    lastPosition.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const deltaX = e.clientX - lastPosition.current.x
    const deltaY = e.clientY - lastPosition.current.y

    setRotation(prev => ({
      x: prev.x - deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
    }))

    lastPosition.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    lastPosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const deltaX = e.touches[0].clientX - lastPosition.current.x
    const deltaY = e.touches[0].clientY - lastPosition.current.y

    setRotation(prev => ({
      x: prev.x - deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
    }))

    lastPosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Auto rotate when not dragging
  useEffect(() => {
    if (isDragging) return

    const interval = setInterval(() => {
      setRotation(prev => ({
        x: prev.x,
        y: prev.y + 0.3,
      }))
    }, 16)

    return () => clearInterval(interval)
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative select-none w-full h-full"
      style={{
        perspective: '1000px',
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-full bg-primary-500/20 blur-3xl transition-opacity duration-300"
        style={{ opacity: isDragging ? 0.6 : 0.3 }}
      />

      {/* 3D Rotating Logo */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isDragging ? 'none' : 'transform 0.1s ease-out',
        }}
      >
        <Image
          src="/images/logo.png"
          alt="Keizer Logistics BV"
          width={size}
          height={size}
          className="object-contain drop-shadow-2xl pointer-events-none w-full h-full"
          draggable={false}
          priority
        />
      </div>

      {/* Shadow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-2/3 h-4 md:h-6 bg-black/15 rounded-full blur-xl transition-all duration-150"
        style={{
          bottom: '-10px',
          transform: `translateX(-50%) scale(${isDragging ? 1.1 : 1})`,
          opacity: isDragging ? 0.3 : 0.15,
        }}
      />

    </div>
  )
}

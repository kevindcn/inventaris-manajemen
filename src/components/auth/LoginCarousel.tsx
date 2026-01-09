"use client"

import React, { useState, useEffect } from "react"

interface CarouselSlide {
  title: string
  description: string
  cards: React.ReactNode
}

const BalanceCard = () => (
  <div className="bg-white rounded-lg p-4 shadow-sm">
    <div className="text-blue-600 text-2xl mb-2">💳</div>
    <p className="text-xs text-gray-500 mb-1">CURRENT BALANCE</p>
    <p className="text-lg font-bold text-gray-900">$24,359</p>
  </div>
)

const TransactionCard = () => (
  <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center">
    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mb-2">
      +
    </div>
    <p className="text-xs text-gray-600 text-center">New transaction</p>
    <p className="text-xs text-gray-500">or upload .xls file</p>
  </div>
)

const ChartCard = () => (
  <div className="bg-white rounded-lg p-4 shadow-sm">
    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 via-yellow-400 to-green-500 mx-auto flex items-center justify-center">
      <div className="text-center">
        <p className="text-sm font-bold text-gray-900">34%</p>
        <p className="text-xs text-gray-600">Food</p>
      </div>
    </div>
  </div>
)

const slides: CarouselSlide[] = [
  {
    title: "Welcome back!",
    description: "Start managing your finance faster and better\nStart managing your finance faster and better",
    cards: (
      <div className="grid grid-cols-3 gap-3">
        <BalanceCard />
        <TransactionCard />
        <ChartCard />
      </div>
    ),
  },
  {
    title: "Smart Analytics",
    description: "Get insights into your spending patterns and trends",
    cards: (
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <p className="text-xs text-gray-500 mb-2">TOTAL SPEND</p>
          <p className="text-lg font-bold text-gray-900">$5,420</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <p className="text-xs text-gray-500 mb-2">THIS MONTH</p>
          <p className="text-lg font-bold text-gray-900">+12.5%</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <p className="text-xs text-gray-500 mb-2">SAVINGS</p>
          <p className="text-lg font-bold text-gray-900">$8,230</p>
        </div>
      </div>
    ),
  },
  {
    title: "Manage Easily",
    description: "Organize your transactions and budgets effortlessly",
    cards: (
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <p className="text-2xl mb-1">📊</p>
          <p className="text-xs text-gray-600">Reports</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <p className="text-2xl mb-1">🎯</p>
          <p className="text-xs text-gray-600">Budgets</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <p className="text-2xl mb-1">📈</p>
          <p className="text-xs text-gray-600">Analytics</p>
        </div>
      </div>
    ),
  },
]

export default function LoginCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-8">
      {/* Logo */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 text-blue-600">
          <div className="w-6 h-6 rounded-full border-2 border-blue-600"></div>
          <span className="text-sm font-semibold tracking-wide">INVENTARIS</span>
        </div>
      </div>

      {/* Carousel Content */}
      <div className="w-full max-w-sm">
        {/* Title & Description */}
        <div className="mb-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-1.5">
            {slides[currentSlide].title}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mb-6">
          {slides[currentSlide].cards}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={goToPrevious}
            className="text-gray-400 hover:text-gray-600 text-lg"
          >
            ‹
          </button>

          <div className="flex gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-gray-400 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="text-gray-400 hover:text-gray-600 text-lg"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

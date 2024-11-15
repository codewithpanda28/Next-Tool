'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, FileText, StickyNote } from 'lucide-react'
import { useState } from 'react'

export default function Component() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-16">
        {/* About Section */}
        <section className="text-center space-y-6">
          <h1 className="text-2xl font-bold">About this project</h1>
          <div className="w-32 h-32 mx-auto">
            <Image
              src="/placeholder.svg"
              alt="React Logo"
              width={128}
              height={128}
              className="animate-spin-slow"
            />
          </div>
          <p className="text-slate-300 leading-relaxed">
            A comprehensive project built with React and Next.js, showcasing modern web development practices
            and responsive design principles. This project demonstrates the use of various tools and technologies
            in creating a seamless user experience.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
            View Project
          </Button>
        </section>

        {/* Tools Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Tools</h2>
          <div className="grid gap-4">
            {[
              { icon: FileText, title: 'Todo List', description: 'Track your daily tasks' },
              { icon: StickyNote, title: 'Notes', description: 'Organize your thoughts' },
              { icon: Database, title: 'Database Explorer', description: 'Manage your data' }
            ].map((tool, index) => (
              <div
                key={index}
                className="transition-transform duration-200 ease-in-out"
                style={{ transform: hoveredCard === index ? 'scale(1.02)' : 'scale(1)' }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <tool.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{tool.title}</h3>
                      <p className="text-sm text-slate-300">{tool.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Contact me</h2>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-slate-700 rounded-full mx-auto flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <p className="text-slate-300">Feel free to contact me. You can reach out anytime</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Resume', 'GitHub', 'LinkedIn', 'Portfolio', 'Email'].map((item, index) => (
                  <Button key={index} variant="outline" className="border-slate-700 hover:text-white hover:bg-slate-800 transition-colors duration-200">
                    {item}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, FileText, StickyNoteIcon as Note } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-16">
        {/* About Section */}
        <section className="text-center space-y-6">
          <h1 className="text-2xl font-bold">About this project</h1>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 mx-auto"
          >
            <Image
              src="/placeholder.svg"
              alt="React Logo"
              width={128}
              height={128}
              className="animate-spin-slow"
            />
          </motion.div>
          <p className="text-slate-300 leading-relaxed">
            A comprehensive project built with React and Next.js, showcasing modern web development practices
            and responsive design principles. This project demonstrates the use of various tools and technologies
            in creating a seamless user experience.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            View Project
          </Button>
        </section>

        {/* Tools Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Tools</h2>
          <div className="grid gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Todo List</h3>
                    <p className="text-sm text-slate-300">Track your daily tasks</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Note className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Notes</h3>
                    <p className="text-sm text-slate-300">Organize your thoughts</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Database Explorer</h3>
                    <p className="text-sm text-slate-300">Manage your data</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
              <p className="text-slate-300">Get free to contact me. You can write me anytime</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Button variant="outline" className="border-slate-700 hover:bg-slate-800">
                  Resume
                </Button>
                <Button variant="outline" className="border-slate-700 hover:bg-slate-800">
                  GitHub
                </Button>
                <Button variant="outline" className="border-slate-700 hover:bg-slate-800">
                  LinkedIn
                </Button>
                <Button variant="outline" className="border-slate-700 hover:bg-slate-800">
                  Portfolio
                </Button>
                <Button variant="outline" className="border-slate-700 hover:bg-slate-800">
                  Email
                </Button>
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
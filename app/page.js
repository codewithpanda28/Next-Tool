"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, FileText, StickyNote } from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
   <div className="bg-gradient-to-br from-slate-800 via-gray-700 to-zinc-800 text-white overflow-hidden">
      <div className="h-full max-w-4xl mx-auto px-6 py-8 flex flex-col justify-between">
        {/* About Section */}
        <section className="mt-[-30px] text-center space-y-6">
          <h1 className="text-3xl font-bold text-center text-white p-4 transition-all duration-300 rounded-lg shadow-lg transform hover:scale-105">
            About this project
          </h1>
<div 
  className="w-32 h-32 mx-auto relative group perspective-[1200px]"
  onMouseMove={(e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = -(x - centerX) / 10;
    
    target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  }}
>
  <div className="relative w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full p-1.5 
    transform-gpu
    transition-all duration-500 ease-out
    [transform-style:preserve-3d] 
    group-hover:scale-110">
    
    <div className="w-full h-full bg-slate-950 rounded-full p-2 
      [transform-style:preserve-3d]
      transition-transform duration-500
      group-hover:[transform:translateZ(30px)]">
      <Image
        src="/aboutlogo.jpg"
        alt="React Logo" 
        width={128}
        height={128}
        className="w-full h-full rounded-full object-cover 
          transition-all duration-500
          [transform-style:preserve-3d] 
          group-hover:[transform:translateZ(20px)]
          group-hover:scale-105"
      />
    </div>
  </div>

</div>
    <p className="text-gray-200 leading-relaxed max-w-2xl mx-auto animate-fade-in hover:text-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg p-4 rounded-lg backdrop-blur-sm ">
  A comprehensive project built with React and Next.js, showcasing
  modern web development practices and responsive design principles.
</p>
          <Link href="#">
        <Button className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 
hover:from-pink-600 hover:via-purple-500 hover:to-violet-600
hover:scale-110 hover:shadow-xl hover:shadow-purple-500/50 
transform-gpu transition-all duration-300 
px-8 py-3 rounded-full 
text-white font-bold 
animate-[pulse_2s_ease-in-out_infinite] 
border-2 border-purple-300/20 backdrop-blur-sm
mt-8">
  ✨ View Project ✨
</Button>
          </Link>
        </section>

{/* Tools Section */}
<section className="space-y-6 perspective-1000 flex flex-col items-center">
<h2 className="mt-7 mb-6 text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 hover:from-orange-500 hover:via-rose-500 hover:to-purple-600 transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-1 animate-gradient-x hover:animate-pulse cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 tracking-wider">
  Tools
</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transform-style-3d max-w-7xl mx-auto place-items-center">
    {[
      {
        icon: FileText,
        title: "Todo List", 
        description: "Track your daily tasks",
        gradient: "from-pink-500 to-purple-500",
        link: "https://todoai-silk.vercel.app/?__vercel_draft=1" // Add link URL here
      },
      {
        icon: StickyNote,
        title: "Notes",
        description: "Organize your thoughts", 
        gradient: "from-orange-500 to-red-500",
        link: "https://noteai-site.vercel.app/" // Add link URL here
      },
 
    ].map((tool, index) => (
      <Link href={tool.link} key={index}>
        <div
          className="transform-style-3d transition-all duration-500 ease-out hover:scale-110 hover:rotate-y-12 flex justify-center items-center"
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Card className="h-[300px] w-[250px] bg-white/10 backdrop-blur-xl border-2 border-white/20 shadow-2xl hover:bg-white/15 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <CardContent className="flex flex-col items-center justify-center gap-4 p-8 relative overflow-hidden h-full">
              <div className={`p-4 bg-gradient-to-r ${tool.gradient} rounded-2xl transition-all duration-500 hover:scale-125 hover:rotate-12 shadow-lg`}>
                <tool.icon className="w-8 h-8 text-white animate-bounce" />
              </div>
              <div className="text-center z-10 transition-all duration-300 group">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300 mb-3 group-hover:scale-110">{tool.title}</h3>
                <p className="text-emerald-100 text-lg font-medium group-hover:text-white">
                  {tool.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 blur-3xl rounded-full animate-pulse" />
              <div className="absolute -top-20 -left-20 w-48 h-48 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl rounded-full animate-pulse" />
            </CardContent>
          </Card>
        </div>
      </Link>
    ))}
  </div>
</section>

{/* Contact Section */}
<section className="mb-5 mt-8 space-y-6">
<h2 className="text-3xl font-bold text-center text-white p-6 transition-all duration-300 rounded-lg shadow-lg transform hover:scale-105">
    Contact me
</h2>
  <Card className="bg-white/10 backdrop-blur-lg border-0 
    transform hover:scale-105 transition-transform duration-300
    hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
    rotate-x-12 hover:rotate-x-0
    perspective-1000">
    <CardContent className="p-8 text-center space-y-4">
      <p className="text-gray-200 text-lg transform hover:scale-105 transition-all duration-300
        animate-float">
        Feel free to contact me. You can reach out anytime
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        {[
          {
            name: "Resume",
            icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
            href: "/resume",
          },
          {
            name: "GitHub", 
            icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
            href: "https://github.com/codewithpanda28",
          },
          {
            name: "LinkedIn",
            icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0z",
            href: "https://linkedin.com/in/codewithpanda28",
          },
          {
            name: "Portfolio",
            icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            href: "/portfolio",
          },
       {
  name: "Email",
  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  href: "mailto:codewithpanda28@gmail.com?subject=Message from website&body=Hello,",
  onClick: () => {
    window.location.href = "mailto:codewithpanda28@gmail.com?subject=Message from website&body=Hello,";
  }
}
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : "_self"}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
          >
            <Button
              variant="outline"
              className="border border-white/20 
              hover:bg-gradient-to-r from-purple-500 to-pink-500
              transition-all duration-300 rounded-full px-6 py-2 
              flex items-center gap-2
              transform hover:scale-110 hover:rotate-2
              hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]
              active:scale-95 
              backdrop-blur-sm
              hover:border-white/40
              perspective-1000
              group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={item.icon}
                />
              </svg>
              {item.name}
            </Button>
          </Link>
        ))}
      </div>
    </CardContent>
  </Card>
</section>
      </div>
    </div>
  );
}

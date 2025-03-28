"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import EducationSection from "@/components/EducationSection"
import ExperienceSection from "@/components/ExperienceSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import Sidebar from "@/components/SideBar"
import CertificatesSection from "@/components/CertificatesSection"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -100px 0px", threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const isActive = (sectionId: string) => activeSection === sectionId

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar isActive={isActive}/>
      <main className="ml-[400px] w-full p-12 max-w-4xl">
        <section id="about" className="mb-20">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">About me</h2>
          <div className="space-y-4 text-slate-600">
            <p>
            I am a front-end developer focused on crafting accessible user interfaces that blend thoughtful design with robust engineering.
             My favorite work lies at the intersection of design and development,
             creating experiences that are not only visually appealing but also meticulously built for performance and usability.
            </p>
          </div>
        </section>

        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}


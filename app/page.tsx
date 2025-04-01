"use client"

import { ExternalLink, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"


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
    <div className="min-h-screen bg-slate-50 flex flex-col">
       <header className="w-full h-40 lg:h-60 relative overflow-hidden lg:hidden">
        <img
          src="https://i.ibb.co/zVjz39Dn/Frame-65-1.png"
          alt="Header background"
          className="w-full h-full object-cover object-center"
        />
      </header>
      
      <aside
        className={cn(
          "bg-white border-b lg:border-r border-slate-200",
          "lg:fixed lg:h-full lg:w-[400px]",
          "w-full p-6 lg:p-8 flex flex-col justify-between",
          "lg:overflow-y-auto",
        )}
      >
        <div className="space-y-4 lg:space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-4 lg:mb-0 border-2 border-blue-200 mx-auto lg:mx-0 flex-shrink-0">
              <img
                src="https://i.ibb.co/Q7WWcRF2/IMG-20250211-092635.jpg"
                alt="Gabriela Jussana"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center lg:text-left space-y-1">
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-800">Gabriela Jussana</h1>
              <h2 className="text-lg text-slate-600">Desenvolvedora Front-end</h2>
            </div>
          </div>

          <p className="text-center lg:text-left text-slate-600 text-sm lg:text-base">
            Transformando ideias em experiências digitais acessíveis, rápidas e visualmente impactantes
          </p>

          <nav className="pt-4 hidden lg:block lg:pt-8">
            <ul className="flex flex-wrap lg:flex-col gap-2 lg:gap-4">
              <li className="lg:w-full">
                <Link
                  href="#about"
                  className={cn(
                    "block px-3 py-1 lg:px-4 lg:py-2 rounded-md transition-colors text-sm lg:text-base",
                    isActive("about")
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "text-slate-800 hover:text-blue-500 hover:bg-blue-50",
                    "lg:w-full",
                  )}
                >
                  Sobre
                </Link>
              </li>
              <li className="lg:w-full">
                <Link
                  href="#education"
                  className={cn(
                    "block px-3 py-1 lg:px-4 lg:py-2 rounded-md transition-colors text-sm lg:text-base",
                    isActive("education")
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "text-slate-800 hover:text-blue-500 hover:bg-blue-50",
                    "lg:w-full",
                  )}
                >
                  Formação
                </Link>
              </li>
              <li className="lg:w-full">
                <Link
                  href="#experience"
                  className={cn(
                    "block px-3 py-1 lg:px-4 lg:py-2 rounded-md transition-colors text-sm lg:text-base",
                    isActive("experience")
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "text-slate-800 hover:text-blue-500 hover:bg-blue-50",
                    "lg:w-full",
                  )}
                >
                  Experiência
                </Link>
              </li>
              <li className="lg:w-full">
                <Link
                  href="#projects"
                  className={cn(
                    "block px-3 py-1 lg:px-4 lg:py-2 rounded-md transition-colors text-sm lg:text-base",
                    isActive("projects")
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "text-slate-800 hover:text-blue-500 hover:bg-blue-50",
                    "lg:w-full",
                  )}
                >
                  Projetos
                </Link>
              </li>
              <li className="lg:w-full">
                <Link
                  href="#contact"
                  className={cn(
                    "block px-3 py-1 lg:px-4 lg:py-2 rounded-md transition-colors text-sm lg:text-base",
                    isActive("contact")
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "text-slate-800 hover:text-blue-500 hover:bg-blue-50",
                    "lg:w-full",
                  )}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="justify-center lg:justify-start flex space-x-4 mt-6 lg:mt-0">
          <Button variant="ghost" size="icon" asChild aria-label="GitHub">
            <Link href="https://www.github.com/gabrielajussana" className="text-slate-700 hover:text-blue-500">
              <Github size={20} />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
            <Link href="https://www.linkedin.com/in/gabrielajussana" className="text-slate-700 hover:text-blue-500">
              <Linkedin size={20} />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="Email">
            <Link href="mailto:gabrielajussana@gmail.com" className="text-slate-700 hover:text-blue-500">
              <Mail size={20} />
            </Link>
          </Button>
        </div>
      </aside>

      <main className="w-full lg:ml-[400px] p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
        <section id="about" className="mb-12 lg:mb-20 pt-6 lg:pt-0">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4 lg:mb-6">Sobre Mim</h2>
          <div className="space-y-4 text-slate-600">
            <p>
              Sou uma desenvolvedora front-end focada em criar interfaces de usuário acessíveis que combinam design
              cuidadoso e engenharia robusta. Meu trabalho favorito está na interseção entre design e desenvolvimento,
              criando experiências que não apenas parecem ótimas, mas são meticulosamente construídas para performance e
              usabilidade.
            </p>
          </div>
        </section>

        <section id="education" className="mb-12 lg:mb-20">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4 lg:mb-6">Formação</h2>
          <div className="space-y-6 lg:space-y-8">
            <div className="border-l-2 border-blue-200 pl-4 sm:pl-6 relative">
              <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[7px] top-1"></div>
              <h3 className="text-base sm:text-lg font-medium text-slate-800">Bacharelado em Ciência da Computação</h3>
              <p className="text-slate-600">Centro Universitário dos Guararapes - UNIFG</p>
              <p className="text-slate-500 text-sm">2020 - 2023</p>
            </div>

            <div className="border-l-2 border-blue-200 pl-4 sm:pl-6 relative">
              <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[7px] top-1"></div>
              <h3 className="text-base sm:text-lg font-medium text-slate-800">Pós-graduação em Teste de Software</h3>
              <p className="text-slate-600">Universidade Federal de Pernambuco - CIn UFPE</p>
              <p className="text-slate-500 text-sm">2024 - 2025</p>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-12 lg:mb-20">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4 lg:mb-6">Experiência</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-blue-200 pl-4 sm:pl-6 relative">
              <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[7px] top-1"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-slate-800">Desenvolvedora Front-End</h3>
                  <p className="text-blue-500 font-medium">VenturiX Solutions</p>
                </div>
                <p className="text-slate-500 text-sm mt-1 sm:mt-0">Ago 2022 - Mar 2024</p>
              </div>
              <ul className="mt-4 space-y-2 text-slate-600 list-disc pl-5">
                <li>Desenvolvimento e manutenção de componentes UI reutilizáveis</li>
                <li>Desenvolvimento de sites responsivos para diversos clientes</li>
                <li>Implementação de designs usando React, Vue.js, Next.js, TypeScript e JavaScript</li>
                <li className="hidden sm:block">Otimização de performance e tempo de carregamento</li>
                <li className="hidden sm:block">Colaboração com designers e desenvolvedores back-end</li>
                <li className="hidden sm:block">Integração com CMS e APIs de terceiros</li>
                <li className="hidden sm:block">Participação em reuniões com clientes para entender requisitos</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 mt-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">TypeScript</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Next.js</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Tailwind CSS</span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  JavaScript
                </span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  Kanban
                </span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  SCRUM
                </span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  Axios
                </span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  Postman
                </span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  Vue.js
                </span>
              </div>
            </div>

            <div className="border-l-2 border-blue-200 pl-4 sm:pl-6 relative">
              <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[7px] top-1"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-slate-800">Residente em Teste de Software</h3>
                  <p className="text-blue-500 font-medium">Lenovo Company - Projeto CIn / Motorola</p>
                </div>
                <p className="text-slate-500 text-sm mt-1 sm:mt-0">Abr 2024 - Mar 2025</p>
              </div>
              <ul className="mt-4 space-y-2 text-slate-600 list-disc pl-5">
                <li>Experiência com APIs utilizando .NET e desenvolvimento frontend para sistemas web</li>
                <li>Utilização de ferramentas ágeis como Figma e Miro em projetos de pós-graduação</li>
                <li className="hidden sm:block">Proficiente no uso do JIRA para rastreamento de problemas</li>
                <li className="hidden sm:block">
                  Habilidades de comunicação eficazes para relatar bugs e problemas identificados durante testes manuais
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 mt-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Jira</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Selenium</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">API Rest</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">C#</span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  ASP .NET Core
                </span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  Java
                </span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  Python
                </span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  Figma
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-12 lg:mb-20">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4 lg:mb-6">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <h3 className="text-base sm:text-lg font-medium text-slate-800 mb-2">Skill Up</h3>
              <p className="text-slate-600 mb-4">
                O projeto SkillUp permite que os participantes construam portfólios interativos e visuais, com métricas
                de progresso. Focada no trabalho em equipe, ela conecta portfólios de forma colaborativa
                <span className="hidden sm:inline">, criando uma rede de evolução conjunta</span>.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">TypeScript</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Next.js</span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  Tailwind CSS
                </span>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="text-slate-700" asChild>
                  <Link href="https://github.com/RapportFlow/SkillUp_frontend" target="_blank">
                    <Github size={16} className="mr-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <h3 className="text-base sm:text-lg font-medium text-slate-800 mb-2">My Pet</h3>
              <p className="text-slate-600 mb-4">
              Landing Page para uma ONG fictícia de adoção de cachorros. Dados consumidos da Dog API.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">JavaScript</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">React Router</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Styled Components</span>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="text-slate-700" asChild>
                  <Link href="https://github.com/gabrielajussana/MyPet" target="_blank">
                    <Github size={16} className="mr-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="text-slate-700" asChild>
                  <Link href="https://ongmypet.netlify.app" target="_blank">
                    <ExternalLink size={16} className="mr-2" />
                  </Link>
                </Button>
              </div>
            </div>


          </div>
        </section>

        <section id="contact" className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4 lg:mb-6">Contato</h2>
          <p className="text-slate-600 mb-4 lg:mb-6">
            Estou sempre aberta a novas oportunidades e colaborações. Se você tem um projeto em mente ou apenas quer
            dizer olá, sinta-se à vontade para entrar em contato!
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white" asChild>
            <Link href="mailto:gabrielajussana@gmail.com">Enviar Email</Link>
          </Button>
        </section>

        <footer className="text-center text-slate-500 text-sm pt-8 lg:pt-10 pb-4 border-t border-slate-200">
          <p>© {new Date().getFullYear()} Gabriela Jussana. Todos os direitos reservados.</p>
          <p className="mt-1">Desenvolvido com Next.js e Tailwind CSS</p>
        </footer>
      </main>
    </div>
  )
}


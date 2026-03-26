"use client"

import { ExternalLink, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"


export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const router = useRouter()
  const pathname = usePathname()

  const isEnglish = pathname.includes("/english")

  const changeLang = (lang: "pt" | "en") => {
    if (lang === "pt") {
      router.push("/")
    } else {
      router.push("/english")
    }
  }


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
              <h2 className="text-lg text-slate-600">Engenheira de Testes</h2>
            </div>
          </div>

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
                  Educação
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

            <div className="flex items-center bg-gray-200 rounded-full p-1 w-fit shadow-sm">
              <button
                onClick={() => changeLang("pt")}
                className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                  !isEnglish
                    ? "bg-white text-blue-600 shadow"
                    : "text-gray-600"
                }`}
              >
                PT
              </button>

              <button
                onClick={() => changeLang("en")}
                className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                  isEnglish
                    ? "bg-white text-blue-600 shadow"
                    : "text-gray-600"
                }`}
              >
                EN
              </button>
            </div>
        </div>
      </aside>

      <main className="w-full lg:ml-[400px] p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
        <section id="about" className="mb-12 lg:mb-20 pt-6 lg:pt-0">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4 lg:mb-6">Sobre mim</h2>
          <div className="space-y-4 text-slate-600">
            <p>
              Sou uma engenheira de testes especializada em garantir a qualidade, desempenho e confiabilidade de aplicações web.
               Com pós-graduação em Engenharia de Testes de Software, atuo no desenvolvimento de testes automatizados que validam desde a experiência do usuário até a lógica mais profunda da aplicação.
            </p>
          </div>
        </section>

        <section id="education" className="mb-12 lg:mb-20">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4 lg:mb-6">Educação</h2>
          <div className="space-y-6 lg:space-y-8">
          <div className="border-l-2 border-blue-200 pl-4 sm:pl-6 relative">
            <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[7px] top-1"></div>
            <h3 className="text-base sm:text-lg font-medium text-slate-800">Bacharelado em Ciência da Computação</h3>
            <p className="text-slate-600">Centro Universitário dos Guararapes - UNIFG</p>
            <p className="text-slate-500 text-sm">2020 - 2023</p>
          </div>

          <div className="border-l-2 border-blue-200 pl-4 sm:pl-6 relative">
            <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[7px] top-1"></div>
            <h3 className="text-base sm:text-lg font-medium text-slate-800">Pós-graduação em Engenharia de Software com foco em Análise de Testes</h3>
            <p className="text-slate-600">Universidade Federal de Pernambuco- CIn UFPE</p>
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
                  <h3 className="text-base sm:text-lg font-medium text-slate-800">Test Automation Eng Analyst</h3>
                  <p className="text-blue-500 font-medium">Accenture</p>
                </div>
                <p className="text-slate-500 text-sm mt-1 sm:mt-0">Set 2025 - atualmente</p>
              </div>
              <ul className="mt-4 space-y-2 text-slate-600 list-disc pl-5">
                  <li>Executei de testes funcionais em portal web no contexto PTP, garantindo a qualidade dos fluxos de compras, pagamentos e integrações</li>
                  <li>Utilizei Pipefy para gestão de demandas, registro de evidências e acompanhamento do ciclo de testes</li>
                  <li>Criei cenários de teste utilizando BDD (Gherkin), com gestão e rastreabilidade por meio do Xray integrado ao Jira</li>
                  <li>Executei de testes funcionais em ambiente Salesforce, incluindo validação de respostas de IA (Agentforce) por meio de testes baseados em prompts e análise de comportamento</li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-4 mt-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Jira</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Testes de Software</span>
                 <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Gherkin</span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  Salesforce
                </span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  IA
                </span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  AgentForce
                </span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  PTP
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
                <li>Executei testes manuais e exploratórios para garantir a qualidade do software</li>
                <li>Colaborei com equipes multidisciplinares para identificar e documentar defeitos</li>
                <li>Habilidade de comunicação para reportar bugs e problemas identificados durante os testes</li>
                <li>Participei em revisões de casos de teste e na melhoria contínua dos processos de testes</li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-4 mt-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Jira</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Selenium</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Testes de Software</span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  PIT Mutantion Testing
                </span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  Java
                </span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  Python
                </span>
                <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  MSTest
                </span>
              </div>
            </div>

            <div className="border-l-2 border-blue-200 pl-4 sm:pl-6 relative">
              <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[7px] top-1"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-slate-800">Desenvolvedora Front-end</h3>
                  <p className="text-blue-500 font-medium">VenturiX Solutions</p>
                </div>
                <p className="text-slate-500 text-sm mt-1 sm:mt-0">Aug 2022 - Mar 2024</p>
              </div>
             <ul className="mt-4 space-y-2 text-slate-600 list-disc pl-5">
                <li>Desenvolvimento e manutenção de componentes de interface reutilizáveis</li>
                <li>Desenvolvimento de sites responsivos para diversos clientes</li>
                <li>Implementação de layouts utilizando React, Vue.js, Next.js, TypeScript e JavaScript</li>
                <li className="hidden sm:block">Otimização de desempenho e tempo de carregamento</li>
                <li className="hidden sm:block">Colaboração com designers e desenvolvedores back-end</li>
                <li className="hidden sm:block">Integração com CMS e APIs de terceiros</li>
                <li className="hidden sm:block">Participação em reuniões com clientes para entendimento de requisitos</li>
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

          </div>
        </section>

        <section id="projects" className="mb-12 lg:mb-20">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4 lg:mb-6">Projetos</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-4 bg-white items-center gap-4 p-2 sm:p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
             <div className="flex flex-col">
              <div className="flex justify-between">
                <h3 className="text-base sm:text-lg font-medium text-slate-800 mb-2">Cypress E2E Tests - AutomationExercise.com</h3>
                <div className="flex">
                <Button variant="outline" className="text-slate-700 p-0 h-10 w-10 border-none">
                  <Link
                    href="https://github.com/gabrielajussana/automationexercise-tests"
                    target="_blank"
                    className="flex items-center justify-center w-full h-full"
                  >
                    <Github size={16} />
                  </Link>
                </Button>
              </div>
              </div> 
              <p className="text-slate-600 mb-4 text-sm">
                Execução de um projeto de automação de testes end-to-end utilizando Cypress para validar os principais fluxos do site automationexercise.com,
                uma aplicação completa de e-commerce com funcionalidades como cadastro de usuário, login, carrinho, checkout e formulário de contato.
                Foram implementados testes funcionais com foco na experiência do usuário, validação de dados e comportamento esperado da aplicação,
                além da integração com CI para execução automatizada.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Cypress</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">JavaScript</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Git</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Mocha/Chai</span>
              </div>
             </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4 lg:mb-6">Contato</h2>
          <p className="text-slate-600 mb-4 lg:mb-6">
              Estou sempre aberta a novas oportunidades e colaborações.
              Se você tem um projeto em mente ou apenas quer dizer um oi, fique à vontade para entrar em contato!
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


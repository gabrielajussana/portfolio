// components/Sidebar.tsx
import { Github, Linkedin, Mail} from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

interface SidebarProps {
  isActive: (section: string) => boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isActive }) => {
  return (
    <aside className="fixed w-[400px] h-full bg-white p-8 flex flex-col justify-between border-r border-slate-200">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-slate-800">Gabriela Jussana</h1>
          <h2 className="text-xl text-slate-600">Frontend Developer</h2>
        </div>

        <p className="text-slate-600">
          I build beautiful, responsive, and accessible web experiences with modern technologies.
        </p>

        <nav className="pt-8">
          <ul className="space-y-4">
            <li>
              <Link
                href="#about"
                className={`block px-4 py-2 rounded-md transition-colors ${
                  isActive("about")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-slate-800 hover:text-blue-500 hover:bg-blue-50"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#education"
                className={`block px-4 py-2 rounded-md transition-colors ${
                  isActive("education")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-slate-800 hover:text-blue-500 hover:bg-blue-50"
                }`}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className={`block px-4 py-2 rounded-md transition-colors ${
                  isActive("experience")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-slate-800 hover:text-blue-500 hover:bg-blue-50"
                }`}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className={`block px-4 py-2 rounded-md transition-colors ${
                  isActive("projects")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-slate-800 hover:text-blue-500 hover:bg-blue-50"
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className={`block px-4 py-2 rounded-md transition-colors ${
                  isActive("contact")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-slate-800 hover:text-blue-500 hover:bg-blue-50"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex space-x-4">
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
  );
};

export default Sidebar;

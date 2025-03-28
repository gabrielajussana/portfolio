import React from 'react';
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"


import Link from 'next/link';

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  deployLink: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  technologies,
  githubLink,
  deployLink
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-medium text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <Button variant="default" size="sm" className="text-slate-700" asChild>
          <Link href={githubLink}>
            <Github size={16} className="mr-2" />
          </Link>
        </Button>
       {deployLink ??  <Button variant="default" size="sm" className="text-slate-700" asChild>
          <Link href={deployLink}>
            <ExternalLink size={16} className="mr-2" />
            Deploy
          </Link>
        </Button>}
      </div>
    </div>
  );
};

export default ProjectItem;

import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectsSection: React.FC = () => {
  const projectsData = [
    {
      title: 'Skill Up',
      description:
        'The SkillUp project allows participants to build interactive and visual portfolios, with progress metrics. Focused on teamwork, it connects portfolios collaboratively, creating a network of joint evolution.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      githubLink: 'https://github.com/RapportFlow/SkillUp_frontend', 
      deployLink:''
    },
  ];

  return (
    <section id="projects" className="mb-20">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            deployLink={project.deployLink}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

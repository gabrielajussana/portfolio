// components/ExperienceSection.tsx
import React from 'react';
import ExperienceItem from './ExperienceItem';

const ExperienceSection: React.FC = () => {
  const experienceData = [
    {
      title: "Frontend Developer",
      company: "VenturiX Solutions",
      period: "Aug 2022 - Mar 2024",
      tasks: [
        "Implemented designs using React, Next.js, Vue.js, JavaScript, and TypeScript",
        "Developed and maintained reusable UI components",
        "Integrated with CMS and third-party APIs",
        "Optimized performance and loading times",
        "Collaborated with designers and backend developers",
        "Participated in client meetings to understand requirements"
      ],
      technologies: ["React", "Vue.js", "Next.js", "JavaScript", "TypeScript", "Postman", "Axios", "Figma", "Scrum"]
    },
    {
      title: "Software Test Resident",
      company: "Lenovo Company - Projeto CIn / Motorola",
      period: "Apr 2024 - Mar 2025",
      tasks: [
        "Assist in manual and automated testing of software",
        "Experience with APIs using .NET and Frontend for web system development",
        "Utilization of agile tools such as Figma and Miro for postgraduate projects",
        "Proficient in using JIRA for issue tracking",
        "Effective communication skills to report bugs and issues identified during manual testing",
      ],
      technologies: ["Jira", "Selenium", "ASP .NET Core", "C#", "Python", "Java", "Figma" ]
    }
  ];

  return (
    <section id="experience" className="mb-20">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">Experience</h2>
      <div className="space-y-8">
        {experienceData.map((item, index) => (
          <ExperienceItem
            key={index}
            title={item.title}
            company={item.company}
            period={item.period}
            tasks={item.tasks}
            technologies={item.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

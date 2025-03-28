// components/ExperienceItem.tsx
import React from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  tasks: string[];
  technologies: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, period, tasks, technologies}) => {
  return (
    <div className="border-l-2 border-blue-200 pl-6 relative">
      <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[7px] top-1"></div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-slate-800">{title}</h3>
          <p className="text-blue-500 font-medium">{company}</p>
        </div>
        <p className="text-slate-500 text-sm">{period}</p>
      </div>
      <ul className="mt-4 space-y-2 text-slate-600 list-disc pl-5">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mb-4 mt-4">
        {technologies.map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;

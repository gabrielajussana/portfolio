
import React from 'react';

interface EducationItemProps {
  title: string;
  institution: string;
  period: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ title, institution, period }) => {
  return (
    <div className="border-l-2 border-blue-200 pl-6 relative">
      <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[7px] top-1"></div>
      <h3 className="text-lg font-medium text-slate-800">{title}</h3>
      <p className="text-slate-600">{institution}</p>
      <p className="text-slate-500 text-sm">{period}</p>
    </div>
  );
};

export default EducationItem;

import React from 'react';

interface CertificateItemProps {
  title: string;
  institution: string;
  date: string;
  skills: string[];
}

const CertificateItem: React.FC<CertificateItemProps> = ({ title, institution, date, skills }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      <p className="text-slate-600">{institution}</p>
      <p className="text-slate-500 text-sm">{date}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill, index) => (
          <span key={index} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CertificateItem;

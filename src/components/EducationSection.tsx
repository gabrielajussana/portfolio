import React from 'react';
import EducationItem from './EducationItem';

const EducationSection: React.FC = () => {
  const educationData = [
    {
      title: "Bachelor's Degree in Computer Science",
      institution: "Centro Universitário dos Guararapes - UNIFG",
      period: "2020 - 2023",
    },
    {
      title: "Specialization in Software Testing",
      institution: "Universidade Federal de Pernambuco - CIn UFPE",
      period: "2024 - 2025",
    }
  ];

  return (
    <section id="education" className="mb-20">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">Education</h2>
      <div className="space-y-8">
        {educationData.map((item, index) => (
          <EducationItem
            key={index}
            title={item.title}
            institution={item.institution}
            period={item.period}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;

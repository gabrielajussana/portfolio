import React from 'react';
import CertificateItem from './CertificateItem';

const CertificatesSection: React.FC = () => {
  const certificates = [
    {
      title: "Pensamento Computacional com Python",
      institution: "TIC em trilhas",
      date: "Fev de 2025",
      skills: ["Python", "Programação lógica"]
    },
    {
      title: "JavaScript Completo ES6",
      institution: "Origamid",
      date: "Jan de 2024",
      skills: []
    },
    {
      title: "TypeScript para Iniciantes",
      institution: "Origamid",
      date: "Dez de 2023",
      skills: []
    },
    {
      title: "Santader Bootcamp 2023 - Backend Java",
      institution: "Santander Universidades - Brasil",
      date: "Out de 2023",
      skills: []
    },
    {
      title: "React Completo",
      institution: "Origamid",
      date: "Mai de 2023",
      skills: []
    },
    {
      title: "Vue.js 2 Completo",
      institution: "Origamid",
      date: "Abr de 2023",
      skills: []
    },
    {
      title: "Trilha Especializar",
      institution: "Rocketseat",
      date: "Fev de 2023",
      skills: []
    },
    {
      title: "Trilha Fundamentar",
      institution: "Rocketseat",
      date: "Nov de 2022",
      skills: []
    },
    {
      title: "Hiring Coders #3 - Trilha de formação em VTEX IO, AWS, DevOps e Digital E-commerce",
      institution: "Gama Academy",
      date: "Jul de 2022",
      skills: []
    },
    {
      title: "Hiring Coders #3 - Trilha de Formação Full Stack",
      institution: "Gama Academy",
      date: "Jun de 2022",
      skills: []
    },
    {
      title: "Trilha Conectar",
      institution: "Rocketseat",
      date: "Mai de 2022",
      skills: []
    },
    {
      title: "HTML Web Developer",
      institution: "DIO",
      date: "Out de 2021",
      skills: []
    },
    {
      title: "Bootcamp Decola Tech",
      institution: "DIO",
      date: "Set de 2021",
      skills: []
    },
    {
      title: "Bootcamp Code Anywhere",
      institution: "DIO",
      date: "Jul de 2021",
      skills: []
    },
    {
      title: "Lógica de programação II: pratique com desenhos, animações e um jogo",
      institution: "Alura",
      date: "Abr de 2020",
      skills: []
    },
    {
      title: "Lógica de programação I: Os primeiros programas com Javascript e HTML",
      institution: "Alura",
      date: "Jan de 2020",
      skills: []
    }
  ];

  return (
    <section id="certificates" className="mb-20">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">Certificados</h2>
      <div className="space-y-6">
        {certificates.map((certificate, index) => (
          <CertificateItem
            key={index}
            title={certificate.title}
            institution={certificate.institution}
            date={certificate.date}
            skills={certificate.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-slate-500 text-sm pt-10 pb-4 border-t border-slate-200">
          <p>© {new Date().getFullYear()} Gabriela Jussana. All rights reserved.</p>
          <p className="mt-1">Developed with Next.js and Tailwind CSS</p>
        </footer>
  );
};

export default Footer;

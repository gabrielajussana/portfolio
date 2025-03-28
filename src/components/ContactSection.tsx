import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="mb-10">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">Contact</h2>
      <p className="text-slate-600 mb-6">
        I am always open to new opportunities and collaborations. If you have a project in mind or just want to say hello,
        feel free to reach out!
      </p>
      <Button className="bg-blue-500 hover:bg-blue-600 text-white" asChild>
        <Link href="mailto:email@example.com">Send Email</Link>
      </Button>
    </section>
  );
};

export default ContactSection;

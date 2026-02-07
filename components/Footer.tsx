import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-white border-t border-brand-lightGray">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <span className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-black text-[10px] shadow-lg">
              MC
            </span>
            <span className="font-black text-black uppercase text-sm tracking-[0.2em]">Moses Charles</span>
          </div>
          
          <p className="text-brand-gray text-[11px] font-black uppercase tracking-widest text-center">
            © {currentYear} Moses Charles. Architected with modern engineering principles.
          </p>
          
          <div className="flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-brand-gray">
            <a href="https://github.com/Gfhandel/" target="_blank" className="hover:text-brand-primary transition-colors">GitHub</a>
            <a href="https://x.com/mozezcharles" target="_blank" className="hover:text-brand-primary transition-colors">X</a>
            <a 
              href="resume.pdf" 
              download="Moses_Charles_Resume.pdf"
              className="hover:text-brand-primary transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
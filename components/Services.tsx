import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black text-white overflow-hidden relative">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter">
            Core Technical <br/>
            <span className="text-brand-primary">Expertise</span>
          </h2>
          <p className="text-brand-gray text-lg font-medium">
            I offer specialized engineering services to help startups and enterprises ship high-quality products faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="p-8 rounded-[2.5rem] bg-neutral-900/50 border border-white/5 hover:border-brand-primary transition-all group"
            >
              <div className="text-4xl mb-6 bg-brand-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-tight text-white group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-gray text-xs leading-relaxed mb-6 font-semibold">
                {service.description}
              </p>
              <a href="#contact" className="text-[10px] font-black uppercase tracking-widest text-white hover:text-brand-primary transition-all flex items-center gap-2">
                Inquire <span>→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-white text-black rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase tracking-tighter">Ready to build?</h3>
            <p className="text-neutral-600 font-medium">Let's create a product that makes an impact and scales effortlessly.</p>
          </div>
          <a href="#contact" className="px-10 py-4 bg-brand-primary text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-black transition-all shadow-xl shadow-brand-primary/20">
            Start Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
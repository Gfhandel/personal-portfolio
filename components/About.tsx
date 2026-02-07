import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  const radarData = SKILLS.map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100,
  }));

  return (
    <section id="about" className="py-24 bg-white border-y border-brand-lightGray">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase tracking-tighter">
              Engineering <span className="text-brand-primary">Value</span>
            </h2>
            <div className="space-y-6 text-neutral-700 leading-relaxed text-lg font-medium">
              <p>
                I am Moses Charles, a <strong>Software & Product Engineer</strong>. I specialize in building robust digital ecosystems that don't just function—they drive revenue.
              </p>
              <p>
                My approach leverages <strong>Business Automation</strong> and AI-Assisted workflows to deliver high-quality code at enterprise scale, ensuring that your technical foundation is ready for growth from day one.
              </p>
              <p>
                I focus on the entire lifecycle of a product, specializing in high-performance <strong>web & mobile development</strong>—from the initial architectural blueprint to shipping a polished, user-centric interface.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-8 rounded-[2rem] bg-neutral-50 border border-neutral-100 hover:border-brand-primary transition-all group">
                <h3 className="font-black text-black mb-2 uppercase text-sm tracking-widest group-hover:text-brand-primary transition-colors">Automation</h3>
                <p className="text-xs text-brand-gray leading-relaxed font-semibold">Custom-built workflows designed to minimize overhead and maximize ROI.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-neutral-50 border border-neutral-100 hover:border-brand-primary transition-all group">
                <h3 className="font-black text-black mb-2 uppercase text-sm tracking-widest group-hover:text-brand-primary transition-colors">Strategy</h3>
                <p className="text-xs text-brand-gray leading-relaxed font-semibold">Translating complex business needs into efficient software architectures.</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full h-[500px] bg-neutral-50 rounded-[3rem] p-10 flex flex-col justify-center items-center relative border border-neutral-100">
            <h3 className="absolute top-10 left-10 text-xs font-black text-black uppercase tracking-[0.2em] border-b-2 border-brand-primary pb-2">Competency Matrix</h3>
            <div className="w-full h-full pt-10">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#E5E7EB" />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: '#000000', fontSize: 10, fontWeight: 900, fontFamily: 'Montserrat' }} 
                  />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#e8591b"
                    fill="#e8591b"
                    fillOpacity={0.15}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="absolute bottom-10 right-10 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                <div className="w-2 h-2 rounded-full bg-brand-primary opacity-50"></div>
                <div className="w-2 h-2 rounded-full bg-brand-primary opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
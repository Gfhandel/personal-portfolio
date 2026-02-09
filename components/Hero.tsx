import React from "react";
import Layout from "./Layout";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-brand-primary"
    >
      <Layout>
        {/* Subtle Texture Background */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1.5px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-center lg:text-left text-white">
            <div className="inline-block px-5 py-2 mb-8 text-[11px] font-black tracking-widest text-brand-primary uppercase bg-white rounded-full">
              Software & Product Engineer
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 tracking-tighter">
              Bringing your ideas to{" "}
              <span className="opacity-70">sellable</span> products
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              I help businesses bring ideas to life by combining AI-assisted
              development, full-stack engineering, and product thinking—building
              scalable, revenue-driven web and mobile products that ship, grow,
              and make money.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a
                href="#portfolio"
                className="px-10 py-5 bg-white text-brand-primary font-black uppercase tracking-widest text-xs rounded-full hover:bg-neutral-100 transition-all shadow-2xl shadow-black/10 text-center"
              >
                Case Studies
              </a>
              <a
                href="#contact"
                className="px-10 py-5 bg-transparent text-white border-2 border-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white/10 transition-all text-center"
              >
                Collaborate
              </a>
            </div>

            <div className="mt-16 flex items-center justify-center lg:justify-start gap-12 border-t border-white/20 pt-10">
              <div className="flex flex-col">
                <span className="text-3xl font-black leading-none">99%</span>
                <span className="text-[10px] uppercase tracking-widest font-black mt-1 opacity-70">
                  Delivery Rate
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black leading-none">X10</span>
                <span className="text-[10px] uppercase tracking-widest font-black mt-1 opacity-70">
                  Dev Velocity
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black leading-none">AI</span>
                <span className="text-[10px] uppercase tracking-widest font-black mt-1 opacity-70">
                  Native
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_48px_96px_-16px_rgba(0,0,0,0.3)] border-[12px] border-white/10 transition-all duration-700 hover:rotate-2 group bg-neutral-100">
              <img
                src="https://github.com/Gfhandel.png"
                alt="Moses Charles"
                className="w-full h-auto object-cover aspect-square max-w-[550px] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="absolute bottom-10 -left-6 lg:-left-12 p-6 bg-white rounded-3xl shadow-2xl z-20 transform hover:-translate-y-2 transition-transform hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                <div>
                  <p className="text-xs font-black text-black uppercase tracking-tight">
                    Active for projects
                  </p>
                  <p className="text-[10px] font-bold text-neutral-400 uppercase">
                    Prompt Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Hero;

import React, { useState } from "react";
import { TESTIMONIALS } from "../constants";
import Layout from "./Layout";

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-neutral-50 overflow-hidden border-y border-brand-lightGray">
      <Layout>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-black rounded-full mb-8 shadow-xl shadow-black/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 256 256"
              >
                <path d="M116,72v88a48,48,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72Zm100-16H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48,48,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path>
              </svg>
            </div>

            <div className="relative min-h-[300px] flex items-center justify-center">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={t.id}
                  className={`absolute inset-0 transition-all duration-700 flex flex-col items-center ${
                    idx === activeIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <p className="text-xl md:text-2xl font-black text-black mb-10 leading-relaxed uppercase tracking-tight">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-16 h-16 rounded-full grayscale border-4 border-white shadow-lg"
                    />
                    <div className="text-left">
                      <h4 className="font-black text-black uppercase text-sm tracking-widest">
                        {t.name}
                      </h4>
                      <p className="text-[10px] text-brand-gray font-black uppercase tracking-widest">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center gap-4">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-12 bg-black" : "w-4 bg-neutral-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Testimonials;

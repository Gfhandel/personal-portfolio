import React from "react";
import { ARTICLES } from "../constants";
import Layout from "./Layout";

const Writing: React.FC = () => {
  return (
    <section id="writing" className="py-24 bg-white">
      <Layout>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-black mb-4 uppercase tracking-tighter">
                Insights
              </h2>
              <p className="text-brand-gray text-lg max-w-xl font-medium">
                Thoughts on modern engineering, automation, and product
                delivery.
              </p>
            </div>
            <a
              href="#"
              className="hidden md:block px-6 py-3 border-2 border-black text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-all"
            >
              All Articles
            </a>
          </div>

          <div className="space-y-6">
            {ARTICLES.map((article) => (
              <a
                key={article.id}
                href={article.link}
                className="group flex flex-col md:flex-row gap-6 p-8 rounded-[2rem] bg-neutral-50 border border-neutral-100 hover:border-black transition-all duration-300 items-start md:items-center"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest bg-black px-2 py-0.5 rounded">
                      {article.platform}
                    </span>
                    <span className="text-[10px] text-brand-gray font-black uppercase tracking-widest">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-black transition-colors mb-2 uppercase tracking-tight">
                    {article.title}
                  </h3>
                  <p className="text-brand-gray text-xs font-semibold max-w-3xl leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-neutral-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white group-hover:border-black transition-all">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <a
            href="#"
            className="md:hidden mt-8 block w-full text-center px-6 py-4 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-xl"
          >
            All Articles
          </a>
        </div>
      </Layout>
    </section>
  );
};

export default Writing;

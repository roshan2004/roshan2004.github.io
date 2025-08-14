import React from 'react';
import { Code2, ExternalLink, Github } from 'lucide-react';
import grapheneImage from '../assets/code/GRA_AA_CG_model.png';
import fullereneImage from '../assets/code/fullerene_M3.png';

import { Button } from '@/components/ui/button.jsx';

/*
 * Code component
 *
 * This section showcases technical tools, scripts, and software that I
 * maintain or regularly use.  It follows the aesthetic of the other
 * sections by featuring a clean layout with rounded cards, a subtle
 * backdrop blur and gradient accent on the icon.  You can customise
 * the entries in the `tools` array below with your own projects.
 */
const Code = () => {
  // Define your technical tools and software here.  Each entry should
  // include a name, a brief description, optional tags and a URL.

  const tools = [
    {
      name: 'Martini 3 model of Graphene',
      description:
        'Generates a Martini 3 model of both finite and infinite graphene sheet for running the molecular dynamics simulation with the Gromacs simulation package. The script outputs both the structure file (.gro) and a topology file (.itp).',
      tags: ['Martini 3', 'Graphene', 'CG MD'],
      url: 'https://github.com/MoMS-MMSB/Martini3-Graphene',
      image: grapheneImage, 
    },
    {
      name: 'Martini 3 model of Fullerene',
      description:
        'Generates a Martini 3 model of Fullerene for running the molecular dynamics simulation with the Gromacs simulation package. The script outputs both the structure file (.gro) and a topology file (.itp).',
      tags: ['Fullerene', 'Martini 3', 'CG MD', 'Builder', 'GROMACS'],
      url: 'https://github.com/MoMS-MMSB/Martini3-Fullerene',
      image: fullereneImage, 
    },
   
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
          Code & Software
        </h1>
        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          Tools, libraries and scripts that support my research in computational biophysics and machine learning.
        </p>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100/60"
            >
              <div className="relative mb-6">
                {/* If a custom image is provided for this tool, display it above the icon */}
                {tool.image && (
                  <img
                    src={tool.image}
                    alt={`${tool.name} illustration`}
                    className="w-full h-auto rounded-xl mb-4"
                  />
                )}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-9 h-9 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 text-center group-hover:text-blue-600 transition-colors">
                {tool.name}
              </h3>
              <p className="text-slate-700 mb-5 text-center leading-relaxed">
                {tool.description}
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {tool.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-center">
                <Button
                  onClick={() => window.open(tool.url, '_blank')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group-hover:shadow-lg transition-all duration-300"
                >
                  View on GitHub{' '}
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Link to more repos */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/roshan2004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 underline"
          >
            <Github className="w-5 h-5" /> See more on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Code;
import React from 'react';
import { Beaker, Atom, Layers, Microscope } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "A Molecular Dynamics Study in Structural Dynamics of a V717I Substitution in the Amyloid Precursor Protein",
      type: "M.Sc. Thesis (2017-2019)",
      description: "This was the topic of my M.Sc. thesis. The project involved using molecular dynamics simulations to investigate the structural changes induced by the V717I mutation in the Amyloid Precursor Protein, which is linked to early-onset Alzheimer's disease.",
      keywords: ["Molecular Dynamics", "Protein Structure", "Alzheimer's Disease", "Biophysics"],
      status: "completed",
      icon: <Microscope className="w-8 h-8" />
    },
    {
      title: "Molecular Dynamics Study of Nanoparticle Interactions with Glycophorin-A",
      type: "Ongoing PhD Research",
      description: "Currently working on this project in collaboration with Dr. Anthony Nash and Dr. Sang Young Noh. This research focuses on understanding how different nanoparticles interact with Glycophorin-A, a major sialoglycoprotein of the human erythrocyte membrane, using molecular dynamics simulations.",
      keywords: ["Molecular Dynamics", "Nanoparticles", "Glycophorin-A", "Biomembrane Interactions"],
      status: "ongoing",
      icon: <Atom className="w-8 h-8" />
    },
    {
      title: "Martini Coarse-Grained Models for Carbon Nanoparticles",
      type: "PhD Research (In Preparation)",
      description: "Developing and validating Martini coarse-grained models for various carbon-based nanoparticles. This work aims to provide efficient and accurate models for simulating large systems involving these nanomaterials.",
      keywords: ["Coarse-Grained Modeling", "Martini Force Field", "Carbon Nanoparticles", "Computational Chemistry"],
      status: "preparation",
      icon: <Layers className="w-8 h-8" />
    },
    {
      title: "Martini Coarse-Grained Model for Graphene Oxide",
      type: "PhD Research (In Preparation)",
      description: "Developing a Martini coarse-grained model for graphene oxide, focusing on capturing its chemical and physical properties for large-scale simulations of its interactions with biological systems.",
      keywords: ["Coarse-Grained Modeling", "Graphene Oxide", "Martini Force Field", "Biomaterial Simulations"],
      status: "preparation",
      icon: <Beaker className="w-8 h-8" />
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'ongoing': return 'bg-blue-100 text-blue-800';
      case 'preparation': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'ongoing': return 'Ongoing';
      case 'preparation': return 'In Preparation';
      default: return 'Unknown';
    }
  };

  const getIconColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'ongoing': return 'text-blue-600';
      case 'preparation': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
      <div className="flex items-start space-x-6">
        <div className={`flex-shrink-0 w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center ${getIconColor(project.status)}`}>
          {project.icon}
        </div>
        <div className="flex-grow">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-slate-900 mb-2 leading-tight">
                {project.title}
              </h3>
              <p className="text-slate-600 font-medium mb-2">{project.type}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
              {getStatusText(project.status)}
            </span>
          </div>
          
          <p className="text-slate-700 mb-6 leading-relaxed">
            {project.description}
          </p>
          
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Keywords:</h4>
            <div className="flex flex-wrap gap-2">
              {project.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">Projects</h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Project Statistics */}
        <section className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Project Overview</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {projects.filter(p => p.status === 'completed').length}
                </div>
                <div className="text-slate-600">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {projects.filter(p => p.status === 'ongoing').length}
                </div>
                <div className="text-slate-600">Ongoing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  {projects.filter(p => p.status === 'preparation').length}
                </div>
                <div className="text-slate-600">In Preparation</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;


import React from 'react';
import { ArrowRight, BookOpen, User, FlaskConical, Atom, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import profileImage from '../assets/profile-hero.jpg';
import molecularDynamics from '../assets/molecular-dynamics.jpg';

const Home = ({ setActiveSection }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-6 animate-bounce">
              <Atom className="w-4 h-4 mr-2" />
              Computational Biophysics Researcher
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 animate-fade-in">
              Roshan Shrestha
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 animate-slide-up">
              PhD Researcher in Computational Biophysics
            </p>
            <p className="text-lg text-slate-700 mb-12 leading-relaxed animate-slide-up delay-200">
              Welcome to my personal academic website. Here you can find information about my research interests, 
              publications, teaching experience, and projects. I am passionate about leveraging computational 
              modeling to understand complex biological systems and nanomaterials.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up delay-300">
              <Button 
                onClick={() => setActiveSection('research')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore My Research <Microscope className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={() => setActiveSection('contact')}
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fade-in delay-400">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src={profileImage} 
                alt="Roshan Shrestha" 
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000">
                <FlaskConical className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 pb-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-4">
            Explore My Work
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover my research contributions, academic publications, and professional journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Research Card */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100/50">
            <div className="relative mb-6">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <FlaskConical className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping"></div>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center group-hover:text-blue-600 transition-colors">
              My Research
            </h3>
            <p className="text-slate-600 mb-8 text-center leading-relaxed">
              Explore my work on biological systems and nanomaterials using computational modeling and molecular dynamics simulations.
            </p>
            <div className="text-center">
              <Button 
                onClick={() => setActiveSection('research')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group-hover:shadow-lg transition-all duration-300"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Publications Card */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100/50">
            <div className="relative mb-6">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping delay-300"></div>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center group-hover:text-green-600 transition-colors">
              Publications
            </h3>
            <p className="text-slate-600 mb-8 text-center leading-relaxed">
              Browse my published articles and works in preparation, contributing to the field of computational biophysics.
            </p>
            <div className="text-center">
              <Button 
                onClick={() => setActiveSection('publications')}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white group-hover:shadow-lg transition-all duration-300"
              >
                View Publications <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* About Me Card */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100/50">
            <div className="relative mb-6">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <User className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-ping delay-700"></div>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center group-hover:text-purple-600 transition-colors">
              About Me
            </h3>
            <p className="text-slate-600 mb-8 text-center leading-relaxed">
              Discover more about my academic journey, educational background, and research interests in computational biophysics.
            </p>
            <div className="text-center">
              <Button 
                onClick={() => setActiveSection('about')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group-hover:shadow-lg transition-all duration-300"
              >
                Read My Bio <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


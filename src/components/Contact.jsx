import React from 'react';
import { Mail, MapPin, Globe, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">Contact Me</h1>
        
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
              I am always open to discussing new research ideas, potential collaborations, or any inquiries 
              related to my work. Please feel free to reach out to me through the following channels:
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Email */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">Email</h2>
              </div>
              <div className="text-center">
                <a 
                  href="mailto:roshan.shrestha@ibcp.fr"
                  className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
                >
                  roshan.shrestha@ibcp.fr
                </a>
                <div className="mt-4">
                  <Button 
                    onClick={() => window.open('mailto:roshan.shrestha@ibcp.fr', '_blank')}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Send Email <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Professional Address */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">Professional Address</h2>
              </div>
              <div className="text-center space-y-2">
                <p className="font-medium text-slate-900">Modeling Biological Macromolecules team</p>
                <p className="text-slate-700">7 passage du Vercors, 69367 LYON Cedex 07</p>
                <p className="text-slate-700">Institut de Biologie et Chimie des Protéines (IBCP)</p>
                <p className="text-slate-700">Lyon, France</p>
              </div>
            </div>
          </div>

          {/* Online Profiles */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">Online Profiles</h2>
            </div>
            <div className="text-center">
              <a 
                href="https://shrestharoshan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 text-lg font-medium transition-colors"
              >
                Personal Website (Old) <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-center text-white">
            <h2 className="text-2xl font-semibold mb-4">Let's Connect!</h2>
            <p className="text-lg mb-6 opacity-90">
              I look forward to hearing from you and exploring potential opportunities for collaboration.
            </p>
            <Button 
              onClick={() => window.open('mailto:roshan.shrestha@ibcp.fr', '_blank')}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
            >
              Get In Touch <Mail className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


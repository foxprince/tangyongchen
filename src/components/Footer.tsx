import React from 'react';
import { Gamepad2, Mail, MessageSquare, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800/50 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                TangYongChen Studio
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional overseas game development outsourcing studio, specializing in casual game development, providing high-quality game solutions for global clients.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>contact@tangyongchen.xyz</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MessageSquare className="w-4 h-4" />
                <span>WeChat: tangyc-studio</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Development Services</h3>
            <ul className="space-y-2">
              {[
                'Mini-Program Game Development',
                'Web Game Development',
                'Mobile App Game Development',
                'Technical Consulting Services',
                'UI/UX Design',
                'Operations & Maintenance'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Services', href: '#services' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Process', href: '#process' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-1">
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 TangYongChen Studio. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>Domain: tangyongchen.xyz</span>
              <span>•</span>
              <span>Professional Game Development Outsourcing Services</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
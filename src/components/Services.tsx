import React from 'react';
import { Smartphone, Globe, Zap, Code, Palette, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mini-Program Game Development',
      description: 'Casual game development for WeChat Mini Programs, TikTok Mini Programs and other platforms, lightweight, fast loading, excellent user experience',
      features: ['WeChat Mini Program', 'TikTok Mini Program', 'Kuaishou Mini Program', 'Baidu Mini Program']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Game Development',
      description: 'HTML5-based web game development, compatible with all major browsers, supporting PC and mobile devices',
      features: ['HTML5 Games', 'Responsive Design', 'Cross-Platform Compatible', 'PWA Support']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Mobile App Game Development',
      description: 'Native iOS and Android game development with excellent performance and smooth user experience',
      features: ['iOS Development', 'Android Development', 'Cross-Platform Solutions', 'Performance Optimization']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Technical Consulting Services',
      description: 'Professional technical consulting services including game architecture design, technology selection, and performance optimization',
      features: ['Architecture Design', 'Technology Selection', 'Performance Optimization', 'Code Review']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Game interface design and user experience optimization, creating beautiful game visual effects',
      features: ['Interface Design', 'Interaction Design', 'Animation Effects', 'User Experience']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Operations & Maintenance',
      description: 'Continuous support services including maintenance, updates, and bug fixes after game launch',
      features: ['Bug Fixes', 'Version Updates', 'Performance Monitoring', 'Technical Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive game development services from design to development, from launch to maintenance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-700/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:bg-gray-700/50 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
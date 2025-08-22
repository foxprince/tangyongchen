import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Zap } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Match-3 Casual Game',
      type: 'Mini Program',
      icon: <Smartphone className="w-5 h-5" />,
      description: 'Classic match-3 gameplay for WeChat Mini Program platform with rich level design and item system',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      tags: ['WeChat Mini Program', 'Canvas', 'Match-3 Game', 'Level System'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Endless Runner Adventure',
      type: 'Web',
      icon: <Globe className="w-5 h-5" />,
      description: 'HTML5 endless runner game supporting multi-platform with smooth physics engine and beautiful level design',
      image: 'https://images.pexels.com/photos/1040473/pexels-photo-1040473.jpeg',
      tags: ['HTML5', 'WebGL', 'Physics Engine', 'Cross-Platform'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Puzzle Game',
      type: 'Mobile App',
      icon: <Zap className="w-5 h-5" />,
      description: 'Native iOS/Android puzzle game supporting custom image puzzles with multiple difficulty modes',
      image: 'https://images.pexels.com/photos/776654/pexels-photo-776654.jpeg',
      tags: ['iOS', 'Android', 'Puzzle', 'AI Algorithm'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Tower Defense Strategy',
      type: 'Mini Program',
      icon: <Smartphone className="w-5 h-5" />,
      description: 'Strategic tower defense game with multiple tower types and enemy units, featuring rich upgrade system',
      image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg',
      tags: ['Strategy Game', 'Tower Defense', 'Upgrade System', 'Real-time Battle'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Music Rhythm Game',
      type: 'Web',
      icon: <Globe className="w-5 h-5" />,
      description: 'Web music game supporting custom music with precise beat detection and cool visual effects',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
      tags: ['Music Game', 'Beat Detection', 'Visualization', 'Web Audio'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Card Collection Game',
      type: 'Mobile App',
      icon: <Zap className="w-5 h-5" />,
      description: 'Card strategy game with card collection and battle system, featuring rich card effects and tactical combinations',
      image: 'https://images.pexels.com/photos/1040502/pexels-photo-1040502.jpeg',
      tags: ['Card Game', 'Strategy', 'Collection', 'Battle System'],
      color: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our excellent game projects developed across various platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                  {project.icon}
                  <span className="text-xs font-medium">{project.type}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded border border-gray-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm">
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
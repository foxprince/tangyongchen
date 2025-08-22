import React from 'react';
import { MessageSquare, Lightbulb, Code, TestTube, Rocket, HeadphonesIcon } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Requirements Discussion',
      description: 'In-depth understanding of your game requirements, target users, platform requirements and other detailed information',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Solution Design',
      description: 'Develop detailed technical solutions, UI design drafts and project timeline planning',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Development Implementation',
      description: 'Game development according to design plan with regular progress reports and demonstrations',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: 'Testing & Optimization',
      description: 'Comprehensive testing of game functions, performance optimization to ensure smooth user experience',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Launch & Deployment',
      description: 'Assist with game launch and release, providing deployment guidance and launch support',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: 'Ongoing Maintenance',
      description: 'Provide continuous technical support, bug fixes and feature update services',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Development Process
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Standardized development process ensuring high-quality project delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                {index + 1}
              </div>

              <div className="bg-gray-700/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 h-full hover:bg-gray-700/50 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-20 border border-current border-opacity-20 mb-4 text-white`}>
                  {step.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Project Timeline: 2-8 Weeks
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Based on project complexity and requirements, we establish reasonable development cycles. Simple casual games can be completed in 2-4 weeks, while complex game projects require 4-8 weeks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
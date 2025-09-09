import { Star, Code, Database, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Développement Frontend",
      description: "Création d'interfaces modernes et responsives avec React, HTML5, CSS3 et JavaScript.",
      features: ["Sites web responsifs", "Applications React", "Optimisation performance", "UI/UX moderne"],
      color: "purple",
      icon: Code
    },
    {
      title: "Solutions Mathématiques",
      description: "Applications des mathématiques avancées pour résoudre des problèmes complexes.",
      features: ["Modélisation numérique", "Algorithmes optimisés", "Analyse de données", "Simulation Scilab"],
      color: "pink",
      icon: Database
    },
    {
      title: "Intégration Web",
      description: "Développement fullstack avec Node.js, Express et bases de données.",
      features: ["API REST", "Bases de données", "Backend Node.js", "Intégration complète"],
      color: "blue",
      icon: Globe
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: {
        bg: 'from-purple-500/10 to-pink-500/10',
        border: 'border-purple-500/20',
        icon: 'text-purple-400',
        hover: 'hover:border-purple-500/40'
      },
      pink: {
        bg: 'from-pink-500/10 to-rose-500/10',
        border: 'border-pink-500/20',
        icon: 'text-pink-400',
        hover: 'hover:border-pink-500/40'
      },
      blue: {
        bg: 'from-blue-500/10 to-cyan-500/10',
        border: 'border-blue-500/20',
        icon: 'text-blue-400',
        hover: 'hover:border-blue-500/40'
      }
    } as const;
    
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Mes Services de Qualité
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des solutions techniques innovantes alliant expertise mathématique et développement web moderne
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colors.bg} backdrop-blur-sm rounded-xl p-8 border ${colors.border} ${colors.hover} transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-full bg-gray-800/50 border ${colors.border}`}>
                    <IconComponent className={colors.icon} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white ml-4">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Star className={`${colors.icon} mr-3 flex-shrink-0`} size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-700/50">

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
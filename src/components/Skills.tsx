const Skills = () => {
  const skillCategories = [
    {
      title: 'Développement Frontend',
      color: 'purple',
      skills: [
        { name: 'React.js', level: 85, category: 'Framework' },
        { name: 'JavaScript ES6+', level: 80, category: 'Language' },
        { name: 'HTML5 & CSS3', level: 90, category: 'Markup' },
        { name: 'Tailwind CSS', level: 85, category: 'Framework' },
        { name: 'Responsive Design', level: 88, category: 'Concept' }
      ],
    },
    {
      title: 'Backend & Bases de Données',
      color: 'blue',
      skills: [
        { name: 'Node.js', level: 75, category: 'Runtime' },
        { name: 'Express.js', level: 70, category: 'Framework' },
        { name: 'MongoDB', level: 65, category: 'Database' },
        { name: 'SQL', level: 80, category: 'Database' },
        { name: 'API REST', level: 75, category: 'Architecture' }
      ],
    },
    {
      title: 'Mathématiques & Sciences',
      color: 'pink',
      skills: [
        { name: 'Analyse Complexe', level: 95, category: 'Math' },
        { name: 'Algèbre Linéaire', level: 92, category: 'Math' },
        { name: 'Statistiques', level: 88, category: 'Math' },
        { name: 'Théorie des Graphes', level: 90, category: 'Math' },
        { name: 'Python Scientifique', level: 85, category: 'Programming' }
      ],
    },
    {
      title: 'Outils & Technologies',
      color: 'green',
      skills: [
        { name: 'Git & GitHub', level: 80, category: 'Version Control' },
        { name: 'LaTeX', level: 85, category: 'Documentation' },
        { name: 'Scilab', level: 90, category: 'Scientific' },
        { name: 'VS Code', level: 85, category: 'IDE' },
        { name: 'Figma', level: 70, category: 'Design' }
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: { bg: 'from-purple-500/20 to-purple-600/20', border: 'border-purple-500/30', progress: 'bg-purple-500' },
      blue: { bg: 'from-blue-500/20 to-blue-600/20', border: 'border-blue-500/30', progress: 'bg-blue-500' },
      pink: { bg: 'from-pink-500/20 to-pink-600/20', border: 'border-pink-500/30', progress: 'bg-pink-500' },
      green: { bg: 'from-green-500/20 to-green-600/20', border: 'border-green-500/30', progress: 'bg-green-500' }
    };
        return colorMap[color as keyof typeof colorMap] || colorMap.purple;

  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Mes Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un profil technique polyvalent alliant développement web moderne et expertise mathématique avancée
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colors.bg} backdrop-blur-sm rounded-xl p-8 border ${colors.border} hover:shadow-2xl transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-gray-400 text-sm ml-2">({skill.category})</span>
                        </div>
                        <span className="text-gray-300 text-sm font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full ${colors.progress} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default Skills;

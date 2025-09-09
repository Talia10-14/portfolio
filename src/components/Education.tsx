import { Star } from 'lucide-react';
const Education = () => {
  const educationData = [
    {
      degree: "Licence en Mathématiques-Informatique",
      institution: "Université d'Abomey-Calavi (UAC)",
      location: "Calavi, Bénin",
      period: "2022 - 2025",
      status: "Diplômée",
      description: "Formation d'excellence combinant mathématiques fondamentales et informatique moderne. Spécialisation en analyse complexe, algèbre avancée et développement logiciel.",
      highlights: [
        "Major de promotion en Analyse Complexe",
        "Projet de fin d'études en optimisation",
        "Mention Très Bien"
      ],
      subjects: [
        "Analyse réelle & complexe",
        "Algèbre linéaire & multilinéaire", 
        "Programmation avancée (C, Python)",
        "Structures de données",
        "Bases de données relationnelles"
      ],
      color: "purple"
    },
    {
      degree: "Baccalauréat Série C",
      institution: "Collège d'Enseignement Général 2 de Godomey",
      location: "Godomey, Bénin",
      period: "2021 - 2022",
      status: "Obtenu",
      description: "Baccalauréat scientifique avec excellence en mathématiques et sciences physiques.",
      highlights: [
        "Mention Assez Bien",
        "Spécialité Mathématiques avancées",
        "Prix d'excellence en Sciences"
      ],
      subjects: [
        "Mathématiques expertes",
        "Physique-Chimie",
        "Sciences de la Vie",
        "Philosophie",
        "Littérature française"
      ],
      color: "blue"
    }
  ];

  const certifications = [
    {
      title: "React.js Development",
      provider: "Formation intensive autodidacte",
      date: "2024",
      status: "Complété",
      skills: ["Hooks avancés", "Context API", "State Management", "Testing"]
    },
    {
      title: "Fullstack JavaScript",
      provider: "Projets personnels & mentoring",
      date: "2024-2025",
      status: "En cours",
      skills: ["Node.js", "Express.js", "MongoDB", "JWT Authentication"]
    },
    {
      title: "Mathématiques Computationnelles",
      provider: "Université & recherche personnelle",
      date: "2024",
      status: "Expert",
      skills: ["Scilab", "Simulation numérique", "Modélisation", "LaTeX"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Mon Parcours Académique
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un parcours d'excellence alliant rigueur académique et passion pour l'innovation technologique
          </p>
        </div>

        {/* Timeline des formations */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500"></div>
          
          {educationData.map((edu, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              {/* Point sur la timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-800 z-10"></div>
              
              {/* Carte de formation */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      edu.status === 'Diplômée' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
                      'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {edu.status}
                    </span>
                    <span className="text-gray-400 text-sm">{edu.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-purple-400 font-medium mb-3">{edu.institution}</h4>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{edu.description}</p>

                  {/* Points forts */}
                  <div className="mb-4">
                    <h5 className="text-white font-medium mb-2 text-sm">Points forts :</h5>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <Star className="text-yellow-400 mr-2 flex-shrink-0" size={12} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Matières */}
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.slice(0, 3).map((subject, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-900/30 text-purple-200 text-xs rounded border border-purple-700/30">
                        {subject}
                      </span>
                    ))}
                    {edu.subjects.length > 3 && (
                      <span className="text-gray-400 text-xs">+{edu.subjects.length - 3} autres</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Certifications & Formations Continues
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'Complété' ? 'bg-green-500/20 text-green-400' :
                    cert.status === 'Expert' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {cert.status}
                  </div>
                  <span className="text-gray-400 text-sm">{cert.date}</span>
                </div>

                <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-gray-400 mb-4 text-sm">{cert.provider}</p>

                <div className="space-y-2">
                  <h6 className="text-sm font-medium text-gray-300">Compétences :</h6>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-900/30 text-blue-200 text-xs rounded border border-blue-700/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export  default Education;
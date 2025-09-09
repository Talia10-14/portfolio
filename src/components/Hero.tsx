import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles} from 'lucide-react';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "Développeuse Frontend",
    "Mathématicienne Appliquée", 
    "Problem Solver",
    "Innovatrice Tech"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToAbout = () => {
    const aboutElement = document.querySelector('#about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: "2+", label: "Années d'études", subtext: "Mathématiques-Informatique" },
    { number: "10+", label: "Projets créés", subtext: "Web & Applications" },
    { number: "5+", label: "Technologies", subtext: "Frontend & Backend" },
    { number: "100%", label: "Passion", subtext: "Pour l'innovation" }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-purple-400 font-medium mb-2 flex items-center justify-center lg:justify-start">
                <Sparkles className="mr-2" size={16} />
                Salut, je suis
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
                <span className="block">Justalie</span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Rosama Mahoussi TCHOGBE
                </span>
              </h1>
              
              {/* Titre animé */}
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <p className="text-2xl sm:text-3xl text-gray-300 font-light">
                  {titles[currentTitle]}
                  <span className="inline-block w-1 h-8 bg-purple-400 ml-2 animate-pulse"></span>
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionnée par l'intersection entre <span className="text-purple-400 font-medium">mathématiques</span> et 
              <span className="text-pink-400 font-medium"> développement web</span>, je transforme des concepts complexes 
              en solutions digitales élégantes et performantes.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a
                href="mailto:mahoussitchogbe06@gmail.com"
                className="group p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm text-white rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 transform border border-purple-500/20 hover:border-purple-500"
              >
                <Mail size={20} className="group-hover:animate-bounce" />
              </a>
              <a
                href="https://github.com/Talia10-14"
                className="group p-4 bg-gray-800/50 backdrop-blur-sm text-white rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-110 transform border border-gray-700 hover:border-gray-500"
              >
                <Github size={20} className="group-hover:animate-spin" />
              </a>
              <a
                href="https://linkedin.com/in/justalie-tchogbe-73a307320"
                className="group p-4 bg-blue-600/20 backdrop-blur-sm text-white rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-110 transform border border-blue-600/20 hover:border-blue-600"
              >
                <Linkedin size={20} className="group-hover:animate-pulse" />
              </a>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleScrollToAbout}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center justify-center"
              >
                <span>Découvrir mon univers</span>
                <ArrowDown className="ml-2 group-hover:animate-bounce" size={16} />
              </button>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-white transition-all duration-300 text-center backdrop-blur-sm hover:border-purple-400"
              >
                Collaborons ensemble
              </a>
            </div>
          </div>

          {/* Statistiques visuelles */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white font-medium mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>

            {/* Badge de disponibilité */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-lg animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></div>
              Disponible pour projets
            </div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={handleScrollToAbout} className="group flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2 group-hover:text-purple-400 transition-colors">
              Découvrez plus
            </span>
            <ArrowDown className="text-gray-400 group-hover:text-purple-400 transition-colors" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};


export default Hero;
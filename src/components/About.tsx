import imgProfile from '../assets/img.jpeg';


const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
              <div className="text-center">
                {/* Container amélioré pour l'image */}
                <div className="relative w-60 h-60 mx-auto mb-6 group">
                  {/* Bordure animée avec gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 rounded-full p-1 animate-pulse">
                    <div className="w-full h-full bg-gray-800 rounded-full p-1">
                      <img 
                        src={imgProfile} 
                        alt="Photo de profil" 
                        className="w-full h-full object-cover rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  {/* Effet de lueur au hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  
                  {/* Badge de statut repositionné */}
                  <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 border-4 border-gray-800 shadow-lg">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Badge de disponibilité amélioré */}
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-6 py-3 text-green-400 text-sm inline-flex items-center gap-2 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Disponible pour opportunités
                </div>
              </div>
            </div>
            
            {/* Éléments décoratifs améliorés */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full opacity-20 animate-pulse blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full opacity-30 animate-bounce"></div>
          </div>
           
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              À propos de moi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mb-8"></div>
                         
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Diplômée en <span className="text-purple-400 font-medium">Mathématiques-Informatique</span> de 
              l'Université d'Abomey-Calavi, je suis une développeuse frontend passionnée qui trouve sa force 
              dans l'alliance entre rigueur mathématique et créativité technique.
            </p>
                         
            <p className="text-gray-300 mb-8 leading-relaxed">
              Mon parcours unique me permet d'aborder le développement web avec une perspective analytique, 
              créant des solutions optimisées et innovantes. Je transforme des concepts complexes en 
              interfaces intuitives et performantes.
            </p>
             
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
                <h4 className="text-purple-400 font-semibold mb-2">Spécialisation</h4>
                <p className="text-gray-300 text-sm">Frontend React & Mathématiques Appliquées</p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
                <h4 className="text-pink-400 font-semibold mb-2">Localisation</h4>
                <p className="text-gray-300 text-sm">Godomey, Bénin</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
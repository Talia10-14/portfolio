import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Justalie.dev
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Développeuse frontend junior passionnée par l'innovation web
              et l'application des mathématiques au développement.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Navigation Rapide
            </h4>
            <ul className="space-y-2">
              {['À propos', 'Compétences', 'Projets', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Restons Connectés
            </h4>
            <div className="flex space-x-4">
              <a
                href="mailto:mahoussitchogbe06@gmail.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors border border-gray-700"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/Talia10-14"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors border border-gray-700"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/justalie-tchogbe-73a307320"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors border border-gray-700"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Justalie Rosama TCHOGBE. Fait avec{' '}
            <Heart className="mx-2 text-red-500" size={16} />
            et beaucoup de code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState } from 'react';
import { Github, ExternalLink, Database, Globe, ShoppingCart, Calendar, Users, BookOpen, Calculator, Brain, Smartphone, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false); // Nouvel état pour contrôler l'affichage
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: React.ComponentType<any>;
  color: string;
  category: string;
  githubLink: string;
  liveLink: string;
  features: string[];
}
  const projects: Project[] = [
    {
      id: 1,
      title: 'Système de Gestion de Bibliothèque',
      description: "Application web complète permettant la gestion d'une bibliothèque en ligne avec interfaces utilisateur et administrateur. Fonctionnalités avancées de recherche, emprunt et retour de livres.",
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'HTML5', 'CSS3', 'JavaScript'],
      icon: Database,
      color: 'purple',
      category: 'fullstack',
      githubLink: 'https://github.com/Talia10-14/bibliotheque',
      liveLink: 'https://library-demo.justalie.dev',
      features: [
        "Interface utilisateur intuitive",
        "Panneau d'administration complet",
        "Système d'authentification",
        "Gestion des emprunts et retours"
      ]
    },
    {
      id: 2,
      title: 'Site vitrine pour une agence de photographie',
      description: "Développement d'une plateforme moderne et élégante mettant en valeur les services, le portfolio et l'identité visuelle de l'agence.",
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      icon: ShoppingCart,
      color: 'blue',
      category: 'frontend',
      githubLink: 'https://github.com/Talia10-14/page-de-photographie',
      liveLink: 'https://shop.justalie.dev',
      features: [     
        "Page d'accueil immersive et moderne",
        "Section À propos pour présenter l'agence",
        'Galerie photo interactive et responsive',
        'Page contact avec formulaire intégré'
      ]
    },
    {
      id: 3,
      title: 'Portfolio Architecture',
      description: 'Site vitrine élégant pour un cabinet d\'architecture avec galerie interactive, présentation des projets et formulaire de contact.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Responsive Design'],
      icon: Globe,
      color: 'green',
      category: 'frontend',
      githubLink: 'https://github.com/Talia10-14/architecture-portfolio',
      liveLink: 'https://archi-demo.justalie.dev',
      features: [
        'Galerie photos interactive',
        'Animations fluides',
        'Design moderne et élégant',
        'Optimisation SEO'
      ]
    },
    {
      id: 4,
      title: 'Calculateur de Recherche Opérationnelle',
      description: 'Application web pour résoudre des problèmes d\'optimisation linéaire et de théorie des graphes avec visualisations interactives.',
      technologies: ['Python', 'Flask', 'NumPy', 'Matplotlib', 'JavaScript', 'Chart.js'],
      icon: Calculator,
      color: 'orange',
      category: 'mathematics',
      githubLink: 'https://github.com/Talia10-14/operations-research-calculator',
      liveLink: 'https://or-calc.justalie.dev',
      features: [
        'Résolution de programmes linéaires',
        'Algorithme de Dijkstra',
        'Visualisations graphiques',
        'Export des résultats'
      ]
    },
    {
      id: 5,
      title: 'Gestionnaire de Tâches Collaboratif',
      description: 'Application de gestion de projets en équipe avec tableau Kanban, notifications en temps réel et suivi du temps.',
      technologies: ['React.js', 'Node.js', 'Socket.io', 'PostgreSQL', 'JWT'],
      icon: Calendar,
      color: 'purple',
      category: 'fullstack',
      githubLink: 'https://github.com/Talia10-14/collaborative-task-manager',
      liveLink: 'https://tasks.justalie.dev',
      features: [
        'Tableau Kanban interactif',
        'Notifications temps réel',
        'Gestion des équipes',
        'Suivi du temps et rapports'
      ]
    },
    {
      id: 6,
      title: 'Blog Tech Moderne',
      description: 'Blog technique avec système de gestion de contenu, commentaires, catégories et recherche avancée.',
      technologies: ['React.js', 'Next.js', 'Markdown', 'Prisma', 'PostgreSQL'],
      icon: BookOpen,
      color: 'blue',
      category: 'frontend',
      githubLink: 'https://github.com/Talia10-14/tech-blog',
      liveLink: 'https://blog.justalie.dev',
      features: [
        'Éditeur Markdown intégré',
        'Système de commentaires',
        'Catégories et tags',
        'Recherche full-text'
      ]
    },
    {
      id: 7,
      title: 'Simulateur de Systèmes Dynamiques',
      description: 'Outil de simulation et visualisation de systèmes dynamiques pour l\'analyse de comportements complexes.',
      technologies: ['Python', 'Scilab', 'Matplotlib', 'NumPy', 'SciPy'],
      icon: Brain,
      color: 'pink',
      category: 'mathematics',
      githubLink: 'https://github.com/Talia10-14/dynamic-systems-simulator',
      liveLink: 'https://dynsim.justalie.dev',
      features: [
        'Simulation de systèmes non-linéaires',
        'Visualisation 3D',
        'Export des données',
        'Interface utilisateur intuitive'
      ]
    },
    {
      id: 8,
      title: 'Application Météo Progressive',
      description: 'PWA météo avec géolocalisation, prévisions détaillées, alertes météo et mode hors-ligne.',
      technologies: ['React.js', 'Service Workers', 'Weather API', 'Chart.js'],
      icon: Globe,
      color: 'blue',
      category: 'frontend',
      githubLink: 'https://github.com/Talia10-14/weather-pwa',
      liveLink: 'https://weather.justalie.dev',
      features: [
        'Géolocalisation automatique',
        'Prévisions sur 7 jours',
        'Mode hors-ligne',
        'Notifications push'
      ]
    },
    {
      id: 9,
      title: 'API REST de Gestion d\'Événements',
      description: 'API robuste pour la gestion d\'événements avec authentification, gestion des participants et notifications.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Nodemailer'],
      icon: Users,
      color: 'green',
      category: 'backend',
      githubLink: 'https://github.com/Talia10-14/events-api',
      liveLink: 'https://api-events.justalie.dev/docs',
      features: [
        'API RESTful complète',
        'Authentification JWT',
        'Gestion des rôles',
        'Documentation Swagger'
      ]
    },
    {
      id: 10,
      title: 'App Mobile de Fitness',
      description: 'Application mobile pour le suivi d\'entraînements, nutrition et progression avec interface React Native.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Chart.js'],
      icon: Smartphone,
      color: 'orange',
      category: 'mobile',
      githubLink: 'https://github.com/Talia10-14/fitness-tracker-app',
      liveLink: 'https://fitness-demo.justalie.dev',
      features: [
        'Suivi d\'entraînements',
        'Calculateur de calories',
        'Graphiques de progression',
        'Synchronisation cloud'
      ]
    },
    {
      id: 11,
      title: 'Générateur de Rapports LaTeX',
      description: 'Outil web pour générer automatiquement des documents LaTeX à partir de templates et données JSON.',
      technologies: ['Python', 'Flask', 'LaTeX', 'Jinja2', 'JavaScript'],
      icon: BookOpen,
      color: 'purple',
      category: 'mathematics',
      githubLink: 'https://github.com/Talia10-14/latex-report-generator',
      liveLink: 'https://latex-gen.justalie.dev',
      features: [
        'Templates personnalisables',
        'Génération automatique PDF',
        'Éditeur en ligne',
        'Bibliothèque de symboles'
      ]
    },
    {
      id: 12,
      title: 'Dashboard Analytics Avancé',
      description: 'Tableau de bord interactif pour la visualisation de données avec graphiques en temps réel et exports personnalisés.',
      technologies: ['React.js', 'D3.js', 'Node.js', 'WebSockets', 'PostgreSQL'],
      icon: Brain,
      color: 'blue',
      category: 'fullstack',
      githubLink: 'https://github.com/Talia10-14/analytics-dashboard',
      liveLink: 'https://dashboard.justalie.dev',
      features: [
        'Graphiques interactifs D3.js',
        'Données temps réel',
        'Filtres avancés',
        'Export multi-formats'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les projets', count: projects.length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'mathematics', name: 'Mathématiques', count: projects.filter(p => p.category === 'mathematics').length },
    { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Limiter l'affichage à 3 projets si showAll est false
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);
  const hasMoreProjects = filteredProjects.length > 3;

  // Reset showAll quand on change de filtre
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setShowAll(false);
  };

  const getColorClasses = (color: string): string => {
    const colorMap: Record<string, string> = {
      purple: 'from-purple-500 to-pink-500',
      blue: 'from-blue-500 to-cyan-500',
      pink: 'from-pink-500 to-rose-500',
      green: 'from-green-500 to-teal-500',
      orange: 'from-orange-500 to-red-500'
    };
    return colorMap[color] || colorMap.purple;
  };

  const handleLinkClick = (url: string, type: string): void => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Lien ${type} bientôt disponible !`);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une collection diversifiée de projets web, applications mathématiques et solutions innovantes
          </p>
        </div>

        {/* Filtres de catégories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
            >
              {category.name}
              <span className="ml-2 px-2 py-1 bg-black/20 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => {
            const colorClasses = getColorClasses(project.color);
            const IconComponent = project.icon;

            return (
              <div
                key={project.id}
                className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
              >
                <div className={`h-32 bg-gradient-to-r ${colorClasses} flex items-center justify-center relative overflow-hidden`}>
                  <IconComponent className="text-white z-10" size={48} />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-200 mb-2 text-sm">Fonctionnalités clés :</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {project.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech:string, index:number) => (
                        <span
                           key={`${tech}-${index}`}
                          className="px-2 py-1 bg-gray-700 text-gray-200 text-xs font-medium rounded border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button 
                      onClick={() => handleLinkClick(project.githubLink, 'GitHub')}
                      className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </button>
                    <button 
                      onClick={() => handleLinkClick(project.liveLink, 'Live Demo')}
                      className="flex-1 flex items-center justify-center px-3 py-2 border-2 border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-colors text-sm"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Voir
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bouton Voir plus / Voir moins */}
        {hasMoreProjects && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {showAll ? (
                <>
                  <ChevronUp size={20} className="mr-2" />
                  Voir moins
                </>
              ) : (
                <>
                  <ChevronDown size={20} className="mr-2" />
                  Voir plus ({filteredProjects.length - 3} projets)
                </>
              )}
            </button>
          </div>
        )}

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Aucun projet trouvé pour cette catégorie.
            </p>
          </div>
        )}

        {/* Statistiques */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-white mb-2">{projects.length}</div>
              <div className="text-gray-400">Projets Total</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {[...new Set(projects.flatMap(p => p.technologies))].length}
              </div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {projects.filter(p => p.category === 'fullstack' || p.category === 'frontend').length}
              </div>
              <div className="text-gray-400">Web Apps</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {projects.filter(p => p.category === 'mathematics').length}
              </div>
              <div className="text-gray-400">Projets Math</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
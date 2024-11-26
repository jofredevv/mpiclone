import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Heart, User, Video, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { profiles } from '../data/profiles';

const categories = [
  'Perfiles Públicos destacados',
  'Abogados',
  'Accesibilidad',
  'Acoso',
  'Actores y Actrices',
  'Administración Pública',
  'Advertising',
  'Antropología',
  'Arquitectura',
  'Arte & Multimedia',
  'Artes escénicas',
  'Aseguradoras',
  'Asociación sin ánimo de lucro',
  'Autor',
  'Baloncesto',
  'Big Data',
  'biotecnología',
  'Blockchain',
  'Blogs',
  'Branding',
  'Brokers',
  'Business Angel',
  'Business Travel',
  'CF Benidorm',
  'Chef',
  'Cibercrimen',
  'Ciberdefensa',
  'Ciberdetective',
  'Ciberinvestigación',
  'Ciclismo',
  'Ciencia',
  'cine',
  'CLEB',
  'Cloud Computing',
  'CloudDay2022',
  'Coaching',
  'Colaboración',
  'Cómic',
  'comunicación',
  'CONs-Hacking',
  'Consultoría',
  'Creación Audiovisual',
  'Crianza',
  'Criminología',
  'Criptomonedas',
  'Cultura',
  'CybersecurityDay2022',
  'Deporte',
  'Desarrollador Web',
  'Desarrollo Personal',
  'Design',
  'Detectives Privados',
  'DevOps & SecDevOps',
  'Digital',
  'Diseño Artístico',
  'Diseño Gráfico',
  'Divulgador/a',
  'Doblaje cinematográfico',
  'Docente',
  'Dominios Web',
  'e-commerce',
  'Economía',
  'Emprendimiento',
  'Energía',
  'Escritores',
  'e-sports',
  'Eventos',
  'Filosofía',
  'Finanzas',
  'FinTech',
  'Formación',
  'Fotógrafo',
  'Fox',
  'Freelance',
  'Fuerzas de seguridad del Estado',
  'fútbol',
  'Gastronomía',
  'Gestor de proyectos',
  'Hackers',
  'Headhunter',
  'Historia',
  'Hosting',
  'Humor',
  'Impresión 3D',
  'Impresión Digital',
  'Influencers',
  'Innovación',
  'Instagram',
  'Inteligencia',
  'Inteligencia Artificial',
  'Inversión',
  'Investigación y Desarrollo',
  'IoT',
  'IV Jornadas IT - Metaverso',
  'Lactancia',
  'LGTBI',
  'LibreCON2022',
  'Linkmusic',
  'Literatura',
  'Logopedia',
  'M&A',
  'Magia',
  'Makers',
  'Marketing',
  'Matrona',
  'Mayores',
  'Medicina',
  'Metaverso',
  'Microsoft MVP',
  'Microsoft Security Tech Days',
  'Mindfulness',
  'Misterio',
  'Moda',
  'Modelos',
  'Motociclismo',
  'Motor',
  'Música',
  'Netflix',
  'Neurociencia',
  'Nutrición',
  'ONG',
  'OpenExpo2022',
  'OpenExpo2023',
  'OpenExpo2024',
  'OpenExpoVirtualExperience',
  'OSINT',
  'Osintomatico Conference 2022',
  'Periodismo',
  'Pintores',
  'PNL',
  'Podcast',
  'Podcaster',
  'Política',
  'Presentador',
  'Programación',
  'Protección de Datos',
  'Proyectos Solidarios',
  'Psicología',
  'Publicidad',
  'Puericultura',
  'Radio',
  'Real Madrid',
  'Realidad Aumentada',
  'Recursos Humanos',
  'Redes sociales',
  'Reputación Online',
  'Robotica',
  'Salud',
  'Sector Inmobiliario',
  'Sector Público',
  'Seguridad Corporativa',
  'Seguridad Informática',
  'Soft Skills',
  'Speakers',
  'SportsDataCampus',
  'Sueño Infantil',
  'Tecnología',
  'Tecnologías accesibles',
  'Tecnología-Software',
  'Telecomunicaciones',
  'Televisión',
  'Terapia',
  'Torero',
  'Transporte',
  'Traveltech',
  'Turismo',
  'Universidad',
  'User Experience',
  'VBooks',
  'Ventas',
  'Viajes',
  'Videojuegos',
  'videomakers',
  'Youtube'
];

const ProfileCard = ({ profile }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
      }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-colors duration-200 hover:border-orange/20"
    >
      <div className="p-6">
        <div className="flex items-center">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={profile.image}
            alt={profile.name}
          />
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-orange transition-colors">
              {profile.name}
            </h3>
            <p className="text-sm text-gray-500">@{profile.username}</p>
          </div>
        </div>
        
        <p className="mt-4 text-sm text-gray-600 line-clamp-3">
          {profile.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {profile.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-2.5 py-0.5 text-sm text-gray-700 hover:text-orange transition-colors cursor-pointer"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="mt-6 flex justify-start space-x-6">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-orange transition-colors"
          >
            <Heart className="h-5 w-5" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-orange transition-colors"
          >
            <User className="h-5 w-5" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-orange transition-colors"
          >
            <Video className="h-5 w-5" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-orange transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

interface IndexProps {
  initialSearchTerm?: string;
}

export default function Index({ initialSearchTerm = '' }: IndexProps) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedCategory, setSelectedCategory] = useState('Perfiles Públicos destacados');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const filteredProfiles = profiles.filter(profile => {
    const matchesSearch = searchTerm === '' || 
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFilter = activeFilter === 'todos' ||
      (activeFilter === 'videollamadas' && profile.tags.includes('Videollamadas')) ||
      (activeFilter === 'videosaludos' && profile.tags.includes('Videosaludos'));

    const matchesCategory = selectedCategory === 'Perfiles Públicos destacados' ||
      profile.tags.includes(selectedCategory);

    return matchesSearch && matchesFilter && matchesCategory;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 pt-20"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-8">
          {/* Categories Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:max-h-[calc(100vh-120px)] overflow-y-auto sticky top-24"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-6">Categorías</h2>
            <div className="flex flex-col gap-2 pr-4 pb-8">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium text-left transition-colors
                    ${category === selectedCategory
                      ? 'bg-orange text-white hover:bg-orange-dark' 
                      : 'bg-pink-100 text-gray-700 hover:bg-pink-200'}`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Search and Results Section */}
          <div>
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative mb-8"
            >
              <div className={`relative bg-white rounded-xl shadow-sm transition-all duration-200 ${
                isFocused ? 'shadow-lg ring-2 ring-orange/50' : 'hover:shadow-md'
              }`}>
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className={`h-5 w-5 transition-colors ${
                    isFocused ? 'text-orange' : 'text-gray-400'
                  }`} />
                </div>
                <input
                  type="text"
                  placeholder="Buscar perfiles, tags, o palabras clave..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="block w-full pl-12 pr-12 py-4 text-gray-900 placeholder-gray-500 rounded-xl focus:outline-none"
                />
                {searchTerm && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
            </motion.div>

            {/* Filters */}
            <div className="flex border-b border-gray-200 mb-8">
              <button
                onClick={() => setActiveFilter('todos')}
                className={`px-6 py-2 text-sm font-medium border-b-2 transition-colors
                  ${activeFilter === 'todos'
                    ? 'border-orange text-orange'
                    : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Todos
              </button>
              <button
                onClick={() => setActiveFilter('videollamadas')}
                className={`px-6 py-2 text-sm font-medium border-b-2 transition-colors
                  ${activeFilter === 'videollamadas'
                    ? 'border-orange text-orange'
                    : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Solo con videollamadas
              </button>
              <button
                onClick={() => setActiveFilter('videosaludos')}
                className={`px-6 py-2 text-sm font-medium border-b-2 transition-colors
                  ${activeFilter === 'videosaludos'
                    ? 'border-orange text-orange'
                    : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Solo con vídeo saludos
              </button>
            </div>

            {/* Profile Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfiles.map((profile, index) => (
                <ProfileCard key={`${profile.username}-${index}`} profile={profile} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
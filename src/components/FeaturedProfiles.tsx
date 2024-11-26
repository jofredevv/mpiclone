import React from 'react';
import { Heart, User, Video, MessageCircle, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { profiles } from '../data/profiles';

interface ProfileCardProps {
  profile: {
    name: string;
    username: string;
    image: string;
    description: string;
    tags: string[];
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
      }}
      className="bg-white rounded-lg shadow-lg overflow-hidden h-[360px]"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={profile.image}
            alt={profile.name}
          />
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">{profile.name}</h3>
            <p className="text-sm text-gray-500">@{profile.username}</p>
          </div>
        </div>
        
        <div className="mt-4 flex-shrink-0">
          <p className="text-sm text-gray-600 line-clamp-3">
            {profile.description}
          </p>
        </div>

        <div className="mt-4 flex-shrink-0">
          <div className="flex flex-wrap gap-2">
            {profile.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4">
          <div className="flex items-center gap-4">
            <div className="flex gap-3">
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
            
            <button className="inline-flex items-center whitespace-nowrap px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange hover:bg-orange-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange ml-auto">
              <ExternalLink className="h-4 w-4 mr-1.5" />
              Ir al Perfil
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function FeaturedProfiles() {
  return (
    <div id="perfiles" className="bg-[#FFF5EE] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Perfiles Destacados
          </h2>
        </div>

        <div className="mt-12">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={4}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="relative pb-12"
          >
            {profiles.map((profile, index) => (
              <SwiperSlide key={index}>
                <ProfileCard profile={profile} />
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg cursor-pointer">
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </div>
            <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg cursor-pointer">
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </div>
          </Swiper>
          <div className="swiper-pagination mt-8"></div>
        </div>
      </div>
    </div>
  );
}
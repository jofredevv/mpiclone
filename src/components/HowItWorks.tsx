import React, { useEffect, useRef } from 'react';
import { Search, UserPlus, MessageCircle, Calendar, CreditCard, ThumbsUp } from 'lucide-react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface HowItWorksProps {
  onNavigate: (page: string) => void;
}

const steps = [
  {
    icon: Search,
    title: 'Busca',
    description: 'Encuentra el perfil que mejor se adapte a tus necesidades usando nuestro buscador inteligente.'
  },
  {
    icon: UserPlus,
    title: 'Regístrate',
    description: 'Crea tu cuenta gratuita en menos de un minuto para acceder a todos los perfiles.'
  },
  {
    icon: MessageCircle,
    title: 'Escribe',
    description: 'Redacta tu mensaje de forma clara y concisa, explicando tu propuesta o consulta.'
  },
  {
    icon: Calendar,
    title: 'Agenda',
    description: 'Selecciona el tiempo que necesitas para tu consulta o reunión virtual.'
  },
  {
    icon: CreditCard,
    title: 'Paga',
    description: 'Realiza el pago de forma segura usando cualquiera de nuestros métodos disponibles.'
  },
  {
    icon: ThumbsUp,
    title: 'Conecta',
    description: 'Recibe tu confirmación y prepárate para tu encuentro virtual personalizado.'
  }
];

const Step = ({ step, index, progress }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const variants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'} relative`}>
        <div
          className={`absolute top-0 ${
            index % 2 === 0 ? 'right-6' : 'left-6'
          } w-12 h-12 rounded-full bg-white border-4 border-orange flex items-center justify-center z-10`}
        >
          <span className="text-orange font-bold">{index + 1}</span>
        </div>
        
        <div className={`bg-white rounded-xl shadow-lg p-6 ${
          index % 2 === 0 ? 'text-right' : 'text-left'
        }`}>
          <div className={`flex items-center ${
            index % 2 === 0 ? 'justify-end' : 'justify-start'
          } mb-4`}>
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-orange/10 text-orange">
              <step.icon className="h-6 w-6" />
            </div>
            <div className={`${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}>
              <h3 className="text-xl font-bold text-gray-900">
                {step.title}
              </h3>
            </div>
          </div>
          <p className="text-gray-600">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function HowItWorks({ onNavigate }: HowItWorksProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const ballY = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            ¿Cómo Funciona?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Tu camino hacia conexiones profesionales significativas
          </p>
        </div>

        <div className="mt-20 relative" ref={containerRef}>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange/20 to-orange/5" />
          
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange rounded-full z-20"
            style={{ top: ballY }}
          />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <Step
                key={step.title}
                step={step}
                index={index}
                progress={smoothProgress}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => onNavigate('index')}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-orange hover:bg-orange-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange transition-colors duration-200"
          >
            Empieza tu viaje ahora
          </button>
        </div>
      </div>
    </div>
  );
}
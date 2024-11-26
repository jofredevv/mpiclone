import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, DollarSign, Globe, Lock, UserCheck, Award, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Correos sin spam ni malware',
    description: 'Protección total contra amenazas digitales. Tu perfil público sin exponerte a riesgos de seguridad.'
  },
  {
    icon: Lock,
    title: 'Identidad protegida',
    description: 'Mantén tu privacidad mientras te mantienes accesible. Sin riesgo de robo de identidad.'
  },
  {
    icon: UserCheck,
    title: 'Perfil verificado',
    description: 'Los usuarios saben que contactan directamente contigo. Garantía de autenticidad.'
  },
  {
    icon: Award,
    title: 'Imagen de Marca',
    description: 'Tu página personal profesional con URL personalizada y diseño cuidado.'
  },
  {
    icon: Shield,
    title: 'Usuarios respetuosos',
    description: 'Normas de uso estrictas y sistema de verificación para garantizar comunicaciones de calidad.'
  },
  {
    icon: Clock,
    title: 'El tiempo es oro',
    description: 'Sistema de Tempos que garantiza el interés real de quien contacta contigo.'
  },
  {
    icon: DollarSign,
    title: 'Control total',
    description: 'Tú decides el valor de tu tiempo y puedes destinar los ingresos a causas benéficas.'
  },
  {
    icon: Globe,
    title: 'Mayor presencia digital',
    description: 'Comparte tu perfil en todas las redes sin comprometer tu seguridad.'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PublicProfile() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-accent via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
            Conviértete en un Perfil Público
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las ocho razones por las que tener un Buzón Público en MyPublicInbox
            te ayudará a gestionar mejor tu presencia profesional online.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange/10 mb-4">
                <benefit.icon className="h-6 w-6 text-orange" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* How to Join Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="h-8 w-8 text-orange" />
            <h2 className="text-3xl font-bold text-gray-900">¿Cómo puedo ser Perfil Público?</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 rounded-full bg-orange text-white flex items-center justify-center flex-shrink-0 mt-1">
                1
              </div>
              <p className="text-lg text-gray-700">
                Necesitas una invitación de otro Perfil Público que te apadrine.
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 rounded-full bg-orange text-white flex items-center justify-center flex-shrink-0 mt-1">
                2
              </div>
              <p className="text-lg text-gray-700">
                Si no tienes padrino, puedes contactar con el Perfil Público Ari y contarnos por qué quieres ser Perfil Público.
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 rounded-full bg-orange text-white flex items-center justify-center flex-shrink-0 mt-1">
                3
              </div>
              <p className="text-lg text-gray-700">
                También podrás crear tu Public Inbox directamente si tienes una cuenta en X verificada o con más de 1.000 seguidores.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-orange hover:bg-orange-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange transition-colors duration-200">
            Solicitar invitación
          </button>
          <p className="mt-4 text-gray-600">
            Únete a la comunidad de profesionales que ya gestionan su presencia online de forma inteligente
          </p>
        </motion.div>
      </div>
    </div>
  );
}
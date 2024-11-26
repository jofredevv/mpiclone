import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle, Clock, Shield } from 'lucide-react';
import TemposIcon from './icons/TemposIcon';

const pricingPlans = [
  { tempos: 100, price: 2.50, pack: 1 },
  { tempos: 300, price: 7.00, pack: 1 },
  { tempos: 500, price: 9.00, pack: 1 },
  { tempos: 2000, price: 35.00, pack: 1 },
  { tempos: 5000, price: 85.00, pack: 1 },
  { tempos: 10000, price: 165.00, pack: 1 }
];

const features = [
  {
    icon: MessageCircle,
    title: 'Comunicación Directa',
    description: 'Contacta con perfiles relevantes de forma inmediata'
  },
  {
    icon: Clock,
    title: 'Respuesta Garantizada',
    description: 'Recibe respuesta en un plazo máximo establecido'
  },
  {
    icon: Shield,
    title: 'Seguridad Total',
    description: 'Transacciones y comunicaciones 100% seguras'
  }
];

export default function Pricing() {
  const [quantities, setQuantities] = useState(pricingPlans.reduce((acc, plan) => ({
    ...acc,
    [plan.tempos]: plan.pack
  }), {}));

  const handleQuantityChange = (tempos: number, increment: boolean) => {
    setQuantities(prev => ({
      ...prev,
      [tempos]: Math.max(1, prev[tempos] + (increment ? 1 : -1))
    }));
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-accent via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              ¿Qué son los Tempos?
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Los Tempos son crédito virtual que hemos creado para que puedas comunicarte con cualquiera de nuestros Perfiles Públicos.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange/10 mb-4">
                <feature.icon className="h-6 w-6 text-orange" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.tempos}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-24 h-24 rounded-full bg-orange/10 flex items-center justify-center">
                    <div className="flex items-center -space-x-0.5">
                      <span className="text-2xl font-bold text-orange leading-none">{plan.tempos}</span>
                      <TemposIcon className="w-5 h-5 text-orange translate-y-[2px]" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">TEMPOS</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{plan.price.toFixed(2)}</span>
                  <span className="text-gray-600">€</span>
                </div>
                <div className="flex justify-center items-center space-x-4 mb-6">
                  <button
                    onClick={() => handleQuantityChange(plan.tempos, false)}
                    className="w-8 h-8 rounded-full border-2 border-orange flex items-center justify-center text-orange hover:bg-orange hover:text-white transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-lg font-medium">{quantities[plan.tempos]} pack</span>
                  <button
                    onClick={() => handleQuantityChange(plan.tempos, true)}
                    className="w-8 h-8 rounded-full border-2 border-orange flex items-center justify-center text-orange hover:bg-orange hover:text-white transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button className="w-full bg-orange hover:bg-orange-dark text-white font-medium py-2 px-4 rounded-md transition-colors">
                  Añadir al carrito
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center space-x-2 mb-6">
            <HelpCircle className="h-6 w-6 text-orange" />
            <h2 className="text-2xl font-bold text-gray-900">Información Importante</h2>
          </div>
          <div className="prose prose-orange max-w-none">
            <p className="text-gray-600">
              Lo más importante en toda comunicación es el tiempo que dedican las personas a ese flujo de información así como la información intercambiada en sí misma. Cuando contactas de forma respetuosa con un Perfil Público de MyPublicInbox, va a leerte y a responderte, y además se compromete a hacerlo en un plazo máximo.
            </p>
            <p className="text-gray-600 mt-4">
              Una Unidad de Mensaje se compone entre 200 y 1000 palabras, dependiendo del Perfil Público. Cada Perfil Público pone precio a la lectura y respuesta de las Unidad de Mensaje que recibe. Un mensaje puede estar compuesto por una o más Unidades de Mensaje.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
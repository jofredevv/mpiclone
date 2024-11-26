import React from 'react';
import { Inbox, Shield, Users, Zap } from 'lucide-react';

const features = [
  {
    name: 'Bandeja unificada',
    description:
      'Todos tus mensajes profesionales en un solo lugar, organizados y fáciles de gestionar.',
    icon: Inbox,
  },
  {
    name: 'Máxima seguridad',
    description:
      'Protección avanzada para tus comunicaciones con cifrado de extremo a extremo.',
    icon: Shield,
  },
  {
    name: 'Solo Perfiles Relevantes',
    description:
      'Solo aceptamos perfiles relevantes para garantizar tu satisfaccion .',
    icon: Users,
  },
  {
    name: 'Respuestas rápidas',
    description: 'Garantia de respuesta rapida o te devolvemos el dinero.',
    icon: Zap,
  },
];

export default function Features() {
  return (
    <div id="caracteristicas" className="py-32 bg-gradient-to-b from-white via-white to-[#FFF5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Características principales
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Todo lo que necesitas para gestionar tus comunicaciones
            profesionales
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute h-12 w-12 text-orange">
                  <feature.icon className="h-12 w-12" />
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
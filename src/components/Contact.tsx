import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contacto" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Contacto</h2>
          <p className="mt-4 text-lg text-gray-500">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange focus:ring-orange focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange focus:ring-orange focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange focus:ring-orange focus:ring-opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-dark transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-orange" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-500">contacto@mypublicinbox.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-orange" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Teléfono</h3>
                  <p className="mt-1 text-gray-500">+34 900 123 456</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-orange" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Ubicación</h3>
                  <p className="mt-1 text-gray-500">Madrid, España</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
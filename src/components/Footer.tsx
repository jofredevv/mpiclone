import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Mail className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">MyPublicInbox</span>
            </div>
            <div className="mt-6 space-y-2">
              <a href="#prensa" className="block text-gray-300 hover:text-white transition-colors">
                Notas de prensa
              </a>
              <a href="#perfil" className="block text-gray-300 hover:text-white transition-colors">
                Cómo ser un Perfil Público
              </a>
              <a href="#proyecto" className="block text-gray-300 hover:text-white transition-colors">
                Presenta un proyecto solidario
              </a>
              <a href="#tienda" className="block text-gray-300 hover:text-white transition-colors">
                ¿Tienes una tienda online?
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="#privacidad" className="block text-gray-300 hover:text-white transition-colors">
                Política de privacidad
              </a>
              <a href="#uso" className="block text-gray-300 hover:text-white transition-colors">
                Normas de uso
              </a>
              <a href="#condiciones" className="block text-gray-300 hover:text-white transition-colors">
                Condiciones legales
              </a>
              <a href="#perfiles" className="block text-gray-300 hover:text-white transition-colors">
                Condiciones legales para Perfiles Públicos
              </a>
              <a href="#cookies" className="block text-gray-300 hover:text-white transition-colors">
                Información sobre cookies
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Ayuda</h3>
            <div className="space-y-2">
              <a href="#contacto" className="block text-gray-300 hover:text-white transition-colors">
                Contacto
              </a>
              <a href="#password" className="block text-gray-300 hover:text-white transition-colors">
                Ayuda para reestablecer contraseña
              </a>
              <a href="#ios" className="block text-gray-300 hover:text-white transition-colors">
                Instalar app en iOS
              </a>
              <a href="#guia" className="block text-gray-300 hover:text-white transition-colors">
                Guía de uso de Reputación Online
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} MyPublicInbox. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
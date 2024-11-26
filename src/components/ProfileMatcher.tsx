import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, Check, Euro, Briefcase, Lightbulb, Users, Video, MessageCircle, Calendar, Heart, Target, Newspaper, Mic, Camera, Code, Book, Music, Trophy, Star, Globe, Tv, Gavel, Palette, Building, Laptop, Brain, Stethoscope, ShoppingBag, Gamepad } from 'lucide-react';
import { findMatchingProfiles } from '../utils/profileMatcher';

const steps = [
  {
    id: 'objective',
    title: '¿Cuál es tu objetivo?',
    description: 'Selecciona el motivo principal por el que quieres contactar',
    multiple: false,
    options: [
      { label: 'Propuesta de negocio', icon: Briefcase },
      { label: 'Consultoría o asesoramiento', icon: Lightbulb },
      { label: 'Networking', icon: Users },
      { label: 'Entrevista o colaboración', icon: Video },
      { label: 'Mensaje personal', icon: MessageCircle },
      { label: 'Evento o conferencia', icon: Calendar }
    ]
  },
  {
    id: 'interests',
    title: '¿Qué áreas te interesan?',
    description: 'Selecciona todas las áreas que te interesen',
    multiple: true,
    options: [
      { label: 'Tecnología', icon: Code },
      { label: 'Medios y Comunicación', icon: Newspaper },
      { label: 'Entretenimiento', icon: Mic },
      { label: 'Arte y Cultura', icon: Camera },
      { label: 'Educación', icon: Book },
      { label: 'Música', icon: Music },
      { label: 'Deportes', icon: Trophy },
      { label: 'Negocios', icon: Briefcase },
      { label: 'Innovación', icon: Lightbulb },
      { label: 'Marketing Digital', icon: Globe },
      { label: 'Televisión', icon: Tv },
      { label: 'Legal', icon: Gavel },
      { label: 'Diseño', icon: Palette },
      { label: 'Arquitectura', icon: Building },
      { label: 'Gaming', icon: Gamepad },
      { label: 'Ciencia', icon: Brain },
      { label: 'Salud', icon: Stethoscope },
      { label: 'Moda', icon: ShoppingBag }
    ]
  },
  {
    id: 'sector',
    title: '¿En qué sector trabajas?',
    description: 'Selecciona el sector más relevante para tu propuesta',
    multiple: false,
    options: [
      { label: 'Tecnología y Software', icon: Code },
      { label: 'Medios de Comunicación', icon: Newspaper },
      { label: 'Entretenimiento', icon: Mic },
      { label: 'Arte y Cultura', icon: Camera },
      { label: 'Educación', icon: Book },
      { label: 'Industria Musical', icon: Music },
      { label: 'Deportes Profesionales', icon: Trophy },
      { label: 'Consultoría Empresarial', icon: Briefcase },
      { label: 'Marketing y Publicidad', icon: Target },
      { label: 'Sector Público', icon: Building },
      { label: 'Salud y Bienestar', icon: Stethoscope },
      { label: 'Legal y Jurídico', icon: Gavel },
      { label: 'Arquitectura y Diseño', icon: Palette },
      { label: 'E-commerce', icon: ShoppingBag },
      { label: 'Gaming y E-sports', icon: Gamepad },
      { label: 'Investigación y Ciencia', icon: Brain }
    ]
  },
  {
    id: 'budget',
    title: '¿Cuál es tu presupuesto?',
    description: 'Selecciona el rango de Tempos que tienes disponible',
    multiple: false,
    options: [
      { label: '100 Tempos (2,50€)', icon: Euro },
      { label: '300 Tempos (7,00€)', icon: Euro },
      { label: '500 Tempos (9,00€)', icon: Euro },
      { label: '2000 Tempos (35,00€)', icon: Euro },
      { label: '5000 Tempos (85,00€)', icon: Euro },
      { label: '10000 Tempos (165,00€)', icon: Euro }
    ]
  }
];

interface ProfileMatcherProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileMatcher({ isOpen, onClose }: ProfileMatcherProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({
    objective: '',
    interests: [] as string[],
    sector: '',
    budget: ''
  });
  const [matchedProfiles, setMatchedProfiles] = useState(null);

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleSelect = (option: string) => {
    if (currentStepData.multiple) {
      setSelections(prev => ({
        ...prev,
        [currentStepData.id]: prev[currentStepData.id].includes(option)
          ? prev[currentStepData.id].filter(item => item !== option)
          : [...prev[currentStepData.id], option]
      }));
    } else {
      setSelections(prev => ({
        ...prev,
        [currentStepData.id]: option
      }));
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      const matches = findMatchingProfiles(selections);
      setMatchedProfiles(matches);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelections({
      objective: '',
      interests: [],
      sector: '',
      budget: ''
    });
    setMatchedProfiles(null);
  };

  const isOptionSelected = (option: string) => {
    const currentSelection = selections[currentStepData.id];
    return Array.isArray(currentSelection)
      ? currentSelection.includes(option)
      : currentSelection === option;
  };

  const canProceed = () => {
    const currentSelection = selections[currentStepData.id];
    return Array.isArray(currentSelection)
      ? currentSelection.length > 0
      : Boolean(currentSelection);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <div className="absolute right-4 top-4">
                  <button
                    onClick={onClose}
                    className="rounded-full p-2 hover:bg-gray-100 transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1 bg-gray-200 rounded-full mb-8">
                  <motion.div
                    className="h-full bg-orange rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {!matchedProfiles ? (
                  <>
                    <Dialog.Title className="text-2xl font-bold text-gray-900 mb-2">
                      {currentStepData.title}
                    </Dialog.Title>
                    <Dialog.Description className="text-gray-600 mb-6">
                      {currentStepData.description}
                    </Dialog.Description>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {currentStepData.options.map((option) => (
                        <button
                          key={option.label}
                          onClick={() => handleSelect(option.label)}
                          className={`flex items-center p-4 rounded-lg border-2 transition-colors ${
                            isOptionSelected(option.label)
                              ? 'border-orange bg-orange/5 text-orange'
                              : 'border-gray-200 hover:border-orange/50'
                          }`}
                        >
                          <option.icon className="h-5 w-5 mr-3" />
                          <span>{option.label}</span>
                          {isOptionSelected(option.label) && (
                            <Check className="h-5 w-5 ml-auto" />
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={handleBack}
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                          currentStep === 0
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                        disabled={currentStep === 0}
                      >
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Anterior
                      </button>
                      <button
                        onClick={handleNext}
                        disabled={!canProceed()}
                        className={`flex items-center px-6 py-2 rounded-lg ${
                          canProceed()
                            ? 'bg-orange text-white hover:bg-orange-dark'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {currentStep === steps.length - 1 ? 'Encontrar perfiles' : 'Siguiente'}
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </button>
                    </div>
                  </>
                ) : (
                  <div>
                    <Dialog.Title className="text-2xl font-bold text-gray-900 mb-6">
                      Perfiles recomendados para ti
                    </Dialog.Title>

                    <div className="space-y-6 mb-8">
                      {matchedProfiles.map((match, index) => (
                        <div
                          key={match.profile.username}
                          className="flex items-start p-4 rounded-lg border border-gray-200 hover:border-orange/50 transition-colors"
                        >
                          <img
                            src={match.profile.image}
                            alt={match.profile.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="ml-4 flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold">
                                {match.profile.name}
                              </h3>
                              <div className="flex items-center space-x-4">
                                <span className="text-orange font-medium">
                                  {Math.round(match.score * 100)}% match
                                </span>
                                <span className="text-gray-600 font-medium">
                                  {match.profile.tempos} Tempos
                                </span>
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm mt-1">
                              {match.profile.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {match.matchReasons.map((reason, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center px-2 py-1 rounded-full bg-orange/10 text-orange text-xs"
                                >
                                  <Check className="h-3 w-3 mr-1" />
                                  {reason}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={handleReset}
                        className="flex items-center px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Volver a empezar
                      </button>
                      <button
                        onClick={onClose}
                        className="flex items-center px-6 py-2 rounded-lg bg-orange text-white hover:bg-orange-dark"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
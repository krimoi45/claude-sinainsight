import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Claude SinaiInsight
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-300">
          Plateforme de monitoring en temps réel des scénarios d&apos;automatisation
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Tableau de bord en temps réel</h2>
            <p className="text-gray-600 dark:text-gray-300">Visualisation complète de l&apos;état et de la progression des scénarios.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Système d&apos;alertes</h2>
            <p className="text-gray-600 dark:text-gray-300">Notifications instantanées des problèmes rencontrés lors de l&apos;exécution.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Captures d&apos;écran</h2>
            <p className="text-gray-600 dark:text-gray-300">Visualisation des étapes d&apos;exécution pour faciliter le débogage.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Logs détaillés</h2>
            <p className="text-gray-600 dark:text-gray-300">Consultation des journaux d&apos;exécution avec options de filtrage avancées.</p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/monitoring" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Accéder au monitoring
          </Link>
          
          <Link href="/dashboard" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Tableau de bord
          </Link>
        </div>
      </div>
    </div>
  );
}
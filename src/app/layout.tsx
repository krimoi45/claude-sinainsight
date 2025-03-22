import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Claude SinaiInsight - Monitoring en Temps Réel',
  description: 'Application de monitoring en temps réel des scénarios d\'automatisation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
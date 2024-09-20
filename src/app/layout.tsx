// src/app/layout.tsx



import { ReactNode } from 'react';
import Head from 'next/head';

export const metadata = {
  title: "Sonar",
  description: "Welcome to Sonar",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Add metadata here */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        
        {/* Link to the favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body style={{ backgroundColor: "#7209b7", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
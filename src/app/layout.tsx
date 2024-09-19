// src/app/layout.tsx



import { ReactNode } from 'react';

export const metadata = {
  title: "Sonar",
  description: "Welcome to Sonar",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#7209b7", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}

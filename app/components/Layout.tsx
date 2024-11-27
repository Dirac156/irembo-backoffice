import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="p-4" style={{ backgroundColor: '#0073e6' }}>
        <h1 className="text-2xl font-bold text-white">Irembo Back Office</h1>
      </nav>
      <main className="container mx-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;

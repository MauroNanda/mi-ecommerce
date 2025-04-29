import React from 'react';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <h1 className="text-5xl font-bold text-white mb-6">Bienvenido a mi E-Commerce</h1>
      <p className="text-xl text-white mb-8">La mejor calidad, al mejor precio</p>
      <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-100 transition-all">
        Ver Productos
      </button>
    </div>
  );
}

export default Home;

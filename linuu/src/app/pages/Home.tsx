"use client";

import Card from '../components/card';
import { useEffect, useState } from 'react';

export default function Home() {
  type Articulo = {
    id: number;
    nombre: string;
    imagen: string;
    precio: number;
  };

  const [articulos, setArticulos] = useState<Articulo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5013/api/Articulos')  // URL de tu API
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
      })
      .then(data => {
        console.log('Respuesta recibida:', data.$values);
        setArticulos(data.$values);
        setLoading(false);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los artículos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando artículos...</p>;

  return (
    <div className="w-full h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/assets/FondoHome.png')" }}>
      {/*<div className="w-full flex justify-end pr-2 text-blue-400">
            <button className="border border-green-400 text-green-800 px-3 hover:bg-green-100 mb-3 rounded-xl">
              Ver más
            </button>
          </div>
      <div className="overflow-x-auto whitespace-nowrap scroll-smooth gap-4 p-4">
        {articulos.map((art) => (
          <Card
            key={art.id}
            title={art.nombre}
            image={art.imagen}
            price={art.precio}
          />
        ))}
      </div>*/}
      <div className="p-10 rounded-xl text-center text-black fontbold max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          ¡Bienvenido a Linuu!
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Encuentra los mejores productos al mejor precio, justo al alcance de un clic.
        </p>
          <button className="bg-orange-500 hover:border-orange-700 hover:text-gray-200 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition duration-300">
            Explorar productos
          </button>
      </div>
    </div>
  );
}



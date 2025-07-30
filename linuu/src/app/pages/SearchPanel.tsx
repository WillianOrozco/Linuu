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
    <div className="flex w-full min-h-screen">
      <div className="w-1/6 bg-gray-100 p-4 border-r border-gray-300">
        <h1 className="text-2xl mb-4">Categorías</h1>
        <ul className="space-y-2">
          <li><button className="text-gray-500">Electrónica</button></li>
          <li><button className="text-gray-500">Ropa</button></li>
          <li><button className="text-gray-500">Hogar</button></li>
          <li><button className="text-gray-500">Libros</button></li>
        </ul>
      </div>

      <div className="w-5/6 p-6">
        <main className="">
          <h1 className="text-4xl font-bold text-center text-black mb-8">Catálogo de Productos</h1>
          {/*<div className="w-full flex justify-end pr-2 text-blue-400">
            <button className="border border-green-400 text-green-800 px-3 hover:bg-green-100 mb-3 rounded-xl">
              Ver más
            </button>
          </div>*/}
          <div className="overflow-x-auto whitespace-nowrap scroll-smooth gap-4 p-4">
            {articulos.map((art) => (
              <Card
                key={art.id}
                title={art.nombre}
                image={art.imagen}
                price={art.precio}
              />
            ))}
          </div>
        </main>
      </div>
    </div>

  );
}



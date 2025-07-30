// components/Navbar.tsx


export default function Navbar() {
  return (
    <nav className="bg-orange-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <h1 className="text-3xl font-bold mr-5">Linuu</h1>
          <ul className="flex items-center space-x-6">
            <li><a href="#" className="hover:text-gray-200">Categorías</a></li>
          </ul>
        </div>
        <div className="flex space-x-3">
          <input
            className="bg-gray-100 rounded text-gray-400 px-2 focus:outline-none focus:border-none"
            type="search"
            placeholder="Buscar..."
          />
          <button className="border p-2 rounded hover:border-orange-700  hover:bg-orange-700 transition duration-300">Buscar</button>
        </div>
        <ul className="flex items-center space-x-6">
          <li><a href="#" className="hover:text-gray-200">Ayuda</a></li>
          <li><a href="#" className="hover:text-gray-200">Regístrate</a></li>
          <li><a href="#" className="border p-3 rounded hover:border-orange-700  hover:bg-orange-700 transition duration-300">Iniciar Sesión</a></li>
        </ul>
      </div>
    </nav>
  );
}
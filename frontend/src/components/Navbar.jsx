function Navbar() {
    return (
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Mi Ecommerce</div>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-gray-400">Inicio</a></li>
          <li><a href="#" className="hover:text-gray-400">Productos</a></li>
          <li><a href="#" className="hover:text-gray-400">Nosotros</a></li>
          <li><a href="#" className="hover:text-gray-400">Contacto</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  
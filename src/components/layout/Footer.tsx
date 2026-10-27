import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#B8D8F8] to-[#D8C8F0] flex items-center justify-center">
                <span className="text-[#30343B] font-bold text-lg">C</span>
              </div>
              <span className="text-2xl font-bold text-[#30343B]">CUBIQ</span>
            </div>
            <p className="text-gray-600 mb-4">
              Tu tienda especializada en cubos de Rubik y rompecabezas mecánicos. Velocidad, lógica y diversión en un solo lugar.
            </p>
            <div className="flex space-x-4">
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-[#30343B] mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-[#30343B] transition-colors">Inicio</Link></li>
              <li><Link to="/productos" className="text-gray-600 hover:text-[#30343B] transition-colors">Todos los productos</Link></li>
              <li><Link to="/favoritos" className="text-gray-600 hover:text-[#30343B] transition-colors">Favoritos</Link></li>
              <li><Link to="/carrito" className="text-gray-600 hover:text-[#30343B] transition-colors">Carrito</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="font-semibold text-[#30343B] mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li><Link to="/productos?categoria=Cubos 3x3" className="text-gray-600 hover:text-[#30343B] transition-colors">Cubos 3x3</Link></li>
              <li><Link to="/productos?categoria=Cubos 2x2" className="text-gray-600 hover:text-[#30343B] transition-colors">Cubos 2x2</Link></li>
              <li><Link to="/productos?categoria=Cubos profesionales" className="text-gray-600 hover:text-[#30343B] transition-colors">Profesionales</Link></li>
              <li><Link to="/productos?categoria=Megaminx y variantes" className="text-gray-600 hover:text-[#30343B] transition-colors">Megaminx</Link></li>
              <li><Link to="/productos?categoria=Accesorios y lubricantes" className="text-gray-600 hover:text-[#30343B] transition-colors">Accesorios</Link></li>
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h3 className="font-semibold text-[#30343B] mb-4">Información</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#30343B] transition-colors">Preguntas frecuentes</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#30343B] transition-colors">Políticas de privacidad</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#30343B] transition-colors">Términos y condiciones</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#30343B] transition-colors">Envíos y devoluciones</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#30343B] transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-8 text-center">
          <p className="text-gray-600">&copy; 2026 CUBIQ. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

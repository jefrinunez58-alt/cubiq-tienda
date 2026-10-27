import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getItemCount } = useCart();
  const navigate = useNavigate();
  
  const itemCount = getItemCount();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/productos?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };
  
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#B8D8F8] to-[#D8C8F0] flex items-center justify-center">
              <span className="text-[#30343B] font-bold text-lg">C</span>
            </div>
            <span className="text-2xl font-bold text-[#30343B]">CUBIQ</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-[#30343B] hover:text-[#6b46c1] transition-colors">Inicio</Link>
            <Link to="/productos" className="text-[#30343B] hover:text-[#6b46c1] transition-colors">Todos los productos</Link>
            <Link to="/productos?categoria=Cubos 2x2" className="text-[#30343B] hover:text-[#6b46c1] transition-colors">Cubos 2x2</Link>
            <Link to="/productos?categoria=Cubos 3x3" className="text-[#30343B] hover:text-[#6b46c1] transition-colors">Cubos 3x3</Link>
            <Link to="/productos?categoria=Cubos profesionales" className="text-[#30343B] hover:text-[#6b46c1] transition-colors">Profesionales</Link>
            <Link to="/productos?categoria=Megaminx y variantes" className="text-[#30343B] hover:text-[#6b46c1] transition-colors">Megaminx</Link>
            <Link to="/productos?categoria=Accesorios y lubricantes" className="text-[#30343B] hover:text-[#6b46c1] transition-colors">Accesorios</Link>
            <Link to="/productos?categoria=Packs y promociones" className="text-[#30343B] hover:text-[#6b46c1] transition-colors">Ofertas</Link>
          </div>
          
          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar cubos..."
                  className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8C8F0] focus:border-transparent w-48 lg:w-64"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </form>
            
            {/* Favorites */}
            <Link to="/favoritos" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <Heart className="h-5 w-5 text-[#30343B]" />
            </Link>
            
            {/* Cart */}
            <Link to="/carrito" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart className="h-5 w-5 text-[#30343B]" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#F6C8D0] text-[#30343B] text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </Link>
            
            {/* User */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="h-5 w-5 text-[#30343B]" />
            </button>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar cubos..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8C8F0]"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </form>
            
            <Link to="/" className="block py-2 text-[#30343B] hover:text-[#6b46c1]">Inicio</Link>
            <Link to="/productos" className="block py-2 text-[#30343B] hover:text-[#6b46c1]">Todos los productos</Link>
            <Link to="/productos?categoria=Cubos 2x2" className="block py-2 text-[#30343B] hover:text-[#6b46c1]">Cubos 2x2</Link>
            <Link to="/productos?categoria=Cubos 3x3" className="block py-2 text-[#30343B] hover:text-[#6b46c1]">Cubos 3x3</Link>
            <Link to="/productos?categoria=Cubos profesionales" className="block py-2 text-[#30343B] hover:text-[#6b46c1]">Cubos profesionales</Link>
            <Link to="/productos?categoria=Megaminx y variantes" className="block py-2 text-[#30343B] hover:text-[#6b46c1]">Megaminx y otras variantes</Link>
            <Link to="/productos?categoria=Accesorios y lubricantes" className="block py-2 text-[#30343B] hover:text-[#6b46c1]">Accesorios</Link>
            <Link to="/productos?categoria=Packs y promociones" className="block py-2 text-[#30343B] hover:text-[#6b46c1]">Ofertas</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

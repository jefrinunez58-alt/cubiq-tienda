
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#B8D8F8]/30 to-[#D8C8F0]/30 py-16 lg:py-24">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#F6C8D0]/40 rounded-lg rotate-12"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-[#BFE8D0]/40 rounded-full"></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-[#F8E7A1]/40 rounded-lg -rotate-12"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#30343B] mb-6 leading-tight">
              Velocidad,{' '}
              <span className="bg-gradient-to-r from-[#6b46c1] to-[#9333ea] bg-clip-text text-transparent">
                Lógica
              </span>
              {' '}y{' '}
              <span className="bg-gradient-to-r from-[#ec4899] to-[#f59e0b] bg-clip-text text-transparent">
                Desafío
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Descubre la mejor selección de cubos de Rubik y rompecabezas mecánicos. 
              Desde principiantes hasta speedcubers profesionales, encuentra tu próximo desafío.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/productos">
                <Button size="lg" className="w-full sm:w-auto">
                  Explorar productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/productos?categoria=Packs y promociones">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Ver ofertas
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <img 
                  src="/images/products/cube-001.jpg" 
                  alt="Cubo 3x3 magnético"
                  className="w-full aspect-square object-contain"
                />
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg transform -rotate-3 hover:-rotate-6 transition-transform duration-300 mt-8">
                <img 
                  src="/images/products/cube-002.jpg" 
                  alt="Cubo 2x2"
                  className="w-full aspect-square object-contain"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#D8C8F0]/20 to-[#B8D8F8]/20 rounded-3xl transform scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

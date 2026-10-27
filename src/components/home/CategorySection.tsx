
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import { ArrowRight } from 'lucide-react';

export const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#30343B] mb-4">
            Categorías Destacadas
          </h2>
          <p className="text-gray-600 text-lg">
            Encuentra el cubo perfecto para tu nivel y estilo
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, 6).map((category) => (
            <Link
              key={category.id}
              to={`/productos?categoria=${encodeURIComponent(category.name)}`}
              className="group"
            >
              <div className={`${category.backgroundColor} rounded-2xl p-6 h-full hover:shadow-md transition-shadow duration-300 border border-white/50`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-white/80 rounded-xl flex items-center justify-center">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-12 h-12 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <ArrowRight className="h-5 w-5 text-[#30343B] group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-[#30343B] mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-700 text-sm">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

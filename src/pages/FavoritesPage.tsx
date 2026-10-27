
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { products } from '../data/products';
import { ProductCard } from '../components/products/ProductCard';
import { Heart } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const favoriteProducts = products.filter(p => favorites.includes(p.id) && p.isActive);
  
  if (favoriteProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-[#30343B] mb-4">No tienes favoritos</h2>
        <p className="text-gray-600 mb-6">Guarda tus productos favoritos para verlos aquí</p>
        <Link to="/productos">
          <Button>Explorar productos</Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-[#30343B] mb-8">Mis Favoritos</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

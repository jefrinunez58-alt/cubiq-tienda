import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import type { Product } from '../../types/product';
import { formatCOP, calculateDiscount } from '../../lib/currency';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import { Button } from '../ui/Button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0]);
  const { addItem } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const currentPrice = selectedVariant?.price || product.price;
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > currentPrice;
  const discount = hasDiscount ? calculateDiscount(product.compareAtPrice!, currentPrice) : 0;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.stock === 0) return;
    
    const cartItem = {
      id: `${product.id}-${selectedVariant?.id || 'default'}`,
      productId: product.id,
      name: product.name,
      image: selectedVariant?.image || product.images[0],
      price: currentPrice,
      quantity: 1,
      variantId: selectedVariant?.id,
      colorName: selectedVariant?.colorName,
      colorHex: selectedVariant?.colorHex
    };
    
    addItem(cartItem);
  };
  
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(product.id);
  };
  
  return (
    <Link to={`/producto/${product.slug}`} className="group">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-square bg-gray-50 overflow-hidden">
          <img
            src={selectedVariant?.image || product.images[0]}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-[#BFE8D0] text-[#30343B] px-2 py-1 rounded-full text-xs font-medium">
                Nuevo
              </span>
            )}
            {hasDiscount && (
              <span className="bg-[#F6C8D0] text-[#30343B] px-2 py-1 rounded-full text-xs font-medium">
                -{discount}%
              </span>
            )}
            {product.stock === 0 && (
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                Agotado
              </span>
            )}
          </div>
          
          {/* Favorite button */}
          <button
            onClick={handleToggleFavorite}
            className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full shadow-sm transition-colors"
            aria-label="Agregar a favoritos"
          >
            <Heart className={`h-4 w-4 ${isFavorite(product.id) ? 'fill-[#F6C8D0] text-[#F6C8D0]' : 'text-gray-600'}`} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <div className="mb-2">
            <p className="text-xs text-gray-500 mb-1">{product.category}</p>
            <h3 className="font-semibold text-[#30343B] line-clamp-2 group-hover:text-[#6b46c1] transition-colors">
              {product.name}
            </h3>
            {product.brand && (
              <p className="text-xs text-gray-500 mt-1">{product.brand}</p>
            )}
          </div>
          
          {/* Price */}
          <div className="mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-[#30343B]">
                {formatCOP(currentPrice)}
              </span>
              {hasDiscount && (
                <span className="text-sm text-gray-400 line-through">
                  {formatCOP(product.compareAtPrice!)}
                </span>
              )}
            </div>
          </div>
          
          {/* Color variants */}
          {product.variants && product.variants.length > 0 && (
            <div className="mb-3">
              <div className="flex gap-1">
                {product.variants.slice(0, 4).map((variant) => (
                  <button
                    key={variant.id}
                    onClick={(e) => {
                      e.preventDefault();
                      if (variant.stock > 0) setSelectedVariant(variant);
                    }}
                    className={`w-6 h-6 rounded-full border-2 transition-all ${
                      selectedVariant?.id === variant.id 
                        ? 'border-[#6b46c1] scale-110' 
                        : 'border-gray-300'
                    } ${variant.stock === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
                    style={{ backgroundColor: variant.colorHex }}
                    title={variant.colorName}
                    disabled={variant.stock === 0}
                    aria-label={`Color ${variant.colorName}`}
                  />
                ))}
                {product.variants.length > 4 && (
                  <span className="text-xs text-gray-500 flex items-center">+{product.variants.length - 4}</span>
                )}
              </div>
            </div>
          )}
          
          {/* Stock status */}
          <div className="mb-3">
            {product.stock === 0 ? (
              <span className="text-xs text-red-500">Agotado</span>
            ) : product.stock < 5 ? (
              <span className="text-xs text-orange-500">Últimas {product.stock} unidades</span>
            ) : (
              <span className="text-xs text-green-600">Disponible</span>
            )}
          </div>
          
          {/* Add to cart button */}
          <Button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            size="sm"
            className="w-full mt-auto"
            variant={product.stock === 0 ? 'ghost' : 'primary'}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.stock === 0 ? 'Agotado' : 'Agregar al carrito'}
          </Button>
        </div>
      </div>
    </Link>
  );
};

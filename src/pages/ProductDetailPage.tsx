import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { formatCOP, calculateDiscount } from '../lib/currency';
import { Button } from '../components/ui/Button';
import { ShoppingCart, Heart, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

export const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0]);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-[#30343B] mb-4">Producto no encontrado</h2>
        <Link to="/productos">
          <Button>Volver al catálogo</Button>
        </Link>
      </div>
    );
  }
  
  const currentPrice = selectedVariant?.price || product.price;
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > currentPrice;
  const discount = hasDiscount ? calculateDiscount(product.compareAtPrice!, currentPrice) : 0;
  const maxStock = selectedVariant?.stock || product.stock;
  
  const handleAddToCart = () => {
    if (maxStock === 0) return;
    
    const cartItem = {
      id: `${product.id}-${selectedVariant?.id || 'default'}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      image: selectedVariant?.image || product.images[0],
      price: currentPrice,
      quantity: quantity,
      variantId: selectedVariant?.id,
      colorName: selectedVariant?.colorName,
      colorHex: selectedVariant?.colorHex
    };
    
    addItem(cartItem);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/productos" className="inline-flex items-center text-gray-600 hover:text-[#30343B] mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Volver al catálogo
      </Link>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-4">
            <img
              src={selectedVariant?.image || product.images[0]}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <h1 className="text-3xl lg:text-4xl font-bold text-[#30343B] mb-2">{product.name}</h1>
            {product.brand && <p className="text-gray-600">{product.brand}</p>}
          </div>
          
          {/* Price */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-[#30343B]">
                {formatCOP(currentPrice)}
              </span>
              {hasDiscount && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    {formatCOP(product.compareAtPrice!)}
                  </span>
                  <span className="bg-[#F6C8D0] text-[#30343B] px-2 py-1 rounded-full text-sm font-medium">
                    -{discount}%
                  </span>
                </>
              )}
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>
          
          {/* Variants */}
          {product.variants && product.variants.length > 0 && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#30343B] mb-2">Color</label>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => variant.stock > 0 && setSelectedVariant(variant)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
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
              </div>
              {selectedVariant && (
                <p className="text-sm text-gray-600 mt-2">{selectedVariant.colorName}</p>
              )}
            </div>
          )}
          
          {/* Stock */}
          <div className="mb-6">
            {maxStock === 0 ? (
              <p className="text-red-500 font-medium">Agotado</p>
            ) : maxStock < 5 ? (
              <p className="text-orange-500 font-medium">Últimas {maxStock} unidades disponibles</p>
            ) : (
              <p className="text-green-600 font-medium">Disponible ({maxStock} unidades)</p>
            )}
          </div>
          
          {/* Quantity */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#30343B] mb-2">Cantidad</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100"
                disabled={maxStock === 0}
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(maxStock, quantity + 1))}
                className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100"
                disabled={maxStock === 0}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex gap-4 mb-8">
            <Button
              onClick={handleAddToCart}
              disabled={maxStock === 0}
              size="lg"
              className="flex-1"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {maxStock === 0 ? 'Agotado' : 'Agregar al carrito'}
            </Button>
            <button
              onClick={() => toggleFavorite(product.id)}
              className="p-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Agregar a favoritos"
            >
              <Heart className={`h-6 w-6 ${isFavorite(product.id) ? 'fill-[#F6C8D0] text-[#F6C8D0]' : 'text-gray-600'}`} />
            </button>
          </div>
          
          {/* Characteristics */}
          {product.characteristics && product.characteristics.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-[#30343B] mb-2">Características</h3>
              <ul className="space-y-1">
                {product.characteristics.map((char, index) => (
                  <li key={index} className="text-gray-700">• {char}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

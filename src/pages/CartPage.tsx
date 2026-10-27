
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCOP } from '../lib/currency';
import { Button } from '../components/ui/Button';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';

export const CartPage = () => {
  const { items, removeItem, updateQuantity, getTotal } = useCart();
  const total = getTotal();
  
  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-[#30343B] mb-4">Tu carrito está vacío</h2>
        <p className="text-gray-600 mb-6">Agrega algunos productos para comenzar tu compra</p>
        <Link to="/productos">
          <Button>Explorar productos</Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-[#30343B] mb-8">Carrito de compras</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-contain bg-gray-50 rounded-lg"
              />
              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-[#30343B]">{item.name}</h3>
                    {item.colorName && (
                      <p className="text-sm text-gray-600">Color: {item.colorName}</p>
                    )}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Eliminar producto"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-[#30343B]">{formatCOP(item.price * item.quantity)}</p>
                    <p className="text-sm text-gray-600">{formatCOP(item.price)} c/u</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
            <h2 className="text-xl font-semibold text-[#30343B] mb-4">Resumen de compra</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-[#30343B]">{formatCOP(total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Envío</span>
                <span className="text-[#30343B]">Por calcular</span>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-[#30343B]">Total</span>
                <span className="text-[#30343B]">{formatCOP(total)}</span>
              </div>
            </div>
            <Link to="/checkout">
              <Button className="w-full mb-3">Iniciar compra</Button>
            </Link>
            <Link to="/productos">
              <Button variant="outline" className="w-full">Seguir comprando</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

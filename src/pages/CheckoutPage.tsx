import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCOP } from '../lib/currency';
import { Button } from '../components/ui/Button';
import { ChevronLeft } from 'lucide-react';

export const CheckoutPage = () => {
  const { items, getTotal, clearCart } = useCart();
  const total = getTotal();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: '',
    city: '',
    address: ''
  });
  const [orderComplete, setOrderComplete] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo checkout - no real payment
    setOrderComplete(true);
    clearCart();
  };
  
  if (items.length === 0 && !orderComplete) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-[#30343B] mb-4">No hay productos en el carrito</h2>
        <Link to="/productos">
          <Button>Volver al catálogo</Button>
        </Link>
      </div>
    );
  }
  
  if (orderComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="bg-[#BFE8D0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">✓</span>
        </div>
        <h2 className="text-2xl font-bold text-[#30343B] mb-4">¡Pedido recibido!</h2>
        <p className="text-gray-600 mb-6">
          Gracias por tu compra. Este es un checkout de demostración, no se ha realizado ningún pago real.
        </p>
        <Link to="/">
          <Button>Volver al inicio</Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/carrito" className="inline-flex items-center text-gray-600 hover:text-[#30343B] mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Volver al carrito
      </Link>
      
      <h1 className="text-3xl font-bold text-[#30343B] mb-8">Finalizar compra</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-semibold text-[#30343B] mb-4">Datos del comprador</h2>
            
            <div>
              <label className="block text-sm font-medium text-[#30343B] mb-1">Nombre completo *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8C8F0]"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#30343B] mb-1">Correo electrónico *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8C8F0]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#30343B] mb-1">Teléfono *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8C8F0]"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#30343B] mb-1">Departamento *</label>
                <input
                  type="text"
                  required
                  value={formData.department}
                  onChange={(e) => setFormData({...formData, department: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8C8F0]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#30343B] mb-1">Ciudad *</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8C8F0]"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#30343B] mb-1">Dirección de entrega *</label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8C8F0]"
              />
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-gray-600 mb-4">
                * Checkout de demostración. No se solicitarán datos de tarjeta bancaria.
              </p>
              <Button type="submit" size="lg" className="w-full">
                Confirmar pedido
              </Button>
            </div>
          </form>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
            <h2 className="text-xl font-semibold text-[#30343B] mb-4">Resumen del pedido</h2>
            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-contain bg-gray-50 rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#30343B] truncate">{item.name}</p>
                    <p className="text-xs text-gray-600">Cant: {item.quantity}</p>
                    <p className="text-sm font-semibold text-[#30343B]">{formatCOP(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-[#30343B]">{formatCOP(total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Envío</span>
                <span className="text-[#30343B]">Por calcular</span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between text-lg font-semibold">
                <span className="text-[#30343B]">Total</span>
                <span className="text-[#30343B]">{formatCOP(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

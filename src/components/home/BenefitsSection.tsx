
import { Puzzle, Package, DollarSign, ShoppingBag, Truck } from 'lucide-react';

const benefits = [
  {
    icon: Puzzle,
    title: 'Para todos los niveles',
    description: 'Productos para principiantes y speedcubers'
  },
  {
    icon: Package,
    title: 'Disponibilidad garantizada',
    description: 'Stock actualizado constantemente'
  },
  {
    icon: DollarSign,
    title: 'Precios en COP',
    description: 'Todos los precios en pesos colombianos'
  },
  {
    icon: ShoppingBag,
    title: 'Compra intuitiva',
    description: 'Proceso de compra fácil y rápido'
  },
  {
    icon: Truck,
    title: 'Información clara',
    description: 'Detalles sobre envíos y devoluciones'
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#30343B] mb-4">
            ¿Por qué elegir CUBIQ?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B8D8F8] to-[#D8C8F0] rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-[#30343B]" />
              </div>
              <h3 className="font-semibold text-[#30343B] mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import type { Promotion } from '../types/product';

export const promotions: Promotion[] = [
  {
    id: 'promo-001',
    title: 'Descuentos en Cubos Profesionales',
    description: 'Hasta 20% de descuento en modelos premium',
    image: '/images/products/cube-pro-promo.jpg',
    buttonText: 'Ver Cubos Profesionales',
    buttonLink: '/productos?categoria=Cubos profesionales'
  },
  {
    id: 'promo-002',
    title: 'Nuevos Modelos Disponibles',
    description: 'Descubre las últimas novedades en cubos magnéticos',
    image: '/images/products/cube-new-promo.jpg',
    buttonText: 'Ver Novedades',
    buttonLink: '/productos'
  },
  {
    id: 'promo-003',
    title: 'Combos para Principiantes',
    description: 'Packs completos con todo lo necesario para empezar',
    image: '/images/products/pack-promo.jpg',
    buttonText: 'Ver Packs',
    buttonLink: '/productos?categoria=Packs y promociones'
  }
];
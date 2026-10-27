import type { Category } from '../types/product';

export const categories: Category[] = [
  {
    id: 'cat-001',
    name: 'Cubos 2x2',
    slug: 'cubos-2x2',
    description: 'Pequeños y rápidos para principiantes',
    image: '/images/products/cube-2x2.jpg',
    backgroundColor: 'bg-[#B8D8F8]'
  },
  {
    id: 'cat-002',
    name: 'Cubos 3x3',
    slug: 'cubos-3x3',
    description: 'El clásico, ideal para todos',
    image: '/images/products/cube-3x3.jpg',
    backgroundColor: 'bg-[#D8C8F0]'
  },
  {
    id: 'cat-003',
    name: 'Cubos 4x4 y superiores',
    slug: 'cubos-4x4-superiores',
    description: 'Mayor desafío para expertos',
    image: '/images/products/cube-4x4.jpg',
    backgroundColor: 'bg-[#F6C8D0]'
  },
  {
    id: 'cat-004',
    name: 'Cubos profesionales',
    slug: 'cubos-profesionales',
    description: 'Para speedcubers serios',
    image: '/images/products/cube-pro.jpg',
    backgroundColor: 'bg-[#BFE8D0]'
  },
  {
    id: 'cat-005',
    name: 'Megaminx y variantes',
    slug: 'megaminx-variantes',
    description: 'Formas únicas y fascinantes',
    image: '/images/products/megaminx.jpg',
    backgroundColor: 'bg-[#F8E7A1]'
  },
  {
    id: 'cat-006',
    name: 'Cubos magnéticos',
    slug: 'cubos-magneticos',
    description: 'Mayor estabilidad y control',
    image: '/images/products/cube-magnetic.jpg',
    backgroundColor: 'bg-[#F8D0B5]'
  },
  {
    id: 'cat-007',
    name: 'Cubos para principiantes',
    slug: 'cubos-principiantes',
    description: 'Fáciles de girar y aprender',
    image: '/images/products/cube-beginner.jpg',
    backgroundColor: 'bg-[#B8D8F8]'
  },
  {
    id: 'cat-008',
    name: 'Accesorios y lubricantes',
    slug: 'accesorios-lubricantes',
    description: 'Todo para mantener tus cubos',
    image: '/images/products/accessories.jpg',
    backgroundColor: 'bg-[#D8C8F0]'
  },
  {
    id: 'cat-009',
    name: 'Packs y promociones',
    slug: 'packs-promociones',
    description: 'Combos con ahorro',
    image: '/images/products/packs.jpg',
    backgroundColor: 'bg-[#F6C8D0]'
  }
];
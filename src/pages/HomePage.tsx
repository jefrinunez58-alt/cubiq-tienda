
import { Hero } from '../components/home/Hero';
import { CategorySection } from '../components/home/CategorySection';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { BenefitsSection } from '../components/home/BenefitsSection';

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <BenefitsSection />
    </div>
  );
};

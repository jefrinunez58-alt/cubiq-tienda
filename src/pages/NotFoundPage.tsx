
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Home } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-[#30343B] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-[#30343B] mb-4">Página no encontrada</h2>
      <p className="text-gray-600 mb-8">
        La página que buscas no existe o ha sido movida.
      </p>
      <Link to="/">
        <Button>
          <Home className="h-4 w-4 mr-2" />
          Volver al inicio
        </Button>
      </Link>
    </div>
  );
};

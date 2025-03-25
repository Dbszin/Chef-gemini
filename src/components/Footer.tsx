
import React from 'react';
import { ChefHat } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ChefHat className="w-6 h-6 text-culinary-red" />
              <h3 className="text-xl font-serif font-bold">Chef-gemini</h3>
            </div>
            <p className="text-muted-foreground">
              Seu assistente culinário inteligente para descobrir receitas incríveis e dicas de cozinha.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-culinary-red transition-colors">Início</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-culinary-red transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-culinary-red transition-colors">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-culinary-red transition-colors">Ajuda</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-culinary-red transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-culinary-red transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-muted text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Chef-gemini. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

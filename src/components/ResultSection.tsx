
import React from 'react';

// This component will be shown when a search is performed
// For now it's a placeholder that will be replaced with the actual AI response
const ResultSection = ({ isVisible = false }) => {
  if (!isVisible) return null;
  
  return (
    <section className="py-16 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-serif font-semibold mb-6">Resultado da Pesquisa</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-3 text-culinary-red">Ingredientes</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ingrediente 1</li>
                  <li>Ingrediente 2</li>
                  <li>Ingrediente 3</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-culinary-orange">Modo de Preparo</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>Passo 1 da preparação</li>
                  <li>Passo 2 da preparação</li>
                  <li>Passo 3 da preparação</li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-culinary-yellow">Dicas Adicionais</h3>
                <p className="text-muted-foreground">
                  Aqui ficarão as dicas adicionais fornecidas pela IA para aprimorar sua receita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultSection;

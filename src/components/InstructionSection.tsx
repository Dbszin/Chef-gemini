
import React from 'react';
import { 
  Utensils, Search, Heart, Salad, ChefHat, 
  CalendarDays, Wine, Wheat, Recycle, Gift 
} from 'lucide-react';

const instructionItems = [
  {
    id: 1,
    icon: <Utensils className="w-6 h-6 text-culinary-red" />,
    title: "Digite ingredientes",
    example: "frango e batata",
    description: "para receber receitas detalhadas."
  },
  {
    id: 2,
    icon: <Heart className="w-6 h-6 text-culinary-red" />,
    title: "Busque por ideias criativas",
    example: "jantar romântico",
    description: "para sugestões sofisticadas."
  },
  {
    id: 3,
    icon: <Salad className="w-6 h-6 text-culinary-red" />,
    title: "Peça variações de receitas",
    example: "bolo de cenoura sem ovos",
    description: "para adaptar aos seus gostos."
  },
  {
    id: 4,
    icon: <Search className="w-6 h-6 text-culinary-red" />,
    title: "Informe um ingrediente",
    example: "abacate",
    description: "para encontrar receitas doces e salgadas."
  },
  {
    id: 5,
    icon: <ChefHat className="w-6 h-6 text-culinary-red" />,
    title: "Pergunte sobre técnicas",
    example: "como caramelizar cebola",
    description: "para aprender dicas práticas."
  },
  {
    id: 6,
    icon: <CalendarDays className="w-6 h-6 text-culinary-red" />,
    title: "Solicite cardápios completos",
    example: "cardápio semanal saudável",
    description: "para facilitar seu planejamento."
  },
  {
    id: 7,
    icon: <Wine className="w-6 h-6 text-culinary-red" />,
    title: "Consulte harmonização",
    example: "vinho para lasanha",
    description: "para experiências gastronômicas perfeitas."
  },
  {
    id: 8,
    icon: <Wheat className="w-6 h-6 text-culinary-red" />,
    title: "Procure receitas para dietas",
    example: "café da manhã low carb",
    description: "para atender necessidades específicas."
  },
  {
    id: 9,
    icon: <Recycle className="w-6 h-6 text-culinary-red" />,
    title: "Aproveite sobras",
    example: "sobrou arroz, o que fazer?",
    description: "para evitar desperdícios."
  },
  {
    id: 10,
    icon: <Gift className="w-6 h-6 text-culinary-red" />,
    title: "Busque receitas sazonais",
    example: "receitas para o Natal",
    description: "para momentos especiais."
  }
];

const InstructionSection = () => {
  return (
    <section className="py-16 bg-culinary-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Como pesquisar suas receitas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nosso chef de IA está pronto para ajudar com qualquer dúvida culinária.
            Veja alguns exemplos do que você pode perguntar:
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructionItems.map((item, index) => (
            <div 
              key={item.id}
              className="instruction-card animate-fade-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-culinary-cream flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">
                    <span className="italic font-medium text-foreground">"{item.example}"</span>
                    {" "}
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructionSection;

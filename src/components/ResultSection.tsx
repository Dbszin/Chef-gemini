
import React, { useState } from 'react';
import { Clock, Apple, ChefHat, Settings, Utensils } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { getGeminiResponse } from '@/api/gemini';

// This component will be shown when a search is performed
const ResultSection = ({ isVisible = false }) => {
  const [preparationTime, setPreparationTime] = useState<string>('quick');
  const [dietaryRestrictions, setDietaryRestrictions] = useState<string[]>([]);
  const [ingredientType, setIngredientType] = useState<string>('accessible');
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState<string | null>(null);
  
  // Handle dietary restriction toggle
  const handleRestrictionToggle = (value: string) => {
    setDietaryRestrictions(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value) 
        : [...prev, value]
    );
  };
  
  // Generate recipe based on selections
  const handleGenerateRecipe = async () => {
    setLoading(true);
    
    // Build the prompt based on user selections
    const restrictions = dietaryRestrictions.length > 0 
      ? `with the following dietary restrictions: ${dietaryRestrictions.join(', ')}` 
      : 'without any specific dietary restrictions';
    
    const prompt = `Create a detailed recipe that is ${preparationTime === 'quick' ? 'quick to prepare (under 30 minutes)' : 'more elaborate and sophisticated'}, 
      ${restrictions}, using ${ingredientType === 'accessible' ? 'common, accessible ingredients' : 'gourmet or specialty ingredients'}.
      Format the response with clear sections for ingredients, preparation steps, and additional tips.`;
    
    try {
      const response = await getGeminiResponse(prompt);
      setRecipe(response.reply);
    } catch (error) {
      console.error("Error generating recipe:", error);
      setRecipe("Desculpe, houve um erro ao gerar sua receita personalizada. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };
  
  // Format the recipe text with HTML
  const formatRecipeText = (text: string) => {
    if (!text) return null;
    
    // Simple parsing for demonstration - in a real app, you might want a more robust parser
    const sections = text.split('\n\n');
    return sections.map((section, index) => <p key={index} className="mb-4">{section}</p>);
  };
  
  if (!isVisible) return null;
  
  return (
    <section className="py-16 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {!recipe ? (
            <Card className="bg-white shadow-lg overflow-hidden">
              <CardHeader className="text-center bg-gradient-to-r from-culinary-orange to-culinary-yellow p-8">
                <CardTitle className="text-3xl font-serif font-semibold text-white">
                  Personalize sua Receita! 🍽️
                </CardTitle>
                <CardDescription className="text-white/90 text-lg mt-2">
                  Me conta um pouco sobre o que você busca e eu te ajudo a encontrar a receita perfeita!
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-8 space-y-8">
                {/* Preparation Time */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium flex items-center gap-2 text-culinary-red">
                    <Clock className="h-5 w-5" /> Tempo de Preparo
                  </h3>
                  <RadioGroup
                    defaultValue="quick"
                    value={preparationTime}
                    onValueChange={setPreparationTime}
                    className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="quick" id="quick" />
                      <Label htmlFor="quick" className="cursor-pointer">Rápido (menos de 30 min)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="elaborate" id="elaborate" />
                      <Label htmlFor="elaborate" className="cursor-pointer">Elaborado (mais de 30 min)</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                {/* Dietary Restrictions */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium flex items-center gap-2 text-culinary-orange">
                    <Apple className="h-5 w-5" /> Restrições Alimentares
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'vegetarian', label: 'Vegetariano' },
                      { id: 'vegan', label: 'Vegano' },
                      { id: 'gluten-free', label: 'Sem Glúten' },
                      { id: 'dairy-free', label: 'Sem Lactose' }
                    ].map((item) => (
                      <div key={item.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={item.id} 
                          checked={dietaryRestrictions.includes(item.id)}
                          onCheckedChange={() => handleRestrictionToggle(item.id)}
                        />
                        <Label htmlFor={item.id} className="cursor-pointer">{item.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Ingredient Type */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium flex items-center gap-2 text-culinary-yellow">
                    <Utensils className="h-5 w-5" /> Tipo de Ingredientes
                  </h3>
                  <RadioGroup
                    defaultValue="accessible"
                    value={ingredientType}
                    onValueChange={setIngredientType}
                    className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="accessible" id="accessible" />
                      <Label htmlFor="accessible" className="cursor-pointer">Acessíveis (fáceis de encontrar)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="gourmet" id="gourmet" />
                      <Label htmlFor="gourmet" className="cursor-pointer">Gourmet (especiais)</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 bg-gray-50 flex justify-center">
                <Button 
                  onClick={handleGenerateRecipe} 
                  disabled={loading}
                  className="search-button w-full sm:w-auto text-lg py-6 px-10"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Gerando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <ChefHat className="h-5 w-5" />
                      Gerar Receita 🍳
                    </span>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <CardHeader className="p-8">
                <CardTitle className="text-3xl font-serif font-semibold mb-6">Sua Receita Personalizada</CardTitle>
                <Button 
                  variant="outline" 
                  onClick={() => setRecipe(null)} 
                  className="self-start"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Personalizar Novamente
                </Button>
              </CardHeader>
              
              <CardContent className="p-8 pt-0 space-y-8">
                <div className="prose max-w-none">
                  {formatRecipeText(recipe)}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResultSection;


import React, { useState } from "react";
import { Search } from "lucide-react";
import axios from "axios";

interface SearchResponse {
  reply: string;
}

interface SearchSectionProps {
  onSearchComplete?: () => void;
}

const SearchSection = ({ onSearchComplete }: SearchSectionProps) => {
  const [query, setQuery] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await axios.post<SearchResponse>("http://localhost:5000/api/gemini", { prompt: query });
      setResult(response.data.reply);
      
      // Call the onSearchComplete callback to show the personalization section
      if (onSearchComplete) {
        onSearchComplete();
      }
    } catch (error) {
      console.error("Erro ao buscar receita:", error);
      setResult("Erro ao buscar receita. Tente novamente.");
    }

    setLoading(false);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16 sm:py-20 md:py-24 mt-16">
      <div className="text-center mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
          Descubra Receitas Incríveis
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Digite ingredientes, técnicas ou qualquer dúvida culinária e nossa IA preparará a resposta perfeita para você
        </p>
      </div>

      <form onSubmit={handleSearch} className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <div
          className={`relative transition-all duration-500 ${isActive ? "scale-[1.02] shadow-xl" : "scale-100 shadow-lg"}`}
        >
          <input
            type="text"
            className="search-input"
            placeholder="Digite seu ingrediente, técnica ou dúvida culinária..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <button type="submit" className="search-button flex items-center gap-2" disabled={!query.trim() || loading}>
              {loading ? "🔄 Buscando..." : <>
                <Search className="w-5 h-5" />
                <span>Buscar</span>
              </>}
            </button>
          </div>
        </div>
      </form>

      {result && (
        <div className="mt-8 p-4 border rounded-lg shadow-md animate-fade-up">
          <h3 className="text-xl font-semibold mb-2">Resultado:</h3>
          <p className="text-md text-gray-800">{result}</p>
        </div>
      )}
    </section>
  );
};

export default SearchSection;

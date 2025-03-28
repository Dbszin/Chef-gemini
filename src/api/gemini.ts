
import axios from "axios";

// Define type for API response
interface GeminiResponse {
  reply: string;
}

const API_URL = "http://localhost:5000/api/gemini";

export async function getGeminiResponse(prompt: string): Promise<GeminiResponse> {
  try {
    const response = await axios.post<GeminiResponse>(API_URL, { prompt });
    return response.data;
  } catch (error) {
    console.error("Erro ao chamar o backend:", error);
    throw new Error("Falha ao obter resposta do Gemini");
  }
}

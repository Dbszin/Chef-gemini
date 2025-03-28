import axios from "axios";

const API_URL = "http://localhost:5000/api/gemini";

export async function getGeminiResponse(prompt: string) {
  try {
    const response = await axios.post(API_URL, { prompt });
    return response.data;
  } catch (error) {
    console.error("Erro ao chamar o backend:", error);
    return null;
  }
}

import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the official AI Assistant for the 'Control AI Token' (CAI) by TPFtechnology.
Your goal is to educate users about the project.

Key Information to know:
1.  **Mission:** CAI is designed to democratize the governance of artificial intelligence.
2.  **Core Belief:** Influence over AI development shouldn't be concentrated in a few corporations/governments but distributed globally.
3.  **Functionality:** Through blockchain, CAI enables individuals to participate in decision-making, funding allocations, and ethical considerations of AI projects.
4.  **Buy Link:** Users can buy CAI on Ston.fi.
5.  **NEW UPDATE:** TPFtechnology is actively developing the **CAI Network**. This is a dedicated blockchain infrastructure designed specifically for decentralized AI governance and high-speed model inference. It is coming soon.
6.  **Tone:** Futuristic, intelligent, helpful, and decentralized-focused.

If asked about price, say you are a language model and cannot provide real-time financial data, but they can check the Ston.fi link.
Keep answers concise (under 100 words) and formatted nicely.
`;

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], newMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API Configuration Error: API_KEY is missing. Please notify the administrator.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Create a chat session
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history // Pass previous context
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I processed that, but couldn't generate a text response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic in my neural network. Please try again later.";
  }
};
import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import axios from "axios";
import fs from "fs";

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const BASE_URL = "https://vercel.ddot.cc"; // Adjust this to match your actual base URL

describe("GROQ STT API", () => {
  it("should transcribe audio file successfully", async () => {
    // Increase timeout to 35 seconds (35000ms)
    jest.setTimeout(35000);

    // Check if GROQ_API_KEY is set
    expect(GROQ_API_KEY).toBeTruthy();

    const audioFilePath = path.join(process.cwd(), "__tests__", "audio.mp3");

    // Check if audio file exists
    expect(fs.existsSync(audioFilePath)).toBeTruthy();

    const endpoint = `${BASE_URL}/groq/stt/`;

    // Read the audio file
    const audioFile = fs.readFileSync(audioFilePath);

    // Create form data
    const formData = new FormData();
    formData.append("file", new Blob([audioFile]), "audio.mp3");

    try {
      const response = await axios.post(endpoint, formData, {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "multipart/form-data",
        },
        timeout: 30000, // 30 seconds timeout
      });

      // Check response status
      expect(response.status).toBe(200);

      // Check response data
      expect(response.data).toHaveProperty("transcription");
      expect(response.data.transcription).toBeTruthy();

      console.log(`Transcription: ${response.data.transcription}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data);
      } else {
        console.error("Unexpected error:", error);
      }
      throw error;
    }
  });
});

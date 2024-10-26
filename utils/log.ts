import { logger } from "@tompz/fastts";

export async function addLog(content: String, level: String) {
  logger.info(`[${level}]: ${content}`);
  try {
    const endpoint = "https://logs.ttoo.lol/api/logs/add";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, level }),
    });
    return response.json();
  } catch (error) {
    console.error("Error adding log:", error);
  }
}

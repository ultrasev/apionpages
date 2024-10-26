import { ModelInfo, Mode, APIS, HEADERS } from "./types";
import { addLog } from "@/utils/log";

export async function getModels(): Promise<ModelInfo[]> {
  await addLog("JTOKEN is " + process.env.JTOKEN?.slice(0, 10), "info");

  try {
    const response = await fetch(APIS.MODES, {
      headers: {
        ...HEADERS,
        jtoken: process.env.JTOKEN || "",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: any = await response.json();
    const modes: Mode[] = data.data.flatMap((item: any) => item.modes);
    await addLog(JSON.stringify(modes), "info");

    return modes.map((mode) => ({
      id: mode.id.toString(),
      backendName: mode.name,
      frontName: mode.showName,
    }));
  } catch (error) {
    console.error("Error fetching models:", error);
    return [];
  }
}

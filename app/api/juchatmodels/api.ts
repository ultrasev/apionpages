import { ModelInfo, Mode, APIS, HEADERS } from "./types";

export async function getModels(): Promise<ModelInfo[]> {
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
    console.log(data);
    const modes: Mode[] = data.data.flatMap((item: any) => item.modes);

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

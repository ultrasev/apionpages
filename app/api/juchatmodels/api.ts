import { ModelInfo, Mode, APIS, HEADERS } from "./types";
import { addLog } from "@/utils/log";
import redis from "@/app/libs/redis";

const CACHE_KEY = "api:pages:juchatmodels";
export async function getModels(): Promise<ModelInfo[]> {
  if (await redis.get(CACHE_KEY)) {
    return (await redis.get(CACHE_KEY)) || [];
  }

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

    const resutls = modes.map((mode) => ({
      id: mode.id.toString(),
      backendName: mode.name,
      frontName: mode.showName,
    }));
    await redis.set(CACHE_KEY, JSON.stringify(resutls), {
      ex: 3600,
    });
    return resutls;
  } catch (error) {
    console.error("Error fetching models:", error);
    return [];
  }
}

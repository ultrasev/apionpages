import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/utils/supabase/server";
import { addLog } from "@/utils/log";
import redis from "@/app/libs/redis";

export const runtime = "edge";

async function checkAuth() {
  const user = await getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function GET(request: NextRequest) {
  const authResponse = await checkAuth();
  if (authResponse) return authResponse;

  const key = request.nextUrl.searchParams.get("key");

  if (!key) {
    return NextResponse.json({ error: "Key is required" }, { status: 400 });
  }

  try {
    const value = (await redis.get(key)) || "";
    return NextResponse.json({ key, value });
  } catch (error: any) {
    await addLog(`fgfw GET /update, ${error.message}`, "ERROR");
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const authResponse = await checkAuth();
  if (authResponse) return authResponse;

  const body = await request.json();
  const { key, content } = body as { key?: string; content?: string };

  if (!key || !content) {
    return NextResponse.json(
      { error: "Key and content are required" },
      { status: 400 }
    );
  }

  try {
    await redis.set(key, content);
    return NextResponse.json({ message: "Data stored successfully" });
  } catch (error: any) {
    console.error("Error storing data:", error);
    await addLog(`fgfw POST /update, ${error.message}`, "ERROR");
    return NextResponse.json(
      { error: "Failed to store data" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { getModels } from "./api";
import { generateTableSvg } from "./svg-generator";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const models = await getModels();
  const svg = generateTableSvg(models);

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600", // Cache for 1 hour
    },
  });
}

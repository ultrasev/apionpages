import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

interface ModelInfo {
  id: string;
  backendName: string;
  frontName: string;
}

const models: ModelInfo[] = [
  {
    id: "5",
    backendName: "claude-3-haiku-20240307",
    frontName: "Claude Mezzo",
  },
  { id: "6", backendName: "claude-3-opus-20240229", frontName: "Claude3 Opus" },
  {
    id: "7",
    backendName: "mistralai/mixtral-8x22b-instruct",
    frontName: "Mixtral Forte",
  },
  { id: "9", backendName: "gpt-4-turbo-2024-04-09", frontName: "GPT Mezzo" },
  { id: "10", backendName: "gpt-4-turbo-2024-04-09", frontName: "GPT Forte" },
  { id: "11", backendName: "dall-e-3", frontName: "DALL · E3" },
  {
    id: "12",
    backendName: "meta-llama/llama-3-70b-instruct",
    frontName: "Llama3 70B",
  },
  {
    id: "13",
    backendName: "google/gemini-pro-1.5",
    frontName: "Gemini 1.5 Pro",
  },
  { id: "14", backendName: "deepseek-chat", frontName: "Deepseek" },
  {
    id: "15",
    backendName: "google/gemini-flash-1.5",
    frontName: "Gemini-flash",
  },
  { id: "16", backendName: "gpt-4o-2024-05-13", frontName: "GPT4o" },
  {
    id: "17",
    backendName: "claude-3-opus-20240229",
    frontName: "Claude3 Opus(100K)",
  },
  {
    id: "18",
    backendName: "Stable Image Ultra",
    frontName: "Stable Diffusion 3 Ultra",
  },
  {
    id: "19",
    backendName: "claude-3-5-sonnet-20240620",
    frontName: "Claude 3.5 Sonnet",
  },
  { id: "20", backendName: "gpt-4o-mini-2024-07-18", frontName: "GPT4o-mini" },
  {
    id: "21",
    backendName: "meta-llama/llama-3.1-405b-instruct",
    frontName: "Llama3.1 405B",
  },
];

function generateTableSvg(models: ModelInfo[]): string {
  const cellHeight = 30;
  const cellPadding = 10;
  const fontSize = 14;
  const headerHeight = 40;

  const columnWidths = [
    80, // ID column
    350, // Backend Model Name column
    250, // Front Model Name column
  ];

  const tableWidth = columnWidths.reduce((sum, width) => sum + width, 0);
  const tableHeight = headerHeight + models.length * cellHeight;

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${tableWidth}" height="${tableHeight}" viewBox="0 0 ${tableWidth} ${tableHeight}">`;

  // Add styles and Google Font import
  svg += `
    <defs>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Vollkorn&amp;display=swap');
        .header { fill: #e2e8f0; font-weight: bold; }
        .row-even { fill: #f7fafc; }
        .row-odd { fill: #edf2f7; }
        text { font-family: Arial, sans-serif; font-size: ${fontSize}px; }
        .header text { fill: #2d3748; }
        .row-even text, .row-odd text { fill: #2d3748; }
        .backend-name { font-family: 'Vollkorn', cursive; font-size: 15px; }
      </style>
    </defs>
  `;

  // Draw header
  svg += `
    <rect x="0" y="0" width="${tableWidth}" height="${headerHeight}" class="header" />
    <text x="${cellPadding}" y="${
    headerHeight / 2 + fontSize / 3
  }" dominant-baseline="middle">ID</text>
    <text x="${columnWidths[0] + cellPadding}" y="${
    headerHeight / 2 + fontSize / 3
  }" dominant-baseline="middle" class="backend-name">Backend Model Name</text>
    <text x="${columnWidths[0] + columnWidths[1] + cellPadding}" y="${
    headerHeight / 2 + fontSize / 3
  }" dominant-baseline="middle">Front Model Name</text>
  `;

  // Draw rows
  models.forEach((model, index) => {
    const y = headerHeight + index * cellHeight;
    const rowClass = index % 2 === 0 ? "row-even" : "row-odd";
    svg += `
      <rect x="0" y="${y}" width="${tableWidth}" height="${cellHeight}" class="${rowClass}" />
      <text x="${cellPadding}" y="${
      y + cellHeight / 2 + fontSize / 3
    }" dominant-baseline="middle">${escapeXml(model.id)}</text>
      <text x="${columnWidths[0] + cellPadding}" y="${
      y + cellHeight / 2 + fontSize / 3
    }" dominant-baseline="middle" class="backend-name">${escapeXml(
      model.backendName
    )}</text>
      <text x="${columnWidths[0] + columnWidths[1] + cellPadding}" y="${
      y + cellHeight / 2 + fontSize / 3
    }" dominant-baseline="middle">${escapeXml(model.frontName)}</text>
    `;
  });

  svg += "</svg>";
  return svg;
}

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
    }
    return c;
  });
}

export async function GET(request: NextRequest) {
  const svg = generateTableSvg(models);

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

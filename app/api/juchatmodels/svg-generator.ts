import { ModelInfo } from "./types";
import fontsBase64 from "@/fonts/fontsBase64.json";

function escapeXml(unsafe: string | null | undefined): string {
  if (unsafe == null) return "";
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

export function generateTableSvg(models: ModelInfo[]): string {
  const cellHeight = 30;
  const cellPadding = 10;
  const fontSize = 14;
  const headerHeight = 40;

  const columnWidths = [
    80, // ID column
    350, // Backend Model Name column
    250, // Front Name column
  ];

  const tableWidth = columnWidths.reduce((sum, width) => sum + width, 0);
  const footerHeight = 30;
  const tableHeight =
    headerHeight + (models.length + 1) * cellHeight + footerHeight; // Added footerHeight

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${tableWidth}" height="${tableHeight}" viewBox="0 0 ${tableWidth} ${tableHeight}">`;

  // Add style and fonts
  svg += `
    <defs>
      <style>
        @font-face {
          font-family: 'YoungSerif';
          src: url(data:application/font-woff2;charset=utf-8;base64,${fontsBase64["YoungSerif-Regular"]}) format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        .header { fill: #e2e8f0; font-weight: bold; }
        .row-even { fill: #f7fafc; }
        .row-odd { fill: #edf2f7; }
        text { font-family: Arial, sans-serif; font-size: ${fontSize}px; }
        .header text { fill: #2d3748; }
        .row-even text, .row-odd text { fill: #2d3748; }
        .backend-name { font-family: 'YoungSerif', Georgia, serif; font-size: 15px; }
        .front-name { font-family: Georgia, serif; font-size: 15px; }
        .footer-text {
          font-family: 'YoungSerif', Georgia, serif;
          font-size: 12px;
          fill: #4a5568;
        }
      </style>
    </defs>
  `;

  // Draw header
  svg += `
    <g class="header">
      <rect x="0" y="0" width="${tableWidth}" height="${headerHeight}" />
      <text x="${cellPadding}" y="${
    headerHeight / 2 + fontSize / 3
  }" dominant-baseline="middle">ID</text>
      <text x="${columnWidths[0] + cellPadding}" y="${
    headerHeight / 2 + fontSize / 3
  }" dominant-baseline="middle">Backend Model Name</text>
      <text x="${columnWidths[0] + columnWidths[1] + cellPadding}" y="${
    headerHeight / 2 + fontSize / 3
  }" dominant-baseline="middle">Front Name</text>
    </g>
  `;

  // Draw rows
  for (let i = 0; i < models.length; i++) {
    const model = models[i];
    const rowClass = i % 2 === 0 ? "row-even" : "row-odd";
    const y = headerHeight + i * cellHeight;
    svg += `
      <g class="${rowClass}">
        <rect x="0" y="${y}" width="${tableWidth}" height="${cellHeight}" />
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
    }" dominant-baseline="middle" class="front-name">${escapeXml(
      model.frontName
    )}</text>
      </g>
    `;
  }

  // Add footer with update time
  const beijingTime = new Date().toLocaleString("zh-CN", {
    timeZone: "Asia/Shanghai",
  });
  svg += `
    <g class="footer">
      <rect x="0" y="${headerHeight + models.length * cellHeight}" width="${tableWidth}" height="${footerHeight}" fill="#f3f4f6" />
      <text x="${tableWidth - cellPadding}" y="${headerHeight + models.length * cellHeight + footerHeight / 2 + fontSize / 3}"
            dominant-baseline="middle" text-anchor="end" font-size="12" class="footer-text">
        Updated at ${escapeXml(beijingTime)}
      </text>
    </g>
  `;

  svg += `</svg>`;

  return svg;
}

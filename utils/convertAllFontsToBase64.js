import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to convert font to base64
const getBase64Font = (fontPath) => {
  const font = fs.readFileSync(fontPath);
  return font.toString('base64');
};

// Get zip file path from command line argument
const zipFilePath = process.argv[2];

if (!zipFilePath) {
  console.error('Please provide a zip file path as an argument.');
  process.exit(1);
}

// Directory containing the font files
const fontDirectory = path.join(process.cwd(), 'fonts');

// Ensure the font directory exists
if (!fs.existsSync(fontDirectory)) {
  fs.mkdirSync(fontDirectory, { recursive: true });
}

// Create a temporary directory for unzipping
const tempDir = path.join(process.cwd(), 'temp_fonts');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// Unzip the file
try {
  execSync(`unzip "${zipFilePath}" -d "${tempDir}"`);
} catch (error) {
  console.error('Error unzipping file:', error.message);
  process.exit(1);
}

// Move .ttf files to fonts directory
const files = fs.readdirSync(tempDir);
files.forEach(file => {
  if (file.endsWith('.ttf')) {
    const oldPath = path.join(tempDir, file);
    const newPath = path.join(fontDirectory, file);
    fs.renameSync(oldPath, newPath);
  }
});

// Remove temporary directory
fs.rmSync(tempDir, { recursive: true, force: true });

// Read all font files in the directory
const fontFiles = fs.readdirSync(fontDirectory).filter(file => file.endsWith('.woff2') || file.endsWith('.ttf'));

// Convert each font file to base64 and save to an object
const fontsBase64 = {};
fontFiles.forEach(file => {
  const fontPath = path.join(fontDirectory, file);
  const base64 = getBase64Font(fontPath);
  const fontName = path.basename(file, path.extname(file));
  fontsBase64[fontName] = base64;
});

// Save the base64 strings to a JSON file for use in your project
fs.writeFileSync(path.join(process.cwd(), 'fonts', 'fontsBase64.json'), JSON.stringify(fontsBase64, null, 2));

console.log('Fonts converted to Base64 and saved to fontsBase64.json');

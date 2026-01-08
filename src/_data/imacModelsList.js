import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function() {
  const imacModelsPath = join(__dirname, 'imacModels.json');
  const imacModels = JSON.parse(readFileSync(imacModelsPath, 'utf8'));
  
  return Object.values(imacModels).sort((a, b) => {
    // Sort by year descending, then by size
    if (b.year !== a.year) return b.year - a.year;
    return b.size.localeCompare(a.size);
  });
}

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function() {
  const suburbsPath = join(__dirname, 'suburbs.json');
  const suburbs = JSON.parse(readFileSync(suburbsPath, 'utf8'));
  
  return Object.keys(suburbs).map(key => ({
    slug: key,
    name: suburbs[key].name,
    anchors: suburbs[key].anchors,
    description: suburbs[key].description,
    localInfo: suburbs[key].localInfo
  }));
}

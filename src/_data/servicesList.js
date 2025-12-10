import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function() {
  const servicesPath = join(__dirname, 'services.json');
  const services = JSON.parse(readFileSync(servicesPath, 'utf8'));
  
  return Object.keys(services).map(key => ({
    key: key,
    ...services[key]
  }));
}

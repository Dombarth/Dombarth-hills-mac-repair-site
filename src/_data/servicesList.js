import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Rotating click drivers for CTR-optimised service meta titles
const titleDrivers = [
  'Clear Pricing',
  'Experienced Mac Technicians',
  'MacBook and iMac Repairs',
  'Workshop-Based Repairs',
  'Reliable Diagnosis',
  'Warranty Included'
];

export default function() {
  const servicesPath = join(__dirname, 'services.json');
  const services = JSON.parse(readFileSync(servicesPath, 'utf8'));
  
  return Object.keys(services).map((key, index) => ({
    key: key,
    ...services[key],
    titleDriver: titleDrivers[index % titleDrivers.length]
  }));
}

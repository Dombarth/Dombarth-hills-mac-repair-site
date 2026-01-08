import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Rotating click drivers for CTR-optimised meta titles
const titleDrivers = [
  'Same-Day Diagnostics',
  'Clear Pricing',
  'Local Mac Specialists',
  'Fast Diagnosis',
  'Trusted Mac Repairs',
  'MacBook and iMac Repairs'
];

// Rotating CTA H3 headings using approved spintax
// Format: {Need|Looking for|Need help with|After} {Mac repair|professional Mac repair|reliable Mac repair} in {SUBURB}?
const ctaHeadingPrefixes = [
  'Need Mac repair',
  'Looking for Mac repair',
  'Need help with Mac repair',
  'After Mac repair',
  'Need professional Mac repair',
  'Looking for professional Mac repair',
  'Need help with professional Mac repair',
  'After professional Mac repair',
  'Need reliable Mac repair',
  'Looking for reliable Mac repair',
  'Need help with reliable Mac repair',
  'After reliable Mac repair'
];

export default function() {
  const suburbsPath = join(__dirname, 'suburbs.json');
  const suburbs = JSON.parse(readFileSync(suburbsPath, 'utf8'));
  
  return Object.keys(suburbs).map((key, index) => ({
    slug: key,
    name: suburbs[key].name,
    anchors: suburbs[key].anchors,
    description: suburbs[key].description,
    localInfo: suburbs[key].localInfo,
    titleDriver: titleDrivers[index % titleDrivers.length],
    ctaHeadingPrefix: ctaHeadingPrefixes[index % ctaHeadingPrefixes.length]
  }));
}

import sharp from 'sharp'
import { readdirSync, statSync } from 'node:fs'
import { join, extname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const IMAGES_DIR = join(__dirname, '../public/images')

// Specific high-priority images to convert first
const PRIORITY = [
  'Farmer Partnership and Smart Processing.png',
  'Farm Gate Aggregation_1.png',
  '100% Fresh or Frozen.png',
  'Our Farmer Network.png',
  'Processing and Distribution 1.png',
  'Tailored Services 1.png',
  'The solutions.jpeg',
]

async function convert(filename) {
  const src = join(IMAGES_DIR, filename)
  const dest = join(IMAGES_DIR, basename(filename, extname(filename)) + '.webp')
  const before = statSync(src).size
  await sharp(src).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toFile(dest)
  const after = statSync(dest).size
  console.log(`${filename} → ${basename(dest)}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB (-${((1-after/before)*100).toFixed(0)}%)`)
}

for (const f of PRIORITY) {
  await convert(f)
}

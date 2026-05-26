import sharp from 'sharp'
import { statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const logoPath = join(__dirname, '../public/logo.jpeg')

const before = statSync(logoPath).size
// Resize to 350px wide (2x for retina display at 175px rendered)
await sharp(logoPath)
  .resize({ width: 350, withoutEnlargement: true })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(logoPath + '.tmp')

import { renameSync } from 'node:fs'
renameSync(logoPath + '.tmp', logoPath)
const after = statSync(logoPath).size
console.log(`logo.jpeg: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB`)

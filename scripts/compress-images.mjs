import sharp from 'sharp'
import { readdirSync, statSync, renameSync } from 'node:fs'
import { join, extname, basename } from 'node:path'

const IMAGES_DIR = new URL('../public/images/', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')
const MAX_WIDTH = 1600
const PNG_QUALITY = 82
const JPEG_QUALITY = 82

const files = readdirSync(IMAGES_DIR)
let totalBefore = 0
let totalAfter = 0
let count = 0

for (const file of files) {
  const ext = extname(file).toLowerCase()
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue

  const filePath = join(IMAGES_DIR, file)
  const stat = statSync(filePath)
  const beforeSize = stat.size

  // Skip already-small files
  if (beforeSize < 200 * 1024) {
    console.log(`SKIP  ${file} (${(beforeSize / 1024).toFixed(0)} KB — already small)`)
    continue
  }

  const tmpPath = filePath + '.tmp'

  try {
    const pipeline = sharp(filePath).resize({ width: MAX_WIDTH, withoutEnlargement: true })

    if (ext === '.png') {
      await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toFile(tmpPath)
    } else {
      await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmpPath)
    }

    const afterSize = statSync(tmpPath).size

    if (afterSize < beforeSize) {
      renameSync(tmpPath, filePath)
      const saved = ((1 - afterSize / beforeSize) * 100).toFixed(1)
      console.log(
        `OK    ${file.padEnd(55)} ${(beforeSize / 1024).toFixed(0).padStart(6)} KB → ${(afterSize / 1024).toFixed(0).padStart(6)} KB  (-${saved}%)`,
      )
      totalBefore += beforeSize
      totalAfter += afterSize
      count++
    } else {
      renameSync(tmpPath, filePath)
      console.log(`SKIP  ${file} — compressed version not smaller`)
    }
  } catch (err) {
    console.error(`ERR   ${file}: ${err.message}`)
    try {
      renameSync(tmpPath, filePath)
    } catch {}
  }
}

const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1)
const savedPct = totalBefore > 0 ? ((1 - totalAfter / totalBefore) * 100).toFixed(1) : 0
console.log(`\nDone: ${count} files compressed. Saved ${savedMB} MB (${savedPct}%)`)

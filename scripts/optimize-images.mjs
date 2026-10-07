// Pre-generates responsive WebP variants for every image in public/images/, because a static
// export (GitHub Pages) has no image-optimization server. Runs automatically before `dev` and
// `build`; src/lib/image-loader.ts points next/image at the files written here.
import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

import sharp from "sharp"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const sourceDir = path.join(root, "public", "images")
const outDir = path.join(sourceDir, "optimized")
const { deviceSizes, imageSizes } = JSON.parse(await fs.readFile(path.join(root, "image-sizes.json"), "utf8"))
const widths = [...new Set([...imageSizes, ...deviceSizes])].sort((a, b) => a - b)

await fs.mkdir(outDir, { recursive: true })

const sources = (await fs.readdir(sourceDir, { withFileTypes: true })).filter(
  (entry) => entry.isFile() && /\.(png|jpe?g|webp|avif)$/i.test(entry.name)
)

let written = 0
for (const { name } of sources) {
  const input = path.join(sourceDir, name)
  const base = name.replace(/\.[^.]+$/, "")
  const { mtimeMs } = await fs.stat(input)

  for (const width of widths) {
    const output = path.join(outDir, `${base}-${width}.webp`)
    const existing = await fs.stat(output).catch(() => null)
    if (existing && existing.mtimeMs >= mtimeMs) continue

    // withoutEnlargement: widths above the original reuse the original size.
    await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(output)
    written++
  }
}

console.log(`optimize-images: ${sources.length} source image(s), ${written} variant(s) written to public/images/optimized`)

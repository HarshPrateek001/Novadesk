import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const filesToOptimize = [
  { input: 'public/novadesk_team_5_members_hero.png', output: 'public/novadesk_team_5_members_hero.webp', quality: 85 },
  { input: 'public/novadesk_founders_duo_feathered.png', output: 'public/novadesk_founders_duo_feathered.webp', quality: 85 },
  { input: 'public/python_hero_realistic.png', output: 'public/python_hero_realistic.webp', quality: 85 },
  { input: 'public/novadesk_team_banner.png', output: 'public/novadesk_team_banner.webp', quality: 85 },
  { input: 'public/images/nova_avatar.jpg', output: 'public/images/nova_avatar.webp', quality: 85 }
];

async function run() {
  for (const item of filesToOptimize) {
    if (fs.existsSync(item.input)) {
      const inStat = fs.statSync(item.input);
      await sharp(item.input)
        .webp({ quality: item.quality })
        .toFile(item.output);
      const outStat = fs.statSync(item.output);
      console.log(`Optimized ${item.input} (${Math.round(inStat.size / 1024)} KB) -> ${item.output} (${Math.round(outStat.size / 1024)} KB) [Saved ${Math.round((1 - outStat.size / inStat.size) * 100)}%]`);
    } else {
      console.log(`Skipped ${item.input} (not found)`);
    }
  }
}

run().catch(console.error);

const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'shared/services/notifications/email.provider.ts',
  'shared/services/storage/storage-provider.service.ts',
  'shared/utils/pdf-generator.ts',
  'e2e-validation.js',
  'fix-pdf.js',
  'proxy.ts',
  'README.md'
];

let filesChanged = 0;

for (const file of filesToUpdate) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/Pixel Punch AI/g, 'Alien');
    content = content.replace(/Pixel Punch/g, 'Alien');
    content = content.replace(/PixelPunch/gi, 'Alien');
    content = content.replace(/pixelpunch\.org/g, 'alien.fi');
    content = content.replace(/pixelpunch/g, 'alien');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      filesChanged++;
      console.log(`Updated: ${file}`);
    }
  }
}
console.log(`Total fixed: ${filesChanged}`);

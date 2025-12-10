const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

// Dimensions OG Image (Open Graph standard)
const WIDTH = 1200;
const HEIGHT = 630;

// Palette iOS 26.2
const COLORS = {
  backgroundGradient: {
    start: '#f0f9ff', // blue-50
    middle: '#e0f2fe', // blue-100
    end: '#dbeafe',    // blue-200
  },
  glassCard: {
    background: 'rgba(255, 255, 255, 0.85)',
    border: 'rgba(255, 255, 255, 0.4)',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  text: {
    primary: '#0f172a',    // slate-900
    secondary: '#475569',   // slate-600
    accent: '#0a84ff',      // iOS Blue
  },
  badge: {
    background: 'rgba(10, 132, 255, 0.1)',
    text: '#0a84ff',
    border: 'rgba(10, 132, 255, 0.2)',
  },
};

// Fonction pour créer un dégradé
function createGradient(ctx, x1, y1, x2, y2, colors) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, colors.start);
  gradient.addColorStop(0.5, colors.middle);
  gradient.addColorStop(1, colors.end);
  return gradient;
}

// Fonction pour dessiner un rectangle arrondi
function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

// Fonction pour dessiner une carte glassmorphism
function drawGlassCard(ctx, x, y, width, height, radius = 32) {
  // Ombre portée
  ctx.shadowColor = COLORS.glassCard.shadow;
  ctx.shadowBlur = 40;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 20;

  // Fond avec transparence
  ctx.fillStyle = COLORS.glassCard.background;
  roundRect(ctx, x, y, width, height, radius);
  ctx.fill();

  // Bordure
  ctx.shadowBlur = 0;
  ctx.strokeStyle = COLORS.glassCard.border;
  ctx.lineWidth = 1;
  roundRect(ctx, x, y, width, height, radius);
  ctx.stroke();
}

// Fonction pour dessiner du texte avec ombre
function drawText(ctx, text, x, y, options = {}) {
  const {
    fontSize = 48,
    fontFamily = 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight = 'normal',
    color = COLORS.text.primary,
    align = 'left',
    maxWidth = null,
  } = options;

  ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = 'top';

  if (maxWidth) {
    // Gérer le texte sur plusieurs lignes si nécessaire
    const words = text.split(' ');
    let line = '';
    let yPos = y;

    for (let word of words) {
      const testLine = line + word + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && line !== '') {
        ctx.fillText(line, x, yPos);
        line = word + ' ';
        yPos += fontSize * 1.2;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, yPos);
  } else {
    ctx.fillText(text, x, y);
  }
}

// Fonction pour dessiner un badge
function drawBadge(ctx, x, y, text, options = {}) {
  const {
    fontSize = 14,
    paddingX = 16,
    paddingY = 8,
    radius = 20,
  } = options;

  ctx.font = `600 ${fontSize}px -apple-system, BlinkMacSystemFont, sans-serif`;
  const metrics = ctx.measureText(text);
  const width = metrics.width + paddingX * 2;
  const height = fontSize + paddingY * 2;

  // Fond du badge
  ctx.fillStyle = COLORS.badge.background;
  roundRect(ctx, x, y, width, height, radius);
  ctx.fill();

  // Bordure
  ctx.strokeStyle = COLORS.badge.border;
  ctx.lineWidth = 1;
  roundRect(ctx, x, y, width, height, radius);
  ctx.stroke();

  // Texte
  ctx.fillStyle = COLORS.badge.text;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x + width / 2, y + height / 2);
}

// Fonction pour dessiner une icône téléphone (SVG simplifié)
function drawPhoneIcon(ctx, x, y, size = 80) {
  const phoneWidth = size * 0.6;
  const phoneHeight = size;
  const cornerRadius = size * 0.15;

  // Corps du téléphone
  ctx.fillStyle = COLORS.text.accent;
  roundRect(ctx, x - phoneWidth / 2, y - phoneHeight / 2, phoneWidth, phoneHeight, cornerRadius);
  ctx.fill();

  // Écran
  ctx.fillStyle = '#ffffff';
  roundRect(
    ctx,
    x - phoneWidth / 2 + phoneWidth * 0.1,
    y - phoneHeight / 2 + phoneHeight * 0.15,
    phoneWidth * 0.8,
    phoneHeight * 0.6,
    cornerRadius * 0.5
  );
  ctx.fill();

  // Bouton home (cercle)
  ctx.fillStyle = COLORS.text.accent;
  ctx.beginPath();
  ctx.arc(x, y + phoneHeight * 0.35, phoneWidth * 0.15, 0, Math.PI * 2);
  ctx.fill();
}

// Fonction principale pour générer l'image
async function generateOGImage() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // 1. Fond avec dégradé
  const bgGradient = createGradient(ctx, 0, 0, WIDTH, HEIGHT, COLORS.backgroundGradient);
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // 2. Carte glassmorphism principale (centrée)
  const cardWidth = 900;
  const cardHeight = 450;
  const cardX = (WIDTH - cardWidth) / 2;
  const cardY = (HEIGHT - cardHeight) / 2;

  drawGlassCard(ctx, cardX, cardY, cardWidth, cardHeight, 32);

  // 3. Contenu de la carte
  const contentX = cardX + 80;
  const contentY = cardY + 60;
  const contentWidth = cardWidth - 160;

  // Badge "2025" en haut à droite de la carte
  drawBadge(ctx, cardX + cardWidth - 120, cardY + 40, '2025', {
    fontSize: 16,
    paddingX: 20,
    paddingY: 10,
  });

  // Titre principal "TOP 5"
  drawText(ctx, 'TOP 5', contentX, contentY, {
    fontSize: 72,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    maxWidth: contentWidth,
  });

  // Sous-titre "Téléphones à moins de 300€"
  drawText(ctx, 'Téléphones', contentX, contentY + 90, {
    fontSize: 56,
    fontWeight: '600',
    color: COLORS.text.primary,
    maxWidth: contentWidth,
  });

  drawText(ctx, 'à moins de 300€', contentX, contentY + 150, {
    fontSize: 48,
    fontWeight: '600',
    color: COLORS.text.accent,
    maxWidth: contentWidth,
  });

  // Ligne décorative
  ctx.strokeStyle = COLORS.text.accent;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(contentX, contentY + 220);
  ctx.lineTo(contentX + 200, contentY + 220);
  ctx.stroke();

  // Description
  drawText(ctx, 'Les meilleurs smartphones', contentX, contentY + 250, {
    fontSize: 32,
    fontWeight: '500',
    color: COLORS.text.secondary,
    maxWidth: contentWidth,
  });

  drawText(ctx, 'en 2025', contentX, contentY + 290, {
    fontSize: 32,
    fontWeight: '500',
    color: COLORS.text.secondary,
    maxWidth: contentWidth,
  });

  // Mots-clés avec icônes
  const keywordsY = contentY + 340;
  const keywords = [
    { icon: '✓', text: 'Tests réels' },
    { icon: '⚖️', text: 'Comparatifs' },
    { icon: '📖', text: 'Conseils d\'achat' },
  ];

  let keywordX = contentX;
  const keywordSpacing = 180;

  keywords.forEach((keyword, index) => {
    // Icône
    ctx.font = '24px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillStyle = COLORS.text.accent;
    ctx.fillText(keyword.icon, keywordX, keywordsY);

    // Texte
    drawText(ctx, keyword.text, keywordX + 35, keywordsY, {
      fontSize: 20,
      fontWeight: '400',
      color: COLORS.text.secondary,
    });

    keywordX += keywordSpacing;
  });

  // Icône téléphone décorative (coin bas droit de la carte)
  drawPhoneIcon(ctx, cardX + cardWidth - 100, cardY + cardHeight - 100, 100);

  // 4. Badge "top5telephones.fr" en bas (optionnel)
  ctx.font = '18px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle = COLORS.text.secondary;
  ctx.textAlign = 'center';
  ctx.fillText('top5telephones.fr', WIDTH / 2, HEIGHT - 30);

  // 5. Sauvegarder l'image
  const outputPath = path.join(__dirname, '../public/images/og-image.jpg');
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
  fs.writeFileSync(outputPath, buffer);

  console.log('✅ Image OG générée avec succès !');
  console.log(`📁 Fichier: ${outputPath}`);
  console.log(`📐 Dimensions: ${WIDTH}x${HEIGHT}px`);
  console.log(`💾 Taille: ${(buffer.length / 1024).toFixed(2)} KB`);
}

// Exécuter
if (require.main === module) {
  generateOGImage().catch(console.error);
}

module.exports = { generateOGImage };


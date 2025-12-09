#!/bin/bash

# Script pour convertir les SVG en PNG
# Nécessite ImageMagick ou Inkscape installé

echo "🖼️  Conversion SVG → PNG"

# Vérifier si ImageMagick est installé
if command -v convert &> /dev/null; then
    echo "✅ ImageMagick trouvé"
    CONVERTER="imagemagick"
elif command -v inkscape &> /dev/null; then
    echo "✅ Inkscape trouvé"
    CONVERTER="inkscape"
else
    echo "❌ Aucun convertisseur trouvé. Installez ImageMagick ou Inkscape."
    echo "   macOS: brew install imagemagick"
    echo "   Linux: sudo apt-get install imagemagick"
    exit 1
fi

# Dossiers des téléphones
PHONES=(
    "xiaomi-redmi-note-14-5g"
    "samsung-galaxy-a35-5g"
    "poco-x7-pro"
    "motorola-edge-50-fusion"
    "samsung-galaxy-a26-5g"
)

for phone in "${PHONES[@]}"; do
    DIR="public/images/top5/$phone"
    
    if [ ! -d "$DIR" ]; then
        echo "⚠️  Dossier non trouvé: $DIR"
        continue
    fi
    
    echo "📱 Conversion pour: $phone"
    
    # Convertir chaque SVG en PNG
    for svg in "$DIR"/*.svg; do
        if [ -f "$svg" ]; then
            png="${svg%.svg}.png"
            filename=$(basename "$svg")
            
            if [ "$CONVERTER" == "imagemagick" ]; then
                # ImageMagick
                if [[ "$filename" == "thumbnail.svg" ]]; then
                    convert -background none -resize 400x400 "$svg" "$png"
                elif [[ "$filename" == "og-image.svg" ]]; then
                    convert -background none -resize 1200x630 "$svg" "$png"
                else
                    convert -background none -resize 800x800 "$svg" "$png"
                fi
            else
                # Inkscape
                if [[ "$filename" == "thumbnail.svg" ]]; then
                    inkscape --export-type=png --export-width=400 --export-height=400 "$svg" --export-filename="$png"
                elif [[ "$filename" == "og-image.svg" ]]; then
                    inkscape --export-type=png --export-width=1200 --export-height=630 "$svg" --export-filename="$png"
                else
                    inkscape --export-type=png --export-width=800 --export-height=800 "$svg" --export-filename="$png"
                fi
            fi
            
            echo "  ✅ Converti: $filename → ${filename%.svg}.png"
        fi
    done
done

echo ""
echo "✅ Conversion terminée !"
echo "📝 Les fichiers PNG ont été créés. Tu peux maintenant supprimer les SVG si tu veux."


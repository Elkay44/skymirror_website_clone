#!/bin/bash

for file in /Users/lukman.ibrahim/Desktop/skymirror_website_new/src/views/*.vue; do
  # Replace the hero section with background implementation
  sed -i '' -E 's/<section class="relative pt-[0-9]+.*overflow-hidden bg-white">/<section class="relative pt-\1 overflow-hidden">/g' "$file"
  
  # Remove digital-art-background div and its children
  sed -i '' -E '/<div class="digital-art-background">/,/<\/div>/d' "$file"
  
  # Replace custom bg-grid-pattern styles
  sed -i '' -E '/.bg-grid-pattern {/,/}/c\
/* Using global backgrounds instead */' "$file"
  
  # Replace digital-art-background styles
  sed -i '' -E '/.digital-art-background {/,/}/d' "$file"
done

echo "Background implementation updated for all pages"

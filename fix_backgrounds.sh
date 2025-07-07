#!/bin/bash

for file in /Users/lukman.ibrahim/Desktop/skymirror_website_new/src/views/*.vue; do
  # Fix the section class
  sed -i '' 's/class="relative pt-[0-9]\+ pb-[0-9]\+ overflow-hidden bg-white"/class="relative pt-36 pb-24 overflow-hidden"/g' "$file"
  
  # Remove the digital-art-background div and its contents
  sed -i '' '/<div class="digital-art-background">/,/<\/div>/d' "$file"
  
  # Remove digital-art-background style definitions
  sed -i '' '/.digital-art-background {/,/}/d' "$file"
  
  # Remove bg-grid-pattern style definitions
  sed -i '' '/.bg-grid-pattern {/,/}/d' "$file"
done

echo "Background implementations fixed for all pages"

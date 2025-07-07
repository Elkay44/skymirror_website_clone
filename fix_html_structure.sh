#!/bin/bash

for file in /Users/lukman.ibrahim/Desktop/skymirror_website_new/src/views/*.vue; do
  # Replace problematic section with proper HTML structure
  sed -i '' -E 's/<section class="relative pt-[0-9]+ pb-[0-9]+ overflow-hidden.*">\n.*<div class="absolute inset-0 bg-grid-pattern.*">.*\n.*<\/div>/<section class="relative pt-36 pb-24 overflow-hidden">/g' "$file"
done

echo "HTML structure fixed for all pages"

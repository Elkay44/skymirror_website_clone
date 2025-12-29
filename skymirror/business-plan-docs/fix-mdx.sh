#!/bin/bash

# Fix MDX issues by escaping < characters that aren't HTML tags
# and wrapping problematic content

DOCS_DIR="/Users/lukman.ibrahim/skymirror/business-plan-docs/docs"

# Find all .md files and fix common MDX issues
find "$DOCS_DIR" -name "*.md" -type f | while read file; do
    # Replace standalone < with &lt; (but not HTML tags)
    # Replace patterns like <5 or <€ with escaped versions
    sed -i '' 's/<\([0-9€]\)/\&lt;\1/g' "$file"
    
    # Also escape any remaining problematic < that aren't tags
    # This handles cases like "< 5" or similar
    sed -i '' 's/< \([0-9]\)/\&lt; \1/g' "$file"
done

echo "Fixed MDX issues in all markdown files"

#!/bin/bash

# Script to recursively convert images to WebP format using cwebp
# Usage: ./convert-to-webp.sh [quality]
# If no quality is specified, uses 80
# Processes: ./content/posts and ./content/music

# Set default values
QUALITY="${1:-80}"
DIRECTORIES=("./content/posts" "./content/music")

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo -e "${RED}Error: cwebp is not installed.${NC}"
    echo -e "${YELLOW}Install it using: brew install webp${NC}"
    exit 1
fi

# Validate quality parameter
if [[ ! "$QUALITY" =~ ^[0-9]+$ ]] || [ "$QUALITY" -lt 0 ] || [ "$QUALITY" -gt 100 ]; then
    echo -e "${RED}Error: Quality must be a number between 0-100${NC}"
    exit 1
fi

# Check if directories exist
for dir in "${DIRECTORIES[@]}"; do
    if [ ! -d "$dir" ]; then
        echo -e "${RED}Error: Directory '$dir' does not exist${NC}"
        exit 1
    fi
done

echo -e "${BLUE}Converting images in: ${DIRECTORIES[@]}${NC}"
echo -e "${BLUE}Quality setting: $QUALITY${NC}"
echo -e "${BLUE}Starting conversion...${NC}"
echo

# Initialize results file
echo "" > /tmp/conversion_results

# Function to convert a single file
convert_file() {
    local file="$1"
    local dir=$(dirname "$file")
    local filename=$(basename "$file")
    local name="${filename%.*}"
    local webp_file="$dir/$name.webp"
    
    # Skip if WebP version already exists
    if [ -f "$webp_file" ]; then
        echo -e "${YELLOW}Skipping: $file (WebP already exists)${NC}"
        echo "SKIPPED" >> /tmp/conversion_results
        
        # Delete original file since WebP version exists
        rm "$file"
        echo -e "${BLUE}Deleted original: $file${NC}"
        return
    fi
    
    # Convert to WebP using cwebp
    if cwebp -q "$QUALITY" "$file" -o "$webp_file" > /dev/null 2>&1; then
        echo -e "${GREEN}Converted: $file → $webp_file${NC}"
        echo "CONVERTED" >> /tmp/conversion_results
        
        # Delete original file after successful conversion
        rm "$file"
        echo -e "${BLUE}Deleted original: $file${NC}"
    else
        echo -e "${RED}Error converting: $file${NC}"
        echo "ERROR" >> /tmp/conversion_results
    fi
}

# Find and convert images in both directories
# Supported formats: jpg, jpeg, png, gif, bmp, tiff, tif
for dir in "${DIRECTORIES[@]}"; do
    echo -e "${BLUE}Processing directory: $dir (and all subdirectories)${NC}"
    
    # Count total images in this directory first
    total_images=$(find "$dir" -type f \( \
        -iname "*.jpg" -o \
        -iname "*.jpeg" -o \
        -iname "*.png" -o \
        -iname "*.gif" -o \
        -iname "*.bmp" -o \
        -iname "*.tiff" -o \
        -iname "*.tif" \
    \) | wc -l)
    
    echo -e "${BLUE}Found $total_images images in $dir${NC}"
    
    if [ "$total_images" -eq 0 ]; then
        echo -e "${YELLOW}No images found in $dir${NC}"
        echo
        continue
    fi
    
    find "$dir" -type f \( \
        -iname "*.jpg" -o \
        -iname "*.jpeg" -o \
        -iname "*.png" -o \
        -iname "*.gif" -o \
        -iname "*.bmp" -o \
        -iname "*.tiff" -o \
        -iname "*.tif" \
    \) | while read -r file; do
        convert_file "$file"
    done
    echo
done

echo
echo -e "${BLUE}Conversion completed!${NC}"

# Count results from temp file
converted=$(grep -c "CONVERTED" /tmp/conversion_results 2>/dev/null || echo 0)
skipped=$(grep -c "SKIPPED" /tmp/conversion_results 2>/dev/null || echo 0)
errors=$(grep -c "ERROR" /tmp/conversion_results 2>/dev/null || echo 0)

echo -e "${GREEN}Files converted: $converted${NC}"
echo -e "${YELLOW}Files skipped: $skipped${NC}"
echo -e "${RED}Errors: $errors${NC}"

# Clean up temp file
rm -f /tmp/conversion_results

# Optional: Show space savings
echo
echo -e "${BLUE}Calculating space usage...${NC}"

# Calculate sizes for each directory separately
original_size=0
webp_size=0

for dir in "${DIRECTORIES[@]}"; do
    if [ -d "$dir" ]; then
        # Original images size
        dir_original=$(find "$dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.bmp" -o -iname "*.tiff" -o -iname "*.tif" \) -exec du -cb {} + 2>/dev/null | tail -1 | cut -f1)
        # WebP images size  
        dir_webp=$(find "$dir" -name "*.webp" -exec du -cb {} + 2>/dev/null | tail -1 | cut -f1)
        
        # Add to totals (handle empty results)
        original_size=$((original_size + ${dir_original:-0}))
        webp_size=$((webp_size + ${dir_webp:-0}))
    fi
done

if [ ! -z "$original_size" ] && [ ! -z "$webp_size" ] && [ "$original_size" -gt 0 ]; then
    original_mb=$(echo "scale=2; $original_size / 1024 / 1024" | bc -l)
    webp_mb=$(echo "scale=2; $webp_size / 1024 / 1024" | bc -l)
    savings_percent=$(echo "scale=1; (($original_size - $webp_size) * 100) / $original_size" | bc -l)
    
    echo -e "${BLUE}Original images: ${original_mb} MB${NC}"
    echo -e "${BLUE}WebP images: ${webp_mb} MB${NC}"
    echo -e "${GREEN}Space savings: ${savings_percent}%${NC}"
fi
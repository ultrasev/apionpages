#!/bin/bash

input="public/rawicon.png"
output_dir="public/icons"
public_dir="public"
roundedImage="/tmp/icon.png"

width=`identify -format %w $input`
half_width=$((width / 2))
sli rc $input --radius $half_width --export $roundedImage

mkdir -p $output_dir

if [ ! -f "$input" ]; then
    echo "输入文件 '$input' 不存在，请检查路径。"
    exit 1
fi

if ! command -v convert &> /dev/null; then
    echo "ImageMagick 未安装，请先安装它。"
    exit 1
fi


sizes=(57 60 72 76 114 120 144 152 167 180)
for size in "${sizes[@]}"; do
    convert "$input" -resize ${size}x${size} "$output_dir/apple-icon-${size}x${size}.png"
    convert "$input" -resize ${size}x${size} "$output_dir/apple-touch-icon-${size}x${size}.png"
    convert "$input" -resize ${size}x${size} "$output_dir/apple-touch-icon-${size}x${size}-precomposed.png"
done

convert "$input" -resize 180x180 "$output_dir/apple-touch-icon.png"
convert "$input" -resize 180x180 "$output_dir/apple-touch-icon-precomposed.png"

convert "$roundedImage" -resize 16x16 "$output_dir/favicon-16x16.png"
convert "$roundedImage" -resize 32x32 "$output_dir/favicon-32x32.png"
convert "$roundedImage" -resize 48x48 "$output_dir/favicon-48x48.png"
convert "$roundedImage" -resize 96x96 "$output_dir/favicon-96x96.png"

# 四合一
convert "$output_dir/favicon-16x16.png" "$output_dir/favicon-32x32.png"  \
    $output_dir/favicon-48x48.png "$output_dir/favicon-96x96.png" "$output_dir/favicon.ico"

# 复制文件到public根目录
cp "$output_dir/apple-touch-icon.png" "$public_dir/apple-touch-icon.png"
cp "$output_dir/apple-touch-icon-precomposed.png" "$public_dir/apple-touch-icon-precomposed.png"
cp "$output_dir/apple-touch-icon-120x120.png" "$public_dir/apple-touch-icon-120x120.png"
cp "$output_dir/apple-touch-icon-120x120-precomposed.png" "$public_dir/apple-touch-icon-120x120-precomposed.png"


# favicon.ico 要放到 app/ 目录下
convert "$roundedImage" -resize 96x96 "app/favicon.ico"
rm "$public_dir/favicon.ico"

echo ">> export all icons to $output_dir, some files are copied to public root."

# Generate twitter-image and opengraph-image
preview="public/preview.png"
if [ -f "$preview" ]; then
    convert "$preview" -resize 1200x630 "app/twitter-image.png"
    convert "$preview" -resize 1200x630 "app/opengraph-image.png"
    echo ">> twitter image and OpenGraph image are generated."
else
    echo ">> preview image not found, Twitter image and OpenGraph image not generated."
fi
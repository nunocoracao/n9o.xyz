#!/bin/bash
echo "Compiling hugo"
cp -v custom/search.js themes/congo/assets/js/search.js
hugo
hugo --gc
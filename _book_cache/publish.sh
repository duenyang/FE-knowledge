#!/bin/sh

echo "publishing..."

rm -rf _book_cache
cp -r _book _book_cache
gitbook serve
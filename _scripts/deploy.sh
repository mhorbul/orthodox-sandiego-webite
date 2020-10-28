#!/bin/bash

bundle exec jekyll build
rsync -av --delete ./_site/ gorbul.net:/var/www/orthodox-sandiego.net/

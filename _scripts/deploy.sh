#!/bin/bash

mv _config.yml _config.yml.orig
ruby -ryaml -e "c=YAML.load_file('_config.yml.orig'); c['time']=Time.now; puts c.to_yaml" > _config.yml
bundle exec jekyll build
mv _config.yml.orig _config.yml

rsync -av --delete ./_site/ gorbul.net:/var/www/orthodox-sandiego.net/

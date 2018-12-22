export PATH := $(PATH):node_modules/.bin

SOURCES = \
	$(wildcard src/mytheme/*) \
	webpack.config.js

all: build

build: clean node_modules $(SOURCES)
	yarn run build

watch: clean node_modules $(SOURCES)
	yarn run watch

clean:
	$(RM) -r theme

###

.PHONY: all build watch clean

node_modules: package.json
	yarn install
	touch node_modules


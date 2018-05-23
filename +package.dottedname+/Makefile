BUILDOUT_BIN ?= $(shell command -v buildout || echo 'bin/buildout')
BUILDOUT_ARGS ?=

.PHONY:
all: clean build

build: resources/theme

info: $(BUILDOUT_BIN) buildout.cfg
	$(BUILDOUT_BIN) -N annotate

.PHONY:
watch: bin/instance resources/Makefile
	make -j watch_plone watch_theme

.PHONY:
watch_plone: bin/instance
	bin/instance fg

.PHONY:
watch_theme: resources/Makefile
	sleep 10 # wait for Plone
	make -C resources watch

.PHONY:
clean:
	$(RM) -r \
		bin \
		develop-eggs \
		.installed.cfg \
		parts \
		resources/.plone
		resources/theme \

bootstrap-buildout.py:
	curl -k -O https://bootstrap.pypa.io/bootstrap-buildout.py

bin/buildout: bootstrap-buildout.py buildout.cfg
	python bootstrap-buildout.py -c buildout.cfg

bin/instance: $(BUILDOUT_BIN) buildout.cfg
	$(BUILDOUT_BIN) -N $(BUILDOUT_ARGS) install instance plonesite

resources/theme: bin/instance resources/Makefile
	bin/instance start; \
	  make -C resources build; \
	  status=$$?; \
	  bin/instance stop; \
	  exit $$status


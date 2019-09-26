plonetheme.webpacktemplate
==========================

.. image:: https://travis-ci.org/collective/plonetheme.webpacktemplate.svg?branch=master
    :target: https://travis-ci.org/collective/plonetheme.webpacktemplate

``plonetheme.webpacktemplate`` provides a `mr.bob <http://mrbob.readthedocs.org/en/latest/>`_ template to generate a webpack thema package for Plone.


Compatibility
-------------

* Plone 5.0.8 is the latest supported 5.0.x version. Plone 5.0.9 and 5.0.10
  cannot be supported, because their (TinyMCE) pattern sources include broken
  references. (Technically it is possible to override TinyMCE pattern with
  working version from a mockup checkout, but its configuration is beyond this
  template.)


Generate a new theme
--------------------

.. code:: bash

   $ pip install mr.bob

Now you can use it like this:

.. code:: bash

   $ git clone https://github.com/collective/plonetheme.webpacktemplate.git
   $ mrbob plonetheme.webpacktemplate

See `the documentation of mr.bob <http://mrbob.readthedocs.org/en/latest/>`_  for further information.

In short, it will ask you the following questions:

- Package dotted name. Should be something like 'my.themepackage'
- Theme title. Should be something like 'My Theme'
- Theme folder name. Should be something like 'mytheme'. Avoid spaces, and make it something different than the site ID, which will be the next question.
- Target site id. Defaults to 'Plone'
- Plone version. This needs to be a released version, like 5.1.4


Usage
-----

Start Plone and webpack-dev-server:

.. code:: shell

   $ make watch

An example Plone site with hot-reloaded theme should be now available at http://localhost:8080/Plone/ (at first, the theme must be manually enabled from the configuration panel).

You will notice there are two themes available for installation:
"My Theme" and "My Theme-customizations". 
See below for the why and how. For now, just activate your "My Theme" theme.

Stopping the `make watch` by pressing Ctrl-C will stop your local Plone instance and the webpack development server.


Making the production theme
---------------------------

Production theme is built with:

.. code:: shell

   $ make

This will generate a full folder structure under the 'theme' folder, ready to be zipped and deployed to a live production site.

Please, note that Plone must be running while running the initial build, because webpack fetches all the default resources directly from a Plone site. After the initial build the plugin uses its cache stored at `.plone` under the current working directory.


Using the custom theme feature
------------------------------

*(or: the return of custom.css, with some extras thrown in)*

There are two themes generated: "My Theme" and "My Theme-customizations".

The last one can be used in a special way:

- in your Plone site setup, go to the "Theming" section.
- do **not** activate this theme, but copy it, using the name that the description will tell you.
  It will be like "mytheme-custom", depending on your naming.
- The copy you created will have a custom.css, custom.js, and rules.xml file that you can edit directly in a browser
- The original "My Theme" theme will read these files, and thus any ad-hoc changes you put in there will persist, even when a newer version of your theme is zipped and uploaded.

Note that this feature is **not** the recommended way to do structured theme development.

In a normal workflow, it is better to make all your changes in the filesystem on your development machine,
and to put those changes into the version control system of your choice.

However, some people have a workflow where they

- want to quickly trial-and-error some changes,
- have people on their team not comfortable with file system changes
- need a quick way of fixing css, JavaScript or Diazo rules while away from their normal workplace
- feel nostalgic for the old days of Plone editing through the web

For all these situations, this mechanism can be a nice addition to their workflow.

If you don't want to use it, just don't make a copy of "My Theme-customizations", and it will not be enabled.

plonetheme.webpacktemplate
==========================

.. image:: https://travis-ci.org/collective/plonetheme.webpacktemplate.svg?branch=master
    :target: https://travis-ci.org/collective/plonetheme.webpacktemplate

``plonetheme.webpacktemplate`` provides a `mr.bob <http://mrbob.readthedocs.org/en/latest/>`_ template to generate a webpack thema package for Plone.


Generate a new theme
--------------------

.. code:: bash

   $ pip install mr.bob

Now you can use it like this:

.. code:: bash

   $ git clone https://github.com/collective/plonetheme.webpacktemplate.git
   $ mrbob plonetheme.webpacktemplate

See `the documentation of mr.bob <http://mrbob.readthedocs.org/en/latest/>`_  for further information.


Usage
-----

Start Plone and webpack-dev-server:

.. code:: shell

   $ make watch

An example Plone site with hot-reloaded theme should be now available at http://localhost:8080/Plone/ (at first, the theme must be manually enabled from the configuration panel).

Production theme is built with:

.. code:: shell

   $ make

Please, note that Plone must be running while running the initial build, because webpack fetches all the default resources directly from a Plone site. After the initial build the plugin uses its cache stored at `.plone` under the current working directory.

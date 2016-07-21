plonetheme.webpacktemplate
==========================

``plonetheme.webpacktemplate`` provides a `mr.bob <http://mrbob.readthedocs.org/en/latest/>`_ template to generate a webpack thema package for Plone.

Note: this template code is copied from `plonetheme.webpackexample <https://github.com/datakurre/plonetheme.webpackexample>`_.

Generate a new theme
--------------------

    ::

    $ pip install mr.bob

Now you can use it like this::

    $ mrbob https://github.com/ebrehault/plonetheme.webpacktemplate/archive/master.zip

See `the documentation of mr.bob <http://mrbob.readthedocs.org/en/latest/>`_  for further information.


Usage
------

Start Plone and webpack-dev-server:

.. code:: shell

   $ make watch

An example Plone site with hot-reloaded theme should be now available
at http://localhost:8080/Plone/ (at first, the theme must be manually
enabled from the configuration panel).

Production theme is built with:

.. code:: shell

   $ make

Please, note that Plone must be running while running the build, because
webpack fetches all the default resources directly from a Plone site.
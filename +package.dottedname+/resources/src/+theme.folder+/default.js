import 'plone';

import './default.less';
import './theme.less';

import jQuery from 'jquery';

if (jQuery('body.userrole-anonymous').length === 0) {
  import(/* webpackChunkName: "logged-in" */ './logged-in');

  /* Add extra bundles when needed */
  // import(/* webpackChunkName: "pfgquickedit" */ 'pfgquickedit');
  // import(/* webpackChunkName: "pfgquickedit" */ 'mosaic');
  // import(/* webpackChunkName: "pfgquickedit" */ 'layouts-editor');
}

/* Expose jQuery when needed */
// window.jQuery = jQuery;

import requirejs from 'exports-loader?requirejs!script-loader!requirejs/require.js';
requirejs.config({});  // the real configuration is loaded in webpack.xml

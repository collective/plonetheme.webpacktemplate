import 'plone';

import './default.less';
import './theme.less';

import jQuery from 'jquery';  // Expose jQuery for convenience
window.jQuery = jQuery;

window.require = undefined;  // Fix @@search

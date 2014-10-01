// This is an example based on umdjs/umd/commonjsStrictGlobal.js that serves no purpose.
// It includes a dependency on jQuery and attaches it to a sample commonJsStrictGlobal module.
// This shows how one might setup a module that supports CommonJS, Node, and AMD. 

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['exports', 'jQuery'], function (exports, jQuery) {
          factory((root.commonJsStrictGlobal = exports), jQuery);
      });
  } else if (typeof exports === 'object') {
      // CommonJS
      factory(exports, require('jQuery'));
  } else {
      // Browser globals
      factory((root.commonJsStrictGlobal = {}), root.$);
  }
}(this, function (exports, jQuery) {
    //Now we can use jQuery

    // attach properties to the exports object to define
    // the exported module properties.
    exports.action = function () {};
    exports.$ = jQuery;
}));
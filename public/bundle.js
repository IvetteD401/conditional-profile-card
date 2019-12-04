/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style/index.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/style/index.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, ".filters {\n  width: 100%; }\n  .filters li {\n    display: inline-block;\n    max-width: 80px;\n    padding: 3px; }\n    .filters li label {\n      display: block;\n      font-size: 15px;\n      font-weight: 900; }\n    .filters li input {\n      width: 100%; }\n    .filters li select {\n      width: 100%; }\n\n.header {\n  padding: 30px;\n  text-align: center;\n  background-image: url(\"https://thumbs.gfycat.com/CreativeIncredibleAmericanredsquirrel.webp\");\n  background-position: center;\n  /* Center the image */\n  background-repeat: no-repeat;\n  /* Do not repeat the image */\n  background-size: cover;\n  color: rgba(77, 126, 139, 0.822);\n  font-size: 20px; }\n\n.widget {\n  position: relative;\n  width: 300px;\n  height: 350px;\n  margin: 50px auto;\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1); }\n  .widget .cover {\n    height: 160px;\n    overflow: hidden; }\n    .widget .cover img {\n      width: 100%;\n      height: auto;\n      min-height: 160px;\n      border-radius: 4px 4px 0 0; }\n  .widget .photo {\n    position: absolute;\n    top: 85px;\n    left: 50%;\n    width: 100px;\n    height: 100px;\n    margin: 0 0 0 -55px;\n    border: 5px solid #fff;\n    border-radius: 50%; }\n  .widget h1,\n  .widget h2,\n  .widget h3 {\n    display: block;\n    margin: 10px 0;\n    text-align: center;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 16px;\n    font-weight: 300;\n    color: #999; }\n  .widget h1 {\n    margin: 60px 0 20px;\n    font-size: 26px;\n    color: #000; }\n  .widget h3 {\n    font-size: 12px; }\n  .widget ul {\n    position: absolute;\n    top: 20px;\n    padding: 0;\n    background: #2cdfd3; }\n    .widget ul.position-left {\n      left: -26px; }\n    .widget ul.position-right {\n      right: -27px; }\n    .widget ul li {\n      list-style: none; }\n      .widget ul li a {\n        display: block;\n        padding: 5px 6px;\n        color: #fff;\n        cursor: pointer;\n        text-align: center;\n        border-bottom: 1px solid #2cd5ca;\n        transition: background-color 0.3s; }\n      .widget ul li:hover > a {\n        background-color: #2cd5ca; }\n      .widget ul li:first-child > a {\n        border-radius: 0 3px 0 0; }\n      .widget ul li:last-child > a {\n        border: none;\n        border-radius: 0 0 3px 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.scss */ "./src/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city}, ${variables.country}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href=${variables.twitter}><i class="fa fa-twitter"></i></a></li>
            <li><a href=${variables.github}><i class="fa fa-github"></i></a></li>
            <li><a href=${variables.linkedin}><i class="fa fa-linkedin"></i></a></li>
            <li><a href=${variables.instagram}><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function () {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://thumbs.gfycat.com/AgonizingObviousHochstettersfrog.webp",
    // this is the url for the profile avatar
    avatarURL: "data:image/jpeg;base64,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",
    // social media bar position (left or right)
    socialMediaPosition: "left",
    // social media usernames
    twitter: "@twitter",
    github: "github",
    linkedin: "linkedin",
    instagram: "@instagram",
    name: "Rosie",
    lastname: "Jetson",
    role: "Creator of Fun!",
    country: "In the Galaxy",
    city: "My city"
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function (elm) {
    elm.addEventListener("change", function (e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] = this.value == "" ? null : this.value == "true" ? true : this.value == "false" ? false : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
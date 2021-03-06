/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
/**
 * Interfaces para elementos sintacticos
 */
var ValueKind;
(function (ValueKind) {
    ValueKind[ValueKind["Integer"] = 0] = "Integer";
    ValueKind[ValueKind["Real"] = 1] = "Real";
    ValueKind[ValueKind["String"] = 2] = "String";
})(ValueKind = exports.ValueKind || (exports.ValueKind = {}));
var SymbolKind;
(function (SymbolKind) {
    SymbolKind[SymbolKind["Plus"] = 3] = "Plus";
    SymbolKind[SymbolKind["Minus"] = 4] = "Minus";
    SymbolKind[SymbolKind["Times"] = 5] = "Times";
    SymbolKind[SymbolKind["Slash"] = 6] = "Slash";
    SymbolKind[SymbolKind["Power"] = 7] = "Power";
    SymbolKind[SymbolKind["Assignment"] = 8] = "Assignment";
    SymbolKind[SymbolKind["Minor"] = 9] = "Minor";
    SymbolKind[SymbolKind["MinorEq"] = 10] = "MinorEq";
    SymbolKind[SymbolKind["Different"] = 11] = "Different";
    SymbolKind[SymbolKind["Equal"] = 12] = "Equal";
    SymbolKind[SymbolKind["Major"] = 13] = "Major";
    SymbolKind[SymbolKind["MajorEq"] = 14] = "MajorEq";
    SymbolKind[SymbolKind["LeftPar"] = 15] = "LeftPar";
    SymbolKind[SymbolKind["RightPar"] = 16] = "RightPar";
    SymbolKind[SymbolKind["LeftBracket"] = 17] = "LeftBracket";
    SymbolKind[SymbolKind["RightBracket"] = 18] = "RightBracket";
    SymbolKind[SymbolKind["Comma"] = 19] = "Comma";
    SymbolKind[SymbolKind["EOF"] = 20] = "EOF";
    SymbolKind[SymbolKind["EOL"] = 21] = "EOL";
})(SymbolKind = exports.SymbolKind || (exports.SymbolKind = {}));
var ReservedKind;
(function (ReservedKind) {
    ReservedKind[ReservedKind["Si"] = 22] = "Si";
    ReservedKind[ReservedKind["Or"] = 23] = "Or";
    ReservedKind[ReservedKind["Fin"] = 24] = "Fin";
    ReservedKind[ReservedKind["Que"] = 25] = "Que";
    ReservedKind[ReservedKind["Div"] = 26] = "Div";
    ReservedKind[ReservedKind["And"] = 27] = "And";
    ReservedKind[ReservedKind["Not"] = 28] = "Not";
    ReservedKind[ReservedKind["Mod"] = 29] = "Mod";
    ReservedKind[ReservedKind["Ref"] = 30] = "Ref";
    ReservedKind[ReservedKind["Sino"] = 31] = "Sino";
    ReservedKind[ReservedKind["Para"] = 32] = "Para";
    ReservedKind[ReservedKind["Real"] = 33] = "Real";
    ReservedKind[ReservedKind["FinSi"] = 34] = "FinSi";
    ReservedKind[ReservedKind["Hasta"] = 35] = "Hasta";
    ReservedKind[ReservedKind["Falso"] = 36] = "Falso";
    ReservedKind[ReservedKind["Inicio"] = 37] = "Inicio";
    ReservedKind[ReservedKind["Entero"] = 38] = "Entero";
    ReservedKind[ReservedKind["Logico"] = 39] = "Logico";
    ReservedKind[ReservedKind["FinPara"] = 40] = "FinPara";
    ReservedKind[ReservedKind["Repetir"] = 41] = "Repetir";
    ReservedKind[ReservedKind["Funcion"] = 42] = "Funcion";
    ReservedKind[ReservedKind["Entonces"] = 43] = "Entonces";
    ReservedKind[ReservedKind["Mientras"] = 44] = "Mientras";
    ReservedKind[ReservedKind["Caracter"] = 45] = "Caracter";
    ReservedKind[ReservedKind["Retornar"] = 46] = "Retornar";
    ReservedKind[ReservedKind["Variables"] = 47] = "Variables";
    ReservedKind[ReservedKind["Verdadero"] = 48] = "Verdadero";
    ReservedKind[ReservedKind["FinFuncion"] = 49] = "FinFuncion";
    ReservedKind[ReservedKind["FinMientras"] = 50] = "FinMientras";
    ReservedKind[ReservedKind["Procedimiento"] = 51] = "Procedimiento";
    ReservedKind[ReservedKind["FinProcedimiento"] = 52] = "FinProcedimiento";
    ReservedKind[ReservedKind["Neg"] = 53] = "Neg";
})(ReservedKind = exports.ReservedKind || (exports.ReservedKind = {}));
var OtherKind;
(function (OtherKind) {
    OtherKind[OtherKind["Word"] = 54] = "Word";
    OtherKind[OtherKind["Unknown"] = 55] = "Unknown";
})(OtherKind = exports.OtherKind || (exports.OtherKind = {}));
/**
 * Stage 3: transforms a program into another that's equivalent
 * and can be executed by the interpreter
 */
var S3;
(function (S3) {
    function get_last(s) {
        var current = s;
        while (current.exit_point !== null) {
            current = current.exit_point;
        }
        return current;
    }
    S3.get_last = get_last;
    var StatementKinds;
    (function (StatementKinds) {
        StatementKinds[StatementKinds["Plus"] = 0] = "Plus";
        StatementKinds[StatementKinds["Minus"] = 1] = "Minus";
        StatementKinds[StatementKinds["Times"] = 2] = "Times";
        StatementKinds[StatementKinds["Slash"] = 3] = "Slash";
        StatementKinds[StatementKinds["Div"] = 4] = "Div";
        StatementKinds[StatementKinds["Mod"] = 5] = "Mod";
        StatementKinds[StatementKinds["Power"] = 6] = "Power";
        StatementKinds[StatementKinds["Assign"] = 7] = "Assign";
        StatementKinds[StatementKinds["Get"] = 8] = "Get";
        StatementKinds[StatementKinds["AssignV"] = 9] = "AssignV";
        StatementKinds[StatementKinds["GetV"] = 10] = "GetV";
        StatementKinds[StatementKinds["Push"] = 11] = "Push";
        StatementKinds[StatementKinds["Pop"] = 12] = "Pop";
        StatementKinds[StatementKinds["Minor"] = 13] = "Minor";
        StatementKinds[StatementKinds["MinorEq"] = 14] = "MinorEq";
        StatementKinds[StatementKinds["Different"] = 15] = "Different";
        StatementKinds[StatementKinds["Equal"] = 16] = "Equal";
        StatementKinds[StatementKinds["Major"] = 17] = "Major";
        StatementKinds[StatementKinds["MajorEq"] = 18] = "MajorEq";
        StatementKinds[StatementKinds["Not"] = 19] = "Not";
        StatementKinds[StatementKinds["And"] = 20] = "And";
        StatementKinds[StatementKinds["Or"] = 21] = "Or";
        StatementKinds[StatementKinds["If"] = 22] = "If";
        StatementKinds[StatementKinds["While"] = 23] = "While";
        StatementKinds[StatementKinds["Until"] = 24] = "Until";
        StatementKinds[StatementKinds["UserModuleCall"] = 25] = "UserModuleCall";
        StatementKinds[StatementKinds["ReadCall"] = 26] = "ReadCall";
        StatementKinds[StatementKinds["WriteCall"] = 27] = "WriteCall";
        StatementKinds[StatementKinds["Return"] = 28] = "Return";
        StatementKinds[StatementKinds["Concat"] = 29] = "Concat";
        StatementKinds[StatementKinds["AssignString"] = 30] = "AssignString";
        StatementKinds[StatementKinds["Alias"] = 31] = "Alias";
        StatementKinds[StatementKinds["CopyVec"] = 32] = "CopyVec";
        StatementKinds[StatementKinds["Neg"] = 33] = "Neg";
        StatementKinds[StatementKinds["MakeFrame"] = 34] = "MakeFrame";
        StatementKinds[StatementKinds["InitV"] = 35] = "InitV";
    })(StatementKinds = S3.StatementKinds || (S3.StatementKinds = {}));
    var BaseStatement = (function () {
        function BaseStatement(owner) {
            this.owner = owner;
            this._exit_point = null;
            this.exit_set = false;
        }
        Object.defineProperty(BaseStatement.prototype, "exit_point", {
            get: function () {
                return this._exit_point;
            },
            set: function (s) {
                if (this.exit_set == true) {
                    throw new Error('No se puede establecer el punto de salida de un Statement mas de una vez.');
                }
                else {
                    this._exit_point = s;
                    this.exit_set = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        return BaseStatement;
    }());
    S3.BaseStatement = BaseStatement;
    var MakeFrame = (function (_super) {
        tslib_1.__extends(MakeFrame, _super);
        function MakeFrame(owner, name) {
            var _this = _super.call(this, owner) || this;
            _this.kind = StatementKinds.MakeFrame;
            _this.name = name;
            _this.is_user_stmnt = false;
            return _this;
        }
        return MakeFrame;
    }(BaseStatement));
    S3.MakeFrame = MakeFrame;
    // Los contenidos de esta clase son parecidos a los de CopyVec al proposito
    var InitV = (function (_super) {
        tslib_1.__extends(InitV, _super);
        function InitV(owner, source, target_name) {
            var _this = _super.call(this, owner) || this;
            _this.kind = StatementKinds.InitV;
            _this.source = source;
            _this.target_name = target_name;
            _this.is_user_stmnt = false;
            return _this;
        }
        return InitV;
    }(BaseStatement));
    S3.InitV = InitV;
    var CopyVec = (function (_super) {
        tslib_1.__extends(CopyVec, _super);
        /**
         * target datos del vector que recibe los datos;
         * source datos del vector del cual se copian los datos;
         */
        function CopyVec(owner, target, source, pos) {
            var _this = _super.call(this, owner) || this;
            _this.kind = StatementKinds.CopyVec;
            _this.target = target;
            _this.source = source;
            _this.is_user_stmnt = true;
            _this.pos = pos;
            return _this;
        }
        return CopyVec;
    }(BaseStatement));
    S3.CopyVec = CopyVec;
    var Alias = (function (_super) {
        tslib_1.__extends(Alias, _super);
        function Alias(owner, varname, indexes, dimensions, alias, module_name, varkind) {
            var _this = _super.call(this, owner) || this;
            _this.kind = StatementKinds.Alias;
            _this.varname = varname;
            _this.var_indexes = indexes;
            _this.local_alias = alias;
            _this.dimensions = dimensions;
            _this.module_name = module_name;
            _this.is_user_stmnt = false;
            _this.varkind = varkind;
            return _this;
        }
        return Alias;
    }(BaseStatement));
    S3.Alias = Alias;
    var AssignString = (function (_super) {
        tslib_1.__extends(AssignString, _super);
        function AssignString(owner, varname, length, indexes, user, pos) {
            var _this = _super.call(this, owner) || this;
            _this.kind = StatementKinds.AssignString;
            _this.varname = varname;
            _this.length = length;
            _this.indexes = indexes;
            _this.is_user_stmnt = user;
            _this.pos = pos;
            return _this;
        }
        return AssignString;
    }(BaseStatement));
    S3.AssignString = AssignString;
    var Concat = (function (_super) {
        tslib_1.__extends(Concat, _super);
        function Concat(owner, length) {
            var _this = _super.call(this, owner) || this;
            _this.kind = StatementKinds.Concat;
            _this.length = length;
            _this.is_user_stmnt = false;
            return _this;
        }
        return Concat;
    }(BaseStatement));
    S3.Concat = Concat;
    var Return = (function (_super) {
        tslib_1.__extends(Return, _super);
        function Return(owner, pos) {
            var _this = _super.call(this, owner) || this;
            _this.kind = StatementKinds.Return;
            _this.is_user_stmnt = true;
            _this.pos = pos;
            return _this;
        }
        return Return;
    }(BaseStatement));
    S3.Return = Return;
    var UserModuleCall = (function (_super) {
        tslib_1.__extends(UserModuleCall, _super);
        function UserModuleCall(owner, name, total_args, pos) {
            var _this = _super.call(this, owner) || this;
            _this.name = name;
            _this.total_args = total_args;
            _this.kind = StatementKinds.UserModuleCall;
            _this.is_user_stmnt = true;
            _this.pos = pos;
            return _this;
        }
        return UserModuleCall;
    }(BaseStatement));
    S3.UserModuleCall = UserModuleCall;
    var ReadCall = (function (_super) {
        tslib_1.__extends(ReadCall, _super);
        function ReadCall(owner, varname, type, pos) {
            var _this = _super.call(this, owner) || this;
            _this.varname = varname;
            _this.kind = StatementKinds.ReadCall;
            _this.name = 'leer';
            _this.type = type;
            _this.is_user_stmnt = true;
            _this.pos = pos;
            return _this;
        }
        return ReadCall;
    }(BaseStatement));
    S3.ReadCall = ReadCall;
    var WriteCall = (function (_super) {
        tslib_1.__extends(WriteCall, _super);
        function WriteCall(owner, pos) {
            var _this = _super.call(this, owner) || this;
            _this.kind = StatementKinds.WriteCall;
            _this.name = 'escribir';
            _this.is_user_stmnt = true;
            _this.pos = pos;
            return _this;
        }
        return WriteCall;
    }(BaseStatement));
    S3.WriteCall = WriteCall;
    var Assign = (function (_super) {
        tslib_1.__extends(Assign, _super);
        function Assign(owner, varname, user, pos) {
            var _this = _super.call(this, owner) || this;
            _this.varname = varname;
            _this.kind = StatementKinds.Assign;
            _this.is_user_stmnt = user;
            _this.pos = pos;
            return _this;
        }
        return Assign;
    }(BaseStatement));
    S3.Assign = Assign;
    var AssignV = (function (_super) {
        tslib_1.__extends(AssignV, _super);
        function AssignV(owner, total_indexes, dimensions, varname, user, pos) {
            var _this = _super.call(this, owner) || this;
            _this.total_indexes = total_indexes;
            _this.dimensions = dimensions;
            _this.varname = varname;
            _this.kind = StatementKinds.AssignV;
            _this.is_user_stmnt = user;
            _this.pos = pos;
            return _this;
        }
        return AssignV;
    }(BaseStatement));
    S3.AssignV = AssignV;
    var Get = (function (_super) {
        tslib_1.__extends(Get, _super);
        function Get(owner, varname) {
            var _this = _super.call(this, owner) || this;
            _this.varname = varname;
            _this.kind = StatementKinds.Get;
            return _this;
        }
        return Get;
    }(BaseStatement));
    S3.Get = Get;
    var GetV = (function (_super) {
        tslib_1.__extends(GetV, _super);
        function GetV(owner, total_indexes, dimensions, varname) {
            var _this = _super.call(this, owner) || this;
            _this.total_indexes = total_indexes;
            _this.dimensions = dimensions;
            _this.varname = varname;
            _this.kind = StatementKinds.GetV;
            return _this;
        }
        return GetV;
    }(BaseStatement));
    S3.GetV = GetV;
    var Push = (function (_super) {
        tslib_1.__extends(Push, _super);
        function Push(owner, value) {
            var _this = _super.call(this, owner) || this;
            _this.value = value;
            _this.kind = StatementKinds.Push;
            return _this;
        }
        return Push;
    }(BaseStatement));
    S3.Push = Push;
    var Pop = (function (_super) {
        tslib_1.__extends(Pop, _super);
        function Pop(owner) {
            var _this = _super.call(this, owner) || this;
            _this.kind = StatementKinds.Pop;
            return _this;
        }
        return Pop;
    }(BaseStatement));
    S3.Pop = Pop;
    var Operation = (function (_super) {
        tslib_1.__extends(Operation, _super);
        function Operation(owner, kind) {
            var _this = _super.call(this, owner) || this;
            _this.kind = kind;
            return _this;
        }
        return Operation;
    }(BaseStatement));
    S3.Operation = Operation;
    var While = (function (_super) {
        tslib_1.__extends(While, _super);
        function While(owner, entry_point, pos) {
            var _this = _super.call(this, owner) || this;
            _this.entry_point = entry_point;
            _this.kind = StatementKinds.While;
            _this.is_user_stmnt = true;
            _this.pos = pos;
            return _this;
        }
        return While;
    }(BaseStatement));
    S3.While = While;
    var Until = (function (_super) {
        tslib_1.__extends(Until, _super);
        function Until(owner, entry_point, pos) {
            var _this = _super.call(this, owner) || this;
            _this.entry_point = entry_point;
            _this.kind = StatementKinds.Until;
            _this.is_user_stmnt = true;
            _this.pos = pos;
            return _this;
        }
        return Until;
    }(BaseStatement));
    S3.Until = Until;
    var If = (function (_super) {
        tslib_1.__extends(If, _super);
        function If(owner, true_branch_entry, false_branch_entry, pos) {
            var _this = _super.call(this, owner) || this;
            _this.true_branch_entry = true_branch_entry;
            _this.false_branch_entry = false_branch_entry;
            _this.kind = StatementKinds.If;
            _this.is_user_stmnt = true;
            _this.pos = pos;
            return _this;
        }
        Object.defineProperty(If.prototype, "exit_point", {
            get: function () {
                return this._exit_point;
            },
            set: function (s) {
                if (this.exit_set == true) {
                    throw new Error('No se puede establecer el punto de salida de un Statement mas de una vez.');
                }
                else {
                    this._exit_point = s;
                    var last_true_s = get_last(this.true_branch_entry);
                    last_true_s.exit_point = s;
                    var last_false_s = get_last(this.false_branch_entry);
                    last_false_s.exit_point = s;
                    this.exit_set = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        return If;
    }(BaseStatement));
    S3.If = If;
})(S3 = exports.S3 || (exports.S3 = {}));
/**
 * Stage 4:
 */
var Typed;
(function (Typed) {
    var ArrayType = (function () {
        function ArrayType(represents, element_type, length) {
            this.kind = 'array';
            this.type = 'type';
            this.length = length;
            this.cell_type = element_type;
            this.represents = represents;
        }
        return ArrayType;
    }());
    Typed.ArrayType = ArrayType;
    var AtomicType = (function () {
        function AtomicType(represents, tn) {
            this.kind = 'atomic';
            this.type = 'type';
            this.typename = tn;
            this.represents = represents;
        }
        return AtomicType;
    }());
    Typed.AtomicType = AtomicType;
    var StringType = (function (_super) {
        tslib_1.__extends(StringType, _super);
        function StringType(length, represents) {
            return _super.call(this, represents, new AtomicType(represents, 'caracter'), length) || this;
        }
        return StringType;
    }(ArrayType));
    Typed.StringType = StringType;
})(Typed = exports.Typed || (exports.Typed = {}));
var VarState;
(function (VarState) {
    VarState[VarState["ExistsInit"] = 0] = "ExistsInit";
    VarState[VarState["ExistsNotInit"] = 1] = "ExistsNotInit";
    VarState[VarState["ExistsOutOfScope"] = 2] = "ExistsOutOfScope";
    VarState[VarState["DoesntExist"] = 3] = "DoesntExist";
})(VarState = exports.VarState || (exports.VarState = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ActionKind;
(function (ActionKind) {
    ActionKind[ActionKind["Execute"] = 0] = "Execute";
    ActionKind[ActionKind["Step"] = 1] = "Step";
    ActionKind[ActionKind["MoveCursor"] = 2] = "MoveCursor";
    ActionKind[ActionKind["DragHandle"] = 3] = "DragHandle";
    ActionKind[ActionKind["ShowMessage"] = 4] = "ShowMessage";
    ActionKind[ActionKind["ClearMessages"] = 5] = "ClearMessages";
    ActionKind[ActionKind["SendInput"] = 6] = "SendInput";
    ActionKind[ActionKind["Write"] = 7] = "Write";
    ActionKind[ActionKind["ClearOutput"] = 8] = "ClearOutput";
    ActionKind[ActionKind["ShowCompiledCode"] = 9] = "ShowCompiledCode";
    ActionKind[ActionKind["SetUpInterpreter"] = 10] = "SetUpInterpreter";
    ActionKind[ActionKind["ExecuteBySteps"] = 11] = "ExecuteBySteps";
    ActionKind[ActionKind["StopExecution"] = 12] = "StopExecution";
    ActionKind[ActionKind["CompileAndShow"] = 13] = "CompileAndShow";
    ActionKind[ActionKind["StopExecutionWithError"] = 14] = "StopExecutionWithError";
    ActionKind[ActionKind["StopExecutionUser"] = 15] = "StopExecutionUser";
    ActionKind[ActionKind["FocusEditor"] = 16] = "FocusEditor";
    ActionKind[ActionKind["DisableButtons"] = 17] = "DisableButtons";
    ActionKind[ActionKind["EnableButtons"] = 18] = "EnableButtons";
    ActionKind[ActionKind["HidePanel"] = 19] = "HidePanel";
    ActionKind[ActionKind["ShowPanel"] = 20] = "ShowPanel";
    ActionKind[ActionKind["SendVarName"] = 21] = "SendVarName";
    ActionKind[ActionKind["UpdateVars"] = 22] = "UpdateVars";
    ActionKind[ActionKind["RemoveVarFromInspection"] = 23] = "RemoveVarFromInspection";
    ActionKind[ActionKind["RemoveMsgFromInspection"] = 24] = "RemoveMsgFromInspection";
})(ActionKind = exports.ActionKind || (exports.ActionKind = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = __webpack_require__(1);
// flatten :: [any] -> [[any]] -> [any]
function flatten(accumulator, arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var a = arr_1[_i];
        for (var _a = 0, a_1 = a; _a < a_1.length; _a++) {
            var element = a_1[_a];
            accumulator.push(element);
        }
    }
    return accumulator;
}
exports.flatten = flatten;
// toma dos objetos y devuelve uno nuevo que contiene las propiedades (y valores)
// de los dos anteriores. Si hay propiedades repetidas entre a y b, se toman las
// de b
function mergeObjs(a, b) {
    var r = {};
    for (var prop in a) {
        r[prop] = a[prop];
    }
    for (var prop in b) {
        r[prop] = b[prop];
    }
    return r;
}
exports.mergeObjs = mergeObjs;
function clone_obj(a) {
    return mergeObjs({}, a);
}
exports.clone_obj = clone_obj;
// take, zip y zipObj estan basadas en funciones de haskell
// crea un nuevo objeto dadas una lista de valores y una lista de cadenas.
// Tendra tantos pares prop/valor como haya elementos en la lista mas
// corta
function zipObj(values, names) {
    if (values.length > names.length) {
        values = take(names.length, values);
    }
    else if (values.length < names.length) {
        names = take(values.length, names);
    }
    var pairs = zip(names, values);
    /**
     * result es un objeto cuyas claves son cadenas y cuyos valores son de tipo A
     */
    var result = {};
    for (var _i = 0, pairs_1 = pairs; _i < pairs_1.length; _i++) {
        var _a = pairs_1[_i], prop = _a[0], value = _a[1];
        result[prop] = value;
    }
    return result;
}
exports.zipObj = zipObj;
// toma dos listas y devuelve una lista de pares donde el primer elemento
// pertenece a "a" y el segundo a "b". La lista tendra tantos elementos
// como la mas corta entre a y b
function zip(a, b) {
    if (a.length > b.length) {
        a = take(b.length, a);
    }
    else if (a.length < b.length) {
        b = take(a.length, b);
    }
    var result = [];
    for (var i = 0; i < a.length; i++) {
        result.push([a[i], b[i]]);
    }
    return result;
}
exports.zip = zip;
// toma los primeros n elementos de un arreglo
function take(n, list) {
    return list.slice(0, n);
}
exports.take = take;
/**
 * drop
 * quita los primeros n elementos de un arreglo
 */
function drop(n, list) {
    return list.slice(n);
}
exports.drop = drop;
/**
 * arr_counter
 * crea un arreglo numerico inicializado con una longitud especifica
 * para ser usado como contador
 */
function arr_counter(length, init) {
    var arr = new Array(length);
    for (var i = 0; i < length; i++) {
        arr[i] = init;
    }
    return arr;
}
exports.arr_counter = arr_counter;
/**
 * arr_equal
 * compara dos arreglos para ver si son iguales
 */
function arr_equal(a, b) {
    if (a.length != b.length) {
        return false;
    }
    else {
        for (var i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                return false;
            }
        }
    }
    return true;
}
exports.arr_equal = arr_equal;
/**
 * arr_less
 * compara dos arreglos numericos de la misma longitud
 * para ver si el primero es menor que el segundo.
 */
function arr_minor(a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            return false;
        }
    }
    return true;
}
exports.arr_minor = arr_minor;
/**
 * arr_major
 * compara dos arreglos numericos de la misma longitud
 * para ver si el primero es mayor que el segundo
 */
function arr_major(a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] < b[i]) {
            return false;
        }
    }
    return true;
}
exports.arr_major = arr_major;
/**
 * arr_counter_inc
 * toma una arreglo de numeros usado como contador y lo incrementa `increment` unidades
 */
function arr_counter_inc(a, lengths, init) {
    var done = false;
    for (var i = a.length - 1; i >= 0 && !done; i--) {
        a[i]++;
        done = true;
        /**
         * Esto permite que el primer elemento del arreglo se incremente
         * indefinidamente. Es el unico que no es reseteado.
         */
        if (i > 0) {
            if (a[i] > lengths[i]) {
                a[i] = init;
                done = false;
            }
        }
    }
}
exports.arr_counter_inc = arr_counter_inc;
/**
 * arr_counter_inc
 * toma un arreglo numercio usado como contador y lo decrementa
 * `dec` unidades.
 */
function arr_counter_dec(a, lengths) {
    var done = false;
    for (var i = a.length - 1; i >= 0 && !done; i--) {
        a[i]--;
        done = true;
        if (i > 0) {
            if (a[i] < 1) {
                a[i] = lengths[i];
                done = false;
            }
        }
    }
}
exports.arr_counter_dec = arr_counter_dec;
function types_are_equal(a, b) {
    if (a.kind == b.kind) {
        switch (a.kind) {
            case 'array':
                if (a.length == b.length) {
                    return types_are_equal(a.cell_type, b.cell_type);
                }
                else {
                    return false;
                }
            case 'atomic':
                return a.typename == b.typename;
        }
    }
    else {
        return false;
    }
}
exports.types_are_equal = types_are_equal;
function stringify(type) {
    if (type.kind == 'array') {
        var dimensions = '';
        var ct = type;
        while (ct.kind == 'array') {
            dimensions += ct.length;
            if (ct.cell_type.kind == 'array') {
                dimensions += ', ';
            }
            ct = ct.cell_type;
        }
        var atomic = ct.typename;
        return atomic + "[" + dimensions + "]";
    }
    else {
        return type.typename;
    }
}
exports.stringify = stringify;
function type_literal(l) {
    var type = l.type, value = l.value;
    var datatype;
    switch (typeof l.value) {
        case 'boolean':
            datatype = new interfaces_1.Typed.AtomicType('literal', 'logico');
            break;
        case 'string':
            datatype = l.value.length > 1 ? new interfaces_1.Typed.StringType(l.value.length, 'literal') : new interfaces_1.Typed.AtomicType('literal', 'caracter');
            break;
        case 'number': {
            datatype = l.value - Math.trunc(l.value) > 0 ? new interfaces_1.Typed.AtomicType('literal', 'real') : new interfaces_1.Typed.AtomicType('literal', 'entero');
            break;
        }
    }
    return { type: type, value: value, typings: { type: datatype } };
}
exports.type_literal = type_literal;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Parser_1 = __webpack_require__(6);
exports.Parser = Parser_1.default;
var Interpreter_1 = __webpack_require__(17);
exports.Interpreter = Interpreter_1.default;
var transform_1 = __webpack_require__(24);
exports.transform = transform_1.default;
var TSChecker_1 = __webpack_require__(10);
exports.typecheck = TSChecker_1.default;
var fr_writer_1 = __webpack_require__(26);
exports.fr_writer = fr_writer_1.default;
var interfaces_1 = __webpack_require__(1);
exports.VarState = interfaces_1.VarState;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var Emitter_1 = __webpack_require__(25);
var SourceWrapper_1 = __webpack_require__(19);
var Lexer_1 = __webpack_require__(18);
var TokenQueue_1 = __webpack_require__(8);
var Patterns_1 = __webpack_require__(7);
var Patterns_2 = __webpack_require__(7);
var Parser = (function (_super) {
    tslib_1.__extends(Parser, _super);
    function Parser() {
        return _super.call(this, ['parsing-started', 'lexical-error', 'syntax-error', 'parsing-finished']) || this;
    }
    Parser.prototype.parse = function (code) {
        this.emit('parsing-started');
        var source = new SourceWrapper_1.default(code);
        var lexer = new Lexer_1.default();
        var lexer_report = lexer.tokenize(source);
        // emitir eventos de error si hubo alguno y finalizar parseo
        if (lexer_report.error) {
            return { error: true, result: lexer_report.result };
        }
        var token_queue = new TokenQueue_1.default(lexer_report.result);
        Patterns_1.skipWhiteSpace(token_queue);
        // buscar el modulo principal
        var main_match = Patterns_1.MainModule(token_queue);
        if (main_match.error) {
            return { error: true, result: [main_match.result] };
        }
        else if (main_match.error == false) {
            var result = {
                main: main_match.result,
                user_modules: {}
            };
            // parsear el resto de los modulos del programa
            while (token_queue.current().name !== 'eof') {
                Patterns_1.skipWhiteSpace(token_queue);
                var module_match = void 0;
                if (token_queue.current().name == 'procedimiento') {
                    module_match = Patterns_2.ProcedureModule(token_queue);
                }
                else {
                    module_match = Patterns_2.FunctionModule(token_queue);
                }
                Patterns_1.skipWhiteSpace(token_queue);
                // si hubo un error emitir un error de sintaxis y finalizar parseo
                if (module_match.error) {
                    return { error: true, result: [module_match.result] };
                }
                else if (module_match.error == false) {
                    result.user_modules[module_match.result.name] = module_match.result;
                }
            }
            this.emit('parsing-finished', { error: false });
            return { error: false, result: result };
        }
    };
    return Parser;
}(Emitter_1.default));
exports.default = Parser;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = __webpack_require__(1);
var TokenQueue_js_1 = __webpack_require__(8);
/**
 * Funcion que intenta capturar un token numerico
 * @param {TokenQueue} source Fuente en la que hay que buscar el numero
 */
function Number(source) {
    var current = source.current();
    if (current.kind == interfaces_1.ValueKind.Real || current.kind == interfaces_1.ValueKind.Integer) {
        source.next();
        // A esta altura ya se que current representa un Token de tipo NumberToken, por lo tanto
        // su propiedad value es de tipo number y no (number | string), por lo tanto la casteo
        // a tipo number para que el compilador no se queje 
        return { error: false, result: { value: current.value, type: current.kind } };
    }
    else {
        var unexpected = current.kind;
        var expected = ['entero', 'real'];
        var column = current.column;
        var line = current.line;
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { column: column, line: line }, where: 'parser', reason: 'syntax-error' } };
    }
}
exports.Number = Number;
/**
 * Captura un token de tipo 'entero'
 * @param {TokenQueue} source fuente desde la cual se debe capturar
 */
function Integer(source) {
    var current = source.current();
    if (current.kind === interfaces_1.ValueKind.Integer) {
        // consumir el token actual y...
        source.next();
        // ...devolver los datos importantes o...
        return { error: false, result: current.value };
    }
    else {
        // ...devolver informacion sobre el error
        var unexpected = current.kind;
        var expected = ['entero'];
        var column = current.column;
        var line = current.line;
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { column: column, line: line }, where: 'parser', reason: 'syntax-error' } };
    }
}
exports.Integer = Integer;
/**
 * Captura la dimension de un arreglo
 */
function ArrayDimension(source) {
    var indexes = [];
    var index_report = Integer(source);
    if (index_report.error) {
        return index_report;
    }
    else {
        indexes.push(index_report.result);
    }
    if (source.current().kind === interfaces_1.SymbolKind.Comma) {
        source.next();
        var following_indexes = ArrayDimension(source);
        if (following_indexes.error) {
            return following_indexes;
        }
        else {
            indexes = indexes.concat(following_indexes.result);
            return { error: false, result: indexes };
        }
    }
    else {
        return { error: false, result: indexes };
    }
}
exports.ArrayDimension = ArrayDimension;
function Word(source) {
    var current = source.current();
    if (current.kind === interfaces_1.OtherKind.Word) {
        source.next();
        return { error: false, result: current.text };
    }
    else {
        var unexpected = current.kind;
        var expected = ['word'];
        var column = current.column;
        var line = current.line;
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { column: column, line: line }, where: 'parser', reason: 'syntax-error' } };
    }
}
exports.Word = Word;
/**
 * Patron que consume la declaracion de una variable (nombre y dimension)
 */
function VariableDeclaration(source) {
    var variable = { name: '', is_array: false, dimensions: [] };
    var text = Word(source);
    if (text.error) {
        return text;
    }
    else {
        variable.name = text.result;
        if (source.current().kind === interfaces_1.SymbolKind.LeftBracket) {
            source.next();
            var dimension = ArrayDimension(source);
            if (dimension.error) {
                return dimension;
            }
            else {
                variable.is_array = true;
                variable.dimensions = dimension.result;
                if (source.current().kind === interfaces_1.SymbolKind.RightBracket) {
                    source.next();
                    return { error: false, result: variable };
                }
                else {
                    var current = source.current();
                    var unexpected = current.kind;
                    var expected = ['right-bracket'];
                    var column = current.column;
                    var line = current.line;
                    return { error: true, result: { unexpected: unexpected, expected: expected, pos: { column: column, line: line }, where: 'parser', reason: 'syntax-error' } };
                }
            }
        }
        else {
            return { error: false, result: variable };
        }
    }
}
exports.VariableDeclaration = VariableDeclaration;
/**
 * Patron que consume una lista de declaraciones
 */
function VariableList(source) {
    var variables = [];
    var partial_match = false;
    var name_report = VariableDeclaration(source);
    if (name_report.error) {
        return name_report;
    }
    else {
        variables.push(name_report.result);
        if (source.current().kind === interfaces_1.SymbolKind.Comma && source.peek().kind === interfaces_1.OtherKind.Word) {
            source.next();
            var var_list_match = VariableList(source);
            if (var_list_match.error) {
                return var_list_match;
            }
            else if (var_list_match.error == false) {
                var k = var_list_match.result;
                var result = variables.concat(var_list_match.result);
                return { error: false, result: result };
            }
        }
        else {
            return { error: false, result: variables };
        }
    }
}
exports.VariableList = VariableList;
var isType = function (k) {
    return k == interfaces_1.ReservedKind.Entero || k == interfaces_1.ReservedKind.Real || k == interfaces_1.ReservedKind.Logico || k == interfaces_1.ReservedKind.Caracter;
};
/**
 * Patron que consume un tipo de datos.
 */
function TypeName(source) {
    var current = source.current();
    if (isType(current.kind)) {
        source.next();
        return { error: false, result: current.name };
    }
    else {
        var unexpected = current.kind;
        var expected = ['entero', 'real', 'logico', 'caracter'];
        var column = current.column;
        var line = current.line;
        var reason = 'nonexistent-type';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { column: column, line: line }, reason: reason, where: 'parser' } };
    }
}
exports.TypeName = TypeName;
/**
 * Patron que consume un indice (una expresion) de un arreglo
 */
function IndexExpression(source) {
    var indexes = [];
    var index_report = Expression(source, function (tk) { return tk == interfaces_1.SymbolKind.RightBracket || tk == interfaces_1.SymbolKind.Comma; });
    if (index_report.error === true) {
        return index_report;
    }
    else {
        indexes.push(index_report.result);
        if (source.current().kind === interfaces_1.SymbolKind.Comma) {
            source.next();
            var another_index_report = IndexExpression(source);
            if (another_index_report.error === true) {
                return another_index_report;
            }
            else {
                indexes = indexes.concat(another_index_report.result);
                return { error: false, result: indexes };
            }
        }
        else {
            return { error: false, result: indexes };
        }
    }
}
exports.IndexExpression = IndexExpression;
/**
 * Captura la invocacion de una variable
 */
function Variable(source) {
    var name = '', is_array = false, indexes = [];
    var word_match = Word(source);
    if (word_match.error === true) {
        return word_match;
    }
    else {
        name = word_match.result;
        if (source.current().kind === interfaces_1.SymbolKind.LeftBracket) {
            source.next();
            var index_expressions_match = IndexExpression(source);
            if (index_expressions_match.error === true) {
                return index_expressions_match;
            }
            is_array = true;
            indexes = index_expressions_match.result;
            if (source.current().kind === interfaces_1.SymbolKind.RightBracket) {
                source.next();
                return { error: false, result: { name: name, is_array: is_array, indexes: indexes } };
            }
            else {
                var current = source.current();
                var unexpected = current.kind;
                var expected = ['right-bracket'];
                var column = current.column;
                var line = current.line;
                return { error: true, result: { unexpected: unexpected, expected: expected, pos: { column: column, line: line }, where: 'parser', reason: 'syntax-error' } };
            }
        }
        else {
            return { error: false, result: { name: name, is_array: is_array, indexes: indexes } };
        }
    }
}
exports.Variable = Variable;
/**
 * Para dos operaciones a y b, si precedencia(a) > precedencia(b) => la operacion a ocurre primero
 */
var precedence = {
    'not': 7,
    'neg': 6,
    'minor-than': 5,
    'minor-equal': 5,
    'major-than': 5,
    'major-equal': 5,
    'power': 4,
    'div': 4,
    'mod': 4,
    'times': 4,
    'slash': 4,
    'minus': 3,
    'plus': 3,
    'and': 2,
    'or': 1,
    'equal': 0,
    'diff-than': 0
};
function is_operator(k) {
    switch (k) {
        case interfaces_1.SymbolKind.Power:
        case interfaces_1.SymbolKind.Times:
        case interfaces_1.SymbolKind.Slash:
        case interfaces_1.SymbolKind.Minus:
        case interfaces_1.SymbolKind.Plus:
        case interfaces_1.SymbolKind.Minor:
        case interfaces_1.SymbolKind.Major:
        case interfaces_1.SymbolKind.MinorEq:
        case interfaces_1.SymbolKind.MajorEq:
        case interfaces_1.SymbolKind.Equal:
        case interfaces_1.SymbolKind.Different:
        case interfaces_1.ReservedKind.Div:
        case interfaces_1.ReservedKind.Mod:
        case interfaces_1.ReservedKind.And:
        case interfaces_1.ReservedKind.Or:
        case interfaces_1.ReservedKind.Not:
        case interfaces_1.ReservedKind.Neg:
            return true;
        default:
            return false;
    }
}
/**
 * Expression: captura una expresion
 * end_reached: funcion que indica si se llegó al final de este tipo de expresion
 */
function Expression(source, end_reached) {
    // Ubicacion del inicio de la expresion, en caso de que haya algun error
    var column = source.current().column;
    var line = source.current().line;
    /**
     * Dice si un token indica el fin de la expresion a capturar
     */
    var output = [];
    var operators = [];
    while (source.current().kind != interfaces_1.SymbolKind.EOF && !end_reached(source.current().kind)) {
        var ctoken = source.current();
        if (ctoken.kind == interfaces_1.SymbolKind.LeftPar) {
            operators.push({ type: 'parenthesis', name: 'left-par' });
            source.next();
        }
        else if (ctoken.kind == interfaces_1.SymbolKind.RightPar) {
            while (operators.length > 0 && operators[operators.length - 1].name != 'left-par') {
                output.push(operators.pop());
            }
            if (operators[operators.length - 1].name == 'left-par') {
                operators.pop();
                /**
                 * Consumir el right-par
                 */
                source.next();
            }
            else {
                var unexpected = interfaces_1.SymbolKind.LeftPar;
                var expected = ['left-par'];
                var reason = 'mismatched-parenthesis';
                return { error: true, result: { unexpected: unexpected, expected: expected, reason: reason, pos: { column: column, line: line }, where: 'parser' } };
            }
        }
        else if (is_operator(ctoken.kind)) {
            var p1 = precedence[ctoken.name];
            var p2 = function () { return precedence[operators[operators.length - 1].name]; };
            while (operators.length > 0 && p1 <= p2()) {
                var op = operators.pop();
                output.push({ type: 'operator', name: op.name });
            }
            operators.push({ type: 'operator', name: ctoken.name });
            source.next();
        }
        else {
            var value_match = Value(source);
            if (value_match.error == true) {
                return value_match;
            }
            output.push(value_match.result);
        }
    }
    /**
     * No hace falta consumir el token que marca el final porque
     * de eso se encarga la funcion que llamó a ésta (Expression)
     */
    while (operators.length > 0)
        output.push(operators.pop());
    return { error: false, result: output };
}
exports.Expression = Expression;
/**
 * Patron que captura un valor (literal o invocado)
 */
function Value(source) {
    var ctoken = source.current();
    if (ctoken.kind == interfaces_1.OtherKind.Word) {
        if (source.peek().kind == interfaces_1.SymbolKind.LeftPar) {
            var call_match = ModuleCall(source);
            return call_match;
        }
        else {
            var value_match = Variable(source);
            if (value_match.error == true) {
                return value_match;
            }
            else if (value_match.error == false) {
                var result = {
                    type: 'invocation',
                    name: value_match.result.name,
                    is_array: value_match.result.is_array,
                    indexes: value_match.result.indexes
                };
                return { error: false, result: result };
            }
        }
    }
    else if (isLiteralTokenType(ctoken.kind)) {
        var value = void 0;
        if (ctoken.kind == interfaces_1.ReservedKind.Verdadero || ctoken.kind == interfaces_1.ReservedKind.Falso)
            value = ctoken.kind == interfaces_1.ReservedKind.Verdadero;
        else
            value = ctoken.value;
        source.next();
        return { error: false, result: { type: 'literal', value: value } };
    }
    else {
        var unexpected = ctoken.kind;
        var expected = ['expresion'];
        var reason = '@value-expected-expression';
        var column = ctoken.column;
        var line = ctoken.line;
        return { error: true, result: { unexpected: unexpected, expected: expected, reason: reason, pos: { column: column, line: line }, where: 'parser' } };
    }
}
exports.Value = Value;
function isLiteralTokenType(k) {
    var is_num = k == interfaces_1.ValueKind.Integer || k == interfaces_1.ValueKind.Real;
    var is_bool = k == interfaces_1.ReservedKind.Verdadero || k == interfaces_1.ReservedKind.Falso;
    var is_other = k == interfaces_1.ReservedKind.Caracter || k == interfaces_1.ValueKind.String;
    return is_num || is_bool || is_other;
}
/**
 * Captura una lista de argumentos, es decir, una lista de expresiones
 */
function ArgumentList(source) {
    var args = [];
    var exp = Expression(source, function (tk) { return tk == interfaces_1.SymbolKind.Comma || tk == interfaces_1.SymbolKind.RightPar; });
    if (exp.error) {
        return exp;
    }
    else if (exp.error == false) {
        args.push(exp.result);
        if (source.current().kind == interfaces_1.SymbolKind.Comma) {
            source.next();
            var next_args = ArgumentList(source);
            if (next_args.error) {
                return next_args;
            }
            else {
                args = args.concat(next_args.result);
                return { error: false, result: args };
            }
        }
        else {
            return { error: false, result: args };
        }
    }
}
exports.ArgumentList = ArgumentList;
/**
 * Captura una lista de parametros en la declaracion de una funcion o procedimiento
 */
function ParameterList(source) {
    var result = [];
    var parameter_report = Parameter(source);
    if (parameter_report.error) {
        return parameter_report;
    }
    else {
        result.push(parameter_report.result);
        if (source.current().kind == interfaces_1.SymbolKind.Comma) {
            source.next();
            var other_parameters = ParameterList(source);
            if (other_parameters.error) {
                return other_parameters;
            }
            else {
                result = result.concat(other_parameters.result);
                return { error: false, result: result };
            }
        }
        else {
            return { error: false, result: result };
        }
    }
}
exports.ParameterList = ParameterList;
/**
 * Captura un parametro de una funcion o procedimiento
 */
function Parameter(source) {
    var result = { name: '', by_ref: false, type: null, is_array: false, dimensions: [] };
    var type_r = TypeName(source);
    if (type_r.error) {
        return type_r;
    }
    else {
        result.type = type_r.result;
        if (source.current().kind === interfaces_1.ReservedKind.Ref) {
            result.by_ref = true;
            source.next(); // consumir 'ref'
        }
        var name = Word(source);
        if (name.error) {
            return name;
        }
        else {
            result.name = name.result;
        }
        if (source.current().kind === interfaces_1.SymbolKind.LeftBracket) {
            source.next();
            var dimension = ArrayDimension(source);
            if (dimension.error) {
                return dimension;
            }
            else {
                result.is_array = true;
                result.dimensions = dimension.result;
                if (source.current().kind == interfaces_1.SymbolKind.RightBracket) {
                    source.next();
                    return { error: false, result: result };
                }
                else {
                    return UnexpectedTokenReport(source.current(), ['right-bracket'], '@parameter-expected-closing-bracket');
                }
            }
        }
        return { error: false, result: result };
    }
}
exports.Parameter = Parameter;
/**
 * Captura una llamada a una funcion o procedimiento
 */
function ModuleCall(source) {
    var pos = { line: source.current().line, column: source.current().column };
    var name = Word(source);
    if (name.error) {
        return name;
    }
    else if (name.error == false) {
        if (source.current().kind != interfaces_1.SymbolKind.LeftPar) {
            var current = source.current();
            var unexpected = current.kind;
            var expected = ['right-par'];
            var column = current.column;
            var line = current.line;
            return { error: true, result: { unexpected: unexpected, expected: expected, column: column, line: line, where: 'parser', reason: 'syntax-error' } };
        }
        else {
            source.next();
        }
        if (source.current().kind != interfaces_1.SymbolKind.RightPar) {
            var args = ArgumentList(source);
            if (args.error) {
                return args;
            }
            else if (args.error == false) {
                if (source.current().kind == interfaces_1.SymbolKind.RightPar) {
                    source.next();
                    return { error: false, result: { type: 'call', args: args.result, name: name.result, pos: pos } };
                }
                else {
                    var current = source.current();
                    var unexpected = current.kind;
                    var expected = ['right-par'];
                    var column = current.column;
                    var line = current.line;
                    return { error: true, result: { unexpected: unexpected, expected: expected, column: column, line: line, where: 'parser', reason: 'syntax-error' } };
                }
            }
        }
        else {
            source.next();
            return { error: false, result: { type: 'call', args: [], name: name.result, pos: pos } };
        }
    }
}
exports.ModuleCall = ModuleCall;
/**
 * Captura un enunciado de asignacion
 */
function Assignment(source) {
    var pos = { line: source.current().line, column: source.current().column };
    var result = { type: 'assignment', left: null, right: null, pos: pos };
    var left_hand_match = Variable(source);
    if (left_hand_match.error) {
        return left_hand_match;
    }
    else {
        result.left = left_hand_match.result;
        if (source.current().kind !== interfaces_1.SymbolKind.Assignment) {
            var current = source.current();
            var unexpected = current.kind;
            var expected = ['<-'];
            var line = current.line;
            var column = current.column;
            var reason = 'bad-assignment-operator';
            return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
        }
        else {
            source.next();
        }
        var right_hand_match = Expression(source, function (tk) { return tk == interfaces_1.SymbolKind.EOL; });
        if (right_hand_match.error) {
            return right_hand_match;
        }
        else {
            result.right = right_hand_match.result;
            return { error: false, result: result };
        }
    }
}
exports.Assignment = Assignment;
/**
 * Captura un enunciado si
 */
function If(source) {
    var pos = { line: source.current().line, column: source.current().column };
    var result = {
        type: 'if',
        condition: null,
        true_branch: [],
        false_branch: [],
        pos: pos
    };
    if (source.current().kind === interfaces_1.ReservedKind.Si) {
        source.next();
    }
    else {
        var current = source.current();
        var unexpected = current.kind;
        var expected = ['si'];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-si';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    if (source.current().kind === interfaces_1.SymbolKind.LeftPar) {
        source.next();
    }
    else {
        var current = source.current();
        var unexpected = current.kind;
        var expected = ['('];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-par-at-condition';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    var queue = [];
    while (/right\-par|eof|eol/.test(source.current().name) === false) {
        queue.push(source.current());
        source.next();
    }
    var expression_match = Expression(new TokenQueue_js_1.default(queue), function (tk) { return tk == interfaces_1.SymbolKind.RightPar; });
    if (expression_match.error) {
        return expression_match;
    }
    else {
        result.condition = expression_match.result;
    }
    if (source.current().kind === interfaces_1.SymbolKind.RightPar) {
        source.next();
    }
    else {
        var current = source.current();
        var unexpected = current.kind;
        var expected = [')'];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-par-at-condition';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    if (source.current().kind === interfaces_1.ReservedKind.Entonces) {
        source.next();
    }
    else {
        var current = source.current();
        var unexpected = current.kind;
        var expected = ['entonces'];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-entonces';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    skipWhiteSpace(source);
    while (/finsi|sino|eof/.test(source.current().name) === false) {
        var statement_match = AnyStatement(source);
        if (statement_match.error) {
            return statement_match;
        }
        result.true_branch.push(statement_match.result);
        skipWhiteSpace(source);
    }
    if (source.current().kind === interfaces_1.ReservedKind.Sino) {
        source.next();
        skipWhiteSpace(source);
        while (/finsi|eof/.test(source.current().name) === false) {
            var statement_match = AnyStatement(source);
            if (statement_match.error) {
                return statement_match;
            }
            result.false_branch.push(statement_match.result);
            skipWhiteSpace(source);
        }
    }
    if (source.current().kind === interfaces_1.ReservedKind.FinSi) {
        source.next();
    }
    else {
        var current = source.current();
        var unexpected = current.kind;
        var expected = ['finsi'];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-finsi';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    if (source.current().kind === interfaces_1.SymbolKind.EOL) {
        source.next();
    }
    return { error: false, result: result };
}
exports.If = If;
function While(source) {
    var pos = { line: source.current().line, column: source.current().column };
    var result = {
        type: 'while',
        condition: null,
        body: [],
        pos: pos
    };
    if (source.current().kind === interfaces_1.ReservedKind.Mientras) {
        source.next();
    }
    else {
        var current = source.current();
        var unexpected = current.kind;
        var expected = ['mientras'];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-mientras';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    if (source.current().kind === interfaces_1.SymbolKind.LeftPar) {
        source.next();
    }
    else {
        var current = source.current();
        var unexpected = current.kind;
        var expected = ['('];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-par-at-condition';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    var queue = [];
    while (/right\-par|eof|eol/.test(source.current().name) === false) {
        queue.push(source.current());
        source.next();
    }
    var expression_match = Expression(new TokenQueue_js_1.default(queue), function (tk) { return tk == interfaces_1.SymbolKind.RightPar; });
    if (expression_match.error) {
        return expression_match;
    }
    else {
        result.condition = expression_match.result;
    }
    if (source.current().kind === interfaces_1.SymbolKind.RightPar) {
        source.next();
    }
    else {
        var current = source.current();
        var unexpected = current.kind;
        var expected = [')'];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-par-at-condition';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    skipWhiteSpace(source);
    while (/finmientras|eof/.test(source.current().name) === false) {
        var statement_match = AnyStatement(source);
        if (statement_match.error) {
            return statement_match;
        }
        result.body.push(statement_match.result);
        skipWhiteSpace(source);
    }
    if (source.current().kind === interfaces_1.ReservedKind.FinMientras) {
        source.next();
    }
    else {
        var current = source.current();
        var unexpected = current.kind;
        var expected = ['finmientras'];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-finmientras';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    if (source.current().kind === interfaces_1.SymbolKind.EOL) {
        source.next();
    }
    return { error: false, result: result };
}
exports.While = While;
// para i <- 0 hasta 5
//  ...
// finpara
//
// 'para' <expresion> 'hasta' <expresion.entera>
//    [<enunciado>]
// 'finpara'
function For(source) {
    var pos = { line: source.current().line, column: source.current().column };
    var result = {
        type: 'for',
        counter_init: null,
        last_value: null,
        body: [],
        pos: pos
    };
    if (source.current().kind === interfaces_1.ReservedKind.Para) {
        source.next();
    }
    else {
        var current = source.current();
        var unexpected = current.kind;
        var expected = ['para'];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-para';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    var queue = [];
    while (source.current().kind !== interfaces_1.ReservedKind.Hasta) {
        queue.push(source.current());
        source.next();
    }
    var init_statement = Assignment(new TokenQueue_js_1.default(queue));
    if (init_statement.error) {
        return init_statement;
    }
    else {
        result.counter_init = init_statement.result;
        if (source.current().kind === interfaces_1.ReservedKind.Hasta) {
            source.next();
        }
        else {
            var current = source.current();
            var unexpected = current.kind;
            var expected = ['hasta'];
            var line = current.line;
            var column = current.column;
            var reason = 'missing-hasta';
            return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
        }
        var last_val_exp = Expression(source, function (tk) { return tk == interfaces_1.SymbolKind.EOL; });
        if (last_val_exp.error) {
            return last_val_exp;
        }
        else {
            result.last_value = last_val_exp.result;
            skipWhiteSpace(source);
            while (/finpara|eof/.test(source.current().name) === false) {
                var statement_match = AnyStatement(source);
                if (statement_match.error) {
                    return statement_match;
                }
                result.body.push(statement_match.result);
                skipWhiteSpace(source);
            }
            if (source.current().kind === interfaces_1.ReservedKind.FinPara) {
                source.next();
            }
            else {
                var current = source.current();
                var unexpected = current.kind;
                var expected = ['finpara'];
                var line = current.line;
                var column = current.column;
                var reason = 'missing-finpara';
                return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
            }
            skipWhiteSpace(source);
            return { error: false, result: result };
        }
    }
}
exports.For = For;
function Until(source) {
    var pos = { line: source.current().line, column: source.current().column };
    var result = {
        type: 'until',
        condition: null,
        body: [],
        pos: pos
    };
    if (source.current().kind === interfaces_1.ReservedKind.Repetir) {
        source.next();
    }
    else {
        var current = source.current();
        var unexpected = current.kind;
        var expected = ['repetir'];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-repetir';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    skipWhiteSpace(source);
    // TODO: hacer que "hasta que" sea un solo token ("hastaque")
    while (/hasta|que|eof/.test(source.current().name) === false) {
        var statement_match = AnyStatement(source);
        if (statement_match.error) {
            return statement_match;
        }
        else {
            if (statement_match.result !== null) {
                result.body.push(statement_match.result);
            }
            skipWhiteSpace(source);
        }
    }
    if (source.current().kind === interfaces_1.ReservedKind.Hasta) {
        source.next();
    }
    else {
        var current = source.current();
        var unexpected = current.kind;
        var expected = ['hasta'];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-hasta';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    if (source.current().kind === interfaces_1.ReservedKind.Que) {
        source.next();
    }
    else {
        var current = source.current();
        var unexpected = current.kind;
        var expected = ['que'];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-que';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    if (source.current().kind === interfaces_1.SymbolKind.LeftPar) {
        source.next();
    }
    else {
        var current = source.current();
        var unexpected = current.kind;
        var expected = ['('];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-par-at-condition';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    var queue = [];
    while (/right\-par|eof|eol/.test(source.current().name) === false) {
        queue.push(source.current());
        source.next();
    }
    var expression_match = Expression(new TokenQueue_js_1.default(queue), function (tk) { return tk == interfaces_1.SymbolKind.EOL; });
    if (expression_match.error) {
        return expression_match;
    }
    else {
        result.condition = expression_match.result;
        if (source.current().kind === interfaces_1.SymbolKind.RightPar) {
            source.next();
        }
        else {
            var current = source.current();
            var unexpected = current.kind;
            var expected = [')'];
            var line = current.line;
            var column = current.column;
            var reason = 'missing-par-at-condition';
            return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
        }
        if (source.current().kind === interfaces_1.SymbolKind.EOL) {
            source.next();
        }
        return { error: false, result: result };
    }
}
exports.Until = Until;
function Return(source) {
    var pos = { line: source.current().line, column: source.current().column };
    var result = {
        type: 'return',
        expression: null,
        pos: pos
    };
    if (source.current().kind != interfaces_1.ReservedKind.Retornar) {
        var current = source.current();
        var unexpected = current.kind;
        var expected = ['retornar'];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-retornar';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    else {
        source.next(); // consumir 'retornar'
        var exp = Expression(source, function (tk) { return tk == interfaces_1.SymbolKind.EOL; });
        if (exp.error) {
            return exp;
        }
        else {
            result.expression = exp.result;
            return { error: false, result: result };
        }
    }
}
exports.Return = Return;
function AnyStatement(source) {
    switch (source.current().kind) {
        case interfaces_1.OtherKind.Word:
            if (source.peek().kind === interfaces_1.SymbolKind.LeftPar) {
                return ModuleCall(source);
            }
            else {
                return Assignment(source);
            }
        case interfaces_1.ReservedKind.Si:
            return If(source);
        case interfaces_1.ReservedKind.Mientras:
            return While(source);
        case interfaces_1.ReservedKind.Repetir:
            return Until(source);
        case interfaces_1.ReservedKind.Para:
            return For(source);
        case interfaces_1.ReservedKind.Retornar:
            return Return(source);
        default: {
            var current = source.current();
            var reason = 'missing-statement';
            var unexpected = current.kind;
            var expected = ['variable', 'funcion', 'procedimiento', 'si', 'mientras', 'repetir'];
            var line = current.line;
            var column = current.column;
            return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
        }
    }
}
exports.AnyStatement = AnyStatement;
function MainModule(source) {
    var result = {
        type: 'module',
        name: 'main',
        module_type: 'main',
        body: []
    };
    if (source.current().kind === interfaces_1.ReservedKind.Variables) {
        source.next();
    }
    else {
        var current = source.current();
        var unexpected = current.kind;
        var expected = ['variables'];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-variables';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    skipWhiteSpace(source);
    while (/inicio|eof/.test(source.current().name) === false) {
        var var_declaration_match = DeclarationStatement(source);
        if (var_declaration_match.error) {
            return var_declaration_match;
        }
        else {
            result.body.push(var_declaration_match.result);
        }
        skipWhiteSpace(source);
    }
    if (source.current().kind === interfaces_1.ReservedKind.Inicio) {
        source.next();
    }
    else {
        var current = source.current();
        var unexpected = current.kind;
        var expected = ['inicio'];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-inicio';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    skipWhiteSpace(source);
    while (/fin|eof/.test(source.current().name) === false) {
        var statement_match = AnyStatement(source);
        if (statement_match.error) {
            return statement_match;
        }
        else {
            result.body.push(statement_match.result);
        }
        skipWhiteSpace(source);
    }
    if (source.current().kind === interfaces_1.ReservedKind.Fin) {
        source.next();
    }
    else {
        var current = source.current();
        var unexpected = current.kind;
        var expected = ['fin'];
        var line = current.line;
        var column = current.column;
        var reason = 'missing-fin';
        return { error: true, result: { unexpected: unexpected, expected: expected, pos: { line: line, column: column }, reason: reason, where: 'parser' } };
    }
    if (source.current().kind === interfaces_1.SymbolKind.EOL) {
        source.next();
    }
    return { error: false, result: result };
}
exports.MainModule = MainModule;
function FunctionModule(source) {
    // Lectura del encabezado: <tipo> funcion <nombre>(<parametros>)
    var typename = TypeName(source);
    if (typename.error)
        return typename;
    if (source.current().kind != interfaces_1.ReservedKind.Funcion)
        return UnexpectedTokenReport(source.current(), ['funcion'], 'missing-funcion');
    source.next();
    var name = Word(source);
    if (name.error)
        return name;
    if (source.current().kind != interfaces_1.SymbolKind.LeftPar)
        return UnexpectedTokenReport(source.current(), ['('], 'missing-left-par');
    source.next();
    var parameters = ParameterList(source);
    if (parameters.error)
        return parameters;
    /**
     * Ahora hay que crear un DeclarationStatement donde se declaren las variables
     * de los parametros.
     */
    var pos = { line: source.current().line, column: source.current().column };
    var par_declaration = { type: 'declaration', variables: [], pos: pos };
    for (var _i = 0, _a = parameters.result; _i < _a.length; _i++) {
        var par = _a[_i];
        /**
         * Extraer las propiedades del parametro que son necesarias
         * para crear la variable
         */
        var name_1 = par.name, is_array = par.is_array, by_ref = par.by_ref, dimensions = par.dimensions, type = par.type;
        /**
         * Meter los datos de la variable en el arreglo del enunciado de declaracion.
         */
        par_declaration.variables.push({ name: name_1, is_array: is_array, dimensions: dimensions, datatype: type, by_ref: by_ref });
        /**
         * Luego, cuando el programa sea transformado por Declarator.ts, las variables de los
         * parametros seran declaradas.
         */
    }
    if (source.current().kind != interfaces_1.SymbolKind.RightPar)
        return UnexpectedTokenReport(source.current(), [')'], 'missing-right-par');
    source.next();
    // Fin del encabezado
    skipWhiteSpace(source);
    // Leer declaraciones de variables
    var declarations = [];
    while (/inicio|eof/.test(source.current().name) === false) {
        var var_declaration_match = DeclarationStatement(source);
        if (var_declaration_match.error) {
            return var_declaration_match;
        }
        else {
            declarations.push(var_declaration_match.result);
        }
        skipWhiteSpace(source);
    }
    if (source.current().kind != interfaces_1.ReservedKind.Inicio)
        return UnexpectedTokenReport(source.current(), ['inicio'], 'missing-inicio');
    source.next(); // consumir inicio
    skipWhiteSpace(source);
    var statements = [];
    // Leer el resto de los enunciados
    while (/finfuncion|eof/.test(source.current().name) === false) {
        var statement = AnyStatement(source);
        if (statement.error) {
            return statement;
        }
        else {
            statements.push(statement.result);
        }
        skipWhiteSpace(source);
    }
    if (source.current().kind != interfaces_1.ReservedKind.FinFuncion)
        return UnexpectedTokenReport(source.current(), ['finfuncion'], 'missing-finfuncion');
    source.next(); // consumir 'finfuncion'
    var function_body = [par_declaration].concat(declarations, statements);
    var result = {
        type: 'module',
        module_type: 'function',
        name: name.result,
        parameters: parameters.result,
        body: function_body,
        return_type: typename.result
    };
    return { error: false, result: result };
}
exports.FunctionModule = FunctionModule;
function ProcedureModule(source) {
    // Lectura del encabezado: procedimiento <nombre>(<parametros>)
    if (source.current().kind != interfaces_1.ReservedKind.Procedimiento)
        return UnexpectedTokenReport(source.current(), ['procedimiento'], 'missing-procedimiento');
    source.next();
    var name = Word(source);
    if (name.error)
        return name;
    if (source.current().kind != interfaces_1.SymbolKind.LeftPar)
        return UnexpectedTokenReport(source.current(), ['('], 'missing-left-par');
    source.next();
    var parameters = ParameterList(source);
    if (parameters.error)
        return parameters;
    /**
     * Ahora hay que crear un DeclarationStatement donde se declaren las variables
     * de los parametros.
     */
    var pos = { line: source.current().line, column: source.current().column };
    var par_declaration = { type: 'declaration', variables: [], pos: pos };
    for (var _i = 0, _a = parameters.result; _i < _a.length; _i++) {
        var par = _a[_i];
        /**
         * Extraer las propiedades del parametro que son necesarias
         * para crear la variable
         */
        var name_2 = par.name, is_array = par.is_array, by_ref = par.by_ref, dimensions = par.dimensions, type = par.type;
        /**
         * Meter los datos de la variable en el arreglo del enunciado de declaracion.
         */
        par_declaration.variables.push({ name: name_2, is_array: is_array, dimensions: dimensions, datatype: type, by_ref: by_ref });
        /**
         * Luego, cuando el programa sea transformado por Declarator.ts, las variables de los
         * parametros seran declaradas.
         */
    }
    if (source.current().kind != interfaces_1.SymbolKind.RightPar)
        return UnexpectedTokenReport(source.current(), [')'], 'missing-right-par');
    source.next();
    // Fin del encabezado
    skipWhiteSpace(source);
    // Leer declaraciones de variables
    var declarations = [];
    while (/inicio|eof/.test(source.current().name) === false) {
        var var_declaration_match = DeclarationStatement(source);
        if (var_declaration_match.error) {
            return var_declaration_match;
        }
        else {
            declarations.push(var_declaration_match.result);
        }
        skipWhiteSpace(source);
    }
    if (source.current().kind != interfaces_1.ReservedKind.Inicio)
        return UnexpectedTokenReport(source.current(), ['inicio'], 'missing-inicio');
    source.next(); // consumir inicio
    skipWhiteSpace(source);
    var statements = [];
    // Leer el resto de los enunciados
    while (/finprocedimiento|eof/.test(source.current().name) === false) {
        var statement = AnyStatement(source);
        if (statement.error) {
            return statement;
        }
        else {
            statements.push(statement.result);
        }
        skipWhiteSpace(source);
    }
    if (source.current().kind != interfaces_1.ReservedKind.FinProcedimiento)
        return UnexpectedTokenReport(source.current(), ['finprocedimiento'], 'missing-finprocedimiento');
    source.next(); // consumir 'finprocedimiento'
    var function_body = [par_declaration].concat(declarations, statements);
    var result = {
        type: 'module',
        module_type: 'procedure',
        name: name.result,
        parameters: parameters.result,
        body: function_body,
        return_type: 'ninguno'
    };
    return { error: false, result: result };
}
exports.ProcedureModule = ProcedureModule;
function DeclarationStatement(source) {
    var pos = { line: source.current().line, column: source.current().column };
    var result = {
        type: 'declaration',
        variables: [],
        pos: pos
    };
    var type_match = TypeName(source);
    var current_type = null;
    if (type_match.error) {
        return type_match;
    }
    else {
        current_type = type_match.result;
    }
    var variables_match = VariableList(source);
    if (variables_match.error) {
        return variables_match;
    }
    else {
        for (var _i = 0, _a = variables_match.result; _i < _a.length; _i++) {
            var variable = _a[_i];
            var declaration = {
                datatype: current_type,
                name: variable.name,
                is_array: variable.is_array,
                dimensions: variable.dimensions,
                by_ref: false
            };
            result.variables.push(declaration);
        }
    }
    var eol_found = false;
    var comma_found = false;
    switch (source.current().kind) {
        case interfaces_1.SymbolKind.Comma:
            comma_found = true;
            break;
        case interfaces_1.SymbolKind.EOL:
            eol_found = true;
            break;
        default:
            return {
                error: true,
                result: {
                    unexpected: source.current().kind,
                    expected: ['eol', 'comma'],
                    pos: { column: source.current().column, line: source.current().line },
                    reason: '@declaration-unexpected-token',
                    where: 'parser'
                }
            };
    }
    source.next();
    if (comma_found) {
        var next_declaration_match = DeclarationStatement(source);
        if (next_declaration_match.error) {
            return next_declaration_match;
        }
        else {
            result.variables = result.variables.concat(next_declaration_match.result.variables);
            return { error: false, result: result };
        }
    }
    if (eol_found) {
        return { error: false, result: result };
    }
}
exports.DeclarationStatement = DeclarationStatement;
function skipWhiteSpace(source) {
    var current = source.current();
    while (current.kind === interfaces_1.SymbolKind.EOL) {
        current = source.next();
    }
}
exports.skipWhiteSpace = skipWhiteSpace;
function UnexpectedTokenReport(current_token, expected, reason) {
    var result = {
        unexpected: current_token.kind,
        pos: { line: current_token.line, column: current_token.column },
        expected: expected,
        reason: reason,
        where: 'parser'
    };
    return { error: true, result: result };
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TokenTypes_1 = __webpack_require__(9);
var TokenQueue = (function () {
    function TokenQueue(array) {
        this.tokens = array;
        this.total_elements = array.length;
        this.current_index = 0;
        this.eof_reached = false;
        this.checkpoint_set = false;
        this.checkpoints = [];
    }
    TokenQueue.prototype.current = function () {
        if (this.eof_reached) {
            return new TokenTypes_1.EoFToken();
        }
        else {
            return this.tokens[this.current_index];
        }
    };
    TokenQueue.prototype.next = function () {
        if (this.current_index + 1 < this.total_elements)
            ++this.current_index;
        else
            this.eof_reached = true;
        return this.current();
    };
    TokenQueue.prototype.peek = function () {
        if (this.current_index + 1 < this.total_elements)
            return this.tokens[this.current_index + 1];
        else
            return new TokenTypes_1.EoFToken();
    };
    TokenQueue.prototype.set_checkpoint = function () {
        this.checkpoints.push(this.current_index);
        this.checkpoint_set = true;
    };
    TokenQueue.prototype.rewind = function () {
        if (this.checkpoint_set) {
            this.current_index = this.checkpoints.pop();
            if (this.checkpoints.length == 0) {
                this.checkpoint_set = false;
            }
            if (this.eof_reached) {
                this.eof_reached = false;
            }
        }
    };
    return TokenQueue;
}());
exports.default = TokenQueue;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StringMethods_1 = __webpack_require__(11);
var interfaces_1 = __webpack_require__(1);
var EoFToken = (function () {
    function EoFToken(source) {
        this.name = 'eof';
        this.kind = interfaces_1.SymbolKind.EOF;
        if (source) {
            this.column = source._current_column;
            this.line = source._current_line;
        }
    }
    return EoFToken;
}());
exports.EoFToken = EoFToken;
var NumberToken = (function () {
    function NumberToken(source) {
        // todos los numeros son enteros hasta que se 'demuestre' lo contrario
        this.kind = interfaces_1.ValueKind.Integer;
        this.name = 'entero';
        this.text = '';
        this.line = source._current_line;
        this.column = source._current_column;
        this.extract(source);
    }
    NumberToken.prototype.extract = function (source) {
        this.text += source.currentChar();
        source.nextChar();
        var c;
        while (StringMethods_1.isDigit(c = source.currentChar())) {
            this.text += c;
            source.nextChar();
        }
        if (c === '.') {
            this.text += '.';
            source.nextChar();
            if (StringMethods_1.isDigit(source.currentChar())) {
                while (StringMethods_1.isDigit(c = source.currentChar())) {
                    this.text += c;
                    source.nextChar();
                }
                this.kind = interfaces_1.ValueKind.Real;
                this.name = 'real';
            }
            else {
                this.error_found = true;
                this.error_info = {
                    unexpected: source.currentChar(),
                    expected: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
                    pos: { line: source._current_line, column: source._current_column },
                    reason: 'unexpectedCharAtFloat',
                    where: 'lexer'
                };
            }
        }
        if (this.kind === interfaces_1.ValueKind.Integer)
            this.value = parseInt(this.text);
        else if (this.kind === interfaces_1.ValueKind.Real)
            this.value = parseFloat(this.text);
    };
    return NumberToken;
}());
exports.NumberToken = NumberToken;
var SpecialSymbolToken = (function () {
    function SpecialSymbolToken(source) {
        this.line = source._current_line;
        this.column = source._current_column;
        this.extract(source);
    }
    SpecialSymbolToken.isSpecialSymbolChar = function (c) {
        switch (c) {
            case '+':
            case '-':
            case '/':
            case '*':
            case '^':
            case '=':
            case '<':
            case '>':
            case '(':
            case ')':
            case '[':
            case ']':
            case ',':
            case '\n':
                return true;
            default:
                return false;
        }
    };
    SpecialSymbolToken.prototype.extract = function (source) {
        this.text = source.currentChar();
        switch (this.text) {
            case '+':
                this.kind = interfaces_1.SymbolKind.Plus;
                this.name = 'plus';
                break;
            case '-':
                this.kind = interfaces_1.SymbolKind.Minus;
                this.name = 'minus';
                break;
            case '/':
                this.kind = interfaces_1.SymbolKind.Slash;
                this.name = 'slash';
                break;
            case '*':
                this.kind = interfaces_1.SymbolKind.Times;
                this.name = 'times';
                break;
            case '^':
                this.kind = interfaces_1.SymbolKind.Power;
                this.name = 'power';
                break;
            case '<':
                {
                    var peek = source.peekChar();
                    switch (peek) {
                        case '-':
                            this.kind = interfaces_1.SymbolKind.Assignment;
                            this.name = 'assignment';
                            this.text += source.nextChar();
                            break;
                        case '=':
                            this.kind = interfaces_1.SymbolKind.MinorEq;
                            this.name = 'minor-eq';
                            this.text += source.nextChar();
                            break;
                        case '>':
                            this.kind = interfaces_1.SymbolKind.Different;
                            this.name = 'different';
                            this.text += source.nextChar();
                            break;
                        default:
                            this.kind = interfaces_1.SymbolKind.Minor;
                            this.name = 'minor';
                            break;
                    }
                }
                break;
            case '>':
                {
                    var peek = source.peekChar();
                    if (peek === '=') {
                        this.kind = interfaces_1.SymbolKind.MajorEq;
                        this.name = 'major-eq';
                        this.text += source.nextChar();
                    }
                    else {
                        this.kind = interfaces_1.SymbolKind.Major;
                        this.name = 'major';
                    }
                }
                break;
            case '=':
                this.kind = interfaces_1.SymbolKind.Equal;
                this.name = 'equal';
                break;
            case '(':
                this.kind = interfaces_1.SymbolKind.LeftPar;
                this.name = 'left-par';
                break;
            case ')':
                this.kind = interfaces_1.SymbolKind.RightPar;
                this.name = 'right-par';
                break;
            case '[':
                this.kind = interfaces_1.SymbolKind.LeftBracket;
                this.name = 'left-bracket';
                break;
            case ']':
                this.kind = interfaces_1.SymbolKind.RightBracket;
                this.name = 'right-bracket';
                break;
            case ',':
                this.kind = interfaces_1.SymbolKind.Comma;
                this.name = 'comma';
                break;
            case '\n':
                this.kind = interfaces_1.SymbolKind.EOL;
                this.name = 'eol';
                break;
        }
        // consumir el caracer actual
        source.nextChar();
    };
    return SpecialSymbolToken;
}());
exports.SpecialSymbolToken = SpecialSymbolToken;
var StringToken = (function () {
    function StringToken(source) {
        this.name = 'string';
        this.kind = interfaces_1.ValueKind.String;
        this.value = '';
        this.line = source._current_line;
        this.column = source._current_column;
        this.extract(source);
    }
    StringToken.prototype.extract = function (source) {
        // uso nextChar() en lugar de current xq no quiero que la " forme parte
        // de esta cadena
        this.value += source.nextChar();
        source.nextChar();
        var c;
        while ((c = source.currentChar()) !== '"' && c !== '\n') {
            this.value += c;
            source.nextChar();
        }
        if (c === '"')
            this.text = '"' + this.value + '"';
        else {
            this.error_found = true;
            this.error_info = {
                unexpected: '\n',
                expected: ['caracteres', '"'],
                pos: { line: source._current_line, column: source._current_column },
                reason: 'unexpectedCharAtString',
                where: 'lexer'
            };
        }
        // Consumo un caracter para dejar a currentChar() uno delante de la
        // " o del \n
        source.nextChar();
    };
    return StringToken;
}());
exports.StringToken = StringToken;
function isReservedWord(word) {
    switch (word.length) {
        case 2:
            switch (word) {
                case 'si':
                case 'or':
                    return true;
                default:
                    return false;
            }
        case 3:
            switch (word) {
                case 'fin':
                case 'que':
                case 'div':
                case 'and':
                case 'not':
                case 'mod':
                case 'ref':
                case 'neg':
                    return true;
                default:
                    return false;
            }
        case 4:
            switch (word) {
                case 'sino':
                case 'para':
                case 'real':
                    return true;
                default:
                    return false;
            }
        case 5:
            switch (word) {
                case 'finsi':
                case 'hasta':
                case 'hasta':
                case 'falso':
                    return true;
                default:
                    return false;
            }
        case 6:
            switch (word) {
                case 'inicio':
                case 'entero':
                case 'logico':
                    return true;
                default:
                    return false;
            }
        case 7:
            switch (word) {
                case 'finpara':
                case 'repetir':
                case 'funcion':
                    return true;
                default:
                    return false;
            }
        case 8:
            switch (word) {
                case 'entonces':
                case 'mientras':
                case 'caracter':
                case 'retornar':
                    return true;
                default:
                    return false;
            }
        case 9:
            switch (word) {
                case 'variables':
                case 'verdadero':
                    return true;
                default:
                    return false;
            }
        case 10:
            switch (word) {
                case 'finfuncion':
                    return true;
                default:
                    return false;
            }
        case 11:
            switch (word) {
                case 'finmientras':
                    return true;
                default:
                    return false;
            }
        case 13:
            switch (word) {
                case 'procedimiento':
                    return true;
                default:
                    return false;
            }
        case 16:
            switch (word) {
                case 'finprocedimiento':
                    return true;
                default:
                    return false;
            }
        default:
            return false;
    }
}
var WordToken = (function () {
    function WordToken(source) {
        this.kind = interfaces_1.OtherKind.Word;
        this.text = '';
        this.line = source._current_line;
        this.column = source._current_column;
        this.extract(source);
    }
    WordToken.prototype.extract = function (source) {
        //agrega el primer caracter del token
        this.text += source.currentChar();
        source.nextChar();
        var isDigitOrLetter = function (s) { return StringMethods_1.isDigit(s) || StringMethods_1.isLetter(s) || s === '_'; };
        var c;
        while (isDigitOrLetter(c = source.currentChar())) {
            this.text += c;
            source.nextChar();
        }
        if (isReservedWord(this.text.toLowerCase()))
            this.kind = wtk(this.text.toLowerCase());
        this.name = this.text.toLowerCase();
    };
    return WordToken;
}());
exports.WordToken = WordToken;
var UnknownToken = (function () {
    function UnknownToken(source) {
        this.name = 'unknown';
        this.kind = interfaces_1.OtherKind.Unknown;
        this.error_found = true;
        this.error_info = {
            unexpected: source.currentChar(),
            expected: null,
            pos: { line: source._current_line, column: source._current_column },
            reason: 'unknownToken',
            where: 'lexer'
        };
        source.nextChar();
    }
    return UnknownToken;
}());
exports.UnknownToken = UnknownToken;
/**
 * Convierte una palabra reservada en un ReservedKind
 */
function wtk(word) {
    switch (word.length) {
        case 2:
            switch (word) {
                case 'si':
                    return interfaces_1.ReservedKind.Si;
                case 'or':
                    return interfaces_1.ReservedKind.Or;
            }
        case 3:
            switch (word) {
                case 'fin':
                    return interfaces_1.ReservedKind.Fin;
                case 'que':
                    return interfaces_1.ReservedKind.Que;
                case 'div':
                    return interfaces_1.ReservedKind.Div;
                case 'and':
                    return interfaces_1.ReservedKind.And;
                case 'not':
                    return interfaces_1.ReservedKind.Not;
                case 'mod':
                    return interfaces_1.ReservedKind.Mod;
                case 'ref':
                    return interfaces_1.ReservedKind.Ref;
                case 'neg':
                    return interfaces_1.ReservedKind.Neg;
            }
        case 4:
            switch (word) {
                case 'sino':
                    return interfaces_1.ReservedKind.Sino;
                case 'para':
                    return interfaces_1.ReservedKind.Para;
                case 'real':
                    return interfaces_1.ReservedKind.Real;
            }
        case 5:
            switch (word) {
                case 'finsi':
                    return interfaces_1.ReservedKind.FinSi;
                case 'hasta':
                    return interfaces_1.ReservedKind.Hasta;
                case 'falso':
                    return interfaces_1.ReservedKind.Falso;
            }
        case 6:
            switch (word) {
                case 'inicio':
                    return interfaces_1.ReservedKind.Inicio;
                case 'entero':
                    return interfaces_1.ReservedKind.Entero;
                case 'logico':
                    return interfaces_1.ReservedKind.Logico;
            }
        case 7:
            switch (word) {
                case 'finpara':
                    return interfaces_1.ReservedKind.FinPara;
                case 'repetir':
                    return interfaces_1.ReservedKind.Repetir;
                case 'funcion':
                    return interfaces_1.ReservedKind.Funcion;
            }
        case 8:
            switch (word) {
                case 'entonces':
                    return interfaces_1.ReservedKind.Entonces;
                case 'mientras':
                    return interfaces_1.ReservedKind.Mientras;
                case 'caracter':
                    return interfaces_1.ReservedKind.Caracter;
                case 'retornar':
                    return interfaces_1.ReservedKind.Retornar;
            }
        case 9:
            switch (word) {
                case 'variables':
                    return interfaces_1.ReservedKind.Variables;
                case 'verdadero':
                    return interfaces_1.ReservedKind.Verdadero;
            }
        case 10:
            switch (word) {
                case 'finfuncion':
                    return interfaces_1.ReservedKind.FinFuncion;
            }
        case 11:
            switch (word) {
                case 'finmientras':
                    return interfaces_1.ReservedKind.FinMientras;
            }
        case 13:
            switch (word) {
                case 'procedimiento':
                    return interfaces_1.ReservedKind.Procedimiento;
            }
        case 16:
            switch (word) {
                case 'finprocedimiento':
                    return interfaces_1.ReservedKind.FinProcedimiento;
            }
    }
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = __webpack_require__(1);
var helpers_1 = __webpack_require__(3);
function check(p) {
    var errors = [];
    for (var mn in p.modules) {
        var mod = p.modules[mn];
        for (var _i = 0, _a = mod.body; _i < _a.length; _i++) {
            var s = _a[_i];
            var report = check_statement(s);
            if (report.length > 0) {
                errors = errors.concat(report);
            }
        }
    }
    return errors;
}
exports.default = check;
function check_statement(s) {
    switch (s.type) {
        case 'assignment':
            return check_assignment(s);
        case 'call':
            {
                var report = check_call(s);
                return report.error ? report.result : [];
            }
        case 'if':
            return check_if(s);
        case 'while':
        case 'until':
            return check_simple_loop(s);
        case 'for':
            return check_for(s);
        case 'return':
            return check_return(s);
    }
}
function check_simple_loop(l) {
    var errors = [];
    if (!helpers_1.types_are_equal(l.typings.condition, new interfaces_1.Typed.AtomicType('literal', 'logico'))) {
        var error = {
            reason: 'bad-condition',
            where: 'typechecker',
            received: helpers_1.stringify(l.typings.condition),
            pos: l.pos
        };
        errors.push(error);
    }
    for (var _i = 0, _a = l.body; _i < _a.length; _i++) {
        var s = _a[_i];
        var statement_errors = check_statement(s);
        if (statement_errors.length > 0) {
            errors = errors.concat(statement_errors);
        }
    }
    return errors;
}
function check_for(f) {
    var errors = [];
    var init_report = check_assignment(f.counter_init);
    if (init_report.length > 0) {
        errors = errors.concat(init_report);
    }
    if (!helpers_1.types_are_equal(f.counter_init.typings.left, new interfaces_1.Typed.AtomicType('literal', 'entero'))) {
        var error = {
            reason: '@for-bad-counter',
            where: 'typechecker',
            received: helpers_1.stringify(f.counter_init.typings.left),
            pos: f.pos
        };
        errors.push(error);
    }
    if (!helpers_1.types_are_equal(f.typings.init_value, new interfaces_1.Typed.AtomicType('literal', 'entero'))) {
        var error = {
            reason: '@for-bad-init',
            where: 'typechecker',
            received: helpers_1.stringify(f.typings.init_value),
            pos: f.pos
        };
        errors.push(error);
    }
    if (!helpers_1.types_are_equal(f.typings.last_value, new interfaces_1.Typed.AtomicType('literal', 'entero'))) {
        var error = {
            reason: '@for-bad-last',
            where: 'typechecker',
            received: helpers_1.stringify(f.typings.last_value),
            pos: f.pos
        };
        errors.push(error);
    }
    for (var _i = 0, _a = f.body; _i < _a.length; _i++) {
        var s = _a[_i];
        var statement_errors = check_statement(s);
        if (statement_errors.length > 0) {
            errors = errors.concat(statement_errors);
        }
    }
    return errors;
}
function check_return(r) {
    var errors = [];
    if (!helpers_1.types_are_equal(r.typings.actual, r.typings.expected)) {
        var error = {
            reason: 'bad-return',
            where: 'typechecker',
            declared: helpers_1.stringify(r.typings.expected),
            received: helpers_1.stringify(r.typings.actual),
            pos: r.pos
        };
        errors.push(error);
    }
    return errors;
}
function check_if(i) {
    var errors = [];
    if (!helpers_1.types_are_equal(i.typings.condition, new interfaces_1.Typed.AtomicType('literal', 'logico'))) {
        var error = {
            reason: 'bad-condition',
            where: 'typechecker',
            received: helpers_1.stringify(i.typings.condition),
            pos: i.pos
        };
        errors.push(error);
    }
    for (var _i = 0, _a = i.true_branch; _i < _a.length; _i++) {
        var s = _a[_i];
        var statement_errors = check_statement(s);
        if (statement_errors.length > 0) {
            errors = errors.concat(statement_errors);
        }
    }
    for (var _b = 0, _c = i.false_branch; _b < _c.length; _b++) {
        var s = _c[_b];
        var statement_errors = check_statement(s);
        if (statement_errors.length > 0) {
            errors = errors.concat(statement_errors);
        }
    }
    return errors;
}
function check_call(c) {
    /**
     * Para que la llamada no contenga errores:
     *  - Tiene que haber tantos argumentos como parametros
     *  - Sus argumentos no deben contener errores
     *  - Los tipos de sus argumentos y sus parametros deben coincidir
     */
    if (c.name == 'escribir' || c.name == 'escribir_linea' || c.name == 'leer') {
        return check_io(c);
    }
    else {
        var errors = [];
        /**
         * Ver si la cantidad de argumentos coincide con la cantidad
         * de parametros
         */
        if (c.typings.args.length != c.typings.parameters.length) {
            var error = {
                expected: c.typings.parameters.length,
                received: c.typings.args.length,
                name: c.name,
                reason: '@call-wrong-arg-amount',
                where: 'typechecker',
                pos: c.pos
            };
            errors.push(error);
        }
        /**
         * Comparar los tipos de los argumentos con los
         * de los parametros
         */
        var arg_types = c.typings.args.map(function (a, i) { return { index: i, type: a }; });
        for (var _i = 0, arg_types_1 = arg_types; _i < arg_types_1.length; _i++) {
            var arg = arg_types_1[_i];
            /**
             * Revisar que la expresion a asignar sea del mismo tipo
             * que la variable a la cual se asigna, a menos que la
             * expresion sea de tipo entero y la variable de tipo real.
             */
            var param_type = c.typings.parameters[arg.index];
            var param = c.parameters[arg.index];
            var cond_a = param_type.kind == 'atomic' || arg.type.kind == 'atomic';
            var cond_b = param_type.typename == 'real' && arg.type.typename == 'entero';
            if (!(helpers_1.types_are_equal(arg.type, param_type) || (cond_a && cond_b))) {
                var error = {
                    reason: '@call-incompatible-argument',
                    name: c.name,
                    where: 'typechecker',
                    expected: helpers_1.stringify(param_type),
                    received: helpers_1.stringify(arg.type),
                    index: arg.index + 1,
                    pos: c.pos
                };
                errors.push(error);
            }
            /**
             * Si el parametro se toma por referencia hay que revisar que este recibiendo como argumento
             * la invocacion de una variable/arreglo
             */
            if (param.by_ref) {
                if (arg.type.represents != 'invocation') {
                    /**
                     * ERROR: se esta recibiendo un valor literal en un parametro por referencia
                     */
                    var error = {
                        reason: '@call-bad-ref-arg',
                        where: 'typechecker',
                        /**
                         * Tipo del parametro en cuestion
                         */
                        param_expected: helpers_1.stringify(param_type),
                        /**
                         * Nombre del parametro en cuestion
                         */
                        param_name: param.name,
                        /**
                         * Nombre del modulo al que pertenece
                         */
                        module: c.name,
                        /**
                         * Tipo del valor literal recibido como argumento
                         */
                        received: helpers_1.stringify(arg.type),
                        /**
                         * Indice (en la lista de parametros del modulo)
                         */
                        index: arg.index,
                        pos: c.pos
                    };
                    errors.push(error);
                }
            }
        }
        if (errors.length > 0) {
            return { error: true, result: errors };
        }
        else {
            return { error: false, result: c.typings.return };
        }
    }
}
function check_io(c) {
    /**
     * Para las tres funciones (leer, escribir, y escribir_linea) hay
     * que revisar que los argumentos no tengan errores y ademas hay
     * que revisar que esos argumentos puedan reducirse a tipos
     * atomicos o cadenas.
     */
    var errors = [];
    for (var i = 0; i < c.typings.args.length; i++) {
        var type = c.typings.args[i];
        /**
         * condiciones para el siguiente error
         */
        var cond_a = type.kind == 'atomic' && type.typename == 'ninguno';
        var cond_b = type.kind != 'atomic' && !(type instanceof interfaces_1.Typed.StringType);
        if (cond_a || cond_b) {
            var e = {
                index: i,
                reason: 'bad-write-arg',
                received: helpers_1.stringify(type),
                where: 'typechecker',
                name: c.name,
                pos: c.pos
            };
            errors.push(e);
        }
        else if (c.name == 'leer' && type.represents != 'invocation') {
            var e = {
                reason: '@read-bad-arg',
                where: 'typechecker',
                index: i,
                pos: c.pos
            };
            errors.push(e);
        }
    }
    if (errors.length > 0) {
        return { error: true, result: errors };
    }
    else {
        return { error: false, result: new interfaces_1.Typed.AtomicType('literal', 'ninguno') };
    }
}
function check_assignment(a) {
    var errors = [];
    var inv_report = check_invocation(a.left);
    if (inv_report.error) {
        errors = errors.concat(inv_report.result);
    }
    if (inv_report.error == false) {
        if (inv_report.result instanceof interfaces_1.Typed.StringType && a.typings.right instanceof interfaces_1.Typed.StringType) {
            /**
             * Si se esta asignando una cadena a un vector solo hay que
             * revisar que la cadena quepa.
             */
            if (!(inv_report.result.length >= a.typings.right.length)) {
                var error = {
                    vector_length: inv_report.result.length,
                    string_length: a.typings.right.length,
                    name: a.left.name,
                    reason: '@assignment-long-string',
                    type: helpers_1.stringify(inv_report.result),
                    where: 'typechecker',
                    pos: a.pos
                };
                errors.push(error);
            }
        }
        else {
            /**
             * Revisar que la expresion a asignar sea del mismo tipo
             * que la variable a la cual se asigna, a menos que la
             * expresion sea de tipo entero y la variable de tipo real.
             */
            var cond_a = inv_report.result.kind == 'atomic' && a.typings.right.kind == 'atomic';
            var cond_b = inv_report.result.typename == 'real' && a.typings.right.typename == 'entero';
            if (!(helpers_1.types_are_equal(inv_report.result, a.typings.right) || (cond_a && cond_b))) {
                var error = {
                    reason: '@assignment-incompatible-types',
                    where: 'typechecker',
                    expected: helpers_1.stringify(inv_report.result),
                    received: helpers_1.stringify(a.typings.right),
                    pos: a.pos
                };
                errors.push(error);
            }
        }
    }
    return errors;
}
/**
 * check_invocation
 * busca errores en los indices de una invocacion.
 * Si no hay errores devuelve el tipo del valor invocado.
 */
function check_invocation(i) {
    var errors = [];
    var entero = new interfaces_1.Typed.AtomicType('literal', 'entero');
    var j = 0;
    for (var _i = 0, _a = i.typings.indexes; _i < _a.length; _i++) {
        var index_type = _a[_i];
        if (!helpers_1.types_are_equal(index_type, entero)) {
            var error = {
                at: j,
                name: i.name,
                reason: '@invocation-bad-index',
                received: helpers_1.stringify(index_type),
                where: 'typechecker'
            };
            errors.push(error);
        }
        else {
            j++;
        }
    }
    if (errors.length > 0) {
        return { error: true, result: errors };
    }
    else {
        return { error: false, result: i.typings.type };
    }
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isDigit = function (char) { return /\d/.test(char); };
exports.isLetter = function (char) { return /[a-zA-Z]/.test(char); };
exports.isWhiteSpace = function (char) { return /\s/.test(char) && (char !== '\n'); };


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
};

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), q = [], c, i;
    return i = { next: verb("next"), "throw": verb("throw"), "return": verb("return") }, i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { return function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]), next(); }); }; }
    function next() { if (!c && q.length) resume((c = q.shift())[0], c[1]); }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(c[3], e); } }
    function step(r) { r.done ? settle(c[2], r) : r.value[0] === "yield" ? settle(c[2], { value: r.value[1], done: false }) : Promise.resolve(r.value[1]).then(r.value[0] === "delegate" ? delegate : fulfill, reject); }
    function delegate(r) { step(r.done ? r : { value: ["yield", r.value], done: false }); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { c = void 0, f(v), next(); }
};

function __asyncDelegator(o) {
    var i = { next: verb("next"), "throw": verb("throw", function (e) { throw e; }), "return": verb("return", function (v) { return { value: v, done: true }; }) };
    return o = __asyncValues(o), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { return function (v) { return { value: ["delegate", (o[n] || f).call(o, v)], done: false }; }; }
};

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// This is CodeMirror (http://codemirror.net), a code editor
// implemented in JavaScript on top of the browser's DOM.
//
// You can find some technical background for some of the code below
// at http://marijnhaverbeke.nl/blog/#cm-internals .

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.CodeMirror = factory());
}(this, (function () { 'use strict';

// Kludges for bugs and behavior differences that can't be feature
// detected are enabled based on userAgent etc sniffing.
var userAgent = navigator.userAgent
var platform = navigator.platform

var gecko = /gecko\/\d/i.test(userAgent)
var ie_upto10 = /MSIE \d/.test(userAgent)
var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent)
var ie = ie_upto10 || ie_11up
var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : ie_11up[1])
var webkit = /WebKit\//.test(userAgent)
var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent)
var chrome = /Chrome\//.test(userAgent)
var presto = /Opera\//.test(userAgent)
var safari = /Apple Computer/.test(navigator.vendor)
var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent)
var phantom = /PhantomJS/.test(userAgent)

var ios = /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent)
// This is woefully incomplete. Suggestions for alternative methods welcome.
var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent)
var mac = ios || /Mac/.test(platform)
var chromeOS = /\bCrOS\b/.test(userAgent)
var windows = /win/i.test(platform)

var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/)
if (presto_version) { presto_version = Number(presto_version[1]) }
if (presto_version && presto_version >= 15) { presto = false; webkit = true }
// Some browsers use the wrong event properties to signal cmd/ctrl on OS X
var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11))
var captureRightClick = gecko || (ie && ie_version >= 9)

function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

var rmClass = function(node, cls) {
  var current = node.className
  var match = classTest(cls).exec(current)
  if (match) {
    var after = current.slice(match.index + match[0].length)
    node.className = current.slice(0, match.index) + (after ? match[1] + after : "")
  }
}

function removeChildren(e) {
  for (var count = e.childNodes.length; count > 0; --count)
    { e.removeChild(e.firstChild) }
  return e
}

function removeChildrenAndAdd(parent, e) {
  return removeChildren(parent).appendChild(e)
}

function elt(tag, content, className, style) {
  var e = document.createElement(tag)
  if (className) { e.className = className }
  if (style) { e.style.cssText = style }
  if (typeof content == "string") { e.appendChild(document.createTextNode(content)) }
  else if (content) { for (var i = 0; i < content.length; ++i) { e.appendChild(content[i]) } }
  return e
}

var range
if (document.createRange) { range = function(node, start, end, endNode) {
  var r = document.createRange()
  r.setEnd(endNode || node, end)
  r.setStart(node, start)
  return r
} }
else { range = function(node, start, end) {
  var r = document.body.createTextRange()
  try { r.moveToElementText(node.parentNode) }
  catch(e) { return r }
  r.collapse(true)
  r.moveEnd("character", end)
  r.moveStart("character", start)
  return r
} }

function contains(parent, child) {
  if (child.nodeType == 3) // Android browser always returns false when child is a textnode
    { child = child.parentNode }
  if (parent.contains)
    { return parent.contains(child) }
  do {
    if (child.nodeType == 11) { child = child.host }
    if (child == parent) { return true }
  } while (child = child.parentNode)
}

function activeElt() {
  // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
  // IE < 10 will throw when accessed while the page is loading or in an iframe.
  // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
  var activeElement
  try {
    activeElement = document.activeElement
  } catch(e) {
    activeElement = document.body || null
  }
  while (activeElement && activeElement.root && activeElement.root.activeElement)
    { activeElement = activeElement.root.activeElement }
  return activeElement
}

function addClass(node, cls) {
  var current = node.className
  if (!classTest(cls).test(current)) { node.className += (current ? " " : "") + cls }
}
function joinClasses(a, b) {
  var as = a.split(" ")
  for (var i = 0; i < as.length; i++)
    { if (as[i] && !classTest(as[i]).test(b)) { b += " " + as[i] } }
  return b
}

var selectInput = function(node) { node.select() }
if (ios) // Mobile Safari apparently has a bug where select() is broken.
  { selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length } }
else if (ie) // Suppress mysterious IE10 errors
  { selectInput = function(node) { try { node.select() } catch(_e) {} } }

function bind(f) {
  var args = Array.prototype.slice.call(arguments, 1)
  return function(){return f.apply(null, args)}
}

function copyObj(obj, target, overwrite) {
  if (!target) { target = {} }
  for (var prop in obj)
    { if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
      { target[prop] = obj[prop] } }
  return target
}

// Counts the column offset in a string, taking tabs into account.
// Used mostly to find indentation.
function countColumn(string, end, tabSize, startIndex, startValue) {
  if (end == null) {
    end = string.search(/[^\s\u00a0]/)
    if (end == -1) { end = string.length }
  }
  for (var i = startIndex || 0, n = startValue || 0;;) {
    var nextTab = string.indexOf("\t", i)
    if (nextTab < 0 || nextTab >= end)
      { return n + (end - i) }
    n += nextTab - i
    n += tabSize - (n % tabSize)
    i = nextTab + 1
  }
}

function Delayed() {this.id = null}
Delayed.prototype.set = function(ms, f) {
  clearTimeout(this.id)
  this.id = setTimeout(f, ms)
}

function indexOf(array, elt) {
  for (var i = 0; i < array.length; ++i)
    { if (array[i] == elt) { return i } }
  return -1
}

// Number of pixels added to scroller and sizer to hide scrollbar
var scrollerGap = 30

// Returned or thrown by various protocols to signal 'I'm not
// handling this'.
var Pass = {toString: function(){return "CodeMirror.Pass"}}

// Reused option objects for setSelection & friends
var sel_dontScroll = {scroll: false};
var sel_mouse = {origin: "*mouse"};
var sel_move = {origin: "+move"};
// The inverse of countColumn -- find the offset that corresponds to
// a particular column.
function findColumn(string, goal, tabSize) {
  for (var pos = 0, col = 0;;) {
    var nextTab = string.indexOf("\t", pos)
    if (nextTab == -1) { nextTab = string.length }
    var skipped = nextTab - pos
    if (nextTab == string.length || col + skipped >= goal)
      { return pos + Math.min(skipped, goal - col) }
    col += nextTab - pos
    col += tabSize - (col % tabSize)
    pos = nextTab + 1
    if (col >= goal) { return pos }
  }
}

var spaceStrs = [""]
function spaceStr(n) {
  while (spaceStrs.length <= n)
    { spaceStrs.push(lst(spaceStrs) + " ") }
  return spaceStrs[n]
}

function lst(arr) { return arr[arr.length-1] }

function map(array, f) {
  var out = []
  for (var i = 0; i < array.length; i++) { out[i] = f(array[i], i) }
  return out
}

function insertSorted(array, value, score) {
  var pos = 0, priority = score(value)
  while (pos < array.length && score(array[pos]) <= priority) { pos++ }
  array.splice(pos, 0, value)
}

function nothing() {}

function createObj(base, props) {
  var inst
  if (Object.create) {
    inst = Object.create(base)
  } else {
    nothing.prototype = base
    inst = new nothing()
  }
  if (props) { copyObj(props, inst) }
  return inst
}

var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
function isWordCharBasic(ch) {
  return /\w/.test(ch) || ch > "\x80" &&
    (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
}
function isWordChar(ch, helper) {
  if (!helper) { return isWordCharBasic(ch) }
  if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) { return true }
  return helper.test(ch)
}

function isEmpty(obj) {
  for (var n in obj) { if (obj.hasOwnProperty(n) && obj[n]) { return false } }
  return true
}

// Extending unicode characters. A series of a non-extending char +
// any number of extending chars is treated as a single unit as far
// as editing and measuring is concerned. This is not fully correct,
// since some scripts/fonts/browsers also treat other configurations
// of code points as a group.
var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }

// The display handles the DOM integration, both for input reading
// and content drawing. It holds references to DOM nodes and
// display-related state.

function Display(place, doc, input) {
  var d = this
  this.input = input

  // Covers bottom-right square when both scrollbars are present.
  d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler")
  d.scrollbarFiller.setAttribute("cm-not-content", "true")
  // Covers bottom of gutter when coverGutterNextToScrollbar is on
  // and h scrollbar is present.
  d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler")
  d.gutterFiller.setAttribute("cm-not-content", "true")
  // Will contain the actual code, positioned to cover the viewport.
  d.lineDiv = elt("div", null, "CodeMirror-code")
  // Elements are added to these to represent selection and cursors.
  d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1")
  d.cursorDiv = elt("div", null, "CodeMirror-cursors")
  // A visibility: hidden element used to find the size of things.
  d.measure = elt("div", null, "CodeMirror-measure")
  // When lines outside of the viewport are measured, they are drawn in this.
  d.lineMeasure = elt("div", null, "CodeMirror-measure")
  // Wraps everything that needs to exist inside the vertically-padded coordinate system
  d.lineSpace = elt("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
                    null, "position: relative; outline: none")
  // Moved around its parent to cover visible view.
  d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative")
  // Set to the height of the document, allowing scrolling.
  d.sizer = elt("div", [d.mover], "CodeMirror-sizer")
  d.sizerWidth = null
  // Behavior of elts with overflow: auto and padding is
  // inconsistent across browsers. This is used to ensure the
  // scrollable area is big enough.
  d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;")
  // Will contain the gutters, if any.
  d.gutters = elt("div", null, "CodeMirror-gutters")
  d.lineGutter = null
  // Actual scrollable element.
  d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll")
  d.scroller.setAttribute("tabIndex", "-1")
  // The element in which the editor lives.
  d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror")

  // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
  if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0 }
  if (!webkit && !(gecko && mobile)) { d.scroller.draggable = true }

  if (place) {
    if (place.appendChild) { place.appendChild(d.wrapper) }
    else { place(d.wrapper) }
  }

  // Current rendered range (may be bigger than the view window).
  d.viewFrom = d.viewTo = doc.first
  d.reportedViewFrom = d.reportedViewTo = doc.first
  // Information about the rendered lines.
  d.view = []
  d.renderedView = null
  // Holds info about a single rendered line when it was rendered
  // for measurement, while not in view.
  d.externalMeasured = null
  // Empty space (in pixels) above the view
  d.viewOffset = 0
  d.lastWrapHeight = d.lastWrapWidth = 0
  d.updateLineNumbers = null

  d.nativeBarWidth = d.barHeight = d.barWidth = 0
  d.scrollbarsClipped = false

  // Used to only resize the line number gutter when necessary (when
  // the amount of lines crosses a boundary that makes its width change)
  d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null
  // Set to true when a non-horizontal-scrolling line widget is
  // added. As an optimization, line widget aligning is skipped when
  // this is false.
  d.alignWidgets = false

  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null

  // Tracks the maximum line length so that the horizontal scrollbar
  // can be kept static when scrolling.
  d.maxLine = null
  d.maxLineLength = 0
  d.maxLineChanged = false

  // Used for measuring wheel scrolling granularity
  d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null

  // True when shift is held down.
  d.shift = false

  // Used to track whether anything happened since the context menu
  // was opened.
  d.selForContextMenu = null

  d.activeTouch = null

  input.init(d)
}

// Find the line object corresponding to the given line number.
function getLine(doc, n) {
  n -= doc.first
  if (n < 0 || n >= doc.size) { throw new Error("There is no line " + (n + doc.first) + " in the document.") }
  var chunk = doc
  while (!chunk.lines) {
    for (var i = 0;; ++i) {
      var child = chunk.children[i], sz = child.chunkSize()
      if (n < sz) { chunk = child; break }
      n -= sz
    }
  }
  return chunk.lines[n]
}

// Get the part of a document between two positions, as an array of
// strings.
function getBetween(doc, start, end) {
  var out = [], n = start.line
  doc.iter(start.line, end.line + 1, function (line) {
    var text = line.text
    if (n == end.line) { text = text.slice(0, end.ch) }
    if (n == start.line) { text = text.slice(start.ch) }
    out.push(text)
    ++n
  })
  return out
}
// Get the lines between from and to, as array of strings.
function getLines(doc, from, to) {
  var out = []
  doc.iter(from, to, function (line) { out.push(line.text) }) // iter aborts when callback returns truthy value
  return out
}

// Update the height of a line, propagating the height change
// upwards to parent nodes.
function updateLineHeight(line, height) {
  var diff = height - line.height
  if (diff) { for (var n = line; n; n = n.parent) { n.height += diff } }
}

// Given a line object, find its line number by walking up through
// its parent links.
function lineNo(line) {
  if (line.parent == null) { return null }
  var cur = line.parent, no = indexOf(cur.lines, line)
  for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
    for (var i = 0;; ++i) {
      if (chunk.children[i] == cur) { break }
      no += chunk.children[i].chunkSize()
    }
  }
  return no + cur.first
}

// Find the line at the given vertical position, using the height
// information in the document tree.
function lineAtHeight(chunk, h) {
  var n = chunk.first
  outer: do {
    for (var i$1 = 0; i$1 < chunk.children.length; ++i$1) {
      var child = chunk.children[i$1], ch = child.height
      if (h < ch) { chunk = child; continue outer }
      h -= ch
      n += child.chunkSize()
    }
    return n
  } while (!chunk.lines)
  var i = 0
  for (; i < chunk.lines.length; ++i) {
    var line = chunk.lines[i], lh = line.height
    if (h < lh) { break }
    h -= lh
  }
  return n + i
}

function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}

function lineNumberFor(options, i) {
  return String(options.lineNumberFormatter(i + options.firstLineNumber))
}

// A Pos instance represents a position within the text.
function Pos (line, ch) {
  if (!(this instanceof Pos)) { return new Pos(line, ch) }
  this.line = line; this.ch = ch
}

// Compare two positions, return 0 if they are the same, a negative
// number when a is less, and a positive number otherwise.
function cmp(a, b) { return a.line - b.line || a.ch - b.ch }

function copyPos(x) {return Pos(x.line, x.ch)}
function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
function minPos(a, b) { return cmp(a, b) < 0 ? a : b }

// Most of the external API clips given positions to make sure they
// actually exist within the document.
function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
function clipPos(doc, pos) {
  if (pos.line < doc.first) { return Pos(doc.first, 0) }
  var last = doc.first + doc.size - 1
  if (pos.line > last) { return Pos(last, getLine(doc, last).text.length) }
  return clipToLen(pos, getLine(doc, pos.line).text.length)
}
function clipToLen(pos, linelen) {
  var ch = pos.ch
  if (ch == null || ch > linelen) { return Pos(pos.line, linelen) }
  else if (ch < 0) { return Pos(pos.line, 0) }
  else { return pos }
}
function clipPosArray(doc, array) {
  var out = []
  for (var i = 0; i < array.length; i++) { out[i] = clipPos(doc, array[i]) }
  return out
}

// Optimize some code when these features are not used.
var sawReadOnlySpans = false;
var sawCollapsedSpans = false;
function seeReadOnlySpans() {
  sawReadOnlySpans = true
}

function seeCollapsedSpans() {
  sawCollapsedSpans = true
}

// TEXTMARKER SPANS

function MarkedSpan(marker, from, to) {
  this.marker = marker
  this.from = from; this.to = to
}

// Search an array of spans for a span matching the given marker.
function getMarkedSpanFor(spans, marker) {
  if (spans) { for (var i = 0; i < spans.length; ++i) {
    var span = spans[i]
    if (span.marker == marker) { return span }
  } }
}
// Remove a span from an array, returning undefined if no spans are
// left (we don't store arrays for lines without spans).
function removeMarkedSpan(spans, span) {
  var r
  for (var i = 0; i < spans.length; ++i)
    { if (spans[i] != span) { (r || (r = [])).push(spans[i]) } }
  return r
}
// Add a span to a line.
function addMarkedSpan(line, span) {
  line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span]
  span.marker.attachLine(line)
}

// Used for the algorithm that adjusts markers for a change in the
// document. These functions cut an array of spans at a given
// character position, returning an array of remaining chunks (or
// undefined if nothing remains).
function markedSpansBefore(old, startCh, isInsert) {
  var nw
  if (old) { for (var i = 0; i < old.length; ++i) {
    var span = old[i], marker = span.marker
    var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh)
    if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh)
      ;(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to))
    }
  } }
  return nw
}
function markedSpansAfter(old, endCh, isInsert) {
  var nw
  if (old) { for (var i = 0; i < old.length; ++i) {
    var span = old[i], marker = span.marker
    var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh)
    if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh)
      ;(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
                                            span.to == null ? null : span.to - endCh))
    }
  } }
  return nw
}

// Given a change object, compute the new set of marker spans that
// cover the line in which the change took place. Removes spans
// entirely within the change, reconnects spans belonging to the
// same marker that appear on both sides of the change, and cuts off
// spans partially within the change. Returns an array of span
// arrays with one element for each line in (after) the change.
function stretchSpansOverChange(doc, change) {
  if (change.full) { return null }
  var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans
  var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans
  if (!oldFirst && !oldLast) { return null }

  var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0
  // Get the spans that 'stick out' on both sides
  var first = markedSpansBefore(oldFirst, startCh, isInsert)
  var last = markedSpansAfter(oldLast, endCh, isInsert)

  // Next, merge those two ends
  var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0)
  if (first) {
    // Fix up .to properties of first
    for (var i = 0; i < first.length; ++i) {
      var span = first[i]
      if (span.to == null) {
        var found = getMarkedSpanFor(last, span.marker)
        if (!found) { span.to = startCh }
        else if (sameLine) { span.to = found.to == null ? null : found.to + offset }
      }
    }
  }
  if (last) {
    // Fix up .from in last (or move them into first in case of sameLine)
    for (var i$1 = 0; i$1 < last.length; ++i$1) {
      var span$1 = last[i$1]
      if (span$1.to != null) { span$1.to += offset }
      if (span$1.from == null) {
        var found$1 = getMarkedSpanFor(first, span$1.marker)
        if (!found$1) {
          span$1.from = offset
          if (sameLine) { (first || (first = [])).push(span$1) }
        }
      } else {
        span$1.from += offset
        if (sameLine) { (first || (first = [])).push(span$1) }
      }
    }
  }
  // Make sure we didn't create any zero-length spans
  if (first) { first = clearEmptySpans(first) }
  if (last && last != first) { last = clearEmptySpans(last) }

  var newMarkers = [first]
  if (!sameLine) {
    // Fill gap with whole-line-spans
    var gap = change.text.length - 2, gapMarkers
    if (gap > 0 && first)
      { for (var i$2 = 0; i$2 < first.length; ++i$2)
        { if (first[i$2].to == null)
          { (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$2].marker, null, null)) } } }
    for (var i$3 = 0; i$3 < gap; ++i$3)
      { newMarkers.push(gapMarkers) }
    newMarkers.push(last)
  }
  return newMarkers
}

// Remove spans that are empty and don't have a clearWhenEmpty
// option of false.
function clearEmptySpans(spans) {
  for (var i = 0; i < spans.length; ++i) {
    var span = spans[i]
    if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
      { spans.splice(i--, 1) }
  }
  if (!spans.length) { return null }
  return spans
}

// Used to 'clip' out readOnly ranges when making a change.
function removeReadOnlyRanges(doc, from, to) {
  var markers = null
  doc.iter(from.line, to.line + 1, function (line) {
    if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
      var mark = line.markedSpans[i].marker
      if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
        { (markers || (markers = [])).push(mark) }
    } }
  })
  if (!markers) { return null }
  var parts = [{from: from, to: to}]
  for (var i = 0; i < markers.length; ++i) {
    var mk = markers[i], m = mk.find(0)
    for (var j = 0; j < parts.length; ++j) {
      var p = parts[j]
      if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) { continue }
      var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to)
      if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
        { newParts.push({from: p.from, to: m.from}) }
      if (dto > 0 || !mk.inclusiveRight && !dto)
        { newParts.push({from: m.to, to: p.to}) }
      parts.splice.apply(parts, newParts)
      j += newParts.length - 1
    }
  }
  return parts
}

// Connect or disconnect spans from a line.
function detachMarkedSpans(line) {
  var spans = line.markedSpans
  if (!spans) { return }
  for (var i = 0; i < spans.length; ++i)
    { spans[i].marker.detachLine(line) }
  line.markedSpans = null
}
function attachMarkedSpans(line, spans) {
  if (!spans) { return }
  for (var i = 0; i < spans.length; ++i)
    { spans[i].marker.attachLine(line) }
  line.markedSpans = spans
}

// Helpers used when computing which overlapping collapsed span
// counts as the larger one.
function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0 }
function extraRight(marker) { return marker.inclusiveRight ? 1 : 0 }

// Returns a number indicating which of two overlapping collapsed
// spans is larger (and thus includes the other). Falls back to
// comparing ids when the spans cover exactly the same range.
function compareCollapsedMarkers(a, b) {
  var lenDiff = a.lines.length - b.lines.length
  if (lenDiff != 0) { return lenDiff }
  var aPos = a.find(), bPos = b.find()
  var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b)
  if (fromCmp) { return -fromCmp }
  var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b)
  if (toCmp) { return toCmp }
  return b.id - a.id
}

// Find out whether a line ends or starts in a collapsed span. If
// so, return the marker for that span.
function collapsedSpanAtSide(line, start) {
  var sps = sawCollapsedSpans && line.markedSpans, found
  if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
    sp = sps[i]
    if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
        (!found || compareCollapsedMarkers(found, sp.marker) < 0))
      { found = sp.marker }
  } }
  return found
}
function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true) }
function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false) }

// Test whether there exists a collapsed span that partially
// overlaps (covers the start or end, but not both) of a new span.
// Such overlap is not allowed.
function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
  var line = getLine(doc, lineNo)
  var sps = sawCollapsedSpans && line.markedSpans
  if (sps) { for (var i = 0; i < sps.length; ++i) {
    var sp = sps[i]
    if (!sp.marker.collapsed) { continue }
    var found = sp.marker.find(0)
    var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker)
    var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker)
    if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) { continue }
    if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
        fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
      { return true }
  } }
}

// A visual line is a line as drawn on the screen. Folding, for
// example, can cause multiple logical lines to appear on the same
// visual line. This finds the start of the visual line that the
// given line is part of (usually that is the line itself).
function visualLine(line) {
  var merged
  while (merged = collapsedSpanAtStart(line))
    { line = merged.find(-1, true).line }
  return line
}

// Returns an array of logical lines that continue the visual line
// started by the argument, or undefined if there are no such lines.
function visualLineContinued(line) {
  var merged, lines
  while (merged = collapsedSpanAtEnd(line)) {
    line = merged.find(1, true).line
    ;(lines || (lines = [])).push(line)
  }
  return lines
}

// Get the line number of the start of the visual line that the
// given line number is part of.
function visualLineNo(doc, lineN) {
  var line = getLine(doc, lineN), vis = visualLine(line)
  if (line == vis) { return lineN }
  return lineNo(vis)
}

// Get the line number of the start of the next visual line after
// the given line.
function visualLineEndNo(doc, lineN) {
  if (lineN > doc.lastLine()) { return lineN }
  var line = getLine(doc, lineN), merged
  if (!lineIsHidden(doc, line)) { return lineN }
  while (merged = collapsedSpanAtEnd(line))
    { line = merged.find(1, true).line }
  return lineNo(line) + 1
}

// Compute whether a line is hidden. Lines count as hidden when they
// are part of a visual line that starts with another line, or when
// they are entirely covered by collapsed, non-widget span.
function lineIsHidden(doc, line) {
  var sps = sawCollapsedSpans && line.markedSpans
  if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
    sp = sps[i]
    if (!sp.marker.collapsed) { continue }
    if (sp.from == null) { return true }
    if (sp.marker.widgetNode) { continue }
    if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
      { return true }
  } }
}
function lineIsHiddenInner(doc, line, span) {
  if (span.to == null) {
    var end = span.marker.find(1, true)
    return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker))
  }
  if (span.marker.inclusiveRight && span.to == line.text.length)
    { return true }
  for (var sp = (void 0), i = 0; i < line.markedSpans.length; ++i) {
    sp = line.markedSpans[i]
    if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
        (sp.to == null || sp.to != span.from) &&
        (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
        lineIsHiddenInner(doc, line, sp)) { return true }
  }
}

// Find the height above the given line.
function heightAtLine(lineObj) {
  lineObj = visualLine(lineObj)

  var h = 0, chunk = lineObj.parent
  for (var i = 0; i < chunk.lines.length; ++i) {
    var line = chunk.lines[i]
    if (line == lineObj) { break }
    else { h += line.height }
  }
  for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
    for (var i$1 = 0; i$1 < p.children.length; ++i$1) {
      var cur = p.children[i$1]
      if (cur == chunk) { break }
      else { h += cur.height }
    }
  }
  return h
}

// Compute the character length of a line, taking into account
// collapsed ranges (see markText) that might hide parts, and join
// other lines onto it.
function lineLength(line) {
  if (line.height == 0) { return 0 }
  var len = line.text.length, merged, cur = line
  while (merged = collapsedSpanAtStart(cur)) {
    var found = merged.find(0, true)
    cur = found.from.line
    len += found.from.ch - found.to.ch
  }
  cur = line
  while (merged = collapsedSpanAtEnd(cur)) {
    var found$1 = merged.find(0, true)
    len -= cur.text.length - found$1.from.ch
    cur = found$1.to.line
    len += cur.text.length - found$1.to.ch
  }
  return len
}

// Find the longest line in the document.
function findMaxLine(cm) {
  var d = cm.display, doc = cm.doc
  d.maxLine = getLine(doc, doc.first)
  d.maxLineLength = lineLength(d.maxLine)
  d.maxLineChanged = true
  doc.iter(function (line) {
    var len = lineLength(line)
    if (len > d.maxLineLength) {
      d.maxLineLength = len
      d.maxLine = line
    }
  })
}

// BIDI HELPERS

function iterateBidiSections(order, from, to, f) {
  if (!order) { return f(from, to, "ltr") }
  var found = false
  for (var i = 0; i < order.length; ++i) {
    var part = order[i]
    if (part.from < to && part.to > from || from == to && part.to == from) {
      f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr")
      found = true
    }
  }
  if (!found) { f(from, to, "ltr") }
}

function bidiLeft(part) { return part.level % 2 ? part.to : part.from }
function bidiRight(part) { return part.level % 2 ? part.from : part.to }

function lineLeft(line) { var order = getOrder(line); return order ? bidiLeft(order[0]) : 0 }
function lineRight(line) {
  var order = getOrder(line)
  if (!order) { return line.text.length }
  return bidiRight(lst(order))
}

function compareBidiLevel(order, a, b) {
  var linedir = order[0].level
  if (a == linedir) { return true }
  if (b == linedir) { return false }
  return a < b
}

var bidiOther = null
function getBidiPartAt(order, pos) {
  var found
  bidiOther = null
  for (var i = 0; i < order.length; ++i) {
    var cur = order[i]
    if (cur.from < pos && cur.to > pos) { return i }
    if ((cur.from == pos || cur.to == pos)) {
      if (found == null) {
        found = i
      } else if (compareBidiLevel(order, cur.level, order[found].level)) {
        if (cur.from != cur.to) { bidiOther = found }
        return i
      } else {
        if (cur.from != cur.to) { bidiOther = i }
        return found
      }
    }
  }
  return found
}

function moveInLine(line, pos, dir, byUnit) {
  if (!byUnit) { return pos + dir }
  do { pos += dir }
  while (pos > 0 && isExtendingChar(line.text.charAt(pos)))
  return pos
}

// This is needed in order to move 'visually' through bi-directional
// text -- i.e., pressing left should make the cursor go left, even
// when in RTL text. The tricky part is the 'jumps', where RTL and
// LTR text touch each other. This often requires the cursor offset
// to move more than one unit, in order to visually move one unit.
function moveVisually(line, start, dir, byUnit) {
  var bidi = getOrder(line)
  if (!bidi) { return moveLogically(line, start, dir, byUnit) }
  var pos = getBidiPartAt(bidi, start), part = bidi[pos]
  var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit)

  for (;;) {
    if (target > part.from && target < part.to) { return target }
    if (target == part.from || target == part.to) {
      if (getBidiPartAt(bidi, target) == pos) { return target }
      part = bidi[pos += dir]
      return (dir > 0) == part.level % 2 ? part.to : part.from
    } else {
      part = bidi[pos += dir]
      if (!part) { return null }
      if ((dir > 0) == part.level % 2)
        { target = moveInLine(line, part.to, -1, byUnit) }
      else
        { target = moveInLine(line, part.from, 1, byUnit) }
    }
  }
}

function moveLogically(line, start, dir, byUnit) {
  var target = start + dir
  if (byUnit) { while (target > 0 && isExtendingChar(line.text.charAt(target))) { target += dir } }
  return target < 0 || target > line.text.length ? null : target
}

// Bidirectional ordering algorithm
// See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
// that this (partially) implements.

// One-char codes used for character types:
// L (L):   Left-to-Right
// R (R):   Right-to-Left
// r (AL):  Right-to-Left Arabic
// 1 (EN):  European Number
// + (ES):  European Number Separator
// % (ET):  European Number Terminator
// n (AN):  Arabic Number
// , (CS):  Common Number Separator
// m (NSM): Non-Spacing Mark
// b (BN):  Boundary Neutral
// s (B):   Paragraph Separator
// t (S):   Segment Separator
// w (WS):  Whitespace
// N (ON):  Other Neutrals

// Returns null if characters are ordered as they appear
// (left-to-right), or an array of sections ({from, to, level}
// objects) in the order in which they occur visually.
var bidiOrdering = (function() {
  // Character types for codepoints 0 to 0xff
  var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN"
  // Character types for codepoints 0x600 to 0x6f9
  var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111"
  function charType(code) {
    if (code <= 0xf7) { return lowTypes.charAt(code) }
    else if (0x590 <= code && code <= 0x5f4) { return "R" }
    else if (0x600 <= code && code <= 0x6f9) { return arabicTypes.charAt(code - 0x600) }
    else if (0x6ee <= code && code <= 0x8ac) { return "r" }
    else if (0x2000 <= code && code <= 0x200b) { return "w" }
    else if (code == 0x200c) { return "b" }
    else { return "L" }
  }

  var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/
  var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/
  // Browsers seem to always treat the boundaries of block elements as being L.
  var outerType = "L"

  function BidiSpan(level, from, to) {
    this.level = level
    this.from = from; this.to = to
  }

  return function(str) {
    if (!bidiRE.test(str)) { return false }
    var len = str.length, types = []
    for (var i = 0; i < len; ++i)
      { types.push(charType(str.charCodeAt(i))) }

    // W1. Examine each non-spacing mark (NSM) in the level run, and
    // change the type of the NSM to the type of the previous
    // character. If the NSM is at the start of the level run, it will
    // get the type of sor.
    for (var i$1 = 0, prev = outerType; i$1 < len; ++i$1) {
      var type = types[i$1]
      if (type == "m") { types[i$1] = prev }
      else { prev = type }
    }

    // W2. Search backwards from each instance of a European number
    // until the first strong type (R, L, AL, or sor) is found. If an
    // AL is found, change the type of the European number to Arabic
    // number.
    // W3. Change all ALs to R.
    for (var i$2 = 0, cur = outerType; i$2 < len; ++i$2) {
      var type$1 = types[i$2]
      if (type$1 == "1" && cur == "r") { types[i$2] = "n" }
      else if (isStrong.test(type$1)) { cur = type$1; if (type$1 == "r") { types[i$2] = "R" } }
    }

    // W4. A single European separator between two European numbers
    // changes to a European number. A single common separator between
    // two numbers of the same type changes to that type.
    for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
      var type$2 = types[i$3]
      if (type$2 == "+" && prev$1 == "1" && types[i$3+1] == "1") { types[i$3] = "1" }
      else if (type$2 == "," && prev$1 == types[i$3+1] &&
               (prev$1 == "1" || prev$1 == "n")) { types[i$3] = prev$1 }
      prev$1 = type$2
    }

    // W5. A sequence of European terminators adjacent to European
    // numbers changes to all European numbers.
    // W6. Otherwise, separators and terminators change to Other
    // Neutral.
    for (var i$4 = 0; i$4 < len; ++i$4) {
      var type$3 = types[i$4]
      if (type$3 == ",") { types[i$4] = "N" }
      else if (type$3 == "%") {
        var end = (void 0)
        for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}
        var replace = (i$4 && types[i$4-1] == "!") || (end < len && types[end] == "1") ? "1" : "N"
        for (var j = i$4; j < end; ++j) { types[j] = replace }
        i$4 = end - 1
      }
    }

    // W7. Search backwards from each instance of a European number
    // until the first strong type (R, L, or sor) is found. If an L is
    // found, then change the type of the European number to L.
    for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
      var type$4 = types[i$5]
      if (cur$1 == "L" && type$4 == "1") { types[i$5] = "L" }
      else if (isStrong.test(type$4)) { cur$1 = type$4 }
    }

    // N1. A sequence of neutrals takes the direction of the
    // surrounding strong text if the text on both sides has the same
    // direction. European and Arabic numbers act as if they were R in
    // terms of their influence on neutrals. Start-of-level-run (sor)
    // and end-of-level-run (eor) are used at level run boundaries.
    // N2. Any remaining neutrals take the embedding direction.
    for (var i$6 = 0; i$6 < len; ++i$6) {
      if (isNeutral.test(types[i$6])) {
        var end$1 = (void 0)
        for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}
        var before = (i$6 ? types[i$6-1] : outerType) == "L"
        var after = (end$1 < len ? types[end$1] : outerType) == "L"
        var replace$1 = before || after ? "L" : "R"
        for (var j$1 = i$6; j$1 < end$1; ++j$1) { types[j$1] = replace$1 }
        i$6 = end$1 - 1
      }
    }

    // Here we depart from the documented algorithm, in order to avoid
    // building up an actual levels array. Since there are only three
    // levels (0, 1, 2) in an implementation that doesn't take
    // explicit embedding into account, we can build up the order on
    // the fly, without following the level-based algorithm.
    var order = [], m
    for (var i$7 = 0; i$7 < len;) {
      if (countsAsLeft.test(types[i$7])) {
        var start = i$7
        for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}
        order.push(new BidiSpan(0, start, i$7))
      } else {
        var pos = i$7, at = order.length
        for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}
        for (var j$2 = pos; j$2 < i$7;) {
          if (countsAsNum.test(types[j$2])) {
            if (pos < j$2) { order.splice(at, 0, new BidiSpan(1, pos, j$2)) }
            var nstart = j$2
            for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}
            order.splice(at, 0, new BidiSpan(2, nstart, j$2))
            pos = j$2
          } else { ++j$2 }
        }
        if (pos < i$7) { order.splice(at, 0, new BidiSpan(1, pos, i$7)) }
      }
    }
    if (order[0].level == 1 && (m = str.match(/^\s+/))) {
      order[0].from = m[0].length
      order.unshift(new BidiSpan(0, 0, m[0].length))
    }
    if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
      lst(order).to -= m[0].length
      order.push(new BidiSpan(0, len - m[0].length, len))
    }
    if (order[0].level == 2)
      { order.unshift(new BidiSpan(1, order[0].to, order[0].to)) }
    if (order[0].level != lst(order).level)
      { order.push(new BidiSpan(order[0].level, len, len)) }

    return order
  }
})()

// Get the bidi ordering for the given line (and cache it). Returns
// false for lines that are fully left-to-right, and an array of
// BidiSpan objects otherwise.
function getOrder(line) {
  var order = line.order
  if (order == null) { order = line.order = bidiOrdering(line.text) }
  return order
}

// EVENT HANDLING

// Lightweight event framework. on/off also work on DOM nodes,
// registering native DOM handlers.

var noHandlers = []

var on = function(emitter, type, f) {
  if (emitter.addEventListener) {
    emitter.addEventListener(type, f, false)
  } else if (emitter.attachEvent) {
    emitter.attachEvent("on" + type, f)
  } else {
    var map = emitter._handlers || (emitter._handlers = {})
    map[type] = (map[type] || noHandlers).concat(f)
  }
}

function getHandlers(emitter, type) {
  return emitter._handlers && emitter._handlers[type] || noHandlers
}

function off(emitter, type, f) {
  if (emitter.removeEventListener) {
    emitter.removeEventListener(type, f, false)
  } else if (emitter.detachEvent) {
    emitter.detachEvent("on" + type, f)
  } else {
    var map = emitter._handlers, arr = map && map[type]
    if (arr) {
      var index = indexOf(arr, f)
      if (index > -1)
        { map[type] = arr.slice(0, index).concat(arr.slice(index + 1)) }
    }
  }
}

function signal(emitter, type /*, values...*/) {
  var handlers = getHandlers(emitter, type)
  if (!handlers.length) { return }
  var args = Array.prototype.slice.call(arguments, 2)
  for (var i = 0; i < handlers.length; ++i) { handlers[i].apply(null, args) }
}

// The DOM events that CodeMirror handles can be overridden by
// registering a (non-DOM) handler on the editor for the event name,
// and preventDefault-ing the event in that handler.
function signalDOMEvent(cm, e, override) {
  if (typeof e == "string")
    { e = {type: e, preventDefault: function() { this.defaultPrevented = true }} }
  signal(cm, override || e.type, cm, e)
  return e_defaultPrevented(e) || e.codemirrorIgnore
}

function signalCursorActivity(cm) {
  var arr = cm._handlers && cm._handlers.cursorActivity
  if (!arr) { return }
  var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = [])
  for (var i = 0; i < arr.length; ++i) { if (indexOf(set, arr[i]) == -1)
    { set.push(arr[i]) } }
}

function hasHandler(emitter, type) {
  return getHandlers(emitter, type).length > 0
}

// Add on and off methods to a constructor's prototype, to make
// registering events on such objects more convenient.
function eventMixin(ctor) {
  ctor.prototype.on = function(type, f) {on(this, type, f)}
  ctor.prototype.off = function(type, f) {off(this, type, f)}
}

// Due to the fact that we still support jurassic IE versions, some
// compatibility wrappers are needed.

function e_preventDefault(e) {
  if (e.preventDefault) { e.preventDefault() }
  else { e.returnValue = false }
}
function e_stopPropagation(e) {
  if (e.stopPropagation) { e.stopPropagation() }
  else { e.cancelBubble = true }
}
function e_defaultPrevented(e) {
  return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
}
function e_stop(e) {e_preventDefault(e); e_stopPropagation(e)}

function e_target(e) {return e.target || e.srcElement}
function e_button(e) {
  var b = e.which
  if (b == null) {
    if (e.button & 1) { b = 1 }
    else if (e.button & 2) { b = 3 }
    else if (e.button & 4) { b = 2 }
  }
  if (mac && e.ctrlKey && b == 1) { b = 3 }
  return b
}

// Detect drag-and-drop
var dragAndDrop = function() {
  // There is *some* kind of drag-and-drop support in IE6-8, but I
  // couldn't get it to work yet.
  if (ie && ie_version < 9) { return false }
  var div = elt('div')
  return "draggable" in div || "dragDrop" in div
}()

var zwspSupported
function zeroWidthElement(measure) {
  if (zwspSupported == null) {
    var test = elt("span", "\u200b")
    removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]))
    if (measure.firstChild.offsetHeight != 0)
      { zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8) }
  }
  var node = zwspSupported ? elt("span", "\u200b") :
    elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px")
  node.setAttribute("cm-text", "")
  return node
}

// Feature-detect IE's crummy client rect reporting for bidi text
var badBidiRects
function hasBadBidiRects(measure) {
  if (badBidiRects != null) { return badBidiRects }
  var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"))
  var r0 = range(txt, 0, 1).getBoundingClientRect()
  var r1 = range(txt, 1, 2).getBoundingClientRect()
  removeChildren(measure)
  if (!r0 || r0.left == r0.right) { return false } // Safari returns null in some cases (#2780)
  return badBidiRects = (r1.right - r0.right < 3)
}

// See if "".split is the broken IE version, if so, provide an
// alternative way to split lines.
var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
  var pos = 0, result = [], l = string.length
  while (pos <= l) {
    var nl = string.indexOf("\n", pos)
    if (nl == -1) { nl = string.length }
    var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl)
    var rt = line.indexOf("\r")
    if (rt != -1) {
      result.push(line.slice(0, rt))
      pos += rt + 1
    } else {
      result.push(line)
      pos = nl + 1
    }
  }
  return result
} : function (string) { return string.split(/\r\n?|\n/); }

var hasSelection = window.getSelection ? function (te) {
  try { return te.selectionStart != te.selectionEnd }
  catch(e) { return false }
} : function (te) {
  var range
  try {range = te.ownerDocument.selection.createRange()}
  catch(e) {}
  if (!range || range.parentElement() != te) { return false }
  return range.compareEndPoints("StartToEnd", range) != 0
}

var hasCopyEvent = (function () {
  var e = elt("div")
  if ("oncopy" in e) { return true }
  e.setAttribute("oncopy", "return;")
  return typeof e.oncopy == "function"
})()

var badZoomedRects = null
function hasBadZoomedRects(measure) {
  if (badZoomedRects != null) { return badZoomedRects }
  var node = removeChildrenAndAdd(measure, elt("span", "x"))
  var normal = node.getBoundingClientRect()
  var fromRange = range(node, 0, 1).getBoundingClientRect()
  return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
}

var modes = {};
var mimeModes = {};
// Extra arguments are stored as the mode's dependencies, which is
// used by (legacy) mechanisms like loadmode.js to automatically
// load a mode. (Preferred mechanism is the require/define calls.)
function defineMode(name, mode) {
  if (arguments.length > 2)
    { mode.dependencies = Array.prototype.slice.call(arguments, 2) }
  modes[name] = mode
}

function defineMIME(mime, spec) {
  mimeModes[mime] = spec
}

// Given a MIME type, a {name, ...options} config object, or a name
// string, return a mode config object.
function resolveMode(spec) {
  if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
    spec = mimeModes[spec]
  } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
    var found = mimeModes[spec.name]
    if (typeof found == "string") { found = {name: found} }
    spec = createObj(found, spec)
    spec.name = found.name
  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
    return resolveMode("application/xml")
  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
    return resolveMode("application/json")
  }
  if (typeof spec == "string") { return {name: spec} }
  else { return spec || {name: "null"} }
}

// Given a mode spec (anything that resolveMode accepts), find and
// initialize an actual mode object.
function getMode(options, spec) {
  spec = resolveMode(spec)
  var mfactory = modes[spec.name]
  if (!mfactory) { return getMode(options, "text/plain") }
  var modeObj = mfactory(options, spec)
  if (modeExtensions.hasOwnProperty(spec.name)) {
    var exts = modeExtensions[spec.name]
    for (var prop in exts) {
      if (!exts.hasOwnProperty(prop)) { continue }
      if (modeObj.hasOwnProperty(prop)) { modeObj["_" + prop] = modeObj[prop] }
      modeObj[prop] = exts[prop]
    }
  }
  modeObj.name = spec.name
  if (spec.helperType) { modeObj.helperType = spec.helperType }
  if (spec.modeProps) { for (var prop$1 in spec.modeProps)
    { modeObj[prop$1] = spec.modeProps[prop$1] } }

  return modeObj
}

// This can be used to attach properties to mode objects from
// outside the actual mode definition.
var modeExtensions = {}
function extendMode(mode, properties) {
  var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {})
  copyObj(properties, exts)
}

function copyState(mode, state) {
  if (state === true) { return state }
  if (mode.copyState) { return mode.copyState(state) }
  var nstate = {}
  for (var n in state) {
    var val = state[n]
    if (val instanceof Array) { val = val.concat([]) }
    nstate[n] = val
  }
  return nstate
}

// Given a mode and a state (for that mode), find the inner mode and
// state at the position that the state refers to.
function innerMode(mode, state) {
  var info
  while (mode.innerMode) {
    info = mode.innerMode(state)
    if (!info || info.mode == mode) { break }
    state = info.state
    mode = info.mode
  }
  return info || {mode: mode, state: state}
}

function startState(mode, a1, a2) {
  return mode.startState ? mode.startState(a1, a2) : true
}

// STRING STREAM

// Fed to the mode parsers, provides helper functions to make
// parsers more succinct.

var StringStream = function(string, tabSize) {
  this.pos = this.start = 0
  this.string = string
  this.tabSize = tabSize || 8
  this.lastColumnPos = this.lastColumnValue = 0
  this.lineStart = 0
}

StringStream.prototype = {
  eol: function() {return this.pos >= this.string.length},
  sol: function() {return this.pos == this.lineStart},
  peek: function() {return this.string.charAt(this.pos) || undefined},
  next: function() {
    if (this.pos < this.string.length)
      { return this.string.charAt(this.pos++) }
  },
  eat: function(match) {
    var ch = this.string.charAt(this.pos)
    var ok
    if (typeof match == "string") { ok = ch == match }
    else { ok = ch && (match.test ? match.test(ch) : match(ch)) }
    if (ok) {++this.pos; return ch}
  },
  eatWhile: function(match) {
    var start = this.pos
    while (this.eat(match)){}
    return this.pos > start
  },
  eatSpace: function() {
    var this$1 = this;

    var start = this.pos
    while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) { ++this$1.pos }
    return this.pos > start
  },
  skipToEnd: function() {this.pos = this.string.length},
  skipTo: function(ch) {
    var found = this.string.indexOf(ch, this.pos)
    if (found > -1) {this.pos = found; return true}
  },
  backUp: function(n) {this.pos -= n},
  column: function() {
    if (this.lastColumnPos < this.start) {
      this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue)
      this.lastColumnPos = this.start
    }
    return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
  },
  indentation: function() {
    return countColumn(this.string, null, this.tabSize) -
      (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
  },
  match: function(pattern, consume, caseInsensitive) {
    if (typeof pattern == "string") {
      var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; }
      var substr = this.string.substr(this.pos, pattern.length)
      if (cased(substr) == cased(pattern)) {
        if (consume !== false) { this.pos += pattern.length }
        return true
      }
    } else {
      var match = this.string.slice(this.pos).match(pattern)
      if (match && match.index > 0) { return null }
      if (match && consume !== false) { this.pos += match[0].length }
      return match
    }
  },
  current: function(){return this.string.slice(this.start, this.pos)},
  hideFirstChars: function(n, inner) {
    this.lineStart += n
    try { return inner() }
    finally { this.lineStart -= n }
  }
}

// Compute a style array (an array starting with a mode generation
// -- for invalidation -- followed by pairs of end positions and
// style strings), which is used to highlight the tokens on the
// line.
function highlightLine(cm, line, state, forceToEnd) {
  // A styles array always starts with a number identifying the
  // mode/overlays that it is based on (for easy invalidation).
  var st = [cm.state.modeGen], lineClasses = {}
  // Compute the base array of styles
  runMode(cm, line.text, cm.doc.mode, state, function (end, style) { return st.push(end, style); },
    lineClasses, forceToEnd)

  // Run overlays, adjust style array.
  var loop = function ( o ) {
    var overlay = cm.state.overlays[o], i = 1, at = 0
    runMode(cm, line.text, overlay.mode, true, function (end, style) {
      var start = i
      // Ensure there's a token end at the current position, and that i points at it
      while (at < end) {
        var i_end = st[i]
        if (i_end > end)
          { st.splice(i, 1, end, st[i+1], i_end) }
        i += 2
        at = Math.min(end, i_end)
      }
      if (!style) { return }
      if (overlay.opaque) {
        st.splice(start, i - start, end, "overlay " + style)
        i = start + 2
      } else {
        for (; start < i; start += 2) {
          var cur = st[start+1]
          st[start+1] = (cur ? cur + " " : "") + "overlay " + style
        }
      }
    }, lineClasses)
  };

  for (var o = 0; o < cm.state.overlays.length; ++o) loop( o );

  return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
}

function getLineStyles(cm, line, updateFrontier) {
  if (!line.styles || line.styles[0] != cm.state.modeGen) {
    var state = getStateBefore(cm, lineNo(line))
    var result = highlightLine(cm, line, line.text.length > cm.options.maxHighlightLength ? copyState(cm.doc.mode, state) : state)
    line.stateAfter = state
    line.styles = result.styles
    if (result.classes) { line.styleClasses = result.classes }
    else if (line.styleClasses) { line.styleClasses = null }
    if (updateFrontier === cm.doc.frontier) { cm.doc.frontier++ }
  }
  return line.styles
}

function getStateBefore(cm, n, precise) {
  var doc = cm.doc, display = cm.display
  if (!doc.mode.startState) { return true }
  var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos-1).stateAfter
  if (!state) { state = startState(doc.mode) }
  else { state = copyState(doc.mode, state) }
  doc.iter(pos, n, function (line) {
    processLine(cm, line.text, state)
    var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo
    line.stateAfter = save ? copyState(doc.mode, state) : null
    ++pos
  })
  if (precise) { doc.frontier = pos }
  return state
}

// Lightweight form of highlight -- proceed over this line and
// update state, but don't save a style array. Used for lines that
// aren't currently visible.
function processLine(cm, text, state, startAt) {
  var mode = cm.doc.mode
  var stream = new StringStream(text, cm.options.tabSize)
  stream.start = stream.pos = startAt || 0
  if (text == "") { callBlankLine(mode, state) }
  while (!stream.eol()) {
    readToken(mode, stream, state)
    stream.start = stream.pos
  }
}

function callBlankLine(mode, state) {
  if (mode.blankLine) { return mode.blankLine(state) }
  if (!mode.innerMode) { return }
  var inner = innerMode(mode, state)
  if (inner.mode.blankLine) { return inner.mode.blankLine(inner.state) }
}

function readToken(mode, stream, state, inner) {
  for (var i = 0; i < 10; i++) {
    if (inner) { inner[0] = innerMode(mode, state).mode }
    var style = mode.token(stream, state)
    if (stream.pos > stream.start) { return style }
  }
  throw new Error("Mode " + mode.name + " failed to advance stream.")
}

// Utility for getTokenAt and getLineTokens
function takeToken(cm, pos, precise, asArray) {
  var getObj = function (copy) { return ({
    start: stream.start, end: stream.pos,
    string: stream.current(),
    type: style || null,
    state: copy ? copyState(doc.mode, state) : state
  }); }

  var doc = cm.doc, mode = doc.mode, style
  pos = clipPos(doc, pos)
  var line = getLine(doc, pos.line), state = getStateBefore(cm, pos.line, precise)
  var stream = new StringStream(line.text, cm.options.tabSize), tokens
  if (asArray) { tokens = [] }
  while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
    stream.start = stream.pos
    style = readToken(mode, stream, state)
    if (asArray) { tokens.push(getObj(true)) }
  }
  return asArray ? tokens : getObj()
}

function extractLineClasses(type, output) {
  if (type) { for (;;) {
    var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/)
    if (!lineClass) { break }
    type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length)
    var prop = lineClass[1] ? "bgClass" : "textClass"
    if (output[prop] == null)
      { output[prop] = lineClass[2] }
    else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
      { output[prop] += " " + lineClass[2] }
  } }
  return type
}

// Run the given mode's parser over a line, calling f for each token.
function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
  var flattenSpans = mode.flattenSpans
  if (flattenSpans == null) { flattenSpans = cm.options.flattenSpans }
  var curStart = 0, curStyle = null
  var stream = new StringStream(text, cm.options.tabSize), style
  var inner = cm.options.addModeClass && [null]
  if (text == "") { extractLineClasses(callBlankLine(mode, state), lineClasses) }
  while (!stream.eol()) {
    if (stream.pos > cm.options.maxHighlightLength) {
      flattenSpans = false
      if (forceToEnd) { processLine(cm, text, state, stream.pos) }
      stream.pos = text.length
      style = null
    } else {
      style = extractLineClasses(readToken(mode, stream, state, inner), lineClasses)
    }
    if (inner) {
      var mName = inner[0].name
      if (mName) { style = "m-" + (style ? mName + " " + style : mName) }
    }
    if (!flattenSpans || curStyle != style) {
      while (curStart < stream.start) {
        curStart = Math.min(stream.start, curStart + 5000)
        f(curStart, curStyle)
      }
      curStyle = style
    }
    stream.start = stream.pos
  }
  while (curStart < stream.pos) {
    // Webkit seems to refuse to render text nodes longer than 57444
    // characters, and returns inaccurate measurements in nodes
    // starting around 5000 chars.
    var pos = Math.min(stream.pos, curStart + 5000)
    f(pos, curStyle)
    curStart = pos
  }
}

// Finds the line to start with when starting a parse. Tries to
// find a line with a stateAfter, so that it can start with a
// valid state. If that fails, it returns the line with the
// smallest indentation, which tends to need the least context to
// parse correctly.
function findStartLine(cm, n, precise) {
  var minindent, minline, doc = cm.doc
  var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100)
  for (var search = n; search > lim; --search) {
    if (search <= doc.first) { return doc.first }
    var line = getLine(doc, search - 1)
    if (line.stateAfter && (!precise || search <= doc.frontier)) { return search }
    var indented = countColumn(line.text, null, cm.options.tabSize)
    if (minline == null || minindent > indented) {
      minline = search - 1
      minindent = indented
    }
  }
  return minline
}

// LINE DATA STRUCTURE

// Line objects. These hold state related to a line, including
// highlighting info (the styles array).
function Line(text, markedSpans, estimateHeight) {
  this.text = text
  attachMarkedSpans(this, markedSpans)
  this.height = estimateHeight ? estimateHeight(this) : 1
}
eventMixin(Line)
Line.prototype.lineNo = function() { return lineNo(this) }

// Change the content (text, markers) of a line. Automatically
// invalidates cached information and tries to re-estimate the
// line's height.
function updateLine(line, text, markedSpans, estimateHeight) {
  line.text = text
  if (line.stateAfter) { line.stateAfter = null }
  if (line.styles) { line.styles = null }
  if (line.order != null) { line.order = null }
  detachMarkedSpans(line)
  attachMarkedSpans(line, markedSpans)
  var estHeight = estimateHeight ? estimateHeight(line) : 1
  if (estHeight != line.height) { updateLineHeight(line, estHeight) }
}

// Detach a line from the document tree and its markers.
function cleanUpLine(line) {
  line.parent = null
  detachMarkedSpans(line)
}

// Convert a style as returned by a mode (either null, or a string
// containing one or more styles) to a CSS style. This is cached,
// and also looks for line-wide styles.
var styleToClassCache = {};
var styleToClassCacheWithMode = {};
function interpretTokenStyle(style, options) {
  if (!style || /^\s*$/.test(style)) { return null }
  var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache
  return cache[style] ||
    (cache[style] = style.replace(/\S+/g, "cm-$&"))
}

// Render the DOM representation of the text of a line. Also builds
// up a 'line map', which points at the DOM nodes that represent
// specific stretches of text, and is used by the measuring code.
// The returned object contains the DOM node, this map, and
// information about line-wide styles that were set by the mode.
function buildLineContent(cm, lineView) {
  // The padding-right forces the element to have a 'border', which
  // is needed on Webkit to be able to get line-level bounding
  // rectangles for it (in measureChar).
  var content = elt("span", null, null, webkit ? "padding-right: .1px" : null)
  var builder = {pre: elt("pre", [content], "CodeMirror-line"), content: content,
                 col: 0, pos: 0, cm: cm,
                 trailingSpace: false,
                 splitSpaces: (ie || webkit) && cm.getOption("lineWrapping")}
  // hide from accessibility tree
  content.setAttribute("role", "presentation")
  builder.pre.setAttribute("role", "presentation")
  lineView.measure = {}

  // Iterate over the logical lines that make up this visual line.
  for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
    var line = i ? lineView.rest[i - 1] : lineView.line, order = (void 0)
    builder.pos = 0
    builder.addToken = buildToken
    // Optionally wire in some hacks into the token-rendering
    // algorithm, to deal with browser quirks.
    if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line)))
      { builder.addToken = buildTokenBadBidi(builder.addToken, order) }
    builder.map = []
    var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line)
    insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate))
    if (line.styleClasses) {
      if (line.styleClasses.bgClass)
        { builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "") }
      if (line.styleClasses.textClass)
        { builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "") }
    }

    // Ensure at least a single node is present, for measuring.
    if (builder.map.length == 0)
      { builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))) }

    // Store the map and a cache object for the current logical line
    if (i == 0) {
      lineView.measure.map = builder.map
      lineView.measure.cache = {}
    } else {
      ;(lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
      ;(lineView.measure.caches || (lineView.measure.caches = [])).push({})
    }
  }

  // See issue #2901
  if (webkit) {
    var last = builder.content.lastChild
    if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
      { builder.content.className = "cm-tab-wrap-hack" }
  }

  signal(cm, "renderLine", cm, lineView.line, builder.pre)
  if (builder.pre.className)
    { builder.textClass = joinClasses(builder.pre.className, builder.textClass || "") }

  return builder
}

function defaultSpecialCharPlaceholder(ch) {
  var token = elt("span", "\u2022", "cm-invalidchar")
  token.title = "\\u" + ch.charCodeAt(0).toString(16)
  token.setAttribute("aria-label", token.title)
  return token
}

// Build up the DOM representation for a single token, and add it to
// the line map. Takes care to render special characters separately.
function buildToken(builder, text, style, startStyle, endStyle, title, css) {
  if (!text) { return }
  var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text
  var special = builder.cm.state.specialChars, mustWrap = false
  var content
  if (!special.test(text)) {
    builder.col += text.length
    content = document.createTextNode(displayText)
    builder.map.push(builder.pos, builder.pos + text.length, content)
    if (ie && ie_version < 9) { mustWrap = true }
    builder.pos += text.length
  } else {
    content = document.createDocumentFragment()
    var pos = 0
    while (true) {
      special.lastIndex = pos
      var m = special.exec(text)
      var skipped = m ? m.index - pos : text.length - pos
      if (skipped) {
        var txt = document.createTextNode(displayText.slice(pos, pos + skipped))
        if (ie && ie_version < 9) { content.appendChild(elt("span", [txt])) }
        else { content.appendChild(txt) }
        builder.map.push(builder.pos, builder.pos + skipped, txt)
        builder.col += skipped
        builder.pos += skipped
      }
      if (!m) { break }
      pos += skipped + 1
      var txt$1 = (void 0)
      if (m[0] == "\t") {
        var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize
        txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"))
        txt$1.setAttribute("role", "presentation")
        txt$1.setAttribute("cm-text", "\t")
        builder.col += tabWidth
      } else if (m[0] == "\r" || m[0] == "\n") {
        txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"))
        txt$1.setAttribute("cm-text", m[0])
        builder.col += 1
      } else {
        txt$1 = builder.cm.options.specialCharPlaceholder(m[0])
        txt$1.setAttribute("cm-text", m[0])
        if (ie && ie_version < 9) { content.appendChild(elt("span", [txt$1])) }
        else { content.appendChild(txt$1) }
        builder.col += 1
      }
      builder.map.push(builder.pos, builder.pos + 1, txt$1)
      builder.pos++
    }
  }
  builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32
  if (style || startStyle || endStyle || mustWrap || css) {
    var fullStyle = style || ""
    if (startStyle) { fullStyle += startStyle }
    if (endStyle) { fullStyle += endStyle }
    var token = elt("span", [content], fullStyle, css)
    if (title) { token.title = title }
    return builder.content.appendChild(token)
  }
  builder.content.appendChild(content)
}

function splitSpaces(text, trailingBefore) {
  if (text.length > 1 && !/  /.test(text)) { return text }
  var spaceBefore = trailingBefore, result = ""
  for (var i = 0; i < text.length; i++) {
    var ch = text.charAt(i)
    if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
      { ch = "\u00a0" }
    result += ch
    spaceBefore = ch == " "
  }
  return result
}

// Work around nonsense dimensions being reported for stretches of
// right-to-left text.
function buildTokenBadBidi(inner, order) {
  return function (builder, text, style, startStyle, endStyle, title, css) {
    style = style ? style + " cm-force-border" : "cm-force-border"
    var start = builder.pos, end = start + text.length
    for (;;) {
      // Find the part that overlaps with the start of this text
      var part = (void 0)
      for (var i = 0; i < order.length; i++) {
        part = order[i]
        if (part.to > start && part.from <= start) { break }
      }
      if (part.to >= end) { return inner(builder, text, style, startStyle, endStyle, title, css) }
      inner(builder, text.slice(0, part.to - start), style, startStyle, null, title, css)
      startStyle = null
      text = text.slice(part.to - start)
      start = part.to
    }
  }
}

function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
  var widget = !ignoreWidget && marker.widgetNode
  if (widget) { builder.map.push(builder.pos, builder.pos + size, widget) }
  if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
    if (!widget)
      { widget = builder.content.appendChild(document.createElement("span")) }
    widget.setAttribute("cm-marker", marker.id)
  }
  if (widget) {
    builder.cm.display.input.setUneditable(widget)
    builder.content.appendChild(widget)
  }
  builder.pos += size
  builder.trailingSpace = false
}

// Outputs a number of spans to make up a line, taking highlighting
// and marked text into account.
function insertLineContent(line, builder, styles) {
  var spans = line.markedSpans, allText = line.text, at = 0
  if (!spans) {
    for (var i$1 = 1; i$1 < styles.length; i$1+=2)
      { builder.addToken(builder, allText.slice(at, at = styles[i$1]), interpretTokenStyle(styles[i$1+1], builder.cm.options)) }
    return
  }

  var len = allText.length, pos = 0, i = 1, text = "", style, css
  var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed
  for (;;) {
    if (nextChange == pos) { // Update current marker set
      spanStyle = spanEndStyle = spanStartStyle = title = css = ""
      collapsed = null; nextChange = Infinity
      var foundBookmarks = [], endStyles = (void 0)
      for (var j = 0; j < spans.length; ++j) {
        var sp = spans[j], m = sp.marker
        if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
          foundBookmarks.push(m)
        } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
          if (sp.to != null && sp.to != pos && nextChange > sp.to) {
            nextChange = sp.to
            spanEndStyle = ""
          }
          if (m.className) { spanStyle += " " + m.className }
          if (m.css) { css = (css ? css + ";" : "") + m.css }
          if (m.startStyle && sp.from == pos) { spanStartStyle += " " + m.startStyle }
          if (m.endStyle && sp.to == nextChange) { (endStyles || (endStyles = [])).push(m.endStyle, sp.to) }
          if (m.title && !title) { title = m.title }
          if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
            { collapsed = sp }
        } else if (sp.from > pos && nextChange > sp.from) {
          nextChange = sp.from
        }
      }
      if (endStyles) { for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2)
        { if (endStyles[j$1 + 1] == nextChange) { spanEndStyle += " " + endStyles[j$1] } } }

      if (!collapsed || collapsed.from == pos) { for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2)
        { buildCollapsedSpan(builder, 0, foundBookmarks[j$2]) } }
      if (collapsed && (collapsed.from || 0) == pos) {
        buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
                           collapsed.marker, collapsed.from == null)
        if (collapsed.to == null) { return }
        if (collapsed.to == pos) { collapsed = false }
      }
    }
    if (pos >= len) { break }

    var upto = Math.min(len, nextChange)
    while (true) {
      if (text) {
        var end = pos + text.length
        if (!collapsed) {
          var tokenText = end > upto ? text.slice(0, upto - pos) : text
          builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
                           spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css)
        }
        if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
        pos = end
        spanStartStyle = ""
      }
      text = allText.slice(at, at = styles[i++])
      style = interpretTokenStyle(styles[i++], builder.cm.options)
    }
  }
}


// These objects are used to represent the visible (currently drawn)
// part of the document. A LineView may correspond to multiple
// logical lines, if those are connected by collapsed ranges.
function LineView(doc, line, lineN) {
  // The starting line
  this.line = line
  // Continuing lines, if any
  this.rest = visualLineContinued(line)
  // Number of logical lines in this visual line
  this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1
  this.node = this.text = null
  this.hidden = lineIsHidden(doc, line)
}

// Create a range of LineView objects for the given lines.
function buildViewArray(cm, from, to) {
  var array = [], nextPos
  for (var pos = from; pos < to; pos = nextPos) {
    var view = new LineView(cm.doc, getLine(cm.doc, pos), pos)
    nextPos = pos + view.size
    array.push(view)
  }
  return array
}

var operationGroup = null

function pushOperation(op) {
  if (operationGroup) {
    operationGroup.ops.push(op)
  } else {
    op.ownsGroup = operationGroup = {
      ops: [op],
      delayedCallbacks: []
    }
  }
}

function fireCallbacksForOps(group) {
  // Calls delayed callbacks and cursorActivity handlers until no
  // new ones appear
  var callbacks = group.delayedCallbacks, i = 0
  do {
    for (; i < callbacks.length; i++)
      { callbacks[i].call(null) }
    for (var j = 0; j < group.ops.length; j++) {
      var op = group.ops[j]
      if (op.cursorActivityHandlers)
        { while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
          { op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm) } }
    }
  } while (i < callbacks.length)
}

function finishOperation(op, endCb) {
  var group = op.ownsGroup
  if (!group) { return }

  try { fireCallbacksForOps(group) }
  finally {
    operationGroup = null
    endCb(group)
  }
}

var orphanDelayedCallbacks = null

// Often, we want to signal events at a point where we are in the
// middle of some work, but don't want the handler to start calling
// other methods on the editor, which might be in an inconsistent
// state or simply not expect any other events to happen.
// signalLater looks whether there are any handlers, and schedules
// them to be executed when the last operation ends, or, if no
// operation is active, when a timeout fires.
function signalLater(emitter, type /*, values...*/) {
  var arr = getHandlers(emitter, type)
  if (!arr.length) { return }
  var args = Array.prototype.slice.call(arguments, 2), list
  if (operationGroup) {
    list = operationGroup.delayedCallbacks
  } else if (orphanDelayedCallbacks) {
    list = orphanDelayedCallbacks
  } else {
    list = orphanDelayedCallbacks = []
    setTimeout(fireOrphanDelayed, 0)
  }
  var loop = function ( i ) {
    list.push(function () { return arr[i].apply(null, args); })
  };

  for (var i = 0; i < arr.length; ++i)
    loop( i );
}

function fireOrphanDelayed() {
  var delayed = orphanDelayedCallbacks
  orphanDelayedCallbacks = null
  for (var i = 0; i < delayed.length; ++i) { delayed[i]() }
}

// When an aspect of a line changes, a string is added to
// lineView.changes. This updates the relevant part of the line's
// DOM structure.
function updateLineForChanges(cm, lineView, lineN, dims) {
  for (var j = 0; j < lineView.changes.length; j++) {
    var type = lineView.changes[j]
    if (type == "text") { updateLineText(cm, lineView) }
    else if (type == "gutter") { updateLineGutter(cm, lineView, lineN, dims) }
    else if (type == "class") { updateLineClasses(lineView) }
    else if (type == "widget") { updateLineWidgets(cm, lineView, dims) }
  }
  lineView.changes = null
}

// Lines with gutter elements, widgets or a background class need to
// be wrapped, and have the extra elements added to the wrapper div
function ensureLineWrapped(lineView) {
  if (lineView.node == lineView.text) {
    lineView.node = elt("div", null, null, "position: relative")
    if (lineView.text.parentNode)
      { lineView.text.parentNode.replaceChild(lineView.node, lineView.text) }
    lineView.node.appendChild(lineView.text)
    if (ie && ie_version < 8) { lineView.node.style.zIndex = 2 }
  }
  return lineView.node
}

function updateLineBackground(lineView) {
  var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass
  if (cls) { cls += " CodeMirror-linebackground" }
  if (lineView.background) {
    if (cls) { lineView.background.className = cls }
    else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null }
  } else if (cls) {
    var wrap = ensureLineWrapped(lineView)
    lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild)
  }
}

// Wrapper around buildLineContent which will reuse the structure
// in display.externalMeasured when possible.
function getLineContent(cm, lineView) {
  var ext = cm.display.externalMeasured
  if (ext && ext.line == lineView.line) {
    cm.display.externalMeasured = null
    lineView.measure = ext.measure
    return ext.built
  }
  return buildLineContent(cm, lineView)
}

// Redraw the line's text. Interacts with the background and text
// classes because the mode may output tokens that influence these
// classes.
function updateLineText(cm, lineView) {
  var cls = lineView.text.className
  var built = getLineContent(cm, lineView)
  if (lineView.text == lineView.node) { lineView.node = built.pre }
  lineView.text.parentNode.replaceChild(built.pre, lineView.text)
  lineView.text = built.pre
  if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
    lineView.bgClass = built.bgClass
    lineView.textClass = built.textClass
    updateLineClasses(lineView)
  } else if (cls) {
    lineView.text.className = cls
  }
}

function updateLineClasses(lineView) {
  updateLineBackground(lineView)
  if (lineView.line.wrapClass)
    { ensureLineWrapped(lineView).className = lineView.line.wrapClass }
  else if (lineView.node != lineView.text)
    { lineView.node.className = "" }
  var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass
  lineView.text.className = textClass || ""
}

function updateLineGutter(cm, lineView, lineN, dims) {
  if (lineView.gutter) {
    lineView.node.removeChild(lineView.gutter)
    lineView.gutter = null
  }
  if (lineView.gutterBackground) {
    lineView.node.removeChild(lineView.gutterBackground)
    lineView.gutterBackground = null
  }
  if (lineView.line.gutterClass) {
    var wrap = ensureLineWrapped(lineView)
    lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
                                    ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + (dims.gutterTotalWidth) + "px"))
    wrap.insertBefore(lineView.gutterBackground, lineView.text)
  }
  var markers = lineView.line.gutterMarkers
  if (cm.options.lineNumbers || markers) {
    var wrap$1 = ensureLineWrapped(lineView)
    var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"))
    cm.display.input.setUneditable(gutterWrap)
    wrap$1.insertBefore(gutterWrap, lineView.text)
    if (lineView.line.gutterClass)
      { gutterWrap.className += " " + lineView.line.gutterClass }
    if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
      { lineView.lineNumber = gutterWrap.appendChild(
        elt("div", lineNumberFor(cm.options, lineN),
            "CodeMirror-linenumber CodeMirror-gutter-elt",
            ("left: " + (dims.gutterLeft["CodeMirror-linenumbers"]) + "px; width: " + (cm.display.lineNumInnerWidth) + "px"))) }
    if (markers) { for (var k = 0; k < cm.options.gutters.length; ++k) {
      var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id]
      if (found)
        { gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt",
                                   ("left: " + (dims.gutterLeft[id]) + "px; width: " + (dims.gutterWidth[id]) + "px"))) }
    } }
  }
}

function updateLineWidgets(cm, lineView, dims) {
  if (lineView.alignable) { lineView.alignable = null }
  for (var node = lineView.node.firstChild, next = (void 0); node; node = next) {
    next = node.nextSibling
    if (node.className == "CodeMirror-linewidget")
      { lineView.node.removeChild(node) }
  }
  insertLineWidgets(cm, lineView, dims)
}

// Build a line's DOM representation from scratch
function buildLineElement(cm, lineView, lineN, dims) {
  var built = getLineContent(cm, lineView)
  lineView.text = lineView.node = built.pre
  if (built.bgClass) { lineView.bgClass = built.bgClass }
  if (built.textClass) { lineView.textClass = built.textClass }

  updateLineClasses(lineView)
  updateLineGutter(cm, lineView, lineN, dims)
  insertLineWidgets(cm, lineView, dims)
  return lineView.node
}

// A lineView may contain multiple logical lines (when merged by
// collapsed spans). The widgets for all of them need to be drawn.
function insertLineWidgets(cm, lineView, dims) {
  insertLineWidgetsFor(cm, lineView.line, lineView, dims, true)
  if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
    { insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false) } }
}

function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
  if (!line.widgets) { return }
  var wrap = ensureLineWrapped(lineView)
  for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
    var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget")
    if (!widget.handleMouseEvents) { node.setAttribute("cm-ignore-events", "true") }
    positionLineWidget(widget, node, lineView, dims)
    cm.display.input.setUneditable(node)
    if (allowAbove && widget.above)
      { wrap.insertBefore(node, lineView.gutter || lineView.text) }
    else
      { wrap.appendChild(node) }
    signalLater(widget, "redraw")
  }
}

function positionLineWidget(widget, node, lineView, dims) {
  if (widget.noHScroll) {
    ;(lineView.alignable || (lineView.alignable = [])).push(node)
    var width = dims.wrapperWidth
    node.style.left = dims.fixedPos + "px"
    if (!widget.coverGutter) {
      width -= dims.gutterTotalWidth
      node.style.paddingLeft = dims.gutterTotalWidth + "px"
    }
    node.style.width = width + "px"
  }
  if (widget.coverGutter) {
    node.style.zIndex = 5
    node.style.position = "relative"
    if (!widget.noHScroll) { node.style.marginLeft = -dims.gutterTotalWidth + "px" }
  }
}

function widgetHeight(widget) {
  if (widget.height != null) { return widget.height }
  var cm = widget.doc.cm
  if (!cm) { return 0 }
  if (!contains(document.body, widget.node)) {
    var parentStyle = "position: relative;"
    if (widget.coverGutter)
      { parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;" }
    if (widget.noHScroll)
      { parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;" }
    removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle))
  }
  return widget.height = widget.node.parentNode.offsetHeight
}

// Return true when the given mouse event happened in a widget
function eventInWidget(display, e) {
  for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
    if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
        (n.parentNode == display.sizer && n != display.mover))
      { return true }
  }
}

// POSITION MEASUREMENT

function paddingTop(display) {return display.lineSpace.offsetTop}
function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight}
function paddingH(display) {
  if (display.cachedPaddingH) { return display.cachedPaddingH }
  var e = removeChildrenAndAdd(display.measure, elt("pre", "x"))
  var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle
  var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)}
  if (!isNaN(data.left) && !isNaN(data.right)) { display.cachedPaddingH = data }
  return data
}

function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth }
function displayWidth(cm) {
  return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth
}
function displayHeight(cm) {
  return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight
}

// Ensure the lineView.wrapping.heights array is populated. This is
// an array of bottom offsets for the lines that make up a drawn
// line. When lineWrapping is on, there might be more than one
// height.
function ensureLineHeights(cm, lineView, rect) {
  var wrapping = cm.options.lineWrapping
  var curWidth = wrapping && displayWidth(cm)
  if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
    var heights = lineView.measure.heights = []
    if (wrapping) {
      lineView.measure.width = curWidth
      var rects = lineView.text.firstChild.getClientRects()
      for (var i = 0; i < rects.length - 1; i++) {
        var cur = rects[i], next = rects[i + 1]
        if (Math.abs(cur.bottom - next.bottom) > 2)
          { heights.push((cur.bottom + next.top) / 2 - rect.top) }
      }
    }
    heights.push(rect.bottom - rect.top)
  }
}

// Find a line map (mapping character offsets to text nodes) and a
// measurement cache for the given line number. (A line view might
// contain multiple lines when collapsed ranges are present.)
function mapFromLineView(lineView, line, lineN) {
  if (lineView.line == line)
    { return {map: lineView.measure.map, cache: lineView.measure.cache} }
  for (var i = 0; i < lineView.rest.length; i++)
    { if (lineView.rest[i] == line)
      { return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]} } }
  for (var i$1 = 0; i$1 < lineView.rest.length; i$1++)
    { if (lineNo(lineView.rest[i$1]) > lineN)
      { return {map: lineView.measure.maps[i$1], cache: lineView.measure.caches[i$1], before: true} } }
}

// Render a line into the hidden node display.externalMeasured. Used
// when measurement is needed for a line that's not in the viewport.
function updateExternalMeasurement(cm, line) {
  line = visualLine(line)
  var lineN = lineNo(line)
  var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN)
  view.lineN = lineN
  var built = view.built = buildLineContent(cm, view)
  view.text = built.pre
  removeChildrenAndAdd(cm.display.lineMeasure, built.pre)
  return view
}

// Get a {top, bottom, left, right} box (in line-local coordinates)
// for a given character.
function measureChar(cm, line, ch, bias) {
  return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias)
}

// Find a line view that corresponds to the given line number.
function findViewForLine(cm, lineN) {
  if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
    { return cm.display.view[findViewIndex(cm, lineN)] }
  var ext = cm.display.externalMeasured
  if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
    { return ext }
}

// Measurement can be split in two steps, the set-up work that
// applies to the whole line, and the measurement of the actual
// character. Functions like coordsChar, that need to do a lot of
// measurements in a row, can thus ensure that the set-up work is
// only done once.
function prepareMeasureForLine(cm, line) {
  var lineN = lineNo(line)
  var view = findViewForLine(cm, lineN)
  if (view && !view.text) {
    view = null
  } else if (view && view.changes) {
    updateLineForChanges(cm, view, lineN, getDimensions(cm))
    cm.curOp.forceUpdate = true
  }
  if (!view)
    { view = updateExternalMeasurement(cm, line) }

  var info = mapFromLineView(view, line, lineN)
  return {
    line: line, view: view, rect: null,
    map: info.map, cache: info.cache, before: info.before,
    hasHeights: false
  }
}

// Given a prepared measurement object, measures the position of an
// actual character (or fetches it from the cache).
function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
  if (prepared.before) { ch = -1 }
  var key = ch + (bias || ""), found
  if (prepared.cache.hasOwnProperty(key)) {
    found = prepared.cache[key]
  } else {
    if (!prepared.rect)
      { prepared.rect = prepared.view.text.getBoundingClientRect() }
    if (!prepared.hasHeights) {
      ensureLineHeights(cm, prepared.view, prepared.rect)
      prepared.hasHeights = true
    }
    found = measureCharInner(cm, prepared, ch, bias)
    if (!found.bogus) { prepared.cache[key] = found }
  }
  return {left: found.left, right: found.right,
          top: varHeight ? found.rtop : found.top,
          bottom: varHeight ? found.rbottom : found.bottom}
}

var nullRect = {left: 0, right: 0, top: 0, bottom: 0}

function nodeAndOffsetInLineMap(map, ch, bias) {
  var node, start, end, collapse, mStart, mEnd
  // First, search the line map for the text node corresponding to,
  // or closest to, the target character.
  for (var i = 0; i < map.length; i += 3) {
    mStart = map[i]
    mEnd = map[i + 1]
    if (ch < mStart) {
      start = 0; end = 1
      collapse = "left"
    } else if (ch < mEnd) {
      start = ch - mStart
      end = start + 1
    } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
      end = mEnd - mStart
      start = end - 1
      if (ch >= mEnd) { collapse = "right" }
    }
    if (start != null) {
      node = map[i + 2]
      if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
        { collapse = bias }
      if (bias == "left" && start == 0)
        { while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
          node = map[(i -= 3) + 2]
          collapse = "left"
        } }
      if (bias == "right" && start == mEnd - mStart)
        { while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
          node = map[(i += 3) + 2]
          collapse = "right"
        } }
      break
    }
  }
  return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd}
}

function getUsefulRect(rects, bias) {
  var rect = nullRect
  if (bias == "left") { for (var i = 0; i < rects.length; i++) {
    if ((rect = rects[i]).left != rect.right) { break }
  } } else { for (var i$1 = rects.length - 1; i$1 >= 0; i$1--) {
    if ((rect = rects[i$1]).left != rect.right) { break }
  } }
  return rect
}

function measureCharInner(cm, prepared, ch, bias) {
  var place = nodeAndOffsetInLineMap(prepared.map, ch, bias)
  var node = place.node, start = place.start, end = place.end, collapse = place.collapse

  var rect
  if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
    for (var i$1 = 0; i$1 < 4; i$1++) { // Retry a maximum of 4 times when nonsense rectangles are returned
      while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) { --start }
      while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) { ++end }
      if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
        { rect = node.parentNode.getBoundingClientRect() }
      else
        { rect = getUsefulRect(range(node, start, end).getClientRects(), bias) }
      if (rect.left || rect.right || start == 0) { break }
      end = start
      start = start - 1
      collapse = "right"
    }
    if (ie && ie_version < 11) { rect = maybeUpdateRectForZooming(cm.display.measure, rect) }
  } else { // If it is a widget, simply get the box for the whole widget.
    if (start > 0) { collapse = bias = "right" }
    var rects
    if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
      { rect = rects[bias == "right" ? rects.length - 1 : 0] }
    else
      { rect = node.getBoundingClientRect() }
  }
  if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
    var rSpan = node.parentNode.getClientRects()[0]
    if (rSpan)
      { rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom} }
    else
      { rect = nullRect }
  }

  var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top
  var mid = (rtop + rbot) / 2
  var heights = prepared.view.measure.heights
  var i = 0
  for (; i < heights.length - 1; i++)
    { if (mid < heights[i]) { break } }
  var top = i ? heights[i - 1] : 0, bot = heights[i]
  var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
                right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
                top: top, bottom: bot}
  if (!rect.left && !rect.right) { result.bogus = true }
  if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot }

  return result
}

// Work around problem with bounding client rects on ranges being
// returned incorrectly when zoomed on IE10 and below.
function maybeUpdateRectForZooming(measure, rect) {
  if (!window.screen || screen.logicalXDPI == null ||
      screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
    { return rect }
  var scaleX = screen.logicalXDPI / screen.deviceXDPI
  var scaleY = screen.logicalYDPI / screen.deviceYDPI
  return {left: rect.left * scaleX, right: rect.right * scaleX,
          top: rect.top * scaleY, bottom: rect.bottom * scaleY}
}

function clearLineMeasurementCacheFor(lineView) {
  if (lineView.measure) {
    lineView.measure.cache = {}
    lineView.measure.heights = null
    if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
      { lineView.measure.caches[i] = {} } }
  }
}

function clearLineMeasurementCache(cm) {
  cm.display.externalMeasure = null
  removeChildren(cm.display.lineMeasure)
  for (var i = 0; i < cm.display.view.length; i++)
    { clearLineMeasurementCacheFor(cm.display.view[i]) }
}

function clearCaches(cm) {
  clearLineMeasurementCache(cm)
  cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null
  if (!cm.options.lineWrapping) { cm.display.maxLineChanged = true }
  cm.display.lineNumChars = null
}

function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft }
function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop }

// Converts a {top, bottom, left, right} box from line-local
// coordinates into another coordinate system. Context may be one of
// "line", "div" (display.lineDiv), "local"./null (editor), "window",
// or "page".
function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
  if (!includeWidgets && lineObj.widgets) { for (var i = 0; i < lineObj.widgets.length; ++i) { if (lineObj.widgets[i].above) {
    var size = widgetHeight(lineObj.widgets[i])
    rect.top += size; rect.bottom += size
  } } }
  if (context == "line") { return rect }
  if (!context) { context = "local" }
  var yOff = heightAtLine(lineObj)
  if (context == "local") { yOff += paddingTop(cm.display) }
  else { yOff -= cm.display.viewOffset }
  if (context == "page" || context == "window") {
    var lOff = cm.display.lineSpace.getBoundingClientRect()
    yOff += lOff.top + (context == "window" ? 0 : pageScrollY())
    var xOff = lOff.left + (context == "window" ? 0 : pageScrollX())
    rect.left += xOff; rect.right += xOff
  }
  rect.top += yOff; rect.bottom += yOff
  return rect
}

// Coverts a box from "div" coords to another coordinate system.
// Context may be "window", "page", "div", or "local"./null.
function fromCoordSystem(cm, coords, context) {
  if (context == "div") { return coords }
  var left = coords.left, top = coords.top
  // First move into "page" coordinate system
  if (context == "page") {
    left -= pageScrollX()
    top -= pageScrollY()
  } else if (context == "local" || !context) {
    var localBox = cm.display.sizer.getBoundingClientRect()
    left += localBox.left
    top += localBox.top
  }

  var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect()
  return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top}
}

function charCoords(cm, pos, context, lineObj, bias) {
  if (!lineObj) { lineObj = getLine(cm.doc, pos.line) }
  return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context)
}

// Returns a box for a given cursor position, which may have an
// 'other' property containing the position of the secondary cursor
// on a bidi boundary.
function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
  lineObj = lineObj || getLine(cm.doc, pos.line)
  if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj) }
  function get(ch, right) {
    var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight)
    if (right) { m.left = m.right; } else { m.right = m.left }
    return intoCoordSystem(cm, lineObj, m, context)
  }
  function getBidi(ch, partPos) {
    var part = order[partPos], right = part.level % 2
    if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
      part = order[--partPos]
      ch = bidiRight(part) - (part.level % 2 ? 0 : 1)
      right = true
    } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
      part = order[++partPos]
      ch = bidiLeft(part) - part.level % 2
      right = false
    }
    if (right && ch == part.to && ch > part.from) { return get(ch - 1) }
    return get(ch, right)
  }
  var order = getOrder(lineObj), ch = pos.ch
  if (!order) { return get(ch) }
  var partPos = getBidiPartAt(order, ch)
  var val = getBidi(ch, partPos)
  if (bidiOther != null) { val.other = getBidi(ch, bidiOther) }
  return val
}

// Used to cheaply estimate the coordinates for a position. Used for
// intermediate scroll updates.
function estimateCoords(cm, pos) {
  var left = 0
  pos = clipPos(cm.doc, pos)
  if (!cm.options.lineWrapping) { left = charWidth(cm.display) * pos.ch }
  var lineObj = getLine(cm.doc, pos.line)
  var top = heightAtLine(lineObj) + paddingTop(cm.display)
  return {left: left, right: left, top: top, bottom: top + lineObj.height}
}

// Positions returned by coordsChar contain some extra information.
// xRel is the relative x position of the input coordinates compared
// to the found position (so xRel > 0 means the coordinates are to
// the right of the character position, for example). When outside
// is true, that means the coordinates lie outside the line's
// vertical range.
function PosWithInfo(line, ch, outside, xRel) {
  var pos = Pos(line, ch)
  pos.xRel = xRel
  if (outside) { pos.outside = true }
  return pos
}

// Compute the character position closest to the given coordinates.
// Input must be lineSpace-local ("div" coordinate system).
function coordsChar(cm, x, y) {
  var doc = cm.doc
  y += cm.display.viewOffset
  if (y < 0) { return PosWithInfo(doc.first, 0, true, -1) }
  var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1
  if (lineN > last)
    { return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1) }
  if (x < 0) { x = 0 }

  var lineObj = getLine(doc, lineN)
  for (;;) {
    var found = coordsCharInner(cm, lineObj, lineN, x, y)
    var merged = collapsedSpanAtEnd(lineObj)
    var mergedPos = merged && merged.find(0, true)
    if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
      { lineN = lineNo(lineObj = mergedPos.to.line) }
    else
      { return found }
  }
}

function coordsCharInner(cm, lineObj, lineNo, x, y) {
  var innerOff = y - heightAtLine(lineObj)
  var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth
  var preparedMeasure = prepareMeasureForLine(cm, lineObj)

  function getX(ch) {
    var sp = cursorCoords(cm, Pos(lineNo, ch), "line", lineObj, preparedMeasure)
    wrongLine = true
    if (innerOff > sp.bottom) { return sp.left - adjust }
    else if (innerOff < sp.top) { return sp.left + adjust }
    else { wrongLine = false }
    return sp.left
  }

  var bidi = getOrder(lineObj), dist = lineObj.text.length
  var from = lineLeft(lineObj), to = lineRight(lineObj)
  var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine

  if (x > toX) { return PosWithInfo(lineNo, to, toOutside, 1) }
  // Do a binary search between these bounds.
  for (;;) {
    if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
      var ch = x < fromX || x - fromX <= toX - x ? from : to
      var outside = ch == from ? fromOutside : toOutside
      var xDiff = x - (ch == from ? fromX : toX)
      // This is a kludge to handle the case where the coordinates
      // are after a line-wrapped line. We should replace it with a
      // more general handling of cursor positions around line
      // breaks. (Issue #4078)
      if (toOutside && !bidi && !/\s/.test(lineObj.text.charAt(ch)) && xDiff > 0 &&
          ch < lineObj.text.length && preparedMeasure.view.measure.heights.length > 1) {
        var charSize = measureCharPrepared(cm, preparedMeasure, ch, "right")
        if (innerOff <= charSize.bottom && innerOff >= charSize.top && Math.abs(x - charSize.right) < xDiff) {
          outside = false
          ch++
          xDiff = x - charSize.right
        }
      }
      while (isExtendingChar(lineObj.text.charAt(ch))) { ++ch }
      var pos = PosWithInfo(lineNo, ch, outside, xDiff < -1 ? -1 : xDiff > 1 ? 1 : 0)
      return pos
    }
    var step = Math.ceil(dist / 2), middle = from + step
    if (bidi) {
      middle = from
      for (var i = 0; i < step; ++i) { middle = moveVisually(lineObj, middle, 1) }
    }
    var middleX = getX(middle)
    if (middleX > x) {to = middle; toX = middleX; if (toOutside = wrongLine) { toX += 1000; } dist = step}
    else {from = middle; fromX = middleX; fromOutside = wrongLine; dist -= step}
  }
}

var measureText
// Compute the default text height.
function textHeight(display) {
  if (display.cachedTextHeight != null) { return display.cachedTextHeight }
  if (measureText == null) {
    measureText = elt("pre")
    // Measure a bunch of lines, for browsers that compute
    // fractional heights.
    for (var i = 0; i < 49; ++i) {
      measureText.appendChild(document.createTextNode("x"))
      measureText.appendChild(elt("br"))
    }
    measureText.appendChild(document.createTextNode("x"))
  }
  removeChildrenAndAdd(display.measure, measureText)
  var height = measureText.offsetHeight / 50
  if (height > 3) { display.cachedTextHeight = height }
  removeChildren(display.measure)
  return height || 1
}

// Compute the default character width.
function charWidth(display) {
  if (display.cachedCharWidth != null) { return display.cachedCharWidth }
  var anchor = elt("span", "xxxxxxxxxx")
  var pre = elt("pre", [anchor])
  removeChildrenAndAdd(display.measure, pre)
  var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10
  if (width > 2) { display.cachedCharWidth = width }
  return width || 10
}

// Do a bulk-read of the DOM positions and sizes needed to draw the
// view, so that we don't interleave reading and writing to the DOM.
function getDimensions(cm) {
  var d = cm.display, left = {}, width = {}
  var gutterLeft = d.gutters.clientLeft
  for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
    left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft
    width[cm.options.gutters[i]] = n.clientWidth
  }
  return {fixedPos: compensateForHScroll(d),
          gutterTotalWidth: d.gutters.offsetWidth,
          gutterLeft: left,
          gutterWidth: width,
          wrapperWidth: d.wrapper.clientWidth}
}

// Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
// but using getBoundingClientRect to get a sub-pixel-accurate
// result.
function compensateForHScroll(display) {
  return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left
}

// Returns a function that estimates the height of a line, to use as
// first approximation until the line becomes visible (and is thus
// properly measurable).
function estimateHeight(cm) {
  var th = textHeight(cm.display), wrapping = cm.options.lineWrapping
  var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3)
  return function (line) {
    if (lineIsHidden(cm.doc, line)) { return 0 }

    var widgetsHeight = 0
    if (line.widgets) { for (var i = 0; i < line.widgets.length; i++) {
      if (line.widgets[i].height) { widgetsHeight += line.widgets[i].height }
    } }

    if (wrapping)
      { return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th }
    else
      { return widgetsHeight + th }
  }
}

function estimateLineHeights(cm) {
  var doc = cm.doc, est = estimateHeight(cm)
  doc.iter(function (line) {
    var estHeight = est(line)
    if (estHeight != line.height) { updateLineHeight(line, estHeight) }
  })
}

// Given a mouse event, find the corresponding position. If liberal
// is false, it checks whether a gutter or scrollbar was clicked,
// and returns null if it was. forRect is used by rectangular
// selections, and tries to estimate a character position even for
// coordinates beyond the right of the text.
function posFromMouse(cm, e, liberal, forRect) {
  var display = cm.display
  if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") { return null }

  var x, y, space = display.lineSpace.getBoundingClientRect()
  // Fails unpredictably on IE[67] when mouse is dragged around quickly.
  try { x = e.clientX - space.left; y = e.clientY - space.top }
  catch (e) { return null }
  var coords = coordsChar(cm, x, y), line
  if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
    var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length
    coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff))
  }
  return coords
}

// Find the view element corresponding to a given line. Return null
// when the line isn't visible.
function findViewIndex(cm, n) {
  if (n >= cm.display.viewTo) { return null }
  n -= cm.display.viewFrom
  if (n < 0) { return null }
  var view = cm.display.view
  for (var i = 0; i < view.length; i++) {
    n -= view[i].size
    if (n < 0) { return i }
  }
}

function updateSelection(cm) {
  cm.display.input.showSelection(cm.display.input.prepareSelection())
}

function prepareSelection(cm, primary) {
  var doc = cm.doc, result = {}
  var curFragment = result.cursors = document.createDocumentFragment()
  var selFragment = result.selection = document.createDocumentFragment()

  for (var i = 0; i < doc.sel.ranges.length; i++) {
    if (primary === false && i == doc.sel.primIndex) { continue }
    var range = doc.sel.ranges[i]
    if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) { continue }
    var collapsed = range.empty()
    if (collapsed || cm.options.showCursorWhenSelecting)
      { drawSelectionCursor(cm, range.head, curFragment) }
    if (!collapsed)
      { drawSelectionRange(cm, range, selFragment) }
  }
  return result
}

// Draws a cursor for the given range
function drawSelectionCursor(cm, head, output) {
  var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine)

  var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"))
  cursor.style.left = pos.left + "px"
  cursor.style.top = pos.top + "px"
  cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px"

  if (pos.other) {
    // Secondary cursor, shown when on a 'jump' in bi-directional text
    var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"))
    otherCursor.style.display = ""
    otherCursor.style.left = pos.other.left + "px"
    otherCursor.style.top = pos.other.top + "px"
    otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px"
  }
}

// Draws the given range as a highlighted selection
function drawSelectionRange(cm, range, output) {
  var display = cm.display, doc = cm.doc
  var fragment = document.createDocumentFragment()
  var padding = paddingH(cm.display), leftSide = padding.left
  var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right

  function add(left, top, width, bottom) {
    if (top < 0) { top = 0 }
    top = Math.round(top)
    bottom = Math.round(bottom)
    fragment.appendChild(elt("div", null, "CodeMirror-selected", ("position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px")))
  }

  function drawForLine(line, fromArg, toArg) {
    var lineObj = getLine(doc, line)
    var lineLen = lineObj.text.length
    var start, end
    function coords(ch, bias) {
      return charCoords(cm, Pos(line, ch), "div", lineObj, bias)
    }

    iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir) {
      var leftPos = coords(from, "left"), rightPos, left, right
      if (from == to) {
        rightPos = leftPos
        left = right = leftPos.left
      } else {
        rightPos = coords(to - 1, "right")
        if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp }
        left = leftPos.left
        right = rightPos.right
      }
      if (fromArg == null && from == 0) { left = leftSide }
      if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
        add(left, leftPos.top, null, leftPos.bottom)
        left = leftSide
        if (leftPos.bottom < rightPos.top) { add(left, leftPos.bottom, null, rightPos.top) }
      }
      if (toArg == null && to == lineLen) { right = rightSide }
      if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
        { start = leftPos }
      if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
        { end = rightPos }
      if (left < leftSide + 1) { left = leftSide }
      add(left, rightPos.top, right - left, rightPos.bottom)
    })
    return {start: start, end: end}
  }

  var sFrom = range.from(), sTo = range.to()
  if (sFrom.line == sTo.line) {
    drawForLine(sFrom.line, sFrom.ch, sTo.ch)
  } else {
    var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line)
    var singleVLine = visualLine(fromLine) == visualLine(toLine)
    var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end
    var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start
    if (singleVLine) {
      if (leftEnd.top < rightStart.top - 2) {
        add(leftEnd.right, leftEnd.top, null, leftEnd.bottom)
        add(leftSide, rightStart.top, rightStart.left, rightStart.bottom)
      } else {
        add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom)
      }
    }
    if (leftEnd.bottom < rightStart.top)
      { add(leftSide, leftEnd.bottom, null, rightStart.top) }
  }

  output.appendChild(fragment)
}

// Cursor-blinking
function restartBlink(cm) {
  if (!cm.state.focused) { return }
  var display = cm.display
  clearInterval(display.blinker)
  var on = true
  display.cursorDiv.style.visibility = ""
  if (cm.options.cursorBlinkRate > 0)
    { display.blinker = setInterval(function () { return display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden"; },
      cm.options.cursorBlinkRate) }
  else if (cm.options.cursorBlinkRate < 0)
    { display.cursorDiv.style.visibility = "hidden" }
}

function ensureFocus(cm) {
  if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm) }
}

function delayBlurEvent(cm) {
  cm.state.delayingBlurEvent = true
  setTimeout(function () { if (cm.state.delayingBlurEvent) {
    cm.state.delayingBlurEvent = false
    onBlur(cm)
  } }, 100)
}

function onFocus(cm, e) {
  if (cm.state.delayingBlurEvent) { cm.state.delayingBlurEvent = false }

  if (cm.options.readOnly == "nocursor") { return }
  if (!cm.state.focused) {
    signal(cm, "focus", cm, e)
    cm.state.focused = true
    addClass(cm.display.wrapper, "CodeMirror-focused")
    // This test prevents this from firing when a context
    // menu is closed (since the input reset would kill the
    // select-all detection hack)
    if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
      cm.display.input.reset()
      if (webkit) { setTimeout(function () { return cm.display.input.reset(true); }, 20) } // Issue #1730
    }
    cm.display.input.receivedFocus()
  }
  restartBlink(cm)
}
function onBlur(cm, e) {
  if (cm.state.delayingBlurEvent) { return }

  if (cm.state.focused) {
    signal(cm, "blur", cm, e)
    cm.state.focused = false
    rmClass(cm.display.wrapper, "CodeMirror-focused")
  }
  clearInterval(cm.display.blinker)
  setTimeout(function () { if (!cm.state.focused) { cm.display.shift = false } }, 150)
}

// Re-align line numbers and gutter marks to compensate for
// horizontal scrolling.
function alignHorizontally(cm) {
  var display = cm.display, view = display.view
  if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) { return }
  var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft
  var gutterW = display.gutters.offsetWidth, left = comp + "px"
  for (var i = 0; i < view.length; i++) { if (!view[i].hidden) {
    if (cm.options.fixedGutter) {
      if (view[i].gutter)
        { view[i].gutter.style.left = left }
      if (view[i].gutterBackground)
        { view[i].gutterBackground.style.left = left }
    }
    var align = view[i].alignable
    if (align) { for (var j = 0; j < align.length; j++)
      { align[j].style.left = left } }
  } }
  if (cm.options.fixedGutter)
    { display.gutters.style.left = (comp + gutterW) + "px" }
}

// Used to ensure that the line number gutter is still the right
// size for the current document size. Returns true when an update
// is needed.
function maybeUpdateLineNumberWidth(cm) {
  if (!cm.options.lineNumbers) { return false }
  var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display
  if (last.length != display.lineNumChars) {
    var test = display.measure.appendChild(elt("div", [elt("div", last)],
                                               "CodeMirror-linenumber CodeMirror-gutter-elt"))
    var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW
    display.lineGutter.style.width = ""
    display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1
    display.lineNumWidth = display.lineNumInnerWidth + padding
    display.lineNumChars = display.lineNumInnerWidth ? last.length : -1
    display.lineGutter.style.width = display.lineNumWidth + "px"
    updateGutterSpace(cm)
    return true
  }
  return false
}

// Read the actual heights of the rendered lines, and update their
// stored heights to match.
function updateHeightsInViewport(cm) {
  var display = cm.display
  var prevBottom = display.lineDiv.offsetTop
  for (var i = 0; i < display.view.length; i++) {
    var cur = display.view[i], height = (void 0)
    if (cur.hidden) { continue }
    if (ie && ie_version < 8) {
      var bot = cur.node.offsetTop + cur.node.offsetHeight
      height = bot - prevBottom
      prevBottom = bot
    } else {
      var box = cur.node.getBoundingClientRect()
      height = box.bottom - box.top
    }
    var diff = cur.line.height - height
    if (height < 2) { height = textHeight(display) }
    if (diff > .001 || diff < -.001) {
      updateLineHeight(cur.line, height)
      updateWidgetHeight(cur.line)
      if (cur.rest) { for (var j = 0; j < cur.rest.length; j++)
        { updateWidgetHeight(cur.rest[j]) } }
    }
  }
}

// Read and store the height of line widgets associated with the
// given line.
function updateWidgetHeight(line) {
  if (line.widgets) { for (var i = 0; i < line.widgets.length; ++i)
    { line.widgets[i].height = line.widgets[i].node.parentNode.offsetHeight } }
}

// Compute the lines that are visible in a given viewport (defaults
// the the current scroll position). viewport may contain top,
// height, and ensure (see op.scrollToPos) properties.
function visibleLines(display, doc, viewport) {
  var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop
  top = Math.floor(top - paddingTop(display))
  var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight

  var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom)
  // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
  // forces those lines into the viewport (if possible).
  if (viewport && viewport.ensure) {
    var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line
    if (ensureFrom < from) {
      from = ensureFrom
      to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight)
    } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
      from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight)
      to = ensureTo
    }
  }
  return {from: from, to: Math.max(to, from + 1)}
}

// Sync the scrollable area and scrollbars, ensure the viewport
// covers the visible area.
function setScrollTop(cm, val) {
  if (Math.abs(cm.doc.scrollTop - val) < 2) { return }
  cm.doc.scrollTop = val
  if (!gecko) { updateDisplaySimple(cm, {top: val}) }
  if (cm.display.scroller.scrollTop != val) { cm.display.scroller.scrollTop = val }
  cm.display.scrollbars.setScrollTop(val)
  if (gecko) { updateDisplaySimple(cm) }
  startWorker(cm, 100)
}
// Sync scroller and scrollbar, ensure the gutter elements are
// aligned.
function setScrollLeft(cm, val, isScroller) {
  if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) { return }
  val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth)
  cm.doc.scrollLeft = val
  alignHorizontally(cm)
  if (cm.display.scroller.scrollLeft != val) { cm.display.scroller.scrollLeft = val }
  cm.display.scrollbars.setScrollLeft(val)
}

// Since the delta values reported on mouse wheel events are
// unstandardized between browsers and even browser versions, and
// generally horribly unpredictable, this code starts by measuring
// the scroll effect that the first few mouse wheel events have,
// and, from that, detects the way it can convert deltas to pixel
// offsets afterwards.
//
// The reason we want to know the amount a wheel event will scroll
// is that it gives us a chance to update the display before the
// actual scrolling happens, reducing flickering.

var wheelSamples = 0;
var wheelPixelsPerUnit = null;
// Fill in a browser-detected starting value on browsers where we
// know one. These don't have to be accurate -- the result of them
// being wrong would just be a slight flicker on the first wheel
// scroll (if it is large enough).
if (ie) { wheelPixelsPerUnit = -.53 }
else if (gecko) { wheelPixelsPerUnit = 15 }
else if (chrome) { wheelPixelsPerUnit = -.7 }
else if (safari) { wheelPixelsPerUnit = -1/3 }

function wheelEventDelta(e) {
  var dx = e.wheelDeltaX, dy = e.wheelDeltaY
  if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) { dx = e.detail }
  if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) { dy = e.detail }
  else if (dy == null) { dy = e.wheelDelta }
  return {x: dx, y: dy}
}
function wheelEventPixels(e) {
  var delta = wheelEventDelta(e)
  delta.x *= wheelPixelsPerUnit
  delta.y *= wheelPixelsPerUnit
  return delta
}

function onScrollWheel(cm, e) {
  var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y

  var display = cm.display, scroll = display.scroller
  // Quit if there's nothing to scroll here
  var canScrollX = scroll.scrollWidth > scroll.clientWidth
  var canScrollY = scroll.scrollHeight > scroll.clientHeight
  if (!(dx && canScrollX || dy && canScrollY)) { return }

  // Webkit browsers on OS X abort momentum scrolls when the target
  // of the scroll event is removed from the scrollable element.
  // This hack (see related code in patchDisplay) makes sure the
  // element is kept around.
  if (dy && mac && webkit) {
    outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
      for (var i = 0; i < view.length; i++) {
        if (view[i].node == cur) {
          cm.display.currentWheelTarget = cur
          break outer
        }
      }
    }
  }

  // On some browsers, horizontal scrolling will cause redraws to
  // happen before the gutter has been realigned, causing it to
  // wriggle around in a most unseemly way. When we have an
  // estimated pixels/delta value, we just handle horizontal
  // scrolling entirely here. It'll be slightly off from native, but
  // better than glitching out.
  if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
    if (dy && canScrollY)
      { setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight))) }
    setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)))
    // Only prevent default scrolling if vertical scrolling is
    // actually possible. Otherwise, it causes vertical scroll
    // jitter on OSX trackpads when deltaX is small and deltaY
    // is large (issue #3579)
    if (!dy || (dy && canScrollY))
      { e_preventDefault(e) }
    display.wheelStartX = null // Abort measurement, if in progress
    return
  }

  // 'Project' the visible viewport to cover the area that is being
  // scrolled into view (if we know enough to estimate it).
  if (dy && wheelPixelsPerUnit != null) {
    var pixels = dy * wheelPixelsPerUnit
    var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight
    if (pixels < 0) { top = Math.max(0, top + pixels - 50) }
    else { bot = Math.min(cm.doc.height, bot + pixels + 50) }
    updateDisplaySimple(cm, {top: top, bottom: bot})
  }

  if (wheelSamples < 20) {
    if (display.wheelStartX == null) {
      display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop
      display.wheelDX = dx; display.wheelDY = dy
      setTimeout(function () {
        if (display.wheelStartX == null) { return }
        var movedX = scroll.scrollLeft - display.wheelStartX
        var movedY = scroll.scrollTop - display.wheelStartY
        var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
          (movedX && display.wheelDX && movedX / display.wheelDX)
        display.wheelStartX = display.wheelStartY = null
        if (!sample) { return }
        wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1)
        ++wheelSamples
      }, 200)
    } else {
      display.wheelDX += dx; display.wheelDY += dy
    }
  }
}

// SCROLLBARS

// Prepare DOM reads needed to update the scrollbars. Done in one
// shot to minimize update/measure roundtrips.
function measureForScrollbars(cm) {
  var d = cm.display, gutterW = d.gutters.offsetWidth
  var docH = Math.round(cm.doc.height + paddingVert(cm.display))
  return {
    clientHeight: d.scroller.clientHeight,
    viewHeight: d.wrapper.clientHeight,
    scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
    viewWidth: d.wrapper.clientWidth,
    barLeft: cm.options.fixedGutter ? gutterW : 0,
    docHeight: docH,
    scrollHeight: docH + scrollGap(cm) + d.barHeight,
    nativeBarWidth: d.nativeBarWidth,
    gutterWidth: gutterW
  }
}

var NativeScrollbars = function(place, scroll, cm) {
  this.cm = cm
  var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")
  var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar")
  place(vert); place(horiz)

  on(vert, "scroll", function () {
    if (vert.clientHeight) { scroll(vert.scrollTop, "vertical") }
  })
  on(horiz, "scroll", function () {
    if (horiz.clientWidth) { scroll(horiz.scrollLeft, "horizontal") }
  })

  this.checkedZeroWidth = false
  // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
  if (ie && ie_version < 8) { this.horiz.style.minHeight = this.vert.style.minWidth = "18px" }
};

NativeScrollbars.prototype.update = function (measure) {
  var needsH = measure.scrollWidth > measure.clientWidth + 1
  var needsV = measure.scrollHeight > measure.clientHeight + 1
  var sWidth = measure.nativeBarWidth

  if (needsV) {
    this.vert.style.display = "block"
    this.vert.style.bottom = needsH ? sWidth + "px" : "0"
    var totalHeight = measure.viewHeight - (needsH ? sWidth : 0)
    // A bug in IE8 can cause this value to be negative, so guard it.
    this.vert.firstChild.style.height =
      Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px"
  } else {
    this.vert.style.display = ""
    this.vert.firstChild.style.height = "0"
  }

  if (needsH) {
    this.horiz.style.display = "block"
    this.horiz.style.right = needsV ? sWidth + "px" : "0"
    this.horiz.style.left = measure.barLeft + "px"
    var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0)
    this.horiz.firstChild.style.width =
      (measure.scrollWidth - measure.clientWidth + totalWidth) + "px"
  } else {
    this.horiz.style.display = ""
    this.horiz.firstChild.style.width = "0"
  }

  if (!this.checkedZeroWidth && measure.clientHeight > 0) {
    if (sWidth == 0) { this.zeroWidthHack() }
    this.checkedZeroWidth = true
  }

  return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
};

NativeScrollbars.prototype.setScrollLeft = function (pos) {
  if (this.horiz.scrollLeft != pos) { this.horiz.scrollLeft = pos }
  if (this.disableHoriz) { this.enableZeroWidthBar(this.horiz, this.disableHoriz) }
};

NativeScrollbars.prototype.setScrollTop = function (pos) {
  if (this.vert.scrollTop != pos) { this.vert.scrollTop = pos }
  if (this.disableVert) { this.enableZeroWidthBar(this.vert, this.disableVert) }
};

NativeScrollbars.prototype.zeroWidthHack = function () {
  var w = mac && !mac_geMountainLion ? "12px" : "18px"
  this.horiz.style.height = this.vert.style.width = w
  this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none"
  this.disableHoriz = new Delayed
  this.disableVert = new Delayed
};

NativeScrollbars.prototype.enableZeroWidthBar = function (bar, delay) {
  bar.style.pointerEvents = "auto"
  function maybeDisable() {
    // To find out whether the scrollbar is still visible, we
    // check whether the element under the pixel in the bottom
    // left corner of the scrollbar box is the scrollbar box
    // itself (when the bar is still visible) or its filler child
    // (when the bar is hidden). If it is still visible, we keep
    // it enabled, if it's hidden, we disable pointer events.
    var box = bar.getBoundingClientRect()
    var elt = document.elementFromPoint(box.left + 1, box.bottom - 1)
    if (elt != bar) { bar.style.pointerEvents = "none" }
    else { delay.set(1000, maybeDisable) }
  }
  delay.set(1000, maybeDisable)
};

NativeScrollbars.prototype.clear = function () {
  var parent = this.horiz.parentNode
  parent.removeChild(this.horiz)
  parent.removeChild(this.vert)
};

var NullScrollbars = function () {};

NullScrollbars.prototype.update = function () { return {bottom: 0, right: 0} };
NullScrollbars.prototype.setScrollLeft = function () {};
NullScrollbars.prototype.setScrollTop = function () {};
NullScrollbars.prototype.clear = function () {};

function updateScrollbars(cm, measure) {
  if (!measure) { measure = measureForScrollbars(cm) }
  var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight
  updateScrollbarsInner(cm, measure)
  for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
    if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
      { updateHeightsInViewport(cm) }
    updateScrollbarsInner(cm, measureForScrollbars(cm))
    startWidth = cm.display.barWidth; startHeight = cm.display.barHeight
  }
}

// Re-synchronize the fake scrollbars with the actual size of the
// content.
function updateScrollbarsInner(cm, measure) {
  var d = cm.display
  var sizes = d.scrollbars.update(measure)

  d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px"
  d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px"
  d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent"

  if (sizes.right && sizes.bottom) {
    d.scrollbarFiller.style.display = "block"
    d.scrollbarFiller.style.height = sizes.bottom + "px"
    d.scrollbarFiller.style.width = sizes.right + "px"
  } else { d.scrollbarFiller.style.display = "" }
  if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
    d.gutterFiller.style.display = "block"
    d.gutterFiller.style.height = sizes.bottom + "px"
    d.gutterFiller.style.width = measure.gutterWidth + "px"
  } else { d.gutterFiller.style.display = "" }
}

var scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars}

function initScrollbars(cm) {
  if (cm.display.scrollbars) {
    cm.display.scrollbars.clear()
    if (cm.display.scrollbars.addClass)
      { rmClass(cm.display.wrapper, cm.display.scrollbars.addClass) }
  }

  cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
    cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller)
    // Prevent clicks in the scrollbars from killing focus
    on(node, "mousedown", function () {
      if (cm.state.focused) { setTimeout(function () { return cm.display.input.focus(); }, 0) }
    })
    node.setAttribute("cm-not-content", "true")
  }, function (pos, axis) {
    if (axis == "horizontal") { setScrollLeft(cm, pos) }
    else { setScrollTop(cm, pos) }
  }, cm)
  if (cm.display.scrollbars.addClass)
    { addClass(cm.display.wrapper, cm.display.scrollbars.addClass) }
}

// SCROLLING THINGS INTO VIEW

// If an editor sits on the top or bottom of the window, partially
// scrolled out of view, this ensures that the cursor is visible.
function maybeScrollWindow(cm, coords) {
  if (signalDOMEvent(cm, "scrollCursorIntoView")) { return }

  var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null
  if (coords.top + box.top < 0) { doScroll = true }
  else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) { doScroll = false }
  if (doScroll != null && !phantom) {
    var scrollNode = elt("div", "\u200b", null, ("position: absolute;\n                         top: " + (coords.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (coords.bottom - coords.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + (coords.left) + "px; width: 2px;"))
    cm.display.lineSpace.appendChild(scrollNode)
    scrollNode.scrollIntoView(doScroll)
    cm.display.lineSpace.removeChild(scrollNode)
  }
}

// Scroll a given position into view (immediately), verifying that
// it actually became visible (as line heights are accurately
// measured, the position of something may 'drift' during drawing).
function scrollPosIntoView(cm, pos, end, margin) {
  if (margin == null) { margin = 0 }
  var coords
  for (var limit = 0; limit < 5; limit++) {
    var changed = false
    coords = cursorCoords(cm, pos)
    var endCoords = !end || end == pos ? coords : cursorCoords(cm, end)
    var scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left),
                                       Math.min(coords.top, endCoords.top) - margin,
                                       Math.max(coords.left, endCoords.left),
                                       Math.max(coords.bottom, endCoords.bottom) + margin)
    var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft
    if (scrollPos.scrollTop != null) {
      setScrollTop(cm, scrollPos.scrollTop)
      if (Math.abs(cm.doc.scrollTop - startTop) > 1) { changed = true }
    }
    if (scrollPos.scrollLeft != null) {
      setScrollLeft(cm, scrollPos.scrollLeft)
      if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) { changed = true }
    }
    if (!changed) { break }
  }
  return coords
}

// Scroll a given set of coordinates into view (immediately).
function scrollIntoView(cm, x1, y1, x2, y2) {
  var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2)
  if (scrollPos.scrollTop != null) { setScrollTop(cm, scrollPos.scrollTop) }
  if (scrollPos.scrollLeft != null) { setScrollLeft(cm, scrollPos.scrollLeft) }
}

// Calculate a new scroll position needed to scroll the given
// rectangle into view. Returns an object with scrollTop and
// scrollLeft properties. When these are undefined, the
// vertical/horizontal position does not need to be adjusted.
function calculateScrollPos(cm, x1, y1, x2, y2) {
  var display = cm.display, snapMargin = textHeight(cm.display)
  if (y1 < 0) { y1 = 0 }
  var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop
  var screen = displayHeight(cm), result = {}
  if (y2 - y1 > screen) { y2 = y1 + screen }
  var docBottom = cm.doc.height + paddingVert(display)
  var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin
  if (y1 < screentop) {
    result.scrollTop = atTop ? 0 : y1
  } else if (y2 > screentop + screen) {
    var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen)
    if (newTop != screentop) { result.scrollTop = newTop }
  }

  var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft
  var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0)
  var tooWide = x2 - x1 > screenw
  if (tooWide) { x2 = x1 + screenw }
  if (x1 < 10)
    { result.scrollLeft = 0 }
  else if (x1 < screenleft)
    { result.scrollLeft = Math.max(0, x1 - (tooWide ? 0 : 10)) }
  else if (x2 > screenw + screenleft - 3)
    { result.scrollLeft = x2 + (tooWide ? 0 : 10) - screenw }
  return result
}

// Store a relative adjustment to the scroll position in the current
// operation (to be applied when the operation finishes).
function addToScrollPos(cm, left, top) {
  if (left != null || top != null) { resolveScrollToPos(cm) }
  if (left != null)
    { cm.curOp.scrollLeft = (cm.curOp.scrollLeft == null ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left }
  if (top != null)
    { cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top }
}

// Make sure that at the end of the operation the current cursor is
// shown.
function ensureCursorVisible(cm) {
  resolveScrollToPos(cm)
  var cur = cm.getCursor(), from = cur, to = cur
  if (!cm.options.lineWrapping) {
    from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur
    to = Pos(cur.line, cur.ch + 1)
  }
  cm.curOp.scrollToPos = {from: from, to: to, margin: cm.options.cursorScrollMargin, isCursor: true}
}

// When an operation has its scrollToPos property set, and another
// scroll action is applied before the end of the operation, this
// 'simulates' scrolling that position into view in a cheap way, so
// that the effect of intermediate scroll commands is not ignored.
function resolveScrollToPos(cm) {
  var range = cm.curOp.scrollToPos
  if (range) {
    cm.curOp.scrollToPos = null
    var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to)
    var sPos = calculateScrollPos(cm, Math.min(from.left, to.left),
                                  Math.min(from.top, to.top) - range.margin,
                                  Math.max(from.right, to.right),
                                  Math.max(from.bottom, to.bottom) + range.margin)
    cm.scrollTo(sPos.scrollLeft, sPos.scrollTop)
  }
}

// Operations are used to wrap a series of changes to the editor
// state in such a way that each change won't have to update the
// cursor and display (which would be awkward, slow, and
// error-prone). Instead, display updates are batched and then all
// combined and executed at once.

var nextOpId = 0
// Start a new operation.
function startOperation(cm) {
  cm.curOp = {
    cm: cm,
    viewChanged: false,      // Flag that indicates that lines might need to be redrawn
    startHeight: cm.doc.height, // Used to detect need to update scrollbar
    forceUpdate: false,      // Used to force a redraw
    updateInput: null,       // Whether to reset the input textarea
    typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
    changeObjs: null,        // Accumulated changes, for firing change events
    cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
    cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
    selectionChanged: false, // Whether the selection needs to be redrawn
    updateMaxLine: false,    // Set when the widest line needs to be determined anew
    scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
    scrollToPos: null,       // Used to scroll to a specific position
    focus: false,
    id: ++nextOpId           // Unique ID
  }
  pushOperation(cm.curOp)
}

// Finish an operation, updating the display and signalling delayed events
function endOperation(cm) {
  var op = cm.curOp
  finishOperation(op, function (group) {
    for (var i = 0; i < group.ops.length; i++)
      { group.ops[i].cm.curOp = null }
    endOperations(group)
  })
}

// The DOM updates done when an operation finishes are batched so
// that the minimum number of relayouts are required.
function endOperations(group) {
  var ops = group.ops
  for (var i = 0; i < ops.length; i++) // Read DOM
    { endOperation_R1(ops[i]) }
  for (var i$1 = 0; i$1 < ops.length; i$1++) // Write DOM (maybe)
    { endOperation_W1(ops[i$1]) }
  for (var i$2 = 0; i$2 < ops.length; i$2++) // Read DOM
    { endOperation_R2(ops[i$2]) }
  for (var i$3 = 0; i$3 < ops.length; i$3++) // Write DOM (maybe)
    { endOperation_W2(ops[i$3]) }
  for (var i$4 = 0; i$4 < ops.length; i$4++) // Read DOM
    { endOperation_finish(ops[i$4]) }
}

function endOperation_R1(op) {
  var cm = op.cm, display = cm.display
  maybeClipScrollbars(cm)
  if (op.updateMaxLine) { findMaxLine(cm) }

  op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
    op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
                       op.scrollToPos.to.line >= display.viewTo) ||
    display.maxLineChanged && cm.options.lineWrapping
  op.update = op.mustUpdate &&
    new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate)
}

function endOperation_W1(op) {
  op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update)
}

function endOperation_R2(op) {
  var cm = op.cm, display = cm.display
  if (op.updatedDisplay) { updateHeightsInViewport(cm) }

  op.barMeasure = measureForScrollbars(cm)

  // If the max line changed since it was last measured, measure it,
  // and ensure the document's width matches it.
  // updateDisplay_W2 will use these properties to do the actual resizing
  if (display.maxLineChanged && !cm.options.lineWrapping) {
    op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3
    cm.display.sizerWidth = op.adjustWidthTo
    op.barMeasure.scrollWidth =
      Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth)
    op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm))
  }

  if (op.updatedDisplay || op.selectionChanged)
    { op.preparedSelection = display.input.prepareSelection(op.focus) }
}

function endOperation_W2(op) {
  var cm = op.cm

  if (op.adjustWidthTo != null) {
    cm.display.sizer.style.minWidth = op.adjustWidthTo + "px"
    if (op.maxScrollLeft < cm.doc.scrollLeft)
      { setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true) }
    cm.display.maxLineChanged = false
  }

  var takeFocus = op.focus && op.focus == activeElt() && (!document.hasFocus || document.hasFocus())
  if (op.preparedSelection)
    { cm.display.input.showSelection(op.preparedSelection, takeFocus) }
  if (op.updatedDisplay || op.startHeight != cm.doc.height)
    { updateScrollbars(cm, op.barMeasure) }
  if (op.updatedDisplay)
    { setDocumentHeight(cm, op.barMeasure) }

  if (op.selectionChanged) { restartBlink(cm) }

  if (cm.state.focused && op.updateInput)
    { cm.display.input.reset(op.typing) }
  if (takeFocus) { ensureFocus(op.cm) }
}

function endOperation_finish(op) {
  var cm = op.cm, display = cm.display, doc = cm.doc

  if (op.updatedDisplay) { postUpdateDisplay(cm, op.update) }

  // Abort mouse wheel delta measurement, when scrolling explicitly
  if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
    { display.wheelStartX = display.wheelStartY = null }

  // Propagate the scroll position to the actual DOM scroller
  if (op.scrollTop != null && (display.scroller.scrollTop != op.scrollTop || op.forceScroll)) {
    doc.scrollTop = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop))
    display.scrollbars.setScrollTop(doc.scrollTop)
    display.scroller.scrollTop = doc.scrollTop
  }
  if (op.scrollLeft != null && (display.scroller.scrollLeft != op.scrollLeft || op.forceScroll)) {
    doc.scrollLeft = Math.max(0, Math.min(display.scroller.scrollWidth - display.scroller.clientWidth, op.scrollLeft))
    display.scrollbars.setScrollLeft(doc.scrollLeft)
    display.scroller.scrollLeft = doc.scrollLeft
    alignHorizontally(cm)
  }
  // If we need to scroll a specific position into view, do so.
  if (op.scrollToPos) {
    var coords = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
                                   clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin)
    if (op.scrollToPos.isCursor && cm.state.focused) { maybeScrollWindow(cm, coords) }
  }

  // Fire events for markers that are hidden/unidden by editing or
  // undoing
  var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers
  if (hidden) { for (var i = 0; i < hidden.length; ++i)
    { if (!hidden[i].lines.length) { signal(hidden[i], "hide") } } }
  if (unhidden) { for (var i$1 = 0; i$1 < unhidden.length; ++i$1)
    { if (unhidden[i$1].lines.length) { signal(unhidden[i$1], "unhide") } } }

  if (display.wrapper.offsetHeight)
    { doc.scrollTop = cm.display.scroller.scrollTop }

  // Fire change events, and delayed event handlers
  if (op.changeObjs)
    { signal(cm, "changes", cm, op.changeObjs) }
  if (op.update)
    { op.update.finish() }
}

// Run the given function in an operation
function runInOp(cm, f) {
  if (cm.curOp) { return f() }
  startOperation(cm)
  try { return f() }
  finally { endOperation(cm) }
}
// Wraps a function in an operation. Returns the wrapped function.
function operation(cm, f) {
  return function() {
    if (cm.curOp) { return f.apply(cm, arguments) }
    startOperation(cm)
    try { return f.apply(cm, arguments) }
    finally { endOperation(cm) }
  }
}
// Used to add methods to editor and doc instances, wrapping them in
// operations.
function methodOp(f) {
  return function() {
    if (this.curOp) { return f.apply(this, arguments) }
    startOperation(this)
    try { return f.apply(this, arguments) }
    finally { endOperation(this) }
  }
}
function docMethodOp(f) {
  return function() {
    var cm = this.cm
    if (!cm || cm.curOp) { return f.apply(this, arguments) }
    startOperation(cm)
    try { return f.apply(this, arguments) }
    finally { endOperation(cm) }
  }
}

// Updates the display.view data structure for a given change to the
// document. From and to are in pre-change coordinates. Lendiff is
// the amount of lines added or subtracted by the change. This is
// used for changes that span multiple lines, or change the way
// lines are divided into visual lines. regLineChange (below)
// registers single-line changes.
function regChange(cm, from, to, lendiff) {
  if (from == null) { from = cm.doc.first }
  if (to == null) { to = cm.doc.first + cm.doc.size }
  if (!lendiff) { lendiff = 0 }

  var display = cm.display
  if (lendiff && to < display.viewTo &&
      (display.updateLineNumbers == null || display.updateLineNumbers > from))
    { display.updateLineNumbers = from }

  cm.curOp.viewChanged = true

  if (from >= display.viewTo) { // Change after
    if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
      { resetView(cm) }
  } else if (to <= display.viewFrom) { // Change before
    if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
      resetView(cm)
    } else {
      display.viewFrom += lendiff
      display.viewTo += lendiff
    }
  } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
    resetView(cm)
  } else if (from <= display.viewFrom) { // Top overlap
    var cut = viewCuttingPoint(cm, to, to + lendiff, 1)
    if (cut) {
      display.view = display.view.slice(cut.index)
      display.viewFrom = cut.lineN
      display.viewTo += lendiff
    } else {
      resetView(cm)
    }
  } else if (to >= display.viewTo) { // Bottom overlap
    var cut$1 = viewCuttingPoint(cm, from, from, -1)
    if (cut$1) {
      display.view = display.view.slice(0, cut$1.index)
      display.viewTo = cut$1.lineN
    } else {
      resetView(cm)
    }
  } else { // Gap in the middle
    var cutTop = viewCuttingPoint(cm, from, from, -1)
    var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1)
    if (cutTop && cutBot) {
      display.view = display.view.slice(0, cutTop.index)
        .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
        .concat(display.view.slice(cutBot.index))
      display.viewTo += lendiff
    } else {
      resetView(cm)
    }
  }

  var ext = display.externalMeasured
  if (ext) {
    if (to < ext.lineN)
      { ext.lineN += lendiff }
    else if (from < ext.lineN + ext.size)
      { display.externalMeasured = null }
  }
}

// Register a change to a single line. Type must be one of "text",
// "gutter", "class", "widget"
function regLineChange(cm, line, type) {
  cm.curOp.viewChanged = true
  var display = cm.display, ext = cm.display.externalMeasured
  if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
    { display.externalMeasured = null }

  if (line < display.viewFrom || line >= display.viewTo) { return }
  var lineView = display.view[findViewIndex(cm, line)]
  if (lineView.node == null) { return }
  var arr = lineView.changes || (lineView.changes = [])
  if (indexOf(arr, type) == -1) { arr.push(type) }
}

// Clear the view.
function resetView(cm) {
  cm.display.viewFrom = cm.display.viewTo = cm.doc.first
  cm.display.view = []
  cm.display.viewOffset = 0
}

function viewCuttingPoint(cm, oldN, newN, dir) {
  var index = findViewIndex(cm, oldN), diff, view = cm.display.view
  if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
    { return {index: index, lineN: newN} }
  var n = cm.display.viewFrom
  for (var i = 0; i < index; i++)
    { n += view[i].size }
  if (n != oldN) {
    if (dir > 0) {
      if (index == view.length - 1) { return null }
      diff = (n + view[index].size) - oldN
      index++
    } else {
      diff = n - oldN
    }
    oldN += diff; newN += diff
  }
  while (visualLineNo(cm.doc, newN) != newN) {
    if (index == (dir < 0 ? 0 : view.length - 1)) { return null }
    newN += dir * view[index - (dir < 0 ? 1 : 0)].size
    index += dir
  }
  return {index: index, lineN: newN}
}

// Force the view to cover a given range, adding empty view element
// or clipping off existing ones as needed.
function adjustView(cm, from, to) {
  var display = cm.display, view = display.view
  if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
    display.view = buildViewArray(cm, from, to)
    display.viewFrom = from
  } else {
    if (display.viewFrom > from)
      { display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view) }
    else if (display.viewFrom < from)
      { display.view = display.view.slice(findViewIndex(cm, from)) }
    display.viewFrom = from
    if (display.viewTo < to)
      { display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)) }
    else if (display.viewTo > to)
      { display.view = display.view.slice(0, findViewIndex(cm, to)) }
  }
  display.viewTo = to
}

// Count the number of lines in the view whose DOM representation is
// out of date (or nonexistent).
function countDirtyView(cm) {
  var view = cm.display.view, dirty = 0
  for (var i = 0; i < view.length; i++) {
    var lineView = view[i]
    if (!lineView.hidden && (!lineView.node || lineView.changes)) { ++dirty }
  }
  return dirty
}

// HIGHLIGHT WORKER

function startWorker(cm, time) {
  if (cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo)
    { cm.state.highlight.set(time, bind(highlightWorker, cm)) }
}

function highlightWorker(cm) {
  var doc = cm.doc
  if (doc.frontier < doc.first) { doc.frontier = doc.first }
  if (doc.frontier >= cm.display.viewTo) { return }
  var end = +new Date + cm.options.workTime
  var state = copyState(doc.mode, getStateBefore(cm, doc.frontier))
  var changedLines = []

  doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
    if (doc.frontier >= cm.display.viewFrom) { // Visible
      var oldStyles = line.styles, tooLong = line.text.length > cm.options.maxHighlightLength
      var highlighted = highlightLine(cm, line, tooLong ? copyState(doc.mode, state) : state, true)
      line.styles = highlighted.styles
      var oldCls = line.styleClasses, newCls = highlighted.classes
      if (newCls) { line.styleClasses = newCls }
      else if (oldCls) { line.styleClasses = null }
      var ischange = !oldStyles || oldStyles.length != line.styles.length ||
        oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass)
      for (var i = 0; !ischange && i < oldStyles.length; ++i) { ischange = oldStyles[i] != line.styles[i] }
      if (ischange) { changedLines.push(doc.frontier) }
      line.stateAfter = tooLong ? state : copyState(doc.mode, state)
    } else {
      if (line.text.length <= cm.options.maxHighlightLength)
        { processLine(cm, line.text, state) }
      line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null
    }
    ++doc.frontier
    if (+new Date > end) {
      startWorker(cm, cm.options.workDelay)
      return true
    }
  })
  if (changedLines.length) { runInOp(cm, function () {
    for (var i = 0; i < changedLines.length; i++)
      { regLineChange(cm, changedLines[i], "text") }
  }) }
}

// DISPLAY DRAWING

var DisplayUpdate = function(cm, viewport, force) {
  var display = cm.display

  this.viewport = viewport
  // Store some values that we'll need later (but don't want to force a relayout for)
  this.visible = visibleLines(display, cm.doc, viewport)
  this.editorIsHidden = !display.wrapper.offsetWidth
  this.wrapperHeight = display.wrapper.clientHeight
  this.wrapperWidth = display.wrapper.clientWidth
  this.oldDisplayWidth = displayWidth(cm)
  this.force = force
  this.dims = getDimensions(cm)
  this.events = []
};

DisplayUpdate.prototype.signal = function (emitter, type) {
  if (hasHandler(emitter, type))
    { this.events.push(arguments) }
};
DisplayUpdate.prototype.finish = function () {
    var this$1 = this;

  for (var i = 0; i < this.events.length; i++)
    { signal.apply(null, this$1.events[i]) }
};

function maybeClipScrollbars(cm) {
  var display = cm.display
  if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
    display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth
    display.heightForcer.style.height = scrollGap(cm) + "px"
    display.sizer.style.marginBottom = -display.nativeBarWidth + "px"
    display.sizer.style.borderRightWidth = scrollGap(cm) + "px"
    display.scrollbarsClipped = true
  }
}

// Does the actual updating of the line display. Bails out
// (returning false) when there is nothing to be done and forced is
// false.
function updateDisplayIfNeeded(cm, update) {
  var display = cm.display, doc = cm.doc

  if (update.editorIsHidden) {
    resetView(cm)
    return false
  }

  // Bail out if the visible area is already rendered and nothing changed.
  if (!update.force &&
      update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
      display.renderedView == display.view && countDirtyView(cm) == 0)
    { return false }

  if (maybeUpdateLineNumberWidth(cm)) {
    resetView(cm)
    update.dims = getDimensions(cm)
  }

  // Compute a suitable new viewport (from & to)
  var end = doc.first + doc.size
  var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first)
  var to = Math.min(end, update.visible.to + cm.options.viewportMargin)
  if (display.viewFrom < from && from - display.viewFrom < 20) { from = Math.max(doc.first, display.viewFrom) }
  if (display.viewTo > to && display.viewTo - to < 20) { to = Math.min(end, display.viewTo) }
  if (sawCollapsedSpans) {
    from = visualLineNo(cm.doc, from)
    to = visualLineEndNo(cm.doc, to)
  }

  var different = from != display.viewFrom || to != display.viewTo ||
    display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth
  adjustView(cm, from, to)

  display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom))
  // Position the mover div to align with the current scroll position
  cm.display.mover.style.top = display.viewOffset + "px"

  var toUpdate = countDirtyView(cm)
  if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
    { return false }

  // For big changes, we hide the enclosing element during the
  // update, since that speeds up the operations on most browsers.
  var focused = activeElt()
  if (toUpdate > 4) { display.lineDiv.style.display = "none" }
  patchDisplay(cm, display.updateLineNumbers, update.dims)
  if (toUpdate > 4) { display.lineDiv.style.display = "" }
  display.renderedView = display.view
  // There might have been a widget with a focused element that got
  // hidden or updated, if so re-focus it.
  if (focused && activeElt() != focused && focused.offsetHeight) { focused.focus() }

  // Prevent selection and cursors from interfering with the scroll
  // width and height.
  removeChildren(display.cursorDiv)
  removeChildren(display.selectionDiv)
  display.gutters.style.height = display.sizer.style.minHeight = 0

  if (different) {
    display.lastWrapHeight = update.wrapperHeight
    display.lastWrapWidth = update.wrapperWidth
    startWorker(cm, 400)
  }

  display.updateLineNumbers = null

  return true
}

function postUpdateDisplay(cm, update) {
  var viewport = update.viewport

  for (var first = true;; first = false) {
    if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
      // Clip forced viewport to actual scrollable area.
      if (viewport && viewport.top != null)
        { viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)} }
      // Updated line heights might result in the drawn area not
      // actually covering the viewport. Keep looping until it does.
      update.visible = visibleLines(cm.display, cm.doc, viewport)
      if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
        { break }
    }
    if (!updateDisplayIfNeeded(cm, update)) { break }
    updateHeightsInViewport(cm)
    var barMeasure = measureForScrollbars(cm)
    updateSelection(cm)
    updateScrollbars(cm, barMeasure)
    setDocumentHeight(cm, barMeasure)
  }

  update.signal(cm, "update", cm)
  if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
    update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo)
    cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo
  }
}

function updateDisplaySimple(cm, viewport) {
  var update = new DisplayUpdate(cm, viewport)
  if (updateDisplayIfNeeded(cm, update)) {
    updateHeightsInViewport(cm)
    postUpdateDisplay(cm, update)
    var barMeasure = measureForScrollbars(cm)
    updateSelection(cm)
    updateScrollbars(cm, barMeasure)
    setDocumentHeight(cm, barMeasure)
    update.finish()
  }
}

// Sync the actual display DOM structure with display.view, removing
// nodes for lines that are no longer in view, and creating the ones
// that are not there yet, and updating the ones that are out of
// date.
function patchDisplay(cm, updateNumbersFrom, dims) {
  var display = cm.display, lineNumbers = cm.options.lineNumbers
  var container = display.lineDiv, cur = container.firstChild

  function rm(node) {
    var next = node.nextSibling
    // Works around a throw-scroll bug in OS X Webkit
    if (webkit && mac && cm.display.currentWheelTarget == node)
      { node.style.display = "none" }
    else
      { node.parentNode.removeChild(node) }
    return next
  }

  var view = display.view, lineN = display.viewFrom
  // Loop over the elements in the view, syncing cur (the DOM nodes
  // in display.lineDiv) with the view as we go.
  for (var i = 0; i < view.length; i++) {
    var lineView = view[i]
    if (lineView.hidden) {
    } else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
      var node = buildLineElement(cm, lineView, lineN, dims)
      container.insertBefore(node, cur)
    } else { // Already drawn
      while (cur != lineView.node) { cur = rm(cur) }
      var updateNumber = lineNumbers && updateNumbersFrom != null &&
        updateNumbersFrom <= lineN && lineView.lineNumber
      if (lineView.changes) {
        if (indexOf(lineView.changes, "gutter") > -1) { updateNumber = false }
        updateLineForChanges(cm, lineView, lineN, dims)
      }
      if (updateNumber) {
        removeChildren(lineView.lineNumber)
        lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)))
      }
      cur = lineView.node.nextSibling
    }
    lineN += lineView.size
  }
  while (cur) { cur = rm(cur) }
}

function updateGutterSpace(cm) {
  var width = cm.display.gutters.offsetWidth
  cm.display.sizer.style.marginLeft = width + "px"
}

function setDocumentHeight(cm, measure) {
  cm.display.sizer.style.minHeight = measure.docHeight + "px"
  cm.display.heightForcer.style.top = measure.docHeight + "px"
  cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px"
}

// Rebuild the gutter elements, ensure the margin to the left of the
// code matches their width.
function updateGutters(cm) {
  var gutters = cm.display.gutters, specs = cm.options.gutters
  removeChildren(gutters)
  var i = 0
  for (; i < specs.length; ++i) {
    var gutterClass = specs[i]
    var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass))
    if (gutterClass == "CodeMirror-linenumbers") {
      cm.display.lineGutter = gElt
      gElt.style.width = (cm.display.lineNumWidth || 1) + "px"
    }
  }
  gutters.style.display = i ? "" : "none"
  updateGutterSpace(cm)
}

// Make sure the gutters options contains the element
// "CodeMirror-linenumbers" when the lineNumbers option is true.
function setGuttersForLineNumbers(options) {
  var found = indexOf(options.gutters, "CodeMirror-linenumbers")
  if (found == -1 && options.lineNumbers) {
    options.gutters = options.gutters.concat(["CodeMirror-linenumbers"])
  } else if (found > -1 && !options.lineNumbers) {
    options.gutters = options.gutters.slice(0)
    options.gutters.splice(found, 1)
  }
}

// Selection objects are immutable. A new one is created every time
// the selection changes. A selection is one or more non-overlapping
// (and non-touching) ranges, sorted, and an integer that indicates
// which one is the primary selection (the one that's scrolled into
// view, that getCursor returns, etc).
function Selection(ranges, primIndex) {
  this.ranges = ranges
  this.primIndex = primIndex
}

Selection.prototype = {
  primary: function() { return this.ranges[this.primIndex] },
  equals: function(other) {
    var this$1 = this;

    if (other == this) { return true }
    if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) { return false }
    for (var i = 0; i < this.ranges.length; i++) {
      var here = this$1.ranges[i], there = other.ranges[i]
      if (cmp(here.anchor, there.anchor) != 0 || cmp(here.head, there.head) != 0) { return false }
    }
    return true
  },
  deepCopy: function() {
    var this$1 = this;

    var out = []
    for (var i = 0; i < this.ranges.length; i++)
      { out[i] = new Range(copyPos(this$1.ranges[i].anchor), copyPos(this$1.ranges[i].head)) }
    return new Selection(out, this.primIndex)
  },
  somethingSelected: function() {
    var this$1 = this;

    for (var i = 0; i < this.ranges.length; i++)
      { if (!this$1.ranges[i].empty()) { return true } }
    return false
  },
  contains: function(pos, end) {
    var this$1 = this;

    if (!end) { end = pos }
    for (var i = 0; i < this.ranges.length; i++) {
      var range = this$1.ranges[i]
      if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
        { return i }
    }
    return -1
  }
}

function Range(anchor, head) {
  this.anchor = anchor; this.head = head
}

Range.prototype = {
  from: function() { return minPos(this.anchor, this.head) },
  to: function() { return maxPos(this.anchor, this.head) },
  empty: function() {
    return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
  }
}

// Take an unsorted, potentially overlapping set of ranges, and
// build a selection out of it. 'Consumes' ranges array (modifying
// it).
function normalizeSelection(ranges, primIndex) {
  var prim = ranges[primIndex]
  ranges.sort(function (a, b) { return cmp(a.from(), b.from()); })
  primIndex = indexOf(ranges, prim)
  for (var i = 1; i < ranges.length; i++) {
    var cur = ranges[i], prev = ranges[i - 1]
    if (cmp(prev.to(), cur.from()) >= 0) {
      var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to())
      var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head
      if (i <= primIndex) { --primIndex }
      ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to))
    }
  }
  return new Selection(ranges, primIndex)
}

function simpleSelection(anchor, head) {
  return new Selection([new Range(anchor, head || anchor)], 0)
}

// Compute the position of the end of a change (its 'to' property
// refers to the pre-change end).
function changeEnd(change) {
  if (!change.text) { return change.to }
  return Pos(change.from.line + change.text.length - 1,
             lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0))
}

// Adjust a position to refer to the post-change position of the
// same text, or the end of the change if the change covers it.
function adjustForChange(pos, change) {
  if (cmp(pos, change.from) < 0) { return pos }
  if (cmp(pos, change.to) <= 0) { return changeEnd(change) }

  var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch
  if (pos.line == change.to.line) { ch += changeEnd(change).ch - change.to.ch }
  return Pos(line, ch)
}

function computeSelAfterChange(doc, change) {
  var out = []
  for (var i = 0; i < doc.sel.ranges.length; i++) {
    var range = doc.sel.ranges[i]
    out.push(new Range(adjustForChange(range.anchor, change),
                       adjustForChange(range.head, change)))
  }
  return normalizeSelection(out, doc.sel.primIndex)
}

function offsetPos(pos, old, nw) {
  if (pos.line == old.line)
    { return Pos(nw.line, pos.ch - old.ch + nw.ch) }
  else
    { return Pos(nw.line + (pos.line - old.line), pos.ch) }
}

// Used by replaceSelections to allow moving the selection to the
// start or around the replaced test. Hint may be "start" or "around".
function computeReplacedSel(doc, changes, hint) {
  var out = []
  var oldPrev = Pos(doc.first, 0), newPrev = oldPrev
  for (var i = 0; i < changes.length; i++) {
    var change = changes[i]
    var from = offsetPos(change.from, oldPrev, newPrev)
    var to = offsetPos(changeEnd(change), oldPrev, newPrev)
    oldPrev = change.to
    newPrev = to
    if (hint == "around") {
      var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0
      out[i] = new Range(inv ? to : from, inv ? from : to)
    } else {
      out[i] = new Range(from, from)
    }
  }
  return new Selection(out, doc.sel.primIndex)
}

// Used to get the editor into a consistent state again when options change.

function loadMode(cm) {
  cm.doc.mode = getMode(cm.options, cm.doc.modeOption)
  resetModeState(cm)
}

function resetModeState(cm) {
  cm.doc.iter(function (line) {
    if (line.stateAfter) { line.stateAfter = null }
    if (line.styles) { line.styles = null }
  })
  cm.doc.frontier = cm.doc.first
  startWorker(cm, 100)
  cm.state.modeGen++
  if (cm.curOp) { regChange(cm) }
}

// DOCUMENT DATA STRUCTURE

// By default, updates that start and end at the beginning of a line
// are treated specially, in order to make the association of line
// widgets and marker elements with the text behave more intuitive.
function isWholeLineUpdate(doc, change) {
  return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
    (!doc.cm || doc.cm.options.wholeLineUpdateBefore)
}

// Perform a change on the document data structure.
function updateDoc(doc, change, markedSpans, estimateHeight) {
  function spansFor(n) {return markedSpans ? markedSpans[n] : null}
  function update(line, text, spans) {
    updateLine(line, text, spans, estimateHeight)
    signalLater(line, "change", line, change)
  }
  function linesFor(start, end) {
    var result = []
    for (var i = start; i < end; ++i)
      { result.push(new Line(text[i], spansFor(i), estimateHeight)) }
    return result
  }

  var from = change.from, to = change.to, text = change.text
  var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line)
  var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line

  // Adjust the line structure
  if (change.full) {
    doc.insert(0, linesFor(0, text.length))
    doc.remove(text.length, doc.size - text.length)
  } else if (isWholeLineUpdate(doc, change)) {
    // This is a whole-line replace. Treated specially to make
    // sure line objects move the way they are supposed to.
    var added = linesFor(0, text.length - 1)
    update(lastLine, lastLine.text, lastSpans)
    if (nlines) { doc.remove(from.line, nlines) }
    if (added.length) { doc.insert(from.line, added) }
  } else if (firstLine == lastLine) {
    if (text.length == 1) {
      update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans)
    } else {
      var added$1 = linesFor(1, text.length - 1)
      added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight))
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0))
      doc.insert(from.line + 1, added$1)
    }
  } else if (text.length == 1) {
    update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0))
    doc.remove(from.line + 1, nlines)
  } else {
    update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0))
    update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans)
    var added$2 = linesFor(1, text.length - 1)
    if (nlines > 1) { doc.remove(from.line + 1, nlines - 1) }
    doc.insert(from.line + 1, added$2)
  }

  signalLater(doc, "change", doc, change)
}

// Call f for all linked documents.
function linkedDocs(doc, f, sharedHistOnly) {
  function propagate(doc, skip, sharedHist) {
    if (doc.linked) { for (var i = 0; i < doc.linked.length; ++i) {
      var rel = doc.linked[i]
      if (rel.doc == skip) { continue }
      var shared = sharedHist && rel.sharedHist
      if (sharedHistOnly && !shared) { continue }
      f(rel.doc, shared)
      propagate(rel.doc, doc, shared)
    } }
  }
  propagate(doc, null, true)
}

// Attach a document to an editor.
function attachDoc(cm, doc) {
  if (doc.cm) { throw new Error("This document is already in use.") }
  cm.doc = doc
  doc.cm = cm
  estimateLineHeights(cm)
  loadMode(cm)
  if (!cm.options.lineWrapping) { findMaxLine(cm) }
  cm.options.mode = doc.modeOption
  regChange(cm)
}

function History(startGen) {
  // Arrays of change events and selections. Doing something adds an
  // event to done and clears undo. Undoing moves events from done
  // to undone, redoing moves them in the other direction.
  this.done = []; this.undone = []
  this.undoDepth = Infinity
  // Used to track when changes can be merged into a single undo
  // event
  this.lastModTime = this.lastSelTime = 0
  this.lastOp = this.lastSelOp = null
  this.lastOrigin = this.lastSelOrigin = null
  // Used by the isClean() method
  this.generation = this.maxGeneration = startGen || 1
}

// Create a history change event from an updateDoc-style change
// object.
function historyChangeFromChange(doc, change) {
  var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)}
  attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1)
  linkedDocs(doc, function (doc) { return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1); }, true)
  return histChange
}

// Pop all selection events off the end of a history array. Stop at
// a change event.
function clearSelectionEvents(array) {
  while (array.length) {
    var last = lst(array)
    if (last.ranges) { array.pop() }
    else { break }
  }
}

// Find the top change event in the history. Pop off selection
// events that are in the way.
function lastChangeEvent(hist, force) {
  if (force) {
    clearSelectionEvents(hist.done)
    return lst(hist.done)
  } else if (hist.done.length && !lst(hist.done).ranges) {
    return lst(hist.done)
  } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
    hist.done.pop()
    return lst(hist.done)
  }
}

// Register a change in the history. Merges changes that are within
// a single operation, or are close together with an origin that
// allows merging (starting with "+") into a single event.
function addChangeToHistory(doc, change, selAfter, opId) {
  var hist = doc.history
  hist.undone.length = 0
  var time = +new Date, cur
  var last

  if ((hist.lastOp == opId ||
       hist.lastOrigin == change.origin && change.origin &&
       ((change.origin.charAt(0) == "+" && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay) ||
        change.origin.charAt(0) == "*")) &&
      (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
    // Merge this change into the last event
    last = lst(cur.changes)
    if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
      // Optimized case for simple insertion -- don't want to add
      // new changesets for every character typed
      last.to = changeEnd(change)
    } else {
      // Add new sub-event
      cur.changes.push(historyChangeFromChange(doc, change))
    }
  } else {
    // Can not be merged, start a new event.
    var before = lst(hist.done)
    if (!before || !before.ranges)
      { pushSelectionToHistory(doc.sel, hist.done) }
    cur = {changes: [historyChangeFromChange(doc, change)],
           generation: hist.generation}
    hist.done.push(cur)
    while (hist.done.length > hist.undoDepth) {
      hist.done.shift()
      if (!hist.done[0].ranges) { hist.done.shift() }
    }
  }
  hist.done.push(selAfter)
  hist.generation = ++hist.maxGeneration
  hist.lastModTime = hist.lastSelTime = time
  hist.lastOp = hist.lastSelOp = opId
  hist.lastOrigin = hist.lastSelOrigin = change.origin

  if (!last) { signal(doc, "historyAdded") }
}

function selectionEventCanBeMerged(doc, origin, prev, sel) {
  var ch = origin.charAt(0)
  return ch == "*" ||
    ch == "+" &&
    prev.ranges.length == sel.ranges.length &&
    prev.somethingSelected() == sel.somethingSelected() &&
    new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500)
}

// Called whenever the selection changes, sets the new selection as
// the pending selection in the history, and pushes the old pending
// selection into the 'done' array when it was significantly
// different (in number of selected ranges, emptiness, or time).
function addSelectionToHistory(doc, sel, opId, options) {
  var hist = doc.history, origin = options && options.origin

  // A new event is started when the previous origin does not match
  // the current, or the origins don't allow matching. Origins
  // starting with * are always merged, those starting with + are
  // merged when similar and close together in time.
  if (opId == hist.lastSelOp ||
      (origin && hist.lastSelOrigin == origin &&
       (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
        selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
    { hist.done[hist.done.length - 1] = sel }
  else
    { pushSelectionToHistory(sel, hist.done) }

  hist.lastSelTime = +new Date
  hist.lastSelOrigin = origin
  hist.lastSelOp = opId
  if (options && options.clearRedo !== false)
    { clearSelectionEvents(hist.undone) }
}

function pushSelectionToHistory(sel, dest) {
  var top = lst(dest)
  if (!(top && top.ranges && top.equals(sel)))
    { dest.push(sel) }
}

// Used to store marked span information in the history.
function attachLocalSpans(doc, change, from, to) {
  var existing = change["spans_" + doc.id], n = 0
  doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
    if (line.markedSpans)
      { (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans }
    ++n
  })
}

// When un/re-doing restores text containing marked spans, those
// that have been explicitly cleared should not be restored.
function removeClearedSpans(spans) {
  if (!spans) { return null }
  var out
  for (var i = 0; i < spans.length; ++i) {
    if (spans[i].marker.explicitlyCleared) { if (!out) { out = spans.slice(0, i) } }
    else if (out) { out.push(spans[i]) }
  }
  return !out ? spans : out.length ? out : null
}

// Retrieve and filter the old marked spans stored in a change event.
function getOldSpans(doc, change) {
  var found = change["spans_" + doc.id]
  if (!found) { return null }
  var nw = []
  for (var i = 0; i < change.text.length; ++i)
    { nw.push(removeClearedSpans(found[i])) }
  return nw
}

// Used for un/re-doing changes from the history. Combines the
// result of computing the existing spans with the set of spans that
// existed in the history (so that deleting around a span and then
// undoing brings back the span).
function mergeOldSpans(doc, change) {
  var old = getOldSpans(doc, change)
  var stretched = stretchSpansOverChange(doc, change)
  if (!old) { return stretched }
  if (!stretched) { return old }

  for (var i = 0; i < old.length; ++i) {
    var oldCur = old[i], stretchCur = stretched[i]
    if (oldCur && stretchCur) {
      spans: for (var j = 0; j < stretchCur.length; ++j) {
        var span = stretchCur[j]
        for (var k = 0; k < oldCur.length; ++k)
          { if (oldCur[k].marker == span.marker) { continue spans } }
        oldCur.push(span)
      }
    } else if (stretchCur) {
      old[i] = stretchCur
    }
  }
  return old
}

// Used both to provide a JSON-safe object in .getHistory, and, when
// detaching a document, to split the history in two
function copyHistoryArray(events, newGroup, instantiateSel) {
  var copy = []
  for (var i = 0; i < events.length; ++i) {
    var event = events[i]
    if (event.ranges) {
      copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event)
      continue
    }
    var changes = event.changes, newChanges = []
    copy.push({changes: newChanges})
    for (var j = 0; j < changes.length; ++j) {
      var change = changes[j], m = (void 0)
      newChanges.push({from: change.from, to: change.to, text: change.text})
      if (newGroup) { for (var prop in change) { if (m = prop.match(/^spans_(\d+)$/)) {
        if (indexOf(newGroup, Number(m[1])) > -1) {
          lst(newChanges)[prop] = change[prop]
          delete change[prop]
        }
      } } }
    }
  }
  return copy
}

// The 'scroll' parameter given to many of these indicated whether
// the new cursor position should be scrolled into view after
// modifying the selection.

// If shift is held or the extend flag is set, extends a range to
// include a given position (and optionally a second position).
// Otherwise, simply returns the range between the given positions.
// Used for cursor motion and such.
function extendRange(doc, range, head, other) {
  if (doc.cm && doc.cm.display.shift || doc.extend) {
    var anchor = range.anchor
    if (other) {
      var posBefore = cmp(head, anchor) < 0
      if (posBefore != (cmp(other, anchor) < 0)) {
        anchor = head
        head = other
      } else if (posBefore != (cmp(head, other) < 0)) {
        head = other
      }
    }
    return new Range(anchor, head)
  } else {
    return new Range(other || head, head)
  }
}

// Extend the primary selection range, discard the rest.
function extendSelection(doc, head, other, options) {
  setSelection(doc, new Selection([extendRange(doc, doc.sel.primary(), head, other)], 0), options)
}

// Extend all selections (pos is an array of selections with length
// equal the number of selections)
function extendSelections(doc, heads, options) {
  var out = []
  for (var i = 0; i < doc.sel.ranges.length; i++)
    { out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null) }
  var newSel = normalizeSelection(out, doc.sel.primIndex)
  setSelection(doc, newSel, options)
}

// Updates a single range in the selection.
function replaceOneSelection(doc, i, range, options) {
  var ranges = doc.sel.ranges.slice(0)
  ranges[i] = range
  setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options)
}

// Reset the selection to a single range.
function setSimpleSelection(doc, anchor, head, options) {
  setSelection(doc, simpleSelection(anchor, head), options)
}

// Give beforeSelectionChange handlers a change to influence a
// selection update.
function filterSelectionChange(doc, sel, options) {
  var obj = {
    ranges: sel.ranges,
    update: function(ranges) {
      var this$1 = this;

      this.ranges = []
      for (var i = 0; i < ranges.length; i++)
        { this$1.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
                                   clipPos(doc, ranges[i].head)) }
    },
    origin: options && options.origin
  }
  signal(doc, "beforeSelectionChange", doc, obj)
  if (doc.cm) { signal(doc.cm, "beforeSelectionChange", doc.cm, obj) }
  if (obj.ranges != sel.ranges) { return normalizeSelection(obj.ranges, obj.ranges.length - 1) }
  else { return sel }
}

function setSelectionReplaceHistory(doc, sel, options) {
  var done = doc.history.done, last = lst(done)
  if (last && last.ranges) {
    done[done.length - 1] = sel
    setSelectionNoUndo(doc, sel, options)
  } else {
    setSelection(doc, sel, options)
  }
}

// Set a new selection.
function setSelection(doc, sel, options) {
  setSelectionNoUndo(doc, sel, options)
  addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options)
}

function setSelectionNoUndo(doc, sel, options) {
  if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
    { sel = filterSelectionChange(doc, sel, options) }

  var bias = options && options.bias ||
    (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1)
  setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true))

  if (!(options && options.scroll === false) && doc.cm)
    { ensureCursorVisible(doc.cm) }
}

function setSelectionInner(doc, sel) {
  if (sel.equals(doc.sel)) { return }

  doc.sel = sel

  if (doc.cm) {
    doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true
    signalCursorActivity(doc.cm)
  }
  signalLater(doc, "cursorActivity", doc)
}

// Verify that the selection does not partially select any atomic
// marked ranges.
function reCheckSelection(doc) {
  setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false), sel_dontScroll)
}

// Return a selection that does not partially select any atomic
// ranges.
function skipAtomicInSelection(doc, sel, bias, mayClear) {
  var out
  for (var i = 0; i < sel.ranges.length; i++) {
    var range = sel.ranges[i]
    var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i]
    var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear)
    var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear)
    if (out || newAnchor != range.anchor || newHead != range.head) {
      if (!out) { out = sel.ranges.slice(0, i) }
      out[i] = new Range(newAnchor, newHead)
    }
  }
  return out ? normalizeSelection(out, sel.primIndex) : sel
}

function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
  var line = getLine(doc, pos.line)
  if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
    var sp = line.markedSpans[i], m = sp.marker
    if ((sp.from == null || (m.inclusiveLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
        (sp.to == null || (m.inclusiveRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
      if (mayClear) {
        signal(m, "beforeCursorEnter")
        if (m.explicitlyCleared) {
          if (!line.markedSpans) { break }
          else {--i; continue}
        }
      }
      if (!m.atomic) { continue }

      if (oldPos) {
        var near = m.find(dir < 0 ? 1 : -1), diff = (void 0)
        if (dir < 0 ? m.inclusiveRight : m.inclusiveLeft)
          { near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null) }
        if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
          { return skipAtomicInner(doc, near, pos, dir, mayClear) }
      }

      var far = m.find(dir < 0 ? -1 : 1)
      if (dir < 0 ? m.inclusiveLeft : m.inclusiveRight)
        { far = movePos(doc, far, dir, far.line == pos.line ? line : null) }
      return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null
    }
  } }
  return pos
}

// Ensure a given position is not inside an atomic range.
function skipAtomic(doc, pos, oldPos, bias, mayClear) {
  var dir = bias || 1
  var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
      (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
      skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
      (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true))
  if (!found) {
    doc.cantEdit = true
    return Pos(doc.first, 0)
  }
  return found
}

function movePos(doc, pos, dir, line) {
  if (dir < 0 && pos.ch == 0) {
    if (pos.line > doc.first) { return clipPos(doc, Pos(pos.line - 1)) }
    else { return null }
  } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
    if (pos.line < doc.first + doc.size - 1) { return Pos(pos.line + 1, 0) }
    else { return null }
  } else {
    return new Pos(pos.line, pos.ch + dir)
  }
}

function selectAll(cm) {
  cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll)
}

// UPDATING

// Allow "beforeChange" event handlers to influence a change
function filterChange(doc, change, update) {
  var obj = {
    canceled: false,
    from: change.from,
    to: change.to,
    text: change.text,
    origin: change.origin,
    cancel: function () { return obj.canceled = true; }
  }
  if (update) { obj.update = function (from, to, text, origin) {
    if (from) { obj.from = clipPos(doc, from) }
    if (to) { obj.to = clipPos(doc, to) }
    if (text) { obj.text = text }
    if (origin !== undefined) { obj.origin = origin }
  } }
  signal(doc, "beforeChange", doc, obj)
  if (doc.cm) { signal(doc.cm, "beforeChange", doc.cm, obj) }

  if (obj.canceled) { return null }
  return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin}
}

// Apply a change to a document, and add it to the document's
// history, and propagating it to all linked documents.
function makeChange(doc, change, ignoreReadOnly) {
  if (doc.cm) {
    if (!doc.cm.curOp) { return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly) }
    if (doc.cm.state.suppressEdits) { return }
  }

  if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
    change = filterChange(doc, change, true)
    if (!change) { return }
  }

  // Possibly split or suppress the update based on the presence
  // of read-only spans in its range.
  var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to)
  if (split) {
    for (var i = split.length - 1; i >= 0; --i)
      { makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text}) }
  } else {
    makeChangeInner(doc, change)
  }
}

function makeChangeInner(doc, change) {
  if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) { return }
  var selAfter = computeSelAfterChange(doc, change)
  addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN)

  makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change))
  var rebased = []

  linkedDocs(doc, function (doc, sharedHist) {
    if (!sharedHist && indexOf(rebased, doc.history) == -1) {
      rebaseHist(doc.history, change)
      rebased.push(doc.history)
    }
    makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change))
  })
}

// Revert a change stored in a document's history.
function makeChangeFromHistory(doc, type, allowSelectionOnly) {
  if (doc.cm && doc.cm.state.suppressEdits && !allowSelectionOnly) { return }

  var hist = doc.history, event, selAfter = doc.sel
  var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done

  // Verify that there is a useable event (so that ctrl-z won't
  // needlessly clear selection events)
  var i = 0
  for (; i < source.length; i++) {
    event = source[i]
    if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
      { break }
  }
  if (i == source.length) { return }
  hist.lastOrigin = hist.lastSelOrigin = null

  for (;;) {
    event = source.pop()
    if (event.ranges) {
      pushSelectionToHistory(event, dest)
      if (allowSelectionOnly && !event.equals(doc.sel)) {
        setSelection(doc, event, {clearRedo: false})
        return
      }
      selAfter = event
    }
    else { break }
  }

  // Build up a reverse change object to add to the opposite history
  // stack (redo when undoing, and vice versa).
  var antiChanges = []
  pushSelectionToHistory(selAfter, dest)
  dest.push({changes: antiChanges, generation: hist.generation})
  hist.generation = event.generation || ++hist.maxGeneration

  var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")

  var loop = function ( i ) {
    var change = event.changes[i]
    change.origin = type
    if (filter && !filterChange(doc, change, false)) {
      source.length = 0
      return {}
    }

    antiChanges.push(historyChangeFromChange(doc, change))

    var after = i ? computeSelAfterChange(doc, change) : lst(source)
    makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change))
    if (!i && doc.cm) { doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)}) }
    var rebased = []

    // Propagate to the linked documents
    linkedDocs(doc, function (doc, sharedHist) {
      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
        rebaseHist(doc.history, change)
        rebased.push(doc.history)
      }
      makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change))
    })
  };

  for (var i$1 = event.changes.length - 1; i$1 >= 0; --i$1) {
    var returned = loop( i$1 );

    if ( returned ) return returned.v;
  }
}

// Sub-views need their line numbers shifted when text is added
// above or below them in the parent document.
function shiftDoc(doc, distance) {
  if (distance == 0) { return }
  doc.first += distance
  doc.sel = new Selection(map(doc.sel.ranges, function (range) { return new Range(
    Pos(range.anchor.line + distance, range.anchor.ch),
    Pos(range.head.line + distance, range.head.ch)
  ); }), doc.sel.primIndex)
  if (doc.cm) {
    regChange(doc.cm, doc.first, doc.first - distance, distance)
    for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
      { regLineChange(doc.cm, l, "gutter") }
  }
}

// More lower-level change function, handling only a single document
// (not linked ones).
function makeChangeSingleDoc(doc, change, selAfter, spans) {
  if (doc.cm && !doc.cm.curOp)
    { return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans) }

  if (change.to.line < doc.first) {
    shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line))
    return
  }
  if (change.from.line > doc.lastLine()) { return }

  // Clip the change to the size of this doc
  if (change.from.line < doc.first) {
    var shift = change.text.length - 1 - (doc.first - change.from.line)
    shiftDoc(doc, shift)
    change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
              text: [lst(change.text)], origin: change.origin}
  }
  var last = doc.lastLine()
  if (change.to.line > last) {
    change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
              text: [change.text[0]], origin: change.origin}
  }

  change.removed = getBetween(doc, change.from, change.to)

  if (!selAfter) { selAfter = computeSelAfterChange(doc, change) }
  if (doc.cm) { makeChangeSingleDocInEditor(doc.cm, change, spans) }
  else { updateDoc(doc, change, spans) }
  setSelectionNoUndo(doc, selAfter, sel_dontScroll)
}

// Handle the interaction of a change to a document with the editor
// that this document is part of.
function makeChangeSingleDocInEditor(cm, change, spans) {
  var doc = cm.doc, display = cm.display, from = change.from, to = change.to

  var recomputeMaxLength = false, checkWidthStart = from.line
  if (!cm.options.lineWrapping) {
    checkWidthStart = lineNo(visualLine(getLine(doc, from.line)))
    doc.iter(checkWidthStart, to.line + 1, function (line) {
      if (line == display.maxLine) {
        recomputeMaxLength = true
        return true
      }
    })
  }

  if (doc.sel.contains(change.from, change.to) > -1)
    { signalCursorActivity(cm) }

  updateDoc(doc, change, spans, estimateHeight(cm))

  if (!cm.options.lineWrapping) {
    doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
      var len = lineLength(line)
      if (len > display.maxLineLength) {
        display.maxLine = line
        display.maxLineLength = len
        display.maxLineChanged = true
        recomputeMaxLength = false
      }
    })
    if (recomputeMaxLength) { cm.curOp.updateMaxLine = true }
  }

  // Adjust frontier, schedule worker
  doc.frontier = Math.min(doc.frontier, from.line)
  startWorker(cm, 400)

  var lendiff = change.text.length - (to.line - from.line) - 1
  // Remember that these lines changed, for updating the display
  if (change.full)
    { regChange(cm) }
  else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
    { regLineChange(cm, from.line, "text") }
  else
    { regChange(cm, from.line, to.line + 1, lendiff) }

  var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change")
  if (changeHandler || changesHandler) {
    var obj = {
      from: from, to: to,
      text: change.text,
      removed: change.removed,
      origin: change.origin
    }
    if (changeHandler) { signalLater(cm, "change", cm, obj) }
    if (changesHandler) { (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj) }
  }
  cm.display.selForContextMenu = null
}

function replaceRange(doc, code, from, to, origin) {
  if (!to) { to = from }
  if (cmp(to, from) < 0) { var tmp = to; to = from; from = tmp }
  if (typeof code == "string") { code = doc.splitLines(code) }
  makeChange(doc, {from: from, to: to, text: code, origin: origin})
}

// Rebasing/resetting history to deal with externally-sourced changes

function rebaseHistSelSingle(pos, from, to, diff) {
  if (to < pos.line) {
    pos.line += diff
  } else if (from < pos.line) {
    pos.line = from
    pos.ch = 0
  }
}

// Tries to rebase an array of history events given a change in the
// document. If the change touches the same lines as the event, the
// event, and everything 'behind' it, is discarded. If the change is
// before the event, the event's positions are updated. Uses a
// copy-on-write scheme for the positions, to avoid having to
// reallocate them all on every rebase, but also avoid problems with
// shared position objects being unsafely updated.
function rebaseHistArray(array, from, to, diff) {
  for (var i = 0; i < array.length; ++i) {
    var sub = array[i], ok = true
    if (sub.ranges) {
      if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true }
      for (var j = 0; j < sub.ranges.length; j++) {
        rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff)
        rebaseHistSelSingle(sub.ranges[j].head, from, to, diff)
      }
      continue
    }
    for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
      var cur = sub.changes[j$1]
      if (to < cur.from.line) {
        cur.from = Pos(cur.from.line + diff, cur.from.ch)
        cur.to = Pos(cur.to.line + diff, cur.to.ch)
      } else if (from <= cur.to.line) {
        ok = false
        break
      }
    }
    if (!ok) {
      array.splice(0, i + 1)
      i = 0
    }
  }
}

function rebaseHist(hist, change) {
  var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1
  rebaseHistArray(hist.done, from, to, diff)
  rebaseHistArray(hist.undone, from, to, diff)
}

// Utility for applying a change to a line by handle or number,
// returning the number and optionally registering the line as
// changed.
function changeLine(doc, handle, changeType, op) {
  var no = handle, line = handle
  if (typeof handle == "number") { line = getLine(doc, clipLine(doc, handle)) }
  else { no = lineNo(handle) }
  if (no == null) { return null }
  if (op(line, no) && doc.cm) { regLineChange(doc.cm, no, changeType) }
  return line
}

// The document is represented as a BTree consisting of leaves, with
// chunk of lines in them, and branches, with up to ten leaves or
// other branch nodes below them. The top node is always a branch
// node, and is the document object itself (meaning it has
// additional methods and properties).
//
// All nodes have parent links. The tree is used both to go from
// line numbers to line objects, and to go from objects to numbers.
// It also indexes by height, and is used to convert between height
// and line object, and to find the total height of the document.
//
// See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

function LeafChunk(lines) {
  var this$1 = this;

  this.lines = lines
  this.parent = null
  var height = 0
  for (var i = 0; i < lines.length; ++i) {
    lines[i].parent = this$1
    height += lines[i].height
  }
  this.height = height
}

LeafChunk.prototype = {
  chunkSize: function() { return this.lines.length },
  // Remove the n lines at offset 'at'.
  removeInner: function(at, n) {
    var this$1 = this;

    for (var i = at, e = at + n; i < e; ++i) {
      var line = this$1.lines[i]
      this$1.height -= line.height
      cleanUpLine(line)
      signalLater(line, "delete")
    }
    this.lines.splice(at, n)
  },
  // Helper used to collapse a small branch into a single leaf.
  collapse: function(lines) {
    lines.push.apply(lines, this.lines)
  },
  // Insert the given array of lines at offset 'at', count them as
  // having the given height.
  insertInner: function(at, lines, height) {
    var this$1 = this;

    this.height += height
    this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at))
    for (var i = 0; i < lines.length; ++i) { lines[i].parent = this$1 }
  },
  // Used to iterate over a part of the tree.
  iterN: function(at, n, op) {
    var this$1 = this;

    for (var e = at + n; at < e; ++at)
      { if (op(this$1.lines[at])) { return true } }
  }
}

function BranchChunk(children) {
  var this$1 = this;

  this.children = children
  var size = 0, height = 0
  for (var i = 0; i < children.length; ++i) {
    var ch = children[i]
    size += ch.chunkSize(); height += ch.height
    ch.parent = this$1
  }
  this.size = size
  this.height = height
  this.parent = null
}

BranchChunk.prototype = {
  chunkSize: function() { return this.size },
  removeInner: function(at, n) {
    var this$1 = this;

    this.size -= n
    for (var i = 0; i < this.children.length; ++i) {
      var child = this$1.children[i], sz = child.chunkSize()
      if (at < sz) {
        var rm = Math.min(n, sz - at), oldHeight = child.height
        child.removeInner(at, rm)
        this$1.height -= oldHeight - child.height
        if (sz == rm) { this$1.children.splice(i--, 1); child.parent = null }
        if ((n -= rm) == 0) { break }
        at = 0
      } else { at -= sz }
    }
    // If the result is smaller than 25 lines, ensure that it is a
    // single leaf node.
    if (this.size - n < 25 &&
        (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
      var lines = []
      this.collapse(lines)
      this.children = [new LeafChunk(lines)]
      this.children[0].parent = this
    }
  },
  collapse: function(lines) {
    var this$1 = this;

    for (var i = 0; i < this.children.length; ++i) { this$1.children[i].collapse(lines) }
  },
  insertInner: function(at, lines, height) {
    var this$1 = this;

    this.size += lines.length
    this.height += height
    for (var i = 0; i < this.children.length; ++i) {
      var child = this$1.children[i], sz = child.chunkSize()
      if (at <= sz) {
        child.insertInner(at, lines, height)
        if (child.lines && child.lines.length > 50) {
          // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
          // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
          var remaining = child.lines.length % 25 + 25
          for (var pos = remaining; pos < child.lines.length;) {
            var leaf = new LeafChunk(child.lines.slice(pos, pos += 25))
            child.height -= leaf.height
            this$1.children.splice(++i, 0, leaf)
            leaf.parent = this$1
          }
          child.lines = child.lines.slice(0, remaining)
          this$1.maybeSpill()
        }
        break
      }
      at -= sz
    }
  },
  // When a node has grown, check whether it should be split.
  maybeSpill: function() {
    if (this.children.length <= 10) { return }
    var me = this
    do {
      var spilled = me.children.splice(me.children.length - 5, 5)
      var sibling = new BranchChunk(spilled)
      if (!me.parent) { // Become the parent node
        var copy = new BranchChunk(me.children)
        copy.parent = me
        me.children = [copy, sibling]
        me = copy
     } else {
        me.size -= sibling.size
        me.height -= sibling.height
        var myIndex = indexOf(me.parent.children, me)
        me.parent.children.splice(myIndex + 1, 0, sibling)
      }
      sibling.parent = me.parent
    } while (me.children.length > 10)
    me.parent.maybeSpill()
  },
  iterN: function(at, n, op) {
    var this$1 = this;

    for (var i = 0; i < this.children.length; ++i) {
      var child = this$1.children[i], sz = child.chunkSize()
      if (at < sz) {
        var used = Math.min(n, sz - at)
        if (child.iterN(at, used, op)) { return true }
        if ((n -= used) == 0) { break }
        at = 0
      } else { at -= sz }
    }
  }
}

// Line widgets are block elements displayed above or below a line.

function LineWidget(doc, node, options) {
  var this$1 = this;

  if (options) { for (var opt in options) { if (options.hasOwnProperty(opt))
    { this$1[opt] = options[opt] } } }
  this.doc = doc
  this.node = node
}
eventMixin(LineWidget)

function adjustScrollWhenAboveVisible(cm, line, diff) {
  if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
    { addToScrollPos(cm, null, diff) }
}

LineWidget.prototype.clear = function() {
  var this$1 = this;

  var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line)
  if (no == null || !ws) { return }
  for (var i = 0; i < ws.length; ++i) { if (ws[i] == this$1) { ws.splice(i--, 1) } }
  if (!ws.length) { line.widgets = null }
  var height = widgetHeight(this)
  updateLineHeight(line, Math.max(0, line.height - height))
  if (cm) { runInOp(cm, function () {
    adjustScrollWhenAboveVisible(cm, line, -height)
    regLineChange(cm, no, "widget")
  }) }
}
LineWidget.prototype.changed = function() {
  var oldH = this.height, cm = this.doc.cm, line = this.line
  this.height = null
  var diff = widgetHeight(this) - oldH
  if (!diff) { return }
  updateLineHeight(line, line.height + diff)
  if (cm) { runInOp(cm, function () {
    cm.curOp.forceUpdate = true
    adjustScrollWhenAboveVisible(cm, line, diff)
  }) }
}

function addLineWidget(doc, handle, node, options) {
  var widget = new LineWidget(doc, node, options)
  var cm = doc.cm
  if (cm && widget.noHScroll) { cm.display.alignWidgets = true }
  changeLine(doc, handle, "widget", function (line) {
    var widgets = line.widgets || (line.widgets = [])
    if (widget.insertAt == null) { widgets.push(widget) }
    else { widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget) }
    widget.line = line
    if (cm && !lineIsHidden(doc, line)) {
      var aboveVisible = heightAtLine(line) < doc.scrollTop
      updateLineHeight(line, line.height + widgetHeight(widget))
      if (aboveVisible) { addToScrollPos(cm, null, widget.height) }
      cm.curOp.forceUpdate = true
    }
    return true
  })
  return widget
}

// TEXTMARKERS

// Created with markText and setBookmark methods. A TextMarker is a
// handle that can be used to clear or find a marked position in the
// document. Line objects hold arrays (markedSpans) containing
// {from, to, marker} object pointing to such marker objects, and
// indicating that such a marker is present on that line. Multiple
// lines may point to the same marker when it spans across lines.
// The spans will have null for their from/to properties when the
// marker continues beyond the start/end of the line. Markers have
// links back to the lines they currently touch.

// Collapsed markers have unique ids, in order to be able to order
// them, which is needed for uniquely determining an outer marker
// when they overlap (they may nest, but not partially overlap).
var nextMarkerId = 0

function TextMarker(doc, type) {
  this.lines = []
  this.type = type
  this.doc = doc
  this.id = ++nextMarkerId
}
eventMixin(TextMarker)

// Clear the marker.
TextMarker.prototype.clear = function() {
  var this$1 = this;

  if (this.explicitlyCleared) { return }
  var cm = this.doc.cm, withOp = cm && !cm.curOp
  if (withOp) { startOperation(cm) }
  if (hasHandler(this, "clear")) {
    var found = this.find()
    if (found) { signalLater(this, "clear", found.from, found.to) }
  }
  var min = null, max = null
  for (var i = 0; i < this.lines.length; ++i) {
    var line = this$1.lines[i]
    var span = getMarkedSpanFor(line.markedSpans, this$1)
    if (cm && !this$1.collapsed) { regLineChange(cm, lineNo(line), "text") }
    else if (cm) {
      if (span.to != null) { max = lineNo(line) }
      if (span.from != null) { min = lineNo(line) }
    }
    line.markedSpans = removeMarkedSpan(line.markedSpans, span)
    if (span.from == null && this$1.collapsed && !lineIsHidden(this$1.doc, line) && cm)
      { updateLineHeight(line, textHeight(cm.display)) }
  }
  if (cm && this.collapsed && !cm.options.lineWrapping) { for (var i$1 = 0; i$1 < this.lines.length; ++i$1) {
    var visual = visualLine(this$1.lines[i$1]), len = lineLength(visual)
    if (len > cm.display.maxLineLength) {
      cm.display.maxLine = visual
      cm.display.maxLineLength = len
      cm.display.maxLineChanged = true
    }
  } }

  if (min != null && cm && this.collapsed) { regChange(cm, min, max + 1) }
  this.lines.length = 0
  this.explicitlyCleared = true
  if (this.atomic && this.doc.cantEdit) {
    this.doc.cantEdit = false
    if (cm) { reCheckSelection(cm.doc) }
  }
  if (cm) { signalLater(cm, "markerCleared", cm, this) }
  if (withOp) { endOperation(cm) }
  if (this.parent) { this.parent.clear() }
}

// Find the position of the marker in the document. Returns a {from,
// to} object by default. Side can be passed to get a specific side
// -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
// Pos objects returned contain a line object, rather than a line
// number (used to prevent looking up the same line twice).
TextMarker.prototype.find = function(side, lineObj) {
  var this$1 = this;

  if (side == null && this.type == "bookmark") { side = 1 }
  var from, to
  for (var i = 0; i < this.lines.length; ++i) {
    var line = this$1.lines[i]
    var span = getMarkedSpanFor(line.markedSpans, this$1)
    if (span.from != null) {
      from = Pos(lineObj ? line : lineNo(line), span.from)
      if (side == -1) { return from }
    }
    if (span.to != null) {
      to = Pos(lineObj ? line : lineNo(line), span.to)
      if (side == 1) { return to }
    }
  }
  return from && {from: from, to: to}
}

// Signals that the marker's widget changed, and surrounding layout
// should be recomputed.
TextMarker.prototype.changed = function() {
  var pos = this.find(-1, true), widget = this, cm = this.doc.cm
  if (!pos || !cm) { return }
  runInOp(cm, function () {
    var line = pos.line, lineN = lineNo(pos.line)
    var view = findViewForLine(cm, lineN)
    if (view) {
      clearLineMeasurementCacheFor(view)
      cm.curOp.selectionChanged = cm.curOp.forceUpdate = true
    }
    cm.curOp.updateMaxLine = true
    if (!lineIsHidden(widget.doc, line) && widget.height != null) {
      var oldHeight = widget.height
      widget.height = null
      var dHeight = widgetHeight(widget) - oldHeight
      if (dHeight)
        { updateLineHeight(line, line.height + dHeight) }
    }
  })
}

TextMarker.prototype.attachLine = function(line) {
  if (!this.lines.length && this.doc.cm) {
    var op = this.doc.cm.curOp
    if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
      { (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this) }
  }
  this.lines.push(line)
}
TextMarker.prototype.detachLine = function(line) {
  this.lines.splice(indexOf(this.lines, line), 1)
  if (!this.lines.length && this.doc.cm) {
    var op = this.doc.cm.curOp
    ;(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this)
  }
}

// Create a marker, wire it up to the right lines, and
function markText(doc, from, to, options, type) {
  // Shared markers (across linked documents) are handled separately
  // (markTextShared will call out to this again, once per
  // document).
  if (options && options.shared) { return markTextShared(doc, from, to, options, type) }
  // Ensure we are in an operation.
  if (doc.cm && !doc.cm.curOp) { return operation(doc.cm, markText)(doc, from, to, options, type) }

  var marker = new TextMarker(doc, type), diff = cmp(from, to)
  if (options) { copyObj(options, marker, false) }
  // Don't connect empty markers unless clearWhenEmpty is false
  if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
    { return marker }
  if (marker.replacedWith) {
    // Showing up as a widget implies collapsed (widget replaces text)
    marker.collapsed = true
    marker.widgetNode = elt("span", [marker.replacedWith], "CodeMirror-widget")
    marker.widgetNode.setAttribute("role", "presentation") // hide from accessibility tree
    if (!options.handleMouseEvents) { marker.widgetNode.setAttribute("cm-ignore-events", "true") }
    if (options.insertLeft) { marker.widgetNode.insertLeft = true }
  }
  if (marker.collapsed) {
    if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
        from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
      { throw new Error("Inserting collapsed marker partially overlapping an existing one") }
    seeCollapsedSpans()
  }

  if (marker.addToHistory)
    { addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN) }

  var curLine = from.line, cm = doc.cm, updateMaxLine
  doc.iter(curLine, to.line + 1, function (line) {
    if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
      { updateMaxLine = true }
    if (marker.collapsed && curLine != from.line) { updateLineHeight(line, 0) }
    addMarkedSpan(line, new MarkedSpan(marker,
                                       curLine == from.line ? from.ch : null,
                                       curLine == to.line ? to.ch : null))
    ++curLine
  })
  // lineIsHidden depends on the presence of the spans, so needs a second pass
  if (marker.collapsed) { doc.iter(from.line, to.line + 1, function (line) {
    if (lineIsHidden(doc, line)) { updateLineHeight(line, 0) }
  }) }

  if (marker.clearOnEnter) { on(marker, "beforeCursorEnter", function () { return marker.clear(); }) }

  if (marker.readOnly) {
    seeReadOnlySpans()
    if (doc.history.done.length || doc.history.undone.length)
      { doc.clearHistory() }
  }
  if (marker.collapsed) {
    marker.id = ++nextMarkerId
    marker.atomic = true
  }
  if (cm) {
    // Sync editor state
    if (updateMaxLine) { cm.curOp.updateMaxLine = true }
    if (marker.collapsed)
      { regChange(cm, from.line, to.line + 1) }
    else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css)
      { for (var i = from.line; i <= to.line; i++) { regLineChange(cm, i, "text") } }
    if (marker.atomic) { reCheckSelection(cm.doc) }
    signalLater(cm, "markerAdded", cm, marker)
  }
  return marker
}

// SHARED TEXTMARKERS

// A shared marker spans multiple linked documents. It is
// implemented as a meta-marker-object controlling multiple normal
// markers.
function SharedTextMarker(markers, primary) {
  var this$1 = this;

  this.markers = markers
  this.primary = primary
  for (var i = 0; i < markers.length; ++i)
    { markers[i].parent = this$1 }
}
eventMixin(SharedTextMarker)

SharedTextMarker.prototype.clear = function() {
  var this$1 = this;

  if (this.explicitlyCleared) { return }
  this.explicitlyCleared = true
  for (var i = 0; i < this.markers.length; ++i)
    { this$1.markers[i].clear() }
  signalLater(this, "clear")
}
SharedTextMarker.prototype.find = function(side, lineObj) {
  return this.primary.find(side, lineObj)
}

function markTextShared(doc, from, to, options, type) {
  options = copyObj(options)
  options.shared = false
  var markers = [markText(doc, from, to, options, type)], primary = markers[0]
  var widget = options.widgetNode
  linkedDocs(doc, function (doc) {
    if (widget) { options.widgetNode = widget.cloneNode(true) }
    markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type))
    for (var i = 0; i < doc.linked.length; ++i)
      { if (doc.linked[i].isParent) { return } }
    primary = lst(markers)
  })
  return new SharedTextMarker(markers, primary)
}

function findSharedMarkers(doc) {
  return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function (m) { return m.parent; })
}

function copySharedMarkers(doc, markers) {
  for (var i = 0; i < markers.length; i++) {
    var marker = markers[i], pos = marker.find()
    var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to)
    if (cmp(mFrom, mTo)) {
      var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type)
      marker.markers.push(subMark)
      subMark.parent = marker
    }
  }
}

function detachSharedMarkers(markers) {
  var loop = function ( i ) {
    var marker = markers[i], linked = [marker.primary.doc]
    linkedDocs(marker.primary.doc, function (d) { return linked.push(d); })
    for (var j = 0; j < marker.markers.length; j++) {
      var subMarker = marker.markers[j]
      if (indexOf(linked, subMarker.doc) == -1) {
        subMarker.parent = null
        marker.markers.splice(j--, 1)
      }
    }
  };

  for (var i = 0; i < markers.length; i++) loop( i );
}

var nextDocId = 0
var Doc = function(text, mode, firstLine, lineSep) {
  if (!(this instanceof Doc)) { return new Doc(text, mode, firstLine, lineSep) }
  if (firstLine == null) { firstLine = 0 }

  BranchChunk.call(this, [new LeafChunk([new Line("", null)])])
  this.first = firstLine
  this.scrollTop = this.scrollLeft = 0
  this.cantEdit = false
  this.cleanGeneration = 1
  this.frontier = firstLine
  var start = Pos(firstLine, 0)
  this.sel = simpleSelection(start)
  this.history = new History(null)
  this.id = ++nextDocId
  this.modeOption = mode
  this.lineSep = lineSep
  this.extend = false

  if (typeof text == "string") { text = this.splitLines(text) }
  updateDoc(this, {from: start, to: start, text: text})
  setSelection(this, simpleSelection(start), sel_dontScroll)
}

Doc.prototype = createObj(BranchChunk.prototype, {
  constructor: Doc,
  // Iterate over the document. Supports two forms -- with only one
  // argument, it calls that for each line in the document. With
  // three, it iterates over the range given by the first two (with
  // the second being non-inclusive).
  iter: function(from, to, op) {
    if (op) { this.iterN(from - this.first, to - from, op) }
    else { this.iterN(this.first, this.first + this.size, from) }
  },

  // Non-public interface for adding and removing lines.
  insert: function(at, lines) {
    var height = 0
    for (var i = 0; i < lines.length; ++i) { height += lines[i].height }
    this.insertInner(at - this.first, lines, height)
  },
  remove: function(at, n) { this.removeInner(at - this.first, n) },

  // From here, the methods are part of the public interface. Most
  // are also available from CodeMirror (editor) instances.

  getValue: function(lineSep) {
    var lines = getLines(this, this.first, this.first + this.size)
    if (lineSep === false) { return lines }
    return lines.join(lineSep || this.lineSeparator())
  },
  setValue: docMethodOp(function(code) {
    var top = Pos(this.first, 0), last = this.first + this.size - 1
    makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
                      text: this.splitLines(code), origin: "setValue", full: true}, true)
    setSelection(this, simpleSelection(top))
  }),
  replaceRange: function(code, from, to, origin) {
    from = clipPos(this, from)
    to = to ? clipPos(this, to) : from
    replaceRange(this, code, from, to, origin)
  },
  getRange: function(from, to, lineSep) {
    var lines = getBetween(this, clipPos(this, from), clipPos(this, to))
    if (lineSep === false) { return lines }
    return lines.join(lineSep || this.lineSeparator())
  },

  getLine: function(line) {var l = this.getLineHandle(line); return l && l.text},

  getLineHandle: function(line) {if (isLine(this, line)) { return getLine(this, line) }},
  getLineNumber: function(line) {return lineNo(line)},

  getLineHandleVisualStart: function(line) {
    if (typeof line == "number") { line = getLine(this, line) }
    return visualLine(line)
  },

  lineCount: function() {return this.size},
  firstLine: function() {return this.first},
  lastLine: function() {return this.first + this.size - 1},

  clipPos: function(pos) {return clipPos(this, pos)},

  getCursor: function(start) {
    var range = this.sel.primary(), pos
    if (start == null || start == "head") { pos = range.head }
    else if (start == "anchor") { pos = range.anchor }
    else if (start == "end" || start == "to" || start === false) { pos = range.to() }
    else { pos = range.from() }
    return pos
  },
  listSelections: function() { return this.sel.ranges },
  somethingSelected: function() {return this.sel.somethingSelected()},

  setCursor: docMethodOp(function(line, ch, options) {
    setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options)
  }),
  setSelection: docMethodOp(function(anchor, head, options) {
    setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options)
  }),
  extendSelection: docMethodOp(function(head, other, options) {
    extendSelection(this, clipPos(this, head), other && clipPos(this, other), options)
  }),
  extendSelections: docMethodOp(function(heads, options) {
    extendSelections(this, clipPosArray(this, heads), options)
  }),
  extendSelectionsBy: docMethodOp(function(f, options) {
    var heads = map(this.sel.ranges, f)
    extendSelections(this, clipPosArray(this, heads), options)
  }),
  setSelections: docMethodOp(function(ranges, primary, options) {
    var this$1 = this;

    if (!ranges.length) { return }
    var out = []
    for (var i = 0; i < ranges.length; i++)
      { out[i] = new Range(clipPos(this$1, ranges[i].anchor),
                         clipPos(this$1, ranges[i].head)) }
    if (primary == null) { primary = Math.min(ranges.length - 1, this.sel.primIndex) }
    setSelection(this, normalizeSelection(out, primary), options)
  }),
  addSelection: docMethodOp(function(anchor, head, options) {
    var ranges = this.sel.ranges.slice(0)
    ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)))
    setSelection(this, normalizeSelection(ranges, ranges.length - 1), options)
  }),

  getSelection: function(lineSep) {
    var this$1 = this;

    var ranges = this.sel.ranges, lines
    for (var i = 0; i < ranges.length; i++) {
      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to())
      lines = lines ? lines.concat(sel) : sel
    }
    if (lineSep === false) { return lines }
    else { return lines.join(lineSep || this.lineSeparator()) }
  },
  getSelections: function(lineSep) {
    var this$1 = this;

    var parts = [], ranges = this.sel.ranges
    for (var i = 0; i < ranges.length; i++) {
      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to())
      if (lineSep !== false) { sel = sel.join(lineSep || this$1.lineSeparator()) }
      parts[i] = sel
    }
    return parts
  },
  replaceSelection: function(code, collapse, origin) {
    var dup = []
    for (var i = 0; i < this.sel.ranges.length; i++)
      { dup[i] = code }
    this.replaceSelections(dup, collapse, origin || "+input")
  },
  replaceSelections: docMethodOp(function(code, collapse, origin) {
    var this$1 = this;

    var changes = [], sel = this.sel
    for (var i = 0; i < sel.ranges.length; i++) {
      var range = sel.ranges[i]
      changes[i] = {from: range.from(), to: range.to(), text: this$1.splitLines(code[i]), origin: origin}
    }
    var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse)
    for (var i$1 = changes.length - 1; i$1 >= 0; i$1--)
      { makeChange(this$1, changes[i$1]) }
    if (newSel) { setSelectionReplaceHistory(this, newSel) }
    else if (this.cm) { ensureCursorVisible(this.cm) }
  }),
  undo: docMethodOp(function() {makeChangeFromHistory(this, "undo")}),
  redo: docMethodOp(function() {makeChangeFromHistory(this, "redo")}),
  undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true)}),
  redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true)}),

  setExtending: function(val) {this.extend = val},
  getExtending: function() {return this.extend},

  historySize: function() {
    var hist = this.history, done = 0, undone = 0
    for (var i = 0; i < hist.done.length; i++) { if (!hist.done[i].ranges) { ++done } }
    for (var i$1 = 0; i$1 < hist.undone.length; i$1++) { if (!hist.undone[i$1].ranges) { ++undone } }
    return {undo: done, redo: undone}
  },
  clearHistory: function() {this.history = new History(this.history.maxGeneration)},

  markClean: function() {
    this.cleanGeneration = this.changeGeneration(true)
  },
  changeGeneration: function(forceSplit) {
    if (forceSplit)
      { this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null }
    return this.history.generation
  },
  isClean: function (gen) {
    return this.history.generation == (gen || this.cleanGeneration)
  },

  getHistory: function() {
    return {done: copyHistoryArray(this.history.done),
            undone: copyHistoryArray(this.history.undone)}
  },
  setHistory: function(histData) {
    var hist = this.history = new History(this.history.maxGeneration)
    hist.done = copyHistoryArray(histData.done.slice(0), null, true)
    hist.undone = copyHistoryArray(histData.undone.slice(0), null, true)
  },

  setGutterMarker: docMethodOp(function(line, gutterID, value) {
    return changeLine(this, line, "gutter", function (line) {
      var markers = line.gutterMarkers || (line.gutterMarkers = {})
      markers[gutterID] = value
      if (!value && isEmpty(markers)) { line.gutterMarkers = null }
      return true
    })
  }),

  clearGutter: docMethodOp(function(gutterID) {
    var this$1 = this;

    this.iter(function (line) {
      if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
        changeLine(this$1, line, "gutter", function () {
          line.gutterMarkers[gutterID] = null
          if (isEmpty(line.gutterMarkers)) { line.gutterMarkers = null }
          return true
        })
      }
    })
  }),

  lineInfo: function(line) {
    var n
    if (typeof line == "number") {
      if (!isLine(this, line)) { return null }
      n = line
      line = getLine(this, line)
      if (!line) { return null }
    } else {
      n = lineNo(line)
      if (n == null) { return null }
    }
    return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
            textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
            widgets: line.widgets}
  },

  addLineClass: docMethodOp(function(handle, where, cls) {
    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
      var prop = where == "text" ? "textClass"
               : where == "background" ? "bgClass"
               : where == "gutter" ? "gutterClass" : "wrapClass"
      if (!line[prop]) { line[prop] = cls }
      else if (classTest(cls).test(line[prop])) { return false }
      else { line[prop] += " " + cls }
      return true
    })
  }),
  removeLineClass: docMethodOp(function(handle, where, cls) {
    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
      var prop = where == "text" ? "textClass"
               : where == "background" ? "bgClass"
               : where == "gutter" ? "gutterClass" : "wrapClass"
      var cur = line[prop]
      if (!cur) { return false }
      else if (cls == null) { line[prop] = null }
      else {
        var found = cur.match(classTest(cls))
        if (!found) { return false }
        var end = found.index + found[0].length
        line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null
      }
      return true
    })
  }),

  addLineWidget: docMethodOp(function(handle, node, options) {
    return addLineWidget(this, handle, node, options)
  }),
  removeLineWidget: function(widget) { widget.clear() },

  markText: function(from, to, options) {
    return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range")
  },
  setBookmark: function(pos, options) {
    var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
                    insertLeft: options && options.insertLeft,
                    clearWhenEmpty: false, shared: options && options.shared,
                    handleMouseEvents: options && options.handleMouseEvents}
    pos = clipPos(this, pos)
    return markText(this, pos, pos, realOpts, "bookmark")
  },
  findMarksAt: function(pos) {
    pos = clipPos(this, pos)
    var markers = [], spans = getLine(this, pos.line).markedSpans
    if (spans) { for (var i = 0; i < spans.length; ++i) {
      var span = spans[i]
      if ((span.from == null || span.from <= pos.ch) &&
          (span.to == null || span.to >= pos.ch))
        { markers.push(span.marker.parent || span.marker) }
    } }
    return markers
  },
  findMarks: function(from, to, filter) {
    from = clipPos(this, from); to = clipPos(this, to)
    var found = [], lineNo = from.line
    this.iter(from.line, to.line + 1, function (line) {
      var spans = line.markedSpans
      if (spans) { for (var i = 0; i < spans.length; i++) {
        var span = spans[i]
        if (!(span.to != null && lineNo == from.line && from.ch >= span.to ||
              span.from == null && lineNo != from.line ||
              span.from != null && lineNo == to.line && span.from >= to.ch) &&
            (!filter || filter(span.marker)))
          { found.push(span.marker.parent || span.marker) }
      } }
      ++lineNo
    })
    return found
  },
  getAllMarks: function() {
    var markers = []
    this.iter(function (line) {
      var sps = line.markedSpans
      if (sps) { for (var i = 0; i < sps.length; ++i)
        { if (sps[i].from != null) { markers.push(sps[i].marker) } } }
    })
    return markers
  },

  posFromIndex: function(off) {
    var ch, lineNo = this.first, sepSize = this.lineSeparator().length
    this.iter(function (line) {
      var sz = line.text.length + sepSize
      if (sz > off) { ch = off; return true }
      off -= sz
      ++lineNo
    })
    return clipPos(this, Pos(lineNo, ch))
  },
  indexFromPos: function (coords) {
    coords = clipPos(this, coords)
    var index = coords.ch
    if (coords.line < this.first || coords.ch < 0) { return 0 }
    var sepSize = this.lineSeparator().length
    this.iter(this.first, coords.line, function (line) { // iter aborts when callback returns a truthy value
      index += line.text.length + sepSize
    })
    return index
  },

  copy: function(copyHistory) {
    var doc = new Doc(getLines(this, this.first, this.first + this.size),
                      this.modeOption, this.first, this.lineSep)
    doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft
    doc.sel = this.sel
    doc.extend = false
    if (copyHistory) {
      doc.history.undoDepth = this.history.undoDepth
      doc.setHistory(this.getHistory())
    }
    return doc
  },

  linkedDoc: function(options) {
    if (!options) { options = {} }
    var from = this.first, to = this.first + this.size
    if (options.from != null && options.from > from) { from = options.from }
    if (options.to != null && options.to < to) { to = options.to }
    var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep)
    if (options.sharedHist) { copy.history = this.history
    ; }(this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist})
    copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}]
    copySharedMarkers(copy, findSharedMarkers(this))
    return copy
  },
  unlinkDoc: function(other) {
    var this$1 = this;

    if (other instanceof CodeMirror) { other = other.doc }
    if (this.linked) { for (var i = 0; i < this.linked.length; ++i) {
      var link = this$1.linked[i]
      if (link.doc != other) { continue }
      this$1.linked.splice(i, 1)
      other.unlinkDoc(this$1)
      detachSharedMarkers(findSharedMarkers(this$1))
      break
    } }
    // If the histories were shared, split them again
    if (other.history == this.history) {
      var splitIds = [other.id]
      linkedDocs(other, function (doc) { return splitIds.push(doc.id); }, true)
      other.history = new History(null)
      other.history.done = copyHistoryArray(this.history.done, splitIds)
      other.history.undone = copyHistoryArray(this.history.undone, splitIds)
    }
  },
  iterLinkedDocs: function(f) {linkedDocs(this, f)},

  getMode: function() {return this.mode},
  getEditor: function() {return this.cm},

  splitLines: function(str) {
    if (this.lineSep) { return str.split(this.lineSep) }
    return splitLinesAuto(str)
  },
  lineSeparator: function() { return this.lineSep || "\n" }
})

// Public alias.
Doc.prototype.eachLine = Doc.prototype.iter

// Kludge to work around strange IE behavior where it'll sometimes
// re-fire a series of drag-related events right after the drop (#1551)
var lastDrop = 0

function onDrop(e) {
  var cm = this
  clearDragCursor(cm)
  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
    { return }
  e_preventDefault(e)
  if (ie) { lastDrop = +new Date }
  var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files
  if (!pos || cm.isReadOnly()) { return }
  // Might be a file drop, in which case we simply extract the text
  // and insert it.
  if (files && files.length && window.FileReader && window.File) {
    var n = files.length, text = Array(n), read = 0
    var loadFile = function (file, i) {
      if (cm.options.allowDropFileTypes &&
          indexOf(cm.options.allowDropFileTypes, file.type) == -1)
        { return }

      var reader = new FileReader
      reader.onload = operation(cm, function () {
        var content = reader.result
        if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) { content = "" }
        text[i] = content
        if (++read == n) {
          pos = clipPos(cm.doc, pos)
          var change = {from: pos, to: pos,
                        text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
                        origin: "paste"}
          makeChange(cm.doc, change)
          setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)))
        }
      })
      reader.readAsText(file)
    }
    for (var i = 0; i < n; ++i) { loadFile(files[i], i) }
  } else { // Normal drop
    // Don't do a replace if the drop happened inside of the selected text.
    if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
      cm.state.draggingText(e)
      // Ensure the editor is re-focused
      setTimeout(function () { return cm.display.input.focus(); }, 20)
      return
    }
    try {
      var text$1 = e.dataTransfer.getData("Text")
      if (text$1) {
        var selected
        if (cm.state.draggingText && !cm.state.draggingText.copy)
          { selected = cm.listSelections() }
        setSelectionNoUndo(cm.doc, simpleSelection(pos, pos))
        if (selected) { for (var i$1 = 0; i$1 < selected.length; ++i$1)
          { replaceRange(cm.doc, "", selected[i$1].anchor, selected[i$1].head, "drag") } }
        cm.replaceSelection(text$1, "around", "paste")
        cm.display.input.focus()
      }
    }
    catch(e){}
  }
}

function onDragStart(cm, e) {
  if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return }
  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) { return }

  e.dataTransfer.setData("Text", cm.getSelection())
  e.dataTransfer.effectAllowed = "copyMove"

  // Use dummy image instead of default browsers image.
  // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
  if (e.dataTransfer.setDragImage && !safari) {
    var img = elt("img", null, null, "position: fixed; left: 0; top: 0;")
    img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    if (presto) {
      img.width = img.height = 1
      cm.display.wrapper.appendChild(img)
      // Force a relayout, or Opera won't use our image for some obscure reason
      img._top = img.offsetTop
    }
    e.dataTransfer.setDragImage(img, 0, 0)
    if (presto) { img.parentNode.removeChild(img) }
  }
}

function onDragOver(cm, e) {
  var pos = posFromMouse(cm, e)
  if (!pos) { return }
  var frag = document.createDocumentFragment()
  drawSelectionCursor(cm, pos, frag)
  if (!cm.display.dragCursor) {
    cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors")
    cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv)
  }
  removeChildrenAndAdd(cm.display.dragCursor, frag)
}

function clearDragCursor(cm) {
  if (cm.display.dragCursor) {
    cm.display.lineSpace.removeChild(cm.display.dragCursor)
    cm.display.dragCursor = null
  }
}

// These must be handled carefully, because naively registering a
// handler for each editor will cause the editors to never be
// garbage collected.

function forEachCodeMirror(f) {
  if (!document.body.getElementsByClassName) { return }
  var byClass = document.body.getElementsByClassName("CodeMirror")
  for (var i = 0; i < byClass.length; i++) {
    var cm = byClass[i].CodeMirror
    if (cm) { f(cm) }
  }
}

var globalsRegistered = false
function ensureGlobalHandlers() {
  if (globalsRegistered) { return }
  registerGlobalHandlers()
  globalsRegistered = true
}
function registerGlobalHandlers() {
  // When the window resizes, we need to refresh active editors.
  var resizeTimer
  on(window, "resize", function () {
    if (resizeTimer == null) { resizeTimer = setTimeout(function () {
      resizeTimer = null
      forEachCodeMirror(onResize)
    }, 100) }
  })
  // When the window loses focus, we want to show the editor as blurred
  on(window, "blur", function () { return forEachCodeMirror(onBlur); })
}
// Called when the window resizes
function onResize(cm) {
  var d = cm.display
  if (d.lastWrapHeight == d.wrapper.clientHeight && d.lastWrapWidth == d.wrapper.clientWidth)
    { return }
  // Might be a text scaling operation, clear size caches.
  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null
  d.scrollbarsClipped = false
  cm.setSize()
}

var keyNames = {
  3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
  19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
  36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
  46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
  106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete",
  173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
  221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
  63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
}

// Number keys
for (var i = 0; i < 10; i++) { keyNames[i + 48] = keyNames[i + 96] = String(i) }
// Alphabetic keys
for (var i$1 = 65; i$1 <= 90; i$1++) { keyNames[i$1] = String.fromCharCode(i$1) }
// Function keys
for (var i$2 = 1; i$2 <= 12; i$2++) { keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2 }

var keyMap = {}

keyMap.basic = {
  "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
  "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
  "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
  "Tab": "defaultTab", "Shift-Tab": "indentAuto",
  "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
  "Esc": "singleSelection"
}
// Note that the save and find-related commands aren't defined by
// default. User code or addons can define them. Unknown commands
// are simply ignored.
keyMap.pcDefault = {
  "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
  "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
  "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
  "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
  "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
  "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
  "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
  fallthrough: "basic"
}
// Very basic readline/emacs-style bindings, which are standard on Mac.
keyMap.emacsy = {
  "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
  "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
  "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
  "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars",
  "Ctrl-O": "openLine"
}
keyMap.macDefault = {
  "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
  "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
  "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
  "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
  "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
  "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
  "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
  fallthrough: ["basic", "emacsy"]
}
keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault

// KEYMAP DISPATCH

function normalizeKeyName(name) {
  var parts = name.split(/-(?!$)/)
  name = parts[parts.length - 1]
  var alt, ctrl, shift, cmd
  for (var i = 0; i < parts.length - 1; i++) {
    var mod = parts[i]
    if (/^(cmd|meta|m)$/i.test(mod)) { cmd = true }
    else if (/^a(lt)?$/i.test(mod)) { alt = true }
    else if (/^(c|ctrl|control)$/i.test(mod)) { ctrl = true }
    else if (/^s(hift)?$/i.test(mod)) { shift = true }
    else { throw new Error("Unrecognized modifier name: " + mod) }
  }
  if (alt) { name = "Alt-" + name }
  if (ctrl) { name = "Ctrl-" + name }
  if (cmd) { name = "Cmd-" + name }
  if (shift) { name = "Shift-" + name }
  return name
}

// This is a kludge to keep keymaps mostly working as raw objects
// (backwards compatibility) while at the same time support features
// like normalization and multi-stroke key bindings. It compiles a
// new normalized keymap, and then updates the old object to reflect
// this.
function normalizeKeyMap(keymap) {
  var copy = {}
  for (var keyname in keymap) { if (keymap.hasOwnProperty(keyname)) {
    var value = keymap[keyname]
    if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) { continue }
    if (value == "...") { delete keymap[keyname]; continue }

    var keys = map(keyname.split(" "), normalizeKeyName)
    for (var i = 0; i < keys.length; i++) {
      var val = (void 0), name = (void 0)
      if (i == keys.length - 1) {
        name = keys.join(" ")
        val = value
      } else {
        name = keys.slice(0, i + 1).join(" ")
        val = "..."
      }
      var prev = copy[name]
      if (!prev) { copy[name] = val }
      else if (prev != val) { throw new Error("Inconsistent bindings for " + name) }
    }
    delete keymap[keyname]
  } }
  for (var prop in copy) { keymap[prop] = copy[prop] }
  return keymap
}

function lookupKey(key, map, handle, context) {
  map = getKeyMap(map)
  var found = map.call ? map.call(key, context) : map[key]
  if (found === false) { return "nothing" }
  if (found === "...") { return "multi" }
  if (found != null && handle(found)) { return "handled" }

  if (map.fallthrough) {
    if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
      { return lookupKey(key, map.fallthrough, handle, context) }
    for (var i = 0; i < map.fallthrough.length; i++) {
      var result = lookupKey(key, map.fallthrough[i], handle, context)
      if (result) { return result }
    }
  }
}

// Modifier key presses don't count as 'real' key presses for the
// purpose of keymap fallthrough.
function isModifierKey(value) {
  var name = typeof value == "string" ? value : keyNames[value.keyCode]
  return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
}

// Look up the name of a key as indicated by an event object.
function keyName(event, noShift) {
  if (presto && event.keyCode == 34 && event["char"]) { return false }
  var base = keyNames[event.keyCode], name = base
  if (name == null || event.altGraphKey) { return false }
  if (event.altKey && base != "Alt") { name = "Alt-" + name }
  if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") { name = "Ctrl-" + name }
  if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") { name = "Cmd-" + name }
  if (!noShift && event.shiftKey && base != "Shift") { name = "Shift-" + name }
  return name
}

function getKeyMap(val) {
  return typeof val == "string" ? keyMap[val] : val
}

// Helper for deleting text near the selection(s), used to implement
// backspace, delete, and similar functionality.
function deleteNearSelection(cm, compute) {
  var ranges = cm.doc.sel.ranges, kill = []
  // Build up a set of ranges to kill first, merging overlapping
  // ranges.
  for (var i = 0; i < ranges.length; i++) {
    var toKill = compute(ranges[i])
    while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
      var replaced = kill.pop()
      if (cmp(replaced.from, toKill.from) < 0) {
        toKill.from = replaced.from
        break
      }
    }
    kill.push(toKill)
  }
  // Next, remove those actual ranges.
  runInOp(cm, function () {
    for (var i = kill.length - 1; i >= 0; i--)
      { replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete") }
    ensureCursorVisible(cm)
  })
}

// Commands are parameter-less actions that can be performed on an
// editor, mostly used for keybindings.
var commands = {
  selectAll: selectAll,
  singleSelection: function (cm) { return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll); },
  killLine: function (cm) { return deleteNearSelection(cm, function (range) {
    if (range.empty()) {
      var len = getLine(cm.doc, range.head.line).text.length
      if (range.head.ch == len && range.head.line < cm.lastLine())
        { return {from: range.head, to: Pos(range.head.line + 1, 0)} }
      else
        { return {from: range.head, to: Pos(range.head.line, len)} }
    } else {
      return {from: range.from(), to: range.to()}
    }
  }); },
  deleteLine: function (cm) { return deleteNearSelection(cm, function (range) { return ({
    from: Pos(range.from().line, 0),
    to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
  }); }); },
  delLineLeft: function (cm) { return deleteNearSelection(cm, function (range) { return ({
    from: Pos(range.from().line, 0), to: range.from()
  }); }); },
  delWrappedLineLeft: function (cm) { return deleteNearSelection(cm, function (range) {
    var top = cm.charCoords(range.head, "div").top + 5
    var leftPos = cm.coordsChar({left: 0, top: top}, "div")
    return {from: leftPos, to: range.from()}
  }); },
  delWrappedLineRight: function (cm) { return deleteNearSelection(cm, function (range) {
    var top = cm.charCoords(range.head, "div").top + 5
    var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
    return {from: range.from(), to: rightPos }
  }); },
  undo: function (cm) { return cm.undo(); },
  redo: function (cm) { return cm.redo(); },
  undoSelection: function (cm) { return cm.undoSelection(); },
  redoSelection: function (cm) { return cm.redoSelection(); },
  goDocStart: function (cm) { return cm.extendSelection(Pos(cm.firstLine(), 0)); },
  goDocEnd: function (cm) { return cm.extendSelection(Pos(cm.lastLine())); },
  goLineStart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStart(cm, range.head.line); },
    {origin: "+move", bias: 1}
  ); },
  goLineStartSmart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStartSmart(cm, range.head); },
    {origin: "+move", bias: 1}
  ); },
  goLineEnd: function (cm) { return cm.extendSelectionsBy(function (range) { return lineEnd(cm, range.head.line); },
    {origin: "+move", bias: -1}
  ); },
  goLineRight: function (cm) { return cm.extendSelectionsBy(function (range) {
    var top = cm.charCoords(range.head, "div").top + 5
    return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
  }, sel_move); },
  goLineLeft: function (cm) { return cm.extendSelectionsBy(function (range) {
    var top = cm.charCoords(range.head, "div").top + 5
    return cm.coordsChar({left: 0, top: top}, "div")
  }, sel_move); },
  goLineLeftSmart: function (cm) { return cm.extendSelectionsBy(function (range) {
    var top = cm.charCoords(range.head, "div").top + 5
    var pos = cm.coordsChar({left: 0, top: top}, "div")
    if (pos.ch < cm.getLine(pos.line).search(/\S/)) { return lineStartSmart(cm, range.head) }
    return pos
  }, sel_move); },
  goLineUp: function (cm) { return cm.moveV(-1, "line"); },
  goLineDown: function (cm) { return cm.moveV(1, "line"); },
  goPageUp: function (cm) { return cm.moveV(-1, "page"); },
  goPageDown: function (cm) { return cm.moveV(1, "page"); },
  goCharLeft: function (cm) { return cm.moveH(-1, "char"); },
  goCharRight: function (cm) { return cm.moveH(1, "char"); },
  goColumnLeft: function (cm) { return cm.moveH(-1, "column"); },
  goColumnRight: function (cm) { return cm.moveH(1, "column"); },
  goWordLeft: function (cm) { return cm.moveH(-1, "word"); },
  goGroupRight: function (cm) { return cm.moveH(1, "group"); },
  goGroupLeft: function (cm) { return cm.moveH(-1, "group"); },
  goWordRight: function (cm) { return cm.moveH(1, "word"); },
  delCharBefore: function (cm) { return cm.deleteH(-1, "char"); },
  delCharAfter: function (cm) { return cm.deleteH(1, "char"); },
  delWordBefore: function (cm) { return cm.deleteH(-1, "word"); },
  delWordAfter: function (cm) { return cm.deleteH(1, "word"); },
  delGroupBefore: function (cm) { return cm.deleteH(-1, "group"); },
  delGroupAfter: function (cm) { return cm.deleteH(1, "group"); },
  indentAuto: function (cm) { return cm.indentSelection("smart"); },
  indentMore: function (cm) { return cm.indentSelection("add"); },
  indentLess: function (cm) { return cm.indentSelection("subtract"); },
  insertTab: function (cm) { return cm.replaceSelection("\t"); },
  insertSoftTab: function (cm) {
    var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize
    for (var i = 0; i < ranges.length; i++) {
      var pos = ranges[i].from()
      var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize)
      spaces.push(spaceStr(tabSize - col % tabSize))
    }
    cm.replaceSelections(spaces)
  },
  defaultTab: function (cm) {
    if (cm.somethingSelected()) { cm.indentSelection("add") }
    else { cm.execCommand("insertTab") }
  },
  // Swap the two chars left and right of each selection's head.
  // Move cursor behind the two swapped characters afterwards.
  //
  // Doesn't consider line feeds a character.
  // Doesn't scan more than one line above to find a character.
  // Doesn't do anything on an empty line.
  // Doesn't do anything with non-empty selections.
  transposeChars: function (cm) { return runInOp(cm, function () {
    var ranges = cm.listSelections(), newSel = []
    for (var i = 0; i < ranges.length; i++) {
      if (!ranges[i].empty()) { continue }
      var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text
      if (line) {
        if (cur.ch == line.length) { cur = new Pos(cur.line, cur.ch - 1) }
        if (cur.ch > 0) {
          cur = new Pos(cur.line, cur.ch + 1)
          cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
                          Pos(cur.line, cur.ch - 2), cur, "+transpose")
        } else if (cur.line > cm.doc.first) {
          var prev = getLine(cm.doc, cur.line - 1).text
          if (prev) {
            cur = new Pos(cur.line, 1)
            cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
                            prev.charAt(prev.length - 1),
                            Pos(cur.line - 1, prev.length - 1), cur, "+transpose")
          }
        }
      }
      newSel.push(new Range(cur, cur))
    }
    cm.setSelections(newSel)
  }); },
  newlineAndIndent: function (cm) { return runInOp(cm, function () {
    var sels = cm.listSelections()
    for (var i = sels.length - 1; i >= 0; i--)
      { cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input") }
    sels = cm.listSelections()
    for (var i$1 = 0; i$1 < sels.length; i$1++)
      { cm.indentLine(sels[i$1].from().line, null, true) }
    ensureCursorVisible(cm)
  }); },
  openLine: function (cm) { return cm.replaceSelection("\n", "start"); },
  toggleOverwrite: function (cm) { return cm.toggleOverwrite(); }
}


function lineStart(cm, lineN) {
  var line = getLine(cm.doc, lineN)
  var visual = visualLine(line)
  if (visual != line) { lineN = lineNo(visual) }
  var order = getOrder(visual)
  var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual)
  return Pos(lineN, ch)
}
function lineEnd(cm, lineN) {
  var merged, line = getLine(cm.doc, lineN)
  while (merged = collapsedSpanAtEnd(line)) {
    line = merged.find(1, true).line
    lineN = null
  }
  var order = getOrder(line)
  var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line)
  return Pos(lineN == null ? lineNo(line) : lineN, ch)
}
function lineStartSmart(cm, pos) {
  var start = lineStart(cm, pos.line)
  var line = getLine(cm.doc, start.line)
  var order = getOrder(line)
  if (!order || order[0].level == 0) {
    var firstNonWS = Math.max(0, line.text.search(/\S/))
    var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch
    return Pos(start.line, inWS ? 0 : firstNonWS)
  }
  return start
}

// Run a handler that was bound to a key.
function doHandleBinding(cm, bound, dropShift) {
  if (typeof bound == "string") {
    bound = commands[bound]
    if (!bound) { return false }
  }
  // Ensure previous input has been read, so that the handler sees a
  // consistent view of the document
  cm.display.input.ensurePolled()
  var prevShift = cm.display.shift, done = false
  try {
    if (cm.isReadOnly()) { cm.state.suppressEdits = true }
    if (dropShift) { cm.display.shift = false }
    done = bound(cm) != Pass
  } finally {
    cm.display.shift = prevShift
    cm.state.suppressEdits = false
  }
  return done
}

function lookupKeyForEditor(cm, name, handle) {
  for (var i = 0; i < cm.state.keyMaps.length; i++) {
    var result = lookupKey(name, cm.state.keyMaps[i], handle, cm)
    if (result) { return result }
  }
  return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
    || lookupKey(name, cm.options.keyMap, handle, cm)
}

var stopSeq = new Delayed
function dispatchKey(cm, name, e, handle) {
  var seq = cm.state.keySeq
  if (seq) {
    if (isModifierKey(name)) { return "handled" }
    stopSeq.set(50, function () {
      if (cm.state.keySeq == seq) {
        cm.state.keySeq = null
        cm.display.input.reset()
      }
    })
    name = seq + " " + name
  }
  var result = lookupKeyForEditor(cm, name, handle)

  if (result == "multi")
    { cm.state.keySeq = name }
  if (result == "handled")
    { signalLater(cm, "keyHandled", cm, name, e) }

  if (result == "handled" || result == "multi") {
    e_preventDefault(e)
    restartBlink(cm)
  }

  if (seq && !result && /\'$/.test(name)) {
    e_preventDefault(e)
    return true
  }
  return !!result
}

// Handle a key from the keydown event.
function handleKeyBinding(cm, e) {
  var name = keyName(e, true)
  if (!name) { return false }

  if (e.shiftKey && !cm.state.keySeq) {
    // First try to resolve full name (including 'Shift-'). Failing
    // that, see if there is a cursor-motion command (starting with
    // 'go') bound to the keyname without 'Shift-'.
    return dispatchKey(cm, "Shift-" + name, e, function (b) { return doHandleBinding(cm, b, true); })
        || dispatchKey(cm, name, e, function (b) {
             if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
               { return doHandleBinding(cm, b) }
           })
  } else {
    return dispatchKey(cm, name, e, function (b) { return doHandleBinding(cm, b); })
  }
}

// Handle a key from the keypress event
function handleCharBinding(cm, e, ch) {
  return dispatchKey(cm, "'" + ch + "'", e, function (b) { return doHandleBinding(cm, b, true); })
}

var lastStoppedKey = null
function onKeyDown(e) {
  var cm = this
  cm.curOp.focus = activeElt()
  if (signalDOMEvent(cm, e)) { return }
  // IE does strange things with escape.
  if (ie && ie_version < 11 && e.keyCode == 27) { e.returnValue = false }
  var code = e.keyCode
  cm.display.shift = code == 16 || e.shiftKey
  var handled = handleKeyBinding(cm, e)
  if (presto) {
    lastStoppedKey = handled ? code : null
    // Opera has no cut event... we try to at least catch the key combo
    if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
      { cm.replaceSelection("", null, "cut") }
  }

  // Turn mouse into crosshair when Alt is held on Mac.
  if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
    { showCrossHair(cm) }
}

function showCrossHair(cm) {
  var lineDiv = cm.display.lineDiv
  addClass(lineDiv, "CodeMirror-crosshair")

  function up(e) {
    if (e.keyCode == 18 || !e.altKey) {
      rmClass(lineDiv, "CodeMirror-crosshair")
      off(document, "keyup", up)
      off(document, "mouseover", up)
    }
  }
  on(document, "keyup", up)
  on(document, "mouseover", up)
}

function onKeyUp(e) {
  if (e.keyCode == 16) { this.doc.sel.shift = false }
  signalDOMEvent(this, e)
}

function onKeyPress(e) {
  var cm = this
  if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) { return }
  var keyCode = e.keyCode, charCode = e.charCode
  if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return}
  if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) { return }
  var ch = String.fromCharCode(charCode == null ? keyCode : charCode)
  // Some browsers fire keypress events for backspace
  if (ch == "\x08") { return }
  if (handleCharBinding(cm, e, ch)) { return }
  cm.display.input.onKeyPress(e)
}

// A mouse down can be a single click, double click, triple click,
// start of selection drag, start of text drag, new cursor
// (ctrl-click), rectangle drag (alt-drag), or xwin
// middle-click-paste. Or it might be a click on something we should
// not interfere with, such as a scrollbar or widget.
function onMouseDown(e) {
  var cm = this, display = cm.display
  if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) { return }
  display.input.ensurePolled()
  display.shift = e.shiftKey

  if (eventInWidget(display, e)) {
    if (!webkit) {
      // Briefly turn off draggability, to allow widgets to do
      // normal dragging things.
      display.scroller.draggable = false
      setTimeout(function () { return display.scroller.draggable = true; }, 100)
    }
    return
  }
  if (clickInGutter(cm, e)) { return }
  var start = posFromMouse(cm, e)
  window.focus()

  switch (e_button(e)) {
  case 1:
    // #3261: make sure, that we're not starting a second selection
    if (cm.state.selectingText)
      { cm.state.selectingText(e) }
    else if (start)
      { leftButtonDown(cm, e, start) }
    else if (e_target(e) == display.scroller)
      { e_preventDefault(e) }
    break
  case 2:
    if (webkit) { cm.state.lastMiddleDown = +new Date }
    if (start) { extendSelection(cm.doc, start) }
    setTimeout(function () { return display.input.focus(); }, 20)
    e_preventDefault(e)
    break
  case 3:
    if (captureRightClick) { onContextMenu(cm, e) }
    else { delayBlurEvent(cm) }
    break
  }
}

var lastClick;
var lastDoubleClick;
function leftButtonDown(cm, e, start) {
  if (ie) { setTimeout(bind(ensureFocus, cm), 0) }
  else { cm.curOp.focus = activeElt() }

  var now = +new Date, type
  if (lastDoubleClick && lastDoubleClick.time > now - 400 && cmp(lastDoubleClick.pos, start) == 0) {
    type = "triple"
  } else if (lastClick && lastClick.time > now - 400 && cmp(lastClick.pos, start) == 0) {
    type = "double"
    lastDoubleClick = {time: now, pos: start}
  } else {
    type = "single"
    lastClick = {time: now, pos: start}
  }

  var sel = cm.doc.sel, modifier = mac ? e.metaKey : e.ctrlKey, contained
  if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
      type == "single" && (contained = sel.contains(start)) > -1 &&
      (cmp((contained = sel.ranges[contained]).from(), start) < 0 || start.xRel > 0) &&
      (cmp(contained.to(), start) > 0 || start.xRel < 0))
    { leftButtonStartDrag(cm, e, start, modifier) }
  else
    { leftButtonSelect(cm, e, start, type, modifier) }
}

// Start a text drag. When it ends, see if any dragging actually
// happen, and treat as a click if it didn't.
function leftButtonStartDrag(cm, e, start, modifier) {
  var display = cm.display, startTime = +new Date
  var dragEnd = operation(cm, function (e2) {
    if (webkit) { display.scroller.draggable = false }
    cm.state.draggingText = false
    off(document, "mouseup", dragEnd)
    off(display.scroller, "drop", dragEnd)
    if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
      e_preventDefault(e2)
      if (!modifier && +new Date - 200 < startTime)
        { extendSelection(cm.doc, start) }
      // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
      if (webkit || ie && ie_version == 9)
        { setTimeout(function () {document.body.focus(); display.input.focus()}, 20) }
      else
        { display.input.focus() }
    }
  })
  // Let the drag handler handle this.
  if (webkit) { display.scroller.draggable = true }
  cm.state.draggingText = dragEnd
  dragEnd.copy = mac ? e.altKey : e.ctrlKey
  // IE's approach to draggable
  if (display.scroller.dragDrop) { display.scroller.dragDrop() }
  on(document, "mouseup", dragEnd)
  on(display.scroller, "drop", dragEnd)
}

// Normal selection, as opposed to text dragging.
function leftButtonSelect(cm, e, start, type, addNew) {
  var display = cm.display, doc = cm.doc
  e_preventDefault(e)

  var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges
  if (addNew && !e.shiftKey) {
    ourIndex = doc.sel.contains(start)
    if (ourIndex > -1)
      { ourRange = ranges[ourIndex] }
    else
      { ourRange = new Range(start, start) }
  } else {
    ourRange = doc.sel.primary()
    ourIndex = doc.sel.primIndex
  }

  if (chromeOS ? e.shiftKey && e.metaKey : e.altKey) {
    type = "rect"
    if (!addNew) { ourRange = new Range(start, start) }
    start = posFromMouse(cm, e, true, true)
    ourIndex = -1
  } else if (type == "double") {
    var word = cm.findWordAt(start)
    if (cm.display.shift || doc.extend)
      { ourRange = extendRange(doc, ourRange, word.anchor, word.head) }
    else
      { ourRange = word }
  } else if (type == "triple") {
    var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)))
    if (cm.display.shift || doc.extend)
      { ourRange = extendRange(doc, ourRange, line.anchor, line.head) }
    else
      { ourRange = line }
  } else {
    ourRange = extendRange(doc, ourRange, start)
  }

  if (!addNew) {
    ourIndex = 0
    setSelection(doc, new Selection([ourRange], 0), sel_mouse)
    startSel = doc.sel
  } else if (ourIndex == -1) {
    ourIndex = ranges.length
    setSelection(doc, normalizeSelection(ranges.concat([ourRange]), ourIndex),
                 {scroll: false, origin: "*mouse"})
  } else if (ranges.length > 1 && ranges[ourIndex].empty() && type == "single" && !e.shiftKey) {
    setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
                 {scroll: false, origin: "*mouse"})
    startSel = doc.sel
  } else {
    replaceOneSelection(doc, ourIndex, ourRange, sel_mouse)
  }

  var lastPos = start
  function extendTo(pos) {
    if (cmp(lastPos, pos) == 0) { return }
    lastPos = pos

    if (type == "rect") {
      var ranges = [], tabSize = cm.options.tabSize
      var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize)
      var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize)
      var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol)
      for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
           line <= end; line++) {
        var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize)
        if (left == right)
          { ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos))) }
        else if (text.length > leftPos)
          { ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize)))) }
      }
      if (!ranges.length) { ranges.push(new Range(start, start)) }
      setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
                   {origin: "*mouse", scroll: false})
      cm.scrollIntoView(pos)
    } else {
      var oldRange = ourRange
      var anchor = oldRange.anchor, head = pos
      if (type != "single") {
        var range
        if (type == "double")
          { range = cm.findWordAt(pos) }
        else
          { range = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0))) }
        if (cmp(range.anchor, anchor) > 0) {
          head = range.head
          anchor = minPos(oldRange.from(), range.anchor)
        } else {
          head = range.anchor
          anchor = maxPos(oldRange.to(), range.head)
        }
      }
      var ranges$1 = startSel.ranges.slice(0)
      ranges$1[ourIndex] = new Range(clipPos(doc, anchor), head)
      setSelection(doc, normalizeSelection(ranges$1, ourIndex), sel_mouse)
    }
  }

  var editorSize = display.wrapper.getBoundingClientRect()
  // Used to ensure timeout re-tries don't fire when another extend
  // happened in the meantime (clearTimeout isn't reliable -- at
  // least on Chrome, the timeouts still happen even when cleared,
  // if the clear happens after their scheduled firing time).
  var counter = 0

  function extend(e) {
    var curCount = ++counter
    var cur = posFromMouse(cm, e, true, type == "rect")
    if (!cur) { return }
    if (cmp(cur, lastPos) != 0) {
      cm.curOp.focus = activeElt()
      extendTo(cur)
      var visible = visibleLines(display, doc)
      if (cur.line >= visible.to || cur.line < visible.from)
        { setTimeout(operation(cm, function () {if (counter == curCount) { extend(e) }}), 150) }
    } else {
      var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0
      if (outside) { setTimeout(operation(cm, function () {
        if (counter != curCount) { return }
        display.scroller.scrollTop += outside
        extend(e)
      }), 50) }
    }
  }

  function done(e) {
    cm.state.selectingText = false
    counter = Infinity
    e_preventDefault(e)
    display.input.focus()
    off(document, "mousemove", move)
    off(document, "mouseup", up)
    doc.history.lastSelOrigin = null
  }

  var move = operation(cm, function (e) {
    if (!e_button(e)) { done(e) }
    else { extend(e) }
  })
  var up = operation(cm, done)
  cm.state.selectingText = up
  on(document, "mousemove", move)
  on(document, "mouseup", up)
}


// Determines whether an event happened in the gutter, and fires the
// handlers for the corresponding event.
function gutterEvent(cm, e, type, prevent) {
  var mX, mY
  try { mX = e.clientX; mY = e.clientY }
  catch(e) { return false }
  if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) { return false }
  if (prevent) { e_preventDefault(e) }

  var display = cm.display
  var lineBox = display.lineDiv.getBoundingClientRect()

  if (mY > lineBox.bottom || !hasHandler(cm, type)) { return e_defaultPrevented(e) }
  mY -= lineBox.top - display.viewOffset

  for (var i = 0; i < cm.options.gutters.length; ++i) {
    var g = display.gutters.childNodes[i]
    if (g && g.getBoundingClientRect().right >= mX) {
      var line = lineAtHeight(cm.doc, mY)
      var gutter = cm.options.gutters[i]
      signal(cm, type, cm, line, gutter, e)
      return e_defaultPrevented(e)
    }
  }
}

function clickInGutter(cm, e) {
  return gutterEvent(cm, e, "gutterClick", true)
}

// CONTEXT MENU HANDLING

// To make the context menu work, we need to briefly unhide the
// textarea (making it as unobtrusive as possible) to let the
// right-click take effect on it.
function onContextMenu(cm, e) {
  if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) { return }
  if (signalDOMEvent(cm, e, "contextmenu")) { return }
  cm.display.input.onContextMenu(e)
}

function contextMenuInGutter(cm, e) {
  if (!hasHandler(cm, "gutterContextMenu")) { return false }
  return gutterEvent(cm, e, "gutterContextMenu", false)
}

function themeChanged(cm) {
  cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
    cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-")
  clearCaches(cm)
}

var Init = {toString: function(){return "CodeMirror.Init"}}

var defaults = {}
var optionHandlers = {}

function defineOptions(CodeMirror) {
  var optionHandlers = CodeMirror.optionHandlers

  function option(name, deflt, handle, notOnInit) {
    CodeMirror.defaults[name] = deflt
    if (handle) { optionHandlers[name] =
      notOnInit ? function (cm, val, old) {if (old != Init) { handle(cm, val, old) }} : handle }
  }

  CodeMirror.defineOption = option

  // Passed to option handlers when there is no old value.
  CodeMirror.Init = Init

  // These two are, on init, called from the constructor because they
  // have to be initialized before the editor can start at all.
  option("value", "", function (cm, val) { return cm.setValue(val); }, true)
  option("mode", null, function (cm, val) {
    cm.doc.modeOption = val
    loadMode(cm)
  }, true)

  option("indentUnit", 2, loadMode, true)
  option("indentWithTabs", false)
  option("smartIndent", true)
  option("tabSize", 4, function (cm) {
    resetModeState(cm)
    clearCaches(cm)
    regChange(cm)
  }, true)
  option("lineSeparator", null, function (cm, val) {
    cm.doc.lineSep = val
    if (!val) { return }
    var newBreaks = [], lineNo = cm.doc.first
    cm.doc.iter(function (line) {
      for (var pos = 0;;) {
        var found = line.text.indexOf(val, pos)
        if (found == -1) { break }
        pos = found + val.length
        newBreaks.push(Pos(lineNo, found))
      }
      lineNo++
    })
    for (var i = newBreaks.length - 1; i >= 0; i--)
      { replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length)) }
  })
  option("specialChars", /[\u0000-\u001f\u007f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function (cm, val, old) {
    cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g")
    if (old != Init) { cm.refresh() }
  })
  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) { return cm.refresh(); }, true)
  option("electricChars", true)
  option("inputStyle", mobile ? "contenteditable" : "textarea", function () {
    throw new Error("inputStyle can not (yet) be changed in a running editor") // FIXME
  }, true)
  option("spellcheck", false, function (cm, val) { return cm.getInputField().spellcheck = val; }, true)
  option("rtlMoveVisually", !windows)
  option("wholeLineUpdateBefore", true)

  option("theme", "default", function (cm) {
    themeChanged(cm)
    guttersChanged(cm)
  }, true)
  option("keyMap", "default", function (cm, val, old) {
    var next = getKeyMap(val)
    var prev = old != Init && getKeyMap(old)
    if (prev && prev.detach) { prev.detach(cm, next) }
    if (next.attach) { next.attach(cm, prev || null) }
  })
  option("extraKeys", null)

  option("lineWrapping", false, wrappingChanged, true)
  option("gutters", [], function (cm) {
    setGuttersForLineNumbers(cm.options)
    guttersChanged(cm)
  }, true)
  option("fixedGutter", true, function (cm, val) {
    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0"
    cm.refresh()
  }, true)
  option("coverGutterNextToScrollbar", false, function (cm) { return updateScrollbars(cm); }, true)
  option("scrollbarStyle", "native", function (cm) {
    initScrollbars(cm)
    updateScrollbars(cm)
    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop)
    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft)
  }, true)
  option("lineNumbers", false, function (cm) {
    setGuttersForLineNumbers(cm.options)
    guttersChanged(cm)
  }, true)
  option("firstLineNumber", 1, guttersChanged, true)
  option("lineNumberFormatter", function (integer) { return integer; }, guttersChanged, true)
  option("showCursorWhenSelecting", false, updateSelection, true)

  option("resetSelectionOnContextMenu", true)
  option("lineWiseCopyCut", true)

  option("readOnly", false, function (cm, val) {
    if (val == "nocursor") {
      onBlur(cm)
      cm.display.input.blur()
      cm.display.disabled = true
    } else {
      cm.display.disabled = false
    }
    cm.display.input.readOnlyChanged(val)
  })
  option("disableInput", false, function (cm, val) {if (!val) { cm.display.input.reset() }}, true)
  option("dragDrop", true, dragDropChanged)
  option("allowDropFileTypes", null)

  option("cursorBlinkRate", 530)
  option("cursorScrollMargin", 0)
  option("cursorHeight", 1, updateSelection, true)
  option("singleCursorHeightPerLine", true, updateSelection, true)
  option("workTime", 100)
  option("workDelay", 100)
  option("flattenSpans", true, resetModeState, true)
  option("addModeClass", false, resetModeState, true)
  option("pollInterval", 100)
  option("undoDepth", 200, function (cm, val) { return cm.doc.history.undoDepth = val; })
  option("historyEventDelay", 1250)
  option("viewportMargin", 10, function (cm) { return cm.refresh(); }, true)
  option("maxHighlightLength", 10000, resetModeState, true)
  option("moveInputWithCursor", true, function (cm, val) {
    if (!val) { cm.display.input.resetPosition() }
  })

  option("tabindex", null, function (cm, val) { return cm.display.input.getField().tabIndex = val || ""; })
  option("autofocus", null)
}

function guttersChanged(cm) {
  updateGutters(cm)
  regChange(cm)
  alignHorizontally(cm)
}

function dragDropChanged(cm, value, old) {
  var wasOn = old && old != Init
  if (!value != !wasOn) {
    var funcs = cm.display.dragFunctions
    var toggle = value ? on : off
    toggle(cm.display.scroller, "dragstart", funcs.start)
    toggle(cm.display.scroller, "dragenter", funcs.enter)
    toggle(cm.display.scroller, "dragover", funcs.over)
    toggle(cm.display.scroller, "dragleave", funcs.leave)
    toggle(cm.display.scroller, "drop", funcs.drop)
  }
}

function wrappingChanged(cm) {
  if (cm.options.lineWrapping) {
    addClass(cm.display.wrapper, "CodeMirror-wrap")
    cm.display.sizer.style.minWidth = ""
    cm.display.sizerWidth = null
  } else {
    rmClass(cm.display.wrapper, "CodeMirror-wrap")
    findMaxLine(cm)
  }
  estimateLineHeights(cm)
  regChange(cm)
  clearCaches(cm)
  setTimeout(function () { return updateScrollbars(cm); }, 100)
}

// A CodeMirror instance represents an editor. This is the object
// that user code is usually dealing with.

function CodeMirror(place, options) {
  var this$1 = this;

  if (!(this instanceof CodeMirror)) { return new CodeMirror(place, options) }

  this.options = options = options ? copyObj(options) : {}
  // Determine effective options based on given values and defaults.
  copyObj(defaults, options, false)
  setGuttersForLineNumbers(options)

  var doc = options.value
  if (typeof doc == "string") { doc = new Doc(doc, options.mode, null, options.lineSeparator) }
  this.doc = doc

  var input = new CodeMirror.inputStyles[options.inputStyle](this)
  var display = this.display = new Display(place, doc, input)
  display.wrapper.CodeMirror = this
  updateGutters(this)
  themeChanged(this)
  if (options.lineWrapping)
    { this.display.wrapper.className += " CodeMirror-wrap" }
  initScrollbars(this)

  this.state = {
    keyMaps: [],  // stores maps added by addKeyMap
    overlays: [], // highlighting overlays, as added by addOverlay
    modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
    overwrite: false,
    delayingBlurEvent: false,
    focused: false,
    suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
    pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in input.poll
    selectingText: false,
    draggingText: false,
    highlight: new Delayed(), // stores highlight worker timeout
    keySeq: null,  // Unfinished key sequence
    specialChars: null
  }

  if (options.autofocus && !mobile) { display.input.focus() }

  // Override magic textarea content restore that IE sometimes does
  // on our hidden textarea on reload
  if (ie && ie_version < 11) { setTimeout(function () { return this$1.display.input.reset(true); }, 20) }

  registerEventHandlers(this)
  ensureGlobalHandlers()

  startOperation(this)
  this.curOp.forceUpdate = true
  attachDoc(this, doc)

  if ((options.autofocus && !mobile) || this.hasFocus())
    { setTimeout(bind(onFocus, this), 20) }
  else
    { onBlur(this) }

  for (var opt in optionHandlers) { if (optionHandlers.hasOwnProperty(opt))
    { optionHandlers[opt](this$1, options[opt], Init) } }
  maybeUpdateLineNumberWidth(this)
  if (options.finishInit) { options.finishInit(this) }
  for (var i = 0; i < initHooks.length; ++i) { initHooks[i](this$1) }
  endOperation(this)
  // Suppress optimizelegibility in Webkit, since it breaks text
  // measuring on line wrapping boundaries.
  if (webkit && options.lineWrapping &&
      getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
    { display.lineDiv.style.textRendering = "auto" }
}

// The default configuration options.
CodeMirror.defaults = defaults
// Functions to run when options are changed.
CodeMirror.optionHandlers = optionHandlers

// Attach the necessary event handlers when initializing the editor
function registerEventHandlers(cm) {
  var d = cm.display
  on(d.scroller, "mousedown", operation(cm, onMouseDown))
  // Older IE's will not fire a second mousedown for a double click
  if (ie && ie_version < 11)
    { on(d.scroller, "dblclick", operation(cm, function (e) {
      if (signalDOMEvent(cm, e)) { return }
      var pos = posFromMouse(cm, e)
      if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) { return }
      e_preventDefault(e)
      var word = cm.findWordAt(pos)
      extendSelection(cm.doc, word.anchor, word.head)
    })) }
  else
    { on(d.scroller, "dblclick", function (e) { return signalDOMEvent(cm, e) || e_preventDefault(e); }) }
  // Some browsers fire contextmenu *after* opening the menu, at
  // which point we can't mess with it anymore. Context menu is
  // handled in onMouseDown for these browsers.
  if (!captureRightClick) { on(d.scroller, "contextmenu", function (e) { return onContextMenu(cm, e); }) }

  // Used to suppress mouse event handling when a touch happens
  var touchFinished, prevTouch = {end: 0}
  function finishTouch() {
    if (d.activeTouch) {
      touchFinished = setTimeout(function () { return d.activeTouch = null; }, 1000)
      prevTouch = d.activeTouch
      prevTouch.end = +new Date
    }
  }
  function isMouseLikeTouchEvent(e) {
    if (e.touches.length != 1) { return false }
    var touch = e.touches[0]
    return touch.radiusX <= 1 && touch.radiusY <= 1
  }
  function farAway(touch, other) {
    if (other.left == null) { return true }
    var dx = other.left - touch.left, dy = other.top - touch.top
    return dx * dx + dy * dy > 20 * 20
  }
  on(d.scroller, "touchstart", function (e) {
    if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e)) {
      d.input.ensurePolled()
      clearTimeout(touchFinished)
      var now = +new Date
      d.activeTouch = {start: now, moved: false,
                       prev: now - prevTouch.end <= 300 ? prevTouch : null}
      if (e.touches.length == 1) {
        d.activeTouch.left = e.touches[0].pageX
        d.activeTouch.top = e.touches[0].pageY
      }
    }
  })
  on(d.scroller, "touchmove", function () {
    if (d.activeTouch) { d.activeTouch.moved = true }
  })
  on(d.scroller, "touchend", function (e) {
    var touch = d.activeTouch
    if (touch && !eventInWidget(d, e) && touch.left != null &&
        !touch.moved && new Date - touch.start < 300) {
      var pos = cm.coordsChar(d.activeTouch, "page"), range
      if (!touch.prev || farAway(touch, touch.prev)) // Single tap
        { range = new Range(pos, pos) }
      else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
        { range = cm.findWordAt(pos) }
      else // Triple tap
        { range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))) }
      cm.setSelection(range.anchor, range.head)
      cm.focus()
      e_preventDefault(e)
    }
    finishTouch()
  })
  on(d.scroller, "touchcancel", finishTouch)

  // Sync scrolling between fake scrollbars and real scrollable
  // area, ensure viewport is updated when scrolling.
  on(d.scroller, "scroll", function () {
    if (d.scroller.clientHeight) {
      setScrollTop(cm, d.scroller.scrollTop)
      setScrollLeft(cm, d.scroller.scrollLeft, true)
      signal(cm, "scroll", cm)
    }
  })

  // Listen to wheel events in order to try and update the viewport on time.
  on(d.scroller, "mousewheel", function (e) { return onScrollWheel(cm, e); })
  on(d.scroller, "DOMMouseScroll", function (e) { return onScrollWheel(cm, e); })

  // Prevent wrapper from ever scrolling
  on(d.wrapper, "scroll", function () { return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; })

  d.dragFunctions = {
    enter: function (e) {if (!signalDOMEvent(cm, e)) { e_stop(e) }},
    over: function (e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e) }},
    start: function (e) { return onDragStart(cm, e); },
    drop: operation(cm, onDrop),
    leave: function (e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm) }}
  }

  var inp = d.input.getField()
  on(inp, "keyup", function (e) { return onKeyUp.call(cm, e); })
  on(inp, "keydown", operation(cm, onKeyDown))
  on(inp, "keypress", operation(cm, onKeyPress))
  on(inp, "focus", function (e) { return onFocus(cm, e); })
  on(inp, "blur", function (e) { return onBlur(cm, e); })
}

var initHooks = []
CodeMirror.defineInitHook = function (f) { return initHooks.push(f); }

// Indent the given line. The how parameter can be "smart",
// "add"/null, "subtract", or "prev". When aggressive is false
// (typically set to true for forced single-line indents), empty
// lines are not indented, and places where the mode returns Pass
// are left alone.
function indentLine(cm, n, how, aggressive) {
  var doc = cm.doc, state
  if (how == null) { how = "add" }
  if (how == "smart") {
    // Fall back to "prev" when the mode doesn't have an indentation
    // method.
    if (!doc.mode.indent) { how = "prev" }
    else { state = getStateBefore(cm, n) }
  }

  var tabSize = cm.options.tabSize
  var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize)
  if (line.stateAfter) { line.stateAfter = null }
  var curSpaceString = line.text.match(/^\s*/)[0], indentation
  if (!aggressive && !/\S/.test(line.text)) {
    indentation = 0
    how = "not"
  } else if (how == "smart") {
    indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text)
    if (indentation == Pass || indentation > 150) {
      if (!aggressive) { return }
      how = "prev"
    }
  }
  if (how == "prev") {
    if (n > doc.first) { indentation = countColumn(getLine(doc, n-1).text, null, tabSize) }
    else { indentation = 0 }
  } else if (how == "add") {
    indentation = curSpace + cm.options.indentUnit
  } else if (how == "subtract") {
    indentation = curSpace - cm.options.indentUnit
  } else if (typeof how == "number") {
    indentation = curSpace + how
  }
  indentation = Math.max(0, indentation)

  var indentString = "", pos = 0
  if (cm.options.indentWithTabs)
    { for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t"} }
  if (pos < indentation) { indentString += spaceStr(indentation - pos) }

  if (indentString != curSpaceString) {
    replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input")
    line.stateAfter = null
    return true
  } else {
    // Ensure that, if the cursor was in the whitespace at the start
    // of the line, it is moved to the end of that space.
    for (var i$1 = 0; i$1 < doc.sel.ranges.length; i$1++) {
      var range = doc.sel.ranges[i$1]
      if (range.head.line == n && range.head.ch < curSpaceString.length) {
        var pos$1 = Pos(n, curSpaceString.length)
        replaceOneSelection(doc, i$1, new Range(pos$1, pos$1))
        break
      }
    }
  }
}

// This will be set to a {lineWise: bool, text: [string]} object, so
// that, when pasting, we know what kind of selections the copied
// text was made out of.
var lastCopied = null

function setLastCopied(newLastCopied) {
  lastCopied = newLastCopied
}

function applyTextInput(cm, inserted, deleted, sel, origin) {
  var doc = cm.doc
  cm.display.shift = false
  if (!sel) { sel = doc.sel }

  var paste = cm.state.pasteIncoming || origin == "paste"
  var textLines = splitLinesAuto(inserted), multiPaste = null
  // When pasing N lines into N selections, insert one line per selection
  if (paste && sel.ranges.length > 1) {
    if (lastCopied && lastCopied.text.join("\n") == inserted) {
      if (sel.ranges.length % lastCopied.text.length == 0) {
        multiPaste = []
        for (var i = 0; i < lastCopied.text.length; i++)
          { multiPaste.push(doc.splitLines(lastCopied.text[i])) }
      }
    } else if (textLines.length == sel.ranges.length) {
      multiPaste = map(textLines, function (l) { return [l]; })
    }
  }

  var updateInput
  // Normal behavior is to insert the new text into every selection
  for (var i$1 = sel.ranges.length - 1; i$1 >= 0; i$1--) {
    var range = sel.ranges[i$1]
    var from = range.from(), to = range.to()
    if (range.empty()) {
      if (deleted && deleted > 0) // Handle deletion
        { from = Pos(from.line, from.ch - deleted) }
      else if (cm.state.overwrite && !paste) // Handle overwrite
        { to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length)) }
      else if (lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == inserted)
        { from = to = Pos(from.line, 0) }
    }
    updateInput = cm.curOp.updateInput
    var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i$1 % multiPaste.length] : textLines,
                       origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")}
    makeChange(cm.doc, changeEvent)
    signalLater(cm, "inputRead", cm, changeEvent)
  }
  if (inserted && !paste)
    { triggerElectric(cm, inserted) }

  ensureCursorVisible(cm)
  cm.curOp.updateInput = updateInput
  cm.curOp.typing = true
  cm.state.pasteIncoming = cm.state.cutIncoming = false
}

function handlePaste(e, cm) {
  var pasted = e.clipboardData && e.clipboardData.getData("Text")
  if (pasted) {
    e.preventDefault()
    if (!cm.isReadOnly() && !cm.options.disableInput)
      { runInOp(cm, function () { return applyTextInput(cm, pasted, 0, null, "paste"); }) }
    return true
  }
}

function triggerElectric(cm, inserted) {
  // When an 'electric' character is inserted, immediately trigger a reindent
  if (!cm.options.electricChars || !cm.options.smartIndent) { return }
  var sel = cm.doc.sel

  for (var i = sel.ranges.length - 1; i >= 0; i--) {
    var range = sel.ranges[i]
    if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) { continue }
    var mode = cm.getModeAt(range.head)
    var indented = false
    if (mode.electricChars) {
      for (var j = 0; j < mode.electricChars.length; j++)
        { if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
          indented = indentLine(cm, range.head.line, "smart")
          break
        } }
    } else if (mode.electricInput) {
      if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
        { indented = indentLine(cm, range.head.line, "smart") }
    }
    if (indented) { signalLater(cm, "electricInput", cm, range.head.line) }
  }
}

function copyableRanges(cm) {
  var text = [], ranges = []
  for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
    var line = cm.doc.sel.ranges[i].head.line
    var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)}
    ranges.push(lineRange)
    text.push(cm.getRange(lineRange.anchor, lineRange.head))
  }
  return {text: text, ranges: ranges}
}

function disableBrowserMagic(field, spellcheck) {
  field.setAttribute("autocorrect", "off")
  field.setAttribute("autocapitalize", "off")
  field.setAttribute("spellcheck", !!spellcheck)
}

function hiddenTextarea() {
  var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none")
  var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;")
  // The textarea is kept positioned near the cursor to prevent the
  // fact that it'll be scrolled into view on input from scrolling
  // our fake cursor out of view. On webkit, when wrap=off, paste is
  // very slow. So make the area wide instead.
  if (webkit) { te.style.width = "1000px" }
  else { te.setAttribute("wrap", "off") }
  // If border: 0; -- iOS fails to open keyboard (issue #1287)
  if (ios) { te.style.border = "1px solid black" }
  disableBrowserMagic(te)
  return div
}

// The publicly visible API. Note that methodOp(f) means
// 'wrap f in an operation, performed on its `this` parameter'.

// This is not the complete set of editor methods. Most of the
// methods defined on the Doc type are also injected into
// CodeMirror.prototype, for backwards compatibility and
// convenience.

function addEditorMethods(CodeMirror) {
  var optionHandlers = CodeMirror.optionHandlers

  var helpers = CodeMirror.helpers = {}

  CodeMirror.prototype = {
    constructor: CodeMirror,
    focus: function(){window.focus(); this.display.input.focus()},

    setOption: function(option, value) {
      var options = this.options, old = options[option]
      if (options[option] == value && option != "mode") { return }
      options[option] = value
      if (optionHandlers.hasOwnProperty(option))
        { operation(this, optionHandlers[option])(this, value, old) }
      signal(this, "optionChange", this, option)
    },

    getOption: function(option) {return this.options[option]},
    getDoc: function() {return this.doc},

    addKeyMap: function(map, bottom) {
      this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map))
    },
    removeKeyMap: function(map) {
      var maps = this.state.keyMaps
      for (var i = 0; i < maps.length; ++i)
        { if (maps[i] == map || maps[i].name == map) {
          maps.splice(i, 1)
          return true
        } }
    },

    addOverlay: methodOp(function(spec, options) {
      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec)
      if (mode.startState) { throw new Error("Overlays may not be stateful.") }
      insertSorted(this.state.overlays,
                   {mode: mode, modeSpec: spec, opaque: options && options.opaque,
                    priority: (options && options.priority) || 0},
                   function (overlay) { return overlay.priority; })
      this.state.modeGen++
      regChange(this)
    }),
    removeOverlay: methodOp(function(spec) {
      var this$1 = this;

      var overlays = this.state.overlays
      for (var i = 0; i < overlays.length; ++i) {
        var cur = overlays[i].modeSpec
        if (cur == spec || typeof spec == "string" && cur.name == spec) {
          overlays.splice(i, 1)
          this$1.state.modeGen++
          regChange(this$1)
          return
        }
      }
    }),

    indentLine: methodOp(function(n, dir, aggressive) {
      if (typeof dir != "string" && typeof dir != "number") {
        if (dir == null) { dir = this.options.smartIndent ? "smart" : "prev" }
        else { dir = dir ? "add" : "subtract" }
      }
      if (isLine(this.doc, n)) { indentLine(this, n, dir, aggressive) }
    }),
    indentSelection: methodOp(function(how) {
      var this$1 = this;

      var ranges = this.doc.sel.ranges, end = -1
      for (var i = 0; i < ranges.length; i++) {
        var range = ranges[i]
        if (!range.empty()) {
          var from = range.from(), to = range.to()
          var start = Math.max(end, from.line)
          end = Math.min(this$1.lastLine(), to.line - (to.ch ? 0 : 1)) + 1
          for (var j = start; j < end; ++j)
            { indentLine(this$1, j, how) }
          var newRanges = this$1.doc.sel.ranges
          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
            { replaceOneSelection(this$1.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll) }
        } else if (range.head.line > end) {
          indentLine(this$1, range.head.line, how, true)
          end = range.head.line
          if (i == this$1.doc.sel.primIndex) { ensureCursorVisible(this$1) }
        }
      }
    }),

    // Fetch the parser token for a given character. Useful for hacks
    // that want to inspect the mode state (say, for completion).
    getTokenAt: function(pos, precise) {
      return takeToken(this, pos, precise)
    },

    getLineTokens: function(line, precise) {
      return takeToken(this, Pos(line), precise, true)
    },

    getTokenTypeAt: function(pos) {
      pos = clipPos(this.doc, pos)
      var styles = getLineStyles(this, getLine(this.doc, pos.line))
      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch
      var type
      if (ch == 0) { type = styles[2] }
      else { for (;;) {
        var mid = (before + after) >> 1
        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) { after = mid }
        else if (styles[mid * 2 + 1] < ch) { before = mid + 1 }
        else { type = styles[mid * 2 + 2]; break }
      } }
      var cut = type ? type.indexOf("overlay ") : -1
      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1)
    },

    getModeAt: function(pos) {
      var mode = this.doc.mode
      if (!mode.innerMode) { return mode }
      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode
    },

    getHelper: function(pos, type) {
      return this.getHelpers(pos, type)[0]
    },

    getHelpers: function(pos, type) {
      var this$1 = this;

      var found = []
      if (!helpers.hasOwnProperty(type)) { return found }
      var help = helpers[type], mode = this.getModeAt(pos)
      if (typeof mode[type] == "string") {
        if (help[mode[type]]) { found.push(help[mode[type]]) }
      } else if (mode[type]) {
        for (var i = 0; i < mode[type].length; i++) {
          var val = help[mode[type][i]]
          if (val) { found.push(val) }
        }
      } else if (mode.helperType && help[mode.helperType]) {
        found.push(help[mode.helperType])
      } else if (help[mode.name]) {
        found.push(help[mode.name])
      }
      for (var i$1 = 0; i$1 < help._global.length; i$1++) {
        var cur = help._global[i$1]
        if (cur.pred(mode, this$1) && indexOf(found, cur.val) == -1)
          { found.push(cur.val) }
      }
      return found
    },

    getStateAfter: function(line, precise) {
      var doc = this.doc
      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line)
      return getStateBefore(this, line + 1, precise)
    },

    cursorCoords: function(start, mode) {
      var pos, range = this.doc.sel.primary()
      if (start == null) { pos = range.head }
      else if (typeof start == "object") { pos = clipPos(this.doc, start) }
      else { pos = start ? range.from() : range.to() }
      return cursorCoords(this, pos, mode || "page")
    },

    charCoords: function(pos, mode) {
      return charCoords(this, clipPos(this.doc, pos), mode || "page")
    },

    coordsChar: function(coords, mode) {
      coords = fromCoordSystem(this, coords, mode || "page")
      return coordsChar(this, coords.left, coords.top)
    },

    lineAtHeight: function(height, mode) {
      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top
      return lineAtHeight(this.doc, height + this.display.viewOffset)
    },
    heightAtLine: function(line, mode, includeWidgets) {
      var end = false, lineObj
      if (typeof line == "number") {
        var last = this.doc.first + this.doc.size - 1
        if (line < this.doc.first) { line = this.doc.first }
        else if (line > last) { line = last; end = true }
        lineObj = getLine(this.doc, line)
      } else {
        lineObj = line
      }
      return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page", includeWidgets).top +
        (end ? this.doc.height - heightAtLine(lineObj) : 0)
    },

    defaultTextHeight: function() { return textHeight(this.display) },
    defaultCharWidth: function() { return charWidth(this.display) },

    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo}},

    addWidget: function(pos, node, scroll, vert, horiz) {
      var display = this.display
      pos = cursorCoords(this, clipPos(this.doc, pos))
      var top = pos.bottom, left = pos.left
      node.style.position = "absolute"
      node.setAttribute("cm-ignore-events", "true")
      this.display.input.setUneditable(node)
      display.sizer.appendChild(node)
      if (vert == "over") {
        top = pos.top
      } else if (vert == "above" || vert == "near") {
        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth)
        // Default to positioning above (if specified and possible); otherwise default to positioning below
        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
          { top = pos.top - node.offsetHeight }
        else if (pos.bottom + node.offsetHeight <= vspace)
          { top = pos.bottom }
        if (left + node.offsetWidth > hspace)
          { left = hspace - node.offsetWidth }
      }
      node.style.top = top + "px"
      node.style.left = node.style.right = ""
      if (horiz == "right") {
        left = display.sizer.clientWidth - node.offsetWidth
        node.style.right = "0px"
      } else {
        if (horiz == "left") { left = 0 }
        else if (horiz == "middle") { left = (display.sizer.clientWidth - node.offsetWidth) / 2 }
        node.style.left = left + "px"
      }
      if (scroll)
        { scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight) }
    },

    triggerOnKeyDown: methodOp(onKeyDown),
    triggerOnKeyPress: methodOp(onKeyPress),
    triggerOnKeyUp: onKeyUp,

    execCommand: function(cmd) {
      if (commands.hasOwnProperty(cmd))
        { return commands[cmd].call(null, this) }
    },

    triggerElectric: methodOp(function(text) { triggerElectric(this, text) }),

    findPosH: function(from, amount, unit, visually) {
      var this$1 = this;

      var dir = 1
      if (amount < 0) { dir = -1; amount = -amount }
      var cur = clipPos(this.doc, from)
      for (var i = 0; i < amount; ++i) {
        cur = findPosH(this$1.doc, cur, dir, unit, visually)
        if (cur.hitSide) { break }
      }
      return cur
    },

    moveH: methodOp(function(dir, unit) {
      var this$1 = this;

      this.extendSelectionsBy(function (range) {
        if (this$1.display.shift || this$1.doc.extend || range.empty())
          { return findPosH(this$1.doc, range.head, dir, unit, this$1.options.rtlMoveVisually) }
        else
          { return dir < 0 ? range.from() : range.to() }
      }, sel_move)
    }),

    deleteH: methodOp(function(dir, unit) {
      var sel = this.doc.sel, doc = this.doc
      if (sel.somethingSelected())
        { doc.replaceSelection("", null, "+delete") }
      else
        { deleteNearSelection(this, function (range) {
          var other = findPosH(doc, range.head, dir, unit, false)
          return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other}
        }) }
    }),

    findPosV: function(from, amount, unit, goalColumn) {
      var this$1 = this;

      var dir = 1, x = goalColumn
      if (amount < 0) { dir = -1; amount = -amount }
      var cur = clipPos(this.doc, from)
      for (var i = 0; i < amount; ++i) {
        var coords = cursorCoords(this$1, cur, "div")
        if (x == null) { x = coords.left }
        else { coords.left = x }
        cur = findPosV(this$1, coords, dir, unit)
        if (cur.hitSide) { break }
      }
      return cur
    },

    moveV: methodOp(function(dir, unit) {
      var this$1 = this;

      var doc = this.doc, goals = []
      var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected()
      doc.extendSelectionsBy(function (range) {
        if (collapse)
          { return dir < 0 ? range.from() : range.to() }
        var headPos = cursorCoords(this$1, range.head, "div")
        if (range.goalColumn != null) { headPos.left = range.goalColumn }
        goals.push(headPos.left)
        var pos = findPosV(this$1, headPos, dir, unit)
        if (unit == "page" && range == doc.sel.primary())
          { addToScrollPos(this$1, null, charCoords(this$1, pos, "div").top - headPos.top) }
        return pos
      }, sel_move)
      if (goals.length) { for (var i = 0; i < doc.sel.ranges.length; i++)
        { doc.sel.ranges[i].goalColumn = goals[i] } }
    }),

    // Find the word at the given position (as returned by coordsChar).
    findWordAt: function(pos) {
      var doc = this.doc, line = getLine(doc, pos.line).text
      var start = pos.ch, end = pos.ch
      if (line) {
        var helper = this.getHelper(pos, "wordChars")
        if ((pos.xRel < 0 || end == line.length) && start) { --start; } else { ++end }
        var startChar = line.charAt(start)
        var check = isWordChar(startChar, helper)
          ? function (ch) { return isWordChar(ch, helper); }
          : /\s/.test(startChar) ? function (ch) { return /\s/.test(ch); }
          : function (ch) { return (!/\s/.test(ch) && !isWordChar(ch)); }
        while (start > 0 && check(line.charAt(start - 1))) { --start }
        while (end < line.length && check(line.charAt(end))) { ++end }
      }
      return new Range(Pos(pos.line, start), Pos(pos.line, end))
    },

    toggleOverwrite: function(value) {
      if (value != null && value == this.state.overwrite) { return }
      if (this.state.overwrite = !this.state.overwrite)
        { addClass(this.display.cursorDiv, "CodeMirror-overwrite") }
      else
        { rmClass(this.display.cursorDiv, "CodeMirror-overwrite") }

      signal(this, "overwriteToggle", this, this.state.overwrite)
    },
    hasFocus: function() { return this.display.input.getField() == activeElt() },
    isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit) },

    scrollTo: methodOp(function(x, y) {
      if (x != null || y != null) { resolveScrollToPos(this) }
      if (x != null) { this.curOp.scrollLeft = x }
      if (y != null) { this.curOp.scrollTop = y }
    }),
    getScrollInfo: function() {
      var scroller = this.display.scroller
      return {left: scroller.scrollLeft, top: scroller.scrollTop,
              height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
              width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
              clientHeight: displayHeight(this), clientWidth: displayWidth(this)}
    },

    scrollIntoView: methodOp(function(range, margin) {
      if (range == null) {
        range = {from: this.doc.sel.primary().head, to: null}
        if (margin == null) { margin = this.options.cursorScrollMargin }
      } else if (typeof range == "number") {
        range = {from: Pos(range, 0), to: null}
      } else if (range.from == null) {
        range = {from: range, to: null}
      }
      if (!range.to) { range.to = range.from }
      range.margin = margin || 0

      if (range.from.line != null) {
        resolveScrollToPos(this)
        this.curOp.scrollToPos = range
      } else {
        var sPos = calculateScrollPos(this, Math.min(range.from.left, range.to.left),
                                      Math.min(range.from.top, range.to.top) - range.margin,
                                      Math.max(range.from.right, range.to.right),
                                      Math.max(range.from.bottom, range.to.bottom) + range.margin)
        this.scrollTo(sPos.scrollLeft, sPos.scrollTop)
      }
    }),

    setSize: methodOp(function(width, height) {
      var this$1 = this;

      var interpret = function (val) { return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val; }
      if (width != null) { this.display.wrapper.style.width = interpret(width) }
      if (height != null) { this.display.wrapper.style.height = interpret(height) }
      if (this.options.lineWrapping) { clearLineMeasurementCache(this) }
      var lineNo = this.display.viewFrom
      this.doc.iter(lineNo, this.display.viewTo, function (line) {
        if (line.widgets) { for (var i = 0; i < line.widgets.length; i++)
          { if (line.widgets[i].noHScroll) { regLineChange(this$1, lineNo, "widget"); break } } }
        ++lineNo
      })
      this.curOp.forceUpdate = true
      signal(this, "refresh", this)
    }),

    operation: function(f){return runInOp(this, f)},

    refresh: methodOp(function() {
      var oldHeight = this.display.cachedTextHeight
      regChange(this)
      this.curOp.forceUpdate = true
      clearCaches(this)
      this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop)
      updateGutterSpace(this)
      if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
        { estimateLineHeights(this) }
      signal(this, "refresh", this)
    }),

    swapDoc: methodOp(function(doc) {
      var old = this.doc
      old.cm = null
      attachDoc(this, doc)
      clearCaches(this)
      this.display.input.reset()
      this.scrollTo(doc.scrollLeft, doc.scrollTop)
      this.curOp.forceScroll = true
      signalLater(this, "swapDoc", this, old)
      return old
    }),

    getInputField: function(){return this.display.input.getField()},
    getWrapperElement: function(){return this.display.wrapper},
    getScrollerElement: function(){return this.display.scroller},
    getGutterElement: function(){return this.display.gutters}
  }
  eventMixin(CodeMirror)

  CodeMirror.registerHelper = function(type, name, value) {
    if (!helpers.hasOwnProperty(type)) { helpers[type] = CodeMirror[type] = {_global: []} }
    helpers[type][name] = value
  }
  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
    CodeMirror.registerHelper(type, name, value)
    helpers[type]._global.push({pred: predicate, val: value})
  }
}

// Used for horizontal relative motion. Dir is -1 or 1 (left or
// right), unit can be "char", "column" (like char, but doesn't
// cross line boundaries), "word" (across next word), or "group" (to
// the start of next group of word or non-word-non-whitespace
// chars). The visually param controls whether, in right-to-left
// text, direction 1 means to move towards the next index in the
// string, or towards the character to the right of the current
// position. The resulting position will have a hitSide=true
// property if it reached the end of the document.
function findPosH(doc, pos, dir, unit, visually) {
  var line = pos.line, ch = pos.ch, origDir = dir
  var lineObj = getLine(doc, line)
  function findNextLine() {
    var l = line + dir
    if (l < doc.first || l >= doc.first + doc.size) { return false }
    line = l
    return lineObj = getLine(doc, l)
  }
  function moveOnce(boundToLine) {
    var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true)
    if (next == null) {
      if (!boundToLine && findNextLine()) {
        if (visually) { ch = (dir < 0 ? lineRight : lineLeft)(lineObj) }
        else { ch = dir < 0 ? lineObj.text.length : 0 }
      } else { return false }
    } else { ch = next }
    return true
  }

  if (unit == "char") {
    moveOnce()
  } else if (unit == "column") {
    moveOnce(true)
  } else if (unit == "word" || unit == "group") {
    var sawType = null, group = unit == "group"
    var helper = doc.cm && doc.cm.getHelper(pos, "wordChars")
    for (var first = true;; first = false) {
      if (dir < 0 && !moveOnce(!first)) { break }
      var cur = lineObj.text.charAt(ch) || "\n"
      var type = isWordChar(cur, helper) ? "w"
        : group && cur == "\n" ? "n"
        : !group || /\s/.test(cur) ? null
        : "p"
      if (group && !first && !type) { type = "s" }
      if (sawType && sawType != type) {
        if (dir < 0) {dir = 1; moveOnce()}
        break
      }

      if (type) { sawType = type }
      if (dir > 0 && !moveOnce(!first)) { break }
    }
  }
  var result = skipAtomic(doc, Pos(line, ch), pos, origDir, true)
  if (!cmp(pos, result)) { result.hitSide = true }
  return result
}

// For relative vertical movement. Dir may be -1 or 1. Unit can be
// "page" or "line". The resulting position will have a hitSide=true
// property if it reached the end of the document.
function findPosV(cm, pos, dir, unit) {
  var doc = cm.doc, x = pos.left, y
  if (unit == "page") {
    var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight)
    var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3)
    y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount

  } else if (unit == "line") {
    y = dir > 0 ? pos.bottom + 3 : pos.top - 3
  }
  var target
  for (;;) {
    target = coordsChar(cm, x, y)
    if (!target.outside) { break }
    if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break }
    y += dir * 5
  }
  return target
}

// CONTENTEDITABLE INPUT STYLE

var ContentEditableInput = function(cm) {
  this.cm = cm
  this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null
  this.polling = new Delayed()
  this.composing = null
  this.gracePeriod = false
  this.readDOMTimeout = null
};

ContentEditableInput.prototype.init = function (display) {
    var this$1 = this;

  var input = this, cm = input.cm
  var div = input.div = display.lineDiv
  disableBrowserMagic(div, cm.options.spellcheck)

  on(div, "paste", function (e) {
    if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }
    // IE doesn't fire input events, so we schedule a read for the pasted content in this way
    if (ie_version <= 11) { setTimeout(operation(cm, function () {
      if (!input.pollContent()) { regChange(cm) }
    }), 20) }
  })

  on(div, "compositionstart", function (e) {
    this$1.composing = {data: e.data, done: false}
  })
  on(div, "compositionupdate", function (e) {
    if (!this$1.composing) { this$1.composing = {data: e.data, done: false} }
  })
  on(div, "compositionend", function (e) {
    if (this$1.composing) {
      if (e.data != this$1.composing.data) { this$1.readFromDOMSoon() }
      this$1.composing.done = true
    }
  })

  on(div, "touchstart", function () { return input.forceCompositionEnd(); })

  on(div, "input", function () {
    if (!this$1.composing) { this$1.readFromDOMSoon() }
  })

  function onCopyCut(e) {
    if (signalDOMEvent(cm, e)) { return }
    if (cm.somethingSelected()) {
      setLastCopied({lineWise: false, text: cm.getSelections()})
      if (e.type == "cut") { cm.replaceSelection("", null, "cut") }
    } else if (!cm.options.lineWiseCopyCut) {
      return
    } else {
      var ranges = copyableRanges(cm)
      setLastCopied({lineWise: true, text: ranges.text})
      if (e.type == "cut") {
        cm.operation(function () {
          cm.setSelections(ranges.ranges, 0, sel_dontScroll)
          cm.replaceSelection("", null, "cut")
        })
      }
    }
    if (e.clipboardData) {
      e.clipboardData.clearData()
      var content = lastCopied.text.join("\n")
      // iOS exposes the clipboard API, but seems to discard content inserted into it
      e.clipboardData.setData("Text", content)
      if (e.clipboardData.getData("Text") == content) {
        e.preventDefault()
        return
      }
    }
    // Old-fashioned briefly-focus-a-textarea hack
    var kludge = hiddenTextarea(), te = kludge.firstChild
    cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild)
    te.value = lastCopied.text.join("\n")
    var hadFocus = document.activeElement
    selectInput(te)
    setTimeout(function () {
      cm.display.lineSpace.removeChild(kludge)
      hadFocus.focus()
      if (hadFocus == div) { input.showPrimarySelection() }
    }, 50)
  }
  on(div, "copy", onCopyCut)
  on(div, "cut", onCopyCut)
};

ContentEditableInput.prototype.prepareSelection = function () {
  var result = prepareSelection(this.cm, false)
  result.focus = this.cm.state.focused
  return result
};

ContentEditableInput.prototype.showSelection = function (info, takeFocus) {
  if (!info || !this.cm.display.view.length) { return }
  if (info.focus || takeFocus) { this.showPrimarySelection() }
  this.showMultipleSelections(info)
};

ContentEditableInput.prototype.showPrimarySelection = function () {
  var sel = window.getSelection(), prim = this.cm.doc.sel.primary()
  var curAnchor = domToPos(this.cm, sel.anchorNode, sel.anchorOffset)
  var curFocus = domToPos(this.cm, sel.focusNode, sel.focusOffset)
  if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
      cmp(minPos(curAnchor, curFocus), prim.from()) == 0 &&
      cmp(maxPos(curAnchor, curFocus), prim.to()) == 0)
    { return }

  var start = posToDOM(this.cm, prim.from())
  var end = posToDOM(this.cm, prim.to())
  if (!start && !end) { return }

  var view = this.cm.display.view
  var old = sel.rangeCount && sel.getRangeAt(0)
  if (!start) {
    start = {node: view[0].measure.map[2], offset: 0}
  } else if (!end) { // FIXME dangerously hacky
    var measure = view[view.length - 1].measure
    var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map
    end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]}
  }

  var rng
  try { rng = range(start.node, start.offset, end.offset, end.node) }
  catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
  if (rng) {
    if (!gecko && this.cm.state.focused) {
      sel.collapse(start.node, start.offset)
      if (!rng.collapsed) {
        sel.removeAllRanges()
        sel.addRange(rng)
      }
    } else {
      sel.removeAllRanges()
      sel.addRange(rng)
    }
    if (old && sel.anchorNode == null) { sel.addRange(old) }
    else if (gecko) { this.startGracePeriod() }
  }
  this.rememberSelection()
};

ContentEditableInput.prototype.startGracePeriod = function () {
    var this$1 = this;

  clearTimeout(this.gracePeriod)
  this.gracePeriod = setTimeout(function () {
    this$1.gracePeriod = false
    if (this$1.selectionChanged())
      { this$1.cm.operation(function () { return this$1.cm.curOp.selectionChanged = true; }) }
  }, 20)
};

ContentEditableInput.prototype.showMultipleSelections = function (info) {
  removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors)
  removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection)
};

ContentEditableInput.prototype.rememberSelection = function () {
  var sel = window.getSelection()
  this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset
  this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset
};

ContentEditableInput.prototype.selectionInEditor = function () {
  var sel = window.getSelection()
  if (!sel.rangeCount) { return false }
  var node = sel.getRangeAt(0).commonAncestorContainer
  return contains(this.div, node)
};

ContentEditableInput.prototype.focus = function () {
  if (this.cm.options.readOnly != "nocursor") {
    if (!this.selectionInEditor())
      { this.showSelection(this.prepareSelection(), true) }
    this.div.focus()
  }
};
ContentEditableInput.prototype.blur = function () { this.div.blur() };
ContentEditableInput.prototype.getField = function () { return this.div };

ContentEditableInput.prototype.supportsTouch = function () { return true };

ContentEditableInput.prototype.receivedFocus = function () {
  var input = this
  if (this.selectionInEditor())
    { this.pollSelection() }
  else
    { runInOp(this.cm, function () { return input.cm.curOp.selectionChanged = true; }) }

  function poll() {
    if (input.cm.state.focused) {
      input.pollSelection()
      input.polling.set(input.cm.options.pollInterval, poll)
    }
  }
  this.polling.set(this.cm.options.pollInterval, poll)
};

ContentEditableInput.prototype.selectionChanged = function () {
  var sel = window.getSelection()
  return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
    sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset
};

ContentEditableInput.prototype.pollSelection = function () {
  if (!this.composing && this.readDOMTimeout == null && !this.gracePeriod && this.selectionChanged()) {
    var sel = window.getSelection(), cm = this.cm
    this.rememberSelection()
    var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset)
    var head = domToPos(cm, sel.focusNode, sel.focusOffset)
    if (anchor && head) { runInOp(cm, function () {
      setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll)
      if (anchor.bad || head.bad) { cm.curOp.selectionChanged = true }
    }) }
  }
};

ContentEditableInput.prototype.pollContent = function () {
  if (this.readDOMTimeout != null) {
    clearTimeout(this.readDOMTimeout)
    this.readDOMTimeout = null
  }

  var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary()
  var from = sel.from(), to = sel.to()
  if (from.ch == 0 && from.line > cm.firstLine())
    { from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length) }
  if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine())
    { to = Pos(to.line + 1, 0) }
  if (from.line < display.viewFrom || to.line > display.viewTo - 1) { return false }

  var fromIndex, fromLine, fromNode
  if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
    fromLine = lineNo(display.view[0].line)
    fromNode = display.view[0].node
  } else {
    fromLine = lineNo(display.view[fromIndex].line)
    fromNode = display.view[fromIndex - 1].node.nextSibling
  }
  var toIndex = findViewIndex(cm, to.line)
  var toLine, toNode
  if (toIndex == display.view.length - 1) {
    toLine = display.viewTo - 1
    toNode = display.lineDiv.lastChild
  } else {
    toLine = lineNo(display.view[toIndex + 1].line) - 1
    toNode = display.view[toIndex + 1].node.previousSibling
  }

  if (!fromNode) { return false }
  var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine))
  var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length))
  while (newText.length > 1 && oldText.length > 1) {
    if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine-- }
    else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++ }
    else { break }
  }

  var cutFront = 0, cutEnd = 0
  var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length)
  while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
    { ++cutFront }
  var newBot = lst(newText), oldBot = lst(oldText)
  var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
                           oldBot.length - (oldText.length == 1 ? cutFront : 0))
  while (cutEnd < maxCutEnd &&
         newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
    { ++cutEnd }

  newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "")
  newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "")

  var chFrom = Pos(fromLine, cutFront)
  var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0)
  if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
    replaceRange(cm.doc, newText, chFrom, chTo, "+input")
    return true
  }
};

ContentEditableInput.prototype.ensurePolled = function () {
  this.forceCompositionEnd()
};
ContentEditableInput.prototype.reset = function () {
  this.forceCompositionEnd()
};
ContentEditableInput.prototype.forceCompositionEnd = function () {
  if (!this.composing) { return }
  clearTimeout(this.readDOMTimeout)
  this.composing = null
  if (!this.pollContent()) { regChange(this.cm) }
  this.div.blur()
  this.div.focus()
};
ContentEditableInput.prototype.readFromDOMSoon = function () {
    var this$1 = this;

  if (this.readDOMTimeout != null) { return }
  this.readDOMTimeout = setTimeout(function () {
    this$1.readDOMTimeout = null
    if (this$1.composing) {
      if (this$1.composing.done) { this$1.composing = null }
      else { return }
    }
    if (this$1.cm.isReadOnly() || !this$1.pollContent())
      { runInOp(this$1.cm, function () { return regChange(this$1.cm); }) }
  }, 80)
};

ContentEditableInput.prototype.setUneditable = function (node) {
  node.contentEditable = "false"
};

ContentEditableInput.prototype.onKeyPress = function (e) {
  e.preventDefault()
  if (!this.cm.isReadOnly())
    { operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0) }
};

ContentEditableInput.prototype.readOnlyChanged = function (val) {
  this.div.contentEditable = String(val != "nocursor")
};

ContentEditableInput.prototype.onContextMenu = function () {};
ContentEditableInput.prototype.resetPosition = function () {};

ContentEditableInput.prototype.needsContentAttribute = true

function posToDOM(cm, pos) {
  var view = findViewForLine(cm, pos.line)
  if (!view || view.hidden) { return null }
  var line = getLine(cm.doc, pos.line)
  var info = mapFromLineView(view, line, pos.line)

  var order = getOrder(line), side = "left"
  if (order) {
    var partPos = getBidiPartAt(order, pos.ch)
    side = partPos % 2 ? "right" : "left"
  }
  var result = nodeAndOffsetInLineMap(info.map, pos.ch, side)
  result.offset = result.collapse == "right" ? result.end : result.start
  return result
}

function badPos(pos, bad) { if (bad) { pos.bad = true; } return pos }

function domTextBetween(cm, from, to, fromLine, toLine) {
  var text = "", closing = false, lineSep = cm.doc.lineSeparator()
  function recognizeMarker(id) { return function (marker) { return marker.id == id; } }
  function walk(node) {
    if (node.nodeType == 1) {
      var cmText = node.getAttribute("cm-text")
      if (cmText != null) {
        if (cmText == "") { text += node.textContent.replace(/\u200b/g, "") }
        else { text += cmText }
        return
      }
      var markerID = node.getAttribute("cm-marker"), range
      if (markerID) {
        var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID))
        if (found.length && (range = found[0].find()))
          { text += getBetween(cm.doc, range.from, range.to).join(lineSep) }
        return
      }
      if (node.getAttribute("contenteditable") == "false") { return }
      for (var i = 0; i < node.childNodes.length; i++)
        { walk(node.childNodes[i]) }
      if (/^(pre|div|p)$/i.test(node.nodeName))
        { closing = true }
    } else if (node.nodeType == 3) {
      var val = node.nodeValue
      if (!val) { return }
      if (closing) {
        text += lineSep
        closing = false
      }
      text += val
    }
  }
  for (;;) {
    walk(from)
    if (from == to) { break }
    from = from.nextSibling
  }
  return text
}

function domToPos(cm, node, offset) {
  var lineNode
  if (node == cm.display.lineDiv) {
    lineNode = cm.display.lineDiv.childNodes[offset]
    if (!lineNode) { return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true) }
    node = null; offset = 0
  } else {
    for (lineNode = node;; lineNode = lineNode.parentNode) {
      if (!lineNode || lineNode == cm.display.lineDiv) { return null }
      if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) { break }
    }
  }
  for (var i = 0; i < cm.display.view.length; i++) {
    var lineView = cm.display.view[i]
    if (lineView.node == lineNode)
      { return locateNodeInLineView(lineView, node, offset) }
  }
}

function locateNodeInLineView(lineView, node, offset) {
  var wrapper = lineView.text.firstChild, bad = false
  if (!node || !contains(wrapper, node)) { return badPos(Pos(lineNo(lineView.line), 0), true) }
  if (node == wrapper) {
    bad = true
    node = wrapper.childNodes[offset]
    offset = 0
    if (!node) {
      var line = lineView.rest ? lst(lineView.rest) : lineView.line
      return badPos(Pos(lineNo(line), line.text.length), bad)
    }
  }

  var textNode = node.nodeType == 3 ? node : null, topNode = node
  if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
    textNode = node.firstChild
    if (offset) { offset = textNode.nodeValue.length }
  }
  while (topNode.parentNode != wrapper) { topNode = topNode.parentNode }
  var measure = lineView.measure, maps = measure.maps

  function find(textNode, topNode, offset) {
    for (var i = -1; i < (maps ? maps.length : 0); i++) {
      var map = i < 0 ? measure.map : maps[i]
      for (var j = 0; j < map.length; j += 3) {
        var curNode = map[j + 2]
        if (curNode == textNode || curNode == topNode) {
          var line = lineNo(i < 0 ? lineView.line : lineView.rest[i])
          var ch = map[j] + offset
          if (offset < 0 || curNode != textNode) { ch = map[j + (offset ? 1 : 0)] }
          return Pos(line, ch)
        }
      }
    }
  }
  var found = find(textNode, topNode, offset)
  if (found) { return badPos(found, bad) }

  // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
  for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
    found = find(after, after.firstChild, 0)
    if (found)
      { return badPos(Pos(found.line, found.ch - dist), bad) }
    else
      { dist += after.textContent.length }
  }
  for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
    found = find(before, before.firstChild, -1)
    if (found)
      { return badPos(Pos(found.line, found.ch + dist$1), bad) }
    else
      { dist$1 += before.textContent.length }
  }
}

// TEXTAREA INPUT STYLE

var TextareaInput = function(cm) {
  this.cm = cm
  // See input.poll and input.reset
  this.prevInput = ""

  // Flag that indicates whether we expect input to appear real soon
  // now (after some event like 'keypress' or 'input') and are
  // polling intensively.
  this.pollingFast = false
  // Self-resetting timeout for the poller
  this.polling = new Delayed()
  // Tracks when input.reset has punted to just putting a short
  // string into the textarea instead of the full selection.
  this.inaccurateSelection = false
  // Used to work around IE issue with selection being forgotten when focus moves away from textarea
  this.hasSelection = false
  this.composing = null
};

TextareaInput.prototype.init = function (display) {
    var this$1 = this;

  var input = this, cm = this.cm

  // Wraps and hides input textarea
  var div = this.wrapper = hiddenTextarea()
  // The semihidden textarea that is focused when the editor is
  // focused, and receives input.
  var te = this.textarea = div.firstChild
  display.wrapper.insertBefore(div, display.wrapper.firstChild)

  // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
  if (ios) { te.style.width = "0px" }

  on(te, "input", function () {
    if (ie && ie_version >= 9 && this$1.hasSelection) { this$1.hasSelection = null }
    input.poll()
  })

  on(te, "paste", function (e) {
    if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }

    cm.state.pasteIncoming = true
    input.fastPoll()
  })

  function prepareCopyCut(e) {
    if (signalDOMEvent(cm, e)) { return }
    if (cm.somethingSelected()) {
      setLastCopied({lineWise: false, text: cm.getSelections()})
      if (input.inaccurateSelection) {
        input.prevInput = ""
        input.inaccurateSelection = false
        te.value = lastCopied.text.join("\n")
        selectInput(te)
      }
    } else if (!cm.options.lineWiseCopyCut) {
      return
    } else {
      var ranges = copyableRanges(cm)
      setLastCopied({lineWise: true, text: ranges.text})
      if (e.type == "cut") {
        cm.setSelections(ranges.ranges, null, sel_dontScroll)
      } else {
        input.prevInput = ""
        te.value = ranges.text.join("\n")
        selectInput(te)
      }
    }
    if (e.type == "cut") { cm.state.cutIncoming = true }
  }
  on(te, "cut", prepareCopyCut)
  on(te, "copy", prepareCopyCut)

  on(display.scroller, "paste", function (e) {
    if (eventInWidget(display, e) || signalDOMEvent(cm, e)) { return }
    cm.state.pasteIncoming = true
    input.focus()
  })

  // Prevent normal selection in the editor (we handle our own)
  on(display.lineSpace, "selectstart", function (e) {
    if (!eventInWidget(display, e)) { e_preventDefault(e) }
  })

  on(te, "compositionstart", function () {
    var start = cm.getCursor("from")
    if (input.composing) { input.composing.range.clear() }
    input.composing = {
      start: start,
      range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
    }
  })
  on(te, "compositionend", function () {
    if (input.composing) {
      input.poll()
      input.composing.range.clear()
      input.composing = null
    }
  })
};

TextareaInput.prototype.prepareSelection = function () {
  // Redraw the selection and/or cursor
  var cm = this.cm, display = cm.display, doc = cm.doc
  var result = prepareSelection(cm)

  // Move the hidden textarea near the cursor to prevent scrolling artifacts
  if (cm.options.moveInputWithCursor) {
    var headPos = cursorCoords(cm, doc.sel.primary().head, "div")
    var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect()
    result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
                                        headPos.top + lineOff.top - wrapOff.top))
    result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
                                         headPos.left + lineOff.left - wrapOff.left))
  }

  return result
};

TextareaInput.prototype.showSelection = function (drawn) {
  var cm = this.cm, display = cm.display
  removeChildrenAndAdd(display.cursorDiv, drawn.cursors)
  removeChildrenAndAdd(display.selectionDiv, drawn.selection)
  if (drawn.teTop != null) {
    this.wrapper.style.top = drawn.teTop + "px"
    this.wrapper.style.left = drawn.teLeft + "px"
  }
};

// Reset the input to correspond to the selection (or to be empty,
// when not typing and nothing is selected)
TextareaInput.prototype.reset = function (typing) {
  if (this.contextMenuPending) { return }
  var minimal, selected, cm = this.cm, doc = cm.doc
  if (cm.somethingSelected()) {
    this.prevInput = ""
    var range = doc.sel.primary()
    minimal = hasCopyEvent &&
      (range.to().line - range.from().line > 100 || (selected = cm.getSelection()).length > 1000)
    var content = minimal ? "-" : selected || cm.getSelection()
    this.textarea.value = content
    if (cm.state.focused) { selectInput(this.textarea) }
    if (ie && ie_version >= 9) { this.hasSelection = content }
  } else if (!typing) {
    this.prevInput = this.textarea.value = ""
    if (ie && ie_version >= 9) { this.hasSelection = null }
  }
  this.inaccurateSelection = minimal
};

TextareaInput.prototype.getField = function () { return this.textarea };

TextareaInput.prototype.supportsTouch = function () { return false };

TextareaInput.prototype.focus = function () {
  if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
    try { this.textarea.focus() }
    catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
  }
};

TextareaInput.prototype.blur = function () { this.textarea.blur() };

TextareaInput.prototype.resetPosition = function () {
  this.wrapper.style.top = this.wrapper.style.left = 0
};

TextareaInput.prototype.receivedFocus = function () { this.slowPoll() };

// Poll for input changes, using the normal rate of polling. This
// runs as long as the editor is focused.
TextareaInput.prototype.slowPoll = function () {
    var this$1 = this;

  if (this.pollingFast) { return }
  this.polling.set(this.cm.options.pollInterval, function () {
    this$1.poll()
    if (this$1.cm.state.focused) { this$1.slowPoll() }
  })
};

// When an event has just come in that is likely to add or change
// something in the input textarea, we poll faster, to ensure that
// the change appears on the screen quickly.
TextareaInput.prototype.fastPoll = function () {
  var missed = false, input = this
  input.pollingFast = true
  function p() {
    var changed = input.poll()
    if (!changed && !missed) {missed = true; input.polling.set(60, p)}
    else {input.pollingFast = false; input.slowPoll()}
  }
  input.polling.set(20, p)
};

// Read input from the textarea, and update the document to match.
// When something is selected, it is present in the textarea, and
// selected (unless it is huge, in which case a placeholder is
// used). When nothing is selected, the cursor sits after previously
// seen text (can be empty), which is stored in prevInput (we must
// not reset the textarea when typing, because that breaks IME).
TextareaInput.prototype.poll = function () {
    var this$1 = this;

  var cm = this.cm, input = this.textarea, prevInput = this.prevInput
  // Since this is called a *lot*, try to bail out as cheaply as
  // possible when it is clear that nothing happened. hasSelection
  // will be the case when there is a lot of text in the textarea,
  // in which case reading its value would be expensive.
  if (this.contextMenuPending || !cm.state.focused ||
      (hasSelection(input) && !prevInput && !this.composing) ||
      cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
    { return false }

  var text = input.value
  // If nothing changed, bail.
  if (text == prevInput && !cm.somethingSelected()) { return false }
  // Work around nonsensical selection resetting in IE9/10, and
  // inexplicable appearance of private area unicode characters on
  // some key combos in Mac (#2689).
  if (ie && ie_version >= 9 && this.hasSelection === text ||
      mac && /[\uf700-\uf7ff]/.test(text)) {
    cm.display.input.reset()
    return false
  }

  if (cm.doc.sel == cm.display.selForContextMenu) {
    var first = text.charCodeAt(0)
    if (first == 0x200b && !prevInput) { prevInput = "\u200b" }
    if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo") }
  }
  // Find the part of the input that is actually new
  var same = 0, l = Math.min(prevInput.length, text.length)
  while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) { ++same }

  runInOp(cm, function () {
    applyTextInput(cm, text.slice(same), prevInput.length - same,
                   null, this$1.composing ? "*compose" : null)

    // Don't leave long text in the textarea, since it makes further polling slow
    if (text.length > 1000 || text.indexOf("\n") > -1) { input.value = this$1.prevInput = "" }
    else { this$1.prevInput = text }

    if (this$1.composing) {
      this$1.composing.range.clear()
      this$1.composing.range = cm.markText(this$1.composing.start, cm.getCursor("to"),
                                         {className: "CodeMirror-composing"})
    }
  })
  return true
};

TextareaInput.prototype.ensurePolled = function () {
  if (this.pollingFast && this.poll()) { this.pollingFast = false }
};

TextareaInput.prototype.onKeyPress = function () {
  if (ie && ie_version >= 9) { this.hasSelection = null }
  this.fastPoll()
};

TextareaInput.prototype.onContextMenu = function (e) {
  var input = this, cm = input.cm, display = cm.display, te = input.textarea
  var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop
  if (!pos || presto) { return } // Opera is difficult.

  // Reset the current text selection only if the click is done outside of the selection
  // and 'resetSelectionOnContextMenu' option is true.
  var reset = cm.options.resetSelectionOnContextMenu
  if (reset && cm.doc.sel.contains(pos) == -1)
    { operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll) }

  var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText
  input.wrapper.style.cssText = "position: absolute"
  var wrapperBox = input.wrapper.getBoundingClientRect()
  te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"
  var oldScrollY
  if (webkit) { oldScrollY = window.scrollY } // Work around Chrome issue (#2712)
  display.input.focus()
  if (webkit) { window.scrollTo(null, oldScrollY) }
  display.input.reset()
  // Adds "Select all" to context menu in FF
  if (!cm.somethingSelected()) { te.value = input.prevInput = " " }
  input.contextMenuPending = true
  display.selForContextMenu = cm.doc.sel
  clearTimeout(display.detectingSelectAll)

  // Select-all will be greyed out if there's nothing to select, so
  // this adds a zero-width space so that we can later check whether
  // it got selected.
  function prepareSelectAllHack() {
    if (te.selectionStart != null) {
      var selected = cm.somethingSelected()
      var extval = "\u200b" + (selected ? te.value : "")
      te.value = "\u21da" // Used to catch context-menu undo
      te.value = extval
      input.prevInput = selected ? "" : "\u200b"
      te.selectionStart = 1; te.selectionEnd = extval.length
      // Re-set this, in case some other handler touched the
      // selection in the meantime.
      display.selForContextMenu = cm.doc.sel
    }
  }
  function rehide() {
    input.contextMenuPending = false
    input.wrapper.style.cssText = oldWrapperCSS
    te.style.cssText = oldCSS
    if (ie && ie_version < 9) { display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos) }

    // Try to detect the user choosing select-all
    if (te.selectionStart != null) {
      if (!ie || (ie && ie_version < 9)) { prepareSelectAllHack() }
      var i = 0, poll = function () {
        if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
            te.selectionEnd > 0 && input.prevInput == "\u200b")
          { operation(cm, selectAll)(cm) }
        else if (i++ < 10) { display.detectingSelectAll = setTimeout(poll, 500) }
        else { display.input.reset() }
      }
      display.detectingSelectAll = setTimeout(poll, 200)
    }
  }

  if (ie && ie_version >= 9) { prepareSelectAllHack() }
  if (captureRightClick) {
    e_stop(e)
    var mouseup = function () {
      off(window, "mouseup", mouseup)
      setTimeout(rehide, 20)
    }
    on(window, "mouseup", mouseup)
  } else {
    setTimeout(rehide, 50)
  }
};

TextareaInput.prototype.readOnlyChanged = function (val) {
  if (!val) { this.reset() }
};

TextareaInput.prototype.setUneditable = function () {};

TextareaInput.prototype.needsContentAttribute = false

function fromTextArea(textarea, options) {
  options = options ? copyObj(options) : {}
  options.value = textarea.value
  if (!options.tabindex && textarea.tabIndex)
    { options.tabindex = textarea.tabIndex }
  if (!options.placeholder && textarea.placeholder)
    { options.placeholder = textarea.placeholder }
  // Set autofocus to true if this textarea is focused, or if it has
  // autofocus and no other element is focused.
  if (options.autofocus == null) {
    var hasFocus = activeElt()
    options.autofocus = hasFocus == textarea ||
      textarea.getAttribute("autofocus") != null && hasFocus == document.body
  }

  function save() {textarea.value = cm.getValue()}

  var realSubmit
  if (textarea.form) {
    on(textarea.form, "submit", save)
    // Deplorable hack to make the submit method do the right thing.
    if (!options.leaveSubmitMethodAlone) {
      var form = textarea.form
      realSubmit = form.submit
      try {
        var wrappedSubmit = form.submit = function () {
          save()
          form.submit = realSubmit
          form.submit()
          form.submit = wrappedSubmit
        }
      } catch(e) {}
    }
  }

  options.finishInit = function (cm) {
    cm.save = save
    cm.getTextArea = function () { return textarea; }
    cm.toTextArea = function () {
      cm.toTextArea = isNaN // Prevent this from being ran twice
      save()
      textarea.parentNode.removeChild(cm.getWrapperElement())
      textarea.style.display = ""
      if (textarea.form) {
        off(textarea.form, "submit", save)
        if (typeof textarea.form.submit == "function")
          { textarea.form.submit = realSubmit }
      }
    }
  }

  textarea.style.display = "none"
  var cm = CodeMirror(function (node) { return textarea.parentNode.insertBefore(node, textarea.nextSibling); },
    options)
  return cm
}

function addLegacyProps(CodeMirror) {
  CodeMirror.off = off
  CodeMirror.on = on
  CodeMirror.wheelEventPixels = wheelEventPixels
  CodeMirror.Doc = Doc
  CodeMirror.splitLines = splitLinesAuto
  CodeMirror.countColumn = countColumn
  CodeMirror.findColumn = findColumn
  CodeMirror.isWordChar = isWordCharBasic
  CodeMirror.Pass = Pass
  CodeMirror.signal = signal
  CodeMirror.Line = Line
  CodeMirror.changeEnd = changeEnd
  CodeMirror.scrollbarModel = scrollbarModel
  CodeMirror.Pos = Pos
  CodeMirror.cmpPos = cmp
  CodeMirror.modes = modes
  CodeMirror.mimeModes = mimeModes
  CodeMirror.resolveMode = resolveMode
  CodeMirror.getMode = getMode
  CodeMirror.modeExtensions = modeExtensions
  CodeMirror.extendMode = extendMode
  CodeMirror.copyState = copyState
  CodeMirror.startState = startState
  CodeMirror.innerMode = innerMode
  CodeMirror.commands = commands
  CodeMirror.keyMap = keyMap
  CodeMirror.keyName = keyName
  CodeMirror.isModifierKey = isModifierKey
  CodeMirror.lookupKey = lookupKey
  CodeMirror.normalizeKeyMap = normalizeKeyMap
  CodeMirror.StringStream = StringStream
  CodeMirror.SharedTextMarker = SharedTextMarker
  CodeMirror.TextMarker = TextMarker
  CodeMirror.LineWidget = LineWidget
  CodeMirror.e_preventDefault = e_preventDefault
  CodeMirror.e_stopPropagation = e_stopPropagation
  CodeMirror.e_stop = e_stop
  CodeMirror.addClass = addClass
  CodeMirror.contains = contains
  CodeMirror.rmClass = rmClass
  CodeMirror.keyNames = keyNames
}

// EDITOR CONSTRUCTOR

defineOptions(CodeMirror)

addEditorMethods(CodeMirror)

// Set up methods on CodeMirror's prototype to redirect to the editor's document.
var dontDelegate = "iter insert remove copy getEditor constructor".split(" ")
for (var prop in Doc.prototype) { if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
  { CodeMirror.prototype[prop] = (function(method) {
    return function() {return method.apply(this.doc, arguments)}
  })(Doc.prototype[prop]) } }

eventMixin(Doc)

// INPUT HANDLING

CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput}

// MODE DEFINITION AND QUERYING

// Extra arguments are stored as the mode's dependencies, which is
// used by (legacy) mechanisms like loadmode.js to automatically
// load a mode. (Preferred mechanism is the require/define calls.)
CodeMirror.defineMode = function(name/*, mode, …*/) {
  if (!CodeMirror.defaults.mode && name != "null") { CodeMirror.defaults.mode = name }
  defineMode.apply(this, arguments)
}

CodeMirror.defineMIME = defineMIME

// Minimal default mode.
CodeMirror.defineMode("null", function () { return ({token: function (stream) { return stream.skipToEnd(); }}); })
CodeMirror.defineMIME("text/plain", "null")

// EXTENSIONS

CodeMirror.defineExtension = function (name, func) {
  CodeMirror.prototype[name] = func
}
CodeMirror.defineDocExtension = function (name, func) {
  Doc.prototype[name] = func
}

CodeMirror.fromTextArea = fromTextArea

addLegacyProps(CodeMirror)

CodeMirror.version = "5.23.0"

return CodeMirror;

})));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(0);
var Actions_1 = __webpack_require__(2);
var ENTER = 13;
var ESC = 27;
var Prompt = (function () {
    function Prompt(container, d, mode) {
        var _this = this;
        this.container = container;
        this.mode = mode;
        this.textarea = $("<textarea class=\"prompt" + (mode == 'varname' ? ' input-border' : '') + "\"></textarea>");
        this.distpatcher = d;
        if (mode == 'varname') {
            this.textarea.keydown(function (e) {
                if (e.which == ENTER) {
                    var name_1 = _this.textarea.val();
                    _this.close();
                    _this.distpatcher.dispatch({ kind: Actions_1.ActionKind.SendVarName, name: name_1 });
                }
                else if (e.which == ESC) {
                    _this.close();
                }
            });
        }
        else {
            this.textarea.keydown(function (e) {
                if (e.which == ENTER) {
                    var input = _this.textarea.val();
                    _this.close();
                    _this.distpatcher.dispatch({ kind: Actions_1.ActionKind.SendInput, input: input });
                }
            });
        }
        this.container.append(this.textarea);
        this.textarea.focus();
    }
    Prompt.prototype.close = function () {
        if (this.mode == 'varname') {
            this.textarea.remove();
        }
        else {
            var new_line = $("<div class=\"line\"><span>&gt;" + this.textarea.val() + "</span></div>");
            this.textarea.replaceWith(new_line);
            this.textarea = null;
        }
    };
    return Prompt;
}());
exports.default = Prompt;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var interprete_pl_1 = __webpack_require__(5);
var Actions_1 = __webpack_require__(2);
var AppUI_1 = __webpack_require__(28);
var $ = __webpack_require__(0);
var Dispatcher = (function () {
    function Dispatcher(c) {
        this.controller = c;
    }
    Dispatcher.prototype.dispatch = function (a) {
        this.controller.do(a);
    };
    return Dispatcher;
}());
exports.Dispatcher = Dispatcher;
var Controller = (function () {
    function Controller(container, debug) {
        var action_dispatcher = new Dispatcher(this);
        this.debug = debug;
        this.program_running = false;
        this.by_steps = false;
        this.app_ui = new AppUI_1.default($('body'), container, action_dispatcher, { debug: debug });
        this.interpreter = new interprete_pl_1.Interpreter();
        this.parser = new interprete_pl_1.Parser();
    }
    Controller.prototype.do = function (a) {
        switch (a.kind) {
            case Actions_1.ActionKind.Execute:
                this.do({ kind: Actions_1.ActionKind.ClearMessages });
                this.do({ kind: Actions_1.ActionKind.ClearOutput });
                if (!this.program_running) {
                    this.by_steps = false;
                    var compiled_program_maybe = this.compile(a.code);
                    if (!compiled_program_maybe.error) {
                        this.app_ui.clear_vars();
                        this.program_running = true;
                        var program = compiled_program_maybe.result;
                        this.do({ kind: Actions_1.ActionKind.SetUpInterpreter, program: program });
                        if (this.debug) {
                            this.do({ kind: Actions_1.ActionKind.ShowCompiledCode, code: interprete_pl_1.fr_writer(program) });
                        }
                        this.do({ kind: Actions_1.ActionKind.DisableButtons });
                        this.execute();
                    }
                }
                break;
            case Actions_1.ActionKind.Step:
                this.step();
                this.do({ kind: Actions_1.ActionKind.UpdateVars });
                break;
            case Actions_1.ActionKind.FocusEditor:
                this.app_ui.focus_editor();
                break;
            case Actions_1.ActionKind.MoveCursor:
                this.move_cursor(a.line, a.column);
                break;
            case Actions_1.ActionKind.DragHandle:
                break;
            case Actions_1.ActionKind.ShowMessage:
                this.show_message(a.message);
                break;
            case Actions_1.ActionKind.ClearMessages:
                this.clear_messages();
                break;
            case Actions_1.ActionKind.SendInput:
                this.send_input(a.input);
                this.resume_program();
                break;
            case Actions_1.ActionKind.Write:
                this.write(a.value);
                break;
            case Actions_1.ActionKind.ClearOutput:
                this.clear_output();
                break;
            case Actions_1.ActionKind.ShowCompiledCode:
                this.show_compiled_code(a.code);
                break;
            case Actions_1.ActionKind.SetUpInterpreter:
                this.set_up_interpreter(a.program);
                break;
            case Actions_1.ActionKind.ExecuteBySteps:
                this.do({ kind: Actions_1.ActionKind.ClearMessages });
                this.do({ kind: Actions_1.ActionKind.ClearOutput });
                if (!this.program_running) {
                    this.by_steps = true;
                    var compiled_program_maybe = this.compile(a.code);
                    if (!compiled_program_maybe.error) {
                        this.app_ui.show_step_controls();
                        this.program_running = true;
                        var program = compiled_program_maybe.result;
                        this.do({ kind: Actions_1.ActionKind.SetUpInterpreter, program: program });
                        if (this.debug) {
                            this.do({ kind: Actions_1.ActionKind.ShowCompiledCode, code: interprete_pl_1.fr_writer(program) });
                        }
                        this.do({ kind: Actions_1.ActionKind.DisableButtons });
                        this.do({ kind: Actions_1.ActionKind.Step });
                    }
                }
                break;
            case Actions_1.ActionKind.StopExecution:
                this.program_running = false;
                this.app_ui.hide_step_controls();
                this.app_ui.write('Programa finalizado correctamente.');
                this.do({ kind: Actions_1.ActionKind.EnableButtons });
                break;
            case Actions_1.ActionKind.StopExecutionWithError:
                this.program_running = false;
                this.app_ui.hide_step_controls();
                this.app_ui.write('Programa finalizado con un error.');
                this.do({ kind: Actions_1.ActionKind.EnableButtons });
                break;
            case Actions_1.ActionKind.StopExecutionUser:
                this.program_running = false;
                this.app_ui.hide_step_controls();
                this.app_ui.write('Programa finalizado por el usuario.');
                this.do({ kind: Actions_1.ActionKind.EnableButtons });
                break;
            case Actions_1.ActionKind.CompileAndShow:
                this.do({ kind: Actions_1.ActionKind.ClearMessages });
                this.do({ kind: Actions_1.ActionKind.ClearOutput });
                var result = this.compile(a.code).result;
                if (result != null) {
                    this.do({ kind: Actions_1.ActionKind.ShowCompiledCode, code: interprete_pl_1.fr_writer(result) });
                }
                break;
            case Actions_1.ActionKind.DisableButtons:
                this.app_ui.disable_buttons();
                break;
            case Actions_1.ActionKind.EnableButtons:
                this.app_ui.enable_buttons();
                break;
            case Actions_1.ActionKind.HidePanel:
            case Actions_1.ActionKind.ShowPanel:
                this.app_ui.toggle_panel(a.container_index, a.panel_index);
                break;
            case Actions_1.ActionKind.SendVarName:
                this.add_var(a.name);
                break;
            case Actions_1.ActionKind.UpdateVars:
                this.update_vars();
                break;
            case Actions_1.ActionKind.RemoveVarFromInspection:
                this.remove_var(a.name);
                break;
            case Actions_1.ActionKind.RemoveMsgFromInspection:
                this.remove_msg(a.name);
                break;
        }
    };
    Controller.prototype.remove_msg = function (name) {
        this.app_ui.remove_msg(name);
    };
    Controller.prototype.remove_var = function (name) {
        this.app_ui.remove_var(name);
    };
    Controller.prototype.update_vars = function () {
        var var_names = this.app_ui.get_var_names();
        for (var _i = 0, var_names_1 = var_names; _i < var_names_1.length; _i++) {
            var name_1 = var_names_1[_i];
            this.update_var(name_1);
        }
    };
    Controller.prototype.update_var = function (name) {
        var var_info = this.interpreter.search_var(name);
        if (var_info.state == interprete_pl_1.VarState.ExistsInit) {
            var bv = this.interpreter.export_var(name);
            this.app_ui.update_var(name, bv);
        }
        else {
            this.app_ui.change_var_state(name, var_info.state);
        }
    };
    Controller.prototype.add_var = function (name) {
        var var_info = this.interpreter.search_var(name);
        if (var_info.state == interprete_pl_1.VarState.ExistsInit || var_info.state == interprete_pl_1.VarState.ExistsNotInit) {
            var bv = this.interpreter.export_var(name);
            if (var_info.state == interprete_pl_1.VarState.ExistsInit) {
                this.app_ui.add_var(name, true, true, var_info, bv);
            }
            else {
                this.app_ui.add_var(name, true, false, var_info, bv);
            }
        }
        else if (var_info.state == interprete_pl_1.VarState.ExistsOutOfScope) {
            this.app_ui.add_var(name, false, false, var_info, null);
        }
        else {
            this.app_ui.add_inspection_message(name);
        }
    };
    Controller.prototype.interpreter_action = function (a) {
        switch (a.kind) {
            case 'action':
                switch (a.action) {
                    case 'read':
                        this.read();
                        break;
                    case 'write':
                        this.write(a.value);
                        break;
                }
                break;
            case 'info':
                this.move_cursor(a.pos.line, a.pos.column);
                break;
        }
    };
    Controller.prototype.resume_program = function () {
        if (this.by_steps) {
            this.step();
        }
        else {
            this.execute();
        }
    };
    Controller.prototype.step = function () {
        if (!this.interpreter.is_done()) {
            var output = this.interpreter.step();
            if (output.error == false) {
                this.interpreter_action(output.result);
            }
            else {
                this.do({ kind: Actions_1.ActionKind.StopExecutionWithError });
                this.do({ kind: Actions_1.ActionKind.ShowMessage, message: output.result });
            }
        }
        else {
            this.do({ kind: Actions_1.ActionKind.StopExecution });
        }
    };
    Controller.prototype.set_up_interpreter = function (program) {
        if (program != null) {
            this.interpreter.program = program;
        }
    };
    Controller.prototype.move_cursor = function (line, column) {
        this.app_ui.move_cursor(line, column);
    };
    Controller.prototype.show_compiled_code = function (code) {
        if (code != null) {
            this.app_ui.code_panel.contents = code;
        }
    };
    Controller.prototype.clear_output = function () {
        this.app_ui.clear_output();
    };
    Controller.prototype.clear_messages = function () {
        this.app_ui.clear_messages();
    };
    Controller.prototype.show_message = function (m) {
        this.app_ui.show_message(m);
    };
    Controller.prototype.execute = function () {
        if (!this.interpreter.is_done()) {
            var output = this.interpreter.run();
            var done = false;
            while (!done && output.error == false) {
                var action = void 0;
                if (output.result.kind == 'action') {
                    action = output.result;
                    this.interpreter_action(action);
                }
                if (!this.interpreter.is_done()) {
                    output = this.interpreter.run();
                }
                else {
                    done = true;
                }
            }
            if (output.error == true) {
                this.do({ kind: Actions_1.ActionKind.ShowMessage, message: output.result });
                this.do({ kind: Actions_1.ActionKind.StopExecutionWithError });
            }
            else {
                this.do({ kind: Actions_1.ActionKind.StopExecution });
            }
        }
        else {
            this.do({ kind: Actions_1.ActionKind.StopExecution });
        }
    };
    Controller.prototype.compile = function (code) {
        var parsed_program = this.parser.parse(code);
        if (parsed_program.error == false) {
            var transformed_program = interprete_pl_1.transform(parsed_program.result);
            if (transformed_program.error == false) {
                return transformed_program;
            }
            else {
                var errors = transformed_program.result;
                for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
                    var error = errors_1[_i];
                    this.do({ kind: Actions_1.ActionKind.ShowMessage, message: error });
                }
                return { error: true, result: null };
            }
        }
        else {
            var errors = parsed_program.result;
            for (var _a = 0, errors_2 = errors; _a < errors_2.length; _a++) {
                var error = errors_2[_a];
                this.do({ kind: Actions_1.ActionKind.ShowMessage, message: error });
            }
            return { error: true, result: null };
        }
    };
    Controller.prototype.send_input = function (input) {
        this.interpreter.send(input);
    };
    Controller.prototype.write = function (v) {
        this.app_ui.write(v);
    };
    Controller.prototype.read = function () {
        this.app_ui.read();
    };
    return Controller;
}());
exports.Controller = Controller;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = __webpack_require__(1);
var interfaces_2 = __webpack_require__(1);
var helpers_1 = __webpack_require__(3);
var Evaluator = (function () {
    function Evaluator(program) {
        this.entry_point = program.entry_point;
        this.modules = program.modules;
        this.frame_templates = program.local_variables;
        this.frame_stack = [this.make_frame('main')];
        this.current_statement = this.entry_point;
        this.current_module = 'main';
        this.state = {
            done: this.entry_point === null ? true : false,
            value_stack: [],
            module_stack: [],
            statement_stack: [],
            last_report: { error: false, result: { kind: 'action', action: 'none', done: this.entry_point === null ? true : false } },
            next_statement: null,
            next_frame: null,
            paused: false,
        };
    }
    /**
     * get_value_stack
     * devuelve la pila de valores
     */
    Evaluator.prototype.get_value_stack = function () {
        return this.state.value_stack;
    };
    /**
     * Busca una variable y devuelve su estado
     * @param {name} nombre de la variable buscada
     */
    Evaluator.prototype.search_var = function (name) {
        var locals = this.get_locals();
        var globals = this.get_globals();
        if (name in locals) {
            // la variable existe, hay que ver si esta inicializada
            var var_maybe = this.get_var(name);
            if (var_maybe.type == 'alias') {
                var variable = this.resolve_alias(var_maybe).variable;
                return { type: variable.type == 'vector' ? 'vector' : 'scalar', state: variable.init ? interfaces_2.VarState.ExistsInit : interfaces_2.VarState.ExistsNotInit };
            }
            else {
                return { type: var_maybe.type == 'vector' ? 'vector' : 'scalar', state: var_maybe.init ? interfaces_2.VarState.ExistsInit : interfaces_2.VarState.ExistsNotInit };
            }
        }
        else {
            if (name in globals) {
                // la variable existe, hay que ver si esta inicializada
                var var_maybe = this.get_var(name);
                if (var_maybe.type == 'alias') {
                    var variable = this.resolve_alias(var_maybe).variable;
                    return { type: variable.type == 'vector' ? 'vector' : 'scalar', state: variable.init ? interfaces_2.VarState.ExistsInit : interfaces_2.VarState.ExistsNotInit };
                }
                else {
                    return { type: var_maybe.type == 'vector' ? 'vector' : 'scalar', state: var_maybe.init ? interfaces_2.VarState.ExistsInit : interfaces_2.VarState.ExistsNotInit };
                }
            }
            else {
                // buscar en los otros ambitos
                var other_scopes = this.frame_stack.slice(1, this.frame_stack.length - 2);
                for (var scope_name in this.frame_templates) {
                    var scope = this.frame_templates[scope_name];
                    if (name in scope) {
                        var variable = scope[name];
                        var type = variable.type == 'array' ? 'vector' : 'scalar';
                        return { type: type, state: interfaces_2.VarState.ExistsOutOfScope };
                    }
                }
                return { type: 'scalar', state: interfaces_2.VarState.DoesntExist };
            }
        }
    };
    /**
     * export_var
     * busca una variable y devuelve su valor/un arreglo de sus valores.
     */
    Evaluator.prototype.export_var = function (name) {
        var var_found = this.get_var(name);
        if (var_found.type == 'alias') {
            var _a = this.resolve_alias(var_found), variable = _a.variable, pre_indexes = _a.pre_indexes;
            // Por ahora se ignoran los pre_indexes porque se devuelven todos los valores de los arreglos.
            // No hay manera (todavia) de devolver solo un "segmento" de un arreglo
            if (variable.type == 'variable') {
                return { type: 'scalar', value: variable.value };
            }
            else {
                return { type: 'vector', cells: variable.values.map(function (value, index) { return { index: index, value: value }; }).filter(function (v) { return typeof v.value != 'undefined'; }) };
            }
        }
        else {
            var variable = var_found;
            if (variable.type == 'variable') {
                return { type: 'scalar', value: variable.value };
            }
            else {
                return { type: 'vector', cells: variable.values.map(function (value, index) { return { index: index, value: value }; }).filter(function (v) { return typeof v.value != 'undefined'; }) };
            }
        }
    };
    /**
     * get_locals
     * devuelve las variables locales del modulo en ejecucion.
     */
    Evaluator.prototype.get_locals = function () {
        return this.frame_stack[this.frame_stack.length - 1];
    };
    /**
     * get_globals
     * devuelve las variables globales de este evaluador.
     */
    Evaluator.prototype.get_globals = function () {
        return this.frame_stack[0];
    };
    Evaluator.prototype.input = function (v) {
        /**
         * Esto resume el evaluador en caso de que haya estado en pausa.
         */
        this.state.paused = false;
        this.state.value_stack.push(v);
    };
    Evaluator.prototype.get_statement_info = function () {
        var pos;
        if ('pos' in this.current_statement) {
            pos = this.current_statement.pos;
        }
        else {
            pos = { line: 0, column: 0 };
        }
        var is_user_statement;
        if ('is_user_stmnt' in this.current_statement) {
            is_user_statement = this.current_statement.is_user_stmnt;
        }
        else {
            is_user_statement = false;
        }
        return { is_user_statement: is_user_statement, pos: pos };
    };
    Evaluator.prototype.step = function () {
        /**
         * El evaluador esta en pausa cuando esta esperando que sea realice alguna lectura.
         */
        if (this.state.paused) {
            return { error: false, result: { kind: 'action', action: 'paused', done: this.state.done } };
        }
        if (this.state.done) {
            return this.state.last_report;
        }
        var report = this.evaluate(this.current_statement);
        this.state.last_report = report;
        /**
         * Determinar si la ejecución terminó:
         * Pudo haber terminado porque se llegó al fin del
         * programa o porque hubo un error al evaluar el
         * enunciado anterior.
         */
        if (report.error) {
            this.state.done = true;
            return this.state.last_report;
        }
        else if (report.error == false) {
            /**
             * Determinar si se llegó al fin del programa.
             * this.state.next_statement ya fue establecido
             * durante la llamada a this.evaluate
             */
            /**
             * Si se llegó al final del modulo actual, desapilar modulos hasta
             * que se encuentre uno que todavia no haya finalizado.
             */
            while (this.state.next_statement == null && this.state.statement_stack.length > 0) {
                this.state.next_statement = this.state.statement_stack.pop();
                this.current_module = this.state.module_stack.pop();
                this.frame_stack.pop();
            }
            /**
             * Si aun despues de desapilar todo se encuentra que no hay
             * un enunciado para ejecutar, se llegó al fin del programa.
             */
            if (this.state.next_statement == null) {
                this.state.done = true;
                report.result.done = this.state.done;
            }
            this.current_statement = this.state.next_statement;
            return report;
        }
    };
    /**
     * evaluate
     * ejecuta los enunciados y establece el proximo enunciado
     */
    Evaluator.prototype.evaluate = function (s) {
        /**
         * Bandera que indica si el control del proximo enunciado se cede
         * a la función que lo evalua. Esto es verdadero para las estructuras
         * de control y  para las llamadas a funciones/procedimientos.
         */
        var controls_next = s.kind == interfaces_1.S3.StatementKinds.UserModuleCall ||
            s.kind == interfaces_1.S3.StatementKinds.If ||
            s.kind == interfaces_1.S3.StatementKinds.While ||
            s.kind == interfaces_1.S3.StatementKinds.Until ||
            s.kind == interfaces_1.S3.StatementKinds.Return;
        if (!controls_next) {
            this.state.next_statement = s.exit_point;
        }
        switch (s.kind) {
            case interfaces_1.S3.StatementKinds.Plus:
                return this.plus();
            case interfaces_1.S3.StatementKinds.Minus:
                return this.minus();
            case interfaces_1.S3.StatementKinds.Times:
                return this.times();
            case interfaces_1.S3.StatementKinds.Slash:
                return this.divide();
            case interfaces_1.S3.StatementKinds.Div:
                return this.div();
            case interfaces_1.S3.StatementKinds.Mod:
                return this.mod();
            case interfaces_1.S3.StatementKinds.Power:
                return this.power();
            case interfaces_1.S3.StatementKinds.Assign:
                return this.assign(s);
            case interfaces_1.S3.StatementKinds.Get:
                return this.get_value(s);
            case interfaces_1.S3.StatementKinds.AssignV:
                return this.assignv(s);
            case interfaces_1.S3.StatementKinds.GetV:
                return this.getv_value(s);
            case interfaces_1.S3.StatementKinds.Push:
                return this.push(s);
            case interfaces_1.S3.StatementKinds.Pop:
                return this.pop(s);
            case interfaces_1.S3.StatementKinds.Minor:
                return this.less();
            case interfaces_1.S3.StatementKinds.MinorEq:
                return this.less_or_equal();
            case interfaces_1.S3.StatementKinds.Different:
                return this.different();
            case interfaces_1.S3.StatementKinds.Equal:
                return this.equal();
            case interfaces_1.S3.StatementKinds.Major:
                return this.greater();
            case interfaces_1.S3.StatementKinds.MajorEq:
                return this.greater_or_equal();
            case interfaces_1.S3.StatementKinds.Not:
                return this.not();
            case interfaces_1.S3.StatementKinds.And:
                return this.and();
            case interfaces_1.S3.StatementKinds.Or:
                return this.or();
            case interfaces_1.S3.StatementKinds.If:
                return this.if_st(s);
            case interfaces_1.S3.StatementKinds.While:
                return this.while_st(s);
            case interfaces_1.S3.StatementKinds.Until:
                return this.until_st(s);
            case interfaces_1.S3.StatementKinds.UserModuleCall:
                return this.call(s);
            case interfaces_1.S3.StatementKinds.ReadCall:
                return this.read(s);
            case interfaces_1.S3.StatementKinds.WriteCall:
                return this.write(s);
            case interfaces_1.S3.StatementKinds.Return:
                /**
                 * Esto termina con la ejecucion de la funcion en curso
                 */
                this.state.next_statement = null;
                return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
            case interfaces_1.S3.StatementKinds.Concat:
                return this.concat(s);
            case interfaces_1.S3.StatementKinds.AssignString:
                return this.assign_string(s);
            case interfaces_1.S3.StatementKinds.Alias:
                return this.alias(s);
            case interfaces_1.S3.StatementKinds.CopyVec:
                return this.copy_vec_statement(s);
            case interfaces_1.S3.StatementKinds.Neg:
                return this.neg();
            case interfaces_1.S3.StatementKinds.MakeFrame:
                return this.make_frame_statement(s);
            case interfaces_1.S3.StatementKinds.InitV:
                return this.initv(s);
        }
    };
    Evaluator.prototype.is_done = function () {
        return this.state.done;
    };
    Evaluator.prototype.initv = function (s) {
        // obtener el vector donde se copiaran los valores
        var tgt = this.state.next_frame[s.target_name];
        var tgt_range = {
            from: 0,
            to: this.calculate_index(tgt.dimensions.map(function (i) { return i - 1; }), tgt.dimensions)
        };
        var src_found = this.get_var(s.source.name);
        var src_provided_indexes = this.pop_indexes(s.source.indexes);
        // src: vector del cual se copiaran los valores
        var src = null;
        if (src_found.type == 'alias') {
            var _a = this.resolve_alias(src_found), variable = _a.variable, pre_indexes = _a.pre_indexes;
            var partial_indexes = this.pad(src_provided_indexes, 1, s.source.dimensions.length);
            var indexes = pre_indexes.concat(partial_indexes).map(function (i) { return i - 1; });
            src = variable;
            var src_range = {
                from: this.calculate_index(indexes, src.dimensions),
                to: this.calculate_index(src.dimensions.map(function (i) { return i - 1; }), src.dimensions)
            };
            this.copy_vec(tgt, src, tgt_range, src_range);
        }
        else {
            src = src_found;
            var src_range = {
                from: this.calculate_index(this.pad(src_provided_indexes, 1, s.source.dimensions.length).map(function (i) { return i - 1; }), s.source.dimensions),
                to: this.calculate_index(s.source.dimensions.map(function (i) { return i - 1; }), s.source.dimensions)
            };
            this.copy_vec(tgt, src, tgt_range, src_range);
        }
        return { error: false, result: { done: false, kind: 'action', action: 'none' } };
    };
    Evaluator.prototype.make_frame_statement = function (s) {
        this.state.next_frame = this.make_frame(s.name);
        return { error: false, result: { done: false, kind: 'action', action: 'none' } };
    };
    Evaluator.prototype.make_frame = function (mod_name) {
        var templates = this.frame_templates[mod_name];
        var frame = {};
        for (var name in templates) {
            var template = templates[name];
            var type = template.type, datatype = template.datatype, by_ref = template.by_ref;
            if (by_ref) {
                frame[name] = { type: 'alias', name: '', indexes: [], varkind: type == 'array' ? 'vector' : 'scalar' };
            }
            else {
                if (type == 'array') {
                    var values = new Array(template.dimensions.reduce(function (a, b) { return a * b; }));
                    frame[name] = { init: false, type: 'vector', dimensions: template.dimensions, values: values };
                }
                else {
                    frame[name] = { init: false, type: 'variable', value: null };
                }
            }
        }
        return frame;
    };
    Evaluator.prototype.neg = function () {
        var a = this.state.value_stack.pop();
        this.state.value_stack.push(-a);
        return { error: false, result: { done: false, kind: 'action', action: 'none' } };
    };
    Evaluator.prototype.pad = function (a, padder, desired_length) {
        var padded_copy = new Array(desired_length);
        for (var i = 0; i < desired_length; i++) {
            if (i < a.length) {
                padded_copy[i] = a[i];
            }
            else {
                padded_copy[i] = padder;
            }
        }
        return padded_copy;
    };
    Evaluator.prototype.copy_vec_statement = function (s) {
        /**
         * Indices provistos para el vector del cual se copian los datos
         */
        var src_provided_indexes = this.pop_indexes(s.source.indexes);
        /**
         * Indices provistos para el vector que recibe los datos
         */
        var tgt_provided_indexes = this.pop_indexes(s.target.indexes);
        var tgt_indexes = {
            from: this.pad(tgt_provided_indexes, 1, s.target.dimensions.length).map(function (i) { return i - 1; }),
            to: tgt_provided_indexes.concat(helpers_1.drop(s.target.indexes, s.target.dimensions)).map(function (i) { return i - 1; })
        };
        var src_indexes = {
            from: this.pad(src_provided_indexes, 1, s.source.dimensions.length).map(function (i) { return i - 1; }),
            to: src_provided_indexes.concat(helpers_1.drop(s.source.indexes, s.source.dimensions)).map(function (i) { return i - 1; })
        };
        // variables que se usan para saber si se encontró la variable deseada o un alias
        var tgt_found = this.get_var(s.target.name);
        var src_found = this.get_var(s.source.name);
        // variables que se usaran para la asignacion
        var tgt_var;
        var src_var;
        // rangos que indican el indice donde inicia la copia y el indice donde termina
        var tgt_range = { from: 0, to: 0 };
        var src_range = { from: 0, to: 0 };
        // preparar las variables y los rangos
        if (tgt_found.type == 'alias') {
            var _a = this.resolve_alias(tgt_found), variable = _a.variable, pre_indexes = _a.pre_indexes;
            tgt_var = variable;
            tgt_range.from = this.calculate_index(pre_indexes.concat(tgt_indexes.from), tgt_var.dimensions);
            tgt_range.to = this.calculate_index(pre_indexes.concat(tgt_indexes.to), tgt_var.dimensions);
        }
        else {
            tgt_var = tgt_found;
            tgt_range.from = this.calculate_index(tgt_indexes.from, tgt_var.dimensions);
            tgt_range.to = this.calculate_index(tgt_indexes.to, tgt_var.dimensions);
        }
        if (src_found.type == 'alias') {
            var _b = this.resolve_alias(src_found), variable = _b.variable, pre_indexes = _b.pre_indexes;
            src_var = variable;
            src_range.from = this.calculate_index(pre_indexes.concat(src_indexes.from), src_var.dimensions);
            src_range.to = this.calculate_index(pre_indexes.concat(src_indexes.to), src_var.dimensions);
        }
        else {
            src_var = src_found;
            src_range.from = this.calculate_index(src_indexes.from, src_var.dimensions);
            src_range.to = this.calculate_index(src_indexes.to, src_var.dimensions);
        }
        this.copy_vec(tgt_var, src_var, tgt_range, src_range);
        return { error: false, result: { done: false, kind: 'action', action: 'none' } };
    };
    Evaluator.prototype.copy_vec = function (tgt, src, tgt_range, src_range) {
        var counter = 0;
        while (tgt_range.from + counter <= tgt_range.to) {
            tgt.values[tgt_range.from + counter] = src.values[src_range.from + counter];
            counter++;
        }
        return { error: false, result: { done: false, kind: 'action', action: 'none' } };
    };
    Evaluator.prototype.alias = function (s) {
        var indexes = this.pop_indexes(s.var_indexes);
        var alias = this.state.next_frame[s.local_alias];
        alias.indexes = indexes;
        alias.name = s.varname;
        return { error: false, result: { done: false, kind: 'action', action: 'none' } };
    };
    Evaluator.prototype.assign_string = function (s) {
        var v = this.get_var(s.varname);
        var indexes = this.pop_indexes(s.indexes);
        if (this.is_whithin_bounds(indexes, v.dimensions)) {
            var string = this.state.value_stack.pop();
            var i = 0;
            var start_index = this.calculate_index(indexes.concat([0]), v.dimensions);
            while (i < s.length && i < string.length) {
                v.values[start_index + i] = string[i];
                i++;
            }
            v.init = true;
            return { error: false, result: { done: false, kind: 'action', action: 'none' } };
        }
        else {
            var bad_index = this.get_bad_index(indexes, v.dimensions);
            var result = {
                bad_index: bad_index,
                dimensions: v.dimensions,
                name: s.varname,
                reason: 'index-out-of-bounds',
                where: 'evaluator',
                done: true
            };
            return { error: true, result: result };
        }
    };
    Evaluator.prototype.concat = function (s) {
        var string = [];
        for (var i = 0; i < s.length; i++) {
            string.unshift(this.state.value_stack.pop());
        }
        this.state.value_stack.push(string.join(''));
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.push = function (s) {
        this.state.value_stack.push(s.value);
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    /**
     * Creo que esta funcion no sirve. No se usa nunca.
     */
    Evaluator.prototype.pop = function (s) {
        this.state.value_stack.pop();
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.assign = function (s) {
        var var_found = this.get_var(s.varname);
        // Si no hay alias esta es una asignacion normal
        if (var_found.type != 'alias') {
            var variable = var_found;
            variable.value = this.state.value_stack.pop();
            variable.init = true;
            return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
        }
        else {
            var _a = this.resolve_alias(var_found), variable = _a.variable, pre_indexes = _a.pre_indexes;
            if (pre_indexes.length > 0) {
                var v = variable;
                var index = this.calculate_index(pre_indexes.map(function (i) { return i - 1; }), v.dimensions);
                v.values[index] = this.state.value_stack.pop();
                v.init = true;
                return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
            }
            else {
                variable.init;
                variable.value = this.state.value_stack.pop();
                return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
            }
        }
    };
    Evaluator.prototype.get_value = function (s) {
        var var_found = this.get_var(s.varname);
        // Si no hay alias solo hay que apilar el valor de la variable
        if (var_found.type != 'alias') {
            this.state.value_stack.push(var_found.value);
            return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
        }
        else {
            var _a = this.resolve_alias(var_found), variable = _a.variable, pre_indexes = _a.pre_indexes;
            if (pre_indexes.length > 0) {
                var v = variable;
                var index = this.calculate_index(pre_indexes.map(function (i) { return i - 1; }), v.dimensions);
                this.state.value_stack.push(v.values[index]);
                return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
            }
            else {
                this.state.value_stack.push(variable.value);
                return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
            }
        }
    };
    Evaluator.prototype.assignv = function (s) {
        var var_found = this.get_var(s.varname);
        if (var_found.type != 'alias') {
            var indexes = this.pop_indexes(s.total_indexes);
            if (this.is_whithin_bounds(indexes, s.dimensions)) {
                /**
                 * Calcular indice final y asignar el valor a la variable.
                 *
                 * Nota: hay que restarle 1 a cada indice para que inicien en 0
                 * (como los indices de JS) y no en 1
                 */
                var index = this.calculate_index(indexes.map(function (i) { return i - 1; }), s.dimensions);
                var value = this.state.value_stack.pop();
                var variable = this.get_var(s.varname);
                variable.values[index] = value;
                variable.init = true;
                return { error: false, result: { kind: 'action', action: 'none', done: false } };
            }
            else {
                var bad_index = this.get_bad_index(indexes, s.dimensions);
                var result = {
                    bad_index: bad_index,
                    dimensions: s.dimensions,
                    name: s.varname,
                    reason: 'index-out-of-bounds',
                    where: 'evaluator',
                    done: true
                };
                return { error: true, result: result };
            }
        }
        else {
            var _a = this.resolve_alias(var_found), variable = _a.variable, pre_indexes = _a.pre_indexes;
            /**
             * Los indices usados para asignar el valor al alias (al parametro tomado por referencia)
             */
            var partial_indexes = this.pop_indexes(s.total_indexes);
            var indexes = pre_indexes.concat(partial_indexes);
            var dimensions = variable.dimensions;
            if (this.is_whithin_bounds(indexes, dimensions)) {
                var index = this.calculate_index(indexes.map(function (i) { return i - 1; }), dimensions);
                var v = variable;
                v.values[index] = this.state.value_stack.pop();
                v.init = true;
                return { error: false, result: { kind: 'action', action: 'none', done: false } };
            }
            else {
                var bad_index = this.get_bad_index(partial_indexes, s.dimensions);
                var result = {
                    bad_index: bad_index,
                    dimensions: s.dimensions,
                    name: s.varname,
                    reason: 'index-out-of-bounds',
                    where: 'evaluator',
                    done: true
                };
                return { error: true, result: result };
            }
        }
    };
    Evaluator.prototype.getv_value = function (s) {
        var var_found = this.get_var(s.varname);
        if (var_found.type != 'alias') {
            var indexes = this.pop_indexes(s.total_indexes);
            if (this.is_whithin_bounds(indexes, s.dimensions)) {
                /**
                 * Calcular indice final y asignar el valor a la variable.
                 *
                 * Nota: hay que restarle 1 a cada indice para que inicien en 0
                 * (como los indices de JS) y no en 1
                 */
                var index = this.calculate_index(indexes.map(function (i) { return i - 1; }), s.dimensions);
                var variable = this.get_var(s.varname);
                this.state.value_stack.push(variable.values[index]);
                return { error: false, result: { kind: 'action', action: 'none', done: false } };
            }
            else {
                var bad_index = this.get_bad_index(indexes, s.dimensions);
                var result = {
                    bad_index: bad_index,
                    dimensions: s.dimensions,
                    name: s.varname,
                    reason: 'index-out-of-bounds',
                    where: 'evaluator',
                    done: true
                };
                return { error: true, result: result };
            }
        }
        else {
            var _a = this.resolve_alias(var_found), variable = _a.variable, pre_indexes = _a.pre_indexes;
            /**
             * Los indices usados para asignar el valor al alias (al parametro tomado por referencia)
             */
            var partial_indexes = this.pop_indexes(s.total_indexes);
            var indexes = pre_indexes.concat(partial_indexes);
            var dimensions = variable.dimensions;
            if (this.is_whithin_bounds(indexes, dimensions)) {
                var index = this.calculate_index(indexes.map(function (i) { return i - 1; }), dimensions);
                var v = variable;
                this.state.value_stack.push(v.values[index]);
                return { error: false, result: { kind: 'action', action: 'none', done: false } };
            }
            else {
                var bad_index = this.get_bad_index(partial_indexes, s.dimensions);
                var result = {
                    bad_index: bad_index,
                    dimensions: s.dimensions,
                    name: s.varname,
                    reason: 'index-out-of-bounds',
                    where: 'evaluator',
                    done: true
                };
                return { error: true, result: result };
            }
        }
    };
    Evaluator.prototype.get_bad_index = function (indexes, dimensions) {
        var i = 0;
        while (indexes[i] >= 1 && indexes[i] <= dimensions[i]) {
            i++;
        }
        return i;
    };
    Evaluator.prototype.pop_indexes = function (amount) {
        var result = [];
        for (var i = 0; i < amount; i++) {
            result.push(this.state.value_stack.pop());
        }
        return result.reverse();
    };
    Evaluator.prototype.get_var = function (vn) {
        var locals = this.get_locals();
        return vn in locals ? locals[vn] : this.get_globals()[vn];
    };
    Evaluator.prototype.resolve_alias = function (a) {
        /**
         * indice del ante-penultimo frame
         */
        var i = this.frame_stack.length - 2;
        // se busca a partir del ante-penultimo porque se que en el ante-ultimo no esta
        // si estuviera get_var nunca hubiera llamado a esta funcion
        var var_found = false;
        var v = a;
        var pre_indexes = [];
        while (i >= 0) {
            pre_indexes = v.indexes.concat(pre_indexes);
            v = this.frame_stack[i][v.name];
            switch (v.type) {
                case 'alias':
                    i--;
                    break;
                case 'vector':
                case 'variable':
                    return { variable: v, pre_indexes: pre_indexes };
            }
        }
    };
    Evaluator.prototype.write = function (s) {
        var v = this.state.value_stack.pop();
        return { error: false, result: { kind: 'action', action: 'write', value: v, done: this.state.done } };
    };
    Evaluator.prototype.call = function (s) {
        this.state.next_statement = this.modules[s.name].entry_point;
        this.state.statement_stack.push(this.current_statement.exit_point);
        this.state.module_stack.push(this.current_module);
        this.frame_stack.push(this.state.next_frame);
        this.state.next_frame = null;
        this.current_module = s.name;
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.read = function (s) {
        this.state.paused = true;
        return { error: false, result: { kind: 'action', action: 'read', type: s.type, name: s.varname, done: this.state.done } };
    };
    Evaluator.prototype.if_st = function (s) {
        var condition_result = this.state.value_stack.pop();
        this.state.next_statement = condition_result ? s.true_branch_entry : s.false_branch_entry;
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.while_st = function (s) {
        var condition_result = this.state.value_stack.pop();
        this.state.next_statement = condition_result ? s.entry_point : s.exit_point;
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.until_st = function (s) {
        var condition_result = this.state.value_stack.pop();
        this.state.next_statement = !condition_result ? s.entry_point : s.exit_point;
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.times = function () {
        var b = this.state.value_stack.pop();
        var a = this.state.value_stack.pop();
        this.state.value_stack.push(a * b);
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.uminus = function () {
        var a = this.state.value_stack.pop();
        this.state.value_stack.push(-a);
    };
    Evaluator.prototype.power = function () {
        var b = this.state.value_stack.pop();
        var a = this.state.value_stack.pop();
        this.state.value_stack.push(Math.pow(a, b));
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.div = function () {
        var b = this.state.value_stack.pop();
        var a = this.state.value_stack.pop();
        this.state.value_stack.push((a - (a % b)) / b);
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.mod = function () {
        var b = this.state.value_stack.pop();
        var a = this.state.value_stack.pop();
        this.state.value_stack.push(a % b);
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.divide = function () {
        var b = this.state.value_stack.pop();
        var a = this.state.value_stack.pop();
        this.state.value_stack.push(a / b);
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.minus = function () {
        var b = this.state.value_stack.pop();
        var a = this.state.value_stack.pop();
        this.state.value_stack.push(a - b);
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.plus = function () {
        var b = this.state.value_stack.pop();
        var a = this.state.value_stack.pop();
        this.state.value_stack.push(a + b);
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.less = function () {
        var b = this.state.value_stack.pop();
        var a = this.state.value_stack.pop();
        this.state.value_stack.push(a < b);
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.less_or_equal = function () {
        var b = this.state.value_stack.pop();
        var a = this.state.value_stack.pop();
        this.state.value_stack.push(a <= b);
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.greater = function () {
        var b = this.state.value_stack.pop();
        var a = this.state.value_stack.pop();
        this.state.value_stack.push(a > b);
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.greater_or_equal = function () {
        var b = this.state.value_stack.pop();
        var a = this.state.value_stack.pop();
        this.state.value_stack.push(a >= b);
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.equal = function () {
        var b = this.state.value_stack.pop();
        var a = this.state.value_stack.pop();
        this.state.value_stack.push(a == b);
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.not = function () {
        var a = this.state.value_stack.pop();
        this.state.value_stack.push(!a);
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.different = function () {
        var b = this.state.value_stack.pop();
        var a = this.state.value_stack.pop();
        this.state.value_stack.push(a != b);
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.and = function () {
        var b = this.state.value_stack.pop();
        var a = this.state.value_stack.pop();
        this.state.value_stack.push(a && b);
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.or = function () {
        var b = this.state.value_stack.pop();
        var a = this.state.value_stack.pop();
        this.state.value_stack.push(a || b);
        return { error: false, result: { kind: 'action', action: 'none', done: this.state.done } };
    };
    Evaluator.prototype.is_whithin_bounds = function (indexes, dimensions) {
        var i = 0;
        // NOTE: en las condiciones de abajo sumo 1 porque en index_values se le
        // restó 1 a cada elemento para que sea un indice válido en JS
        while (i < indexes.length) {
            if ((indexes[i]) < 1) {
                return false;
            }
            else if ((indexes[i]) > dimensions[i]) {
                return false;
            }
            else {
                i++;
            }
        }
        return true;
    };
    Evaluator.prototype.calculate_index = function (indexes, dimensions) {
        var result = 0;
        var index_amount = indexes.length;
        var i = 0;
        while (i < index_amount) {
            var term = 1;
            var j = i + 1;
            while (j < index_amount) {
                term *= dimensions[j];
                j++;
            }
            term *= indexes[i];
            result += term;
            i++;
        }
        return result;
    };
    return Evaluator;
}());
exports.default = Evaluator;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Evaluator_1 = __webpack_require__(16);
var interfaces_1 = __webpack_require__(1);
var helpers_1 = __webpack_require__(3);
var Interpreter = (function () {
    function Interpreter() {
        this.paused = false;
        this.data_read = false;
        this.read_stack = [];
        this.error_ocurred = false;
        this.program_set = false;
        this.statement_visited = false;
        // this.breakpoints = []
    }
    Object.defineProperty(Interpreter.prototype, "program", {
        get: function () {
            return this.current_program;
        },
        set: function (p) {
            this.current_program = p;
            this.evaluator = new Evaluator_1.default(p);
            this.paused = false;
            this.data_read = false;
            this.read_stack = [];
            this.error_ocurred = false;
            this.program_set = true;
            // this.breakpoints = []
        },
        enumerable: true,
        configurable: true
    });
    Interpreter.prototype.is_done = function () {
        return this.error_ocurred || this.evaluator.is_done();
    };
    Interpreter.prototype.run = function () {
        if (this.program_set && !this.error_ocurred) {
            // Esto es necesario porque el interprete se "pausa" cuando un modulo hace
            // una llamada a leer
            while (!this.evaluator.is_done() && !this.error_ocurred) {
                var evaluation_report = this.evaluator.step();
                if (evaluation_report.error == true) {
                    this.error_ocurred = true;
                    return evaluation_report;
                }
                else {
                    if (evaluation_report.result.kind == 'action') {
                        switch (evaluation_report.result.action) {
                            case 'read':
                                this.read_stack.push({ name: evaluation_report.result.name, type: evaluation_report.result.type });
                                return { error: false, result: { kind: 'action', done: this.evaluator.is_done(), action: 'read' } };
                            case 'write':
                                return { error: false, result: { kind: 'action', done: this.evaluator.is_done(), action: 'write', value: evaluation_report.result.value } };
                            case 'none':
                                break;
                            case 'paused':
                                break;
                        }
                    }
                }
            }
            return { error: false, result: { kind: 'info', type: 'interpreter', done: this.evaluator.is_done(), error_ocurred: this.error_ocurred } };
        }
        else {
            if (!this.program_set) {
                throw new Error('No program set');
            }
            else {
                throw new Error('Trying to resume the execution of a program with errors');
            }
        }
    };
    Interpreter.prototype.step = function () {
        if (this.program_set && !this.error_ocurred) {
            // Esto es necesario porque el interprete se "pausa" cuando un modulo hace
            // una llamada a leer
            if (!this.evaluator.is_done() && !this.error_ocurred) {
                var info = this.evaluator.get_statement_info();
                this.last_info = info;
                while (!this.evaluator.is_done() && !this.error_ocurred && (!info.is_user_statement || this.statement_visited)) {
                    this.statement_visited = false;
                    // evaluar el enunciado actual
                    var evaluation_report = this.evaluator.step();
                    if (evaluation_report.error == true) {
                        this.error_ocurred = true;
                        return evaluation_report;
                    }
                    else {
                        switch (evaluation_report.result.action) {
                            case 'read':
                                this.read_stack.push({ name: evaluation_report.result.name, type: evaluation_report.result.type });
                                return { error: false, result: { kind: 'action', done: this.evaluator.is_done(), action: 'read' } };
                            case 'write':
                                return { error: false, result: { kind: 'action', done: this.evaluator.is_done(), action: 'write', value: evaluation_report.result.value } };
                            case 'none':
                                break;
                            case 'paused':
                                this.paused = true;
                                return { error: false, result: { kind: 'info', type: 'statement', pos: this.last_info.pos } };
                        }
                    }
                    if (!this.evaluator.is_done()) {
                        info = this.evaluator.get_statement_info();
                        this.last_info = info;
                    }
                }
                this.statement_visited = true;
                return { error: false, result: { kind: 'info', done: false, type: 'statement', pos: info.pos } };
            }
        }
        else {
            if (!this.program_set) {
                throw new Error('No program set');
            }
            else {
                throw new Error('Trying to resume the execution of a program with errors');
            }
        }
    };
    Interpreter.prototype.send = function (value) {
        /**
         * tipar value
         * revisar que coincida con el tipo que el evaluador espera
         *  si no coincide: finaliza la ejecucion el programa y se devuelve un error
         *  si coincide: se envia el valor al evaluador como se venia haciendo hasta ahora
         */
        var l = this.parse(value);
        var literal_type = helpers_1.type_literal(l).typings.type;
        var var_info = this.read_stack.pop();
        var cond_a = literal_type.kind == 'atomic' && var_info.type.kind == 'atomic';
        var cond_b = var_info.type.typename == 'real' && literal_type.typename == 'entero';
        if (!(helpers_1.types_are_equal(literal_type, var_info.type) || (cond_a && cond_b))) {
            if (var_info.type instanceof interfaces_1.Typed.StringType && literal_type instanceof interfaces_1.Typed.StringType) {
                var error = {
                    vector_length: var_info.type.length,
                    string_length: literal_type.length,
                    name: var_info.name,
                    reason: '@read-long-string',
                    type: helpers_1.stringify(var_info.type),
                    where: 'interpreter'
                };
                /**
                 * Terminar la ejecucion de este programa debido al error
                 */
                this.error_ocurred = true;
                return { error: true, result: error };
            }
            else {
                var error = {
                    reason: '@read-incompatible-types',
                    where: 'interpreter',
                    expected: helpers_1.stringify(var_info.type),
                    received: helpers_1.stringify(literal_type)
                };
                /**
                 * Terminar la ejecucion de este programa debido al error
                 */
                this.error_ocurred = true;
                return { error: true, result: error };
            }
        }
        else {
            /**
             * Los tipos son compatibles! Hay que enviarlos al evaluador
             */
            this.evaluator.input(l.value);
            this.data_read = true;
            return { error: false, result: null };
        }
    };
    Interpreter.prototype.parse = function (value) {
        var v = null;
        if (/^\d+$/.test(value)) {
            /**
             * es un entero
             */
            v = parseInt(value);
        }
        else if (/^\d+(\.\d+)?$/.test(value)) {
            /**
             * es un real
             */
            v = parseFloat(value);
        }
        else if (/^(verdadero|falso)$/.test(value)) {
            /**
             * es un booleano
             */
            v = value == 'verdadero';
        }
        else {
            /**
             * es una cadena
             */
            v = value;
        }
        return { type: 'literal', value: v };
    };
    // add_breakpoint(line: number) {
    //   const index = this.breakpoints.indexOf(line)
    //   if (index == -1) {
    //     this.breakpoints.push(line)
    //   }
    // }
    // remove_breakpoint(line: number) {
    //   const index = this.breakpoints.indexOf(line)
    //   if (index != -1) {
    //     this.breakpoints = [...this.breakpoints.slice(0, index), ...this.breakpoints.slice(index + 1)]
    //   }
    // }
    Interpreter.prototype.export_var = function (name) {
        return this.evaluator.export_var(name);
    };
    Interpreter.prototype.search_var = function (name) {
        return this.evaluator.search_var(name);
    };
    return Interpreter;
}());
exports.default = Interpreter;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = __webpack_require__(1);
var TokenTypes_1 = __webpack_require__(9);
var StringMethods_1 = __webpack_require__(11);
var isSpecialSymbolChar = TokenTypes_1.SpecialSymbolToken.isSpecialSymbolChar;
/**
 * Clase para convertir una cadena en fichas.
 */
var Lexer = (function () {
    /**
     * Crea un Lexer.
     * @param  {source} source Fuente a utilizar para construir las fichas
     */
    function Lexer(source) {
        if (source)
            this._source = source;
    }
    Lexer.prototype.tokenize = function (source) {
        this.source = source;
        var tokens = [];
        var bad_tokens_info = [];
        var t = this.nextToken();
        while (t.kind !== interfaces_1.SymbolKind.EOF) {
            if (t.error_found) {
                bad_tokens_info.push(t.error_info);
            }
            else {
                tokens.push(t);
            }
            t = this.nextToken();
        }
        tokens.push(t);
        if (bad_tokens_info.length > 0) {
            return { error: true, result: bad_tokens_info };
        }
        else {
            return { error: false, result: tokens };
        }
    };
    // Envolturas para algunos metodos de SourceWrapper
    Lexer.prototype.currentChar = function () {
        return this._source.currentChar();
    };
    Lexer.prototype.nextChar = function () {
        return this._source.nextChar();
    };
    Lexer.prototype.peekChar = function () {
        return this._source.peekChar();
    };
    Lexer.prototype.isCommentLine = function () {
        return this.currentChar() === '/' && this.peekChar() === '/';
    };
    Object.defineProperty(Lexer.prototype, "source", {
        get: function () {
            return this._source;
        },
        set: function (source_wrapper) {
            this._source = source_wrapper;
        },
        enumerable: true,
        configurable: true
    });
    Lexer.prototype.skipWhiteSpace = function () {
        while (StringMethods_1.isWhiteSpace(this.currentChar())) {
            this.nextChar();
        }
    };
    Lexer.prototype.skipCommment = function () {
        while (this.currentChar() !== this._source.EOL && this.currentChar() !== this._source.EOF) {
            this.nextChar();
        }
    };
    Lexer.prototype.nextToken = function () {
        if (StringMethods_1.isWhiteSpace(this.currentChar())) {
            this.skipWhiteSpace();
        }
        if (this.isCommentLine()) {
            this.skipCommment();
        }
        if (StringMethods_1.isWhiteSpace(this.currentChar())) {
            this.skipWhiteSpace();
        }
        var c = this.currentChar();
        var result;
        if (StringMethods_1.isDigit(c))
            result = new TokenTypes_1.NumberToken(this._source);
        else if (StringMethods_1.isLetter(c))
            result = new TokenTypes_1.WordToken(this._source);
        else if (isSpecialSymbolChar(c))
            result = new TokenTypes_1.SpecialSymbolToken(this._source);
        else if (c === '"')
            result = new TokenTypes_1.StringToken(this._source);
        else if (c === this._source.EOF)
            result = new TokenTypes_1.EoFToken(this._source);
        else
            result = new TokenTypes_1.UnknownToken(this._source);
        return result;
    };
    return Lexer;
}());
exports.default = Lexer;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EOF_REACHED = -2;
var EOL_REACHED = -1;
var READING = 0;
var SourceWrapper = (function () {
    function SourceWrapper(string) {
        this.EOL = '\n';
        this.EOF = String.fromCharCode(0);
        this._source = string.replace(/\r/g, '');
        this._index = 0;
        this._current_column = 0;
        this._current_line = 0;
        this.updateState();
    }
    SourceWrapper.prototype.currentChar = function () {
        if (this.state === EOF_REACHED) {
            return this.EOF;
        }
        else {
            return this._source[this._index];
        }
    };
    SourceWrapper.prototype.nextChar = function () {
        this._index++;
        this.updateState();
        this.updatePosition();
        return this.currentChar();
    };
    SourceWrapper.prototype.peekChar = function () {
        if (this._index + 1 === this._source.length) {
            return this.EOF;
        }
        else {
            return this._source[this._index + 1];
        }
    };
    SourceWrapper.prototype.updateState = function () {
        if (this._index === this._source.length) {
            this.state = EOF_REACHED;
        }
        else {
            this.state = READING;
        }
    };
    SourceWrapper.prototype.updatePosition = function () {
        if (this._source[this._index - 1] === this.EOL) {
            this._current_line++;
            this._current_column = 0;
        }
        else {
            this._current_column++;
        }
    };
    return SourceWrapper;
}());
exports.default = SourceWrapper;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Esta transformacion agrega a cada llamada de funcion:
//
// -  Su tipo de retorno.
//
// -  Los declaradores de sus parametros.
//
// Si la funcion no existe entonces devuelve un error.
// import * as S0 from '../interfaces/ParsingInterfaces'

Object.defineProperty(exports, "__esModule", { value: true });
function transform(ast) {
    var new_ast = {
        modules: {
            main: null,
            user_modules: {}
        },
        local_variables: {}
    };
    var errors_found = [];
    var new_main = transform_main(ast.modules.main, ast, 'main');
    if (new_main.error) {
        errors_found.push.apply(errors_found, new_main.result);
    }
    else {
        new_ast.modules['main'] = new_main.result;
    }
    for (var module_name in ast.modules.user_modules) {
        var old_module = ast.modules.user_modules[module_name];
        var report = transform_module(old_module, ast, module_name);
        if (report.error) {
            errors_found.push.apply(errors_found, report.result);
        }
        else {
            new_ast.modules.user_modules[module_name] = report.result;
        }
    }
    new_ast.local_variables = ast.local_variables;
    if (errors_found.length > 0) {
        return { error: true, result: errors_found };
    }
    else {
        return { error: false, result: new_ast };
    }
}
exports.default = transform;
function transform_main(old_module, ast, module_name) {
    var new_body = transform_body(old_module.body, ast, module_name);
    if (new_body.error) {
        return new_body;
    }
    else {
        var new_main = {
            type: 'module',
            name: 'main',
            module_type: 'main',
            body: new_body.result
        };
        return { error: false, result: new_main };
    }
}
function transform_module(old_module, ast, module_name) {
    var new_body = transform_body(old_module.body, ast, module_name);
    if (new_body.error) {
        return new_body;
    }
    else {
        if (old_module.module_type == 'function') {
            var new_module = {
                type: 'module',
                module_type: 'function',
                name: old_module.name,
                parameters: old_module.parameters,
                body: new_body.result,
                return_type: old_module.return_type
            };
            return { error: false, result: new_module };
        }
        else {
            var new_module = {
                type: 'module',
                module_type: 'procedure',
                name: old_module.name,
                parameters: old_module.parameters,
                body: new_body.result,
                return_type: 'ninguno'
            };
            return { error: false, result: new_module };
        }
    }
}
function transform_body(statements, ast, module_name) {
    var errors_found = [];
    var new_body = [];
    for (var _i = 0, statements_1 = statements; _i < statements_1.length; _i++) {
        var statement = statements_1[_i];
        var new_statement = transform_statement(statement, ast, module_name);
        if (new_statement.error) {
            errors_found.push.apply(errors_found, new_statement.result);
        }
        else if (new_statement.error == false) {
            new_body.push(new_statement.result);
        }
    }
    if (errors_found.length > 0) {
        return { error: true, result: errors_found };
    }
    else if (errors_found.length == 0) {
        return { error: false, result: new_body };
    }
}
function transform_statement(statement, ast, module_name) {
    switch (statement.type) {
        case 'assignment':
            return transform_assignment(statement, ast, module_name);
        case 'call':
            return transform_call(statement, ast, module_name);
        case 'for':
            return transform_for(statement, ast, module_name);
        case 'until':
        case 'while':
            return transform_loop(statement, ast, module_name);
        case 'if':
            return transform_if(statement, ast, module_name);
        case 'return':
            return transform_return(statement, ast, module_name);
    }
}
function transform_assignment(assignment, ast, module_name) {
    var errors_found = [];
    var variable = transform_invocation(assignment.left, ast, module_name);
    if (variable.error) {
        errors_found.push.apply(errors_found, variable.result);
    }
    var payload = transform_expression(assignment.right, ast, module_name);
    if (payload.error) {
        errors_found.push.apply(errors_found, payload.result);
    }
    if (errors_found.length == 0) {
        var new_assignment = {
            type: 'assignment',
            left: variable.result,
            right: payload.result,
            pos: assignment.pos
        };
        return { error: false, result: new_assignment };
    }
    else {
        return { error: true, result: errors_found };
    }
}
function transform_call(call, ast, module_name) {
    var errors_found = [];
    var args = [];
    for (var _i = 0, _a = call.args; _i < _a.length; _i++) {
        var arg = _a[_i];
        var new_arg = transform_expression(arg, ast, module_name);
        if (new_arg.error) {
            errors_found.push.apply(errors_found, new_arg.result);
        }
        else if (new_arg.error == false) {
            args.push(new_arg.result);
        }
    }
    var info = null;
    if (call.name != 'escribir' && call.name != 'escribir_linea' && call.name != 'leer') {
        info = get_module_info(call.name, ast);
        if (info.error) {
            errors_found.push.apply(errors_found, info.result);
        }
    }
    if (errors_found.length > 0) {
        return { error: true, result: errors_found };
    }
    else {
        if (call.name == 'escribir' || call.name == 'leer') {
            var new_call = {
                args: args,
                name: call.name,
                type: 'call',
                module_type: 'procedure',
                parameters: [],
                return_type: 'ninguno',
                pos: call.pos
            };
            return { error: false, result: new_call };
        }
        else {
            var new_call = {
                type: 'call',
                args: args,
                name: call.name,
                module_type: info.result.module_type,
                parameters: info.result.parameters,
                return_type: info.result.return_type,
                pos: call.pos
            };
            return { error: false, result: new_call };
        }
    }
}
function transform_loop(statement, ast, module_name) {
    var errors_found = [];
    var new_condition = transform_expression(statement.condition, ast, module_name);
    if (new_condition.error) {
        errors_found.push.apply(errors_found, new_condition.result);
    }
    var new_body = transform_body(statement.body, ast, module_name);
    if (new_body.error) {
        errors_found.push.apply(errors_found, new_body.result);
    }
    if (errors_found.length > 0) {
        return { error: true, result: errors_found };
    }
    else {
        if (statement.type == 'while') {
            var new_loop = {
                type: statement.type,
                condition: new_condition.result,
                body: new_body.result,
                pos: statement.pos
            };
            return { error: false, result: new_loop };
        }
        else {
            var new_loop = {
                type: statement.type,
                condition: new_condition.result,
                body: new_body.result,
                pos: statement.pos
            };
            return { error: false, result: new_loop };
        }
    }
}
function transform_if(statement, ast, module_name) {
    var errors_found = [];
    var new_condition = transform_expression(statement.condition, ast, module_name);
    if (new_condition.error) {
        errors_found.push.apply(errors_found, new_condition.result);
    }
    var new_true_branch = transform_body(statement.true_branch, ast, module_name);
    if (new_true_branch.error) {
        errors_found.push.apply(errors_found, new_true_branch.result);
    }
    var new_false_branch = transform_body(statement.false_branch, ast, module_name);
    if (new_false_branch.error) {
        errors_found.push.apply(errors_found, new_false_branch.result);
    }
    if (errors_found.length > 0) {
        return { error: true, result: errors_found };
    }
    else {
        var new_if = {
            type: 'if',
            condition: new_condition.result,
            true_branch: new_true_branch.result,
            false_branch: new_false_branch.result,
            pos: statement.pos
        };
        return { error: false, result: new_if };
    }
}
function transform_for(statement, ast, module_name) {
    var errors_found = [];
    var new_init = transform_assignment(statement.counter_init, ast, module_name);
    if (new_init.error) {
        errors_found.push.apply(errors_found, new_init.result);
    }
    var new_goal = transform_expression(statement.last_value, ast, module_name);
    if (new_goal.error) {
        errors_found.push.apply(errors_found, new_goal.result);
    }
    var new_body = transform_body(statement.body, ast, module_name);
    if (new_body.error) {
        errors_found.push.apply(errors_found, new_body.result);
    }
    if (errors_found.length > 0) {
        return { error: true, result: errors_found };
    }
    else {
        var new_for = {
            type: 'for',
            counter_init: new_init.result,
            last_value: new_goal.result,
            body: new_body.result,
            pos: statement.pos
        };
        return { error: false, result: new_for };
    }
}
function transform_return(ret_statement, ast, module_name) {
    var exp_returned = transform_expression(ret_statement.expression, ast, module_name);
    var ret_typename = ast.modules.user_modules[module_name].return_type;
    if (exp_returned.error) {
        return exp_returned;
    }
    else {
        var new_return = {
            type: 'return',
            expression: exp_returned.result,
            expected: ret_typename,
            pos: ret_statement.pos
        };
        return { error: false, result: new_return };
    }
}
function transform_invocation(invocation, ast, module_name) {
    if (invocation.indexes.length == 0) {
        var varinfo = get_variable_info(invocation.name, ast.local_variables, module_name);
        if (varinfo.error) {
            return varinfo;
        }
        else if (varinfo.error == false) {
            var new_invocation = {
                name: invocation.name,
                is_array: varinfo.result.is_array,
                indexes: [],
                dimensions: varinfo.result.dimensions,
                datatype: varinfo.result.datatype
            };
            return { error: false, result: new_invocation };
        }
    }
    else {
        var errors_found = [];
        var new_indexes = [];
        for (var _i = 0, _a = invocation.indexes; _i < _a.length; _i++) {
            var index = _a[_i];
            var new_index = transform_expression(index, ast, module_name);
            switch (new_index.error) {
                case true:
                    errors_found.push.apply(errors_found, new_index.result);
                    break;
                case false:
                    new_indexes.push(new_index.result);
                    break;
            }
        }
        var varinfo = get_variable_info(invocation.name, ast.local_variables, module_name);
        if (varinfo.error) {
            errors_found.push.apply(errors_found, varinfo.result);
            return { error: true, result: errors_found };
        }
        else if (varinfo.error == false) {
            if (errors_found.length == 0) {
                var new_invocation = {
                    name: invocation.name,
                    is_array: varinfo.result.is_array,
                    indexes: new_indexes,
                    dimensions: varinfo.result.dimensions,
                    datatype: varinfo.result.datatype
                };
                return { error: false, result: new_invocation };
            }
            else {
                return { error: true, result: errors_found };
            }
        }
    }
}
function transform_invocation_exp(invocation, ast, module_name) {
    if (invocation.indexes.length == 0) {
        var varinfo = get_variable_info(invocation.name, ast.local_variables, module_name);
        if (varinfo.error) {
            return varinfo;
        }
        else if (varinfo.error == false) {
            var new_invocation = {
                type: 'invocation',
                name: invocation.name,
                is_array: varinfo.result.is_array,
                indexes: [],
                dimensions: varinfo.result.dimensions,
                datatype: varinfo.result.datatype
            };
            return { error: false, result: new_invocation };
        }
    }
    else {
        var errors_found = [];
        var new_indexes = [];
        for (var _i = 0, _a = invocation.indexes; _i < _a.length; _i++) {
            var index = _a[_i];
            var new_index = transform_expression(index, ast, module_name);
            switch (new_index.error) {
                case true:
                    errors_found.push.apply(errors_found, new_index.result);
                    break;
                case false:
                    new_indexes.push(new_index.result);
                    break;
            }
        }
        var varinfo = get_variable_info(invocation.name, ast.local_variables, module_name);
        if (varinfo.error) {
            errors_found.push.apply(errors_found, varinfo.result);
            return { error: true, result: errors_found };
        }
        else if (varinfo.error == false) {
            if (errors_found.length == 0) {
                var new_invocation = {
                    type: 'invocation',
                    name: invocation.name,
                    is_array: invocation.is_array,
                    indexes: new_indexes,
                    dimensions: varinfo.result.dimensions,
                    datatype: varinfo.result.datatype
                };
                return { error: false, result: new_invocation };
            }
            else {
                return { error: true, result: errors_found };
            }
        }
    }
}
function transform_expression(expression, ast, module_name) {
    var errors_found = [];
    var output = [];
    for (var _i = 0, expression_1 = expression; _i < expression_1.length; _i++) {
        var element = expression_1[_i];
        var new_element = void 0;
        switch (element.type) {
            case 'call':
                new_element = transform_call(element, ast, module_name);
                break;
            case 'invocation':
                new_element = transform_invocation_exp(element, ast, module_name);
                break;
            case 'literal':
                new_element = { error: false, result: element };
                break;
            case 'operator':
                new_element = { error: false, result: element };
                break;
        }
        if (new_element.error) {
            errors_found.push.apply(errors_found, new_element.result);
        }
        else if (new_element.error == false) {
            output.push(new_element.result);
        }
    }
    if (errors_found.length > 0) {
        return { error: true, result: errors_found };
    }
    else {
        return { error: false, result: output };
    }
}
function get_module_info(name, ast) {
    if (!(name in ast.modules.user_modules)) {
        return { error: true, result: [{ reason: '@call-undefined-module', name: name, where: 'call-decorator-transform' }] };
    }
    else {
        return { error: false, result: ast.modules.user_modules[name] };
    }
}
function get_variable_info(name, variables, module_name) {
    var exists = name in variables[module_name] || name in variables['main'];
    var variable = name in variables[module_name] ? variables[module_name][name] : variables['main'][name];
    if (exists) {
        switch (variable.type) {
            case 'array':
                return { error: false, result: { datatype: variable.datatype, dimensions: variable.dimensions, is_array: true } };
            case 'scalar':
                return { error: false, result: { datatype: variable.datatype, dimensions: [], is_array: false } };
        }
    }
    else
        return { error: true, result: [{ reason: 'undefined-variable', name: name, where: 'call-decorator-transform' }] };
}
function is_builtin(name) {
    return name == 'escribir' || name == 'escribir_linea' || name == 'leer';
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function transform(ast) {
    var errors_found = [];
    var new_main = transform_main(ast.main);
    if (new_main.error) {
        errors_found.push.apply(errors_found, new_main.result);
    }
    else if (new_main.error == false) {
        var user_modules = {};
        var local_variables = { main: new_main.result.locals };
        for (var module_name in ast.user_modules) {
            var old_module = ast.user_modules[module_name];
            var new_module = transform_module(old_module);
            if (new_module.error) {
                errors_found.push.apply(errors_found, new_module.result);
            }
            else if (new_module.error == false) {
                user_modules[old_module.name] = new_module.result.new_module;
                local_variables[old_module.name] = new_module.result.locals;
            }
        }
        var new_ast = {
            modules: {
                main: new_main.result.new_module,
                user_modules: user_modules
            },
            local_variables: local_variables
        };
        if (errors_found.length > 0) {
            return { error: true, result: errors_found };
        }
        else {
            return { error: false, result: new_ast };
        }
    }
    return { error: true, result: errors_found };
}
exports.default = transform;
function transform_module(old_module) {
    switch (old_module.module_type) {
        case 'procedure':
        case 'function':
            return transform_user_module(old_module);
    }
}
function transform_main(old_module) {
    var declarations = old_module.body.filter(function (statement) { return statement.type === 'declaration'; });
    var locals = declare_variables(declarations);
    if (locals.error) {
        return locals;
    }
    else {
        var new_module = {
            type: 'module',
            module_type: 'main',
            name: 'main',
            body: old_module.body.filter(function (statement) { return statement.type !== 'declaration'; })
        };
        return { error: false, result: { new_module: new_module, locals: locals.result } };
    }
}
function transform_user_module(old_module) {
    var declarations = old_module.body.filter(function (statement) { return statement.type === 'declaration'; });
    var locals = declare_variables(declarations);
    if (locals.error) {
        return locals;
    }
    else {
        if (old_module.module_type == 'procedure') {
            var new_module = {
                type: 'module',
                module_type: 'procedure',
                name: old_module.name,
                body: old_module.body.filter(function (statement) { return statement.type !== 'declaration'; }),
                parameters: old_module.parameters,
                return_type: 'ninguno'
            };
            return { error: false, result: { new_module: new_module, locals: locals.result } };
        }
        else {
            var new_module = {
                type: 'module',
                module_type: 'function',
                name: old_module.name,
                body: old_module.body.filter(function (statement) { return statement.type !== 'declaration'; }),
                parameters: old_module.parameters,
                return_type: old_module.return_type
            };
            return { error: false, result: { new_module: new_module, locals: locals.result } };
        }
    }
}
function declare_variables(declarations) {
    var repeated_variables = [];
    var declared_variables = {};
    for (var _i = 0, declarations_1 = declarations; _i < declarations_1.length; _i++) {
        var declaration = declarations_1[_i];
        for (var _a = 0, _b = declaration.variables; _a < _b.length; _a++) {
            var variable = _b[_a];
            if (!(variable.name in declared_variables)) {
                if (variable.is_array) {
                    var name = variable.name, datatype = variable.datatype, dimensions = variable.dimensions, by_ref = variable.by_ref;
                    declared_variables[name] = { type: 'array', name: name, datatype: datatype, dimensions: dimensions, by_ref: by_ref };
                }
                else {
                    var name = variable.name, datatype = variable.datatype, by_ref = variable.by_ref;
                    declared_variables[name] = { type: 'scalar', name: name, datatype: datatype, by_ref: by_ref };
                }
            }
            else {
                var original = declared_variables[variable.name];
                var error_info = {
                    reason: 'repeated-variable',
                    name: original.name,
                    first_type: original.datatype,
                    second_type: variable.datatype,
                    where: 'declarator-transform',
                    pos: declaration.pos
                };
                repeated_variables.push(error_info);
            }
        }
    }
    if (repeated_variables.length > 0) {
        return { error: true, result: repeated_variables };
    }
    else {
        return { error: false, result: declared_variables };
    }
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = __webpack_require__(1);
var helpers_1 = __webpack_require__(3);
function transform(p) {
    var result = {
        entry_point: null,
        modules: {},
        local_variables: p.variables_per_module
    };
    var new_main = transform_main(p.modules.main);
    result.entry_point = new_main;
    for (var name in p.modules) {
        if (name != 'main') {
            var module_1 = transform_module(p.modules[name], name);
            result.modules[name] = module_1;
        }
    }
    return { error: false, result: result };
}
exports.default = transform;
function transform_main(old_module) {
    return transform_body(old_module.body, 'main');
}
function transform_module(old_module, current_module) {
    /**
     * Copio los parametros
     */
    var parameters = {};
    for (var _i = 0, _a = old_module.parameters; _i < _a.length; _i++) {
        var par = _a[_i];
        var name = par.name, by_ref = par.by_ref, is_array = par.is_array, dimensions = par.dimensions;
        parameters[name] = { name: name, by_ref: by_ref, is_array: is_array };
    }
    /**
     * Inicializo los parametros. Tienen que ser inicializados
     * de atras para adelante (del ultimo al primero).
     */
    var first_init;
    var last_statement;
    var first_statement_initialized = false;
    for (var i = old_module.parameters.length - 1; i >= 0; i--) {
        var param = old_module.parameters[i];
        // saltear parametros tomados por referencia y vectores que NO son cadenas
        if ((param.type instanceof interfaces_1.Typed.StringType || param.type.kind != 'array') && !param.by_ref) {
            var fake_inv = {
                dimensions: param.dimensions,
                indexes: [],
                is_array: param.is_array,
                name: param.name,
                type: 'invocation',
                typings: {
                    indexes: [],
                    /**
                     * este tipo no sirve para nada, esta aca solo para cumplir
                     * con la interfaz
                     */
                    type: new interfaces_1.Typed.AtomicType('literal', 'ninguno')
                }
            };
            var assignment = null;
            if (param.type instanceof interfaces_1.Typed.StringType) {
                assignment = new interfaces_1.S3.AssignString(current_module, param.name, param.type.length, 0, false);
            }
            else {
                assignment = create_assignment(fake_inv, current_module);
            }
            if (i == old_module.parameters.length - 1) {
                first_statement_initialized = true;
                first_init = assignment;
            }
            else {
                last_statement.exit_point = assignment;
            }
            last_statement = interfaces_1.S3.get_last(assignment);
        }
    }
    var body_entry = transform_body(old_module.body, current_module);
    /**
     * Punto de entrada (primer enunciado) del modulo
     */
    var entry_point = null;
    if (first_statement_initialized) {
        entry_point = first_init;
        /**
         * Enlazar la ultima inicializacion al primer enunciado del cuerpo
         */
        last_statement.exit_point = body_entry;
    }
    else {
        entry_point = body_entry;
    }
    var new_module = {
        entry_point: entry_point,
        name: current_module,
        parameters: parameters
    };
    return new_module;
}
function transform_if(statement, module_name) {
    /**
     * La condicion del if debe insertarse antes del propio if
     */
    var entry = transform_expression(statement.condition, module_name);
    /**
     * Ultimo enunciado de la condicion del if
     */
    var last_statement = interfaces_1.S3.get_last(entry);
    var true_entry = transform_body(statement.true_branch, module_name);
    var false_entry = transform_body(statement.false_branch, module_name);
    var sif = new interfaces_1.S3.If(module_name, true_entry, false_entry, statement.pos);
    /**
     * Hacer que la evaluacion de la condicion venga seguida del if
     */
    last_statement.exit_point = sif;
    return entry;
}
function transform_while(statement, module_name) {
    /**
     * condicion
     * bucle
     * condicion
     */
    var condition_entry = transform_expression(statement.condition, module_name);
    var cond_last_st = interfaces_1.S3.get_last(condition_entry);
    var loop_body = transform_body(statement.body, module_name);
    var body_last_st = interfaces_1.S3.get_last(loop_body);
    var swhile = new interfaces_1.S3.While(module_name, loop_body, statement.pos);
    cond_last_st.exit_point = swhile;
    body_last_st.exit_point = condition_entry;
    return condition_entry;
}
function transform_until(statement, module_name) {
    var body = transform_body(statement.body, module_name);
    var body_last_st = interfaces_1.S3.get_last(body);
    var condition = transform_expression(statement.condition, module_name);
    /**
     * La condicion del bucle se evalua luego del ultimo enunciado
     * que este contiene.
     */
    body_last_st.exit_point = condition;
    var last_st_condition = interfaces_1.S3.get_last(condition);
    var suntil = new interfaces_1.S3.Until(module_name, body, statement.pos);
    last_st_condition.exit_point = suntil;
    return body;
}
function transform_for(statement, module_name) {
    /**
     * Los bucles para tienen la siguiente estructura
     *
     * para <contador> <- <valor inicial> hasta <valor tope>
     *      <enunciados>
     * finpara
     *
     * El bucle finaliza cuando la variable contador supera al
     * valor tope.
     */
    /**
     * Los bucles 'para' se convierten en bucles 'mientras'.
     * Eso implica que hay crear el enunciado que inicializa
     * la variable del for, y agregar el enunciado de
     * incremento y el de comparacion al final del cuerpo
     * del while
     */
    /**
     * Este es el enunciado de asignacion que inicializa el contador.
     */
    var init = transform_assignment(statement.counter_init, module_name);
    var init_last = interfaces_1.S3.get_last(init);
    /**
     * Ese debe engancharse con la condicion del while.
     * La condicion es <contador> <= <tope>
     */
    var left = statement.counter_init.left;
    var condition_exp = [left].concat(statement.last_value, [{ type: 'operator', name: 'minor-eq' }]);
    var condition_entry = transform_expression(condition_exp, module_name);
    var conditon_last = interfaces_1.S3.get_last(condition_entry);
    /**
     * A la evaluacion de la condicion le sigue el cuerpo del bucle
     */
    var body = transform_body(statement.body, module_name);
    var body_last = interfaces_1.S3.get_last(body);
    /**
     * Y al cuerpo del bucle le sigue el incremento del contador
     */
    var increment_value = create_literal_number_exp(1);
    var right = [left, increment_value, { type: 'operator', name: 'plus' }];
    /**
     * Enunciado S2 del incremento
     */
    var assingment = {
        left: left,
        right: right,
        type: 'assignment',
        typings: {
            left: left.typings.type,
            right: left.typings.type
        },
        pos: null
    };
    /**
     * Ahora ese enunciado de S2 debe convertirse en uno de Program
     */
    var incremement_entry = transform_assignment(assingment, module_name, false); // este false indica que este no es un enunciado de asignacion del usuario
    var increment_last = interfaces_1.S3.get_last(incremement_entry);
    /**
     * Y ahora hay que enganchar todo:
     * -    inicializacion
     * -    condicion
     * -    enunciado mientras (aca se decide si entrar o no al cuerpo)
     * -    cuerpo
     * -    incremento
     * -    condicion
     */
    var swhile = new interfaces_1.S3.While(module_name, body, statement.pos);
    init_last.exit_point = condition_entry;
    conditon_last.exit_point = swhile;
    body_last.exit_point = incremement_entry;
    increment_last.exit_point = condition_entry;
    return init;
}
function transform_call(call, module_name) {
    /**
     * Para transformar las llamadas solo hay que encadenar
     * la evaluacion de sus argumentos (en el orden en que aparecen)
     * con el Statement de llamada.
     */
    var first_arg = null;
    var last_statement = null;
    var first_arg_initd = false;
    for (var i = 0; i < call.args.length; i++) {
        var next_arg = null;
        if (call.parameters[i].by_ref) {
            var invocation = call.args[i][0];
            /**
             * apilar los indices de la invocacion
             */
            var first_index = null;
            var last_index_st = null;
            var index_initd = false;
            for (var j = 0; j < invocation.indexes.length; j++) {
                var next_index = transform_expression(invocation.indexes[j], module_name);
                if (j == 0) {
                    first_index = next_index;
                    last_index_st = interfaces_1.S3.get_last(first_index);
                    index_initd = true;
                }
                else {
                    last_index_st.exit_point = next_index;
                    last_index_st = next_index;
                }
            }
            var varkind = call.parameters[i].is_array ? 'vector' : 'scalar';
            var make_alias = new interfaces_1.S3.Alias(module_name, invocation.name, invocation.indexes.length, invocation.dimensions, call.parameters[i].name, call.name, varkind);
            if (index_initd) {
                last_index_st.exit_point = make_alias;
                next_arg = first_index;
            }
            else {
                next_arg = make_alias;
            }
        }
        else if (call.parameters[i].is_array) {
            // Hay que inicializar un vector del modulo con valores del vector pasado como argumento
            var source = call.args[i][0];
            var param = call.parameters[i];
            var entry = null;
            var last = null;
            var entry_initd = false;
            for (var i_1 = 0; i_1 < source.indexes.length; i_1++) {
                if (!entry_initd) {
                    entry = transform_expression(source.indexes[i_1], module_name);
                    last = interfaces_1.S3.get_last(entry);
                    entry_initd = true;
                }
                else {
                    var next = transform_expression(source.indexes[i_1], module_name);
                    last.exit_point = next;
                    last = interfaces_1.S3.get_last(next);
                }
            }
            var initv = new interfaces_1.S3.InitV(module_name, { name: source.name, indexes: source.indexes.length, dimensions: source.dimensions }, param.name);
            if (entry_initd) {
                last.exit_point = initv;
                next_arg = entry;
            }
            else {
                next_arg = initv;
            }
        }
        else {
            next_arg = transform_expression(call.args[i], module_name);
        }
        if (i == 0) {
            first_arg = next_arg;
            last_statement = interfaces_1.S3.get_last(first_arg);
            first_arg_initd = true;
        }
        else {
            last_statement.exit_point = next_arg;
            last_statement = interfaces_1.S3.get_last(next_arg);
        }
    }
    var ucall = new interfaces_1.S3.UserModuleCall(module_name, call.name, call.args.length, call.pos);
    if (first_arg_initd) {
        var make_frame = new interfaces_1.S3.MakeFrame(module_name, call.name);
        // enlazar creacion de frame a inicializacion de argumentos
        make_frame.exit_point = first_arg;
        // enlazar inicializacion de argumentos a llamada
        last_statement.exit_point = ucall;
        return make_frame;
    }
    else {
        var make_frame = new interfaces_1.S3.MakeFrame(module_name, call.name);
        // enlazar creacion de frame a llamada
        make_frame.exit_point = ucall;
        return ucall;
    }
}
function transform_write(wc, module_name) {
    /**
     * Escribir es un procedimiento que toma solo un argumento,
     * en realidad.
     * Hay que hacer una llamada por cada argumento evaluado.
     */
    var first_arg = transform_expression(wc.args[0], module_name);
    var last_statement = interfaces_1.S3.get_last(first_arg);
    if (wc.typings.args[0] instanceof interfaces_1.Typed.StringType) {
        var concat = new interfaces_1.S3.Concat(module_name, wc.typings.args[0].length);
        last_statement.exit_point = concat;
        last_statement = concat;
    }
    var escribir_call = new interfaces_1.S3.WriteCall(module_name, wc.pos);
    last_statement.exit_point = escribir_call;
    last_statement = escribir_call;
    for (var i = 1; i < wc.args.length; i++) {
        var next_arg = transform_expression(wc.args[i], module_name);
        last_statement.exit_point = next_arg;
        last_statement = interfaces_1.S3.get_last(next_arg);
        if (wc.typings.args[i] instanceof interfaces_1.Typed.StringType) {
            var concat = new interfaces_1.S3.Concat(module_name, wc.typings.args[i].length);
            last_statement.exit_point = concat;
            last_statement = concat;
        }
        var wcall = new interfaces_1.S3.WriteCall(module_name, wc.pos);
        last_statement.exit_point = wcall;
        last_statement = wcall;
    }
    return first_arg;
}
function transform_read(rc, module_name) {
    /**
     * Leer tambien es un procedimiento de un solo argumento.
     * Por cada argumento hay que crear una llamada a leer y una asignacion.
     * La llamada a leer inserta el valor leido al tope de la pila.
     */
    var first_call;
    var current_call;
    var last_statement;
    var current_var;
    for (var i = 0; i < rc.args.length; i++) {
        /**
         * El type assert es correcto porque esta garantizado por
         * el TypeChecker que los argumentos de un llamado a leer
         * son todos Invocation.
         */
        current_var = rc.args[i][0];
        var lcall = new interfaces_1.S3.ReadCall(module_name, current_var.name, current_var.typings.type, rc.pos);
        if (i == 0) {
            first_call = lcall;
        }
        else {
            last_statement.exit_point = lcall;
        }
        var target_assignment = null;
        if (current_var.typings.type instanceof interfaces_1.Typed.StringType) {
            target_assignment = new interfaces_1.S3.AssignString(module_name, current_var.name, current_var.typings.type.length, current_var.indexes.length, false);
        }
        else {
            target_assignment = create_assignment(current_var, module_name);
        }
        lcall.exit_point = target_assignment;
        last_statement = interfaces_1.S3.get_last(target_assignment);
    }
    return first_call;
}
function create_assignment(v, module_name) {
    if (v.is_array) {
        if (v.dimensions.length > v.indexes.length) {
            /**
             * tamaño de las dimensiones cuyos indices van a ir variando
             */
            var missing_indexes = helpers_1.drop(v.indexes.length, v.dimensions);
            var smallest_index = helpers_1.arr_counter(missing_indexes.length, 1);
            var first_index = void 0;
            var last_statement = void 0;
            for (var i = helpers_1.arr_counter(missing_indexes.length, 1); helpers_1.arr_minor(i, missing_indexes) || helpers_1.arr_equal(i, missing_indexes); helpers_1.arr_counter_inc(i, missing_indexes, 1)) {
                /**
                 * Los indices que no fueron proprocionados seran completados con los del
                 * contador `i`
                 */
                var final_indexes = v.indexes.concat(i.map(function (index) { return [create_literal_number_exp(index)]; }));
                for (var j = 0; j < final_indexes.length; j++) {
                    var index_exp = transform_expression(final_indexes[j], module_name);
                    /**
                     * Si esta es la primer iteracion de ambos bucles...
                     */
                    if (helpers_1.arr_equal(i, smallest_index) && j == 0) {
                        first_index = index_exp;
                    }
                    else {
                        last_statement.exit_point = index_exp;
                    }
                    last_statement = interfaces_1.S3.get_last(index_exp);
                }
                var assignment = new interfaces_1.S3.AssignV(module_name, final_indexes.length, v.dimensions, v.name, false);
                last_statement.exit_point = assignment;
                last_statement = assignment;
            }
            return first_index;
        }
        else {
            var first_index = transform_expression(v.indexes[0], module_name);
            var last_statement = interfaces_1.S3.get_last(first_index);
            for (var i = 0; i < v.indexes.length - 1; i++) {
                var next_index = transform_expression(v.indexes[i + 1], module_name);
                last_statement.exit_point = next_index;
                last_statement = interfaces_1.S3.get_last(next_index);
            }
            var assignment = new interfaces_1.S3.AssignV(module_name, v.indexes.length, v.dimensions, v.name, false);
            last_statement.exit_point = assignment;
            return first_index;
        }
    }
    else {
        var assignment = new interfaces_1.S3.Assign(module_name, v.name, false, { line: -1, column: -1 });
        return assignment;
    }
}
function create_literal_number_exp(n) {
    return { type: 'literal', value: n, typings: { type: new interfaces_1.Typed.AtomicType('literal', 'entero') } }; // este tipo solo esta aca para cumplir con la interfaz
}
function transform_return(ret, module_name) {
    /**
     * Para transformar 'retornar' solo hay que transformar
     * su expresion. Una vez que se evalue eso, el retorno de
     * la funcion queda al tope de la pila. Luego de eso
     * viene el enunciado 'retornar' que termina la ejecucion
     * de la funcion donde se encuentra.
     */
    var entry = transform_expression(ret.expression, module_name);
    var ret_statement = new interfaces_1.S3.Return(module_name, ret.pos);
    interfaces_1.S3.get_last(entry).exit_point = ret_statement;
    return entry;
}
function transform_body(body, module_name) {
    if (body.length > 0) {
        var entry_point = transform_statement(body[0], module_name);
        var last_statement = interfaces_1.S3.get_last(entry_point);
        for (var i = 0; i < body.length - 1; i++) {
            var next_statement = transform_statement(body[i + 1], module_name);
            last_statement.exit_point = next_statement;
            last_statement = interfaces_1.S3.get_last(next_statement);
        }
        return entry_point;
    }
    else {
        return null;
    }
}
function transform_statement(statement, module_name) {
    switch (statement.type) {
        case 'assignment':
            return transform_assignment(statement, module_name);
        case 'if':
            return transform_if(statement, module_name);
        case 'while':
            return transform_while(statement, module_name);
        case 'until':
            return transform_until(statement, module_name);
        case 'for':
            return transform_for(statement, module_name);
        case 'call':
            switch (statement.name) {
                case 'leer':
                    return transform_read(statement, module_name);
                case 'escribir':
                    return transform_write(statement, module_name);
                default:
                    return transform_call(statement, module_name);
            }
        case 'return':
            return transform_return(statement, module_name);
    }
}
function transform_assignment(a, module_name, user_statement) {
    var is_user_statement;
    if (typeof user_statement != 'undefined') {
        is_user_statement = user_statement;
    }
    else {
        is_user_statement = true;
    }
    if (a.left.dimensions.length > 0 && a.left.indexes.length < a.left.dimensions.length) {
        /**
         * Asignacion vectorial: copiar los contenidos de un vector a otro o asignar
         * una cadena a un vector.
         */
        if (a.typings.left instanceof interfaces_1.Typed.StringType && a.typings.right instanceof interfaces_1.Typed.StringType && a.typings.right.represents == 'literal') {
            /**
             * Enunciados que apilan la cadena
             */
            var stack_string = transform_expression(a.right, module_name);
            var assignment = new interfaces_1.S3.AssignString(module_name, a.left.name, a.typings.left.length, a.left.indexes.length, is_user_statement, a.pos);
            assignment.pos = a.pos;
            interfaces_1.S3.get_last(stack_string).exit_point = assignment;
            return stack_string;
        }
        else {
            /**
             * Copiar contenidos de un vector a otro
             */
            /**
             * Apilar indices del vector que recibe los datos
             */
            var entry = null;
            var last = null;
            var entry_initd = false;
            for (var i = 0; i < a.left.indexes.length; i++) {
                if (i == 0) {
                    entry = transform_expression(a.left.indexes[i], module_name);
                    last = interfaces_1.S3.get_last(entry);
                    entry_initd = true;
                }
                else {
                    var next = transform_expression(a.left.indexes[i], module_name);
                    last.exit_point = next;
                    last = interfaces_1.S3.get_last(next);
                }
            }
            /**
             * Apilar indices del vector del cual se copian los datos
             * Aclaracion: el type assert para a.right es correcto porque ya se verifico
             * (en TSChecker) que el primer y unico componente de esa expresion sea una
             * invocacion de un vector.
             */
            for (var i = 0; i < a.right[0].indexes.length; i++) {
                if (!entry_initd) {
                    entry = transform_expression(a.right[0].indexes[i], module_name);
                    last = interfaces_1.S3.get_last(entry);
                    entry_initd = true;
                }
                else {
                    var next = transform_expression(a.right[0].indexes[i], module_name);
                    last.exit_point = next;
                    last = interfaces_1.S3.get_last(next);
                }
            }
            var target = {
                name: a.left.name,
                dimensions: a.left.dimensions,
                indexes: a.left.indexes.length
            };
            var source = {
                name: a.right[0].name,
                dimensions: a.right[0].dimensions,
                indexes: a.right[0].indexes.length
            };
            var copy_statement = new interfaces_1.S3.CopyVec(module_name, target, source, a.pos);
            if (!entry_initd) {
                return copy_statement;
            }
            else {
                last.exit_point = copy_statement;
                return entry;
            }
        }
    }
    else {
        /**
         * Primer enunciado de la evaluacion de la expresion que se debe asignar
         */
        var entry_point = transform_expression(a.right, module_name);
        /**
         * Ultimo enunciado de evaluacion de la expresion
         */
        var last_statement = interfaces_1.S3.get_last(entry_point);
        /**
         * Asignacion normal: hay que copiar un valor a una variable (o una celda de un vector).
         * Para hacer eso hay que poner la expresion que se va a asignar en la pila y luego hacer
         * un enunciado de asignacion.
         *
         * Si la asignacion es a una celda de un vector, primero hay que la expresion a asignar
         * en la pila, luego los indices de la celda, y por ultimo el enunciado de asignacion.
         */
        if (a.left.is_array) {
            var v = a.left;
            var first_index = transform_expression(v.indexes[0], module_name);
            var index_last_st = interfaces_1.S3.get_last(first_index);
            for (var i = 0; i < v.indexes.length - 1; i++) {
                var next_index = transform_expression(v.indexes[i + 1], module_name);
                index_last_st.exit_point = next_index;
                index_last_st = interfaces_1.S3.get_last(next_index);
            }
            var assignv = new interfaces_1.S3.AssignV(module_name, v.indexes.length, v.dimensions, v.name, is_user_statement, a.pos);
            index_last_st.exit_point = assignv;
            last_statement.exit_point = first_index;
            return entry_point;
        }
        else {
            var assign = new interfaces_1.S3.Assign(module_name, a.left.name, is_user_statement, a.pos);
            last_statement.exit_point = assign;
            return entry_point;
        }
    }
}
function transform_invocation(i, module_name) {
    if (i.is_array) {
        if (i.dimensions.length > i.indexes.length) {
            /**
             * tamaño de las dimensiones cuyos indices van a ir variando
             */
            var missing_indexes = helpers_1.drop(i.indexes.length, i.dimensions);
            /**
             * el indice mas pequeño posible
             */
            var smallest_index = helpers_1.arr_counter(i.dimensions.length - i.indexes.length, 1);
            var first_index = void 0;
            var last_statement = void 0;
            /**
             * smallest_index.slice(0) hace una copia de dv
             */
            for (var j = smallest_index.slice(0); helpers_1.arr_minor(j, missing_indexes) || helpers_1.arr_equal(j, missing_indexes); helpers_1.arr_counter_inc(j, missing_indexes, 1)) {
                /**
                 * Los indices que no fueron proprocionados seran completados con los del
                 * contador `i`
                 */
                var final_indexes = i.indexes.concat(j.map(function (index) { return [create_literal_number_exp(index)]; }));
                for (var k = 0; k < final_indexes.length; k++) {
                    var index_exp = transform_expression(final_indexes[k], module_name);
                    /**
                     * Si esta es la primer iteracion de ambos bucles...
                     */
                    if (helpers_1.arr_equal(j, smallest_index) && k == 0) {
                        first_index = index_exp;
                    }
                    else {
                        last_statement.exit_point = index_exp;
                    }
                    last_statement = interfaces_1.S3.get_last(index_exp);
                }
                var invocation = new interfaces_1.S3.GetV(module_name, final_indexes.length, i.dimensions, i.name);
                last_statement.exit_point = invocation;
                last_statement = invocation;
            }
            return first_index;
        }
        else {
            var first_index = transform_expression(i.indexes[0], module_name);
            var last_statement = interfaces_1.S3.get_last(first_index);
            for (var j = 1; j < i.indexes.length; j++) {
                var next_index = transform_expression(i.indexes[j], module_name);
                last_statement.exit_point = next_index;
                last_statement = interfaces_1.S3.get_last(next_index);
            }
            var getv = new interfaces_1.S3.GetV(module_name, i.indexes.length, i.dimensions, i.name);
            last_statement.exit_point = getv;
            return first_index;
        }
    }
    else {
        var geti = new interfaces_1.S3.Get(module_name, i.name);
        return geti;
    }
}
function transform_expression(expression, module_name) {
    var statements = [];
    for (var _i = 0, expression_1 = expression; _i < expression_1.length; _i++) {
        var e = expression_1[_i];
        statements.push(transform_exp_element(e, module_name));
    }
    var entry = statements[0];
    var last_statement = interfaces_1.S3.get_last(entry);
    for (var i = 0; i < statements.length - 1; i++) {
        last_statement.exit_point = statements[i + 1];
        last_statement = interfaces_1.S3.get_last(statements[i + 1]);
    }
    return entry;
}
function transform_exp_element(element, module_name) {
    switch (element.type) {
        case 'operator':
            switch (element.name) {
                case 'times':
                    return new interfaces_1.S3.Operation(module_name, interfaces_1.S3.StatementKinds.Times);
                case 'slash':
                    return new interfaces_1.S3.Operation(module_name, interfaces_1.S3.StatementKinds.Slash);
                case 'power':
                    return new interfaces_1.S3.Operation(module_name, interfaces_1.S3.StatementKinds.Power);
                case 'div':
                    return new interfaces_1.S3.Operation(module_name, interfaces_1.S3.StatementKinds.Div);
                case 'mod':
                    return new interfaces_1.S3.Operation(module_name, interfaces_1.S3.StatementKinds.Mod);
                case 'minus':
                    return new interfaces_1.S3.Operation(module_name, interfaces_1.S3.StatementKinds.Minus);
                case 'plus':
                    return new interfaces_1.S3.Operation(module_name, interfaces_1.S3.StatementKinds.Plus);
                case 'minor':
                    return new interfaces_1.S3.Operation(module_name, interfaces_1.S3.StatementKinds.Minor);
                case 'minor-eq':
                    return new interfaces_1.S3.Operation(module_name, interfaces_1.S3.StatementKinds.MinorEq);
                case 'major':
                    return new interfaces_1.S3.Operation(module_name, interfaces_1.S3.StatementKinds.Major);
                case 'major-eq':
                    return new interfaces_1.S3.Operation(module_name, interfaces_1.S3.StatementKinds.MajorEq);
                case 'equal':
                    return new interfaces_1.S3.Operation(module_name, interfaces_1.S3.StatementKinds.Equal);
                case 'not':
                    return new interfaces_1.S3.Operation(module_name, interfaces_1.S3.StatementKinds.Not);
                case 'different':
                    return new interfaces_1.S3.Operation(module_name, interfaces_1.S3.StatementKinds.Different);
                case 'and':
                    return new interfaces_1.S3.Operation(module_name, interfaces_1.S3.StatementKinds.And);
                case 'or':
                    return new interfaces_1.S3.Operation(module_name, interfaces_1.S3.StatementKinds.Or);
                case 'neg':
                    return new interfaces_1.S3.Operation(module_name, interfaces_1.S3.StatementKinds.Neg);
            }
            break;
        case 'literal':
            return new interfaces_1.S3.Push(module_name, element.value);
        case 'invocation':
            return transform_invocation(element, module_name);
        case 'call':
            return transform_call(element, module_name);
    }
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = __webpack_require__(1);
var helpers_1 = __webpack_require__(3);
function transform(ast) {
    var errors = [];
    var typed_program = {
        modules: {
            main: null
        },
        variables_per_module: ast.local_variables
    };
    var main_report = transfor_module(ast.modules.main, ast);
    if (main_report.error) {
        errors = errors.concat(main_report.result);
    }
    else {
        typed_program.modules.main = main_report.result;
    }
    for (var name in ast.modules.user_modules) {
        var report = transfor_module(ast.modules.user_modules[name], ast);
        if (report.error) {
            errors = errors.concat(report.result);
        }
        else {
            typed_program.modules[name] = report.result;
        }
    }
    if (errors.length > 0) {
        return { error: true, result: errors };
    }
    else {
        return { error: false, result: typed_program };
    }
}
exports.default = transform;
function transfor_module(m, p) {
    var errors = [];
    var typed_module;
    if (m.module_type == 'main') {
        typed_module = {
            body: [],
            module_type: 'main',
            return_type: 'ninguno',
            parameters: []
        };
    }
    else {
        var parameters = [];
        var ptypes = type_params(p.modules.user_modules[m.name].parameters);
        for (var i = 0; i < ptypes.length; i++) {
            var _a = p.modules.user_modules[m.name].parameters[i], name = _a.name, by_ref = _a.by_ref, is_array = _a.is_array, dimensions = _a.dimensions;
            parameters.push({ name: name, by_ref: by_ref, is_array: is_array, dimensions: dimensions, type: ptypes[i] });
        }
        typed_module = {
            body: [],
            module_type: p.modules.user_modules[m.name].module_type,
            return_type: p.modules.user_modules[m.name].return_type,
            parameters: parameters
        };
    }
    for (var _i = 0, _b = m.body; _i < _b.length; _i++) {
        var a = _b[_i];
        var report = transform_statement(a, m.name, p);
        if (report.error) {
            errors = errors.concat(report.result);
        }
        else {
            typed_module.body.push(report.result);
        }
    }
    if (errors.length > 0) {
        return { error: true, result: errors };
    }
    else {
        return { error: false, result: typed_module };
    }
}
function transform_statement(a, mn, p) {
    switch (a.type) {
        case 'assignment':
            return transform_assignment(a, mn, p);
        case 'call':
            return type_call(a, mn, p);
        case 'if':
            return transform_if(a, mn, p);
        case 'for':
            return transform_for(a, mn, p);
        case 'while':
            return transform_while(a, mn, p);
        case 'until':
            return transform_until(a, mn, p);
        case 'return':
            return transform_return(a, mn, p);
    }
}
function transform_if(a, mn, p) {
    var errors = [];
    var c_report = type_expression(a.condition, mn, p);
    if (c_report.error) {
        errors = errors.concat(c_report.result);
    }
    var typed_tb = [];
    for (var _i = 0, _a = a.true_branch; _i < _a.length; _i++) {
        var e = _a[_i];
        var report = transform_statement(e, mn, p);
        if (report.error) {
            errors = errors.concat(report.result);
        }
        else {
            typed_tb.push(report.result);
        }
    }
    var typed_fb = [];
    for (var _b = 0, _c = a.false_branch; _b < _c.length; _b++) {
        var e = _c[_b];
        var report = transform_statement(e, mn, p);
        if (report.error) {
            errors = errors.concat(report.result);
        }
        else {
            typed_fb.push(report.result);
        }
    }
    if (errors.length > 0) {
        return { error: true, result: errors };
    }
    else {
        var cond_type = calculate_type(c_report.result);
        if (cond_type.error) {
            return { error: true, result: errors.concat(cond_type.result) };
        }
        else {
            var result = {
                type: 'if',
                pos: a.pos,
                condition: c_report.result,
                true_branch: typed_tb,
                false_branch: typed_fb,
                typings: {
                    condition: cond_type.result
                }
            };
            return { error: false, result: result };
        }
    }
}
function transform_for(f, mn, p) {
    var errors = [];
    var init = transform_assignment(f.counter_init, mn, p);
    if (init.error) {
        errors = errors.concat(init.result);
    }
    var last = type_expression(f.last_value, mn, p);
    if (last.error) {
        errors = errors.concat(last.result);
    }
    var body = [];
    for (var _i = 0, _a = f.body; _i < _a.length; _i++) {
        var e = _a[_i];
        var report = transform_statement(e, mn, p);
        if (report.error) {
            errors = errors.concat(report.result);
        }
        else {
            body.push(report.result);
        }
    }
    if (errors.length > 0) {
        return { error: true, result: errors };
    }
    else {
        var last_v_type = calculate_type(last.result);
        if (last_v_type.error) {
            return { error: true, result: errors.concat(last_v_type.result) };
        }
        else {
            var result = {
                type: 'for',
                pos: f.pos,
                counter_init: init.result,
                body: body,
                last_value: last.result,
                typings: {
                    init_value: init.result.typings.right,
                    last_value: last_v_type.result
                }
            };
            return { error: false, result: result };
        }
    }
}
function transform_while(w, mn, p) {
    var errors = [];
    var c_report = type_expression(w.condition, mn, p);
    if (c_report.error) {
        errors = errors.concat(c_report.result);
    }
    var body_statements = [];
    for (var _i = 0, _a = w.body; _i < _a.length; _i++) {
        var e = _a[_i];
        var report = transform_statement(e, mn, p);
        if (report.error) {
            errors = errors.concat(report.result);
        }
        else {
            body_statements.push(report.result);
        }
    }
    if (errors.length > 0) {
        return { error: true, result: errors };
    }
    else {
        var condition_type = calculate_type(c_report.result);
        if (condition_type.error) {
            return { error: true, result: errors.concat(condition_type.result) };
        }
        else {
            var result = {
                type: 'while',
                pos: w.pos,
                condition: c_report.result,
                body: body_statements,
                typings: {
                    body: body_statements,
                    condition: condition_type.result
                }
            };
            return { error: false, result: result };
        }
    }
}
function transform_until(u, mn, p) {
    var errors = [];
    var c_report = type_expression(u.condition, mn, p);
    if (c_report.error) {
        errors = errors.concat(c_report.result);
    }
    var body_statements = [];
    for (var _i = 0, _a = u.body; _i < _a.length; _i++) {
        var e = _a[_i];
        var report = transform_statement(e, mn, p);
        if (report.error) {
            errors = errors.concat(report.result);
        }
        else {
            body_statements.push(report.result);
        }
    }
    if (errors.length > 0) {
        return { error: true, result: errors };
    }
    else {
        var condition_type = calculate_type(c_report.result);
        if (condition_type.error) {
            return { error: true, result: errors.concat(condition_type.result) };
        }
        else {
            var result = {
                type: 'until',
                pos: u.pos,
                condition: c_report.result,
                body: body_statements,
                typings: {
                    body: body_statements,
                    condition: condition_type.result
                }
            };
            return { error: false, result: result };
        }
    }
}
function transform_return(r, mn, p) {
    var errors = [];
    var exp = type_expression(r.expression, mn, p);
    if (exp.error) {
        return exp;
    }
    else {
        /**
         * el tipo del valor de este enunciado 'retornar'
         */
        var report = calculate_type(exp.result);
        if (report.error) {
            return report;
        }
        else {
            var type = r.type, expected = r.expected;
            var result = {
                type: type,
                pos: r.pos,
                expression: exp.result,
                typings: {
                    actual: report.result,
                    expected: new interfaces_1.Typed.AtomicType('literal', expected)
                }
            };
            return { error: false, result: result };
        }
    }
}
function type_call(a, mn, p) {
    var errors = [];
    /**
     * epxresiones de tipo de cada argumento
     */
    var transformed_args = [];
    for (var _i = 0, _a = a.args; _i < _a.length; _i++) {
        var arg = _a[_i];
        var report = type_expression(arg, mn, p);
        if (report.error) {
            errors = errors.concat(report.result);
        }
        else {
            transformed_args.push(report.result);
        }
    }
    if (errors.length > 0) {
        return { error: true, result: errors };
    }
    else {
        /**
         * reducir las expresiones a tipos
         */
        var type_reports = transformed_args.map(calculate_type);
        var argtypes = [];
        var error_found = false;
        for (var _b = 0, type_reports_1 = type_reports; _b < type_reports_1.length; _b++) {
            var report = type_reports_1[_b];
            if (report.error) {
                error_found = true;
                errors = errors.concat(report.result);
            }
            else {
                argtypes.push(report.result);
            }
        }
        if (error_found) {
            return { error: true, result: errors };
        }
        else {
            var paramtypes = type_params(a.parameters);
            var ret = new interfaces_1.Typed.AtomicType('literal', a.return_type);
            var type = a.type, name = a.name, parameters = a.parameters;
            var result = {
                type: type,
                pos: a.pos,
                name: name,
                args: transformed_args,
                parameters: parameters,
                typings: {
                    args: argtypes,
                    parameters: paramtypes,
                    return: ret
                }
            };
            return { error: false, result: result };
        }
    }
}
function type_params(params) {
    var paramtypes = [];
    for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
        var param = params_1[_i];
        var inv_or_lit = param.by_ref ? 'invocation' : 'literal';
        if (param.is_array) {
            var type = null;
            if (param.type == 'caracter' && param.dimensions.length == 1) {
                type = new interfaces_1.Typed.StringType(param.dimensions[0], inv_or_lit);
            }
            else {
                for (var i = param.dimensions.length - 1; i >= 0; i--) {
                    if (i == param.dimensions.length - 1) {
                        type = new interfaces_1.Typed.ArrayType(inv_or_lit, new interfaces_1.Typed.AtomicType(inv_or_lit, param.type), param.dimensions[i]);
                    }
                    else {
                        type = new interfaces_1.Typed.ArrayType(inv_or_lit, type, param.dimensions[i]);
                    }
                }
            }
            paramtypes.push(type);
        }
        else {
            paramtypes.push(new interfaces_1.Typed.AtomicType(inv_or_lit, param.type));
        }
    }
    return paramtypes;
}
function transform_invocation(i, mn, p) {
    var errors = [];
    var index_exps = [];
    for (var _i = 0, _a = i.indexes; _i < _a.length; _i++) {
        var index = _a[_i];
        var report = type_expression(index, mn, p);
        if (report.error) {
            errors = errors.concat(report.result);
        }
        else {
            index_exps.push(report.result);
        }
    }
    if (errors.length > 0) {
        return { error: true, result: errors };
    }
    else {
        var type_reports = index_exps.map(calculate_type);
    }
}
function transform_assignment(a, mn, p) {
    var errors = [];
    var left_type = type_invocation(a.left, mn, p);
    if (left_type.error) {
        errors = errors.concat(left_type.result);
    }
    var typed_right = type_expression(a.right, mn, p);
    if (typed_right.error) {
        errors = errors.concat(typed_right.result);
        return { error: true, result: errors };
    }
    else {
        /**
         * reducir la expresion tipada a un solo tipo
         */
        var right_type = calculate_type(typed_right.result);
        if (right_type.error) {
            errors = errors.concat(right_type.result);
            return { error: true, result: errors };
        }
        else {
            /**
             * copiar las propiedades que permanecen constantes
             */
            var type = a.type, left = a.left, right = a.right;
            var result = {
                type: type,
                pos: a.pos,
                left: left_type.result,
                right: typed_right.result,
                typings: { left: left_type.result.typings.type, right: right_type.result }
            };
            return { error: false, result: result };
        }
    }
}
function type_expression(es, mn, p) {
    var typed_exp = [];
    var errors = [];
    for (var _i = 0, es_1 = es; _i < es_1.length; _i++) {
        var e = es_1[_i];
        switch (e.type) {
            case 'invocation':
                {
                    var report = type_invocation(e, mn, p);
                    if (report.error) {
                        errors = errors.concat(report.result);
                    }
                    else {
                        typed_exp.push(report.result);
                    }
                }
                break;
            case 'literal':
                typed_exp.push(helpers_1.type_literal(e));
                break;
            case 'call':
                {
                    var report = type_call(e, mn, p);
                    if (report.error) {
                        errors = errors.concat(report.result);
                    }
                    else {
                        typed_exp.push(report.result);
                    }
                }
                break;
            case 'operator':
                typed_exp.push(e);
                break;
        }
    }
    if (errors.length > 0) {
        return { error: true, result: errors };
    }
    else {
        return { error: false, result: typed_exp };
    }
}
function type_invocation(i, mn, p) {
    var errors = [];
    /**
     * el tipo de dato que esta invocacion retorna
     */
    var invocation_datatype;
    if (i.is_array) {
        /**
         * 'expresiones de tipo'
         */
        var type_exps = type_indexes(i.indexes, mn, p);
        if (i.indexes.length > i.dimensions.length) {
            var error = {
                reason: '@invocation-extra-indexes',
                where: 'typer',
                name: i.name,
                indexes: i.indexes.length,
                dimensions: i.dimensions.length
            };
            errors.push(error);
        }
        else if (i.indexes.length == i.dimensions.length) {
            /**
             * Si tienen la misma cantidad de indices que dimensiones
             * solo hay que calcular el tipo resultante y los tipos
             * de los indices.
             */
            invocation_datatype = new interfaces_1.Typed.AtomicType('invocation', i.datatype);
        }
        else {
            /**
             * Como hay menos indices que dimensiones hay que calcular
             * el tipo del valor que esta invocacion retorna
             */
            var remaining_dimensions = helpers_1.drop(i.indexes.length, i.dimensions);
            var last_type = void 0;
            for (var j = remaining_dimensions.length - 1; j >= 0; j--) {
                if (j == remaining_dimensions.length - 1) {
                    if (i.datatype == 'caracter') {
                        last_type = new interfaces_1.Typed.StringType(remaining_dimensions[j], 'invocation');
                    }
                    else {
                        last_type = new interfaces_1.Typed.ArrayType('invocation', new interfaces_1.Typed.AtomicType('invocation', i.datatype), remaining_dimensions[j]);
                    }
                }
                else {
                    last_type = new interfaces_1.Typed.ArrayType('invocation', last_type, remaining_dimensions[j]);
                }
            }
            invocation_datatype = last_type;
        }
        if (errors.length > 0 || type_exps.error) {
            if (type_exps.error) {
                errors = errors.concat(type_exps.result);
            }
            return { error: true, result: errors };
        }
        else {
            /**
             * Reducir los indices a tipos individuales...ultima
             * oportunidad para que haya errores
             */
            var types = type_exps.result.map(calculate_type);
            var indextype_error_found = false;
            for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
                var report = types_1[_i];
                if (report.error) {
                    indextype_error_found = true;
                    errors = errors.concat(report.result);
                }
            }
            if (indextype_error_found) {
                return { error: true, result: errors };
            }
            else {
                var indextypes = types.map(function (t) { return t.result; });
                var dimensions = i.dimensions, indexes = i.indexes, name = i.name, is_array = i.is_array;
                var result = {
                    type: 'invocation',
                    indexes: type_exps.result,
                    dimensions: dimensions,
                    name: name,
                    is_array: is_array,
                    typings: {
                        indexes: indextypes,
                        type: invocation_datatype
                    }
                };
                return { error: false, result: result };
            }
        }
    }
    else {
        var dimensions = i.dimensions, datatype = i.datatype, indexes = i.indexes, name = i.name, is_array = i.is_array;
        var result = {
            type: 'invocation',
            dimensions: dimensions,
            indexes: [],
            name: name,
            is_array: is_array,
            typings: {
                indexes: [],
                type: new interfaces_1.Typed.AtomicType('invocation', datatype)
            }
        };
        return { error: false, result: result };
    }
}
function type_indexes(indexes, mn, p) {
    /**
     * arreglo con los tipos de los indices
     */
    var indextypes = [];
    var errors = [];
    for (var _i = 0, indexes_1 = indexes; _i < indexes_1.length; _i++) {
        var index = indexes_1[_i];
        var report = type_expression(index, mn, p);
        if (report.error) {
            errors = errors.concat(report.result);
        }
        else {
            indextypes.push(report.result);
        }
    }
    if (errors.length > 0) {
        return { error: true, result: errors };
    }
    else {
        return { error: false, result: indextypes };
    }
}
/**
 * calculate_type
 * "ejecuta" una expresion de tipos y calcula el tipo resultante
 *
 * Por ejemplo: entero + entero = entero; entero + real = real
 */
function calculate_type(exp) {
    var stack = [];
    var errors = [];
    for (var _i = 0, exp_1 = exp; _i < exp_1.length; _i++) {
        var e = exp_1[_i];
        switch (e.type) {
            case 'literal':
                stack.push(e.typings.type);
                break;
            case 'invocation':
                stack.push(e.typings.type);
                break;
            case 'call':
                stack.push(e.typings.return);
                break;
            case 'operator':
                {
                    var op_report = operate(stack, e.name);
                    if (op_report.error) {
                        errors = errors.concat(op_report.result);
                    }
                    else {
                        stack = op_report.result;
                    }
                }
                break;
        }
    }
    if (errors.length > 0) {
        return { error: true, result: errors };
    }
    else {
        return { error: false, result: stack.pop() };
    }
}
function operate(s, op) {
    switch (op) {
        case 'plus':
        case 'times':
        case 'minus':
        case 'power':
        case 'mod':
            return plus_times(s, op);
        case 'minor':
        case 'minor-eq':
        case 'major':
        case 'major-eq':
        case 'equal':
        case 'different':
            return comparison(s, op);
        case 'slash':
            return slash(s);
        case 'and':
        case 'or':
        case 'not':
            return logical(s, op);
        case 'neg':
            return neg(s);
    }
}
/**
 * Los operadores se implementan como funciones que toman una pila,
 * desapilan tantos elementos como necesiten, operan con ellos,
 * apilan el resultado y devuelven la nueva pila.
 *
 * Tambien pueden devolver un error en caso de que no haya suficientes
 * elementos en la pila o los tipos de estos no sean compatibles entre
 * si o con el operador.
 */
/**
 * plus_times calcula el tipo producido por: una suma, una resta, una multiplicacion,
 * una potencia, y modulo (mod)
 */
function plus_times(s, op) {
    var supported = ['entero', 'real'];
    if (s.length >= 2) {
        /**
         * Si la expresion era "2 + 3" entonces: a = 3 y b = 2
         */
        var a = helpers_1.stringify(s.pop());
        var b = helpers_1.stringify(s.pop());
        if (supported.indexOf(a) == -1 || supported.indexOf(b) == -1) {
            /**
             * ERROR: este operador no opera sobre el tipo de alguno de sus operandos
             */
            if (supported.indexOf(a) == -1 && supported.indexOf(b) == -1) {
                var result = { reason: 'incompatible-operands', where: 'typer', bad_type_a: a, bad_type_b: b, operator: op };
                return { error: true, result: result };
            }
            else if (supported.indexOf(a) == -1) {
                var result = { reason: 'incompatible-operand', where: 'typer', bad_type: a, operator: op };
                return { error: true, result: result };
            }
            else {
                var result = { reason: 'incompatible-operand', where: 'typer', bad_type: b, operator: op };
                return { error: true, result: result };
            }
        }
        switch (a) {
            case 'entero':
                switch (b) {
                    case 'entero':
                        s.push(new interfaces_1.Typed.AtomicType('literal', 'entero'));
                        break;
                    case 'real':
                        s.push(new interfaces_1.Typed.AtomicType('literal', 'real'));
                        break;
                }
                break;
            case 'real':
                s.push(new interfaces_1.Typed.AtomicType('literal', 'real'));
                break;
        }
        return { error: false, result: s };
    }
    else {
        var result = { reason: 'missing-operands', where: 'typer', operator: op, required: 2 };
        return { error: true, result: result };
    }
}
function comparison(s, op) {
    if (s.length >= 2) {
        var a = s.pop();
        var b = s.pop();
        var atomic_cond = a.kind == 'atomic' && b.kind == 'atomic';
        var a_float_or_int = a.typename == 'entero' || a.typename == 'real';
        var b_float_or_int = b.typename == 'entero' || b.typename == 'real';
        if (!(((helpers_1.types_are_equal(a, b) && atomic_cond) || (atomic_cond && a_float_or_int && b_float_or_int)))) {
            /**
             * Este error se detecta cuando se intenta comparar datos de tipos incompatibles
             * o cuando alguno de los operandos es un arreglo.
             */
            var result = { reason: '@comparison-bad-operands', where: 'typer', left: helpers_1.stringify(b), right: helpers_1.stringify(a) };
            return { error: true, result: result };
        }
        else {
            s.push(new interfaces_1.Typed.AtomicType('literal', 'logico'));
            return { error: false, result: s };
        }
    }
    else {
        var result = { reason: 'missing-operands', where: 'typer', operator: op, required: 2 };
        return { error: true, result: result };
    }
}
function slash(s) {
    if (s.length >= 2) {
        var a = s.pop();
        var b = s.pop();
        var a_string = helpers_1.stringify(a);
        var b_string = helpers_1.stringify(b);
        var atomic_cond = a.kind == 'atomic' && b.kind == 'atomic';
        if (!(atomic_cond && (a_string == 'entero' || a_string == 'real') && (b_string == 'entero' || b_string == 'real'))) {
            /**
             * Este error se detecta cuando se intenta comparar datos de tipos incompatibles
             * o cuando alguno de los operandos es un arreglo.
             */
            var result = { reason: 'incompatible-operands', where: 'typer', bad_type_a: helpers_1.stringify(b), operator: '/', bad_type_b: helpers_1.stringify(a) };
            return { error: true, result: result };
        }
        else {
            s.push(new interfaces_1.Typed.AtomicType('literal', 'real'));
            return { error: false, result: s };
        }
    }
    else {
        var result = { reason: 'missing-operands', where: 'typer', operator: '/', required: 2 };
        return { error: true, result: result };
    }
}
function logical(s, op) {
    if ((op == 'and' || op == 'or') && s.length >= 2) {
        var a = s.pop();
        var b = s.pop();
        var a_string = helpers_1.stringify(a);
        var b_string = helpers_1.stringify(b);
        var atomic_cond = a.kind == 'atomic' && b.kind == 'atomic';
        if (!(atomic_cond && a_string == 'logico' && b_string == 'logico')) {
            /**
             * Este error se detecta cuando se intenta comparar datos de tipos incompatibles
             * o cuando alguno de los operandos es un arreglo.
             */
            var result = { reason: 'incompatible-operands', where: 'typer', bad_type_a: helpers_1.stringify(b), operator: '/', bad_type_b: helpers_1.stringify(a) };
            return { error: true, result: result };
        }
        else {
            s.push(new interfaces_1.Typed.AtomicType('literal', 'logico'));
            return { error: false, result: s };
        }
    }
    else if (op == 'not' && s.length == 1) {
        var a = s.pop();
        if (!(a.kind == 'atomic' && helpers_1.stringify(a) == 'logico')) {
            var result = { reason: 'incompatible-operand', where: 'typer', bad_type: helpers_1.stringify(a), operator: 'not' };
            return { error: true, result: result };
        }
        else {
            s.push(new interfaces_1.Typed.AtomicType('literal', 'logico'));
            return { error: false, result: s };
        }
    }
    else {
        if (op == 'not') {
            var result = { reason: 'missing-operands', where: 'typer', operator: 'not', required: 1 };
            return { error: true, result: result };
        }
        else {
            var result = { reason: 'missing-operands', where: 'typer', operator: op, required: 2 };
            return { error: true, result: result };
        }
    }
}
function neg(s) {
    if (s.length >= 1) {
        var a = s.pop();
        var a_string = helpers_1.stringify(a);
        if (!(a.kind == 'atomic' && (a_string == 'entero' || a_string == 'real'))) {
            var result = { reason: 'incompatible-operand', where: 'typer', bad_type: a_string, operator: 'neg' };
            return { error: true, result: result };
        }
        else {
            s.push(new interfaces_1.Typed.AtomicType('literal', 'entero'));
            return { error: false, result: s };
        }
    }
    else {
        var result = { reason: 'missing-operands', where: 'typer', operator: 'neg', required: 1 };
        return { error: true, result: result };
    }
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Declarator_1 = __webpack_require__(21);
var CallDecorator_1 = __webpack_require__(20);
var Interpretable_1 = __webpack_require__(22);
var TSChecker_1 = __webpack_require__(10);
var TSTyper_1 = __webpack_require__(23);
function transform(p) {
    var s1 = Declarator_1.default(p);
    if (s1.error) {
        return s1;
    }
    else if (s1.error == false) {
        var s2 = CallDecorator_1.default(s1.result);
        if (s2.error) {
            return s2;
        }
        else if (s2.error == false) {
            var typed_program = TSTyper_1.default(s2.result);
            if (typed_program.error) {
                return typed_program;
            }
            else {
                var type_errors = TSChecker_1.default(typed_program.result);
                if (type_errors.length > 0) {
                    return { error: true, result: type_errors };
                }
                else {
                    var s3 = Interpretable_1.default(typed_program.result);
                    return { error: false, result: s3.result };
                }
            }
        }
    }
}
exports.default = transform;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Emitter = (function () {
    function Emitter(public_event_list) {
        this.public_events = public_event_list;
        this.callbacks = {};
    }
    Emitter.prototype.on = function (event_name, callback) {
        if (event_name in this.callbacks) {
            this.callbacks[event_name].push(callback);
        }
        else {
            this.callbacks[event_name] = [callback];
        }
    };
    /**
     * Se encarga de llamar a los callbacks de los eventos.
     * Si se registro un callback para 'any' entonces se lo llama para cada evento que sea emitido. Es el callback por defecto.
     * Si un evento tiene registrado un callback entonces este se ejecuta despues del callback por defecto.
     */
    Emitter.prototype.emit = function (event_name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.callbacks.hasOwnProperty('any')) {
            for (var _a = 0, _b = this.callbacks.any; _a < _b.length; _a++) {
                var callback = _b[_a];
                callback.apply(void 0, args);
            }
        }
        if (this.callbacks.hasOwnProperty(event_name)) {
            for (var _c = 0, _d = this.callbacks[event_name]; _c < _d.length; _c++) {
                var callback = _d[_c];
                callback.apply(void 0, args);
            }
        }
    };
    /**
     * Repite un evento de otro emisor como si fuera propio. El evento puede registrar como publico o no.
     */
    Emitter.prototype.repeat = function (event_name, emitter, make_public) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        if (make_public === true) {
            this.public_events.push(event_name);
        }
        var self = this;
        emitter.on(event_name, function () {
            self.emit.apply(self, [event_name].concat(args));
        });
    };
    /**
     * Emitir los eventos de otro emisor como si fueran propios.
     */
    Emitter.prototype.repeatAllPublicEvents = function (emitter) {
        for (var _i = 0, _a = emitter.public_events; _i < _a.length; _i++) {
            var event_name = _a[_i];
            this.repeat(event_name, emitter, true);
        }
    };
    return Emitter;
}());
exports.default = Emitter;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = __webpack_require__(1);
var Parser_1 = __webpack_require__(6);
function parse(s) {
    var p = new Parser_1.default();
    p.on('lexical-error', console.log);
    p.on('syntax-error', console.log);
    return p.parse(s);
}
var espacios = 2;
function fr_writer(p) {
    var variables = 'VARIABLES\n';
    for (var vn in p.local_variables['main']) {
        var v = p.local_variables['main'][vn];
        variables += "" + repetir(' ', espacios) + v.datatype + " " + vn;
        if (v.type == 'array') {
            variables += "[" + v.dimensions.toString() + "]";
        }
        variables += '\n';
    }
    var s = variables + "INICIO\n";
    /**
     * Procesar main
     */
    var c = p.entry_point;
    while (c != null) {
        s += procesar_enunciado(c, 1) + '\n';
        c = c.exit_point;
    }
    s += "FIN\n";
    for (var mn in p.modules) {
        s += "\n" + mn + " (" + procesar_parametros(p.modules[mn].parameters) + ")\n";
        var variables_1 = '';
        /**
         * imprimir las variables
         */
        for (var vn in p.local_variables[mn]) {
            var v = p.local_variables[mn][vn];
            variables_1 += "" + repetir(' ', espacios) + v.datatype + " " + vn;
            if (v.type == 'array') {
                variables_1 += "[" + v.dimensions.toString() + "]";
            }
            variables_1 += '\n';
        }
        s += variables_1 + "INICIO\n";
        /**
         * Procesar main
         */
        var c_1 = p.modules[mn].entry_point;
        while (c_1 != null) {
            s += procesar_enunciado(c_1, 1) + '\n';
            c_1 = c_1.exit_point;
        }
        s += "FIN\n";
    }
    return s;
}
exports.default = fr_writer;
function procesar_parametros(ps) {
    var s = '';
    var length = Object.keys(ps).length;
    var i = 0;
    for (var pn in ps) {
        s += "" + (ps[pn].by_ref ? 'ref ' : '') + pn + (ps[pn].is_array ? '[]' : '');
        if (i < length - 1) {
            s += ', ';
        }
        i++;
    }
    return s;
}
function procesar_enunciado(e, nivel) {
    switch (e.kind) {
        case interfaces_1.S3.StatementKinds.Plus:
            return repetir(' ', nivel * espacios) + "SUMAR";
        case interfaces_1.S3.StatementKinds.Minus:
            return repetir(' ', nivel * espacios) + "RESTAR";
        case interfaces_1.S3.StatementKinds.Times:
            return repetir(' ', nivel * espacios) + "MULTIPLICAR";
        case interfaces_1.S3.StatementKinds.Slash:
            return repetir(' ', nivel * espacios) + "DIVIDIR";
        case interfaces_1.S3.StatementKinds.Div:
            return repetir(' ', nivel * espacios) + "DIV";
        case interfaces_1.S3.StatementKinds.Mod:
            return repetir(' ', nivel * espacios) + "MODULO";
        case interfaces_1.S3.StatementKinds.Power:
            return repetir(' ', nivel * espacios) + "POTENCIA";
        case interfaces_1.S3.StatementKinds.Assign:
            return repetir(' ', nivel * espacios) + "ASIGNAR " + e.varname;
        case interfaces_1.S3.StatementKinds.Get:
            return repetir(' ', nivel * espacios) + "INVOCAR " + e.varname;
        case interfaces_1.S3.StatementKinds.AssignV:
            return repetir(' ', nivel * espacios) + "ASIGNARV " + e.varname + " " + e.total_indexes;
        case interfaces_1.S3.StatementKinds.GetV:
            return repetir(' ', nivel * espacios) + "INVOCARV " + e.varname + " " + e.total_indexes;
        case interfaces_1.S3.StatementKinds.Push:
            return repetir(' ', nivel * espacios) + "APILAR " + e.value;
        case interfaces_1.S3.StatementKinds.Pop:
            return repetir(' ', nivel * espacios) + "DESAPILAR";
        case interfaces_1.S3.StatementKinds.Minor:
            return repetir(' ', nivel * espacios) + "MENOR";
        case interfaces_1.S3.StatementKinds.MinorEq:
            return repetir(' ', nivel * espacios) + "MENOR IGUAL";
        case interfaces_1.S3.StatementKinds.Different:
            return repetir(' ', nivel * espacios) + "DISTINTO";
        case interfaces_1.S3.StatementKinds.Equal:
            return repetir(' ', nivel * espacios) + "IGUAL";
        case interfaces_1.S3.StatementKinds.Major:
            return repetir(' ', nivel * espacios) + "MAYOR";
        case interfaces_1.S3.StatementKinds.MajorEq:
            return repetir(' ', nivel * espacios) + "MAYOR IGUAL";
        case interfaces_1.S3.StatementKinds.Not:
            return repetir(' ', nivel * espacios) + "NOT";
        case interfaces_1.S3.StatementKinds.And:
            return repetir(' ', nivel * espacios) + "AND";
        case interfaces_1.S3.StatementKinds.Or:
            return repetir(' ', nivel * espacios) + "O";
        case interfaces_1.S3.StatementKinds.If:
            return procesar_si(e, nivel + 1);
        case interfaces_1.S3.StatementKinds.While:
            return procesar_mientras(e, nivel + 1);
        case interfaces_1.S3.StatementKinds.Until:
            // return procesar_hasta(e, nivel + 1)
            return '"REPETIR HASTA QUE" NO IMPLEMENTADO';
        case interfaces_1.S3.StatementKinds.UserModuleCall:
            return repetir(' ', nivel * espacios) + "LLAMAR " + e.name + " " + e.total_args;
        case interfaces_1.S3.StatementKinds.ReadCall:
            return repetir(' ', nivel * espacios) + "LEER " + e.varname;
        case interfaces_1.S3.StatementKinds.WriteCall:
            return repetir(' ', nivel * espacios) + "ESCRIBIR";
        case interfaces_1.S3.StatementKinds.Return:
            return repetir(' ', nivel * espacios) + "RETORNAR";
        case interfaces_1.S3.StatementKinds.Concat:
            return repetir(' ', nivel * espacios) + "CONCATENAR " + e.length;
        case interfaces_1.S3.StatementKinds.AssignString:
            return repetir(' ', nivel * espacios) + "ASIGNAR CADENA " + e.varname + " " + e.length + " " + e.indexes;
        case interfaces_1.S3.StatementKinds.Alias:
            return repetir(' ', nivel * espacios) + "ALIAS " + e.varname + " " + e.var_indexes + " [" + e.dimensions + "] " + e.local_alias;
        case interfaces_1.S3.StatementKinds.CopyVec:
            return repetir(' ', nivel * espacios) + "CPYVEC " + e.target.name + " [" + e.target.dimensions + "] " + e.target.indexes + " " + e.source.name + " [" + e.source.dimensions + "] " + e.source.indexes;
        case interfaces_1.S3.StatementKinds.MakeFrame:
            return repetir(' ', nivel * espacios) + "MAKEFRAME " + e.name;
        case interfaces_1.S3.StatementKinds.InitV:
            return repetir(' ', nivel * espacios) + "INITV " + e.source.name + " " + e.source.indexes + " [" + e.source.dimensions + "] " + e.target_name;
    }
}
function procesar_si(e, nivel) {
    var s = '';
    s += repetir(' ', (nivel - 1) * espacios) + "SI VERDADERO:\n";
    /**
     * Procesar rama verdadera
     */
    var c = e.true_branch_entry;
    while (c != null) {
        s += procesar_enunciado(c, nivel + 1) + '\n';
        c = c.exit_point;
    }
    if (e.false_branch_entry) {
        s += repetir(' ', (nivel - 1) * espacios) + "SI FALSO:\n";
        var c_2 = e.false_branch_entry;
        while (c_2 != null) {
            s += procesar_enunciado(c_2, nivel + 1) + '\n';
            c_2 = c_2.exit_point;
        }
    }
    s += repetir(' ', (nivel - 1) * espacios) + "FIN SI";
    return s;
}
function procesar_mientras(e, nivel) {
    var s = '';
    s += repetir(' ', (nivel - 1) * espacios) + "MIENTRAS VERDADERO:\n";
    /**
     * Procesar rama verdadera
     */
    var c = e.entry_point;
    while (c != e) {
        s += procesar_enunciado(c, nivel + 1) + '\n';
        c = c.exit_point;
    }
    s += repetir(' ', (nivel - 1) * espacios) + "FIN MIENTRAS";
    return s;
}
function repetir(c, n) {
    var s = '';
    for (var i = 0; i < n; i++) {
        s += c;
    }
    return s;
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (true) // CommonJS
    mod(__webpack_require__(13));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";
  var WRAP_CLASS = "CodeMirror-activeline";
  var BACK_CLASS = "CodeMirror-activeline-background";
  var GUTT_CLASS = "CodeMirror-activeline-gutter";

  CodeMirror.defineOption("styleActiveLine", false, function(cm, val, old) {
    var prev = old == CodeMirror.Init ? false : old;
    if (val == prev) return
    if (prev) {
      cm.off("beforeSelectionChange", selectionChange);
      clearActiveLines(cm);
      delete cm.state.activeLines;
    }
    if (val) {
      cm.state.activeLines = [];
      updateActiveLines(cm, cm.listSelections());
      cm.on("beforeSelectionChange", selectionChange);
    }
  });

  function clearActiveLines(cm) {
    for (var i = 0; i < cm.state.activeLines.length; i++) {
      cm.removeLineClass(cm.state.activeLines[i], "wrap", WRAP_CLASS);
      cm.removeLineClass(cm.state.activeLines[i], "background", BACK_CLASS);
      cm.removeLineClass(cm.state.activeLines[i], "gutter", GUTT_CLASS);
    }
  }

  function sameArray(a, b) {
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; i++)
      if (a[i] != b[i]) return false;
    return true;
  }

  function updateActiveLines(cm, ranges) {
    var active = [];
    for (var i = 0; i < ranges.length; i++) {
      var range = ranges[i];
      var option = cm.getOption("styleActiveLine");
      if (typeof option == "object" && option.nonEmpty ? range.anchor.line != range.head.line : !range.empty())
        continue
      var line = cm.getLineHandleVisualStart(range.head.line);
      if (active[active.length - 1] != line) active.push(line);
    }
    if (sameArray(cm.state.activeLines, active)) return;
    cm.operation(function() {
      clearActiveLines(cm);
      for (var i = 0; i < active.length; i++) {
        cm.addLineClass(active[i], "wrap", WRAP_CLASS);
        cm.addLineClass(active[i], "background", BACK_CLASS);
        cm.addLineClass(active[i], "gutter", GUTT_CLASS);
      }
      cm.state.activeLines = active;
    });
  }

  function selectionChange(cm, sel) {
    updateActiveLines(cm, sel.ranges);
  }
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(4);
var OutputPanel_1 = __webpack_require__(36);
var EditorPanel_1 = __webpack_require__(31);
var CodePanel_1 = __webpack_require__(30);
var PanelToggler_1 = __webpack_require__(37);
var InspectionPanel_1 = __webpack_require__(34);
var DragManager_1 = __webpack_require__(29);
var $ = __webpack_require__(0);
var default_options = {
    debug: false
};
var AppUI = (function () {
    function AppUI(parent, container, d, options) {
        // aplicar la configuracion
        var _this = this;
        if (options) {
            this.options = tslib_1.__assign({}, default_options, options);
        }
        else {
            this.options = default_options;
        }
        this.parent = parent;
        this.dispatcher = d;
        this.handles = [];
        this.container = $('<div id="app_container" class="flex-col"></div>');
        this.panel_container = $('<div id="panels" class="flex-row"></div>');
        this.toggler = new PanelToggler_1.default(this.container, this.dispatcher, this.options.debug);
        this.container.append(this.toggler.container);
        this.container.append(this.panel_container);
        this.parent.append(this.container);
        this.dm = new DragManager_1.DragManager();
        this.dm.add_ui_container(this.panel_container, 'horizontal');
        this.panel_container.resize(function () {
            _this.dm.set_container_dimensions(0, _this.panel_container.width(), _this.panel_container.height());
        });
        // crear los paneles necesarios
        this.editor_panel = new EditorPanel_1.default(this.panel_container, d, { debug: this.options.debug });
        if (this.options.debug) {
            this.add_panel(this.editor_panel, 0);
            this.toggler.add_panel(this.editor_panel, false, 'pencil');
            this.code_panel = new CodePanel_1.default(this.panel_container);
            this.add_panel(this.code_panel, 0);
            this.toggler.add_panel(this.code_panel, false, 'gear');
            this.inspection_panel = new InspectionPanel_1.default(this.panel_container, this.dispatcher);
            this.add_panel(this.inspection_panel, 0);
            this.toggler.add_panel(this.inspection_panel, false, 'search');
            this.output_panel = new OutputPanel_1.default(this.panel_container, this.dispatcher);
            this.add_panel(this.output_panel, 0);
            this.toggler.add_panel(this.output_panel, false, 'terminal');
        }
        else {
            // agregar panel de codigo
            this.add_panel(this.editor_panel, 0);
            this.toggler.add_panel(this.editor_panel, false, 'pencil');
            // cuando debug es falso el panel de codigo compilado no se muestra
            this.code_panel = null;
            this.inspection_panel = new InspectionPanel_1.default(this.panel_container, this.dispatcher);
            this.add_panel(this.inspection_panel, 0);
            this.toggler.add_panel(this.inspection_panel, false, 'search');
            this.output_panel = new OutputPanel_1.default(this.panel_container, this.dispatcher);
            this.add_panel(this.output_panel, 0);
            this.toggler.add_panel(this.output_panel, false, 'terminal');
        }
        this.toggler.add_link("https://github.com/pl-lang/jsplint/wiki/Sintaxis/", 'question');
        this.toggler.add_link("https://github.com/pl-lang/playground/", 'mark-github');
        $(document).mouseup(function () {
            if (_this.dm.is_grabbed) {
                _this.dm.is_grabbed = false;
                _this.dm.grabbed_handle = null;
            }
        });
        $(document).mousemove(function (m) {
            if (_this.dm.is_grabbed) {
                var pos = _this.dm.grabbed_handle.element.position();
                _this.dm.drag_handle(_this.dm.grabbed_handle, { x: pos.left, y: pos.top }, { x: m.pageX, y: m.pageY });
            }
        });
        this.editor_panel.refresh();
    }
    AppUI.prototype.add_panel = function (element, container_index, options) {
        if (this.dm.ui_panel_containers[container_index].panels.length >= 1) {
            // const handle = $(`<div id="handle${this.handles.length + 1}" class="handle"></div>`)
            // this.dm.add_handle(container_index, handle)
            // this.handles.push(handle)
            // this.panel_container.append(handle)
        }
        this.dm.add_ui_panel(container_index, element, options);
        this.panel_container.append(element.container);
    };
    AppUI.prototype.toggle_panel = function (container_index, panel_index) {
        this.dm.toggle_ui_panel(container_index, panel_index);
    };
    AppUI.prototype.clear_messages = function () {
        this.editor_panel.message_panel.clear();
        this.editor_panel.status_bar.error_count = 0;
    };
    AppUI.prototype.show_message = function (message) {
        this.editor_panel.message_panel.add_message(message);
        this.editor_panel.status_bar.error_count += 1;
    };
    AppUI.prototype.get_editor_contents = function () {
        return this.editor_panel.editor_contents;
    };
    AppUI.prototype.write = function (v) {
        this.output_panel.write(v);
    };
    AppUI.prototype.read = function () {
        this.output_panel.read();
    };
    AppUI.prototype.clear_output = function () {
        this.output_panel.clear();
    };
    AppUI.prototype.move_cursor = function (line, column) {
        this.editor_panel.move_cursor(line, column);
    };
    AppUI.prototype.focus_editor = function () {
        this.editor_panel.focus_editor();
    };
    AppUI.prototype.show_step_controls = function () {
        this.output_panel.show_controls();
        this.inspection_panel.show_button();
    };
    AppUI.prototype.hide_step_controls = function () {
        this.output_panel.hide_controls();
        this.inspection_panel.hide_button();
    };
    AppUI.prototype.disable_buttons = function () {
        this.editor_panel.disable_buttons();
    };
    AppUI.prototype.enable_buttons = function () {
        this.editor_panel.enable_buttons();
    };
    AppUI.prototype.add_var = function (name, in_scope, init, var_info, value) {
        this.inspection_panel.add_var(name, in_scope, init, var_info, value);
    };
    AppUI.prototype.get_var_names = function () {
        return this.inspection_panel.get_var_names();
    };
    AppUI.prototype.update_var = function (name, values) {
        return this.inspection_panel.update_var(name, values);
    };
    AppUI.prototype.change_var_state = function (name, state) {
        this.inspection_panel.change_var_state(name, state);
    };
    AppUI.prototype.clear_vars = function () {
        this.inspection_panel.clear();
    };
    AppUI.prototype.remove_var = function (name) {
        this.inspection_panel.remove_var(name);
    };
    AppUI.prototype.add_inspection_message = function (name) {
        this.inspection_panel.add_message(name);
    };
    AppUI.prototype.remove_msg = function (name) {
        this.inspection_panel.remove_msg(name);
    };
    return AppUI;
}());
exports.default = AppUI;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(4);
var DragLogic = (function () {
    function DragLogic() {
        this.containers = [];
    }
    DragLogic.prototype.add_panel = function (container_index, options) {
        if (container_index >= 0 && container_index < this.containers.length) {
            var container = this.containers[container_index];
            var available_length = 0;
            if (container.panels.length > 0) {
                var fixed_length_1 = 0;
                for (var i = 0; i < container.panels.length; i++) {
                    var panel = container.panels[i];
                    if (panel.fixed && !panel.hidden) {
                        fixed_length_1 += panel.length;
                    }
                }
                available_length = 100 - fixed_length_1;
            }
            else {
                available_length = 100;
            }
            var new_panel_length = 0;
            var fixed_length = false;
            if (options) {
                if (options.fixed) {
                    new_panel_length = available_length >= options.length ? options.length : available_length;
                    // si hay suficiente espacio como para que el panel tenga la longitud deseada
                    // entonces puede tener longitud fija, si no tiene longitud flexible
                    fixed_length = available_length >= options.length;
                }
                else {
                    new_panel_length = available_length;
                }
            }
            else {
                new_panel_length = available_length;
            }
            if (fixed_length) {
                // si el panel tiene longitud fija le va a quitar espacio
                // a los paneles flexibles existentes
                // aplicar nuevas longitudes a los paneles (flexibles) existentes que no esten escondidos
                var old_lengths = container.panels.map(function (p) { return p.length; });
                var remaining_length = new_panel_length;
                for (var i = 0; i < old_lengths.length; i++) {
                    if (!container.panels[i].fixed && !container.panels[i].hidden) {
                        var diff = old_lengths[i] - remaining_length;
                        container.panels[i].length = diff < 0 ? 0 : diff;
                        remaining_length = remaining_length - old_lengths[i];
                    }
                }
                // agregar panel
                var new_panel = { fixed: fixed_length, length: new_panel_length, hidden: false };
                container.panels.push(new_panel);
            }
            else {
                // si no tiene longitud fija entonces comparte el espacio disponible
                // con el resto de los paneles flexibles
                var flex_panels = container.panels.filter(function (p) { return p.fixed == false; }).length + 1;
                var length_1 = available_length / flex_panels;
                // aplicar nuevas longitudes a los paneles (flexibles) existentes que no esten escondidos
                for (var i = 0; i < container.panels.length; i++) {
                    if (!container.panels[i].fixed && !container.panels[i].hidden) {
                        container.panels[i].length = length_1;
                    }
                }
                var new_panel = { fixed: fixed_length, length: length_1, hidden: false };
                container.panels.push(new_panel);
            }
        }
        else {
            throw new Error("Invalid container_index (" + container_index + ")");
        }
    };
    DragLogic.prototype.add_panel_after = function (container_index, previous_panel_index, options) {
        var container = this.containers[container_index];
        if (previous_panel_index < container.panels.length) {
            if (previous_panel_index >= container.panels.length - 1) {
                this.add_panel(container_index, options);
            }
            else {
                var available_length = 0;
                if (container.panels.length > 0) {
                    var fixed_length_2 = 0;
                    for (var i = 0; i < container.panels.length; i++) {
                        var panel = container.panels[i];
                        if (panel.fixed && !panel.hidden) {
                            fixed_length_2 += panel.length;
                        }
                    }
                    available_length = 100 - fixed_length_2;
                }
                else {
                    available_length = 100;
                }
                var new_panel_length = 0;
                var fixed_length = false;
                if (options) {
                    if (options.fixed) {
                        new_panel_length = available_length >= options.length ? options.length : available_length;
                        // si hay suficiente espacio como para que el panel tenga la longitud deseada
                        // entonces puede tener longitud fija, si no tiene longitud flexible
                        fixed_length = available_length >= options.length;
                    }
                    else {
                        new_panel_length = available_length;
                    }
                }
                else {
                    new_panel_length = available_length;
                }
                if (fixed_length) {
                    // si el panel tiene longitud fija le va a quitar espacio
                    // a los paneles flexibles existentes
                    // aplicar nuevas longitudes a los paneles (flexibles) existentes que no esten escondidos
                    var flex_panels = container.panels.filter(function (p) { return p.fixed == false; }).length;
                    if (flex_panels > 0) {
                        var length_2 = (available_length - new_panel_length) / flex_panels;
                        for (var i = 0; i < container.panels.length; i++) {
                            if (!container.panels[i].fixed && !container.panels[i].hidden) {
                                container.panels[i].length = length_2;
                            }
                        }
                    }
                    // agregar panel
                    var new_panel = { fixed: fixed_length, length: new_panel_length, hidden: false };
                    var new_panels = container.panels.slice(0, previous_panel_index + 1).concat([new_panel], container.panels.slice(previous_panel_index + 1));
                    container.panels = new_panels;
                }
                else {
                    // si no tiene longitud fija entonces comparte el espacio disponible
                    // con el resto de los paneles flexibles
                    var flex_panels = container.panels.filter(function (p) { return p.fixed == false; }).length + 1;
                    var length_3 = available_length / flex_panels;
                    // aplicar nuevas longitudes a los paneles (flexibles) existentes que no esten escondidos
                    for (var i = 0; i < container.panels.length; i++) {
                        if (!container.panels[i].fixed && !container.panels[i].hidden) {
                            container.panels[i].length = length_3;
                        }
                    }
                    var new_panel = { fixed: fixed_length, length: length_3, hidden: false };
                    var new_panels = container.panels.slice(0, previous_panel_index + 1).concat([new_panel], container.panels.slice(previous_panel_index + 1));
                    container.panels = new_panels;
                }
            }
        }
        else {
            throw new Error("Tried to add a panel after container.panels[" + previous_panel_index + "] but this container only has " + container.panels.length + " panels");
        }
    };
    DragLogic.prototype.remove_panel = function (container_index, panel_index) {
        var container = this.containers[container_index];
        var removed_panel = container.panels[panel_index];
        // remover panel
        container.panels = container.panels.filter(function (p, i) { return i != panel_index; });
        if (container.panels.length > 0) {
            // repartir la longitud del panel removido entre los paneles flexibles (no escondidos)
            // de este contenedor
            var flex_panels = container.panels.filter(function (p) { return p.fixed == false; }).length;
            if (flex_panels > 0) {
                var extra_length = removed_panel.length / flex_panels;
                for (var i = 0; i < container.panels.length; i++) {
                    if (!container.panels[i].fixed && !container.panels[i].hidden) {
                        container.panels[i].length += extra_length;
                    }
                }
            }
        }
    };
    DragLogic.prototype.toggle_panel = function (container_index, panel_index) {
        var container = this.containers[container_index];
        var panel = container.panels[panel_index];
        panel.hidden = !panel.hidden;
        if (panel.hidden) {
            // repartir la longitud del panel removido entre los paneles flexibles (no escondidos)
            // de este contenedor
            var flex_panels = container.panels.filter(function (p) { return p.fixed == false && p.hidden == false; }).length;
            if (flex_panels > 0) {
                var extra_length = panel.length / flex_panels;
                var old_length = panel.length;
                for (var i = 0; i < container.panels.length; i++) {
                    if (!container.panels[i].fixed && !container.panels[i].hidden) {
                        container.panels[i].length += extra_length;
                    }
                }
            }
        }
        else {
            // repartir la longitud disponible entre los paneles flexibles (no-escondidos)
            var available_length = 0;
            if (container.panels.length > 0) {
                var fixed_length = 0;
                for (var i = 0; i < container.panels.length; i++) {
                    var panel_1 = container.panels[i];
                    if (panel_1.fixed && !panel_1.hidden) {
                        fixed_length += panel_1.length;
                    }
                }
                available_length = 100 - fixed_length;
            }
            else {
                available_length = 100;
            }
            var flex_panels = container.panels.filter(function (p) { return p.fixed == false && p.hidden == false; }).length;
            if (flex_panels > 0) {
                var length_4 = available_length / flex_panels;
                for (var i = 0; i < container.panels.length; i++) {
                    if (!container.panels[i].fixed && !container.panels[i].hidden) {
                        container.panels[i].length = length_4;
                    }
                }
            }
        }
        return panel.hidden;
    };
    DragLogic.prototype.get_visible_panels = function (container_index) {
        return this.containers[container_index].panels.filter(function (p) { return p.hidden == false; }).length;
    };
    DragLogic.prototype.add_container = function (x, y, width, height, mode) {
        this.containers.push({ width: width, height: height, mode: mode, panels: [], origin: { x: x, y: y } });
    };
    DragLogic.prototype.remove_container = function (container_index) {
        if (container_index < 0 || container_index >= this.containers.length) {
            throw new Error("Invalid container_index (" + container_index + ")");
        }
        else {
            var container = this.containers.filter(function (c, i) { return i == container_index; }).pop();
            // remover el contenedor
            this.containers = this.containers.filter(function (c, i) { return i != container_index; });
            return container;
        }
    };
    DragLogic.prototype.get_container = function (container_index) {
        if (container_index < 0 || container_index >= this.containers.length) {
            throw new Error("Invalid container_index (" + container_index + ")");
        }
        else {
            return this.containers[container_index];
        }
    };
    DragLogic.prototype.set_container_dimensions = function (container_index, width, height) {
        if (container_index >= 0 && container_index < this.containers.length) {
            this.containers[container_index].height = height;
            this.containers[container_index].width = width;
        }
        else {
            throw new Error("Invalid container_index (" + container_index + ")");
        }
    };
    DragLogic.prototype.drag = function (container_index, handle_index, from, to) {
        if (container_index >= 0 && container_index < this.containers.length) {
            if (handle_index >= 0 && handle_index < this.containers[container_index].panels.length - 1) {
                var container = this.containers[container_index];
                var total_panel_length_1 = container.mode == 'vertical' ? container.height : container.width;
                // con esto me aseguro de que la posicion final este dentro del panel
                from = this.clamp(container_index, from);
                to = this.clamp(container_index, to);
                var delta = this.substract(to, from);
                var positive_direction = container.mode == 'vertical' ? delta.y > 0 : delta.x > 0;
                var delta_percentage = this.map(delta, function (i) { return Math.abs((i / total_panel_length_1) * 100); });
                // determinar que panel se achica en funcion de la direccion del movimiento de la manija
                if (positive_direction) {
                    var shrinking_panel_index = handle_index + 1;
                    var total_delta = container.mode == 'vertical' ? delta_percentage.y : delta_percentage.x;
                    var acc = 0;
                    for (var i = shrinking_panel_index; i < container.panels.length && acc < total_delta; i++) {
                        acc += container.panels[i].length;
                        if (acc < total_delta) {
                            container.panels[i].length = 0;
                        }
                        else {
                            container.panels[i].length = acc - total_delta;
                        }
                    }
                    var growing_panel = container.panels[handle_index];
                    if (growing_panel.hidden) {
                        var growing_panel_width = container.panels[this.find(0, handle_index, false, { hidden: false })].length;
                        container.panels[this.find(0, handle_index, false, { hidden: false })].length = (growing_panel_width + total_delta) > 100 ? 100 : growing_panel_width + total_delta;
                    }
                    else {
                        var growing_panel_width = growing_panel.length;
                        growing_panel.length = (growing_panel_width + total_delta) > 100 ? 100 : growing_panel_width + total_delta;
                    }
                }
                else {
                    var shrinking_panel_index = handle_index;
                    var total_delta = container.mode == 'vertical' ? delta_percentage.y : delta_percentage.x;
                    var acc = 0;
                    for (var i = shrinking_panel_index; i >= 0 && acc < total_delta; i--) {
                        acc += container.panels[i].length;
                        if (acc < total_delta) {
                            container.panels[i].length = 0;
                        }
                        else {
                            container.panels[i].length = acc - total_delta;
                        }
                    }
                    var growing_panel = container.panels[handle_index + 1];
                    if (growing_panel.hidden) {
                        var growing_panel_width = container.panels[this.find(0, handle_index, false, { hidden: false })].length;
                        container.panels[this.find(0, handle_index, false, { hidden: false })].length = (growing_panel_width + total_delta) > 100 ? 100 : growing_panel_width + total_delta;
                    }
                    else {
                        var growing_panel_width = growing_panel.length;
                        growing_panel.length = (growing_panel_width + total_delta) > 100 ? 100 : growing_panel_width + total_delta;
                    }
                }
            }
            else {
                throw new Error("Invalid handle_index (" + handle_index + ") for container with index " + container_index);
            }
        }
        else {
            throw new Error("Invalid container_index (" + container_index + ")");
        }
    };
    /**
     * Search for a panel with some specifications (fixed length?, hidden?, length == x?) and, if found, return its index within its container,
     * otherwise return -1.
     */
    DragLogic.prototype.find = function (container_index, from_index, forwards, options) {
        var defaults = { hidden: false, length: -1 }; // -1 means any...
        var spec = tslib_1.__assign({}, defaults, options);
        var container = this.containers[container_index];
        if (forwards) {
            for (var i = from_index + 1; i < container.panels.length; i++) {
                var panel = container.panels[i];
                var partial_match = panel.hidden == spec.hidden;
                if (partial_match && spec.length == -1) {
                    return i;
                }
                else if (partial_match && panel.length == spec.length) {
                    return i;
                }
            }
        }
        else {
            for (var i = from_index - 1; i >= 0; i--) {
                var panel = container.panels[i];
                var partial_match = panel.hidden == spec.hidden;
                if (partial_match && spec.length == -1) {
                    return i;
                }
                else if (partial_match && panel.length == spec.length) {
                    return i;
                }
            }
        }
        return -1;
    };
    DragLogic.prototype.clamp = function (container_index, vector) {
        var container = this.containers[container_index];
        var x = vector.x, y = vector.y;
        x = x < container.origin.x ? container.origin.x : x;
        x = x > (container.width + container.origin.x) ? (container.width + container.origin.x) : x;
        y = y < (container.origin.y) ? container.origin.y : y;
        y = y > (container.height + container.origin.y) ? (container.height + container.origin.y) : y;
        return { x: x, y: y };
    };
    DragLogic.prototype.substract = function (a, b) {
        return { x: a.x - b.x, y: a.y - b.y };
    };
    DragLogic.prototype.map = function (a, f) {
        var x = a.x, y = a.y;
        return { x: f(x), y: f(y) };
    };
    return DragLogic;
}());
exports.DragLogic = DragLogic;
var DragManager = (function (_super) {
    tslib_1.__extends(DragManager, _super);
    function DragManager() {
        var _this = _super.call(this) || this;
        _this.ui_panel_containers = [];
        _this.handles = [];
        _this.grabbed_handle = null;
        _this.is_grabbed = false;
        return _this;
    }
    DragManager.prototype.add_handle = function (container_index, handle) {
        if (container_index >= 0 && container_index < this.ui_panel_containers.length) {
            var container = this.ui_panel_containers[container_index];
            var ui_handle = { container_index: container_index, element: handle, handle_index: container.last_handle_index };
            this.handles.push(ui_handle);
            container.last_handle_index++;
            this.bind_handle(ui_handle);
        }
        else {
            throw new Error("Invalid container_index (" + container_index + ")");
        }
    };
    DragManager.prototype.bind_handle = function (handle) {
        var _this = this;
        handle.element.mousedown(function (ev) {
            _this.is_grabbed = true;
            _this.grabbed_handle = handle;
        });
        handle.element.mouseup(function (ev) {
            _this.is_grabbed = false;
            _this.grabbed_handle = null;
        });
    };
    DragManager.prototype.add_ui_container = function (element, mode) {
        var pos = element.position();
        _super.prototype.add_container.call(this, pos.left, pos.top, element.width(), element.height(), mode);
        this.ui_panel_containers.push({ element: element, mode: mode, panels: [], last_handle_index: 0 });
    };
    DragManager.prototype.add_ui_panel = function (container_index, panel_element, options) {
        if (container_index >= 0 && container_index < this.ui_panel_containers.length) {
            _super.prototype.add_panel.call(this, container_index, options);
            panel_element.container_index = container_index;
            panel_element.panel_index = this.ui_panel_containers[container_index].panels.length;
            var container = this.ui_panel_containers[container_index];
            container.panels.push(panel_element.container);
            var lengths = _super.prototype.get_container.call(this, container_index).panels.map(function (p) { return p.length; });
            this.apply_lengths(container.panels, lengths, container.mode);
        }
        else {
            throw new Error("Invalid container_index (" + container_index + ")");
        }
    };
    DragManager.prototype.drag_handle = function (handle, from, to) {
        _super.prototype.drag.call(this, handle.container_index, handle.handle_index, from, to);
        var container = this.ui_panel_containers[handle.container_index];
        var lengths = _super.prototype.get_container.call(this, handle.container_index).panels.map(function (pan) { return pan.length; });
        this.apply_lengths(container.panels, lengths, container.mode);
    };
    DragManager.prototype.toggle_ui_panel = function (container_index, panel_index) {
        var visible_panels = _super.prototype.get_visible_panels.call(this, container_index);
        var container_model = _super.prototype.get_container.call(this, container_index);
        var panel_model = container_model.panels[panel_index];
        if (visible_panels > 1 || panel_model.hidden) {
            var hidden = _super.prototype.toggle_panel.call(this, container_index, panel_index);
            var container = this.ui_panel_containers[container_index];
            var lengths = _super.prototype.get_container.call(this, container_index).panels.map(function (pan) { return pan.length; });
            this.apply_lengths(container.panels, lengths, container.mode);
            if (hidden) {
                var panel = container.panels[panel_index];
                panel.hide();
                if (panel_index == 0) {
                    // ocultar la primer manija
                    var handle = this.handles[0];
                    if (handle) {
                        handle.element.hide();
                    }
                }
                else {
                    // ocultar la manija a la izquierda de este panel
                    var handle = this.handles[panel_index - 1];
                    if (handle) {
                        handle.element.hide();
                    }
                }
            }
            else {
                var panel = container.panels[panel_index];
                panel.show();
                if (panel_index == 0) {
                    // mostrar la primer manija
                    var handle = this.handles[0];
                    if (handle) {
                        handle.element.show();
                    }
                }
                else {
                    // mostrar la manija a la izquierda de este panel
                    var handle = this.handles[panel_index - 1];
                    if (handle) {
                        handle.element.show();
                    }
                }
            }
        }
    };
    DragManager.prototype.apply_lengths = function (panels, lengths, mode) {
        for (var i = 0; i < panels.length; i++) {
            var style = panels[i].attr('style');
            var new_length = (mode == 'horizontal' ? 'width' : 'height') + ": " + lengths[i] + "%;";
            if (style) {
                var regexp = new RegExp((mode == 'horizontal' ? 'width' : 'height') + ":\\s+\\d+(\\.\\d+)?%;");
                var new_style = style.replace(regexp, new_length);
                panels[i].attr('style', new_style);
            }
            else {
                panels[i].attr('style', new_length);
            }
        }
    };
    DragManager.prototype.insert_after = function (element, arr, index) {
        if (index >= arr.length) {
            arr.push(element);
            return arr;
        }
        else {
            return arr.slice(0, index + 1).concat([element], arr.slice(index + 1));
        }
    };
    DragManager.prototype.set_container_dimensions = function (container_index, width, height) {
        _super.prototype.set_container_dimensions.call(this, container_index, width, height);
    };
    return DragManager;
}(DragLogic));
exports.DragManager = DragManager;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(0);
var CodePanel = (function () {
    function CodePanel(parent) {
        this.parent = parent;
        this.container = $('<div id="fr-panel" class="flex-col"></div>');
        var bar = $('<div class="bar bar-bottom-border flex-row center-align"></div>');
        var icon = $('<span style="margin-left:10px" class="octicon octicon-gear">');
        var title = $('<span class="title">PROGRAMA COMPILADO</span>');
        bar.append(icon).append(title);
        this.container.append(bar);
        var pre_wrapper = $('<div style="overflow: auto;"></div>');
        this.code = $('<pre id="fr-pre"></pre>');
        pre_wrapper.append(this.code);
        this.container.append(pre_wrapper);
    }
    Object.defineProperty(CodePanel.prototype, "contents", {
        get: function () {
            return this.code.text();
        },
        set: function (c) {
            this.code.text(c);
        },
        enumerable: true,
        configurable: true
    });
    return CodePanel;
}());
exports.default = CodePanel;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(4);
var $ = __webpack_require__(0);
var CodeMirror = __webpack_require__(13);
var MessagePanel_1 = __webpack_require__(35);
var StatusBar_1 = __webpack_require__(39);
var Actions_1 = __webpack_require__(2);
__webpack_require__(27);
var defaults = {
    debug: false,
};
var EditorPanel = (function () {
    function EditorPanel(container, d, options) {
        var _this = this;
        if (options) {
            this.options = tslib_1.__assign({}, defaults, options);
        }
        else {
            this.options = defaults;
        }
        this.parent = container;
        this.dispatcher = d;
        this.container = $('<div id="editor-div" class="flex-col">');
        var title_bar = this.create_title_bar();
        this.container.append(title_bar);
        // agregar textarea para codemirror
        this.container.append($('<textarea id="editor"></textarea>'));
        this.editor = CodeMirror.fromTextArea(this.container.children('#editor')[0], { lineNumbers: true, firstLineNumber: 0, styleActiveLine: true });
        var info_panel = $('<div id="info_panel"></div>');
        this.status_bar = new StatusBar_1.default(info_panel);
        this.message_panel = new MessagePanel_1.default(info_panel, this.dispatcher);
        // registrar callbacks para los botones
        this.run_button.click(function () {
            _this.dispatcher.dispatch({ kind: Actions_1.ActionKind.Execute, code: _this.editor_contents });
        });
        this.step_button.click(function () {
            _this.dispatcher.dispatch({ kind: Actions_1.ActionKind.ExecuteBySteps, code: _this.editor_contents });
        });
        if (this.compile_button != null) {
            this.compile_button.click(function () {
                _this.dispatcher.dispatch({ kind: Actions_1.ActionKind.CompileAndShow, code: _this.editor_contents });
            });
        }
        this.container.append(info_panel);
    }
    EditorPanel.prototype.create_title_bar = function () {
        var bar = $('<div class="bar bar-bottom-border flex-row center-align"></div>');
        var icon = $('<span style="margin-left:10px" class="octicon octicon-pencil"></span>');
        var title = $('<span class="title">EDITOR</span>');
        var run_button = $('<button class="green-button"><span class="button-label bold">Ejecutar</span><span></button>');
        var step_button = $('<button class="green-button"><span class="button-label bold">Ejecutar paso a paso</span><span></button>');
        bar.append(icon).append(title).append(run_button).append(step_button);
        this.run_button = run_button;
        this.step_button = step_button;
        if (this.options.debug) {
            var compile_button = $('<button id="compilar" class="blue-button"><span class="button-label">Compilar</span><span></button>');
            bar.append(compile_button);
            this.compile_button = compile_button;
        }
        else {
            this.compile_button = null;
        }
        return bar;
    };
    Object.defineProperty(EditorPanel.prototype, "editor_contents", {
        get: function () {
            return this.editor.getValue();
        },
        set: function (contents) {
            this.editor.setValue(contents);
        },
        enumerable: true,
        configurable: true
    });
    EditorPanel.prototype.refresh = function () {
        this.editor.refresh();
    };
    EditorPanel.prototype.focus_editor = function () {
        this.editor.focus();
    };
    EditorPanel.prototype.move_cursor = function (line, column) {
        this.editor.getDoc().setCursor({ line: line, ch: column });
    };
    EditorPanel.prototype.disable_buttons = function () {
        this.run_button.prop('disabled', true);
        this.step_button.prop('disabled', true);
        if (this.compile_button) {
            this.compile_button.prop('disabled', true);
        }
    };
    EditorPanel.prototype.enable_buttons = function () {
        this.run_button.prop('disabled', false);
        this.step_button.prop('disabled', false);
        if (this.compile_button) {
            this.compile_button.prop('disabled', false);
        }
    };
    return EditorPanel;
}());
exports.default = EditorPanel;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Emitter = (function () {
    function Emitter(public_event_list) {
        this.public_events = public_event_list;
        this.callbacks = {};
    }
    Emitter.prototype.on = function (event_name, callback) {
        if (event_name in this.callbacks) {
            this.callbacks[event_name].push(callback);
        }
        else {
            this.callbacks[event_name] = [callback];
        }
    };
    /**
     * Se encarga de llamar a los callbacks de los eventos.
     * Si se registro un callback para 'any' entonces se lo llama para cada evento que sea emitido. Es el callback por defecto.
     * Si un evento tiene registrado un callback entonces este se ejecuta despues del callback por defecto.
     */
    Emitter.prototype.emit = function (event_name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.callbacks.hasOwnProperty('any')) {
            for (var _a = 0, _b = this.callbacks.any; _a < _b.length; _a++) {
                var callback = _b[_a];
                callback.apply(void 0, args);
            }
        }
        if (this.callbacks.hasOwnProperty(event_name)) {
            for (var _c = 0, _d = this.callbacks[event_name]; _c < _d.length; _c++) {
                var callback = _d[_c];
                callback.apply(void 0, args);
            }
        }
    };
    /**
     * Repite un evento de otro emisor como si fuera propio. El evento puede registrar como publico o no.
     */
    Emitter.prototype.repeat = function (event_name, emitter, make_public) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        if (make_public === true) {
            this.public_events.push(event_name);
        }
        var self = this;
        emitter.on(event_name, function () {
            self.emit.apply(self, [event_name].concat(args));
        });
    };
    /**
     * Emitir los eventos de otro emisor como si fueran propios.
     */
    Emitter.prototype.repeatAllPublicEvents = function (emitter) {
        for (var _i = 0, _a = emitter.public_events; _i < _a.length; _i++) {
            var event_name = _a[_i];
            this.repeat(event_name, emitter, true);
        }
    };
    return Emitter;
}());
exports.default = Emitter;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(0);
var Actions_1 = __webpack_require__(2);
var InspectionMessage = (function () {
    function InspectionMessage(parent, name, dispatcher) {
        var _this = this;
        this.parent = parent;
        this.dispatcher = dispatcher;
        this.name = name;
        this.container = $('<pre class="scalar flex-row"></pre>');
        var name_element = $("<span class=\"scalar-name\">" + name + ":<span class=\"value italic\">Esta variable no existe</span></span>");
        this.remove_button = $('<button class="simple-button-icon octicon octicon-x pull-right"></button>');
        this.remove_button.click(function () {
            _this.dispatcher.dispatch({ kind: Actions_1.ActionKind.RemoveMsgFromInspection, name: _this.name });
        });
        this.container.append(name_element, this.remove_button);
        this.parent.append(this.container);
    }
    return InspectionMessage;
}());
exports.default = InspectionMessage;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(0);
var Prompt_1 = __webpack_require__(14);
var Scalar_1 = __webpack_require__(38);
var Vector_1 = __webpack_require__(41);
var InspectionMessage_1 = __webpack_require__(33);
var InspectionPanel = (function () {
    function InspectionPanel(parent, dispatcher) {
        var _this = this;
        this.parent = parent;
        this.dispatcher = dispatcher;
        this.var_elements = [];
        this.container = $('<div id="inspection-panel" class="flex-col"></div>');
        var bar = $('<div class="bar bar-bottom-border flex-row center-align"></div>');
        var icon = $('<span style="margin-left:10px" class="octicon octicon-search">');
        var title = $('<span class="title">VARIABLES</span>');
        var add_button = $('<button class="blue-button icon-button"><span class="button-icon octicon octicon-plus"></span></button>');
        add_button.click(function () {
            _this.prompt = new Prompt_1.default(_this.body, _this.dispatcher, 'varname');
        });
        this.add_button = add_button;
        add_button.hide();
        bar.append(icon).append(title).append(add_button);
        this.container.append(bar);
        this.body = $('<div id="inspection-panel-body" class="flex-col"></div>');
        this.container.append(this.body);
    }
    InspectionPanel.prototype.clear = function () {
        this.body.empty();
        this.var_elements = [];
    };
    InspectionPanel.prototype.hide_button = function () {
        this.add_button.hide();
    };
    InspectionPanel.prototype.show_button = function () {
        this.add_button.show();
    };
    InspectionPanel.prototype.add_var = function (name, in_scope, init, var_info, boxed_value) {
        var variable = this.find(name);
        // solo agregar la variable si no existe
        if (!variable) {
            if (var_info.type == 'scalar') {
                var new_var = new Scalar_1.default(this.body, name, in_scope, init, this.dispatcher);
                if (in_scope && init) {
                    new_var.set_value(boxed_value);
                }
                this.var_elements.push(new_var);
            }
            else {
                var new_var = new Vector_1.default(this.body, name, in_scope, init, this.dispatcher);
                if (in_scope && init) {
                    new_var.update_values(boxed_value);
                }
                this.var_elements.push(new_var);
            }
        }
    };
    /**
     * get_var_names
     * retorna una lista de los nombres de las variables que estan siendo inspeccion
     */
    InspectionPanel.prototype.get_var_names = function () {
        return this.var_elements.map(function (s) { return s.name; });
    };
    InspectionPanel.prototype.update_var = function (name, boxed_value) {
        var variable = this.find(name);
        if (variable instanceof Scalar_1.default) {
            variable.set_value(boxed_value);
        }
        else if (variable instanceof Vector_1.default) {
            variable.update_values(boxed_value);
        }
    };
    InspectionPanel.prototype.change_var_state = function (name, state) {
        var variable = this.find(name);
        // actualizar solo variables existentes
        if (variable) {
            variable.change_state(state);
        }
    };
    InspectionPanel.prototype.find = function (name) {
        for (var i = 0; i < this.var_elements.length; i++) {
            var v_element = this.var_elements[i];
            if (v_element.name == name && (v_element instanceof Scalar_1.default || v_element instanceof Vector_1.default)) {
                return v_element;
            }
        }
    };
    InspectionPanel.prototype.find_msg = function (name) {
        for (var i = 0; i < this.var_elements.length; i++) {
            var v_element = this.var_elements[i];
            if (v_element.name == name && v_element instanceof InspectionMessage_1.default) {
                return v_element;
            }
        }
    };
    InspectionPanel.prototype.remove_var = function (name) {
        var removed_var = this.find(name);
        this.var_elements = this.var_elements.filter(function (v) { return v.name != name; });
        removed_var.container.empty();
        removed_var.container.remove();
    };
    InspectionPanel.prototype.add_message = function (name) {
        var msg = new InspectionMessage_1.default(this.body, name, this.dispatcher);
        this.var_elements.push(msg);
    };
    InspectionPanel.prototype.remove_msg = function (name) {
        var removed_msg = this.find_msg(name);
        this.var_elements = this.var_elements.filter(function (v) { return v.name != name; });
        removed_msg.container.empty();
        removed_msg.container.remove();
    };
    return InspectionPanel;
}());
exports.default = InspectionPanel;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(0);
var Templates_1 = __webpack_require__(40);
var Actions_1 = __webpack_require__(2);
var MessagePanel = (function () {
    function MessagePanel(container, d) {
        this.container = container;
        this.message_list = $('<div id="message_list" class="flex-col msg_list-collapsed"></div>');
        this.container.append(this.message_list);
        this.collapsed = true;
        this.dirty = false;
        this.dispatcher = d;
    }
    MessagePanel.prototype.add_message = function (data) {
        var _this = this;
        this.dirty = true;
        var message = $('<div class="error-msg-container"></div>');
        message.on('click', function (ev) { ev.stopPropagation(); });
        var title_bar = $("<div class=\"bar flex-row space-between center-align error-bar\"></div>");
        var template = Templates_1.default(data);
        var title = $("<div class=\"title small-title error-title\">" + template.title + "</div>");
        title_bar.append(title);
        message.append(title_bar);
        if ('description' in template || 'suggestion' in template) {
            /**
             * Agregar botoncito para mostrar/ocultar la descripcion y/o sugerencia
             */
            var expand_button_1 = $('<span class="octicon octicon-chevron-up"></span>');
            expand_button_1.attr('title', 'Mostrar/ocultar informacion sobre este error');
            expand_button_1.on('click', function (event) {
                extra_info_container_1.toggleClass('expanded');
                expand_button_1.toggleClass('chevron-restored');
                event.stopPropagation();
            });
            title_bar.append(expand_button_1);
            var extra_info_container_1 = $('<div id="extra_info" class="collapsable"></div>');
            extra_info_container_1.on('click', function (e) { e.stopPropagation(); });
            if ('description' in template) {
                extra_info_container_1.append($("<p>" + template.description + "</p>"));
            }
            if ('suggestion' in template) {
                extra_info_container_1.append($("<p>" + template.suggestion + "</p>"));
            }
            message.append(extra_info_container_1);
        }
        if ('pos' in data) {
            /**
             * Hacer que aparezca la manito al pasar el mouse sobre la barra
             * del titulo
             */
            title_bar.addClass('pointer');
            message.on('click', function () {
                _this.dispatcher.dispatch({ kind: Actions_1.ActionKind.MoveCursor, line: data.pos.line, column: data.pos.column });
                _this.dispatcher.dispatch({ kind: Actions_1.ActionKind.FocusEditor });
            });
        }
        if (this.collapsed) {
            this.message_list.toggleClass('msg_list-expanded');
            this.collapsed = false;
        }
        this.message_list.append(message);
    };
    MessagePanel.prototype.clear = function () {
        if (this.dirty) {
            this.collapsed = true;
            this.message_list.toggleClass('msg_list-expanded');
            this.message_list.empty();
            this.dirty = false;
        }
    };
    MessagePanel.prototype.collapse = function () {
        this.collapsed = true;
        this.message_list.toggleClass('msg_list-expanded');
    };
    return MessagePanel;
}());
exports.default = MessagePanel;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(0);
var Window_1 = __webpack_require__(42);
var Actions_1 = __webpack_require__(2);
var OutputPanel = (function () {
    function OutputPanel(container, d) {
        var _this = this;
        this.parent = container;
        this.dispatcher = d;
        this.container = $('<div class="output_container"></div>');
        var bar = this.create_title_bar();
        this.bar = bar;
        this.step_button.click(function () { _this.dispatcher.dispatch({ kind: Actions_1.ActionKind.Step }); });
        this.stop_button.click(function () { _this.dispatcher.dispatch({ kind: Actions_1.ActionKind.StopExecutionUser }); });
        var output_container = $('<div class="output"></div>');
        this.output = new Window_1.default(output_container, this.dispatcher);
        this.container.append(bar).append(output_container);
    }
    OutputPanel.prototype.create_title_bar = function () {
        var bar = $('<div class="bar bar-bottom-border flex-row center-align"></div>');
        var icon = $('<span style="margin-left:10px" class="octicon octicon-terminal"></span>');
        var title = $('<span class="title">SALIDA</span>');
        this.step_button = $('<button class="green-button icon-button"><span class="button-icon octicon octicon-triangle-right"></span></button>');
        this.stop_button = $('<button class="red-button icon-button"><span class="button-icon octicon octicon-primitive-square"></span></button>');
        bar.append(icon, title, this.step_button, this.stop_button);
        this.hide_controls();
        return bar;
    };
    OutputPanel.prototype.show_controls = function () {
        this.step_button.show();
        this.stop_button.show();
    };
    OutputPanel.prototype.hide_controls = function () {
        this.step_button.hide();
        this.stop_button.hide();
    };
    OutputPanel.prototype.write = function (v) {
        this.output.write(v);
    };
    OutputPanel.prototype.read = function () {
        this.output.read();
    };
    OutputPanel.prototype.clear = function () {
        this.output.clear();
    };
    return OutputPanel;
}());
exports.default = OutputPanel;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(0);
var Actions_1 = __webpack_require__(2);
var PanelToggler = (function () {
    function PanelToggler(parent, dispatcher, debug) {
        this.parent = parent;
        this.debug = debug;
        this.dispatcher = dispatcher;
        this.container = $('<div id="panel-toggler" class="flex-col big-v-bar center-align"></div>');
        this.panels = [];
    }
    PanelToggler.prototype.add_panel = function (panel, hidden, icon_class_name) {
        var _this = this;
        var new_panel = { hidden: hidden, container: panel.container, container_index: panel.container_index, panel_index: panel.panel_index };
        this.panels.push(new_panel);
        var button = $("<button class=\"blue-button big-icon-button v-button\"><span class=\"big-icon octicon octicon-" + icon_class_name + "\"></span></button>");
        button.click(function () {
            _this.toggle_panel(panel.container_index, panel.panel_index);
        });
        this.container.append(button);
    };
    PanelToggler.prototype.toggle_panel = function (container_index, panel_index) {
        var index = this.find_panel(container_index, panel_index);
        if (index != -1) {
            if (this.panels[index].hidden) {
                this.dispatcher.dispatch({ kind: Actions_1.ActionKind.ShowPanel, container_index: container_index, panel_index: panel_index });
                this.panels[index].hidden = false;
            }
            else {
                this.dispatcher.dispatch({ kind: Actions_1.ActionKind.HidePanel, container_index: container_index, panel_index: panel_index });
                this.panels[index].hidden = true;
            }
        }
        else {
            throw new Error("No panel found. The panel you were looking for had indexes: { container_index: " + container_index + ", panel_index: " + panel_index + " }");
        }
    };
    PanelToggler.prototype.find_panel = function (container_index, panel_index) {
        for (var index = 0; index < this.panels.length; index++) {
            var panel = this.panels[index];
            if (panel.container_index == container_index && panel.panel_index == panel_index) {
                return index;
            }
        }
        return -1;
    };
    PanelToggler.prototype.add_link = function (url_string, icon_class_name) {
        var anchor = $("<button class=\"blue-button big-icon-button v-button\"><a class=\"big-icon octicon octicon-" + icon_class_name + "\" href=\"" + url_string + "\"></a></button>");
        this.container.append(anchor);
    };
    return PanelToggler;
}());
exports.default = PanelToggler;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(0);
var Actions_1 = __webpack_require__(2);
var interprete_pl_1 = __webpack_require__(5);
var Scalar = (function () {
    function Scalar(parent, name, in_scope, init, dispatcher) {
        var _this = this;
        this.parent = parent;
        this.dispatcher = dispatcher;
        this.name = name;
        this.container = $('<pre class="scalar flex-row"></pre>');
        var name_element = $("<span class=\"scalar-name\">" + name + ":</span>");
        if (in_scope) {
            if (!init) {
                this.value = null;
                this.value_element = $("<span class=\"value italic\">Aun no ha sido inicializada</span>");
            }
            else {
                this.value = null;
                this.value_element = $("<span class=\"value italic\"></span>");
            }
        }
        else {
            this.value_element = $("<span class=\"value italic\">Esta variable no est\u00E1 en \u00E1mbito</span>");
        }
        this.remove_button = $('<button class="simple-button-icon octicon octicon-x pull-right"></button>');
        this.remove_button.click(function () {
            _this.dispatcher.dispatch({ kind: Actions_1.ActionKind.RemoveVarFromInspection, name: _this.name });
        });
        this.container.append(name_element, this.value_element, this.remove_button);
        this.parent.append(this.container);
    }
    Scalar.prototype.set_value = function (vb) {
        if (vb.value != this.value) {
            this.value_element.text(vb.value);
            this.value = vb.value;
            this.value_element.removeClass('italic');
        }
    };
    Scalar.prototype.change_state = function (state) {
        this.value_element.addClass('italic');
        this.value = null;
        switch (state) {
            case interprete_pl_1.VarState.DoesntExist:
                this.value_element.text('Esta variable no existe');
                break;
            case interprete_pl_1.VarState.ExistsNotInit:
                this.value_element.addClass('italic');
                this.value_element.text('Aun no ha sido inicializada');
                break;
            case interprete_pl_1.VarState.ExistsOutOfScope:
                this.value_element.addClass('italic');
                this.value_element.text('Esta variable no esta en ámbito');
                break;
        }
    };
    return Scalar;
}());
exports.default = Scalar;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StatusBar = (function () {
    function StatusBar(container) {
        this.container = container;
        var htmlstring = "\n        <div id=\"status_bar\" class=\"bar bar-top-border bar-bottom-border flex-row center-align\">\n            <span id=\"status_msg\" class=\"title small-title\"></span>\n        </div>\n        ";
        this.element = this.container.append(htmlstring);
        this.status_msg = this.element.find('#status_msg');
    }
    Object.defineProperty(StatusBar.prototype, "title", {
        get: function () {
            return this.status_msg.text();
        },
        set: function (s) {
            this.status_msg.text(s);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatusBar.prototype, "error_count", {
        get: function () {
            return this._error_count;
        },
        set: function (error_count) {
            this._error_count = error_count;
            this.status_msg.empty();
            if (error_count === 0) {
                this.status_msg.text('Listo');
            }
            else {
                if (error_count >= 1) {
                    var icon = '<span class="octicon octicon-alert"></span>';
                    if (error_count === 1) {
                        this.status_msg.html(icon + " Se ha encontrado un error en tu programa.");
                    }
                    else {
                        this.status_msg.html(icon + " Se han encontrado " + error_count + " errores en tu programa.");
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return StatusBar;
}());
exports.default = StatusBar;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function get_template(data) {
    var template = data.reason in templates ? templates[data.reason] : (data.where in generic_templates ? generic_templates[data.where] : templates.default);
    var parsed_template = { title: style(interpolate(data, template.title)) };
    if ('description' in template) {
        parsed_template['description'] = style(interpolate(data, template.description));
    }
    if ('suggestion' in template) {
        parsed_template['suggestion'] = style(interpolate(data, create(data, template.suggestion)));
    }
    return parsed_template;
}
exports.default = get_template;
function create(data, s) {
    var result = '';
    /**
     * Regexp que encuentra los nombres
     * de los estilos que hay que aplicar
     */
    var r = /\$\w+/g;
    if (r.test(s)) {
        /**
         * Partes de la cadena que no cambian y estilos
         */
        var _a = split_at_styles(s), pieces = _a.pieces, styles = _a.styles;
        var i = 0;
        for (; i < styles.length; i++) {
            var styled_content = '';
            switch (styles[i].name) {
                case 'codelist':
                    styled_content = codelist(data, styles[i].content);
                    break;
            }
            result += pieces[i] + styled_content;
        }
        result += pieces[i];
        return result;
    }
    else {
        return s;
    }
}
function interpolate(data, s) {
    var result = '';
    /**
     * Regexp que encuentra los nombres de las
     * las propiedades cuyos valores hay que sacar
     * de data
     */
    var r = /@\w+/g;
    if (r.test(s)) {
        /**
        * Partes de la cadena que no cambian
        */
        var pieces = s.split(r);
        /**
         * Nombres de las propiedades
         */
        var props = s.match(r).map(function (v) { return v.slice(1); });
        var i = 0;
        for (; i < props.length; i++) {
            result += pieces[i] + data[props[i]];
        }
        result += pieces[i];
        return result;
    }
    else {
        return s;
    }
}
function style(s) {
    var result = '';
    /**
     * Regexp que encuentra los nombres
     * de los estilos que hay que aplicar
     */
    var r = /\$\w+/g;
    if (r.test(s)) {
        /**
         * Partes de la cadena que no cambian y estilos
         */
        var _a = split_at_styles(s), pieces = _a.pieces, styles = _a.styles;
        var i = 0;
        for (; i < styles.length; i++) {
            var styled_content = '';
            switch (styles[i].name) {
                case 'code':
                    styled_content = "<code class=\"code\">" + styles[i].content + "</code>";
                    break;
            }
            result += pieces[i] + styled_content;
        }
        result += pieces[i];
        return result;
    }
    else {
        return s;
    }
}
function split_at_styles(s) {
    var pieces = [];
    var styles = [];
    var current_piece = '';
    var index = 0;
    while (index < s.length) {
        if (s[index] == '$') {
            index++;
            var name_1 = '';
            /**
             * leer el nombre del estilo
             */
            while (s[index] != '{') {
                name_1 += s[index];
                index++;
            }
            /**
             * esto hace que no se agregue el '{' al
             * contenido
             */
            index++;
            /**
             * leer su contenido
             */
            var content = '';
            var string_length = s.length;
            var open_braces = 1;
            while (open_braces > 0 && index < string_length) {
                if (s[index] == '}') {
                    open_braces--;
                    if (open_braces > 0) {
                        content += s[index];
                    }
                }
                else {
                    content += s[index];
                }
                index++;
            }
            styles.push({ name: name_1, content: content });
            pieces.push(current_piece);
            current_piece = '';
        }
        else {
            current_piece += s[index];
            index++;
        }
    }
    pieces.push(current_piece);
    return { pieces: pieces, styles: styles };
}
/**
 * Crea una <ul> con el stilo '$code'
 */
function codelist(data, propName) {
    var list = '<ul>';
    for (var i = 0; i < data[propName].length; i++) {
        var item = data[propName][i];
        list += "<li>$code{" + item + "}</li>";
    }
    list += '</ul>';
    return list;
}
var generic_templates = {
    'parser': {
        title: 'Se encontró un error de sintaxis',
        description: 'Los errores de sintaxis ocurren cuando el compilador esperaba encontrar algo pero no lo hizo. Por ejemplo, no escribir $code{finsi} al final de una estructura $code{si} es un error de sintaxis.',
        suggestion: 'En este caso, el error ocurrió porque el compilador no encontró ninguno de los siguientes elementos: $codelist{expected}'
    }
};
var templates = {
    default: { title: 'Tu programa contiene un error: $code{@where::@reason}' },
    '@assignment-incompatible-types': {
        title: 'Se intentó asignar un valor de tipo $code{@received} a una variable de tipo $code{@expected}.',
        description: 'Las variables de tipo $code{@expected} no pueden contener datos de tipo $code{@received}.',
        suggestion: 'Deberias cambiar el tipo de la variable o cambiar el valor que quieres asignarle.'
    },
    'repeated-variable': {
        title: 'Variable repetida',
        description: 'Se declararon dos variables con el mismo nombre. La primera es de tipo $code{@first_type} y la segunda es de tipo $code{@second_type}.',
        suggestion: 'Para arreglar este error modifica el nombre de alguna de las dos variables.'
    },
    '@call-undefined-module': {
        title: 'Modulo indefinido',
        description: 'Se llamó al modulo $code{@name} pero este no fue declarado en el programa.',
        suggestion: 'Debes definir todos los modulos que uses en tu programa.'
    },
    'undefined-variable': {
        title: 'Variable indefinida',
        description: 'Se invocó a la variable $code{@name} pero ésta no fue declarada en ningún lugar.',
        suggestion: 'Debes declarar todas las variables que utilices en tu programa, ya sea en el ámbito global (el modulo principal) o en el ámbito local (dentro de algun modulo).'
    },
    '@invocation-extra-indexes': {
        title: 'Se invocó una variable con demasiados indices',
        description: 'La variable $code{@name} fue invocada con @indexes indice/s pero solo tiene @dimensions dimension/es.',
        suggestion: 'Si una variable tiene $code{@dimensions} dimensiones entonces solo puede ser invocada con hasta $code{@dimensions} indices.'
    },
    '@assignment-long-string': {
        title: 'Cadena demasiado larga',
        description: 'Se intentó asignar una cadena de @string_length caracteres al vector $code{@name} que es de longitud @vector_length.',
        suggestion: 'La longitud de una cadena no puede superar la longitud del vector que la contiene.'
    },
    '@read-long-string': {
        title: 'Se leyó una cadena demasiado larga',
        description: 'Se intentó asignar una cadena de @string_length caracteres al vector $code{@name} que es de longitud @vector_length.',
        suggestion: 'La longitud de una cadena no puede superar la longitud del vector que la contiene.'
    },
    '@read-incompatible-types': {
        title: 'Se leyó un valor del tipo equivocado',
        description: 'Ingresaste un valor del tipo equivocado. El programa esperaba recibir un valor de tipo $code{@expected} pero ingresaste un valor de tipo $code{@received}.',
        suggestion: 'Para solucionar este error vuelve a ejecutar el programa e ingresa un valor del tipo adecuado. Para mas informacion sobre los tipos de las variables haz click [aqui].'
    },
    '@call-incompatible-argument': {
        title: 'Se llamó un módulo con un argumento del tipo equivocado',
        description: 'El módulo $code{@name} esperaba que su argumento numero @index sea de tipo $code{@expected} pero recibió un argumento de tipo $code{@received}',
        suggestion: 'Al llamar al módulo asegurate de pasarle argumentos del tipo adecuado.'
    },
    'bad-condition': {
        title: 'Se encontró una condición de un tipo invalido',
        description: 'Una estructura de control tiene una condición de tipo $code{@received}.',
        suggestion: 'La condición de una estructura de control siempre debe ser una expresión que devuelva un valor de tipo lógico.'
    },
    '@for-bad-counter': {
        title: 'El contador de un bucle $code{para} es de un tipo invalido.',
        suggestion: 'Se usó un contador de tipo $code{@received}, pero la variable que controla un bucle $code{para} siempre debe ser de tipo ${entero}'
    },
    '@for-bad-init': {
        title: 'El contador de un bucle $code{para} fue inicializado con un valor de un tipo invalido',
        suggestion: 'Se inicializó el contador con un valor del tipo $code{@received} pero el contador de un bucle para debe inicializarce con un valor de tipo $code{entero}',
    },
    '@for-bad-last': {
        title: 'El valor final de un bucle $code{para} es de un tipo invalido',
        description: 'El valor final declarado es de tipo $code{@received} pero debe ser de tipo $code{entero}.',
        suggestion: 'Ademas, debes asegurarte de que el valor final sea superior al valor inicial, de otra forma el bucle $code{para} se convertirá en un bucle infinito.'
    },
    'bad-return': {
        title: 'Una función de tipo $code{@declared} retorna un valor de tipo $code{@received}',
        description: 'Las funciones siempre deben retornar datos del tipo que declaran. Si se declara que una funcion retorna datos de tipo $code{@entero} entonces todos sus enunciados $code{retornar} deben devolver valores de tipo $code{@entero}.',
        suggestion: 'Cambia todos los enunciados de la funcion para que retornen datos de tipo $code{@declared}.'
    },
    '@call-wrong-arg-amount': {
        title: 'Un modulo fue llamado con la cantidad equivocada de argumentos',
        description: 'El modulo $code{@name} fue llamado con @received argumento/s pero esperaba recibir @expected.',
        suggestion: 'Debes invocar al modulo $code{@name} con @expected argumento/s.'
    },
    '@invocation-bad-index': {
        title: 'Se utilizó un índice del tipo equivocado',
        description: 'Se invocó un arreglo con un índice de tipo $code{@received}.',
        suggestion: 'Todos los índices de un arreglo deben ser de tipo $code{entero}.'
    },
    '@read-bad-arg': {
        title: 'Argumento invalido en una llamada a $code{leer}',
        description: 'Este error ocurrió porque el argumento número @index de una llamada a $code{leer} no representa a una variable si no a un valor literal.',
        suggestion: 'Todos los argumentos de las llamadas a $code{leer} deben representar a una variable, a una cadena, o a una celda de un vector.'
    },
    '@call-bad-ref-arg': {
        title: 'En una llamada a $code{@module}: se recibió un valor literal en lugar de una variable',
        description: 'Este error ocurrió porque el argumento número @index de una llamada a $code{@module} no representa a una variable si no a un valor literal. El parametro $code{@param_name} del módulo esperaba recibir una variable de tipo $code{@param_expected}.',
        suggestion: 'El argumento enviado a este parámetro tomado por referencia debe representar a un variable del tipo $code{@param_expected}.'
    },
    'bad-write-arg': {
        title: 'En una llamada a $code{@name}: se recibió un valor que no se puede mostrar.',
        description: 'Este error ocurrió porque el argumento número @index de una llamada a $code{@name} no representa un valor que se pueda mostrar en la pantalla. Los tipos de datos que pueden mostrarse son: $code{entero} $code{logico} $code{caracter} $code{real} $code{caracter[n]} (donde $code{n} es un numero entero).',
        suggestion: 'Cuando llamas a $code{@name} asegura te pasarle argumentos de alguno de los tipos soportados.'
    }
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(0);
var Actions_1 = __webpack_require__(2);
var interprete_pl_1 = __webpack_require__(5);
var Vector = (function () {
    function Vector(parent, name, in_scope, init, dispatcher) {
        var _this = this;
        this.parent = parent;
        this.dispatcher = dispatcher;
        this.name = name;
        this.container = $('<div class="vector flex-col"></div>');
        this.cells_container = $('<div class="scalar flex-col"></div>');
        var name_element = $("<span class=\"scalar-name\">" + name + ":</span>");
        var name_row = $("<div class=\"vector flex-row\"></div>");
        var toggle_cells_button = $('<button class="simple-button-icon toggle-button octicon octicon-triangle-down"></button>');
        toggle_cells_button.click(function () {
            toggle_cells_button.toggleClass('octicon-triangle-down');
            toggle_cells_button.toggleClass('octicon-triangle-right');
            _this.cells_container.toggle();
        });
        name_row.append(toggle_cells_button, name_element);
        var remove_button = $('<button class="simple-button-icon octicon octicon-x pull-right"></button>');
        remove_button.click(function () {
            _this.dispatcher.dispatch({ kind: Actions_1.ActionKind.RemoveVarFromInspection, name: _this.name });
        });
        this.cell_elements = [];
        this.cells = [];
        if (in_scope) {
            if (!init) {
                this.message = $("<span class=\"value italic\">Aun no ha sido inicializada</span>");
                name_row.append(this.message, remove_button);
                this.container.append(name_row);
            }
        }
        else {
            this.message = $("<span class=\"value italic\">Esta variable no est\u00E1 en \u00E1mbito</span>");
            name_row.append(this.message, remove_button);
            this.container.append(name_row);
        }
        this.container.append(this.cells_container);
        this.parent.append(this.container);
    }
    Vector.prototype.update_values = function (bv) {
        this.message.hide();
        if (bv.cells.length > this.cells.length) {
            var diff = bv.cells.length - this.cells.length;
            for (var i = 0; i < diff; i++) {
                var _a = this.create_cell_element(i + this.cells.length + 1, ''), container = _a.container, index_element = _a.index_element, value_element = _a.value_element;
                this.cell_elements.push({ index_element: index_element, value_element: value_element });
                this.cells_container.append(container);
            }
            this.cells = bv.cells;
        }
        for (var i = 0; i < bv.cells.length; i++) {
            var cell = bv.cells[i];
            var cell_element = this.cell_elements[i];
            if (cell.index.toString() != cell_element.index_element.text()) {
                cell_element.index_element.text(cell.index + 1 + ":");
            }
            if (cell.value.toString() != cell_element.value_element.text()) {
                cell_element.value_element.text(cell.value.toString());
            }
        }
    };
    Vector.prototype.create_cell_element = function (index, value) {
        var element_container = $('<pre class="vector-cell flex-row"></pre>');
        var index_element = $("<span class=\"scalar-name\">" + index + ":</span>");
        var value_element = $("<span class=\"value\">" + value + "</span>");
        element_container.append(index_element, value_element);
        return { container: element_container, index_element: index_element, value_element: value_element };
    };
    Vector.prototype.out_of_scope = function () {
        this.message.text('Esta variable no esta en ámbito');
        this.message.show();
        this.cells = [];
        this.cells_container.empty();
        this.cell_elements = [];
    };
    Vector.prototype.not_defined = function () {
        this.message.text('Esta variable no existe');
        this.message.show();
        this.cells = [];
        this.cells_container.empty();
        this.cell_elements = [];
    };
    Vector.prototype.change_state = function (state) {
        switch (state) {
            case interprete_pl_1.VarState.DoesntExist:
                this.message.text('Esta variable no existe');
                break;
            case interprete_pl_1.VarState.ExistsNotInit:
                this.message.text('Aun no ha sido inicializada');
                break;
            case interprete_pl_1.VarState.ExistsOutOfScope:
                this.message.text('Esta variable no esta en ámbito');
                break;
        }
        this.message.show();
        this.cells = [];
        this.cells_container.empty();
        this.cell_elements = [];
    };
    return Vector;
}());
exports.default = Vector;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(4);
var Emitter_1 = __webpack_require__(32);
var Prompt_1 = __webpack_require__(14);
var $ = __webpack_require__(0);
var Window = (function (_super) {
    tslib_1.__extends(Window, _super);
    function Window(container, d) {
        var _this = _super.call(this, ['evaluation-error']) || this;
        _this.container = container;
        _this.container.append($('<div class="line"></div>'));
        _this.dispatcher = d;
        return _this;
    }
    Window.prototype.write = function (v) {
        this.container.append($("<div class=\"line\"><span>" + v + "</span></div>"));
    };
    Window.prototype.read = function () {
        // hace falta almacenar Prompt en p?
        var p = new Prompt_1.default(this.container, this.dispatcher, 'input');
    };
    Window.prototype.clear = function () {
        this.container.empty();
    };
    return Window;
}(Emitter_1.default));
exports.default = Window;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(0);
var Controller_1 = __webpack_require__(15);
var app = new Controller_1.Controller($('body'), false);


/***/ })
/******/ ]);
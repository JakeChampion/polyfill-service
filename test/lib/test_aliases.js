var assert  = require('assert');
var AliasResolver = require('../../lib/aliases');

var configuredAliases = {};

AliasResolver.addResolver(function expandAliasFromConfig(polyfillIdentifierName) {
	return configuredAliases[polyfillIdentifierName];
});

describe("#resolvePolyfills(polyfills)", function() {

	it("should take a list of polyfill objects and resolve each to potentially many other polyfill objects based on a sequence of resolution functions", function() {

		// Initialise the resolver with a dictionary of names mapping to
		// potentially many names (eg modernizr:es5array contains all the ES5
		// array polyfills.
		configuredAliases = {
			"alias_name_a": [ "resolved_name_a", "resolved_name_b" ],
			"alias_name_b": [ "resolved_name_c", "resolved_name_d" ]
		};

		var resolvedPolyfills = AliasResolver.resolvePolyfills([{
			name: "alias_name_a",
			flags: []
		}]);

		assert.deepEqual([{
				name: "resolved_name_a",
				flags: [],
				aliasOf: ["alias_name_a"]
			},
			{
				name: "resolved_name_b",
				flags: [],
				aliasOf: ["alias_name_a"]
			}
		], resolvedPolyfills);
	});

	it("should remove duplicate polyfills once expanded and record which aliases included each polyfill once duplicates are removed", function() {
		configuredAliases = {
			"alias_name_a": ["resolved_name_a", "resolved_name_b"],
			"alias_name_b": ["resolved_name_c", "resolved_name_b"]
		};

		var resolvedPolyfills = AliasResolver.resolvePolyfills([{
			name: "alias_name_a",
			flags: []
		},
		{
			name: "alias_name_b",
			flags: []
		}]);

		assert.deepEqual([
			{
				name: "resolved_name_a",
				flags: [],
				aliasOf: ["alias_name_a"]
			},
			{
				name: "resolved_name_b",
				flags: [],
				aliasOf: ["alias_name_a", "alias_name_b"]
			},
			{
				name: "resolved_name_c",
				flags: [],
				aliasOf: ["alias_name_b"]
			}
		], resolvedPolyfills);
	});

	it("should pass flags from the aliases to their resolved counterparts", function() {
		configuredAliases = {
			"alias_name_a": ["resolved_name_a", "resolved_name_b"],
			"alias_name_b": ["resolved_name_c", "resolved_name_d"]
		};

		var resolvedPolyfills = AliasResolver.resolvePolyfills([
			{
				name: "alias_name_a",
				flags: ["always"]
			},
			{
				name: "alias_name_b",
				flags: ["gated"]
			}
		]);

		assert.deepEqual([
			{
				name: "resolved_name_a",
				flags: ["always"],
				aliasOf: ["alias_name_a"]
			},
			{
				name: "resolved_name_b",
				flags: ["always"],
				aliasOf: ["alias_name_a"]
			},
			{
				name: "resolved_name_c",
				flags: ["gated"],
				aliasOf: ["alias_name_b"]
			},
			{
				name: "resolved_name_d",
				flags: ["gated"],
				aliasOf: ["alias_name_b"]
			}
		], resolvedPolyfills);
	});

	it("should concatenate duplicate polyfill's flags and aliases", function() {
		configuredAliases = {
			"alias_name_a": ["resolved_name_a", "resolved_name_b"],
			"alias_name_b": ["resolved_name_c", "resolved_name_b"]
		};

		var resolvedPolyfills = AliasResolver.resolvePolyfills([
			{
				name: "alias_name_a",
				flags: ["always"]
			},
			{
				name: "alias_name_b",
				flags: ["gated"]
			}
		]);

		assert.deepEqual([
			{
				name: "resolved_name_a",
				flags: ["always"],
				aliasOf: ["alias_name_a"]
			},
			{
				name: "resolved_name_b",
				flags: ["always", "gated"],
				aliasOf: ["alias_name_a", "alias_name_b"]
			},
			{
				name: "resolved_name_c",
				flags: ["gated"],
				aliasOf: ["alias_name_b"]
			}
		], resolvedPolyfills);
	});
});

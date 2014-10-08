// Window.prototype.scroll
Object.defineProperties(window.prototype, {
	'scrollX': {
		get: function () {
			return this.pageXOffset;
		}
	},
	'scrollY': {
		get: function () {
			return this.pageYOffset;
		}
	}
});

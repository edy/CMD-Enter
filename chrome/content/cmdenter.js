if (typeof CMDEnter == "undefined") {
	var CMDPlusEnter = {
		init : function() {
			this.urlbar = document.getElementById("urlbar");
			this.searchbar = document.getElementById("searchbar");

			// replace alt key with meta key
			this.handleCommand = this.urlbar.handleCommand.toString().replace('aTriggeringEvent.altKey', 'aTriggeringEvent.metaKey');
			this.handleSearchCommand = this.searchbar.handleSearchCommand.toString().replace('aEvent.altKey', 'aEvent.metaKey');
			this.canonizeURL = this.urlbar._canonizeURL.toString().replace('aTriggeringEvent.metaKey', 'aTriggeringEvent.altKey');

			// Fixes error in Firefox >4: missing ; before statement
			this.handleCommand = this.handleCommand.replace(/let\s+/g, 'var ');
			this.canonizeURL = this.canonizeURL.replace(/let\s+/g, 'var ');

			eval("this.urlbar.handleCommand = " + this.handleCommand);
			eval("this.urlbar._canonizeURL = " + this.canonizeURL);
			eval("this.searchbar.handleSearchCommand = " + this.handleSearchCommand);
		}
	};

	(function() {
		this.init();
	}).apply(CMDPlusEnter);
}
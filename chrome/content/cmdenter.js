var urlbar = document.getElementById("urlbar");
var handleCommand = urlbar.handleCommand.toString();
var canonizeURL = urlbar._canonizeURL.toString();

// replace alt key with meta key
handleCommand = handleCommand.replace('aTriggeringEvent.altKey', 'aTriggeringEvent.metaKey');

// Fixes error in Firefox >4: missing ; before statement
handleCommand = handleCommand.replace(/let\s+/g, 'var ');

eval("urlbar.handleCommand = " + handleCommand);

// replace meta key with alt key
canonizeURL = canonizeURL.replace('aTriggeringEvent.metaKey', 'aTriggeringEvent.altKey');

// Fixes error in Firefox >4: missing ; before statement
canonizeURL = canonizeURL.replace(/let\s+/g, 'var ');

eval("urlbar._canonizeURL = " + canonizeURL);


var searchbar = document.getElementById("searchbar");
var handleSearchCommand = searchbar.handleSearchCommand.toString();
handleSearchCommand = handleSearchCommand.replace('aEvent.altKey', 'aEvent.metaKey');
eval("searchbar.handleSearchCommand = " + handleSearchCommand);
// Don't pollute the global (window) namespace! Wrap in a function to essentially create a "private" closure of scope.
// Note the aliasing via function parameter of window.justin.game to just game for use inside of the function.
(function(game) {
	"use-strict";

	// Cache references to elements/objects that you're going to reuse.
		// You don't need an ID for everything - a class will be sufficient for querying the DOM, however,
		// if you do have an existing ID available, getElementById will outperform querySelector/querySelectorAll.
		// Prefer it when applicable.
	var startButton = document.querySelector(".start-button");

	function setupPageListeners() {
		startButton.addEventListener("click", game.init.bind(game)); // Put a console.log(this) in the init function of the Game constructor and watch what happens when you
																	 // remove the .bind(game) here and try to start the game.
	}

	document.addEventListener("DOMContentLoaded", function() {
		setupPageListeners();
	});
})(window.justin.game);
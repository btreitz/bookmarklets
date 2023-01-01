javascript: (function () {
	var elements = document.querySelectorAll("p");
	elements.forEach((element) => {
		text = element.innerHTML;
		if (text.startsWith("$$")) {
			element.innerHTML = text.replace(/\s\\\s/g, " \\\\ ");
		}
	});

	// Check if the MathJax script has already been added to the page
	var mathJaxScript = document.getElementById("MathJax-script");
	if (mathJaxScript) {
		// If the script is already present, remove it
		mathJaxScript.remove();
	}

	// Add the MathJax script to the page
	var script = document.createElement("script");
	script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js";
	script.type = "text/javascript";
	script.id = "MathJax-script";
	document.head.appendChild(script);
})();

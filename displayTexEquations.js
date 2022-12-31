javascript: (function () {
	var elements = document.querySelectorAll("p");
	elements.forEach((element) => {
		text = element.innerHTML;
		if (text.startsWith("$$")) {
			element.innerHTML = text.replace(/\s\\\s/g, " \\\\ ");
		}
	});

	var script = document.createElement("script");
	script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js";
	script.type = "text/javascript";
	script.id = "MathJax-script";
	document.head.appendChild(script);
})();

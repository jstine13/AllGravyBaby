document.addEventListener("DOMContentLoaded", function () {
	const backToTopBtn = document.getElementById("backToTopBtn");
	const main = document.querySelector("main");

	window.addEventListener("scroll", function () {
		if (main.getBoundingClientRect().top <= 2) {
		    backToTopBtn.classList.add("show");
		} else {
			backToTopBtn.classList.remove("show");
		}
	});

	backToTopBtn.addEventListener("click", function () {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});
});
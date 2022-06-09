//Swiper
const swiper = new Swiper(".swiper-container", {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	observer: true,
	observerParents: true,
	autoplay: {
		delay: 5000,
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
			spaceBetween: 16
		}
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	}
});

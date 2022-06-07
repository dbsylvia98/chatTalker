//Swiper
const swiper = new Swiper(".swiper-container", {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	breakpoints: {
		767: {
			slidesPerView: 2
		},
		992: {
			slidesPerView: 3
		}
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	}
});
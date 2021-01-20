$(function () {


	// Мобильное меню
	$(".menu-toggle").click(function () {
		$('body').toggleClass("menu-expanded");
	});

	// вызов подменю на адаптиве
	$('.submenu-ic').click(function () {
		$(this).toggleClass('--active');
		$(this).next('.submenu').slideToggle(200);
	});

	$(document).ready(function (e) {
		if ($(window).width() < 1200) {
			if ($(window).scrollTop() > 0) {
				$('.header').addClass('--fixed');
			}
		}
	});
	$(window).scroll(function () {
		if ($(window).width() < 1200) {
			if ($(window).scrollTop() > 0) {
				$('.header').addClass('--fixed');
			} else {
				$('.header').removeClass('--fixed');
			}
		}
	});


	// let sectionText = document.querySelectorAll('.section-text');

	// sectionText.forEach(elem => {
	// 	console.log(elem.childNodes)
	// 	elem.childNodes.forEach(child => {
	// 		// console.log(child)
	// 	})
	// });

















});
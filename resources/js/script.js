function activeLinkControll() {
	$(".navbar-nav .nav-item .nav-link").click(function () {
		//remove active active class form any of nav-link
		$(".navbar-nav .nav-item .nav-link.active").removeClass("active");

		//add active active class to clicked nav-link (li)
		$(this).addClass("active");
	});
}

$(function() {
	activeLinkControll();

    var image_popup = $('.image-popup');
    image_popup.magnificPopup({
        type : 'image',
        gallery : {
        	enabled : true
        }
    });

	$("li.nav-item").on('click',function(){
		$('.collapse').collapse('hide');
	});
	

	$('.filter-button').click(function() {
		$(this).addClass('active').siblings().removeClass('active');

		var filter = $(this).attr('data-filter');

		if (filter == 'all') {
			$('.gallery-container').show();
			$('.exp-col').removeClass('c-2');
			$('.exp-row').removeClass('r-2');
		} else {
			$('.gallery-container').not('.'+filter).hide();
			$('.gallery-container').filter('.'+filter).show();
		}

		if (filter == 'food') {
			console.log('yes')
			$('.exp-col').addClass('c-2');
			$('.exp-row').addClass('r-2');
		}
	});
});

$(window).scroll(function() {
	windowscroll = $(window).scrollTop();

	if(windowscroll > 800) {
		$('.site-wrap section').each(function(i) {
			if ($(this).position().top <= windowscroll + 30) {
				$('.navbar .nav-item .nav-link.active').removeClass('active');
				$('.navbar .nav-item .nav-link').eq(i).addClass('active');
			}
		});
	} else {
		$('.navbar .nav-item .nav-link.active').removeClass('active');
		$('.navbar .nav-item .nav-link:first').addClass('active');
	}
});

/* -------------------------- 공용 스크립트 -------------------------- */
$(function () {
	$("#top_move").click(function () {
		$('body, html').animate({
			scrollTop: 0
		}, 450);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 550) {
			$('.move').fadeIn();
		} else {
			$('.move').fadeOut();
		}
	});
}); //화면 상단으로 올려주는

$(document).ready(function () {
	$(".hamburger").click(function () {
		$(this).toggleClass("is-active");
		$('.parts').toggleClass('on');
	});
}); //햄버거 토글메뉴

/* -------------------------- MAIN PAGE -------------------------- */
$(function () {
	$(window).scroll(function () {
		var windowScrollTop = $(this).scrollTop();
		var width = window.innerWidth;
	/*	console.log(windowScrollTop);*/
		if (width >= 1025) {
			if (windowScrollTop > 49) {
				$('.wrap').css('height', '80px').css('background', 'rgba(255,255,255,1)').addClass('shadow');
				$('.logo').css('transform', 'matrix(1,0,0,1,0,0)').css('left', '50%');
				$('.day').css('right', '-130%');
				$('.titlebox').css('width', '100%');
				$('.titletext').css('font-size', '95px').css('margin-left', '-177px').css('margin-top', '64px');
				$('.gnbcontents').css('top', '-100px');
				$('.vol').css('left', '-50%');
			} else {
				$('.wrap').css('height', '280px').css('background', 'none').removeClass('shadow');
				$('.logo').css('transform', 'matrix(3.4,0,0,3.4,0,37)').css('left', '20%');
				$('.day').css('right', '0%');
				$('.titlebox').css('width', '90%').css('padding-top', '280px');
				$('.titletext').css('font-size', '80px').css('margin-left', '-156px').css('margin-top', '59px');
				$('.gnbcontents').css('top', '20px');
				$('.vol').css('left', '0');
			}
		} //desktop

		if (width <= 1024 && width >= 768) {
			if (windowScrollTop > 12) {
				$('.wrap').css('height', '61.2px').css('background', 'rgba(255,255,255,1)').addClass('shadow');
				$('.logo').css('transform', 'matrix(1,0,0,1,0,0)').css('left', '50%');
				$('.day').css('right', '-130%');
				$('.titlebox').css('width', '100%');
				$('.titletext').css('font-size', '75px').css('margin-left', '-118px').css('margin-top', '55px');
				$('.gnbcontents').css('top', '-100px');
				$('.vol').css('left', '-50%');
			} else {
				$('.wrap').css('height', '230px').css('background', 'none').removeClass('shadow');
				$('.logo').css('transform', 'matrix(3.1,0,0,3.1,0,38)').css('left', '22.5%');
				$('.day').css('right', '0%');
				$('.titlebox').css('width', '90%').css('padding-top', '230px');
				$('.titletext').css('font-size', '60px').css('margin-left', '-86px').css('margin-top', '65px');
				$('.gnbcontents').css('top', '16px');
				$('.vol').css('left', '0');
			}
		} //pad

		if (width <= 767) {
			if (windowScrollTop > 28) {
				$('.wrap').css('height', '61.56px').css('background', 'rgba(255,255,255,1)').addClass('shadow');
				$('.logo').css('transform', 'matrix(1,0,0,1,0,0)').css('left', '50%');
				$('.day').css('right', '-130%');
				$('.titlebox').css('width', '100%');
				$('.titletext').css('font-size', '40px').css('margin-left', '-66px').css('margin-top', '-29.5px');
				$('.gnbcontents').css('left', '-150%');
				$('.vol').css('top', '-100%');

			} else {
				$('.wrap').css('height', '230px').css('background', 'none').removeClass('shadow');
				$('.logo').css('transform', 'matrix(2,0,0,2,0,-39)').css('left', '27%');
				$('.day').css('right', '0');
				$('.titlebox').css('width', '90%');
				$('.titletext').css('font-size', '35px').css('margin-left', '-56px').css('margin-top', '-26px');
				$('.gnbcontents').css('left', '0px');
				$('.vol').css('top', '16px');

			}
		} //mobile
	});
}); //header logo

$(document).ready(function () {
	$(window).scroll(function () {
		$('.contitle').each(function (i) {
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			var width = window.innerWidth;
			/* 3 */
			if (bottom_of_window > bottom_of_object) {
				$(this).css('letter-spacing', '1.9vw').addClass('change');
			} else {
				$(this).css('letter-spacing', '0px').removeClass('change');
			}
			if (width <= 767) {
				if (bottom_of_window > bottom_of_object) {
					$(this).css('letter-spacing', '1.3vw').addClass('change');
				} else {
					$(this).css('letter-spacing', '0px').removeClass('change');
				}
			}
		});
	});
}); //MUSEUM 텍스트

$(function () {
	var pBox = $('.parallax');
	var pBoxChange = $('.boxChange');
	var width = window.innerWidth;

	pBox.click(function () {
		$(this).next().slideToggle();
		if (width >= 1024) {
			if ($(this).css("height") == "600px") {
				$(this).addClass('boxChange');
				$(this).children('.p-inner').css('padding-top', '25px');
			} else {
				$(this).removeClass('boxChange');
				$(this).children('.p-inner').css('padding-top', '249px');
			}
		} //desktop
		if (width <= 1023 && width >= 768) {
			if ($(this).css("height") == "400px") {
				$(this).addClass('boxChange');
				$(this).children('.p-inner').css('padding-top', '25px');
			} else {
				$(this).removeClass('boxChange');
				$(this).children('.p-inner').css('padding-top', '150px');
			}
		} //pad
		if (width <= 767) {
			if ($(this).css("height") == "250px") {
				$(this).addClass('boxChange');
				$(this).children('.p-inner').css('padding-top', '16px');
			} else {
				$(this).removeClass('boxChange');
				$(this).children('.p-inner').css('padding-top', '90px');
			}
		} //mobile

	});
}); //MUSEUM 토글

$(function () {
	$('.marker').click(function () {
		$('.marker').removeClass('active');
		$(this).addClass('active');
		$('.markercheck').css('opacity', '1');
		$(this).children('.markercheck').css('opacity', '0');
		$('.markercheckactive').css('opacity', '0');
		$(this).children('.markercheckactive').css('opacity', '1');
	});
}); //MARKER 애니메이션

function moveSlider(index) {
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	var width = window.innerWidth;
	if (width >= 1024) {
		var willMoveLeft = -(index * (w * 0.4));
		$('.slider_panel').animate({
			'left': willMoveLeft
		}, 400);
	}
	if (width <= 1023) {
		var willMoveLeft = -(index * (w * 0.9));
		$('.slider_panel').animate({
			'left': willMoveLeft
		}, 400);
	}
};

$(function () {
	$('.marker').each(function (index) {
		$(this).attr('data-index', index);
	}).click(function () {
		var index = $(this).attr('data-index');
		moveSlider(index);
	}); //홀리데이 슬라이더
});

$(function () {
	var swiper = new Swiper('.desktop-swiper', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	var swiper = new Swiper('.mobile-swiper', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		freeMode: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
});
/*라이브러리 슬라이더*/


/* -------------------------- SHOP PAGE -------------------------- */


$(document).ready(function () {
	if($("body").data("title") === "checkinpage" || $("body").data("title") === "shoppage"){
		var $grid = $('.grid').masonry({
			columnWidth: '.grid-sizer',
			gutter: '.gutter-sizer',
			percentPosition: true,
			itemSelector: '.grid-item',
		}); // $grid 선언

		$('.allList').click(function () {
			$('.menulist').removeClass('on');
			$(this).addClass('on');
			$('.grid-item').removeClass('showHide').addClass('showOn');
			$grid.masonry('layout');
		});
		/*SHOP*/
		$('.magazineList').click(function () {
			$('.menulist').removeClass('on');
			$(this).addClass('on');
			$('.grid-item').removeClass('showOn').addClass('showHide');
			$('.magazine').removeClass('showHide').addClass('.showOn');
			$grid.masonry('layout');
		});
		$('.artprintsList').click(function () {
			$('.menulist').removeClass('on');
			$(this).addClass('on');
			$('.grid-item').removeClass('showOn').addClass('showHide');
			$('.artprints').removeClass('showHide').addClass('.showOn');
			$grid.masonry('layout');
		});
		$('.booksList').click(function () {
			$('.menulist').removeClass('on');
			$(this).addClass('on');
			$('.grid-item').removeClass('showOn').addClass('showHide');
			$('.books').removeClass('showHide').addClass('.showOn');
			$grid.masonry('layout');
		});
		/*CHECK-IN*/
		$('.hotelList').click(function () {
			$('.menulist').removeClass('on');
			$(this).addClass('on');
			$('.grid-item').removeClass('showOn').addClass('showHide');
			$('.hotel').removeClass('showHide').addClass('.showOn');
			$grid.masonry('layout');
		});
		$('.resoltList').click(function () {
			$('.menulist').removeClass('on');
			$(this).addClass('on');
			$('.grid-item').removeClass('showOn').addClass('showHide');
			$('.resolt').removeClass('showHide').addClass('.showOn');
			$grid.masonry('layout');
		});
		$('.hostelList').click(function () {
			$('.menulist').removeClass('on');
			$(this).addClass('on');
			$('.grid-item').removeClass('showOn').addClass('showHide');
			$('.hostel').removeClass('showHide').addClass('.showOn');
			$grid.masonry('layout');
		});
		$('.bnbList').click(function () {
			$('.menulist').removeClass('on');
			$(this).addClass('on');
			$('.grid-item').removeClass('showOn').addClass('showHide');
			$('.bnb').removeClass('showHide').addClass('.showOn');
			$grid.masonry('layout');
		});

		let cnt = 0;
		let layoutTimer = setInterval(function(){
			cnt++;
			$grid.masonry('layout');
			if(cnt == 50){
				clearInterval(layoutTimer);
			}
		}, 200);
	}
}); //list, itembox 스크립트

	function titleMoveTop(index) {
		var width = window.innerWidth;
		var moveTop = -(index * 100);
		if (width <= 767) {
			var moveTop = -(index * 70);
		}
		$('.itemBoxTitleWrap').stop().animate({
			'top': moveTop
		}, {
			duration: 500,
			ease: 'easeOutQuint'
		});//타이틀 슬라이딩 애니메이션
	}

	$(function () {
		$('.menuBoxList li').each(function (index) {
			$(this).attr('data-index', index);
		});
		$('.menuBoxList li h3').click(function () {
			var index = $(this).parent().attr('data-index');
			titleMoveTop(index);
		});
	}); //title 포지션 변경//그리드 마우스 올릴시 이미지 크기

	$(function () {
		if($("body").data("title") === "checkinpage"){
			$(".datepicker").flatpickr({});
			$('.gallery').lightGallery();
			$('a[href="#ex1"]').click(function () {
				$("#ex1").modal({
					fadeDuration: 180
				});
			});//캘린더 , 라이트갤러리 , 모달
		};
	});

$(document).ready(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw - 210},500);
			$('#b22').animate({top:240, left: vw - 140},500);
			$('#b33').animate({top:240, left: vw - 70},500);
			$('#b44').animate({top:240, left: vw},500);
			$('#b55').animate({top:240, left: vw + 70},500);
			$('#b66').animate({top:240, left: vw + 140},500);
			$('#b77').animate({top:240, left: vw + 210},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22');
		$('#b3').attr('id','b33');
		$('#b4').attr('id','b44');
		$('#b5').attr('id','b55');
		$('#b6').attr('id','b66');
		$('#b7').attr('id','b77');
		
		$('#b11').animate({top:240, left: vw - 210},500);
		$('#b22').animate({top:240, left: vw - 140},500);
		$('#b33').animate({top:240, left: vw - 70},500);
		$('#b44').animate({top:240, left: vw},500);
		$('#b55').animate({top:240, left: vw + 70},500);
		$('#b66').animate({top:240, left: vw + 140},500);
		$('#b77').animate({top:240, left: vw + 210},500);
		
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(2500).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(3000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
					
					// Setelah 10 detik, api mati otomatis + semua balon (b1-b7 & border) terbang meriah ke atas lalu hilang
					setTimeout(function(){
						$('.fuego').fadeOut('slow');
						
						// 1. Munculkan & terbangkan Balloon-Border dari bawah ke atas
						$('.balloon-border').css({top: $(window).height() + 'px', display: 'block', opacity: 1}).animate({top: '-200px', opacity: 0}, 3500, function(){
							$(this).hide();
						});

						// 2. Munculkan & terbangkan b1 sampai b7 secara massal dan mencar memenuhi layar
						for(let b = 1; b <= 7; b++) {
							for(let k = 0; k < 3; k++) {
								let randomX = Math.random() * $(window).width();
								let randomEndX = randomX + (Math.random() * 200 - 100);
								let flyingBalloon = $('<img src="b' + b + '.png" style="position:fixed; width:60px; bottom:-100px; left:' + randomX + 'px; z-index:9998; opacity:0.9;">');
								$('body').append(flyingBalloon);
								flyingBalloon.animate({
									bottom: ($(window).height() + 150) + 'px',
									left: randomEndX + 'px',
									opacity: 0
								}, 3000 + Math.random() * 1500, function() {
									$(this).remove();
								});
							}
						}

						// 3. Efek petasan/kembang api besar pendukung
						for(let j = 0; j < 100; j++) {
							let size = Math.floor(Math.random() * 10) + 5;
							let particle = $('<div style="position:fixed; width:'+size+'px; height:'+size+'px; background:' + ['#ff4b5c','#ffbc00','#00d2ff','#26d0ce','#ff758c','#ff007f','#7b2cbf','#00f5d4'][Math.floor(Math.random()*8)] + '; top:50%; left:50%; z-index:9999; border-radius:50%;"></div>');
							$('body').append(particle);
							let angle = Math.random() * Math.PI * 2;
							let distance = Math.random() * ($(window).width() * 0.8);
							let targetX = Math.cos(angle) * distance;
							let targetY = Math.sin(angle) * distance;
							particle.animate({
								top: '+=' + targetY,
								left: '+=' + targetX,
								opacity: 0
							}, 2000, function() {
								$(this).remove();
							});
						}

						// Tambahan: Fade out hitam & restart otomatis
						setTimeout(function() {
							var overlay = $('<div id="fade_overlay" style="position:fixed; top:0; left:0; width:100%; height:100%; background:#000; z-index:99999; display:none;"></div>');
							$('body').append(overlay);
							overlay.fadeIn(2000, function() {
								$('.song')[0].pause();
								location.reload();
							});
						}, 4000);

					}, 10000);
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
		}
		
		msgLoop(0);
		
	});
});

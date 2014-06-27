function navbar_init(){
	$('#list_view').html('<li>'+
								'<a href="#acasa" data-transitio="slide" class="menu">'+
									'<h3>Acasa</h3>'+
									'<p>evenimete,oferte,recomandari</p>'+
							'	</a>'+
							'</li>'+
							'<li>'+
								'<a href="#dorm" data-transition="slide" class="menu" data-page-name="dorm">'+
									'<h3>Dorm</h3>'+
									'<p>hoteluri,moteluri,pensiuni,vile</p>'+
								'</a>'+
							'</li>'+
							'<li>'+
								'<a href="#mananc" data-transition="slide">'+
									'<h3>Mananc</h3>'+
									'<p>restaurante,baruri,cafenele,pub-uri</p>'+
								'</a>'+
							'</li>'+
							'<li>'+
								'<a href="#fac" data-transition="slide">'+
									'<h3>Fac Ceva</h3>'+
									'<p>tururi,excursii</p>'+
								'</a>'+
							'</li>');
}

function init(){
navbar_init();
}
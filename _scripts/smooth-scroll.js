/* 	
	Used in homepage where clicking the 'Book Now' 
	on nav-bar lets you smoothly navigate to the booking-form.
*/
$( '.smooth' ).on('click', function(e){
	var link = $(this).attr('href');	// gets the url and stores in link variable.
	$('html, body').animate({
		scrollTop: $(link).offset().top
	}, 1000);		// 1 second converted to milliseconds. That's how JS works.
	e.preventDefault();		// Prevents the default settings to be applied.
});
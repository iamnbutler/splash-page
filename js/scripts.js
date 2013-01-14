// Load scripts after page loads
$(window).load(function(){
	// Logo animations
	$('#logo-target').fadeIn(1600);
	$('#headline').delay(2000).fadeIn(800);
	$('#subhead').delay(3000).fadeIn(400);

	// Coming soon animation
	$('#coming-soon-target').delay(3600).fadeIn(800);

	// Social animations
	$('#behance-target').delay(4800).fadeIn(800);
	$('#dribbble-target').delay(4800).fadeIn(800);
	$('#twitter-target').delay(5800).fadeIn(800);
	$('#github-target').delay(5800).fadeIn(800);
});
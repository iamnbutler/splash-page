// Load scripts after page loads
$(document).ready(function(){
	// Logo animations
	$('#logo-target').fadeIn(1600);
	$('#headline').delay(2000).fadeIn(800);
	$('#subhead').delay(3000).fadeIn(400);

	// Coming soon animation
	$('#coming-soon-target').delay(4000).fadeIn(800);

	// Social animations
	$('#behance-target').delay(5000).fadeIn(800);
	$('#dribbble-target').delay(5000).fadeIn(800);
	$('#twitter-target').delay(6000).fadeIn(800);
	$('#github-target').delay(6000).fadeIn(800);
});
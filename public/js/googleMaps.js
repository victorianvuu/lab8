function initMap() {
	// add your code here
	// Create center marker at UCSD
	var ucsd_ltlng = {lat:32.878806, lng:-117.235907};

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title: "UCSD"
	});
}
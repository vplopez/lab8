function initMap() {
	L.mapquest.key = 'ottgW9lko9q1bJJS3vVA0uOlyzoe8rvt';

	var map = L.mapquest.map('map',{
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
	// add your code here
}
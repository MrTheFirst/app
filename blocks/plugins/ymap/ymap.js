
// Yandex map

if ( window.ymaps ) {

	ymaps.ready(function () {

		var map, placemark, data = {map: {}, placemark: {}},
			el = document.getElementsByClassName( 'ymap' )[0];

			data.map.zoom = parseInt( el.dataset.zoom ) || 13;
			data.map.center = [( +el.dataset.lat || 55.7491),( +el.dataset.lng || 37.6227 )];
			data.map.controls = ['zoomControl', 'typeSelector', 'fullscreenControl'];

			if ( el.dataset.name ) {
				data.placemark.hintContent = el.dataset.name;
				data.placemark.balloonContentHeader = el.dataset.name;
			}

			if ( el.dataset.address ) data.placemark.balloonContentBody = el.dataset.address;

			map = new ymaps.Map( el, data.map, { searchControlProvider: 'yandex#search' } );

			placemark = new ymaps.Placemark( data.map.center, data.placemark );

			map.geoObjects.add( placemark );
			map.behaviors.disable( 'scrollZoom' );

	});

}

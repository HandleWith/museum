mapboxgl.accessToken = 'pk.eyJ1IjoiZGVsbDk4OTgiLCJhIjoiY2t1bGoyYnZ2MDU0YjJ2cDFidjEwc2g3NyJ9.vvsdIUQ9tbmSiWJEjNrDBQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9', 
    center: [2.3364, 48.86091], 
    zoom: 16 
});

const marker1 = new mapboxgl.Marker({color: 'black'})
.setLngLat([2.3364, 48.86091])
.addTo(map)

const marker2 = new mapboxgl.Marker({color: 'grey'})
.setLngLat([2.3333, 48.8602])
.addTo(map)

const marker3 = new mapboxgl.Marker({color: 'grey'})
.setLngLat([2.3397, 48.8607])
.addTo(map)

const marker4 = new mapboxgl.Marker({color: 'grey'})
.setLngLat([2.3330, 48.8619])
.addTo(map)

const marker5 = new mapboxgl.Marker({color: 'grey'})
.setLngLat([2.3365, 48.8625])
.addTo(map)

map.addControl(new mapboxgl.NavigationControl());




/*map.on('load', function() {
    map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        (error, image) => {
        if (error) throw error;
        map.addImage('custom-marker', image);
        map.addSource('points', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
            {
            'type': 'Feature',
            'geometry': {
            'type': 'Point',
            'coordinates': [2.3364, 48.86091]
            },
            'properties': {
            'title': 'Louvre Museum'
            }
            },
            {
            'type': 'Feature',
            'geometry': {
            'type': 'Point',
            'coordinates': [2.3333, 48.8602]
            },
            'properties': {
            'title': 'Tunnel des Tuileries'
            }
            },
            {
            'type': 'Feature',
            'geometry': {
            'type': 'Point',
            'coordinates': [2.3397, 48.8607]
            },
            'properties': {
            'title': 'Sarcophage d\'Abou Roach'
            }
            },
            {
            'type': 'Feature',
            'geometry': {
            'type': 'Point',
            'coordinates': [2.3330, 48.8619]
            },
            'properties': {
            'title': 'Arc de triomphe du Carrousel'
            }
            },
            {
            'type': 'Feature',
            'geometry': {
            'type': 'Point',
            'coordinates': [2.3365, 48.8625]
            },
            'properties': {
            'title': 'Rue de Rivoli'
            }
            }
            ]
            }
            });
            map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'points',
            'layout': {
            'icon-image': 'marker-15',
            "icon-size": ['interpolate', ['linear'], ['zoom'], 10, 2, 50, 0.5],
            'text-field': ['get', 'title'],
            'text-font': ['Open Sans Semibold','Arial Unicode MS Bold'],
            'text-offset': [0, 1.20],
            'text-anchor': 'top'
        }
        });
        }
        );
})*/


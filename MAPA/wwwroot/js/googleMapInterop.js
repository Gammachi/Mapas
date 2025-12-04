window.geoMap = window.geoMap || {};

window.geoMap.initMap = function (mapElement, centerLat, centerLng, zoom, points) {
    if (!window.google || !google.maps) {
        console.error("Google Maps JS API no está cargado");
        return;
    }

    // Si ya hay un mapa en ese div, lo “limpiamos”
    if (mapElement._google_map) {
        mapElement._google_map = null;
    }

    const center = { lat: centerLat, lng: centerLng };

    const map = new google.maps.Map(mapElement, {
        center: center,
        zoom: zoom,
        styles: googleMapDarkStyles // tema oscuro (definido abajo)
    });

    mapElement._google_map = map;

    // Dibujar puntos (marcadores)
    if (points && points.length > 0) {
        points.forEach(p => {
            const marker = new google.maps.Marker({
                position: { lat: p.lat, lng: p.lng },
                map: map,
                title: p.label || ""
            });

            if (p.label) {
                const info = new google.maps.InfoWindow({
                    content: `<div>${p.label}</div>`
                });

                marker.addListener("click", () => info.open(map, marker));
            }
        });
    }
};
// Tema oscuro clásico tipo “Google Night”
const googleMapDarkStyles = [
    { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#b0b0b0" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#000000" }] },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#4a4a4a" }]
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#5a5a5a" }]
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#111827" }]
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#242424" }]
    }
];
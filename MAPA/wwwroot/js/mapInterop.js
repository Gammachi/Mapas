window.c2aMap = {
    initMap: function (mapId, centerLat, centerLng, zoom, points) {
        // Si el mapa ya existe, lo limpiamos (por si recargas el componente)
        if (window.c2aMap._map) {
            window.c2aMap._map.remove();
            window.c2aMap._map = null;
        }

        var map = L.map(mapId).setView([centerLat, centerLng], zoom);
        window.c2aMap._map = map;

        //---mapa normal
        //L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //    maxZoom: 19
        //}).addTo(map);
        //modod oscuro culero
        //L.tileLayer(
        //    'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        //    { maxZoom: 19 }
        //).addTo(map);


        //-modo oscuro2
        //L.tileLayer(
        //    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        //    { maxZoom: 19 }
        //).addTo(map);

        //Estilo no oficial de google
        L.tileLayer(
            'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
            { maxZoom: 19 }
        ).addTo(map);





        L.marker([22.1565, -100.9855]).addTo(map)
            .bindPopup('Ubicación central.')
            .openPopup();
        //if (points && points.length > 0) {
        //    points.forEach(function (p) {
        //        var marker = L.marker([p.lat, p.lng]).addTo(map);
        //        if (p.label) {
        //            marker.bindPopup(p.label);
        //        }
        //    });
        
    }
};
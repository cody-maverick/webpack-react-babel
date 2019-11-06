export default class Geocode {
    _apiKey = 'pk.fe5ac4437070bd178ca25c5be381993f';

    async geoCodeCity(place) {
        const res = await fetch(`https://eu1.locationiq.com/v1/search.php?key=${this._apiKey}&q=${place}&format=json`);
        let results = await res.json();
        return results.map(this._transformGeocode);
    }

    _transformGeocode = (data) => {
        return {
            place: data.display_name,
            lat: data.lat,
            lon: data.lon
        }
    }
}
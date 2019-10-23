export default class Geocode {
    _apiKey = 'pk.fe5ac4437070bd178ca25c5be381993f';

    async geoCodeCity(place) {
        const res = await fetch(`https://eu1.locationiq.com/v1/search.php?key=${this._apiKey}&q=${place}&format=json`);
        console.log(res.json());
        return res;
    }
}
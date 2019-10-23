export default class WeatherService {
    _apiBase = 'https://api.darksky.net/forecast/';
    _apiKey = '85f8ee954e77fe88f40afdbbc6c72246';

    async getWeather(url) {
        const res = await fetch(`${this._apiBase}/${this._apiKey}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    async getWeatherInCity(city_name) {
        const res = await this.getWeather(`?q=${city_name}`);
        return res;
        // return res.results.map(this._transformPerson);
    }
}
export default class WeatherService {
    _apiBase = 'https://api.openweathermap.org/data/2.5/weather';

    async getWeather(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    async getWeatherInCity(city_name) {
        const res = await this.getWeather(`?q=${city name}`);
        return res;
        // return res.results.map(this._transformPerson);
    }
}
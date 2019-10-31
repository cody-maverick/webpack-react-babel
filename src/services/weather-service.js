export default class WeatherService {
    _proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    _apiBase = 'https://api.darksky.net/forecast';
    _apiKey = '85f8ee954e77fe88f40afdbbc6c72246';

    async getWeather(url) {
        const res = await fetch(`${this._proxyUrl}${this._apiBase}/${this._apiKey}/${url}?lang=ru`);
        if (!res.ok) {
            throw new Error(`Could not fetch` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    async getWeatherCurrently(lat, lon) {
        let url = `/${lat},${lon}`;
        const res = await this.getWeather(url);
        console.log(res);
        return this._transformWeatherCurrently(res.currently);
    }

    async _transformWeatherCurrently(weather) {
        const {temperature, summary, uvIndex, humidity, apparentTemperature, icon, pressure, windSpeed} = weather;
        return {
            temperature: this.fToCelsius(temperature),
            summary: this.toLowerCase(summary),
            uvIndex,
            humidity: humidity*100,
            apparentTemperature: this.fToCelsius(apparentTemperature),
            icon,
            pressure: Math.floor(pressure*0.750063) - 16,
            windSpeed: Math.floor(windSpeed*0.45)
        }
    }

    tempPlus = (temp) => {
        let toArray = temp.toString().split('');
        toArray.unshift('+');
        return toArray.join("")
    };

    fToCelsius = (temp) => {
        let celsiusTemp = Math.floor((temp - 32) * 5 / 9);
        return celsiusTemp > 0 ? this.tempPlus(celsiusTemp) : celsiusTemp;
    };

    toLowerCase = (string) => {
        let lowString = string.toLowerCase();
        return lowString[0].toUpperCase() + lowString.slice(1);
    };
}
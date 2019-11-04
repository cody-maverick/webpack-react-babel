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

    async getWeatherMain(lat, lon) {
        let url = `/${lat},${lon}`;
        const res = await this.getWeather(url);
        console.log(res);
        return res
    }

    async getWeatherCurrently(lat, lon) {
        let res = await this.getWeatherMain(lat, lon);
        return this._transformWeatherCurrently(res.currently);
    }

    async getWeatherHourly(lat, lon) {
        let res = await this.getWeatherMain(lat, lon);
        return this._transformWeatherHourly(res.hourly.data);
    }

    async getWeatherDaily(lat, lon) {
        let res = await this.getWeatherMain(lat, lon);
        return this._transformWeatherDaily(res.daily.data);
    }

    async _transformWeatherDaily(data) {
        return data.map(({time, summary, temperatureMax, temperatureMin, icon})=>{
            return {
                time,
                summary,
                temperatureMax,
                temperatureMin,
                icon
            }
        })
    }

    async _transformWeatherHourly(data) {
        return data.map(({time, icon, temperature}, i) => {
            return {
                time: i === 0 ? 'Сейчас' : this.unixToTimestamp(time),
                date: this.unixToTimestamp(time) === '00:00' ? this.getNewDate(time) : '',
                icon,
                temperature: this.fToCelsius(temperature)
            }
        });
    }

    async _transformWeatherCurrently({temperature, summary, uvIndex, humidity, apparentTemperature, icon, pressure, windSpeed}) {
        return {
            temperature: this.fToCelsius(temperature),
            summary: this.toLowerCase(summary),
            uvIndex,
            humidity: humidity * 100,
            apparentTemperature: this.fToCelsius(apparentTemperature),
            icon,
            pressure: Math.floor(pressure * 0.750063) - 16,
            windSpeed: Math.floor(windSpeed * 0.45)
        }
    }

    unixToTimestamp = (unix) => {
        let date = new Date(unix * 1000);
        let hours = ('0' + date.getHours()).substr(-2);
        let minutes = ('0' + date.getMinutes()).substr(-2);
        return hours + ':' + minutes;
    };

    getNewDate = (unix) => {
        let date = new Date(unix * 1000);
        return `${date.getDate()}.${date.getMonth() + 1}`;
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
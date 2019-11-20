export default class TransformWeatherData {


    _transformWeatherInTime({summary}) {
        return {
            summary: summary ? this.toLowerCase(summary) : 'Ошибка получения данных'
        }
    };

    _transformWeatherCurrently({temperature, summary, uvIndex, humidity, apparentTemperature, icon, pressure, windSpeed}) {
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
    };

    _transformWeatherHourly(data) {
        return data.map(({time, icon, temperature}, i) => {
            return {
                time: i === 0 ? 'Сейчас' : this.unixToTimestamp(time),
                date: this.unixToTimestamp(time) === '00:00' ? this.getNewDate(time) : '',
                icon,
                temperature: this.fToCelsius(temperature)
            }
        });
    }

    _transformWeatherDaily(data) {
        return data.map(({
                             time, temperatureMax, temperatureMin, ...items
                         }) => {
            return {
                timeUnix: time,
                time: this.getDayForDaily(time),
                weekday: this.getWeekdayForDaily(time),
                temperatureMax: this.fToCelsius(temperatureMax),
                temperatureMin: this.fToCelsius(temperatureMin),
                ...items
            }
        })
    }

    getDayForDaily = (unix) => {
        let date = new Date(unix * 1000);
        return date.toLocaleString('ru', {day: 'numeric', month: 'long'})
    };

    getWeekdayForDaily = (unix) => {
        let date = new Date(unix * 1000);
        return date.toLocaleString('ru', {weekday: 'long'})
    };

    unixToTimestamp = (unix) => {
        let date = new Date(unix * 1000);
        let hours = ('0' + date.getHours()).substr(-2);
        let minutes = ('0' + date.getMinutes()).substr(-2);
        return hours + ':' + minutes;
    };

    getNewDate = (unix) => {
        let date = new Date(unix * 1000);
        return `${date.getDate()}.${date.getMonth() + 1}`;
    };

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
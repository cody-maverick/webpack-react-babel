import {Link} from 'react-router-dom'

import WeatherIcon from '../weather-icon/weather-icon';
import WeatherPrecip from '../weather-precip/weather-precip';

import './weather-daily.less';

const WeatherDaily = ({weatherDaily}) => {

    console.log(weatherDaily);

    const dailyWeather = weatherDaily.map(({timeUnix, time, weekday, temperatureMin, temperatureMax, icon, summary, precipType, precipProbability, ...items}, i) => {
        console.log(precipType)
        return (
            <Link
                className="weather-daily__item weather-daily-item"
                to={{
                    pathname: `/weather/detailed_weather`,
                    state: {
                        weatherDaily: weatherDaily[i],
                        time: i === 0 ? 'Сегодня' : i === 1 ? 'Завтра' : weekday
                    }
                }}>
                <div className="weather-daily-item__date">
                    {time}<br/>
                    <span>{i === 0 ? 'Сегодня' : i === 1 ? 'Завтра' : weekday}</span>
                </div>

                <div className="weather-daily-item__icon">
                    <WeatherIcon icon={icon}/>
                    <div className="weather-daily-item__precip">
                        <WeatherPrecip precipName={precipType}/> {precipProbability}%
                    </div>
                </div>


                <div className="weather-daily-item__temperature weather-daily-temperature">
                    <span className="weather-daily-temperature__max">
                        {temperatureMax}&deg;
                    </span>
                    <span className="weather-daily-temperature__min">
                        {temperatureMin}&deg;
                    </span>
                </div>
            </Link>
        )
    })

    return (
        <ul className="weather-daily">
            {dailyWeather}
        </ul>
    )
}

export default WeatherDaily;
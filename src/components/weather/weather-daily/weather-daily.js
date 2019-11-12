import {Link} from 'react-router-dom'

import WeatherIcon from '../weather-icon/weather-icon';

import './weather-daily.less';

const WeatherDaily = ({weatherDaily, placeCoordinate}) => {

    const dailyWeather = weatherDaily.map(({timeUnix, time, weekday, temperatureMin, temperatureMax, icon, summary}, i) => {
        return (
            <Link
                className="weather-daily__item weather-daily-item"
                to={{
                    pathname: `/weather/detailed_weather`,
                    state: {
                        placeCoordinate: placeCoordinate,
                        timeUnix
                    }
                }}>
                <div className="weather-daily-item__date">
                    {time}<br/>
                    <span>{i === 0 ? 'Сегодня' : i === 1 ? 'Завтра' : weekday}</span>
                </div>
                <WeatherIcon icon={icon}/>
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
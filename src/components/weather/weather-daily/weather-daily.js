import WeatherIcon from '../weather-icon/weather-icon';

import './weather-daily.less';

const WeatherDaily = ({weatherDaily}) => {


    const dailyWeather = weatherDaily.map(({time, weekday, temperatureMin, temperatureMax, icon, summary}, i) => {
        return (

            <li className="weather-daily__item weather-daily-item">
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
            </li>
        )
    })

    return (
        <ul className="weather-daily">
            {dailyWeather}
        </ul>
    )
}

export default WeatherDaily;
import './weather-daily.less';

const WeatherDaily = ({weatherDaily}) => {


    const dailyWeather = weatherDaily.map(({time, weekday, temperatureMin, temperatureMax, icon, summary}, i) => {
        return (

            <li className="weather-daily__item weather-daily-item">
                <div className="weather-daily-item__date">
                    {time}<br/>
                    <span>{i === 0 ? 'Сегодня' : weekday}</span>
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
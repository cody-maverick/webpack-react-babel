import React from 'react';

const WeatherInn = ({weather}) => {
    let {temperature, summary, uvIndex} = weather;

    return (
        <div className="weather">
            <div className="weather__main weather-main">
                <span className="weather-main__state">
                    {summary}&nbsp;
                </span>
                <span className="weather-main__temperature">
                    {temperature} &deg;C
                </span>
            </div>

            <div className="weather__temperature">
                Температура {temperature} &deg;C;
            </div>
            <div className="weather__cloudly">
                {summary}
            </div>
            <div className="weather__uvindex">
                Индекс УФ {uvIndex}
            </div>
        </div>
    )
};


export default WeatherInn
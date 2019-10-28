import React from 'react';

import WeatherIcon from '../weather-icon';

import './weather-inn.less'

const WeatherInn = ({weather}) => {
    let {temperature, summary, uvIndex} = weather;

    return (
        <div className="weather">
            <div className="weather__main weather-main">
                <div className="weather-main__temperature">
                    <span className="weather-main-temperature">{temperature}&deg;</span>
                    <WeatherIcon/>
                </div>

                <div className="weather-main__state">
                    {summary}&nbsp;
                </div>

            </div>

            <div className="weather__uvindex">
                Индекс УФ {uvIndex}
            </div>
        </div>
    )
};


export default WeatherInn
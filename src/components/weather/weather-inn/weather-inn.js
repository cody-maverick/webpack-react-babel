import React from 'react';

import WeatherIcon from '../weather-icon';

import './weather-inn.less'

const WeatherInn = ({weather, place}) => {
    let {temperature, summary, uvIndex, humidity, apparentTemperature, icon} = weather;

    return (
        <div className="weather">
            <h3 className="weather__place">
                {place}
            </h3>
            <div className="weather__main weather-main">

                <div className="weather-main__temperature">
                    <span className="weather-main-temperature">{temperature}&deg;</span>
                    <WeatherIcon icon={icon}/>
                </div>
                <div className="weather-main__state">
                    {summary}&nbsp;
                </div>
                <div classNames="weather-main__apparent">
                    Ощущается как: {apparentTemperature}&deg;
                </div>
            </div>

            <div className="weather__uvindex">
                Индекс УФ: {uvIndex}
            </div>
            <div className="weather__humidity">
                Влажность воздуха: {humidity}%
            </div>
        </div>
    )
};


export default WeatherInn
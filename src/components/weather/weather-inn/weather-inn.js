import React from 'react';

import WeatherIcon from '../weather-icon';

import './weather-inn.less'

const WeatherInn = ({weather, place}) => {
    let {temperature, summary, uvIndex, humidity, apparentTemperature, icon} = weather;
    let {mainCityName, mainCityNameDescription} = place

    const accordionSwitch = (e) => {
        if (!e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.add('active')
            e.currentTarget.nextSibling.style.height = 'auto';
            console.log(e.currentTarget)
        } else {
            e.currentTarget.classList.remove('active')
            e.currentTarget.nextSibling.style.height = '0';
        }
    }

    return (
        <div className="weather">
            <h3 className="weather__place weather-place">
                <div className="weather-place__title" onClick={(e) => accordionSwitch(e)}>
                    {mainCityName}
                </div>
                <div className="weather-place__description">
                    {mainCityNameDescription}
                </div>
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
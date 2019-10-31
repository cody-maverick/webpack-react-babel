import React from 'react';

import WeatherIcon from '../weather-icon';

import './weather-inn.less'

const WeatherInn = ({weather, place}) => {
    let {temperature, summary, uvIndex, humidity, apparentTemperature, icon, windSpeed, pressure} = weather;
    let {mainCityName, mainCityNameDescription} = place

    const accordionSwitch = (e) => {
        if (!e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.add('active')

        } else {
            e.currentTarget.classList.remove('active')
        }
    }

    return (
        <div className="weather">
            <h3 className="weather__place weather-place" onClick={(e) => accordionSwitch(e)}>
                <i className="weather-place__place-icon"></i>
                <div className="weather-place__title">
                    {mainCityName}
                </div>
                <div className="weather-place__description">
                    {mainCityNameDescription}
                </div>
            </h3>
            <div className="weather__main weather-main">
                <div className="weather-main__left">
                    <div className="weather-main__temperature">
                        <span className="weather-main-temperature">{temperature}&deg;</span>
                        <WeatherIcon icon={icon}/>
                    </div>
                    <div className="weather-main__state">
                        {summary}&nbsp;
                    </div>
                    <div className="weather-main__apparent">
                        Ощущается как: {apparentTemperature}&deg;
                    </div>
                </div>
                <div className="weather-main__right">
                    <ul className="weather-list">
                        <li className="weather-list__item">
                            <i className="wi wi-humidity"></i> <span>{humidity}%</span>
                        </li>
                        <li className="weather-list__item">
                            <i className="wi wi-strong-wind"></i> <span>{windSpeed} м/с</span>
                        </li>
                        <li className="weather-list__item">
                            <i className="wi wi-barometer"></i> <span>{pressure} мм рт. ст.</span>
                        </li>
                    </ul>
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
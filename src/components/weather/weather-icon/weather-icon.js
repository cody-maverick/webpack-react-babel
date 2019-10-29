import React from 'react';

import './weather-icon.less'

const WeatherIcon = ({icon}) => {
    let classNames = 'wi wi-icon-main ';

    switch (icon) {
        case 'clear-day':
            classNames = classNames + 'wi-day-sunny';
            break;
        case 'clear-night':
            classNames = classNames + 'wi-night-clear';
            break;
        case 'rain':
            classNames = classNames + 'wi-rain';
            break;
        case 'snow':
            classNames = classNames + 'wi-snow';
            break;
        case 'sleet':
            classNames = classNames + 'wi-sleet';
            break;
        case 'wind':
            classNames = classNames + 'wi-strong-wind';
            break;
        case 'fog':
            classNames = classNames + 'wi-fog';
            break;
        case 'cloudy':
            classNames = classNames + 'wi-cloudy';
            break;
        case 'partly-cloudy-day':
            classNames = classNames + 'wi-day-cloudy';
            break;
        case 'partly-cloudy-night':
            classNames = classNames + 'wi-night-alt-cloudy';
            break;

    }


    return (
        <i className={classNames}>

        </i>
    )
};

export default WeatherIcon;
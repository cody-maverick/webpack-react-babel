import './weather-precip.less';

const WeatherPrecip = ({precipName}) => {

    let precip = precipName === 'snow' ? 'снег' :
        precipName === 'rain' ? 'дождь' : '';

    return (
        <div className="weather-precip">
            {precip}
        </div>
    )
};

export default WeatherPrecip;
import WeatherIcon from '../weather-icon';

import ReactOwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './weather-hourly.less';

const WeatherHourly = ({weatherHourly}) => {

    let hourlyWeather = weatherHourly.map(({time, icon, summary, temperature}) => {
        return (
            <div className="weather-hourly__item weather-hourly-item">
                <div className="weather-hourly-item__time">
                    {time}
                </div>
                <WeatherIcon icon={icon}/>
                <div className="weather-hourly-item__summary">
                    {summary}
                </div>
                <div className="weather-hourly-item__temperature">
                    {temperature} &deg;
                </div>
            </div>
        )
    });

    return (
        <div className="weather-hourly">
            <ReactOwlCarousel
                className="owl-theme"
                margin={10}
                freeDrag={false}
                items={4}
                dots={false}
            >
                {hourlyWeather}
            </ReactOwlCarousel>
        </div>
    )
};

export default WeatherHourly;
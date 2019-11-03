import WeatherIcon from '../weather-icon';

import ReactOwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './weather-hourly.less';

const WeatherHourly = ({weatherHourly}) => {

    console.log(weatherHourly)

    let hourlyWeather = weatherHourly.map(({time, icon, temperature, date}) => {
        return (
            <div className="weather-hourly__item weather-hourly-item">
                <div className="weather-hourly-item__time">
                    {time}<br></br><div className="weather-hourly-item__date">{date}</div>
                </div>
                <WeatherIcon icon={icon}/>
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
                items={5}
                dots={false}
                responsive={{
                    0: {
                        items: 3
                    },
                    320: {
                        items: 4
                    },
                    533: {
                        items: 5
                    }
                }}
            >
                {hourlyWeather}
            </ReactOwlCarousel>
        </div>
    )
};

export default WeatherHourly;
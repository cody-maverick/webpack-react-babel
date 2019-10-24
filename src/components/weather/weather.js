import React, {Component} from 'react';

export default class Weather extends Component {
    constructor(props) {
        super(props);
    }

    farengeitToCilsiy(temp) {
        const tempC = (temp - 32) * 5 / 9;
        return Math.floor(tempC);
    }

    render() {

        console.log('State weather', this.props.weather);

        const {temperature, summary, uvIndex} = this.props.weather;


        return (
            <div className="weather">
                <div className="weather__temperature">
                    Температура {this.farengeitToCilsiy(temperature)} C;
                </div>
                <div className="weather__cloudly">
                    {summary}
                </div>
                <div className="weather__uvindex">
                    Индекс УФ {uvIndex}
                </div>
            </div>
        )
    }
}
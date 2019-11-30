const DetailedWeatherInn = ({weatherInTime}) => {

    console.log(weatherInTime);

    return (
        <div className="detailed-weather-inn">
            {weatherInTime.summary}
        </div>
    )
}

export default DetailedWeatherInn
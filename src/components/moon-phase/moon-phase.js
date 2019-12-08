const MoonPhase = (props) => {
    let {phase} = props;

    let classNames = 'wi ';
    let moonText = '';

    switch (true) {
        case (phase === 0) :
            classNames = classNames + 'wi-moon-new';
            moonText = 'Новолуние';
            break;
        case (phase > 0 && phase <= 0.1) :
            classNames = classNames + 'wi-moon-waxing-crescent-3';
            moonText = 'Растущая луна';
            break;
        case (phase > 0.1 && phase <= 0.2) :
            classNames = classNames + 'wi-moon-waxing-crescent-5';
            moonText = 'Растущая луна';
            break;
        case (phase > 0.2 && phase <= 0.25) :
            classNames = classNames + 'wi-moon-first-quarter';
            moonText = 'Растущая луна';
            break;
        case (phase > 0.25 && phase <= 0.3) :
            classNames = classNames + 'wi-moon-waxing-gibbous-1';
            moonText = 'Растущая луна';
            break;
        case (phase > 0.3 && phase <= 0.4) :
            classNames = classNames + 'wi-moon-waxing-gibbous-3';
            moonText = 'Растущая луна';
            break;
        case (phase > 0.4 && phase <= 0.45) :
            classNames = classNames + 'wi-moon-waxing-gibbous-5';
            moonText = 'Растущая луна';
            break;
        case (phase > 0.45 && phase <= 0.5) :
            classNames = classNames + 'wi-moon-full';
            moonText = 'Полнолуние';
            break;
        case (phase > 0.5 && phase <= 0.6) :
            classNames = classNames + 'wi-moon-waning-gibbous-2';
            moonText = 'Убывающая луна';
            break;
        case (phase > 0.6 && phase <= 0.65) :
            classNames = classNames + 'wi-moon-waning-gibbous-4';
            moonText = 'Убывающая луна';
            break;
        case (phase > 0.65 && phase <= 0.75) :
            classNames = classNames + 'wi-moon-third-quarter';
            moonText = 'Убывающая луна';
            break;
        case (phase > 0.75 && phase <= 0.8) :
            classNames = classNames + 'wi-moon-waning-crescent-1';
            moonText = 'Убывающая луна';
            break;
        case (phase > 0.8 && phase <= 0.85) :
            classNames = classNames + 'wi-moon-waning-crescent-3';
            moonText = 'Убывающая луна';
            break;
        case (phase > 0.85 && phase <= 0.9) :
            classNames = classNames + 'wi-moon-waning-crescent-4';
            moonText = 'Убывающая луна';
            break;
        case (phase > 0.9 && phase <= 0.99) :
            classNames = classNames + 'wi-moon-waning-crescent-6';
            moonText = 'Убывающая луна';
            break;
    }

    return (
        <div class="moon-info">
            <i className={classNames}></i>
            <span className="moon-info__text">
                {moonText}
            </span>
        </div>
    )
}

export default MoonPhase
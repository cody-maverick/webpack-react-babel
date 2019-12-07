const MoonPhase = (props) => {

    console.log(props);
    let {phase} = props;

    let classNames = 'wi ';

    switch (true) {
        case (phase === 0) :
            classNames = classNames + 'wi-moon-alt-new';
            break;
        case (phase > 0 && phase < 0.25) :
            classNames = classNames + 'wi-moon-alt-waxing-crescent-2';
            break;
        case (phase > 0.25 && phase < 0.5) :
            classNames = classNames + 'wi-moon-alt-waxing-crescent-5';
            break;
        case (phase > 0.5 && phase < 0.75) :
            classNames = classNames + 'wi-moon-alt-full';
            break;
        case (phase > 0.75 && phase < 1) :
            classNames = classNames + 'wi-moon-alt-waning-crescent-2';
            break;
    }

    return (
        <i className={classNames}>

        </i>
    )
}

export default MoonPhase
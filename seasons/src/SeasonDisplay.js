import React from 'react';
import "./SeasonDisplay.css"

const seasonConfig = {
    summer: {
        text: "Lets hit the beach",
        iconName: "sun"
    },
    winter: {
        text: "Burr, It's chilly",
        iconName: "snowflake"
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    }
}

const SeasonDisplay = (props) => {
    const seasonName = getSeason(props.lat, new Date().getMonth())
    const {text, iconName} = seasonConfig[seasonName];

    return <div className={`season-display ${seasonName}`}>
        <i className={`icon-left massive ${iconName} icon`}/>
        <h1>Season: {text}</h1>
        <i className={`icon-right massive ${iconName} icon`}/>
    </div>;
};

export default SeasonDisplay;

import React from 'react';

import './LedStrip.css';

const getLED = (led, i) => {
    // led = {r: 222, g: 124, b: 234, w: 100}
    // Are there any colors?
    if (Object.values(led).length < 0) return <></>;

    // Total brightness
    const totalBrightness = Object.values(led).reduce((a, c) => a + c);

    return (
        <div className="led" key={i} index={i}>
            {Object.entries(led).map((val, i) => {
                const intensity = val[1];
                const opacity = (1 / totalBrightness) * intensity;
                return (
                    <div
                        key={i}
                        className={val[0]}
                        style={{ opacity: `${opacity}` }}
                    />
                );
            })}
        </div>
    );
};

export default props => {
    const { data } = props;
    let leds = [];

    if (data.mode === 'fill') {
        data.data.forEach((val, i) => {
            leds.push(getLED(val, i));
        });
    }

    // Default empty response
    if (leds.length > 0)
        return (
            <div className="ledStrip" onMouseOver={props.onMouseOver}>
                {leds}
            </div>
        );
    return <></>;
};

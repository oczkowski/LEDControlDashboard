// Importing react
import React from 'react';
// Styling
import './formatting.css';

// Functions
export const getStatus = (status, isNew = false) => {
    let statusString = capitalize(status);
    let style = {
        padding: '2px',
        width: '60px',
        textAlign: 'center',
        backgroundColor: '#db2f00',
        color: 'white',
        borderRadius: '10px',
        fontWeight: '450',
        fontFamily: "'Inconsolata', monospace",
        userSelect: 'none'
    };

    if (status === 'online') style.backgroundColor = '#41b300';
    if (status === 'reboot') style.backgroundColor = '#0278cc';
    if (isNew) {
        style.width = '95px';
        statusString += ' (NEW)';
    }

    return (
        <div style={style} alt={status}>
            {statusString}
        </div>
    );
};

export const capitalize = string =>
    string.charAt(0).toUpperCase() + string.slice(1);

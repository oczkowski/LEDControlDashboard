import React from 'react';
import './Text.css';

const Text = props => {
    var className = ``;
    if (props.h || props.header) className += `header`;
    return <span className={className}>{props.children}</span>;
};

export default Text;

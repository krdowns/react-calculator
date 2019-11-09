import React from 'react';
import './ClearButton.css';

export const ClearButtono = (props) => (
    <div className="clear-btn" onClick={props.handleClear}>
        {props.children}
    </div>
)
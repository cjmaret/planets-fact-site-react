import React from 'react';
import './Facts.css';

function Facts() {
    return (
        <section className="facts">
            <div className="facts__card">
                <p className="facts__title">Rotation Time</p>
                <p className="facts__value">58.6 Days</p>
            </div>
            <div className="facts__card">
                <p className="facts__title">Revolution Time</p>
                <p className="facts__value">87.97 Days</p>
            </div>
            <div className="facts__card">
                <p className="facts__title">Radius</p>
                <p className="facts__value">2,439.7 KM</p>
            </div>
            <div className="facts__card">
                <p className="facts__title">Average Temp.</p>
                <p className="facts__value">430°c</p>
            </div>
        </section>
    )
}

export default Facts;
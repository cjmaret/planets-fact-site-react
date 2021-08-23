import React from 'react';
import './Lead.css';
import '../facts/Facts.css';

function Lead(props) {

    const [buttonState, setButtonState] = React.useState('overview');
    const [mobileWidth, setMobileWidth] = React.useState(false);

    React.useEffect(() => {
        function checkWidth() {
            const windowWidth = window.matchMedia('(max-width: 605px)');
            if (windowWidth.matches) {
                setMobileWidth(true);
            } else {
                setMobileWidth(false);
            }
        }
        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    });

    return (
        <>
            <section className="lead">
                <div className="lead__image-group lead__image-group_type_normal">
                    <img className={`lead__image ${props.desktopImageClass}`} src={buttonState === 'internal' ? props.internalPlanetImage : props.planetImage} alt={buttonState === 'internal' ? props.altInternal : props.altOverview} />
                    {buttonState === 'geology' && <img className="lead__geology-image" src={props.geologyImage} alt={props.altGeology} />}
                </div>
                <div className="lead__info-group">
                    <div className="lead__image-group lead__image-group_type_mobile">
                        <img className={`lead__image ${props.mobileImageClass}`} src={buttonState === 'internal' ? props.internalPlanetImage : props.planetImage} alt={buttonState === 'internal' ? props.altInternal : props.altOverview} />
                        {buttonState === 'geology' && <img className="lead__geology-image" src={props.geologyImage} alt={props.altGeology} />}
                    </div>
                    <div className="lead__info-text">
                        <h1 className="lead__title">{props.title}</h1>
                        <p className="lead__description">{buttonState === 'overview' ? props.overviewParagraph : (buttonState === "internal" ? props.internalParagraph : props.geologyParagraph)}</p>
                        <p className="lead__source">Source: <a className="lead__source-link"
                            href={buttonState === "overview" ? props.overviewWikipediaLink : (buttonState === "internal" ? props.internalWikipediaLink : props.geologyWikipediaLink)} target="_blank" rel="noreferrer">Wikipedia</a></p>
                    </div>
                    <div className="lead__button-group">
                        <button className="lead__button lead__button_type_overview" style={mobileWidth ? {borderBottom: buttonState==='overview' && `4px solid ${props.backgroundColor}`} : {backgroundColor: buttonState === 'overview' && props.backgroundColor}} onClick={() => setButtonState('overview')}>
                            <p className="lead__button-number">01</p>
                            <p className="lead__button-text">{mobileWidth ? "Overview" : "Overview"}</p>
                        </button>
                        <button className="lead__button lead__button_type_internal" style={mobileWidth ? {borderBottom: buttonState==='internal' && `4px solid ${props.backgroundColor}`} : {backgroundColor: buttonState === 'internal' && props.backgroundColor}} onClick={() => setButtonState('internal')}>
                            <p className="lead__button-number">02</p>
                            <p className="lead__button-text">{mobileWidth ? "Structure" : "Internal Structure"}</p>
                        </button>
                        <button className="lead__button lead__button_type_geology" style={mobileWidth ? {borderBottom: buttonState==='geology' && `4px solid ${props.backgroundColor}`} : {backgroundColor: buttonState === 'geology' && props.backgroundColor}} onClick={() => setButtonState('geology')}>
                            <p className="lead__button-number">03</p>
                            <p className="lead__button-text">{mobileWidth ? "Surface" : "Surface Geology"}</p>
                        </button>
                    </div>
                </div>
            </section>
            <section className="facts">
                <div className="facts__card">
                    <p className="facts__title">Rotation Time</p>
                    <p className="facts__value">{props.rotationTime}</p>
                </div>
                <div className="facts__card">
                    <p className="facts__title">Revolution Time</p>
                    <p className="facts__value">{props.revolutionTime}</p>
                </div>
                <div className="facts__card">
                    <p className="facts__title">Radius</p>
                    <p className="facts__value">{props.radius}</p>
                </div>
                <div className="facts__card">
                    <p className="facts__title">Average Temp.</p>
                    <p className="facts__value">{props.averageTemp}</p>
                </div>
            </section>
        </>
    )
}

export default Lead;
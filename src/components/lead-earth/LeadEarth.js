import React from 'react';
import Lead from '../lead/Lead';
import EarthPlanetImage from '../../images/earth/planet-earth.svg';
import EarthInternalImage from '../../images/earth/planet-earth-internal.svg';
import EarthGeologyImage from '../../images/earth/geology-earth.png';

function LeadEarth() {
    return (
        <Lead 
            planetImage={EarthPlanetImage} 
            internalPlanetImage={EarthInternalImage} 
            geologyImage={EarthGeologyImage} 
            altOverview="Earth Planet"
            altInternal="Earth Planet Internal View"
            altGeology="Earth Planet Geology View" 
            title="Earth"
            overviewParagraph="Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."
            internalParagraph="Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle."
            geologyParagraph="The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors."
            desktopImageClass="lead__image_type_earth"
            mobileImageClass="lead__image_mobile_earth" 
            overviewWikipediaLink="https://en.wikipedia.org/wiki/earth"
            internalWikipediaLink="https://en.wikipedia.org/wiki/earth#Internal_structure"
            geologyWikipediaLink="https://en.wikipedia.org/wiki/Earth#Surface"
            rotationTime = "0.99 Days"
            revolutionTime = "365.26 Days"
            radius = "6,371 KM"
            averageTemp = "16°c"
            backgroundColor="#6D2ED5"
        >

        </Lead>
    )
}

export default LeadEarth;
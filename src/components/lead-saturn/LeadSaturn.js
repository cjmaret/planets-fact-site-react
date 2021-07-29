import React from 'react';
import Lead from '../lead/Lead';
import SaturnPlanetImage from '../../images/saturn/planet-saturn.svg';
import SaturnInternalImage from '../../images/saturn/planet-saturn-internal.svg';
import SaturnGeologyImage from '../../images/saturn/geology-saturn.png';

function LeadSaturn() {
    return (
        <Lead 
            planetImage={SaturnPlanetImage} 
            internalPlanetImage={SaturnInternalImage} 
            geologyImage={SaturnGeologyImage} 
            altOverview="Saturn Planet"
            altInternal="Saturn Planet Internal View"
            altGeology="Saturn Planet Geology View" 
            title="Saturn"
            overviewParagraph="Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth."
            internalParagraph="Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass."
            geologyParagraph="The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust."
            desktopImageClass="lead__image_type_saturn"
            mobileImageClass="lead__image_mobile_saturn" 
            overviewWikipediaLink="https://en.wikipedia.org/wiki/Saturn"
            internalWikipediaLink="https://en.wikipedia.org/wiki/Saturn#Internal_structure"
            geologyWikipediaLink="https://en.wikipedia.org/wiki/Saturn#Atmosphere"
            rotationTime = "10.8 Hours"
            revolutionTime = "29.46 Years"
            radius = "58,232 KM"
            averageTemp = "-138°c"
            backgroundColor="#CD5120"
        >

        </Lead>
    )
}

export default LeadSaturn;
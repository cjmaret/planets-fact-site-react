import React from 'react';
import Lead from '../lead/Lead';
import JupiterPlanetImage from '../../images/jupiter/planet-jupiter.svg';
import JupiterInternalImage from '../../images/jupiter/planet-jupiter-internal.svg';
import JupiterGeologyImage from '../../images/jupiter/geology-jupiter.png';

function LeadJupiter() {
    return (
        <Lead 
            planetImage={JupiterPlanetImage} 
            internalPlanetImage={JupiterInternalImage} 
            geologyImage={JupiterGeologyImage} 
            altOverview="Jupiter Planet"
            altInternal="Jupiter Planet Internal View"
            altGeology="Jupiter Planet Geology View" 
            title="Jupiter"
            overviewParagraph="Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun."
            internalParagraph="When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core."
            geologyParagraph="The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665."
            desktopImageClass="lead__image_type_jupiter"
            mobileImageClass="lead__image_mobile_jupiter" 
            overviewWikipediaLink="https://en.wikipedia.org/wiki/Jupiter"
            internalWikipediaLink="https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
            geologyWikipediaLink="https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"
            rotationTime = "9.93 Hours"
            revolutionTime = "11.86 Years"
            radius = "69,911 KM"
            averageTemp = "-108°c"
            backgroundColor="#D83A34"
        >

        </Lead>
    )
}

export default LeadJupiter;
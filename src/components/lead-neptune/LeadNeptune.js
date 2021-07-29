import React from 'react';
import Lead from '../lead/Lead';
import NeptunePlanetImage from '../../images/neptune/planet-neptune.svg';
import NeptuneInternalImage from '../../images/neptune/planet-neptune-internal.svg';
import NeptuneGeologyImage from '../../images/neptune/geology-neptune.png';

function LeadNeptune() {
    return (
        <Lead 
            planetImage={NeptunePlanetImage} 
            internalPlanetImage={NeptuneInternalImage} 
            geologyImage={NeptuneGeologyImage} 
            altOverview="Neptune Planet"
            altInternal="Neptune Planet Internal View"
            altGeology="Neptune Planet Geology View" 
            title="Neptune"
            overviewParagraph="Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus."
            internalParagraph="Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."
            geologyParagraph="Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
            desktopImageClass="lead__image_type_neptune"
            mobileImageClass="lead__image_mobile_neptune" 
            overviewWikipediaLink="https://en.wikipedia.org/wiki/Neptune"
            internalWikipediaLink="https://en.wikipedia.org/wiki/Neptune#Internal_structure"
            geologyWikipediaLink="https://en.wikipedia.org/wiki/Neptune#Atmosphere"
            rotationTime = "16.08 Hours"
            revolutionTime = "164.79 Years"
            radius = "24,622 KM"
            averageTemp = "-201°c"
            backgroundColor="#2D68F0"
        >

        </Lead>
    )
}

export default LeadNeptune;
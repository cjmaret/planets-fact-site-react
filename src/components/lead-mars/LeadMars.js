import React from 'react';
import Lead from '../lead/Lead';
import MarsPlanetImage from '../../images/mars/planet-mars.svg';
import MarsInternalImage from '../../images/mars/planet-mars-internal.svg';
import MarsGeologyImage from '../../images/mars/geology-mars.png';

function LeadMars() {
    return (
        <Lead 
            planetImage={MarsPlanetImage} 
            internalPlanetImage={MarsInternalImage} 
            geologyImage={MarsGeologyImage} 
            altOverview="Mars Planet"
            altInternal="Mars Planet Internal View"
            altGeology="Mars Planet Geology View" 
            title="Mars"
            overviewParagraph="Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'."
            internalParagraph="Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."
            geologyParagraph="Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."
            desktopImageClass="lead__image_type_mars"
            mobileImageClass="lead__image_mobile_mars" 
            overviewWikipediaLink="https://en.wikipedia.org/wiki/Mars"
            internalWikipediaLink="https://en.wikipedia.org/wiki/Mars#Internal_structure"
            geologyWikipediaLink="https://en.wikipedia.org/wiki/Mars#Surface"
            rotationTime = "1.03 Days"
            revolutionTime = "1.88 Years"
            radius = "3,389.5 KM"
            averageTemp = "-28°c"
            backgroundColor="#D14C32"
        >

        </Lead>
    )
}

export default LeadMars;
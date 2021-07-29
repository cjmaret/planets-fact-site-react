import React from 'react';
import Lead from '../lead/Lead';
import VenusPlanetImage from '../../images/venus/planet-venus.svg';
import VenusInternalImage from '../../images/venus/planet-venus-internal.svg';
import VenusGeologyImage from '../../images/venus/geology-venus.png';

function LeadVenus() {
    return (
        <Lead 
            planetImage={VenusPlanetImage} 
            internalPlanetImage={VenusInternalImage} 
            geologyImage={VenusGeologyImage} 
            altOverview="Venus Planet"
            altInternal="Venus Planet Internal View"
            altGeology="Venus Planet Geology View" 
            title="Venus"
            overviewParagraph="Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight."
            internalParagraph="The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate."
            geologyParagraph="Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii."
            desktopImageClass="lead__image_type_venus"
            mobileImageClass="lead__image_mobile_venus" 
            overviewWikipediaLink="https://en.wikipedia.org/wiki/Venus"
            internalWikipediaLink="https://en.wikipedia.org/wiki/Venus#Internal_structure"
            geologyWikipediaLink="https://en.wikipedia.org/wiki/Geology_of_Venus"
            rotationTime = "243 Days"
            revolutionTime = "224.7 Days"
            radius = "6,051.8 KM"
            averageTemp = "471°c"
            backgroundColor="#EDA249"
        >

        </Lead>
    )
}

export default LeadVenus;
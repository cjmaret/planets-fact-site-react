import React from 'react';
import Lead from '../lead/Lead';
import MercuryPlanetImage from '../../images/mercury/planet-mercury.svg';
import MercuryInternalImage from '../../images/mercury/planet-mercury-internal.svg';
import MercuryGeologyImage from '../../images/mercury/geology-mercury.png';

function LeadMercury() {


    return (
        <Lead 
            planetImage={MercuryPlanetImage} 
            internalPlanetImage={MercuryInternalImage} 
            geologyImage={MercuryGeologyImage} 
            altOverview="Mercury Planet"
            altInternal="Mercury Planet Internal View"
            altGeology="Mercury Planet Geology View"  
            title="Mercury"
            overviewParagraph="Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
            internalParagraph="Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
            geologyParagraph="Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
            desktopImageClass="lead__image_type_mercury"
            mobileImageClass="lead__image_mobile_mercury" 
            overviewWikipediaLink="https://en.wikipedia.org/wiki/Mercury_(planet)"
            internalWikipediaLink="https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
            geologyWikipediaLink="https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
            rotationTime = "58.6 Days"
            revolutionTime = "87.97 Days"
            radius = "2,439.7 KM"
            averageTemp = "430°c"
            backgroundColor="#419EBB"
        >

        </Lead>
    )
}

export default LeadMercury;
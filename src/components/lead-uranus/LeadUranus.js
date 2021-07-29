import React from 'react';
import Lead from '../lead/Lead';
import UranusPlanetImage from '../../images/uranus/planet-uranus.svg';
import UranusInternalImage from '../../images/uranus/planet-uranus-internal.svg';
import UranusGeologyImage from '../../images/uranus/geology-uranus.png';

function LeadUranus() {
    return (
        <Lead 
            planetImage={UranusPlanetImage} 
            internalPlanetImage={UranusInternalImage} 
            geologyImage={UranusGeologyImage} 
            altOverview="Uranus Planet"
            altInternal="Uranus Planet Internal View"
            altGeology="Uranus Planet Geology View" 
            title="Uranus"
            overviewParagraph="Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
            internalParagraph="The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses."
            geologyParagraph="The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."
            desktopImageClass="lead__image_type_uranus"
            mobileImageClass="lead__image_mobile_uranus" 
            overviewWikipediaLink="https://en.wikipedia.org/wiki/Uranus"
            internalWikipediaLink="https://en.wikipedia.org/wiki/Uranus#Internal_structure"
            geologyWikipediaLink="https://en.wikipedia.org/wiki/Uranus#Atmosphere"
            rotationTime = "17.2 Hours"
            revolutionTime = "84 Years"
            radius = "25,362 KM"
            averageTemp = "-195°c"
            backgroundColor="#1EC1A2"
        >

        </Lead>
    )
}

export default LeadUranus;
import MercuryPlanetImage from '../images/mercury/planet-mercury.svg';
import MercuryInternalImage from '../images/mercury/planet-mercury-internal.svg';
import MercuryGeologyImage from '../images/mercury/geology-mercury.png';
import VenusPlanetImage from '../images/venus/planet-venus.svg';
import VenusInternalImage from '../images/venus/planet-venus-internal.svg';
import VenusGeologyImage from '../images/venus/geology-venus.png';
import EarthPlanetImage from '../images/earth/planet-earth.svg';
import EarthInternalImage from '../images/earth/planet-earth-internal.svg';
import EarthGeologyImage from '../images/earth/geology-earth.png';
import MarsPlanetImage from '../images/mars/planet-mars.svg';
import MarsInternalImage from '../images/mars/planet-mars-internal.svg';
import MarsGeologyImage from '../images/mars/geology-mars.png';
import JupiterPlanetImage from '../images/jupiter/planet-jupiter.svg';
import JupiterInternalImage from '../images/jupiter/planet-jupiter-internal.svg';
import JupiterGeologyImage from '../images/jupiter/geology-jupiter.png';
import SaturnPlanetImage from '../images/saturn/planet-saturn.svg';
import SaturnInternalImage from '../images/saturn/planet-saturn-internal.svg';
import SaturnGeologyImage from '../images/saturn/geology-saturn.png';
import UranusPlanetImage from '../images/uranus/planet-uranus.svg';
import UranusInternalImage from '../images/uranus/planet-uranus-internal.svg';
import UranusGeologyImage from '../images/uranus/geology-uranus.png';
import NeptunePlanetImage from '../images/neptune/planet-neptune.svg';
import NeptuneInternalImage from '../images/neptune/planet-neptune-internal.svg';
import NeptuneGeologyImage from '../images/neptune/geology-neptune.png';

const PlanetsData = [
    {
        id: '',
        planetImage: MercuryPlanetImage, 
        internalPlanetImage: MercuryInternalImage,
        geologyImage: MercuryGeologyImage, 
        altOverview: "Mercury Planet",
        altInternal: "Mercury Planet Internal View",
        altGeology: "Mercury Planet Geology View",  
        title: "Mercury",
        overviewParagraph: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        internalParagraph: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
        geologyParagraph: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
        desktopImageClass: "lead__image_type_mercury",
        mobileImageClass: "lead__image_mobile_mercury",
        overviewWikipediaLink: "https://en.wikipedia.org/wiki/Mercury_(planet)",
        internalWikipediaLink: "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure",
        geologyWikipediaLink: "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology",
        rotationTime: "58.6 Days",
        revolutionTime: "87.97 Days",
        radius: "2,439.7 KM",
        averageTemp: "430°c",
        backgroundColor: "#419EBB",
    },
    {
        id: 'venus',
        planetImage: VenusPlanetImage, 
        internalPlanetImage: VenusInternalImage,
        geologyImage: VenusGeologyImage, 
        altOverview: "Venus Planet",
        altInternal: "Venus Planet Internal View",
        altGeology: "Venus Planet Geology View",  
        title: "Venus",
        overviewParagraph: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        internalParagraph: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
        geologyParagraph: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
        desktopImageClass: "lead__image_type_venus",
        mobileImageClass: "lead__image_mobile_venus",
        overviewWikipediaLink: "https://en.wikipedia.org/wiki/Venus",
        internalWikipediaLink: "https://en.wikipedia.org/wiki/Venus#Internal_structure",
        geologyWikipediaLink: "https://en.wikipedia.org/wiki/Geology_of_Venus",
        rotationTime: "243 Days",
        revolutionTime: "224.7 Days",
        radius: "6,051.8 KM",
        averageTemp: "471°c",
        backgroundColor: "#EDA249",
    },
    {
        id: 'earth',
        planetImage: EarthPlanetImage, 
        internalPlanetImage: EarthInternalImage,
        geologyImage: EarthGeologyImage, 
        altOverview: "Earth Planet",
        altInternal: "Earth Planet Internal View",
        altGeology: "Earth Planet Geology View",  
        title: "Earth",
        overviewParagraph: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
        internalParagraph: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
        geologyParagraph: "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
        desktopImageClass: "lead__image_type_earth",
        mobileImageClass: "lead__image_mobile_earth",
        overviewWikipediaLink: "https://en.wikipedia.org/wiki/earth",
        internalWikipediaLink: "https://en.wikipedia.org/wiki/earth#Internal_structure",
        geologyWikipediaLink: "https://en.wikipedia.org/wiki/earth#Surface",
        rotationTime: "0.99 Days",
        revolutionTime: "365.26 Days",
        radius: "6,371 KM",
        averageTemp: "16°c",
        backgroundColor: "#6D2ED5",
    },
    {
        id: 'mars',
        planetImage: MarsPlanetImage, 
        internalPlanetImage: MarsInternalImage,
        geologyImage: MarsGeologyImage, 
        altOverview: "Mars Planet",
        altInternal: "Mars Planet Internal View",
        altGeology: "Mars Planet Geology View",  
        title: "Mars",
        overviewParagraph: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",
        internalParagraph: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
        geologyParagraph: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
        desktopImageClass: "lead__image_type_mars",
        mobileImageClass: "lead__image_mobile_mars",
        overviewWikipediaLink: "https://en.wikipedia.org/wiki/Mars",
        internalWikipediaLink: "https://en.wikipedia.org/wiki/Mars#Internal_structure",
        geologyWikipediaLink: "https://en.wikipedia.org/wiki/Mars#Surface",
        rotationTime: "1.03 Days",
        revolutionTime: "1.88 Years",
        radius: "3,389.5 KM",
        averageTemp: "-28°c",
        backgroundColor: "#D14C32",
    },
    {
        id: 'jupiter',
        planetImage: JupiterPlanetImage, 
        internalPlanetImage: JupiterInternalImage,
        geologyImage: JupiterGeologyImage, 
        altOverview: "Jupiter Planet",
        altInternal: "Jupiter Planet Internal View",
        altGeology: "Jupiter Planet Geology View",  
        title: "Jupiter",
        overviewParagraph: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
        internalParagraph: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
        geologyParagraph: "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
        desktopImageClass: "lead__image_type_jupiter",
        mobileImageClass: "lead__image_mobile_jupiter",
        overviewWikipediaLink: "https://en.wikipedia.org/wiki/Jupiter",
        internalWikipediaLink: "https://en.wikipedia.org/wiki/Jupiter#Internal_structure",
        geologyWikipediaLink: "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices",
        rotationTime: "9.93 Days",
        revolutionTime: "11.86 Years",
        radius: "69,911 KM",
        averageTemp: "-108°c",
        backgroundColor: "#D83A34",
    },
    {
        id: 'saturn',
        planetImage: SaturnPlanetImage, 
        internalPlanetImage: SaturnInternalImage,
        geologyImage: SaturnGeologyImage, 
        altOverview: "Saturn Planet",
        altInternal: "Saturn Planet Internal View",
        altGeology: "Saturn Planet Geology View",  
        title: "Saturn",
        overviewParagraph: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
        internalParagraph: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
        geologyParagraph: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
        desktopImageClass: "lead__image_type_saturn",
        mobileImageClass: "lead__image_mobile_saturn",
        overviewWikipediaLink: "https://en.wikipedia.org/wiki/Saturn",
        internalWikipediaLink: "https://en.wikipedia.org/wiki/Saturn#Internal_structure",
        geologyWikipediaLink: "https://en.wikipedia.org/wiki/Saturn#Atmosphere",
        rotationTime: "10.8 Hours",
        revolutionTime: "29.46 Years",
        radius: "58,232 KM",
        averageTemp: "-138°c",
        backgroundColor: "#CD5120",
    },
    {
        id: 'uranus',
        planetImage: UranusPlanetImage, 
        internalPlanetImage: UranusInternalImage,
        geologyImage: UranusGeologyImage, 
        altOverview: "Uranus Planet",
        altInternal: "Uranus Planet Internal View",
        altGeology: "Uranus Planet Geology View",  
        title: "Uranus",
        overviewParagraph: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
        internalParagraph: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
        geologyParagraph: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
        desktopImageClass: "lead__image_type_uranus",
        mobileImageClass: "lead__image_mobile_uranus",
        overviewWikipediaLink: "https://en.wikipedia.org/wiki/Uranus",
        internalWikipediaLink: "https://en.wikipedia.org/wiki/Uranus#Internal_structure",
        geologyWikipediaLink: "https://en.wikipedia.org/wiki/Uranus#Atmosphere",
        rotationTime: "17.2 Hours",
        revolutionTime: "84 Years",
        radius: "25,362 KM",
        averageTemp: "-195°c",
        backgroundColor: "#1EC1A2",
    },
    {
        id: 'neptune',
        planetImage: NeptunePlanetImage, 
        internalPlanetImage: NeptuneInternalImage,
        geologyImage: NeptuneGeologyImage, 
        altOverview: "Neptune Planet",
        altInternal: "Neptune Planet Internal View",
        altGeology: "Neptune Planet Geology View",  
        title: "Neptune",
        overviewParagraph: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
        internalParagraph: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
        geologyParagraph: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
        desktopImageClass: "lead__image_type_neptune",
        mobileImageClass: "lead__image_mobile_neptune",
        overviewWikipediaLink: "https://en.wikipedia.org/wiki/Neptune",
        internalWikipediaLink: "https://en.wikipedia.org/wiki/Neptune#Internal_structure",
        geologyWikipediaLink: "https://en.wikipedia.org/wiki/Neptune#Atmosphere",
        rotationTime: "16.08 Hours",
        revolutionTime: "164.79 Years",
        radius: "24,622 KM",
        averageTemp: "-201°c",
        backgroundColor: "#2D68F0",
    },
];

export default PlanetsData;
const planetData = {
  mercury: {
    name: "mercury",
    overview:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    internal:
      "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    surface:
      "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    source: {
      overview: "https://en.wikipedia.org/wiki/Mercury_(planet)",
      internal:
        "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure",
      surface: "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology",
    },
    information: [
      {
        title: "ROTATION TIME",
        value: "58.6",
        unit: "days",
      },
      {
        title: "REVOLUTION TIME",
        value: "87.97",
        unit: "days",
      },
      {
        title: "radius",
        value: "2,439.7",
        unit: "km",
      },
      {
        title: "AVERAGE TEMP",
        value: "430",
        unit: "°c",
      },
    ],
  },
  venus: {
    name: "VENUS",
    overview:
      "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    internal:
      "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
    surface:
      "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
    source: {
      overview: "https://en.wikipedia.org/wiki/Venus",
      internal: "https://en.wikipedia.org/wiki/Venus#Internal_structure",
      surface: "https://en.wikipedia.org/wiki/Venus#Surface_geology",
    },
    information: [
      {
        title: "ROTATION TIME",
        value: "243",
        unit: "days",
      },
      {
        title: "REVOLUTION TIME",
        value: "224.7",
        unit: "days",
      },
      {
        title: "radius",
        value: "6,051.8",
        unit: "km",
      },
      {
        title: "AVERAGE TEMP",
        value: "471",
        unit: "°c",
      },
    ],
  },
  earth: {
    name: "EARTH",
    overview:
      "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    internal:
      "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
    surface:
      "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
    source: {
      overview: "https://en.wikipedia.org/wiki/Earth",
      internal: "https://en.wikipedia.org/wiki/Earth#Internal_structure",
      surface: "https://en.wikipedia.org/wiki/Earth#Surface",
    },
    information: [
      {
        title: "ROTATION TIME",
        value: "0.99",
        unit: "days",
      },
      {
        title: "REVOLUTION TIME",
        value: "365.26",
        unit: "days",
      },
      {
        title: "radius",
        value: "6,371",
        unit: "km",
      },
      {
        title: "AVERAGE TEMP",
        value: "16",
        unit: "°c",
      },
    ],
  },
  mars: {
    name: "MARS",
    overview:
      'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
    internal:
      "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
    surface:
      "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
    source: {
      overview: "https://en.wikipedia.org/wiki/Mars",
      internal: "https://en.wikipedia.org/wiki/Mars#Internal_structure",
      surface: "https://en.wikipedia.org/wiki/Mars#Surface_geology",
    },
    information: [
      {
        title: "ROTATION TIME",
        value: "1.03",
        unit: "days",
      },
      {
        title: "REVOLUTION TIME",
        value: "1.88",
        unit: "years",
      },
      {
        title: "radius",
        value: "3,389.5",
        unit: "km",
      },
      {
        title: "AVERAGE TEMP",
        value: "−28",
        unit: "°c",
      },
    ],
  },
  jupiter: {
    name: "jupiter",
    overview:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
    internal:
      "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
    surface:
      "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
    source: {
      overview: "https://en.wikipedia.org/wiki/Jupiter",
      internal: "https://en.wikipedia.org/wiki/Jupiter#Internal_structure",
      surface:
        "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices",
    },
    information: [
      {
        title: "ROTATION TIME",
        value: "9.93",
        unit: "hours",
      },
      {
        title: "REVOLUTION TIME",
        value: "11.86",
        unit: "years",
      },
      {
        title: "radius",
        value: "69,911",
        unit: "km",
      },
      {
        title: "AVERAGE TEMP",
        value: "-108",
        unit: "°c",
      },
    ],
  },
  saturn: {
    name: "saturn",
    overview:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
    internal:
      "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
    surface:
      "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. ",
    source: {
      overview: "https://en.wikipedia.org/wiki/Saturn",
      internal: "https://en.wikipedia.org/wiki/Saturn#Internal_structure",
      surface: "https://en.wikipedia.org/wiki/Saturn#Atmosphere",
    },
    information: [
      {
        title: "ROTATION TIME",
        value: "10.8",
        unit: "hours",
      },
      {
        title: "REVOLUTION TIME",
        value: "29.46",
        unit: "years",
      },
      {
        title: "radius",
        value: "58,232",
        unit: "km",
      },
      {
        title: "AVERAGE TEMP",
        value: "-138",
        unit: "°c",
      },
    ],
  },
  uranus: {
    name: "uranus",
    overview:
      "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    internal:
      "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
    surface:
      "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
    source: {
      overview: "https://en.wikipedia.org/wiki/Uranus",
      internal: "https://en.wikipedia.org/wiki/Uranus#Internal_structure",
      surface: "https://en.wikipedia.org/wiki/Uranus#Atmosphere",
    },
    information: [
      {
        title: "ROTATION TIME",
        value: "17.2",
        unit: "hours",
      },
      {
        title: "REVOLUTION TIME",
        value: "84",
        unit: "years",
      },
      {
        title: "radius",
        value: "25,362",
        unit: "km",
      },
      {
        title: "AVERAGE TEMP",
        value: "-195",
        unit: "°c",
      },
    ],
  },
  neptune: {
    name: "neptune",
    overview:
      "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
    internal:
      "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
    surface:
      "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
    source: {
      overview: "https://en.wikipedia.org/wiki/Neptune",
      internal: "https://en.wikipedia.org/wiki/Neptune#Internal_structure",
      surface: "https://en.wikipedia.org/wiki/Neptune#Atmosphere",
    },
    information: [
      {
        title: "ROTATION TIME",
        value: "16.08",
        unit: "hours",
      },
      {
        title: "REVOLUTION TIME",
        value: "164.79",
        unit: "years",
      },
      {
        title: "radius",
        value: "24,622",
        unit: "km",
      },
      {
        title: "AVERAGE TEMP",
        value: "-201",
        unit: "°c",
      },
    ],
  },
};

export { planetData };

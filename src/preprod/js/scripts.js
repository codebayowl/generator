console.log("Connected");

////////// DOM variables //////////
var 
  domVar, 
  plateVar, 
  currentTrailer, 
  umegaTrailers, 
  activator;
// Inputed data
domVar = {
  trailerChooser:     document.getElementById("chooseTrailer"),
  countryChooser:     document.getElementById("chooseCountry"),
  certificateChooser: document.getElementById("chooseCertificate"),
  inputYear:          document.getElementById("inputYear"),
  inputPIN:           document.getElementById("inputPin"),
  pdfButton:          document.getElementById("pdfBuild")
};
// Plate hooks
plateVar = {
  category:     document.getElementById("category"),
  type:         document.getElementById("model"),
  year:         document.getElementById("year"),
  weight:       document.getElementById("weight"),
  roadLoad:     document.getElementById("roadFull"),
  maxLoad:      document.getElementById("techFull"),
  certificate:  document.getElementById("certificate"),
  pin:          document.getElementById("pin"),
  full:         document.getElementById("payload"),
  drawbar:      document.getElementById("drawbar"),
  axle1:        document.getElementById("axle1"),
  axle2:        document.getElementById("axle2"),
  axle3:        document.getElementById("axle3"),
  roadDrawbar:  document.getElementById("roadDrawbar"),
  roadAxle1:    document.getElementById("roadAxle1"),
  roadAxle2:    document.getElementById("roadAxle2"),
	roadAxle3:    document.getElementById("roadAxle3"),
	axlesru:     	document.getElementById("axlesru"),
	axlesdk:     	document.getElementById("axlesdk"),
  drawbarLoad:  document.getElementById("drawbarLoad"),
  axleLoad:     document.getElementById("axleLoad"),
  b1t1:         document.getElementById("b1t1"),
  b1t2:         document.getElementById("b1t2"),
  b1t3:         document.getElementById("b1t3"),
  b2t1:         document.getElementById("b2t1"),
  b2t2:         document.getElementById("b2t2"),
  b2t3:         document.getElementById("b2t3"),
  b3t1:         document.getElementById("b3t1"),
  b3t2:         document.getElementById("b3t2"),
  b3t3:         document.getElementById("b3t3"),
  b4t1:         document.getElementById("b4t1"),
  b4t2:         document.getElementById("b4t2"),
  b4t3:         document.getElementById("b4t3"),
  plate:        document.getElementById("plate")
};
currentTrailer = {
  category:     "",
  type:         "",
  manufactured: 0,
  weight:       0,
  payload:      0,
  techPayload:  0,
  homologation: "-",
  vinCode:      "",
  country:      "",
  roadWeight:   0,
  couplingLoad: 0,
  couplingDval: 0,
  axleNumber:   0,
  axleLoadRoad: 0,
  axleLoadFull: 0,
  singleAxleRoad: 0,
  singleAxleFull: 0
};
//////////// Database /////////////
umegaTrailers = {
  gpp23:   {
    name:         "GPP23",
    category:     "S2a",
    variant:      "23",
    typeEC:       "GPP",
    weight:       7140,
    payload:      13860,
    techPayload:  18000,
    roadWeight:   21000,
    axleNum:      2,
    couplingLoad: 3000,
    couplingDval: 38000,
    certificate: [
      {
        name: "European 167/2013",
        number: "e32*167/2013*00029*00"
      },
      {
        name: "No certification",
        number: ""
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "GPP23"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "GPP23"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "GPP23"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "GPP23"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "GPP23"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "GPP23"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "GPP23"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "GPP23"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "GPP23"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "GPP23"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "GPP23"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "ASW23"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "GPP23"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "GPP23"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "GPP23"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "GPP23"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "GPP23"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "GPP23"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "GPP23"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "GPP23"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "GPP23"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "GPP23"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "GPP23"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "GPP23"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "GPP23"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "GPP23"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "GPP23"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "GPP23"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "GPP23"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "GPP23"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "GPP23"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "GPP23"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "GPP23"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "GPP23"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "GPP23"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "GPP23"
      }
    ]
  },
  gpp23hd:   {
    name:         "GPP23HD",
    category:     "S2a",
    variant:      "23HD",
    typeEC:       "GPP",
    weight:       7550,
    payload:      16450,
    techPayload:  24000,
    roadWeight:   24000,
    axleNum:      2,
    couplingLoad: 4000,
    couplingDval: 31500,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00029*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "GPP23HD"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "GPP23HD"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "GPP23HD"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "GPP23HD"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "GPP23HD"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "GPP23HD"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "GPP23HD"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "GPP23HD"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "GPP23HD"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "GPP23HD"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "GPP23HD"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "GPP23HD"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "GPP23HD"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "GPP23HD"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "GPP23HD"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "GPP23HD"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "GPP23HD"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "GPP23HD"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "GPP23HD"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "GPP23HD"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "GPP23HD"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "GPP23HD"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "GPP23HD"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "GPP23HD"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "GPP23HD"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "GPP23HD"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "GPP23HD"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "GPP23HD"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "GPP23HD"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "GPP23HD"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "GPP23HD"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "GPP23HD"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "GPP23HD"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "GPP23HD"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "GPP23HD"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "GPP23HD"
      }
    ]
  },
  gpp27l:   {
    name:         "GPP27L",
    category:     "S2a",
    variant:      "27L",
    typeEC:       "GPP",
    weight:       8500,
    payload:      15500,
    techPayload:  27000,
    roadWeight:   24000,
    axleNum:      2,
    couplingLoad: 4000,
    couplingDval: 31500,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00029*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "GPP27"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "GPP27"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "GPP27"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "GPP27"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "GPP27"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "GPP27"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "GPP27"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "GPP27"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "GPP27"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "GPP27"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "GPP27"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "GPP27"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "GPP27"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "GPP27"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "GPP27"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "GPP27"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "GPP27"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "GPP27"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "GPP27"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "GPP27"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "GPP27"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "GPP27"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "GPP27"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "GPP27"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "GPP27"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "GPP27"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "GPP27"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "GPP27"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "GPP27"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "GPP27"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "GPP27"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "GPP27"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "GPP27"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "GPP27"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "GPP27"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "GPP27"
      }
    ]
  },
  pi20:   {
    name:         "PI20",
    category:     "S2a",
    variant:      "20",
    typeEC:       "PI",
    weight:       8370,
    payload:      14630,
    techPayload:  20000,
    roadWeight:   24000,
    axleNum:      2,
    couplingLoad: 4000,
    couplingDval: 31500,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00021*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "PI20"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "PI20"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "PI20"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "PI20"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "PI20"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "PI20"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "PI20"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "PI20"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "PI20"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "PI20"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "PI20"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "ASW24"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "PI20"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "PI20"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "PI20"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "PI20"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "PI20"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "PI20"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "PI20"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "PI20"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "PI20"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "PI20"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "PI20"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "PI20"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "PI20"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "PI20"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "PI20"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "PI20"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "PI20"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "PI20"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "PI20"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "PI20"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "PI20"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "PI20"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "PI20"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "PI20"
      }
    ]
  },
  pi42:   {
    name:         "PI42",
    category:     "R3a",
    variant:      "42",
    typeEC:       "PI",
    weight:       15000,
    payload:      19000,
    techPayload:  42000,
    roadWeight:   34000,
    axleNum:      3,
    couplingLoad: 4000,
    couplingDval: 38000,
    certificate: [
      {
        name: "No certification",
        number: ""
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }*/
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "PI42"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "PI42"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "PI42"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "PI42"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "PI42"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "PI42"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "PI42"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "PI42"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "PI42"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "PI42"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "PI42"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "PI42"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "PI42"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "PI42"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "PI42"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "PI42"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "PI42"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "PI42"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "PI42"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "PI42"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "PI42"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "PI42"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "PI42"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "PI42"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "PI42"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "PI42"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "PI42"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "PI42"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "PI42"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "PI42"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "PI42"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "PI42"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "PI42"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "PI42"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "PI42"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "PI42"
      }
    ]
  },
  spb12:   {
    name:         "SPB12",
    category:     "R3a",
    variant:      "12B",
    typeEC:       "TIP12",
    weight:       4000,
    payload:      16500,
    techPayload:  12000,
    roadWeight:   20500,
    axleNum:      2,
    couplingLoad: 2500,
    couplingDval: 24000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },/*
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },*/
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPB12"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPB12"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPB12"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPB12"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPB12"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPB12"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPB12"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPB12"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPB12"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPB12"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPB12"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPB12"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPB12"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPB12"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPB12"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPB12"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPB12"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPB12"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPB12"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPB12"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPB12"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPB12"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPB12"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP1/SPB12"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPB12"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPB12"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPB12"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPB12"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPB12"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPB12"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPB12"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPB12"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPB12"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPB12"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPB12"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPB12"
      }
    ]
  },
  spb14:   {
    name:         "SPB14",
    category:     "R3a",
    variant:      "B",
    typeEC:       "TIP14",
    weight:       4050,
    payload:      16450,
    techPayload:  14000,
    roadWeight:   21000,
    axleNum:      2,
    couplingLoad: 2500,
    couplingDval: 30000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPB14"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPB14"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPB14"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPB14"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPB14"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPB14"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPB14"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPB14"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPB14"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPB14"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPB14"
      },
      /*{
        name:   "Germany",
        locale: "de",
        type:   "SPB14"
      },*/
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPB14"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPB14"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPB14"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPB14"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPB14"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPB14"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPB14"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPB14"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPB14"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPB14"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPB14"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP1/SPB14"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPB14"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPB14"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPB14"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPB14"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPB14"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPB14"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPB14"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPB14"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPB14"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPB14"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPB14"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPB14"
      }
    ]
  },
  spb14r:   {
    name:         "SPB14R",
    category:     "R3a",
    variant:      "R",
    typeEC:       "TIP14",
    weight:       4250,
    payload:      16250,
    techPayload:  14000,
    roadWeight:   20500,
    axleNum:      2,
    couplingLoad: 2500,
    couplingDval: 24000,
    certificate: [
      {
        name: "No certification",
        number: ""
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }*/
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPB14R"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPB14R"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPB14R"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPB14R"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPB14R"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPB14R"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPB14R"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPB14R"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPB14R"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPB14R"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPB14R"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPB14R"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPB14R"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPB14R"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPB14R"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPB14R"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPB14R"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPB14R"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPB14R"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPB14R"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPB14R"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPB14R"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPB14R"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPB14R"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPB14R"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPB14R"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPB14R"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPB14R"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPB14R"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPB14R"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPB14R"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPB14R"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPB14R"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPB14R"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPB14R"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPB14R"
      }
    ]
  },
  spc10u:   {
    name:         "SPC10U",
    category:     "R3a",
    variant:      "10C",
    typeEC:       "TIP12",
    weight:       3650,
    payload:      16850,
    techPayload:  10000,
    roadWeight:   20500,
    axleNum:      2,
    couplingLoad: 2500,
    couplingDval: 24000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },/*
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },*/
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPC10"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPC10"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPC10"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPC10"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPC10"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPC10"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPC10"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPC10"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPC10"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPC10"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPC10"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPC10"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPC10"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPC10"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPC10"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPC10"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPC10"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPC10"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPC10"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPC10"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPC10"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPC10"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPC10"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP1/SPC10"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPC10"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPC10"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPC10"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPC10"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPC10"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPC10"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPC10"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPC10"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPC10"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPC10"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPC10"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPC10"
      }
    ]
  },
  spc12u:   {
    name:         "SPC12U",
    category:     "R3a",
    variant:      "C",
    typeEC:       "TIP12",
    weight:       4150,
    payload:      16350,
    techPayload:  12000,
    roadWeight:   20500,
    axleNum:      2,
    couplingLoad: 2500,
    couplingDval: 30000,
    certificate: [
      {
        name: "No certification",
        number: ""
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      }*/,
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPC12"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPC12"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPC12"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPC12"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPC12"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPC12"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPC12"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPC12"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPC12"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPC12"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPC12"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "TW16"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPC12"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPC12"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPC12"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPC12"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPC12"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPC12"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPC12"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPC12"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPC12"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPC12"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPC12"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP1/SPC12"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPC12"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPC12"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPC12"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPC12"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPC12"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPC12"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPC12"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPC12"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPC12"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPC12"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPC12"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPC12"
      }
    ]
  },
  spc14bs:   {
    name:         "SPC14BS",
    category:     "R3a",
    variant:      "C",
    typeEC:       "TIP14",
    weight:       4500, // 4100!
    payload:      14000,
    techPayload:  16000,
    roadWeight:   21000,
    axleNum:      2,
    couplingLoad: 3000,
    couplingDval: 30000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPC14"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPC14"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPC14"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPC14"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPC14"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPC14"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPC14"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPC16"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPC14"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPC14"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPC14"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "TW19"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPC14"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPC14"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPC14"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPC14"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPC14"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPC14"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPC14"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPC14"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPC14"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPC14"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPC14"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP1/SPC14"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPC14"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPC14"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPC14"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPC14"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPC14"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPC14"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPC14"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPC16"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPC14"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPC14"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPC14"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPC14"
      }
    ]
  },
  spc16bs:   {
    name:         "SPC16BS",
    category:     "R3a",
    variant:      "16",
    typeEC:       "SPC16",
    weight:       5500,
    payload:      15500,
    techPayload:  18000,
    roadWeight:   21000,
    axleNum:      2,
    couplingLoad: 3000,
    couplingDval: 38000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00015*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPC16"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPC16"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPC16"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPC16"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPC16"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPC16"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPC16"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPC16"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPC18"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPC16"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPC16"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "TW21"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPC16"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPC16"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPC16"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPC16"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPC18"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPC16"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPC16"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPC16"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPC16"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPC16"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPC16"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP1/SPC16"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPC16"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPC16"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPC16"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPC16"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPC16"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPC16"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPC16"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPC16"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPC16"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPC16"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPC16"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPC16"
      }
    ]
  },
  spc20l:   {
    name:         "SPC20L",
    category:     "R3a",
    variant:      "L",
    typeEC:       "SPC20",
    weight:       7200,
    payload:      13800,
    techPayload:  20000,
    roadWeight:   21000,
    axleNum:      2,
    couplingLoad: 3000,
    couplingDval: 38000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00031*00"
      }/*,
      {
        name: "Poland",
        number: "PL*4404*00"
      }*/
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPC20L"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPC20L"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPC20L"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPC20L"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPC20L"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPC20L"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPC20L"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPC20L"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPC20L"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPC20L"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPC20L"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPC20L"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPC20L"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPC20L"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPC20L"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPC20L"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPC20L"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPC20L"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPC20L"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPC20L"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPC20L"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPC20L"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPC20L"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP1/SPC20L"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPC20L"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPC20L"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPC20L"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPC20L"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPC20L"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPC20L"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPC20L"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPC20L"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPC20L"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPC20L"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPC20L"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPC20L"
      }
    ]
  },
  spc19bs:   {
    name:         "SPC19BS",
    category:     "R3a",
    variant:      "C",
    typeEC:       "SPC20",
    weight:       8000,
    payload:      16000,
    techPayload:  20000,
    roadWeight:   24000,
    axleNum:      2,
    couplingLoad: 4000,
    couplingDval: 31500,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00031*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPC19"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPC19"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPC19"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPC19"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPC19"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPC19"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPC19"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPC19"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPC19"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPC19"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPC19"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "TW24"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPC19"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPC19"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPC19"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPC19"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPC19"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPC19"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPC19"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPC19"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPC19"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPC19"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPC19"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP1/SPC19"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPC19"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPC19"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPC19"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPC19"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPC19"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPC19"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPC19"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPC19"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPC19"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPC19"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPC19"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPC19"
      }
    ]
  },
  spc20bs:   {
    name:         "SPC20BS",
    category:     "R3a",
    variant:      "20",
    typeEC:       "SPC16",
    weight:       6700,
    payload:      15300,
    techPayload:  20000,
    roadWeight:   21000,
    axleNum:      2,
    couplingLoad: 3000,
    couplingDval: 38000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00015*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPC20"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPC20"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPC20"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPC20"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPC20"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPC20"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPC20"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPC20"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPC20"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPC20"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPC20"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "TW21"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPC20"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPC20"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPC20"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPC20"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPC20"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPC20"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPC20"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPC20"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPC20"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPC20"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPC20"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP1/SPC20"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPC20"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPC20"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPC20"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPC20"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPC20"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPC20"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPC20"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPC20"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPC20"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPC20"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPC20"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPC20"
      }
    ]
  },
  spc24:   {
    name:         "SPC24",
    category:     "R3a",
    variant:      "C",
    typeEC:       "SPC24",
    weight:       9000,
    payload:      22000,
    techPayload:  24000,
    roadWeight:   31000,
    axleNum:      3,
    couplingLoad: 4000,
    couplingDval: 31500,
    certificate: [
      {
        name: "No certification",
        number: ""
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00031*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }*/
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPC24"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPC24"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPC24"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPC24"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPC24"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPC24"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPC24"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPC24"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPC24"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPC24"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPC24"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPC24"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPC24"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPC24"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPC24"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPC24"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPC24"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPC24"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPC24"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPC24"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPC24"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPC24"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPC24"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPC24"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPC24"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPC24"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPC24"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPC24"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPC24"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPC24"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPC24"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPC24"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPC24"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPC24"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPC24"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPC24"
      }
    ]
  },
  spc30:   {
    name:         "SPC30U",
    category:     "R3a",
    variant:      "C",
    typeEC:       "TIP30",
    weight:       9500,
    payload:      21500,
    techPayload:  30000,
    roadWeight:   31000,
    axleNum:      3,
    couplingLoad: 4000,
    couplingDval: 30000,
    certificate: [
      {
        name: "No certification",
        number: ""
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }*/
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPC30"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPC30"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPC30"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPC30"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPC30"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPC30"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPC30"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPC30"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPC30"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPC30"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPC30"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPC30"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPC30"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPC30"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPC30"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPC30"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPC30"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPC30"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPC30"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPC30"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPC30"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPC30"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPC30"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPC30"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPC30"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPC30"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPC30"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPC30"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPC30"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPC30"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPC30"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPC30"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPC30"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPC30"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPC30"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPC30"
      }
    ]
  },
  spd10:   {
    name:         "SPD10",
    category:     "R3a",
    variant:      "S",
    typeEC:       "SPD10",
    weight:       4300,
    payload:      10000,
    techPayload:  10000,
    roadWeight:   14300,
    axleNum:      2,
    couplingLoad: 2500,
    couplingDval: 24000,
    certificate: [
      {
        name: "No certification",
        number: ""
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }*/
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPD10"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPD10"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPD10"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPD10"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPD10"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPD10"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPD10"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPD10"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPD10"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPD10"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPD10"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPD10"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPD10"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPD10"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPD10"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPD10"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPD10"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPD10"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPD10"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPD10"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPD10"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPD10"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPD10"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPD10"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPD10"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPD10"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPD10"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPD10"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPD10"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPD10"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPD10"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPD10"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPD10"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPD10"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPD10"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPD10"
      }
    ]
  },
  spd13:   {
    name:         "SPD13",
    category:     "R3a",
    variant:      "S",
    typeEC:       "SPD13",
    weight:       3350,
    payload:      17150,
    techPayload:  12000,
    roadWeight:   20500,
    axleNum:      2,
    couplingLoad: 2500,
    couplingDval: 24000,
    certificate: [
      {
        name: "No certification",
        number: ""
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }*/
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPD13"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPD13"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPD13"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPD13"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPD13"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPD13"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPD13"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPD13"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPD13"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPD13"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPD13"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "0SK16"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPD13"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPD13"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPD13"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPD13"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPD13"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPD13"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPD13"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPD13"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPD13"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPD13"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPD13"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPD13"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPD13"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPD13"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPD13"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPD13"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPD13"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPD13"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPD13"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPD13"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPD13"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPD13"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPD13"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPD13"
      }
    ]
  },
  spd17:   {
    name:         "SPD17",
    category:     "R3a",
    variant:      "S",
    typeEC:       "SPD17",
    weight:       5800,
    payload:      15200,
    techPayload:  16000,
    roadWeight:   21000,
    axleNum:      2,
    couplingLoad: 3000,
    couplingDval: 30000,
    certificate: [
      {
        name: "No certification",
        number: ""
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }*/
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPD17"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPD17"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPD17"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPD17"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPD17"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPD17"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPD17"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPD17"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPD17"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPD17"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPD17"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "0SK21"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPD17"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPD17"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPD17"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPD17"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPD17"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPD17"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPD17"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPD17"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPD17"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPD17"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPD17"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPD17"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPD17"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPD17"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPD17"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPD17"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPD17"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPD17"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPD17"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPD17"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPD17"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPD17"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPD17"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPD17"
      }
    ]
  },
  spe14:   {
    name:         "SPE14",
    category:     "R3a",
    variant:      "E",
    typeEC:       "TIP14",
    weight:       4550,
    payload:      15950,
    techPayload:  14000,
    roadWeight:   21000,
    axleNum:      2,
    couplingLoad: 2500,
    couplingDval: 30000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPE14"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPE14"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPE14"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPE14"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPE14"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPE14"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPE14"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPE14"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPE14"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPE14"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPE14"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "TWZ19"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPE14"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPE14"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPE14"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPE14"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPE14"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPE14"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPE14"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPE14"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPE14"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPE14"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPE14"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPE14"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPE14"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPE14"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPE14"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPE14"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPE14"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPE14"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPE14"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPE14"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPE14"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPE14"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPE14"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPE14"
      }
    ]
  },
  spe16:   {
    name:         "SPE16",
    category:     "R3a",
    variant:      "E",
    typeEC:       "TIP16",
    weight:       5800,
    payload:      15200,
    techPayload:  16000,
    roadWeight:   21000,
    axleNum:      2,
    couplingLoad: 3000,
    couplingDval: 30000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      /*{
        name: "European 167/2013",
        number: "e32*167/2013*00031*00"
      },*/
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPE16"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPE16"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPE16"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPE16"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPE16"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPE16"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPE16"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPE16"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPE16"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPE16"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPE16"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "TWZ21"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPE16"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPE16"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPE16"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPE16"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPE16"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPE16"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPE16"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPE16"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPE16"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPE16"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPE16"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP1/SPE16"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPE16"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPE16"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPE16"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPE16"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPE16"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPE16"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPE16"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPE16"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPE16"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPE16"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPE16"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPE16"
      }
    ]
  },
  spe19:   {
    name:         "SPE19",
    category:     "R3a",
    variant:      "E",
    typeEC:       "SPE20",
    weight:       8000,
    payload:      16000,
    techPayload:  20000,
    roadWeight:   24000,
    axleNum:      2,
    couplingLoad: 4000,
    couplingDval: 31500,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00031*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPE19"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPE19"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPE19"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPE19"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPE19"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPE19"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPE19"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPE19"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPE19"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPE19"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPE19"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "TWZ24"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPE19"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPE19"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPE19"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPE19"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPE19"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPE19"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPE19"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPE19"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPE19"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPE19"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPE19"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP1/SPE19"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPE19"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPE19"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPE19"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPE19"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPE19"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPE19"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPE19"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPE19"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPE19"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPE19"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPE19"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPE19"
      }
    ]
  },
  spp10p:   {
    name:         "SPP10P",
    category:     "R3a",
    variant:      "10P",
    typeEC:       "SPP",
    weight:       3700,
    payload:      16300,
    techPayload:  10000,
    roadWeight:   20000,
    axleNum:      2,
    couplingLoad: 0,
    couplingDval: 24000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      /*{
        name: "European 167/2013",
        number: "e32*167/2013*00000*00"
      },*/
      {
        name: "Poland",
        number: "PL*44810*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPP10P"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPP10P"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPP10P"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPP10P"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPP10P"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPP10P"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPP10P"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPP10P"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPP10P"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPP10P"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPP10P"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "ZD14"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPP10P"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPP10P"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPP10P"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPP10P"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPP10P"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPP10P"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPP10P"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPP10P"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPP10P"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPP10P"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPP10P"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP2/SPP10"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPP10P"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPP10P"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPP10P"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPP10P"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPP10P"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPP10P"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPP10P"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPP10P"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPP10P"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPP10P"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPP10P"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPP10P"
      }
    ]
  },
  spp10u:   {
    name:         "SPP10U",
    category:     "R3a",
    variant:      "U",
    typeEC:       "SPP10",
    weight:       3700,
    payload:      14300,
    techPayload:  10000,
    roadWeight:   18000,
    axleNum:      2,
    couplingLoad: 0,
    couplingDval: 26000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      /*{
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },*/
      {
        name: "Poland",
        number: "PL*44810*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPP10"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPP10"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPP10"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPP10"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPP10"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPP10"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPP10"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPP10"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPP10"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPP10"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPP10"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "ZD14"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPP10"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPP10"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPP10"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPP10"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPP10"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPP10"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPP10"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPP10"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPP10"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPP10"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPP10"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP2/SPP10"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPP10"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPP10"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPP10"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPP10"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPP10"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPP10"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPP10"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPP10"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPP10"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPP10"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPP10"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPP10"
      }
    ]
  },
  spp12p:   {
    name:         "SPP12P",
    category:     "R3a",
    variant:      "12P",
    typeEC:       "SPP",
    weight:       3800,
    payload:      16200,
    techPayload:  12000,
    roadWeight:   20000,
    axleNum:      2,
    couplingLoad: 0,
    couplingDval: 28000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      /*{
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },*/
      {
        name: "Poland",
        number: "PL*44810*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPP12"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPP12"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPP12"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPP12"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPP12"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPP12"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPP12"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPP12"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPP12"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPP12"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPP12"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "ZD16"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPP12"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPP12"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPP12"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPP12"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPP12"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPP12"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPP12"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPP12"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPP12"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPP12"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPP12"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP2/SPP12"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPP12"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPP12"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPP12"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPP12"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPP12"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPP12"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPP12"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPP12"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPP12"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPP12"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPP12"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPP12"
      }
    ]
  },
  spp12u:   {
    name:         "SPP12U",
    category:     "R3a",
    variant:      "U",
    typeEC:       "SPP12",
    weight:       4100,
    payload:      13900,
    techPayload:  12000,
    roadWeight:   18000,
    axleNum:      2,
    couplingLoad: 0,
    couplingDval: 28000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      /*{
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },*/
      {
        name: "Poland",
        number: "PL*44810*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPP12"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPP12"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPP12"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPP12"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPP12"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPP12"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPP12"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPP12"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPP12"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPP12"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPP12"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "ZD16"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPP12"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPP12"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPP12"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPP12"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPP12"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPP12"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPP12"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPP12"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPP12"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPP12"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPP12"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP2/SPP12"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPP12"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPP12"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPP12"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPP12"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPP12"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPP12"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPP12"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPP12"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPP12"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPP12"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPP12"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPP12"
      }
    ]
  },
  spp14p:   {
    name:         "SPP14P",
    category:     "R3a",
    variant:      "14P",
    typeEC:       "SPP",
    weight:       4500,
    payload:      15500,
    techPayload:  14000,
    roadWeight:   20000,
    axleNum:      2,
    couplingLoad: 0,
    couplingDval: 28000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      /*{
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },*/
      {
        name: "Poland",
        number: "PL*44810*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPP14"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPP14"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPP14"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPP14"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPP14"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPP14"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPP14"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPP14"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPP14"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPP14"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPP14"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "ZD18"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPP14"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPP14"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPP14"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPP14"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPP14"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPP14"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPP14"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPP14"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPP14"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPP14"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPP14"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP2/SPP14"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPP14"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPP14"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPP14"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPP14"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPP14"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPP14"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPP14"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPP14"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPP14"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPP14"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPP14"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPP14"
      }
    ]
  },
  spp14u:   {
    name:         "SPP14U",
    category:     "R3a",
    variant:      "14U",
    typeEC:       "SPP16",
    weight:       4750,
    payload:      13250,
    techPayload:  14000,
    roadWeight:   18000,
    axleNum:      2,
    couplingLoad: 0,
    couplingDval: 28000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      /*{
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },*/
      {
        name: "Poland",
        number: "PL*44810*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPP14"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPP14"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPP14"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPP14"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPP14"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPP14"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPP14"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPP14"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPP14"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPP14"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPP14"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "ZD18"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPP14"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPP14"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPP14"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPP14"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPP14"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPP14"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPP14"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPP14"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPP14"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPP14"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPP14"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP2/SPP14"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPP14"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPP14"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPP14"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPP14"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPP14"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPP14"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPP14"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPP14"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPP14"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPP14"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPP14"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPP14"
      }
    ]
  },
  spp16p:   {
    name:         "SPP16P",
    category:     "R3a",
    variant:      "16P",
    typeEC:       "SPP",
    weight:       4950,
    payload:      15050,
    techPayload:  16000,
    roadWeight:   20000,
    axleNum:      2,
    couplingLoad: 0,
    couplingDval: 30000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      /*{
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },*/
      {
        name: "Poland",
        number: "PL*44810*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPP16P"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPP16P"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPP16P"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPP16P"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPP16P"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPP16P"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPP16P"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPP16P"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPP16P"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPP16P"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPP16P"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "ZD20"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPP16P"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPP16P"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPP16P"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPP16P"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPP16P"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPP16P"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPP16P"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPP16P"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPP16P"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPP16P"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPP16P"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPP16P"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPP16P"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPP16P"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPP16P"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPP16P"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPP16P"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPP16P"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPP16P"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPP16P"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPP16P"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPP16P"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPP16P"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPP16P"
      }
    ]
  },
  spp16u:   {
    name:         "SPP16U",
    category:     "R3a",
    variant:      "16U",
    typeEC:       "SPP",
    weight:       4950,
    payload:      15050,
    techPayload:  16000,
    roadWeight:   20000,
    axleNum:      2,
    couplingLoad: 0,
    couplingDval: 30000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      /*{
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },*/
      {
        name: "Poland",
        number: "PL*44810*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPP16"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPP16"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPP16"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPP16"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPP16"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPP16"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPP16"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPP16"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPP16"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPP16"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPP16"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "ZD20"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPP16"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPP16"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPP16"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPP16"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPP16"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPP16"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPP16"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPP16"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPP16"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPP16"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPP16"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP2/SPP16"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPP16"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPP16"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPP16"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPP16"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPP16"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPP16"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPP16"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPP16"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPP16"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPP16"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPP16"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPP16"
      }
    ]
  },
  sps14:   {
    name:         "SPS14",
    category:     "R3a",
    variant:      "14",
    typeEC:       "SPS",
    weight:       4200,
    payload:      13800,
    techPayload:  14000,
    roadWeight:   18000,
    axleNum:      2,
    couplingLoad: 0,
    couplingDval: 24000,
    certificate: [
      {
        name: "No certification",
        number: ""
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },
      {
        name: "Poland",
        number: "PL*44810*00"
      }*/
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPS14"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPS14"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPS14"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPS14"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPS14"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPS14"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPS14"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPS14"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPS14"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPS14"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPS14"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPS14"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPS14"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPS14"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPS14"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPS14"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPS14"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPS14"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPS14"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPS14"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPS14"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPS14"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPS14"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPS14"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPS14"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPS14"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPS14"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPS14"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPS14"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPS14"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPS14"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPS14"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPS14"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPS14"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPS14"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPS14"
      }
    ]
  },
  spt3:   {
    name:         "SPT3.5",
    category:     "R3a",
    variant:      "3.5",
    typeEC:       "TIP3",
    weight:       1280,
    payload:      10720,
    techPayload:  3500,
    roadWeight:   10800,
    axleNum:      1,
    couplingLoad: 800,
    couplingDval: 12000,
    certificate: [
      {
        name: "No certification",
        number: ""
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }*/
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPT3.5"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPT3.5"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPT3.5"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPT3.5"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPT3.5"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPT3.5"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPT3.5"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPT3.5"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPT3.5"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPT3.5"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPT3.5"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPT3.5"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPT3.5"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPT3.5"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPT3.5"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPT3.5"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPT3.5"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPT3.5"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPT3.5"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPT3.5"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPT3.5"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPT3.5"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPT3.5"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPT3.5"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPT3.5"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPT3.5"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPT3.5"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPT3.5"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPT3.5"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPT3.5"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPT3.5"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPT3.5"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPT3.5"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPT3.5"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPT3.5"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPT3.5"
      }
    ]
  },
  spt10:   {
    name:         "SPT10",
    category:     "R3a",
    variant:      "T",
    typeEC:       "TIP10",
    weight:       3700,
    payload:      16800,
    techPayload:  10000,
    roadWeight:   20500,
    axleNum:      2,
    couplingLoad: 2500,
    couplingDval: 24000,
    certificate: [
      {
        name: "No certification",
        number: ""
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      }*/,
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPT10"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPT10"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPT10"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPT10"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPT10"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPT10"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPT10"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPT10"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPT10"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPT10"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPT10"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPT10"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPT10"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPT10"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPT10"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPT10"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPT10"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPT10"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPT10"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPT10"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPT10"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPT10"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPT10"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPT10"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPT10"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPT10"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPT10"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPT10"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPT10"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPT10"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPT10"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPT10"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPT10"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPT10"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPT10"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPT10"
      }
    ]
  },
  spt12:   {
    name:         "SPT12",
    category:     "R3a",
    variant:      "T",
    typeEC:       "TIP12",
    weight:       4100,
    payload:      16400,
    techPayload:  12000,
    roadWeight:   20500,
    axleNum:      2,
    couplingLoad: 2500,
    couplingDval: 24000,
    certificate: [
      {
        name: "No certification",
        number: ""
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      }*/,
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPT12"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPT12"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPT12"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPT12"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPT12"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPT12"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPT12"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPT12"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPT12"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPT12"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPT12"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPT12"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPT12"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPT12"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPT12"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPT12"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPT12"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPT12"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPT12"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPT12"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPT12"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPT12"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPT12"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPT12"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPT12"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPT12"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPT12"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPT12"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPT12"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPT12"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPT12"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPT12"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPT12"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPT12"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPT12"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPT12"
      }
    ]
  },
  spt14:   {
    name:         "SPT14",
    category:     "R3a",
    variant:      "T",
    typeEC:       "TIP14",
    weight:       4500,
    payload:      16000,
    techPayload:  14000,
    roadWeight:   21000,
    axleNum:      2,
    couplingLoad: 3000,
    couplingDval: 30000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPT14"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPT14"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPT14"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPT14"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPT14"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPT14"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPT14"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPT14"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPT14"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPT14"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPT14"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPT14"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPT14"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPT14"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPT14"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPT14"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPT14"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPT14"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPT14"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPT14"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPT14"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPT14"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPT14"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPT14"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPT14"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPT14"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPT14"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPT14"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPT14"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPT14"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPT14"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPT14"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPT14"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPT14"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPT14"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPT14"
      }
    ]
  },
  spt16:   {
    name:         "SPT16",
    category:     "R3a",
    variant:      "T",
    typeEC:       "TIP16",
    weight:       5300,
    payload:      16000,
    techPayload:  15700,
    roadWeight:   21000,
    axleNum:      2,
    couplingLoad: 3000,
    couplingDval: 38000,
    certificate: [
      {
        name: "No certification",
        number: ""
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      }*/,
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPT16"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPT16"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPT16"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPT16"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPT16"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPT16"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPT16"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPT16"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPT16"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPT16"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPT16"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPT16"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPT16"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPT16"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPT16"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPT16"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPT16"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPT16"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPT16"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPT16"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPT16"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPT16"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPT16"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPT16"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPT16"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPT16"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPT16"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPT16"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPT16"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPT16"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPT16"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPT16"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPT16"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPT16"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPT16"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPT16"
      }
    ]
  },
  spy5:   {
    name:         "SPY5",
    category:     "R3a",
    variant:      "Y",
    typeEC:       "SPY5",
    weight:       1000,
    payload:      5000,
    techPayload:  5000,
    roadWeight:   6000,
    axleNum:      1,
    couplingLoad: 500,
    couplingDval: 30000,
    certificate: [
      {
        name: "No certification",
        number: ""
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00031*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }*/
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPY5"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPY5"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPY5"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPY5"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPY5"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPY5"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPY5"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPY5"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPY5"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPY5"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPY5"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPY5"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPY5"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPY5"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPY5"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPY5"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPY5"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPY5"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPY5"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPY5"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPY5"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPY5"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPY5"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPY5"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPY5"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPY5"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPY5"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPY5"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPY5"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPY5"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPY5"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPY5"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPY5"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPY5"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPY5"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPY5"
      }
    ]
  },
  uhf08:   {
    name:         "UHF08",
    category:     "R3a",
    variant:      "08",
    typeEC:       "UHF",
    weight:       1680,
    payload:      8000,
    techPayload:  8000,
    roadWeight:   9680,
    axleNum:      2,
    couplingLoad: 1500,
    couplingDval: 24000,
    certificate: [
      {
        name: "No certification",
        number: ""
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },
      {
        name: "Poland",
        number: "PL*44810*00"
      }*/
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "UHF08"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "UHF08"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "UHF08"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "UHF08"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "UHF08"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "UHF08"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "UHF08"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "UHF08"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "UHF08"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "UHF08"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "UHF08"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "UHF08"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "UHF08"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "UHF08"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "UHF08"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "UHF08"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "UHF08"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "UHF08"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "UHF08"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "UHF08"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "UHF08"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "UHF08"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "UHF08"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "UHF08"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "UHF08"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "UHF08"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "UHF08"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "UHF08"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "UHF08"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "UHF08"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "UHF08"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "UHF08"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "UHF08"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "UHF08"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "UHF08"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "UHF08"
      }
    ]
  },
  uhf10:   {
    name:         "UHF10",
    category:     "R3a",
    variant:      "10",
    typeEC:       "UHF",
    weight:       2600,
    payload:      10000,
    techPayload:  10000,
    roadWeight:   12600,
    axleNum:      2,
    couplingLoad: 2000,
    couplingDval: 24000,
    certificate: [
      {
        name: "No certification",
        number: ""
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },
      {
        name: "Poland",
        number: "PL*44810*00"
      }*/
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "UHF10"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "UHF10"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "UHF10"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "UHF10"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "UHF10"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "UHF10"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "UHF10"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "UHF10"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "UHF10"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "UHF10"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "UHF10"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "UHF10"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "UHF10"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "UHF10"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "UHF10"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "UHF10"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "UHF10"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "UHF10"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "UHF10"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "UHF10"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "UHF10"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "UHF10"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "UHF10"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "UHF10"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "UHF10"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "UHF10"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "UHF10"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "UHF10"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "UHF10"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "UHF10"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "UHF10"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "UHF10"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "UHF10"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "UHF10"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "UHF10"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "UHF10"
      }
    ]
  }
};
//// Logic for plates builder /////
activator = {
  // state variables (is choosed, is correct, etc)
  model:          {},
  certificates:   [],
  country:        [],
  countryName:    "",
  countryLocale:  "",
  certName:       "",
  certType:       "",
  manufacture:    0,
  numOfTrailers:  0,
  VINcode:        "",
  okVIN:          false,
  okCert:         false,
  // METHODS //
  checkup: function () {
    if (this.okVIN && this.okCert) {
      buildTrailer();
      activateElement("pdfButton");
    } else {
      deactivateElement("pdfButton");
    }
  }
};


function buildTrailer () {
  currentTrailer.category       = activator.model.category;
  currentTrailer.type           = activator.certName === "European 167/2013" ? activator.model.typeEC : activator.country.type;
  currentTrailer.variant        = activator.model.variant;
  currentTrailer.version        = "-";
  currentTrailer.manufactured   = activator.manufacture;
  currentTrailer.weight         = activator.model.weight;
  currentTrailer.techPayload    = activator.model.techPayload;
  currentTrailer.payload        = activator.model.payload;
  currentTrailer.homologation   = activator.certType;
  currentTrailer.vinCode        = activator.VINcode;
  currentTrailer.country        = activator.countryLocale;
  currentTrailer.roadWeight     = activator.model.roadWeight;
  currentTrailer.couplingLoad   = activator.model.couplingLoad;
  currentTrailer.couplingDval   = activator.model.couplingDval;

  currentTrailer.axleNumber     = activator.model.axleNum;
  currentTrailer.axleLoadRoad   = currentTrailer.roadWeight - currentTrailer.couplingLoad;
  currentTrailer.axleLoadFull   = currentTrailer.techPayload + currentTrailer.weight - currentTrailer.couplingLoad;
  if (currentTrailer.country === "dk") {
    if (currentTrailer.axleNumber === 1) {
      currentTrailer.singleAxleRoad = currentTrailer.axleLoadRoad;
    } else if (currentTrailer.axleNumber === 2) {
      currentTrailer.singleAxleRoad = Math.round(currentTrailer.axleLoadRoad/2) + " / " + Math.round(currentTrailer.axleLoadRoad/2);
    } else if (currentTrailer.axleNumber === 3) {
      currentTrailer.singleAxleRoad = Math.round(currentTrailer.axleLoadRoad/3) + "/" + Math.round(currentTrailer.axleLoadRoad/3) + "/" + Math.round(currentTrailer.axleLoadRoad/3);
    }
  } else if(currentTrailer.country === "ru" ) {
      if (currentTrailer.axleNumber === 1) {
        currentTrailer.singleAxleRoad = currentTrailer.axleLoadFull;
      } else if (currentTrailer.axleNumber === 2) {
        currentTrailer.singleAxleRoad = Math.round(Math.round(currentTrailer.axleLoadFull/2)/10)*10 + " / " + Math.round(Math.round(currentTrailer.axleLoadFull/2)/10)*10;
      } else if (currentTrailer.axleNumber === 3) {
        currentTrailer.singleAxleRoad = Math.round(Math.round(currentTrailer.axleLoadFull/2)/10)*10 + "/" + Math.round(Math.round(currentTrailer.axleLoadFull/2)/10)*10 + "/" + Math.round(Math.round(currentTrailer.axleLoadFull/2)/10)*10;
      }
  } else {
    currentTrailer.singleAxleRoad = Math.round(currentTrailer.axleLoadRoad / currentTrailer.axleNumber);
  }
  currentTrailer.singleAxleFull = Math.round(currentTrailer.axleLoadFull / currentTrailer.axleNumber);


  plateVar.category.innerText     = currentTrailer.category;
  plateVar.type.innerText         = currentTrailer.type;
  plateVar.variant.innerText      = currentTrailer.variant;
  plateVar.version.innerText      = currentTrailer.version;
  plateVar.year.innerText         = currentTrailer.manufactured;
  plateVar.weight.innerText       = currentTrailer.weight;
  if (currentTrailer.country === "ru") {
    plateVar.roadLoad.innerText     = currentTrailer.techPayload;
  } else {
    plateVar.roadLoad.innerText     = currentTrailer.payload;
  }
  
  plateVar.maxLoad.innerText      = currentTrailer.techPayload;
  plateVar.certificate.innerText  = currentTrailer.homologation;
  plateVar.pin.innerText          = currentTrailer.vinCode;
  plateVar.country.innerText      = currentTrailer.country.toUpperCase();  

  plateVar.road.innerText         = currentTrailer.country === "ru" ? currentTrailer.weight + currentTrailer.techPayload : currentTrailer.roadWeight;

  plateVar.drawbar.innerText      = currentTrailer.couplingLoad;
  plateVar.axle1.innerText        = currentTrailer.singleAxleRoad;
  plateVar.axle2.innerText        = currentTrailer.axleNumber > 1 ? plateVar.axle1.innerText : "-" ;
  plateVar.axle3.innerText        = currentTrailer.axleNumber > 2 ? plateVar.axle1.innerText : "-" ;

  plateVar.full.innerText         = currentTrailer.weight + currentTrailer.techPayload;
  plateVar.roadDrawbar.innerText  = currentTrailer.couplingLoad;
  plateVar.roadAxle1.innerText    = currentTrailer.singleAxleFull;
  plateVar.roadAxle2.innerText    = currentTrailer.axleNumber > 1 ? plateVar.roadAxle1.innerText : "-" ;
  plateVar.roadAxle3.innerText    = currentTrailer.axleNumber > 2 ? plateVar.roadAxle1.innerText : "-" ;

  plateVar.drawbarLoad.innerText  = Math.round(parseFloat(currentTrailer.couplingLoad * 0.0098) * 100) / 100  + " kN";
  plateVar.axleLoad.innerText     = Math.round(parseFloat(currentTrailer.singleAxleRoad * 0.0098) * 100) / 100  + " kN";
  
  plateVar.b1t1.innerText         = currentTrailer.category === "S2a" ? "-" : currentTrailer.couplingDval - currentTrailer.roadWeight > 1500 ? 1500 : currentTrailer.couplingDval - currentTrailer.roadWeight ;
  plateVar.b2t1.innerText         = currentTrailer.category === "S2a" ? "-" : currentTrailer.couplingDval - currentTrailer.roadWeight > 8000 ? 8000 : currentTrailer.couplingDval - currentTrailer.roadWeight ;
  plateVar.b3t1.innerText         = currentTrailer.category === "S2a" ? "-" : currentTrailer.couplingDval - currentTrailer.roadWeight > 18000 ? 18000 : currentTrailer.couplingDval - currentTrailer.roadWeight ;
  plateVar.b4t1.innerText         = currentTrailer.category === "S2a" ? "-" : currentTrailer.couplingDval - currentTrailer.roadWeight > 18000 ? 18000 : currentTrailer.couplingDval - currentTrailer.roadWeight ;

  plateVar.b1t2.innerText         = "-";
  plateVar.b2t2.innerText         = "-";
  plateVar.b3t2.innerText         = "-";
  plateVar.b4t2.innerText         = "-";
  
  plateVar.b1t3.innerText         = "-";
  plateVar.b2t3.innerText         = "-";  
  plateVar.b3t3.innerText         = "-";
  plateVar.b4t3.innerText         = "-";
}

function resetData () {
  plateVar.plate.classList.remove("uniform", "rus", "witam", "nocertOld", "undefined");
  plateVar.plate.classList.add("undefined");
  plateVar.category.innerText = "-";
  plateVar.type.innerText = "-";
  plateVar.variant.innerText = "-";
  plateVar.version.innerText = "-";
  plateVar.year.innerText = "-";
  plateVar.weight.innerText = "-";
  plateVar.roadLoad.innerText = "-";
  plateVar.maxLoad.innerText = "-";
  plateVar.certificate.innerText = "-";
  plateVar.pin.innerText = "-";
  plateVar.country.innerText = "-";
  plateVar.road.innerText = "-";
  plateVar.full.innerText = "-";
  plateVar.drawbar.innerText = "-";
  plateVar.axle1.innerText = "-";
  plateVar.axle2.innerText = "-";
  plateVar.axle3.innerText = "-";
  plateVar.roadDrawbar.innerText = "-";
  plateVar.roadAxle1.innerText = "-";
  plateVar.roadAxle2.innerText = "-";
  plateVar.roadAxle3.innerText = "-";
  plateVar.drawbarLoad.innerText = "-";
  plateVar.axleLoad.innerText = "-";
  plateVar.b1t1.innerText = "-";
  plateVar.b1t2.innerText = "-";
  plateVar.b1t3.innerText = "-";
  plateVar.b2t1.innerText = "-";
  plateVar.b2t2.innerText = "-";
  plateVar.b2t3.innerText = "-";
  plateVar.b3t1.innerText = "-";
  plateVar.b3t2.innerText = "-";
  plateVar.b3t3.innerText = "-";
  plateVar.b4t1.innerText = "-";
  plateVar.b4t2.innerText = "-";
  plateVar.b4t3.innerText = "-";
}

function readYears() {
  // declaring an array of years for the dropdown
  var years = [];
  // filling an array with years from 1984 until now
  for (var i = new Date().getFullYear(); i >= 2000; i--) {
    years.push(i);
  }
  // creating and appending nodes to year dropdown (as options in select)
  for (var year in years) {
    var nodeDOM = document.createElement("option");
    var nodeText = document.createTextNode(years[year]);
    nodeDOM.appendChild(nodeText);
    domVar.inputYear.appendChild(nodeDOM);
  }
  // setting current year as a default
  setYear();
}
function setYear() {
  activator.manufacture = domVar.inputYear.options[domVar.inputYear.selectedIndex].text;
}


function readTrailers() {
  for (var trailer in umegaTrailers) {
    var nodeDOM = document.createElement("option");
    var nodeText = document.createTextNode(umegaTrailers[trailer].name);
    nodeDOM.appendChild(nodeText);
    domVar.trailerChooser.appendChild(nodeDOM);
    activator.numOfTrailers ++;
  }
}
function clearTrailers () {
  activator.model = "";
}
function selectTrailer () {
  activator.model = umegaTrailers[domVar.trailerChooser.options[domVar.trailerChooser.selectedIndex].text.toLowerCase()];
  readCountry();
}

function readCountry () {
  for (var i = 0; i < activator.model.country.length; i++) {
    var nodeDOM = document.createElement("option");
    var nodeText = document.createTextNode(activator.model.country[i].name);
    nodeDOM.appendChild(nodeText);
    domVar.countryChooser.appendChild(nodeDOM);
  }
}
function clearCountry () {
  while (domVar.countryChooser.length > 1) {
    domVar.countryChooser.removeChild(domVar.countryChooser.lastChild);
  }
  clearCertification();
  activator.country = [];
  activator.countryName = "";
  activator.countryLocale = "";
}
function selectCountry () {
  var selection = domVar.countryChooser.options[domVar.countryChooser.selectedIndex].text;
  for (var i = 0; i < activator.model.country.length; i++) {
    var currentCountry = activator.model.country[i];
    if (currentCountry.name === selection) {
      activator.country = activator.model.country[i];
      activator.countryName = activator.model.country[i].name;
      activator.countryLocale = activator.model.country[i].locale;
    }
  }
  readCertification();
}

function readCertification () {
  for (var i = 0; i < activator.model.certificate.length; i++) {
    var currentCert = activator.model.certificate[i];
    if ( currentCert.name === "No certification" || currentCert.name === "European 167/2013" || currentCert.name === activator.countryName) {
      activator.certificates.push(currentCert);
      var nodeDOM = document.createElement("option");
      var nodeText = document.createTextNode(activator.model.certificate[i].name);
      nodeDOM.appendChild(nodeText);
      domVar.certificateChooser.appendChild(nodeDOM);
    }
  }
}
function clearCertification () {
  while (domVar.certificateChooser.length > 1) {
    domVar.certificateChooser.removeChild(domVar.certificateChooser.lastChild);
  }
  activator.certificates = [];
  activator.certName = "";
  activator.certType = "";
  setForm ("undefined");
}
function selectCertification () {
  var selected = domVar.certificateChooser.options[domVar.certificateChooser.selectedIndex].text;
  for (var i = 0; i < activator.certificates.length; i++) {
    if (selected === activator.certificates[i].name) {
      activator.certName = activator.certificates[i].name;
      activator.certType = activator.certificates[i].number;
      activator.okCert = true;
    }
  }
}

// setup table form
function setForm (tableType) {
  plateVar.plate.classList.remove("uniform", "rus", "witam", "nocertOld", "undefined");
  plateVar.plate.classList.add(tableType);
}
function chooseForm () {
  switch (activator.country.locale) {
    case 'ru':
      setForm("rus");
      break;
    case 'dk':
      if (activator.certName === "European 167/2013") {
        setForm("uniform");
      } else {
        setForm("nocertOld")
      }
      break;
    case 'undef':
      setForm("undefined");
      break;
    case 'pl':
      if (activator.certName === "European 167/2013") {
        setForm("uniform");
      } else {
        setForm("witam")
      }
      break;
    default:
      setForm("uniform");
  }
}

function activateElement(domNode) {
  domVar[domNode].classList.remove("deactivated", "activated");
  domVar[domNode].classList.add("activated");
}
function deactivateElement(domNode) {
  domVar[domNode].classList.remove("deactivated", "activated");
  domVar[domNode].classList.add("deactivated");
}

function getVIN () {
  activator.VINcode = domVar.inputPIN.value.toUpperCase();
  //console.log(activator.VINcode);
}
function reactVIN (cssClass) {
  domVar.inputPIN.classList.remove("noPin", "pendingPin", "validPin", "invalidPin");
  domVar.inputPIN.classList.add(cssClass);
}
// VIN code validation on-the-fly
function validateVIN () {
  var vinValid = false;
  switch (activator.VINcode.length) {
    case 1:   
      vinValid =  /U/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 2:   
      vinValid =  /UM/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 3:   
      vinValid =  /UME/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 4:   
      vinValid =  /UME[\dA-Z]/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 5:   
      vinValid =  /UME[\dA-Z][A-Z]/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 6:   
      vinValid =  /UME[\dA-Z][A-Z]{2}/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 7:   
      vinValid =  /UME[\dA-Z][A-Z]{2}\d/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 8:   
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
			activator.okVIN = false;
      break;
    case 9:   
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 10:  
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 11:  
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}\d/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 12:  
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}\d{2}/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 13:  
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}\d{3}/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 14:  
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}\d{4}/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 15:  
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}\d{5}/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 16:  
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}\d{6}/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    default:  
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}\d{7}/g.test(activator.VINcode);
      if (vinValid) {
        reactVIN("validPin");
				activator.okVIN = true;
				// preset model
				// preset year
      } else {
        reactVIN("invalidPin");
        activator.okVIN = false;
      }
      // add VIN to the cookies?
  }
  activator.checkup();
}

function trailerChange () {
  clearCountry();
  activator.okCert = false;
  selectTrailer();
  activator.checkup();
}
function countryChange () {
  clearCertification();
  activator.okCert = false;
  selectCountry();
  activator.checkup();
}
function certificateChange () {
  selectCertification();
  setForm ("undefined");
  chooseForm();
  activator.checkup();
}
function yearChange () {
  //setForm ("undefined");
  setYear();
  activator.checkup();
}
function VINChange () {
  getVIN();
  if (activator.VINcode.length) {
    validateVIN();
  } else {
    activator.okVIN = false;
    reactVIN("noPin");
    deactivateElement("pdfButton");
  }
}

function initialize () {
  readTrailers();
  deactivateElement("pdfButton");
  readYears();
  resetData();
}
// function exportPDF () {
//   doc.save('a4.pdf');
// }

//// WORKFLOW ///////
initialize();
domVar.trailerChooser.addEventListener('change', trailerChange);
domVar.countryChooser.addEventListener('change', countryChange);
domVar.certificateChooser.addEventListener('change', certificateChange);
domVar.inputYear.addEventListener('change', yearChange);
domVar.inputPIN.addEventListener('input', VINChange);
// domVar.pdfButton.addEventListener('click', exportPDF);
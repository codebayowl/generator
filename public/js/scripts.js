// import { objectExpression } from "babel-types";

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
  inputPIN:           document.getElementById("inputPin")
};
// Plate hooks
plateVar = {
  category:     document.getElementById("category"),
  type:         document.getElementById("model"),
  year:         document.getElementById("year"),
  speed:        document.getElementById("speed"),
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
  plate:        document.getElementById("plate"),

  fillPlate: function() {
    this.category.innerText    = currentTrailer.category;
    this.type.innerText        = currentTrailer.model;
    this.year.innerText        = currentTrailer.manufactured;
    this.speed.innerText       = currentTrailer.speed;
    this.weight.innerText      = currentTrailer.weight;
    this.roadLoad.innerText    = currentTrailer.roadWeight;  // roadFull
    this.maxLoad.innerText     = currentTrailer.techPayload + currentTrailer.weight;  // techFull
    this.certificate.innerText = currentTrailer.homologation;
    this.pin.innerText         = currentTrailer.vinCode;
    this.full.innerText        = currentTrailer.techPayload; // PAYLOAD
    this.drawbar.innerText     = currentTrailer.couplingVert;
    this.axle1.innerText       = currentTrailer.singleAxleFull;
    currentTrailer.axleNumber > 1 ?  this.axle2.innerText = currentTrailer.singleAxleFull : this.axle2.innerText = "-";
    currentTrailer.axleNumber > 2 ?  this.axle3.innerText = currentTrailer.singleAxleFull : this.axle3.innerText = "-";
    this.roadDrawbar.innerText = currentTrailer.couplingVert;
    this.roadAxle1.innerText   = currentTrailer.singleAxleRoad;
    currentTrailer.axleNumber > 1 ?  this.roadAxle2.innerText = currentTrailer.singleAxleRoad : this.roadAxle2.innerText = "-";
    currentTrailer.axleNumber > 2 ?  this.roadAxle3.innerText = currentTrailer.singleAxleRoad : this.roadAxle3.innerText = "-";
    this.axlesru.innerText     = currentTrailer.axleLoadRu;
    this.axlesdk.innerText     = currentTrailer.axleLoadDk;
    this.drawbarLoad.innerText = currentTrailer.drawbarLoadPl;  // polska
    this.axleLoad.innerText    = currentTrailer.axleLoadPl;  // polska
    this.b1t1.innerText        = currentTrailer.brakesConfig[0];
    this.b2t1.innerText        = currentTrailer.brakesConfig[1];
    this.b3t1.innerText        = currentTrailer.brakesConfig[2];
    this.b4t1.innerText        = currentTrailer.brakesConfig[3];
  },
  resetPlate: function() {
    this.category.innerText    = "-";
    this.type.innerText        = "-";
    this.year.innerText        = "-";
    this.speed.innerText       = "-";
    this.weight.innerText      = "-";
    this.roadLoad.innerText    = "-";
    this.maxLoad.innerText     = "-";
    this.certificate.innerText = "-";
    this.pin.innerText         = "-";
    this.full.innerText        = "-";
    this.drawbar.innerText     = "-";
    this.axle1.innerText       = "-";
    this.axle2.innerText       = "-";
    this.axle3.innerText       = "-";
    this.roadDrawbar.innerText = "-";
    this.roadAxle1.innerText   = "-";
    this.roadAxle2.innerText   = "-";
    this.roadAxle3.innerText   = "-";
    this.axlesru.innerText     = "-";
    this.axlesdk.innerText     = "-";
    this.drawbarLoad.innerText = "-";
    this.axleLoad.innerText    = "-";
    this.b1t1.innerText        = "-";
    this.b1t2.innerText        = "-";
    this.b1t3.innerText        = "-";
    this.b2t1.innerText        = "-";
    this.b2t2.innerText        = "-";
    this.b2t3.innerText        = "-";
    this.b3t1.innerText        = "-";
    this.b3t2.innerText        = "-";
    this.b3t3.innerText        = "-";
    this.b4t1.innerText        = "-";
    this.b4t2.innerText        = "-";
    this.b4t3.innerText        = "-";
  }
};
currentTrailer = {
  category:       "",
  model:          "",
  manufactured:   0,
  speed:          0,
  weight:         0,
  couplingVert:   0,
  techPayload:    0,
  homologation:   "",
  vinCode:        "",
  roadWeight:     0,
  axleNumber:     0,
  drawbar:        0,
  axleLoadRoad:   0,
  axleLoadFull:   0,
  singleAxleRoad: 0,
  singleAxleFull: 0,
  axleLoadDk:     0,
  axleLoadRu:     0,
  axleLoadPl:     0,
  drawbarLoadPl:  0,
  brakesConfig:   [],

  secondTrailer: function() {
    // допустимый вес второго прицепа (вес трактора принимаем равным 15 тоннам)
    var tractorWeight = 15000;
    var unbrakedMax = 1500;
    var inertiaMax = 8000;
    var continuousMax = 18000;
    var pneumohydroMax = 18000;
    var gravityconst = 9.8;
    var dvalFront = activator.model.couplingFront.dval;
    var dvalRear = activator.model.couplingRear.dval;
    var isSecond = activator.model.couplingRear.presence;
    var t1b1;
    var t1b2;
    var t1b3;
    var t1b4;
    var operatingDval; // выбор наименьшего значения дин.нагрузки, с которой работаем
    dvalFront > dvalRear ? operatingDval = dvalRear : operatingDval = dvalFront;
    var trailersWeightMax = Math.round(-1 * ((operatingDval * (tractorWeight/1000)) / (operatingDval - (gravityconst * (tractorWeight/1000)))));
    var secondTrailerWeight = Math.floor(((trailersWeightMax * 1000) - this.weight)/1000)*1000;

    if (isSecond) {
      secondTrailerWeight > unbrakedMax ? t1b1 = unbrakedMax : t1b1 = secondTrailerWeight;
      secondTrailerWeight > inertiaMax ? t1b2 = inertiaMax : t1b2 = secondTrailerWeight;
      secondTrailerWeight > continuousMax ? t1b3 = continuousMax : t1b3 = secondTrailerWeight;
      secondTrailerWeight > pneumohydroMax ? t1b4 = pneumohydroMax : t1b4 = secondTrailerWeight;
    } else {
      t1b1 = "-";
      t1b2 = "-";
      t1b3 = "-";
      t1b4 = "-";
    }
    
    var brakes = [];
    brakes.push(t1b1, t1b2, t1b3, t1b4);
    return brakes;
  },

  build: function() {
    // собираем информацию о прицепе
    this.category       = activator.model.category;

    // Choose a trailer name according to certification...
    // if (activator.certification.name === "No certification") {
    //   this.model = activator.country.type;
    // } else {
    //   this.model = activator.certification.type;
    // }
    // ...OR choose name as is:
    this.model = activator.country.type;

    this.manufactured   = activator.manufacture;
    this.speed          = activator.model.speed;
    this.weight         = activator.country.weight != null ? activator.country.weight : activator.model.weight;
    // this.couplingVert   = activator.model.couplingFront.vval;
    // added 2020-08-31  load on coupling point according to local sertification. 
    // Need to add local values to DB "country" section
    this.couplingVert   = activator.country.drawbar != null ? activator.country.drawbar : activator.model.couplingFront.vval;
    this.techPayload    = activator.country.techPayload != null ? activator.country.techPayload : activator.model.techPayload;
    this.homologation   = activator.certification.number;
    this.vinCode        = activator.VINcode;
    this.roadWeight     = activator.model.roadWeight;
    this.axleNumber     = activator.model.axleNum;
    this.drawbar        = activator.model.couplingFront.vval;
    this.axleLoadRoad   = this.roadWeight - this.couplingVert;
    this.axleLoadFull   = this.techPayload + this.weight - this.couplingVert;
    this.singleAxleRoad = Math.round(this.axleLoadRoad / this.axleNumber);
    this.singleAxleFull = Math.round(this.axleLoadFull / this.axleNumber);
    // axleLoadDk
    if (this.axleNumber === 1) {
      this.axleLoadDk = this.axleLoadRoad;
    } else if (this.axleNumber === 2) {
      this.axleLoadDk = Math.round(this.axleLoadRoad/2) + " / " + Math.round(this.axleLoadRoad/2);
    } else if (this.axleNumber === 3) {
      this.axleLoadDk = Math.round(this.axleLoadRoad/3) + "/" + Math.round(this.axleLoadRoad/3) + "/" + Math.round(this.axleLoadRoad/3);
    }
    // axleLoadRu
    if (this.axleNumber === 1) {
      this.axleLoadRu = this.axleLoadFull;
    } else if (this.axleNumber === 2) {
      // For russian PI20 trailer we just show russian homologation data ("12690 / 12690"), for other trailers - calculating loads:
      if (this.model == "PI20") {
        this.axleLoadRu = "12690 / 12690";
      }
       else {
        this.axleLoadRu = Math.round(this.axleLoadFull/2) + " / " + Math.round(this.axleLoadFull/2);
      }
    } else if (this.axleNumber === 3) {
      this.axleLoadRu = Math.round(this.axleLoadFull/3) + "/" + Math.round(this.axleLoadFull/3) + "/" + Math.round(this.axleLoadFull/3);
    }
    this.axleLoadPl = Math.round((this.singleAxleRoad / 1000) * 98)/10 + " kN";
    this.drawbarLoadPl = Math.round((this.drawbar / 1000) * 98)/10 + " kN";
    this.brakesConfig = this.secondTrailer();
  },

  clear: function() {
    this.category        = "",
    this.model           = "",
    this.manufactured    = 0,
    this.speed           = 0,
    this.weight          = 0,
    this.couplingVert    = 0,
    this.techPayload     = 0,
    this.homologation    = "",
    this.vinCode         = "",
    this.roadWeight      = 0,
    this.axleNumber      = 0,
    this.drawbar         = 0,
    this.axleLoadRoad    = 0,
    this.axleLoadFull    = 0,
    this.singleAxleRoad  = 0,
    this.singleAxleFull  = 0,
    this.axleLoadDk      = 0,
    this.axleLoadRu      = 0,
    this.axleLoadPl      = 0,
    this.drawbarLoadPl   = 0,
    this.brakesConfig    = []
  }
  
};
//////////// Database /////////////
umegaTrailers = {
  gpp23:   {
    name:         "GPP23",
    category:     "S2a",
    variant:      "23",
    typeEC:       "GPP",
    weight:       7140,
    techPayload:  18000,
    roadWeight:   21000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 135,
      vval: 3000
    },
    couplingRear: {
      presence:   false,
      dval:       0
    },
    certificate: [
      {
        name: "European 167/2013",
        number: "e32*167/2013*00029*00",
        type: "GPP23"
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
        type:   "GPP23",
        drawbar: 3000,
        weight: 7500,
        techPayload: 17000
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
    techPayload:  24000,
    roadWeight:   24000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 4000
    },
    couplingRear: {
      presence:   false,
      dval:       0
    },
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00029*00",
        type: "GPP23HD"
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
        type:   "GPP23HD",
        drawbar: 3000
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
    techPayload:  27000,
    roadWeight:   24000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 4000
    },
    couplingRear: {
      presence:   false,
      dval:       0
    },
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00029*00",
        type: "GPP27L"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "GPP27L"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "GPP27L"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "GPP27L"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "GPP27L"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "GPP27L"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "GPP27L"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "GPP27L"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "GPP27L"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "GPP27L"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "GPP27L"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "GPP27L"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "GPP27L"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "GPP27L"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "GPP27L"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "GPP27L"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "GPP27L"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "GPP27L"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "GPP27L"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "GPP27L"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "GPP27L"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "GPP27L"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "GPP27L"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "GPP27L"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "GPP27L"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "GPP27L"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "GPP27L"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "GPP27L",
        drawbar: 4000
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "GPP27L"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "GPP27L"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "GPP27L"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "GPP27L"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "GPP27L"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "GPP27L"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "GPP27L"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "GPP27L"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "GPP27L"
      }
    ]
  },
  pi20:   {
    name:         "PI20",
    category:     "S2a",
    variant:      "20",
    typeEC:       "PI",
    weight:       8370,
    techPayload:  20000,
    roadWeight:   24000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 4000
    },
    couplingRear: {
      presence:   false,
      dval:       0
    },
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00021*00",
        type: "PI20"
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
        type:   "PI20",
        drawbar: 3000
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
  pi20r:   {
    name:         "PI20R",
    category:     "R3a",
    variant:      "20",
    typeEC:       "PI",
    weight:       8370,
    techPayload:  20000,
    roadWeight:   24000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 4000
    },
    couplingRear: {
      presence:   false,
      dval:       0
    },
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00069*00",
        type: "PI20"
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
        type:   "PI20",
        drawbar: 3000
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
    category:     "R4a",
    variant:      "42",
    typeEC:       "PI",
    weight:       14700,
    techPayload:  42000,
    roadWeight:   28000,
    axleNum:      3,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 4000
    },
    couplingRear: {
      presence:   false,
      dval:       0
    },
    certificate: [
      {
        name: "No certification",
        number: "",
        type: "PI42"
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00070*00",
        type: "PI42"
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
        type:   "PI42",
        weight: 14500
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
    techPayload:  12000,
    roadWeight:   20500,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 2500
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
    certificate: [
      {
        name: "No certification",
        number: ""
      },/*
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
    techPayload:  14000,
    roadWeight:   21000, //18050!!
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 3000 // 2500!!
    },
    couplingRear: {
      presence:   true,
      dval:       78 //96!
    },
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00",
        type: "SPB14"
      },
      {
        name: "Poland",
        number: "PL*4404*00",
        type: "SP1/SPB14"
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
  spb16:   {
    name:         "SPB16",
    category:     "R3a",
    variant:      "B",
    typeEC:       "TIP16 B",
    weight:       5600,
    techPayload:  16000,
    roadWeight:   21000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 135,
      vval: 3000
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
    certificate: [
      {
        name: "No certification",
        number: "",
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00015*01",
        type: "SPB16"
      }/*,
      {
        name: "Poland",
        number: "PL*4404*00",
        type: "SP1/SPC16"
      }*/
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPB16"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPB16"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPB16"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPB16"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPB16"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPB16"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPB16"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPB16"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPB16"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPB16"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPB16"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPB16"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPB16"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPB16"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPB16"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPB16"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPB16"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPB16"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPB16"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPB16"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPB16"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPB16"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPB16"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPB16"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPB16"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPB16"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPB16"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPB16"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPB16"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPB16"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPB16"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPB16"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPB16"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPB16"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPB16"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPB16"
      }
    ]
  },
  spr14:   {
    name:         "SPR14",
    category:     "R3a",
    variant:      "R",
    typeEC:       "TIP14",
    weight:       4250,
    techPayload:  14000,
    roadWeight:   20500,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 2500
    },
    couplingRear: {
      presence:   false,
      dval:       0
    },
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
        type:   "SPR14"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPR14"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPR14"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPR14"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPR14"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPR14"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPR14"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPR14"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPR14"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPR14"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPR14"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPR14"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPR14"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPR14"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPR14"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPR14"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPR14"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPR14"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPR14"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPR14"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPR14"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPR14"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPR14"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPR14"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPR14"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPR14"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPC14R"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPR14"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPR14"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPR14"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPR14"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPR14"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPR14"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPR14"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPR14"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPR14"
      }
    ]
  },
  spc10u:   {
    name:         "SPC10U",
    category:     "R3a",
    variant:      "10C",
    typeEC:       "TIP12",
    weight:       3650,
    techPayload:  10000,
    roadWeight:   20500,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 2500
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
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
        number: "PL*4404*00",
        type: "SP1/SPC10"
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
  spc10b:   {
    name:         "SPC10B",
    category:     "R3a",
    variant:      "10C",
    typeEC:       "TIP12",
    weight:       3500,
    techPayload:  10000,
    roadWeight:   13490,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 2000
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
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
        number: "PL*4404*00",
        type: "SP1/SPC10"
      }*/
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
    techPayload:  12000,
    roadWeight:   16150,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 2500
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
    certificate: [
      {
        name: "No certification",
        number: "",
        type: "SPC12"
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      }*/,
      {
        name: "Poland",
        number: "PL*4404*00",
        type: "SP1/SPC12"
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
  spc12b:   {
    name:         "SPC12B",
    category:     "R3a",
    variant:      "C",
    typeEC:       "TIP12",
    weight:       3640,
    techPayload:  12000,
    roadWeight:   15640,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 2000
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
    certificate: [
      {
        name: "No certification",
        number: "",
        type: "SPC12"
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00",
        type: "SP1/SPC12"
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
    weight:       4450, // 4100!
    techPayload:  14000,
    roadWeight:   21000, // 18450
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 3000 // 2500
    },
    couplingRear: {
      presence:   true,
      dval:       78 //96
    },
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00",
        type: "SPC14"
      },
      {
        name: "Poland",
        number: "PL*4404*00",
        type: "SP1/SPC14"
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
    typeEC:       "TIP16 16",
    weight:       5500,
    techPayload:  16000,
    roadWeight:   21000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 135,
      vval: 3000
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
    certificate: [
      {
        name: "No certification",
        number: "",
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00015*01",
        type: "SPC16"
      },
      {
        name: "Poland",
        number: "PL*4404*00",
        type: "SP1/SPC16"
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
        type:   "SPC18"
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
        type:   "SPC16"
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
    techPayload:  19500,
    roadWeight:   21000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 135,
      vval: 3000
    },
    couplingRear: {
      presence:   true, // turi buti false
      dval:       92
    },
    certificate: [
      {
        name: "No certification",
        number: "",
        type: "SPC20L"
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00031*00",
        type: "SPC20L"
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
    techPayload:  20000,
    roadWeight:   24000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 4000
    },
    couplingRear: {
      presence:   true, // turi buti false
      dval:       96
    },
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00031*00",
        type: "SPC19"
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
  spc20:   {
    name:         "SPC20",
    category:     "R3a",
    variant:      "20",
    typeEC:       "TIP16 20",
    weight:       6700,
    techPayload:  20000,
    roadWeight:   21000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 135,
      vval: 3000
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
    certificate: [
      {
        name: "No certification",
        number: "",
        type: "SPC20"
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00015*01",
        type: "SPC20"
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
    category:     "R4a",
    variant:      "C24",
    typeEC:       "TIP28",
    weight:       9000,
    techPayload:  24000,
    roadWeight:   28000,
    axleNum:      3,
    speed: 40,
    couplingFront: {
      dval: 135,
      vval: 4000
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00061*00",
        type: "SPC24"
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
    name:         "SPC30",
    category:     "R4a",
    variant:      "C30",
    typeEC:       "TIP28",
    weight:       9500,
    techPayload:  30000,
    roadWeight:   28000,
    axleNum:      3,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 4000
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00061*00",
        type: "SPC30"
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
    weight:       3800,
    techPayload:  10000,
    roadWeight:   13800,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 2500
    },
    couplingRear: {
      presence:   false,
      dval:       96
    },
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
  spd12b:   {
    name:         "SPD12B",
    category:     "R3a",
    variant:      "B",
    typeEC:       "SPD12B",
    weight:       3850,
    techPayload:  12000,
    roadWeight:   15850,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 2000
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
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
        type:   "SPD12"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPD12"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPD12"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPD12"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPD12"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPD12"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPD12"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPD12"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPD12"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPD12"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPD12"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPD12"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPD12"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPD12"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPD12"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPD12"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPD12"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPD12"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPD12"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPD12"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPD12"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPD12"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPD12"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPD12"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPD12"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPD12"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPD12"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPD12"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPD12"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPD12"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPD12"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPD12"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPD12"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPD12"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPD12"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPD12"
      }
    ]
  },
  spd13:   {
    name:         "SPD13",
    category:     "R3a",
    variant:      "S",
    typeEC:       "SPD13",
    weight:       3350,
    techPayload:  12000,
    roadWeight:   20500,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 2500
    },
    couplingRear: {
      presence:   false,
      dval:       96
    },
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
  spd14:   {
    name:         "SPD14",
    category:     "R3a",
    variant:      "S",
    typeEC:       "SPD14",
    weight:       4760,
    techPayload:  14000,
    roadWeight:   18760,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 2500
    },
    couplingRear: {
      presence:   false,
      dval:       96
    },
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
        type:   "SPD14"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPD14"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPD14"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPD14"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPD14"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPD14"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPD14"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPD14"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPD14"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPD14"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPD14"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPD14"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPD14"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPD14"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPD14"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPD14"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPD14"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPD14"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPD14"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPD14"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPD14"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPD14"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPD14"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPD14"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPD14"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPD14"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPD14"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPD14"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPD14"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPD14"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPD14"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPD14"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPD14"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPD14"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPD14"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPD14"
      }
    ]
  },
  spd14dariaus:   {
    name:         "SPD14dariaus",
    category:     "R3a",
    variant:      "S",
    typeEC:       "SPD14",
    weight:       4760,
    techPayload:  5240,
    roadWeight:   10000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 2500
    },
    couplingRear: {
      presence:   false,
      dval:       96
    },
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
        type:   "SPD14"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPD14"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPD14"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPD14"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPD14"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPD14"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPD14"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPD14"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPD14"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPD14"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPD14"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPD14"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPD14"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPD14"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPD14"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPD14"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPD14"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPD14"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPD14"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPD14"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPD14"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPD14"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPD14"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPD14"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPD14"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPD14"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPD14"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPD14"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPD14"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPD14"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPD14"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPD14"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPD14"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPD14"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPD14"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPD14"
      }
    ]
  },
  spd17:   {
    name:         "SPD17",
    category:     "R3a",
    variant:      "S",
    typeEC:       "SPD17",
    weight:       5800,
    techPayload:  16000,
    roadWeight:   21000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 135,
      vval: 3000
    },
    couplingRear: {
      presence:   false,
      dval:       96
    },
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
    techPayload:  14000,
    roadWeight:   21000, //18550
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 3000 // 2500
    },
    couplingRear: {
      presence:   true,
      dval:       78 //96
    },
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00",
        type: "SPE14"
      },
      {
        name: "Poland",
        number: "PL*4404*00",
        type: "SP1/SPC14"
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
        type:   "SP1/SPC14"
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
    techPayload:  16000,
    roadWeight:   21000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 135,
      vval: 3000
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      /*{
        name: "European 167/2013",
        number: "e32*167/2013*00015*02"
      },*/
      {
        name: "Poland",
        number: "PL*4404*00",
        type: "SP1/SPC16"
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
        type:   "SP1/SPC16"
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
    techPayload:  20000,
    roadWeight:   24000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 4000
    },
    couplingRear: {
      presence:   true, // turi buti false
      dval:       74.5
    },
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00031*00",
        type: "SPE19"
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
    techPayload:  10000,
    roadWeight:   13700,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 0
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
    certificate: [
      {
        name: "No certification",
        number: "-",
        type: "SPP10P"
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00050*01",
        type: "SPP10P"
      },
      {
        name: "Poland",
        number: "PL*44810*00",
        type: "SP2/SPP10"
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
        type:   "SPP10P"
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
  spp08u:   {
    name:         "SPP08U",
    category:     "R3a",
    variant:      "U",
    typeEC:       "SPP8",
    weight:       2700,
    techPayload:  8000,
    roadWeight:   10700,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 0
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
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
        number: "PL*44810*00",
        type: "SPP8"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPP8"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPP8"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPP8"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPP8"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPP8"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPP8"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPP8"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPP8"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPP8"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPP8"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPP8"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPP8"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPP8"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPP8"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPP8"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPP8"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPP8"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPP8"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPP8"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPP8"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPP8"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPP8"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPP8"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP2/SPP8"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPP8"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPP8"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPP8"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPP8"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPP8"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPP8"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPP8"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPP8"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPP8"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPP8"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPP8"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPP8"
      }
    ]
  },
  spp10u:   {
    name:         "SPP10U",
    category:     "R3a",
    variant:      "U",
    typeEC:       "SPP10",
    weight:       3700,
    techPayload:  10000,
    roadWeight:   18000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 0
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
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
        number: "PL*44810*00",
        type: "SPP10"
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
    techPayload:  12000,
    roadWeight:   15800,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 0
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
    certificate: [
      {
        name: "No certification",
        number: "-",
        type: "SPP12P"
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00050*01",
        type: "SPP12P"
      },
      {
        name: "Poland",
        number: "PL*44810*00",
        type: "SP2/SPP12"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPP12P"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPP12P"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPP12P"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPP12P"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPP12P"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPP12P"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPP12P"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPP12P"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPP12P"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPP12P"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPP12P"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPP12P"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPP12P"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPP12P"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPP12P"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPP12P"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPP12P"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPP12P"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPP12P"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPP12P"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPP12P"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPP12P"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPP12P"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP2/SPP12"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPP12P"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPP12P"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPP12P"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPP12P"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPP12P"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPP12P"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPP12P"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPP12P"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPP12P"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPP12P"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPP12P"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPP12P"
      }
    ]
  },
  spp12u:   {
    name:         "SPP12U",
    category:     "R3a",
    variant:      "U",
    typeEC:       "SPP12",
    weight:       4000,
    techPayload:  12000,
    roadWeight:   16000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 0
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
    certificate: [
      {
        name: "No certification",
        number: "",
        type: "SPP12"
      },
      /*{
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },*/
      {
        name: "Poland",
        number: "PL*44810*00",
        type: "SPP12"
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
    weight:       4850,
    techPayload:  14000,
    roadWeight:   18850,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 0
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
    certificate: [
      {
        name: "No certification",
        number: "",
        type: "SPP14P"
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00050*01",
        type: "SPP14P"
      },
      {
        name: "Poland",
        number: "PL*44810*00",
        type: "SP2/SPP14"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPP14P"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPP14P"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPP14P"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPP14P"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPP14P"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPP14P"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPP14P"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPP14P"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPP14P"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPP14P"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPP14P"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPP14P"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPP14P"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPP14P"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPP14P"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPP14P"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPP14P"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPP14P"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPP14P"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPP14P"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPP14P"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPP14P"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPP14P"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP2/SPP14"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPP14P"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPP14P"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPP14P"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPP14P"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPP14P"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPP14P"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPP14P"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPP14P"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPP14P"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPP14P"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPP14P"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPP14P"
      }
    ]
  },
  spp14u:   {
    name:         "SPP14U",
    category:     "R3a",
    variant:      "14U",
    typeEC:       "SPP14",
    weight:       4750,
    techPayload:  14000,
    roadWeight:   18000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 0
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
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
        number: "PL*44810*00",
        type: "SPP14"
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
    techPayload:  16000,
    roadWeight:   20000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 0
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
    certificate: [
      {
        name: "No certification",
        number: "",
        type: "SPP16P"
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00050*01",
        type: "SPP16P"
      },
      {
        name: "Poland",
        number: "PL*44810*00",
        type: "SP2/SPP16"
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
    techPayload:  16000,
    roadWeight:   20000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 0
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
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
        number: "PL*44810*00",
        type: "SPP16"
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
    techPayload:  14000,
    roadWeight:   18000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 0
    },
    couplingRear: {
      presence:   false,
      dval:       0
    },
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
    techPayload:  3500,
    roadWeight:   10800,
    axleNum:      1,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 800
    },
    couplingRear: {
      presence:   false,
      dval:       0
    },
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
  spt05:   {
    name:         "SPT05",
    category:     "R3a",
    variant:      "5",
    typeEC:       "TIP5",
    weight:       1500,
    techPayload:  5000,
    roadWeight:   6500,
    axleNum:      1,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 1500
    },
    couplingRear: {
      presence:   false,
      dval:       0
    },
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
        type:   "SPT5"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPT5"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPT5"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPT5"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPT5"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPT5"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPT5"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPT5"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPT5"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPT5"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPT5"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPT5"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPT5"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPT5"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPT5"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPT5"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPT5"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPT5"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPT5"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPT5"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPT5"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPT5"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPT5"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPT5"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPT5"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPT5"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPT5"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPT5"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPT5"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPT5"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPT5"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPT5"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPT5"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPT5"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPT5"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPT5"
      }
    ]
  },
  spt10:   {
    name:         "SPT10",
    category:     "R3a",
    variant:      "T",
    typeEC:       "TIP10",
    weight:       3700,
    techPayload:  10000,
    roadWeight:   20500,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 2500
    },
    couplingRear: {
      presence:   false,
      dval:       0
    },
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
        number: "PL*4404*00",
        type: "SP1/SPT10"
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
        type:   "SP1/SPT10"
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
    techPayload:  12000,
    roadWeight:   16100,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 2500
    },
    couplingRear: {
      presence:   false,
      dval:       0
    },
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
        number: "PL*4404*00",
        type: "SP1/SPT12"
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
        type:   "SP1/SPT12"
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
    techPayload:  14000,
    roadWeight:   21000, // 18500
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 3000 // 2500
    },
    couplingRear: {
      presence:   true,
      dval:       78 // 96
    },
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00",
        type: "SPT14"
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
    techPayload:  15700,
    roadWeight:   21000,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 135,
      vval: 3000
    },
    couplingRear: {
      presence:   true,
      dval:       96
    },
    certificate: [
      {
        name: "No certification",
        number: ""
      }/*,
      {
        name: "European 167/2013",
        number: "e32*167/2013*00015*02"
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
    techPayload:  5000,
    roadWeight:   6000,
    axleNum:      1,
    speed: 40,
    couplingFront: {
      dval: 120,
      vval: 500
    },
    couplingRear: {
      presence:   false,
      dval:       0
    },
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
    techPayload:  8000,
    roadWeight:   9680,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 1500
    },
    couplingRear: {
      presence:   false,
      dval:       0
    },
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
    techPayload:  10000,
    roadWeight:   12600,
    axleNum:      2,
    speed: 40,
    couplingFront: {
      dval: 125,
      vval: 2000
    },
    couplingRear: {
      presence:   false,
      dval:       0
    },
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
  country:        {},
  certification:  {},
  manufacture:    0,
  VINcode:        "",
  okYear:         false,
  okModel:        false,
  okVIN:          false,
  okCert:         false,
  // METHODS //
  checkup: function () {
    if (this.okVIN && this.okCert) {
      currentTrailer.build();
      chooseForm();
      plateVar.fillPlate();
    } else {
      currentTrailer.clear();
      setForm("undefined");
    }
  }
};

function getVIN () {
  activator.VINcode = domVar.inputPIN.value.toUpperCase();
}
function parseVIN () {
	var vinextract = ["0", "0"];
  vinextract[0] = activator.VINcode[3] + activator.VINcode[4] + activator.VINcode[5] + activator.VINcode[6] + activator.VINcode[7];
  
  switch (activator.VINcode[9]) {
    case "G" : vinextract[1] = "2016"; break;
    case "H" : vinextract[1] = "2017"; break;
    case "J" : vinextract[1] = "2018"; break;
    case "K" : vinextract[1] = "2019"; break;
    case "L" : vinextract[1] = "2020"; break;
    case "M" : vinextract[1] = "2021"; break;
    case "N" : vinextract[1] = "2022"; break;
    case "P" : vinextract[1] = "2023"; break;
    case "R" : vinextract[1] = "2024"; break;
    case "S" : vinextract[1] = "2025"; break;
    case "T" : vinextract[1] = "2026"; break;
    case "V" : vinextract[1] = "2027"; break;
    case "W" : vinextract[1] = "2028"; break;
    case "X" : vinextract[1] = "2029"; break;
    case "Y" : vinextract[1] = "2030"; break;
    case "1" : vinextract[1] = "2031"; break;
    case "2" : vinextract[1] = "2032"; break;
    case "3" : vinextract[1] = "2033"; break;
    case "4" : vinextract[1] = "2034"; break;
    case "5" : vinextract[1] = "2035"; break;
    case "6" : vinextract[1] = "2036"; break;
    case "7" : vinextract[1] = "2037"; break;
    case "8" : vinextract[1] = "2038"; break;
    case "9" : vinextract[1] = "2039"; break;
    case "A" : vinextract[1] = "2040"; break;
    case "B" : vinextract[1] = "2041"; break;
    case "C" : vinextract[1] = "2042"; break;
    case "D" : vinextract[1] = "2043"; break;
    case "E" : vinextract[1] = "2044"; break;
    case "F" : vinextract[1] = "2045";
  }
  
	return vinextract;
}

function reactVIN (cssClass) {
  domVar.inputPIN.classList.remove("noPin", "pendingPin", "validPin", "invalidPin");
  domVar.inputPIN.classList.add(cssClass);
}
function vinUnlocker() {
  if (activator.okVIN) {
    if (activator.okModel && activator.okYear) {
      activateElement("trailerChooser");
      activateElement("inputYear");
      activateElement("countryChooser");
    } else {
      activateElement("trailerChooser");
      activateElement("inputYear");
      deactivateElement("countryChooser");
    }
  } else {
    deactivateElement("trailerChooser");
    deactivateElement("inputYear");
    deactivateElement("countryChooser");
  }
}
// VIN code validation on-the-fly

function validateVIN () {
  var vinValid = false;
  function vinValidationActions () {
    vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
    activator.okVIN = false;
    vinUnlocker();
    unsetTrailer();
    unsetYear();
    unsetCountry();
  }
  switch (activator.VINcode.length) {
    case 1:   
      vinValid =  /U/g.test(activator.VINcode); 
      vinValidationActions();
      break;
    case 2:   
      vinValid =  /UM/g.test(activator.VINcode); 
      vinValidationActions();
      break;
    case 3:   
      vinValid =  /UME/g.test(activator.VINcode); 
      vinValidationActions();
      break;
    case 4:   
      vinValid =  /UME[\dA-Z]/g.test(activator.VINcode); 
      vinValidationActions();
      break;
    case 5:   
      vinValid =  /UME[\dA-Z][A-Z]/g.test(activator.VINcode); 
      vinValidationActions();
      break;
    case 6:   
      vinValid =  /UME[\dA-Z][A-Z]{2}/g.test(activator.VINcode); 
      vinValidationActions();
      break;
    case 7:   
      vinValid =  /UME[\dA-Z][A-Z]{2}[\dA-Z]/g.test(activator.VINcode); 
      vinValidationActions();
      break;
    case 8:   
      vinValid =  /UME[\dA-Z][A-Z]{2}[\dA-Z]\d/g.test(activator.VINcode); 
      vinValidationActions();
      break;
    case 9:   
      vinValid =  /UME[\dA-Z][A-Z]{2}[\dA-Z]\d[A-Z]/g.test(activator.VINcode); 
      vinValidationActions();
      break;
    case 10:  
      vinValid =  /UME[\dA-Z][A-Z]{2}[\dA-Z]\d[A-Z]{2}/g.test(activator.VINcode); 
      vinValidationActions();
      break;
    case 11:  
      vinValid =  /UME[\dA-Z][A-Z]{2}[\dA-Z]\d[A-Z]{2}\d/g.test(activator.VINcode); 
      vinValidationActions();
      break;
    case 12:  
      vinValid =  /UME[\dA-Z][A-Z]{2}[\dA-Z]\d[A-Z]{2}\d{2}/g.test(activator.VINcode); 
      vinValidationActions();
      break;
    case 13:  
      vinValid =  /UME[\dA-Z][A-Z]{2}[\dA-Z]\d[A-Z]{2}\d{3}/g.test(activator.VINcode); 
      vinValidationActions();
      break;
    case 14:  
      vinValid =  /UME[\dA-Z][A-Z]{2}[\dA-Z]\d[A-Z]{2}\d{4}/g.test(activator.VINcode); 
      vinValidationActions();
      break;
    case 15:  
      vinValid =  /UME[\dA-Z][A-Z]{2}[\dA-Z]\d[A-Z]{2}\d{5}/g.test(activator.VINcode); 
      vinValidationActions();
      break;
    case 16:  
      vinValid =  /UME[\dA-Z][A-Z]{2}[\dA-Z]\d[A-Z]{2}\d{6}/g.test(activator.VINcode); 
      vinValidationActions();
      break;
    default:  
      vinValid =  /UME[\dA-Z][A-Z]{2}[\dA-Z]\d[A-Z]{2}\d{7}/g.test(activator.VINcode);
      if (vinValid) {
        reactVIN("validPin");
        activator.okVIN = true;
        presetTrailer();
        vinUnlocker();
      } else {
        reactVIN("invalidPin");
        activator.okVIN = false;
        vinUnlocker();
        unsetTrailer();
        unsetYear();
        unsetCountry();
      }
      // add VIN to cookies?
  }
  activator.checkup();
}


// Parsing 'database' trailer names and shaping html list of trailers
function formTrailerList () {
  for (var trailer in umegaTrailers) {
    // getting element text
    var text = umegaTrailers[trailer].name;
    // Getting element value
    var value = text.toLowerCase();
    // Creating new element
    var newOption = new Option(text, value);
    domVar.trailerChooser.options[domVar.trailerChooser.options.length]=newOption;
  }
}
// According parsed VIN, choosing a relevant item from list
function presetTrailer () {
  var model = parseVIN()[0].toLowerCase();
  var year = parseVIN()[1];
  // Setting a model as active
  for (i=0; i < domVar.trailerChooser.options.length; i++) {
    if((domVar.trailerChooser.options[i].value.toLowerCase().slice(0,5) === model.toLowerCase()) || 
        (domVar.trailerChooser.options[i].value.toLowerCase().slice(0,4) === "pi20" && model.toLowerCase() === "0pt20") ||
        (domVar.trailerChooser.options[i].value.toLowerCase().slice(0,4) === "pi42" && model.toLowerCase() === "0pt42") ||
        (domVar.trailerChooser.options[i].value.toLowerCase().slice(0,6) === "spc20l" && model.toLowerCase() === "spl20")) {
      setTrailer(i);
      selectTrailer();
      break;
    }
  }
  // Setting a year compared with parsed value.
  for (i=0; i < domVar.inputYear.options.length; i++) {
    if(domVar.inputYear.options[i].value == year) {
      setYear(i);
      selectYear();
      break;
    }
  }
}
function unsetTrailer () {
  domVar.trailerChooser.options[0].selected = true;
  currentTrailer.clear();
  activator.model = {};
  activator.okModel = false;
}
// changing the select to a relevant value (according received index)
function setTrailer (optionIndex) {
  domVar.trailerChooser.options[optionIndex].selected = true;
}
// copying a relevant object from the database
function selectTrailer () {
  activator.model = umegaTrailers[domVar.trailerChooser.options[domVar.trailerChooser.selectedIndex].text.toLowerCase()];
  activator.okModel = true;
  readCountry();
}
// Clearing the activator and putting the dropdown to initial position
function clearTrailers () {
  activator.model = {};
  domVar.trailerChooser.options[0].selected = true;
}

function formYearList() {
  // declaring an array of years for the dropdown
  var years = [];
  // filling an array with years from 2016 until now
  for (var i = new Date().getFullYear() + 1; i >= 2016; i--) {
    years.push(i);
  }
  // creating and appending nodes to year dropdown (as options in select)
  for (var i = 0; i <years.length; i++) {

    // получаем текст для элемента
    var text = years[i];
    // получаем значение для элемента
    var value = text;
    // создаем новый элемента
    var newOption = new Option(text, value);
    domVar.inputYear.options[domVar.inputYear.options.length]=newOption;
  }
  // // setting current year as a default
  // setYear();
}
function setYear(optionIndex) {
  domVar.inputYear.options[optionIndex].selected = true;
}
function selectYear() {
  activator.manufacture = domVar.inputYear.options[domVar.inputYear.selectedIndex].text;
  activator.okYear = true;
}
function unsetYear(){
  domVar.inputYear.options[0].selected = true;
  activator.manufacture = 0;
  activator.okYear = false;
}

function VINChange () {
  getVIN();
  if (activator.VINcode.length) {
    validateVIN();
  } else {
    activator.okVIN = false;
    reactVIN("noPin");
  }
}
function trailerChange () {
  clearCountry();
  activator.okCert = false;
  selectTrailer();
  vinUnlocker();
  activator.checkup();
}
function yearChange () {
  selectYear();
  vinUnlocker();
  activator.checkup();
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
  activator.country = {};
}
function selectCountry () {
  var selection = domVar.countryChooser.options[domVar.countryChooser.selectedIndex].text;
  for (var i = 0; i < activator.model.country.length; i++) {
    var currentCountry = activator.model.country[i];
    if (currentCountry.name === selection) {
      activator.country = activator.model.country[i];
    }
  }
  readCertification();
  activateElement("certificateChooser");
}
function countryChange () {
  clearCertification();
  activator.okCert = false;
  selectCountry();
  activator.checkup();
}
function unsetCountry () {
  domVar.countryChooser.options[0].selected = true;
  activator.country = [];
  clearCountry();
  activator.okCert = false;
}


function readCertification () {
  for (var i = 0; i < activator.model.certificate.length; i++) {
    var currentCert = activator.model.certificate[i];
    if ( currentCert.name === "No certification" || currentCert.name === "European 167/2013" || currentCert.name === activator.country.name) {
      activator.certificates.push(currentCert);
      var nodeDOM = document.createElement("option");
      var nodeText = document.createTextNode(activator.model.certificate[i].name);
      // var nodeText = document.createTextNode(activator.model.country.type);
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
  activator.certification = {};
  deactivateElement("certificateChooser");
}
function selectCertification () {
  var selected = domVar.certificateChooser.options[domVar.certificateChooser.selectedIndex].text;
  for (var i = 0; i < activator.certificates.length; i++) {
    if (selected === activator.certificates[i].name) {
      activator.certification = activator.certificates[i]
      activator.okCert = true;
    }
  }
  activator.checkup();
}
function certificateChange () {
  selectCertification();
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
      if (activator.certification.name === "European 167/2013") {
        setForm("uniform");
      } else {
        setForm("nocertOld")
      }
      break;
    case 'undef':
      setForm("undefined");
      break;
    case 'pl':
      if (activator.certification.name === "European 167/2013") {
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
  domVar[domNode].disabled = false;
  domVar[domNode].classList.remove("deactivated");
}
function deactivateElement(domNode) {
  domVar[domNode].disabled = true;
  domVar[domNode].classList.add("deactivated");
}

function initialize () {
  activateElement("inputPIN");
  deactivateElement("trailerChooser");
  deactivateElement("inputYear");
  deactivateElement("countryChooser");
  deactivateElement("certificateChooser");
  formTrailerList();
  formYearList();
  plateVar.resetPlate();
}

//// WORKFLOW ///////
initialize();
domVar.trailerChooser.addEventListener('change', trailerChange);
domVar.countryChooser.addEventListener('change', countryChange);
domVar.certificateChooser.addEventListener('change', certificateChange);
domVar.inputYear.addEventListener('change', yearChange);
domVar.inputPIN.addEventListener('mouseup', VINChange);
domVar.inputPIN.addEventListener('keyup', VINChange);

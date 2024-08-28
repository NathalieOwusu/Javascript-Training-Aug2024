// Object Literals

const fighterJets = {
  jetName: "F16 Falcon",
  countryOfOrigin: "USA",
  generation: 4.5,
  importers: {
    asia: [
      "Israel",
      "Saudi Arabia",
      "Pakistan",
      "South Korea",
      "Taiwan",
      "Bahrain",
    ],
    europe: [
      "UK",
      "Germany",
      "Poland",
      "Ukraine",
      "Netherlands",
      "Spain",
      "Belgium",
      "Greece",
    ],

    southAmerica: ["Chile", "Venezuela"],
  },
};

let x;
x = fighterJets.jetName;
console.log(x);
x = fighterJets.countryOfOrigin;
console.log(x);
x = fighterJets.generation;
console.log(x);

// Accessing Nested Objects

x = fighterJets.importers;
console.log(x);

// Accessing Arrays inside inner objects

x = fighterJets.importers.asia;
console.log(x);

// Accessing Individual Array Elements from arrays inside inner objects

x = fighterJets.importers.europe[0];
console.log(x);
x = fighterJets.importers.europe[1];
console.log(x);
x = fighterJets.importers.southAmerica[0];
console.log(x);

// Updating Elements

fighterJets.jetName = "Rafale";
x = fighterJets.jetName;

console.log(x);

fighterJets["countryOfOrigin"] = "France";
x = fighterJets.countryOfOrigin;
console.log(x);

// Adding new properties

fighterJets.manufacturer = "Dassault Aviation";
x = fighterJets.manufacturer;
console.log(x);

console.log(fighterJets);

// Deleting Existing Properties

delete fighterJets.importers;
console.log(fighterJets);

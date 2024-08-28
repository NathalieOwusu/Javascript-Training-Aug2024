const trainData = {
  trainName: "Rajdhani",
  category: "Premium Superfast",
  trainNo: 12301,
  journeyDetail: { source: "Howrah", destination: "New Delhi" },
};

const coachData = {
  coachNo: 22,
  coachType: "LHB",
  AC3: 11,
  AC2: 6,
  AC1: 2,
  PTC: 1,
  EOG: 2,
};

// const data = { trainData, coachData };
const data = { ...trainData, ...coachData };

console.log(data);

// Getting All Keys From An Object

const keys = Object.keys(data);
console.log(keys);

// Getting All Value From An Object

const values = Object.values(data);
console.log(values);

const entries = Object.entries(data);
console.log(entries);

// Check if an object has a given property

let present;
present = data.hasOwnProperty("trainNo");
data.createNewProperty("");
console.log(present);

// Destructuring

const trainData = {
  trainName: "Shatabdi Express",
  trainNo: 12041,
  category: "Premium Superfast",
  journeyDetails: {
    source: "Howrah",
    destination: "New Jalpaiguri",
  },
};

const { trainName, trainNo: trainNumber, category } = trainData;
const { source, destination } = trainData.journeyDetails;

console.log(trainName, trainNumber, category, source, destination);

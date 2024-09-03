// For Each Method - Iterates Over All The Array Elements

const socials = ["Facebook", "Twitter", "LinkedIn", "Instagram"];
socials.forEach((item) => {
  console.log(item);
});

// Using Indexes

const cricketingNations = [
  "Australia",
  "India",
  "England",
  "South Africa",
  "New Zealand",
  "USA",
];

const nations = cricketingNations.forEach((index, item) => {

  
});

console.log(nations);

// Array Of Objects

const countriesAndLeaders = [
  { country: "USA", leader: "Joe Biden" },
  { country: "Canada", leader: "Justin Trudeau" },
  { country: "India", leader: "Narendra Modi" },
  { country: "Russia", leader: "Vladimir Putin" },
  { country: "Israel", leader: "Benjamin Netanyahu" },
];

countriesAndLeaders.forEach((element, index) => {
  console.log(index, element.country, element.leader);
});

// Map Method

const cities = ["Mumbai", "Kolkata", "Chennai", "Bengaluru", "New Delhi"];
const country = [];

const map1 = cities.map((city, index) => {
  return {
    id: index,
    city: city,
    country: "India",
  };
});

console.log(map1);

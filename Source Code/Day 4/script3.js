// Write A Function That Takes In The Name Of A Politician And His Party. Switch The Party Of THe Politician And Return It.

// Two Parties - Demo / Repo

// Output - Donald belongs to demo

function switchParties(name, partyName){
  if(partyName.toLowerCase() === "demo"){
      return `${name} belongs to repo`;
  } else if(partyName.toLowerCase()=== "repo"){
      return `${name} belongs to demo`;
  }
}
console.log(switchParties("Donald", "demo"));
console.log(switchParties("Joe", "repo"));
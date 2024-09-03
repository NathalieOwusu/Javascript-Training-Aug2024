// Problem - A Mason Needs TO Build  A Wall Of 18 meters.Everyday He Builds 1 meter.Write A Function That Implements THis Process.
// If the wall is not complete, print "still building" and if the wall is complete print "Done"

// creaate a function and loop through the number of days
// add one 1 meter daily until 18 meters is met to build the wall.
// if the wall is imcomplete print "Still building"
// if comleplete print "done"

function numberOfDays(meters) {
  let i = 0;
  while (i <= meters) {
    console.log("Still building", i);
    i++;
  }
  console.log("Done!");
}

numberOfDays(18);

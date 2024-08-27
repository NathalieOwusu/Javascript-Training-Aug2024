// Write a function that takes in a year and checks if it is a leap year or not

// 1700 - A Leap Year ??

function leapYear(year)
{
    // Check for centirion year

    if (year % 100 === 0)
    {

        if (year % 400 === 0)
            return true;
        else
            return false;

    }
    else {
        if (year % 4 === 0)
            return true;

        else
            return false;
        

    }

   
}

console.log(leapYear(1800));
console.log(leapYear(2000));
console.log(leapYear(1998));
console.log(leapYear(2024));
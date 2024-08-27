// Write A Function That Takes In A Temperature And Its Unit In Either of Celcius And Farenhite And Convert It To The Other One.

// 9C = 5F -160


function convertToFarenhite(val)
{
    let temp = ((9 * val) + 160) / 5;

    // return temp.toFixed(2);
    return temp.toFixed(2);
}

function convertToCelcius(val)
{
    let temp = ((5 * val) - 160) / 9;

    //    return temp.toFixed(2);
    return temp.toFixed(2);
}

function temperature(value, unit) {
    
    if (unit.toLowerCase() === 'celcius') {
        
        let temp = convertToFarenhite(value);

        return `Temperature in Farenhite is ${temp}`;
    }
    else if (unit.toLowerCase() === 'farenhite')
    {
        let temp = convertToCelcius(value);
        return ` Temperature in Celcius is ${temp}`;
    }


    return `Input Is Invalid`;
  
}

console.log(temperature(40, 'Celcius'));
console.log(temperature(40, 'Farenhite'));



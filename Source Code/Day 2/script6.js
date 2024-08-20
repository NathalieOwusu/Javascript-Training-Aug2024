// Rest Params

function sum(...numbers)
{
    let sum = 0;

    for (const num of numbers)
        sum += num;
        
    return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));

// Objects as parameters

function getNumberOfFriends(user)
{


    return user.girlfriends.length + user.bros.length;

}


const user = {
    
    userName: "Oliver Queen",
    fatherName: "Robert Queen",
    girlfriends: ["Laurel Lance", "Sara Lance", "Helena Bertinelli", "Felicity Smoak"],
    bros: ["Tommy Merlyn", "John Diggle", "Maseo Yamashiro"]
}

console.log(getNumberOfFriends(user));
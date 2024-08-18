// VAR LET AND CONST

// var - can  be redeclared in the same scope and can also be reassigned with a value
var age = 26;
console.log(age);
var age = "Twenty Six";

// let - cannot be redeclared in the same scope but can be reassigned with a value
let b = 28;
b = 30;


// Var and Let acts in the same way in global scope and function scope. but acts differently in block scope. 
function printMyName()
{
    
    for (var i = 0; i < 5; i++)
        {
            
            
        }
        console.log(i);
        
        
}
function printMyName2()
{
    
    for (let i = 0; i < 5; i++)
        {
            
            
        }
        console.log(i);
        
        
}
    
printMyName();
printMyName2();

    
    
    // Const
// const - cannot be redeclared and cannot be reassigned

const i = 5;
i = 4;









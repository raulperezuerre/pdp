//********************************************************************
// High order function, paradigma imperativo mezclado con funcional
//********************************************************************

const myArray = [1,2,3,4,5,6,7,8,9,0];

function filter1 (someArray, someFunction) {
    const newArray = [];
    
    for (let i=0; i<someArray.length; i++) {
        let currentItem = someArray[i];
        
        if (someFunction(currentItem)) {
            newArray.push(currentItem);
        }
    }
    
    return newArray;
}

function criteria(item) {
    return item > 5;
}

let result = filter1(myArray, criteria);

print(result);

/*****************************************************************/
// Filter como high-order function (sintaxis antigua de JS)
/*****************************************************************/

result = myArray.filter(function(item) {
   return item > 5; 
});

print(result);

/*****************************************************************/
// Filter como high-order function (sintaxis arrow function)
/*****************************************************************/

result = myArray.filter(item => item > 5);

print(result);

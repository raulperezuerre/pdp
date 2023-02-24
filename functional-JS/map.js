// Map - Transformación de datos
const myArray = [0,1,2,3,4,5];

// map desglosado, paradigma imperativo, sintaxis antigua

const map1 = function(someArray, someConversion) {
    const newArray = [];
    
    for(i=0; i<someArray.length; i++) {
        let currentItem = someArray[i];
        newArray.push(someConversion(currentItem));
    }
    
    return newArray;
}

const conversion = function(item) {
    return item * 2;
}
let result = map1(myArray, conversion);
print(result);

// map high-order function, paradigma funcional, sintaxis arrow function
result = myArray.map(item => item * 2);
print(result);

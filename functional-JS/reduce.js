// Reduce

const myArray = [0,1,2,3,4,5];

let result = myArray.reduce((total, item) => total += item);
print(result);

/*
result = myArray.reduce((r, item, []) => r.push(item*2));
print(result);

*/

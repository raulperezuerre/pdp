// Inmutabilidad usando Object.assign
const car = {
  model: 'Tesla',
  year: 2020
};

const newcar = Object.assign({}, car, {
  model: 'Honda'
});

print(car.model);
print(newcar.model);

// Cuidado: esta instrucción no copia, sólo asigna el mismo apuntador.
const newnewcar = car;
newnewcar.model = 'BMW';
print(newnewcar.model);
print(car.model);

// Inmutabilidad con arrays (ES6);
// descompone los elementos de myArray y los inserta en otro array,
// junto con 6 y 7
const myArray = [0,1,2,3,4,5];
const newArray = [...myArray, 6, 7]; 

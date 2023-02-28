// Fibonacci: sintaxis vieja, imperativa, sin recursión
function fib (n) {
    let x = 0;
    let y = 1;
    sum = 0;
    
    for (let i=0; i<=n; i++) {
        print(x);
        sum = x + y;
        x = y;
        y = sum;
    }
    
    return x;
}

fib(8);

print("------------------");

// Fibonacci, sintaxis arrow function, funcional, recursiva
const fib1 = n => {
    if (n < 2) {
        return n;
    } else {
        return fib1(n-1) + fib1(n-2);
    }
}

// Este for es sólo para imprimir la secuencia. El resultado es el mismo
for (let i=0; i<=8; i++) {
    print(fib1(i));
}

print("------------------");

// Lo mismo que el ejercicio anterior, pero en una sóla línea.
const fib2 = n => n < 2 ? n : fib1(n-1) + fib1(n-2);

// Este for es sólo para imprimir la secuencia. El resultado es el mismo
for (let i=0; i<=8; i++) {
    print(fib2(i));
}

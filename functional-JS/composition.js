// Composición al estilo lambda
// lambda(a)(b)(T)(F)(K)(KI);

// Composición al estilo JS
const splitName = (name) => name.split('_').join(' ');
const result = splitName('juan_perez');

print(result);

// Descomponiendo el ejercicio anterior. (sintaxis vieja)
const splitName1 = function(name) {
    const nameWithoutLodash = name.split('_');
    print('[' + nameWithoutLodash + ']');
    
    const joinedName = function(nameWithoutLodashArg) {
        return nameWithoutLodashArg.join(' ');
    }
    
    return joinedName(nameWithoutLodash);
}
const result1 = splitName1('juan_perez');
print(result1);

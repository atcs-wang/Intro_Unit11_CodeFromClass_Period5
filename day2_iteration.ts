// python: things = [1,3,5,7]
// for element in things:
//     print(element)


let array : number[] = [1,3,5,7,9];
for (let element of array) { // don't use "in" - use "of"
    // element += 1;
    console.log(element);
}
console.log(array);

//To change things: loop by the INDEX
// In python:
// for i in range(0, len(things)):
//  things[i] += 1

for (let i = 0; i < array.length; i++){
    array[i] += 1;
    console.log(`index: ${i}; value: ${array[i]}`);
}
console.log(array);

console.log("Iterating with forEach:");
// forEach - works like a for-of
array.forEach(function(element : number) {
    console.log(element);
})
// or even like a for loop over indexes
array.forEach(function(value : number, index : number ) {
    console.log(`index: ${index}; value: ${value}`);
})
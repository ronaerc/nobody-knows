const myArray = [1,2,3,4,5];

myArray.map(); //loop over an array and get a new array back
myArray.map(el => el +1);

const myArrayFilter = [1,3,5,7,9];
myArrayFilter.filter(); //gives a new array
myArrayFilter.filter(el => el < 4);

myArray.reduce();

myArray.find();

const myArrayInclude = [1,3,5,7,9];
myArrayInclude.includes(); // Takes a single argument
myArrayInclude.includes(2, 1); //second argument is index of
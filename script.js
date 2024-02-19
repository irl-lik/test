/* const string = prompt("Enter string: ") || '';

if (string) {
    let result = "";

    for (let i = 0; i < string.length; i++) {
        result += string[string.length - i - 1];
    }
    alert(result === string);
} else {
    alert("Empty string entered.");
} */


/* const array = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const n = array.length;
let Sn = 0;

for(let i = 0; i < array.length; i++){
    Sn += array[i];
}

alert(Sn / n); */

/* const array = [6, 4, 5, 3, 2, 1, 9, 8, 0, 7];

let copyOfArray = array.splice(-3, 3); */

/*let x = new Boolean(false);

if (x) {
    console.log(x)
} */

/* switch (parseInt(prompt())) {
    case 1:
        alert(11);
        break;
    case 2:
        alert(22);
    case 3:
        alert(33);
    default:
        alert(44);
} */

/* for (let i = 0; i < 10; i++) {
    for(;;){
        console.log(1);
    }
} */

/*const arr = [0, 1, 2, 3];
const filteredArr = arr.filter((a, b) => a === b);
console.log(filteredArr);*/

const myArray = Object.freeze([1, 2, 3]);
console.log(myArray); // Вывод: [1, 2, 3]
myArray.push(4); // Недопустимо, так как массив заморожен

const string = prompt("Enter string: ") || '';

if (string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        result += string[string.length - i - 1];
    }
    console.log(result);
}
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);

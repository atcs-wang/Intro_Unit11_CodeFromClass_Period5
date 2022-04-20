import * as rl from 'readline-sync';
let nameList : string[] = [];
console.log("Enter some names:");
let name : string = rl.question("Name: ");
while (name !== "") {
    nameList.push(name);
    name = rl.question("Name: ");
}
nameList.sort();
for (let i = 0; i < nameList.length; i++){
    console.log(`${i}: ${nameList[i]}`);
}
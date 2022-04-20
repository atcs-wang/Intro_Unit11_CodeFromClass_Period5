let a : number[] = []; 
let b : Array<string> = new Array(); // personally, I prefer the brackets

let c : number[] = [1,3,5,7,9];
let d : Array<string> = new Array("hi", "hello", "yo");
console.log(c);
console.log(d);

//"Tuple" - set length and types per index
let e : [number, string, boolean] = [10, 'ten', true];
console.log(e[1]);

let f : number[] = [5];
console.log(f);
console.log(f.length);
console.log(f[1]);
f[1] = 7;
console.log(f);
console.log(f.length);
f[3] = 11;
console.log(f);
console.log(f[2]);
console.log(f.length);

// change f.length
f.length = 10; //adds more empty elements
console.log(f); 

f.length = 1; //deletes elements at index length or higher
console.log(f);
console.log(f[1])

f.length = 0;
console.log(f);



// let g : number[] = new Array(5);
// console.log(g);
// console.log(g.length);
// console.log(g[1]);


let h: number[] = [2,4,6,8,10];
console.log(h[h.length - 1]); // get items in the back


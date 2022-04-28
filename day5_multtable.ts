let header : string = "   ";
let line : string = "   "
for (let i = 1; i <= 9; i++){
    header += "  " + i;
    line += "---"
}

console.log(header);
console.log(line);

for (let row = 1; row <= 9; row++) {
    let rowToPrint : string = `${row} |`;
    for (let col = 1; col <= 9; col++){
        let product : number = row * col;
        //depending on length, change spacing;
        if (product < 10) //single digit
            rowToPrint += "  " + product ;
        else //double digit
            rowToPrint += " " + product ;
    }    
    console.log(rowToPrint);
}
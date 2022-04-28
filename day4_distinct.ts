function readWords(): string[]{
    let input : string = (document.querySelector("textarea") as HTMLTextAreaElement).value as string;
    let words : string[] = input.split(" ");
    return words;
}

function getDistinctWords(words : string[]) : string[] {
    let distinct : string[] = [];
    for (const word of words){ //for (let i = 0; i < words.length; i++)
        //const word = words[i];    
        

        //Solution A:
        // if ( ! distinct.includes(word) ) {
        //     distinct.push(word)
        // }
        //Solution B:
        // if ( distinct.indexOf(word) === -1 ) {
        //     distinct.push(word)
        // }
        // Solution C:
        let inArray : boolean = false;
        
        for (const distinctWord of distinct) {// for (let j = 0; j < distinct.length; j++){
            //const distinctWord = distinct[j];
            if (word === distinctWord){
                inArray = true;
                break;
            }
        }

        if ( ! inArray ) {
            distinct.push(word)
        }
    }
    return distinct;
}

let distinctButton = document.querySelector("button") as HTMLButtonElement;
distinctButton.addEventListener("click", function () {
    // read in the words from the textbox (string -> string[])
    let words : string[] = readWords();
    //analyze the words distinct words (string[] -> string[])
    let distinct : string[] = getDistinctWords(words);
    (document.querySelector(".distinct") as HTMLElement).textContent = `Distinct Words: ${distinct.join(" ")}`;
    
})
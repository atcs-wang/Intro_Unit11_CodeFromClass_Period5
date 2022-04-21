function readNumbers() : number[] {
    let textArea = document.querySelector("textarea") as HTMLTextAreaElement;
    let stringArray : string[] = textArea.value.split("\n");
    let numbers : number[] = [];
    for (let i = 0; i < stringArray.length; i++){
        if (stringArray[i] === "")
            continue;
        let num = Number(stringArray[i]);
        if (isNaN(num))
            continue;
        numbers.push(num);
    }
    return numbers;
}

function getAverage( nums  : number[]) : number {
    let sum = 0;
    for (const n of nums){
        sum += n;
    }
    return sum / nums.length;
}

function countAboveBelow(nums : number[], mean : number) : [number, number] {
    let aboveCount = 0;
    let belowCount = 0;
    for (const n of nums){
        if (n < mean)
            belowCount++;
        else if (n > mean)
            aboveCount++;
    }
    return [aboveCount, belowCount];
}

let analyzeButton = document.querySelector("button") as HTMLButtonElement;
analyzeButton.addEventListener("click", function () {
    let numbers : number[] = readNumbers();
    let mean : number = getAverage(numbers);
    let aboveBelow : [number, number] = countAboveBelow(numbers, mean);
    let above : number = aboveBelow[0];
    let below : number = aboveBelow[1];

    (document.querySelector(".average") as HTMLElement).textContent = `Mean: ${mean}`;
    (document.querySelector(".above") as HTMLElement).textContent = `# above mean: ${above}`;
    (document.querySelector(".below") as HTMLElement).textContent = `# below mean: ${below}`;
})
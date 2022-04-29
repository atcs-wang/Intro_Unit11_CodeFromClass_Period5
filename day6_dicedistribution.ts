/**
 * Simulate a series of dice rolls, and track the distribution 
 * of roll totals.
 * @param rolls - how many total rolls to perform
 * @param dice - how many dice are rolled at a time
 * @param sides - how many sides each die has
 * @returns  array of numbers, representing the frequency (count) of rolls whose total equalled the index
 */
function simulateDiceRolls(rolls: number, dice: number, sides: number) : number[] {
    // create array of given size to track frequencies. But - how big should it be?
    let frequency : number[] = new Array(10);  
    // start with all 0s
    frequency.fill(0); 


    // simulate the dice rolls!


    return frequency;
}

//You can test your function in Node JS like this:
console.log(simulateDiceRolls(10,2,6))

//But it can also be used in a browser! Compile and open day6_dicedistribution.html!
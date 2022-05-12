class Homework {
    dueDate : Date;
    difficulty : number;
    pageLength? : number;
    subject : string;
    name : string;

    constructor(name : string, subject : string, 
                difficulty: number, 
                dueDate : Date = new Date(), 
                pageLength? : number){
        this.name = name;
        this.subject = subject;
        this.difficulty = difficulty;
        this.dueDate = dueDate;
        this.pageLength = pageLength;
    }

    makeEasier(reduction : number){
        this.difficulty -= reduction;
    }
}

let hw1 : Homework = new Homework("Lab 1503", "CS", 1000);
console.log(hw1);
let hw2 : Homework = new Homework("Essay", "History", 3000, new Date(2022, 5, 22), 5);
console.log(hw2);

hw2.makeEasier(500);
hw1.makeEasier(999);
console.log(hw1.difficulty);
console.log(hw2.difficulty);

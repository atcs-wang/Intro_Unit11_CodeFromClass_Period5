interface Freshman {
    age : number;
    academy : string;
    name : string;
    favcolor? : string;
    id : number;
}

let jason : Freshman = {age : 14, academy: 'ATCS', name: "Jason", id: 110010011};
// jason.shoes // invalid
jason.age++;
jason.favcolor = 'orange';
console.log(jason.academy)
jason.academy = 'ABF'
console.log(jason);

let juni : Freshman = {age : 15, academy: 'ATCS', name: "Yaejun", id: 11100011}


function changeAcademy(student : Freshman, newacademy : string){
    student.academy = newacademy;
}

changeAcademy(juni, 'AVPA');

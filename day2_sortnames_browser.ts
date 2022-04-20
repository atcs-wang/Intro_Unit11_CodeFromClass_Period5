const textarea = document.querySelector("textarea") as HTMLTextAreaElement;
const button = document.querySelector("button") as HTMLButtonElement;

button.addEventListener("click", sortNames);
function sortNames(){
    let names : string = textarea.value;
    let nameList : string[] = names.split("\n");
    // console.log(nameList);
    nameList.sort();

    // let sortedNames : string = "";
    // for (let name of nameList){
    //     sortedNames += name + "\n";
    // }
    let sortedNames : string = nameList.join("\n");
    textarea.value = sortedNames;
}

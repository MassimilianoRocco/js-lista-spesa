const list = ["Cyberpunk2077", "Fallout 4", "Star Citizen", "Total War Warhammer 3", "Rainbow Six Siege"];
console.log(list);

let element;
for(let x=0; x<list.length;x++){
    element = list[x];
    console.log(element);
}
element = null;
console.log("______________________________________");

let contatore = 0;
while(contatore<list.length){
    element = list[contatore];
    console.log(element);

    contatore++;
}
const list = ["Cyberpunk2077", "Fallout 4", "Star Citizen", "Total War Warhammer 3", "Rainbow Six Siege"];
console.log(list);

//CICLO FOR
const ulListA = document.querySelector("#list_A");

let element;
for(let x=0; x<list.length;x++){
    element = list[x];
    console.log(element);
    
    // const liElement = document.createElement("li");
	// liElement.innerText = element;
	// ulList.append(liElement);
    ulListA.innerHTML += `<li>${element}</li>`;  
}

element = null;

//Separatore console
console.log("______________________________________");

//CICLO WHILE
const ulListB = document.querySelector("#list_B");

let contatore = 0;
while(contatore<list.length){
    element = list[contatore];
    console.log(element);

    ulListB.innerHTML += `<li>${element}</li>`;
    contatore++;
}



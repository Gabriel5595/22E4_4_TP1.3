//TP1
const paises = [];
paises.push("Brasil","EUA","Canada","Japão","China");

console.log(paises);

const printPaises1 = document.getElementById("printPaises1");
printPaises1.innerText = paises;

//TP2
const paises2 = [...paises];
paises2.splice(1, 1, "Panamá")

console.log(paises2);

const printPaises2 = document.getElementById("printPaises2");
printPaises2.innerText = paises2.length;
printPaises2.innerHTML += "<br>";
printPaises2.innerHTML += paises2;

//TP3
const paises3 = [...paises2];
paises3[5] = "Indonésia";
paises3.splice(1, 1, "Panamá");;
paises3.splice(2, 1);

console.log(paises3);

const printPaises3 = document.getElementById("printPaises3");
printPaises3.innerHTML = paises3;
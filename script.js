const chilometri = prompt("quanti chilometri vuoi percorrere?");
const eta = prompt("inserisci la tua età");
let costobiglietto = chilometri * 0.21;

if (eta < 18) {
    costobiglietto=costobiglietto-(costobiglietto * 20) / 100;
}
else if (eta >= 65) {
   costobiglietto=costobiglietto-(costobiglietto * 40) / 100;

}
costobiglietto=costobiglietto.toFixed(2)

console.log(chilometri);
console.log(costobiglietto);





let vards = "Jānis";
let vecums = 20;
let irPilsonis = true;

console.log("Vārds: " + vards);
console.log("Vecums: " + vecums);

// Balsošanas kontrole
if (vecums >= 18 && irPilsonis) {
    console.log("Drīkst balsot.");
} else if (vecums >= 18 && !irPilsonis) {
    console.log("Personai ir 18 gadi, bet viņa nav pilsonis.");
} else if (vecums < 18 && irPilsonis) {
    console.log("Personai nav 18 gadi, bet viņa ir pilsonis.");
} else {
    console.log("Personai nav 18 gadi un viņa nav pilsonis.");
}
let atzime = prompt("Ievadiet atzīmi (0-100):");
atzime = parseInt(atzime);

if (atzime >= 90 && atzime <= 100) {
    console.log("Izcili");
} else if (atzime >= 70 && atzime <= 89) {
    console.log("Labi");
} else if (atzime >= 50 && atzime <= 69) {
    console.log("Vidēji");
} else if (atzime >= 0 && atzime <= 49) {
    console.log("Slikti");
} else {
    console.log("Nepareiza atzīme.");
}
let saraksts = [1, 2, 3, 4, 5];

for (let i = 0; i < saraksts.length; i++) {
    console.log(saraksts[i]);
}
for (let i = saraksts.length - 1; i >= 0; i--) {
    console.log(saraksts[i]);
}
function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let rezultats;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Lūdzu ievadiet derīgus skaitļus!");
        return;
    }

    switch (operator) {
        case "+":
            rezultats = num1 + num2;
            break;
        case "-":
            rezultats = num1 - num2;
            break;
        case "*":
            rezultats = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                rezultats = num1 / num2;
            } else {
                alert("Dalīšana ar nulli nav iespējama!");
                return;
            }
            break;
        default:
            alert("Nepareizs operators.");
            return;
    }

    document.getElementById("rezultats").textContent = "Rezultāts: " + rezultats;
}

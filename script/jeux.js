function bet2(e) {
    const button = (e.target);
    if (button.value === undefined) {
        return;
    }
    total2 += Number(button.value);
    if (initSumJs >= total2) {
        document.getElementById("startingBet").innerHTML = total2; // c'est la mise initale
        document.getElementById("initSum").innerHTML = initSumJs - total2; // ici la reserve de depart est modifiée aussi
    }
    else {
        console.log("ne peut plus miser")
    }
}

function RandomRoulette(max) {
    return Math.floor(Math.random() * max);
}

function getValue() {
    let parie = document.getElementById("parie").value;
    console.log(parie);
}

function verif() {
    let beez = RandomRoulette(6);
    document.getElementById("roulette").innerHTML = document.getElementById("roulette").innerHTML +beez+" ";
    if (parie.value == beez) {
        document.getElementById("resultDiv").innerHTML = "Vous avez gagné ! Relancez la page :')";
        let add2 = add(total2, initSumJs);
        mulo(total2);
        document.getElementById("initSum").innerHTML = add2;
        document.getElementById("startingBet").innerHTML = 0;
    }
    else {
        document.getElementById("startingBet").innerHTML = 0;
        document.getElementById("resultDiv").innerHTML = "Vous avez perdu ! Relancez la page :')";
    }
}

function mulo(a) {
    let result = a * 2;
    return result;

}

function add(a, b) {
    let result;
    result = a + b;
    return result;
}

let initSumJs = 20;
document.querySelector("#initSum").innerHTML = initSumJs;
document.querySelector("#initSum");
let mise = document.getElementById("divB");
mise.addEventListener('click', bet2);
let total2 = 0;
let recup = document.querySelector('#recup');
let bobo = recup.addEventListener("click", getValue);
recup.addEventListener("click", verif);
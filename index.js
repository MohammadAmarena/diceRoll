let konto = 100;
function run() {
    document.querySelector("#ausgabe").innerHTML = konto;
    let zufall = Math.round(Math.random() * 5 + 1);
    let zufall2 = Math.round(Math.random() * 5 + 1);
    let zufall3 = Math.round(Math.random() * 5 + 1);

    switch (zufall) {
        case 1: document.querySelector("#dice").classList = "fa-solid fa-dice-one fa-3x";
            break;
        case 2: document.querySelector("#dice").classList = "fa-solid fa-dice-two fa-3x";
            break;
        case 3: document.querySelector("#dice").classList = "fa-solid fa-dice-three fa-3x";
            break;
        case 4: document.querySelector("#dice").classList = "fa-solid fa-dice-four fa-3x";
            break;
        case 5: document.querySelector("#dice").classList = "fa-solid fa-dice-five fa-3x";
            break;
        case 6: document.querySelector("#dice").classList = "fa-solid fa-dice-six fa-3x";
            break;
        default: window.Error("error");
    }

    switch (zufall2) {
        case 1: document.querySelector("#dice2").classList = "fa-solid fa-dice-six fa-3x";
            break;
        case 2: document.querySelector("#dice2").classList = "fa-solid fa-dice-two fa-3x";
            break;
        case 3: document.querySelector("#dice2").classList = "fa-solid fa-dice-three fa-3x";
            break;
        case 4: document.querySelector("#dice2").classList = "fa-solid fa-dice-four fa-3x";
            break;
        case 5: document.querySelector("#dice2").classList = "fa-solid fa-dice-five fa-3x";
            break;
        case 6: document.querySelector("#dice2").classList = "fa-solid fa-dice-one fa-3x";
            break;
        default: window.Error("error");
    }

    switch (zufall3) {
        case 1: document.querySelector("#dice3").classList = "fa-solid fa-dice-one fa-3x";
            break;
        case 2: document.querySelector("#dice3").classList = "fa-solid fa-dice-five fa-3x";
            break;
        case 3: document.querySelector("#dice3").classList = "fa-solid fa-dice-three fa-3x";
            break;
        case 4: document.querySelector("#dice3").classList = "fa-solid fa-dice-two fa-3x";
            break;
        case 5: document.querySelector("#dice3").classList = "fa-solid fa-dice-four fa-3x";
            break;
        case 6: document.querySelector("#dice3").classList = "fa-solid fa-dice-six fa-3x";
            break;
        default: window.Error("error");
    }

    zufall === zufall2 && zufall2 === zufall3 && zufall === zufall3? konto = konto + 5 : konto = konto - 1;

    document.querySelector("#ausgabe").innerHTML = `${konto} €`;
}

function reset() {
    konto = 100;
    document.querySelector("#ausgabe").innerHTML = `${konto} €`;
};
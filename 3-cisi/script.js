function numberFunc() {

    let number = document.getElementsByClassName("number")[0].value
    let result = document.getElementById("result")
    let demicalSystem = (number - number % 10) / 10
    console.log(demicalSystem)
    let firstWord;
    let secondWord;
    switch (demicalSystem) {
        case 0: firstWord = "";
            break;
        case 1: firstWord = "o'n";
            break;
        case 2: firstWord = "yigirma";
            break;
        case 3: firstWord = "o'ttiz";
            break;
        case 4: firstWord = "qirq";
            break;
        case 5: firstWord = "ellik";
            break;
        case 6: firstWord = "oltmish";
            break;
        case 7: firstWord = "ye tmish";
            break;
        case 8: firstWord = "sakson";
            break;
        case 9: firstWord = "to'qson";
            break;

    }
    let unitSystem = number % 10
    switch (unitSystem) {
        case 0: secondWord = "";
            break;
        case 1: secondWord = "bir";
            break;
        case 2: secondWord = "ikki";
            break;
        case 3: secondWord = "uch";
            break;
        case 4: secondWord = "to'rt";
            break;
        case 5: secondWord = "besh";
            break;
        case 6: secondWord = "olti";
            break;
        case 7: secondWord = "yetti";
            break;
        case 8: secondWord = "sakkiz";
            break;
        case 9: secondWord = "to'qqiz";
            break;

    }
    console.log(firstWord + " " + secondWord)
    let results = firstWord + " " + secondWord
    result.innerHTML = results;
}
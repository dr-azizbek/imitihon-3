

//Birinchisi
function getInputValue() {
    let fruit = document.getElementsByClassName("fname")[0].value;
    let result = document.getElementById("resultbirinchi");
    let fruits = fruit.toLowerCase()
    switch (fruits) {
        case "ishchi":
            result.innerHTML = "Hello";
            break;
        case "direktor":
            result.innerHTML = "Greetings"
            break;
        case "":
            result.innerHTML = "NO LOGIN"
            break;
        default: result.innerHTML = "Bunday lavozim mavjud emas"
            break;
    }
}
getInputValue()

//Ikkinchisi
function subtractTime() {
    let ft = document.getElementById("the__first__time").value
    let st = document.getElementById("the__second__time").value
    let result = document.getElementById("resultikkinchi")

    let nowft = new Date(ft)
    let nowst = new Date(st)

    let subtractTime = Math.abs(nowft - nowst)
    let day = Math.ceil(subtractTime / (1000 * 60 * 60 * 24))
    result.innerHTML = `${day} kun farqi bor`
}
subtractTime()

//Uchinchisi
function numberFunc() {

    let number = document.getElementsByClassName("number")[0].value
    let result = document.getElementById("resultuchinchi")
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
numberFunc()

//To'rtinchisi
let a = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
// let result = document.getElementById('resulttortinchi');
let results = 0;
for (let i = 0; i < a.length; i++) {
    let total = a[i] + 3;
    results += total;
}
console.log(`4-Natija:${results}`)


//Beshinchisi
let count = new Array();
let arrayOne = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arrayTwo = [4, 2, 21, 12, 13, 34, 46, 79, 10, 21, 34];
// let result = document.getElementById('resultbesh')
for (let i = 0; i < arrayOne.length; i++) {

    count[i] = arrayOne[i] + arrayTwo[i];

}
console.log(`5-Natija: [${count}]`)





// //Yettinchisi




function funcs() {
    const form = document.getElementById("forms")
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(`Ismi:${form.name.value}`)
        console.log(`Yoshi: ${form.age.value}`)
    })
}
funcs()

//Sakkizinchi
let b = [23, 56, 4, 78, 5, 63, 45, 210, 56]
let reset_massiv = document.getElementById("mass");

let reset = document.getElementById("rebok");
let new_massiv = document.getElementById("alpha_massive");

function push(massiv) {
    let array = new Array();
    let qiymat = document.getElementById("massive_status").value;

    for (let i = 0; i < massiv.length; i++) {

        if (massiv[i] != qiymat) {
            array.push(massiv[i]);
        }
    }
    console.log(array)
    new_massiv.innerHTML = array

}
reset_massiv.innerHTML = '[${b}]';
reset.addEventListener('click', function (e) {
    e.preventDefault();
    push(b);
})

//toqqizinchi
let names = document.getElementById("names");
let all = document.getElementById("all");
names.addEventListener('change', function (e) {
    e.preventDefault();
    let p = document.createElement('p');
    p.innerHTML =  e.target.value ;
    all.append(p)
    e.target.value = '';
})





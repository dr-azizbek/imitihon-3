let a = [23, 56, 4, 78, 5, 63, 45, 210, 56]
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
reset_massiv.innerHTML = '[${a}]';
reset.addEventListener('click', function (e) {
    e.preventDefault();
    push(a);
})
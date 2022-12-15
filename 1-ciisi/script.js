function getInputValue() {
    let fruit = document.getElementsByClassName("fname")[0].value;
    let result = document.getElementById("result");
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
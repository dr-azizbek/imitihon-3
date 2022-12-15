
let result=document.getElementById("result")
const form = document.getElementById("form")
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(`Ismi:${form.name.value}`)
    console.log(`Yoshi: ${form.age.value}`)
})
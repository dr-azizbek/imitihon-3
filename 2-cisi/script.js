function subtractTime() {
    let ft = document.getElementById("the__first__time").value
    let st = document.getElementById("the__second__time").value
    let result = document.getElementById("result")

    let nowft = new Date(ft)
    let nowst = new Date(st)

    let subtractTime = Math.abs(nowft - nowst)
    let day = Math.ceil(subtractTime / (1000 * 60 * 60 * 24))
    result.innerHTML = `${day} kun farqi bor`
}





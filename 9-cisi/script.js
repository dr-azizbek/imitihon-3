let names = document.getElementById("names");
let all = document.getElementById("all");
names.addEventListener('change', function (e) {
    e.preventDefault();
    let p = document.createElement('p');
    p.innerHTML = e.target.value;
    all.append(p)
    e.target.value = '';
})
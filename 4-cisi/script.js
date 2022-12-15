let a = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let result = document.getElementById('result');
let results = 0;
for (let i = 0; i < a.length; i++) {
    let total = a[i] + 3;
    results += total;
}
result.innerHTML =(`Natija:${results}`)
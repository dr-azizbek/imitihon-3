let count=new Array();
let arrayOne = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arrayTwo = [4, 2, 21, 12, 13, 34, 46, 79, 10, 21, 34];
let result = document.getElementById('result')
for(let i = 0;i <arrayOne.length;i++){
        
        count[i]= arrayOne[i]+arrayTwo[i];
        
    }
    result.innerHTML=(`Natija: [${count}]`)
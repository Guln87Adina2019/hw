// let num = +prompt("0 мен 99 арасындағы санды енгізініз");
//     let a = Math.floor(num/10), b = num % 10
//     if(a===0){
//         alert('Биринши сан: ' + b)
//     }
//     else{
//         alert('Биринши сан: ' + a + '\n' + 'Екинши сан: ' + b)
//     }
    
let san = prompt("0-99 арасындағы санды енгізіңіз")

if(san>10 && san<100){
    let second = san % 10 //65/10 =6  6*10= 60 65-60 = 5
    let first = parseInt(san/10) // 65/10 =6.5 => 6
    alert("Сіздің енгізген сан екі таңбалы сан" + "\n" + "Birinshi san" +first + "\n" +"second san" +second)
}
else if(san<10 && san>=0){
    alert("Сіздің енгізген саныңыз бір таңбалы сан" +san)
}
else {
    alert("Сіз талапқа сай сан енгізбедіңіз.Қайта енгізуіңізді сұраймын!")
}


let num = +prompt("0 мен 99 арасындағы санды енгізініз");
    let a = Math.floor(num/10), b = num % 10
    if(a===0){
        alert('Биринши сан: ' + b)
    }
    else{
        alert('Биринши сан: ' + a + '\n' + 'Екинши сан: ' + b)
    }
    
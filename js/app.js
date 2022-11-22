alert('Hola estas en el nivel 1, tienes que adivinar un numero del 1 al 10');
let numero_aleatorio = Math.floor(Math.random() * (10 - 1))+ 1;
let numero_usuario = parseInt(prompt('Ingrese un numero del 1 al 10:'));

//vidas
let vida = 3;

while(numero_aleatorio !== numero_usuario && vida > 1){
    vida--;
    numero_aleatorio > numero_usuario 
    ? alert('es mayor, tienes '+ vida + ' vidas')
    : alert('es menor, tienes '+ vida + ' vidas');
    numero_usuario = parseInt(prompt('Ingrese otra vez un numero del 1 al 10:'));
}
if(numero_aleatorio === numero_usuario){
    vida = vida +3;
    alert(`el numero era ${numero_aleatorio} has avanzado al nivel 2, tienes ${vida} vidas`);
    let numero_usuario_lv2 = parseInt(prompt('Ingrese un numero del 1 al 20:'));
    let numero_aleatorio_lv2 = Math.floor(Math.random() * (20 - 1))+ 1;

    while(numero_aleatorio_lv2 !== numero_usuario_lv2 && vida > 1){
        vida--;
        numero_aleatorio_lv2 > numero_usuario_lv2 
        ? alert('es mayor, tienes '+ vida + ' vidas')
        : alert('es menor, tienes '+ vida + ' vidas');
        numero_usuario_lv2 = parseInt(prompt('Ingrese otra vez un numero del 1 al 10:'));
    }
    if(numero_aleatorio_lv2 === numero_usuario_lv2){
    vida = vida +5;
    alert(`el numero era ${numero_aleatorio_lv2} has avanzado al nivel 3, tienes ${vida} vidas`);
    let numero_usuario_lv3 = parseInt(prompt('Ingrese un numero del 1 al 30:'));
    let numero_aleatorio_lv3 = Math.floor(Math.random() * (30 - 1))+ 1;
    
    while(numero_aleatorio_lv3 !== numero_usuario_lv3 && vida > 1){
        vida--;
        numero_aleatorio_lv3 > numero_usuario_lv3 
        ? alert('es mayor, tienes '+ vida + ' vidas')
        : alert('es menor, tienes '+ vida + ' vidas');
        numero_usuario_lv3 = parseInt(prompt('Ingrese otra vez un numero del 1 al 30:'));
    }

    if(numero_aleatorio_lv3 === numero_usuario_lv3){
        alert(`has ganado el juego, el numero era ${numero_aleatorio_lv3}`);
    }else{
        alert(`has perdido en el nivel 3, el numero era ${numero_aleatorio_lv3}`);
    }
    }else{
        alert('has perdido en el nivel 2, el numero es: '+ numero_aleatorio_lv2)
    }
}else{
    alert('Haz perdido en el nivel 1, el numero es: '+ numero_aleatorio);
}

/*
    Sumar dos números y mostrarlo por pantalla
*/
function sumarv1(){
    let valor1 = prompt('valor1');
    let valor2 = prompt('valor2');
    let res = Number(valor1) + Number(valor2);
    console.log(res);
}

function sumar(valor1, valor2){
    return Number(valor1) + Number(valor2);
}

function restar(valor1, valor2){
    return Number(valor1) - Number(valor2);
}

function dividir(valor1, valor2){
    let res = 'No se puede dividir por 0';
        if(Number(valor2) !== 0){           
            res = Number(valor1) / Number(valor2);
        }
        return res       
}

function actualizarContenido(id, nuevoContenido){
    document.getElementById(id).innerHTML = nuevoContenido
}

//retorna el valor dado el id
function getValorById(id){
    return document.getElementById(id).value;
}

function calcular(operacion){
    let valor1 = getValorById('valor1');
    let valor2 = getValorById('valor2');
    let res = '';
    
    if(valor1 !== '' && valor2 !== '') {
        if(operacion === '+') {
            res = sumar(valor1,valor2);
        }
        if(operacion === '-') {
            res = restar(valor1,valor2);
        }
        if(operacion === '/') {
            res = dividir(valor1,valor2);
        }
    }
    actualizarContenido('res',res);
}
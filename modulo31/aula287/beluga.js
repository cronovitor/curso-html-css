function calcularMedia(){                    
                    
    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    //while(arguments[x]){
    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++
    }                    

    var totalDeci = total / qtd;

    return totalDeci.toFixed(2);
}

/*function sortear(n){

    var _n = n || 10

    var numeroSorteado = Math.random() * _n;

    return parseInt(numeroSorteado);

}*/

function sortear(n){

    var _n = n || 1;

    var nSorteado = Math.random() * _n;

    return Math.floor(nSorteado)

}
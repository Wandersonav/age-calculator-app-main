
// let enviar = document.getElementById('enviar');

// let dia = document.getElementById('day');
// let mes = document.getElementById('month');




 enviar.addEventListener('click',envio)

function envio(e){
   e.preventDefault();
   let ano_atual = new Date().getFullYear();
   let ano_informado = document.getElementById('year');

let ano_informado_string = JSON.stringify(ano_informado.value);
let ano_informado_numero = parseInt(ano_informado_string);

   console.log(ano_atual - ano_informado_string);
    console.log(ano_informado_string)
    console.log(typeof ano_atual)
    console.log(ano_informado_numero.value)


//let data_aniversario = dia.value +'/'+ mes.value + '/' + ano.value



}



//console.log(parseInt (juntos.value))

// var ano_atual = new Date().getFullYear();
// var ano_informado = 1970;
// console.log(ano_atual - ano_informado);
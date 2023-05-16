
let enviar = document.getElementById('enviar');



let dia = document.getElementById('day');
let mes = document.getElementById('month');
let ano = document.getElementById('year');





console.log(dia.value)
//dia.addEventListener('keyup', envio)
//mes.addEventListener('keyup', envio)
//ano.addEventListener('keyup', envio)
enviar.addEventListener('click',envio)

function envio(e){
  e.preventDefault();
  console.log(dia.value +'/'+ mes.value + '/' + ano.value) 
  

}


//console.log(juntos)
//console.log(parseInt (juntos.value))


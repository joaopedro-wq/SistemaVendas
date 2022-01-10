
let somaBanana = 0;
let somaCalabresa = 0;
let somaPortuguesa = 0;
let somaAtum = 0;

let VendaBanana = 0.00;
let VendaCalabresa = 0.00;
let VendaPortuguesa = 0.00;
let VendaAtum = 0.00;


let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');


btnVendas.addEventListener('click',venda, false);
btnEstorno.addEventListener('click', estorno, false);
btnPlanilha.addEventListener('click', planilha, false);


function venda(e){

  if(document.getElementById('banana').checked){
    somaBanana = somaBanana + 1;
    VendaBanana += 25.00;
    document.getElementById('resultBanana').innerHTML = somaBanana;
    document.getElementById('vendaBanana').innerHTML = VendaBanana.toFixed(2); 
} else if(document.getElementById('calabresa').checked){
  somaCalabresa = somaCalabresa + 1;
  VendaCalabresa += 25.00;
  document.getElementById('resultCalabresa').innerHTML = somaCalabresa;
  document.getElementById('vendaCalabresa').innerHTML = VendaCalabresa.toFixed(2);

}
else if(document.getElementById('atum').checked){
  somaAtum = somaAtum + 1;
    VendaAtum += 25.00;
    document.getElementById('resultAtum').innerHTML = somaAtum;
    document.getElementById('vendaAtum').innerHTML = VendaAtum.toFixed(2);

}
else if(document.getElementById('portuguesa').checked){
  somaPortuguesa = somaPortuguesa + 1;
    VendaPortuguesa += 25.00;
    document.getElementById('resultPortuguesa').innerHTML = somaPortuguesa;
    document.getElementById('vendaPortuguesa').innerHTML = VendaPortuguesa.toFixed(2);
}


}

function estorno(e){

  if(document.getElementById('banana').checked){
    somaBanana = somaBanana - 1;
    VendaBanana = VendaBanana - 25.00 ;
    if(somaBanana < 0) {
      somaBanana = 0;
      VendaBanana = 0.00;

    }
    document.getElementById('resultBanana').innerHTML = somaBanana;
    document.getElementById('vendaBanana').innerHTML = VendaBanana.toFixed(2); 
} else if(document.getElementById('calabresa').checked){
  somaCalabresa = somaCalabresa - 1;
  VendaCalabresa = VendaCalabresa - 25.00;
  if(somaCalabresa < 0) {
    somaCalabresa = 0;
    VendaCalabresa = 0.00;

  }
  document.getElementById('resultCalabresa').innerHTML = somaCalabresa;
  document.getElementById('vendaCalabresa').innerHTML = VendaCalabresa.toFixed(2);

}
else if(document.getElementById('atum').checked){
  somaAtum = somaAtum - 1;
    VendaAtum = VendaAtum - 25.00;
    if(somaAtum < 0) {
      somaAtum = 0;
      VendaAtum = 0.00;

    }
    document.getElementById('resultAtum').innerHTML = somaAtum;
    document.getElementById('vendaAtum').innerHTML = VendaAtum.toFixed(2);

}
else if(document.getElementById('portuguesa').checked){
  somaPortuguesa = somaPortuguesa - 1;
    VendaPortuguesa = VendaPortuguesa - 25.00;
    if(somaPortuguesa < 0) {
      somaPortuguesa = 0;
      VendaPortuguesa = 0.00;

    }
    document.getElementById('resultPortuguesa').innerHTML = somaPortuguesa;
    document.getElementById('vendaPortuguesa').innerHTML = VendaPortuguesa.toFixed(2);
}


}


function planilha(e){

TableToExcel.convert(document.getElementById('table'));

}
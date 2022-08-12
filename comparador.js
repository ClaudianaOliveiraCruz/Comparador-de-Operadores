function MostrarValorIgual() {

  var valor1 = document.getElementById("1").value;
  var valor2 = document.getElementById("2").value;

  var resultado;

  if( valor1 == valor2 ){ resultado = true }
  else{ resultado = false}

  alert(resultado);
}

function MostrarValorDiferente() {

  var valor3 = document.getElementById("3").value;
  var valor4 = document.getElementById("4").value;

  var resultado;

  if( valor3 != valor4 ){ resultado = true }
  else{ resultado = false}

  alert(resultado);
}

function MostrarValorMaior() {

  var valor5 = document.getElementById("5").value;
  var valor6 = document.getElementById("6").value;

  var resultado;

  if( valor5 > valor6 ){ resultado = true }
  else{ resultado = false}

  alert(resultado);
}

function MostrarValorMaiorIgual() {

  var valor7 = document.getElementById("7").value;
  var valor8 = document.getElementById("8").value;

  var resultado;

  if( valor7 >= valor8 ){ resultado = true }
  else{ resultado = false}

  alert(resultado);
}

function MostrarValorMenor() {

  var valor9 = document.getElementById("9").value;
  var valor10 = document.getElementById("10").value;

  var resultado;

  if( valor9 < valor10 ){ resultado = true }
  else{ resultado = false}

  alert(resultado);
}

function MostrarValorMenorIgual() {

  var valor11 = document.getElementById("11").value;
  var valor12 = document.getElementById("12").value;

  var resultado;

  if( valor11 <= valor12 ){ resultado = true }
  else{ resultado = false}

  alert(resultado);
}
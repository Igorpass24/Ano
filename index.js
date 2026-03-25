//for (let i = 0; i < 10001; i++){ // aqui estou dizendo que enquanto o i for igual a 0, e i for menor que 10001, adicionar 1. no caso vai contar de 1 ate 10000!
    //document.getElementById('teste').innerHTML += i + ', ';

//}
var ano = new Date().getFullYear();

for (let i= ano; i>1899; i--){ // i é igual 2026, enquanto i for menor que 1900 vamos tirar 1
    document.getElementById("ano").innerHTML+="<option value='"+i+"'>"+i+"<";
}
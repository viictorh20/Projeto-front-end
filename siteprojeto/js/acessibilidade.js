// jJavaScript Document

function tamanhoTexto(opcao){
var p = document.getElementsByTagName("p");
var i;
tamanhoAtual = parseInt(p[0].style.fontSize);
     
       
 //aumentando o tamanho da fonte      
 
 if(opcao=="a"){
for (i = 0; i < p.length; i++) {
if(tamanhoAtual<30)
p[i].style.fontSize = (tamanhoAtual+1)+"px";

}
tamanhoAtual= tamanhoAtual+1;
}else if(opcao=="d"){

if(tamanhoAtual>8){
for (i = 0; i < p.length; i++) {
p[i].style.fontSize = (tamanhoAtual-1)+"px";
}
tamanhoAtual= tamanhoAtual-1;
}
}else{
for (i = 0; i < p.length; i++) {
p[i].style.fontSize = 12+"px";

}

}

}

// função responsável por trocar a cor de fundo ou texto, sendo baseada por uma flag
function trocaCor(flag) {
var p = document.getElementsByTagName("p");
if(flag == "bg") {
/* Explicar como manipular os elementos (no exemplo o 'body') sem precisar definir uma ID */
var body=document.getElementsByTagName('body')[0];
body.bgColor = document.getElementsByName("cor")[0].value;
//document.getElementById("bg").bgColor = document.getElementsByName("cor")[0].value;
} else if(flag == "txt"){
for (i = 0; i < p.length; i++) {
document.getElementsByTagName('p')[i].style.color = document.getElementsByName("cor")[1].value;
}
}
}
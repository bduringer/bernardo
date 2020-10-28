 
function media(n1,n2){
    nota1=n1;

    nota2=n2;
    var media=(n1+n2)/2;
    console.log(media);
    return media;
}

var resultado1 = media(5,7);
var resultado2 = media(8,5);
var resultado3 = media(4,9);
var resultado = [resultado1, resultado2, resultado3];

for(var i=0; i<3; i++){
    console.log(resultado[i]);
}

/*function saudacao(){
    return "Olá Mundo";
}

var s = saudacao();
console.log(s);*/
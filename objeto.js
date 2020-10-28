function calcmedia(n1,n2){
return(n1+n2)/1.5;
}
var aluno = 
{ nome : "igor", nota : [4,5.0], media : calcmedia};
var aluno1 = 
{ nome : "joao", nota : [8,5.0], media : function(){return (this.nota[0]+this.nota[1])/2; }};


console.log(aluno.nome);
console.log(aluno.media(aluno.nota[0],aluno.nota[1]));
console.log(aluno1.nome);
console.log(aluno1.media());
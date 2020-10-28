function criaraluno(nome,n1,n2){
    return{
        nome : nome , 
        nota1 : n1 , 
        nota2 : n2,
        media: function() 
        { return (this.nota1+this.nota2)/2;}}
    
};
var turma = [criaraluno("Bernardo",8,5),criaraluno("Rafa",7,6),criaraluno("Ivone",5,9)];
turma.forEach(function(elemento){
    return (console.log(elemento));
})



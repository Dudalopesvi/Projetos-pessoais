function Contadorsimples(i){
    for(let i = 0; i < 11; i++){
        console.log("Contando" + i);
    }
}

Contadorsimples();

function semaforo(cor, cores){
    for (const cor of cores) {
        let mensagem = "O semáforo está " + cor;
        e = 1;
        let vermelho = 1
        let amarelo =  2
        let verde =  3  
        if (e >= 1) {
            console.log(mensagem + vermelho);  
    }else if (e >= 2) {
        console.log(mensagem + amarelo);
    }else if (e >= 3) {
        console.log(mensagem + verde);
    }
}
}
 semaforo(1, ["vermelho", "amarelo", "verde"]);    

function zerar(){
for(let i = 10; i > -1; i--){
    console.log(i);
     
}
}

zerar();
console.log("tempo esgotado");
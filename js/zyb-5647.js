    

// // for (let index = 0; index < liElement.length; index++) {
// //     console.log(liElement[index].textContent)
    
// // }

// // console.log(liElement.length);

// //Declaração de Arrays
// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// //Espalhar o array com SPREAD [...]
// let nr3 = [...nr1,...nr2];

// console.log(`Array-1 ${nr1}`);
// console.log(`Array-2 ${nr2}`);
// console.log(`Array-3 ${nr3}`);

////--------------------------------------------------------------------------------------
// //Listando um Array tecnica especial
// // nr3.forEach((ItemDoArray)=> {
// //     console.log(`Array-3 sendo listada ${ItemDoArray}`);
// // })


// //Listando o Array com o MAP
// //numero e key são elementos
// nr3.map((numero,key)=>{
    
//     console.log(`${(key+1)} - Itens do array - ${numero}`);
    
    
// })

// //Convertendo HTMLCollection em Array de forma indireta
// // const liElement = document.getElementsByTagName("li");
// const liElementHtml = document.getElementsByTagName("li");
// const liElementArray = [...liElementHtml];

// liElementArray.map((item, key)=>{
//     //Localizando o Item
//     if (item.textContent == "Item-39"){
//         console.log(`${key+1} -I${item.textContent = "Localizado"}`)
//     }
// })       
////-----------------------------------------------------------------------------------
// function soma(p1, p2, p3){
//     nr1 = p1;
//     nr2 = p2;
    
//     return(parseInt(nr1) + parseInt(nr2) + parseInt(p3))

//     // console.log(parseInt(nr1) + parseInt(nr2) + parseInt(parametro))
//     // console.log(`Este é o paramentro que foi passado para a função : ${parametro}`);
// }

// //Arrow Funcion
// const mudaCor = ()=>{

//     //Função SET-TIME-OUT
//     setTimeout(alert("Executou"), 5000);
// }
// mudaCor();
//--------------------------------------------------------------------------------------

// let tmp
// function mudaCor(){
//     let r = "";
//     let g = "";
//     let b = "";

    //random = Gera números aleatórios entre 0 e 1
    //ceil, floor e round que arredondam o número para cima, para baixo ou aleatoriamente.

    //Determinando para a variável r um valor entre 0 e 255.
//     r = Math.round( Math.random()*255);
//     g = Math.round( Math.random()*255);
//     b = Math.round( Math.random()*255);

//     const cabecalho = document.querySelector(".cabecalho");
//     cabecalho.setAttribute("style", `background-color:rgb(${r},${g},${b})`)

//     tmp = setTimeout(mudaCor, 1000)

// }
// mudaCor();
//---------------------------------------------------------------------------------

// Função Altera Banner
// let temp
// function alteraBanner(){
//     let nr = Math.ceil(Math.random()*3);
    
//     let caminho = `./img/banner-lateral-${nr}.png`;

//     const img1 = document.querySelector(".l-e > img");
//     const img2 = document.querySelector(".l-d > img");
    
//     img1.src = caminho;
//     img2.src = caminho;
//     temp = setTimeout(alteraBanner, 1000)
// }
//alteraBanner();

//Para fazer os banners mudarem um diferente do outro.

// let tempo
// function alteraBannerr(){
//     let num = Math.ceil(Math.random()*3);
    
//     let caminhoo = `./img/banner-lateral-${num}.png`;
   
//     const imagem = document.querySelector(".l-d > img");
//     imagem.src = caminhoo;
    
//     tempo = setTimeout(alteraBannerr, 1000)
// }
// alteraBannerr()

//---------------------------------------------------------------------------------
//Lampada liga desliga

// const botao = document.querySelector(".central button");
// botao.addEventListener("click" , ()=>{
//     const imgLampada = document.querySelector(".central img");

//     if(botao.textContent == "LIGAR"){
//         imgLampada.src = "./img/pic_bulbon.gif"
//         botao.textContent = "DESLIGAR";
//     }else{
//         imgLampada.src = "./img/pic_bulboff.gif"
//         botao.textContent = "LIGAR";
//     }

// });

// function ligaDesliga() {

//     const imgLampada = document.querySelector(".central img");

//     if(botao.textContent == "LIGAR"){
//         imgLampada.src = "./img/pic_bulbon.gif"
//         botao.textContent = "DESLIGAR";
//     }else{
//         imgLampada.src = "./img/pic_bulboff.gif"
//         botao.textContent = "LIGAR";
//     }
// }

//-----------------------------------------------------------------------------------------

const inputUser = document.querySelector("input[name='nmUser']");
const labelUser = document.querySelector("label[for]");

inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style", "outline-color:#ff0000");
});

inputUser.addEventListener("keyup", ()=>{

    if(inputUser.value.length < 8){
        inputUser.setAttribute("style", "outline-color:#ff0000");
        labelUser.setAttribute("style", "color:#ff0000");
    }else{
        inputUser.setAttribute("style", "outline-color:#dddddd");
        labelUser.setAttribute("style", "color:#000000");
    }
});




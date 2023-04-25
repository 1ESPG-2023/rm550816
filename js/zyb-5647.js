    

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

function soma(p1, p2, p3){
    nr1 = p1;
    nr2 = p2;
    
    return(parseInt(nr1) + parseInt(nr2) + parseInt(p3))

    // console.log(parseInt(nr1) + parseInt(nr2) + parseInt(parametro))
    // console.log(`Este é o paramentro que foi passado para a função : ${parametro}`);
}

//Arrow Funcion
const mudaCor = ()=>{

    //Função SET-TIME-OUT
    setTimeout(alert("Executou"), 5000);
}
mudaCor();
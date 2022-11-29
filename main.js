// window.addEventListener("scroll", ()=>{
//     let content = document.querySelectorAll(".box");
//     let position1 = content.getBoundingClientRect().top;
//     let position2 = window.innerHeight /5 * 4;
//     if(position1 < position2){
//      content.classList.add("active");
//     }else{
//         content.classList.remove("active");
        
//     }
// });


let boxElement = Array.from(document.querySelectorAll(".box"))


function isVisible(element){
    let elementDiv = element.getBoundingClientRect();  //te dice la posicion(respecto a la ventana ) de cada elemento 
    let distanceTop = -200;
    return elementDiv.top - window.innerHeight  < distanceTop ? true : false;
    //si la posicion superior del elemento menos la altura de la ventana es menos que la distancia desde  la parte superior (- de 200)
    //el elemento esta dentro de nuestra ventana y se devuelve verdadero
}

window.addEventListener("scroll", scanelements)



function scanelements(){
    boxElement.forEach(element =>{
        if(isVisible (element)){
            element.classList.add("active");
        }else{
              element.classList.remove("active")
        }
    })
}




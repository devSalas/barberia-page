
 export class MovingSliders{

  container_sliders;

  #countVisibleSliders;
  #countSliders;
  #porcentaje;

  #counter =0;

  #getHtml=(el)=>document.querySelector(el)

  constructor(countSliders,countVisible,porcentaje) {
    this.#countSliders = countSliders;
    this.#countVisibleSliders = countVisible;
    this.#porcentaje=porcentaje;
  }



  accion($container,$next,$back){
      document.addEventListener("click", (e)=>{

        const $containerSliders = this.#getHtml($container)
        const $btnNext =this.#getHtml($next)
        const $btnBack = this.#getHtml($back)

        //button back
      
        if(e.target == $btnBack ){
          console.log(this.#counter, -this.#porcentaje)
          if(this.#counter == 0  )return;
          if(this.#counter > -(this.#porcentaje) )return;
          this.#counter+=this.#porcentaje;

          $containerSliders.style.transform=`translateX(${this.#counter}%) `
          console.log(this.#counter)
        }


        if(e.target ==$btnNext ){
          
          if((this.#countSliders-this.#countVisibleSliders)*this.#porcentaje <= this.#counter*-1)return

          this.#counter-=this.#porcentaje;

          $containerSliders.style.transform=`translateX(${this.#counter}%) `
          console.log(this.#counter)
          }
        
        })
  }
}





/* 
parametros de la instancia:
1 -> cantidad de slider
2 -> cantidad visible;
3 -> porcentaje que ocupa en el contenedor visible

*/
/* const Sliders1 = new MovingSliders(6,2,50) */

/* 
parametros de metodo accion
1 ->clase contendor de la caja que contiene todos los sliders
2 ->clase boton que da siguiente
3 ->clase boton que da atras

*/

/* 
Sliders1.accion(".container_sliders",".btn_sliders-next",".btn_sliders-back") */



/* const d =document

const getHtml= (el)=> d.querySelector(el)

d.addEventListener("click", (e)=>{

const $btnBack = getHtml(".btn_sliders-back")
const $btnNext = getHtml(".btn_sliders-next")

console.log($btnBack,$btnNext)

const $containerSliders = getHtml(".container_sliders")


if(e.target == $btnBack ){
  console.log("back")
  $containerSliders.style.transform=`translateX(+50%) `

}
if(e.target ==$btnNext ){
  console.log("next")
  $containerSliders.style.transform=`translateX(-50%) `

}

}) */

import colorNav from "./js/colorNav.js"
import menu from "./js/menu.js"
import{MovingSliders} from "./js/MovingSliders"
const d = document



d.addEventListener("DOMContentLoaded",e=>{
  menu()
  colorNav()


   const Sliders1 = new MovingSliders(6,2,50)
   Sliders1.accion(".container_sliders",".btn_sliders-next",".btn_sliders-back")
})
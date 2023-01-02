

const menu = () => {

  const d = document

  const getHtml =(el)=> d.querySelector(el)

  const $btnClose = getHtml(".btnCloseMenu");
  const $btnOpen = getHtml(".btnOpenMobile");
  const $menuMobile = getHtml(".menuMobile");



  d.addEventListener("click",e=>{

  if(e.target.matches(".ubicacion")| e.target.matches(".servicios") |e.target.matches(".acerca") ) {

    $menuMobile.classList.add("hidden")
  }
  if(e.target === $menuMobile){
    $menuMobile.classList.add("hidden")
  }

  if(e.target === $btnOpen){

    $menuMobile.classList.remove("hidden")
  }
  if(e.target === $btnClose){

    $menuMobile.classList.add("hidden")

  }

  },{
    passive:true
  })
  




  return 
}

export default menu



const menu = () => {

  const d = document

  const getHtml =(el)=> d.querySelector(el)

  const $btnClose = getHtml(".btnCloseMenu");
  const $btnOpen = getHtml(".btnOpenMobile");
  const $menuMobile = getHtml(".menuMobile");



  d.addEventListener("click",e=>{
    console.log(e.target)
    console.log($btnOpen)

  if(e.target === $menuMobile){
    $menuMobile.classList.add("hidden")
  }

  if(e.target === $btnOpen){
    console.log("entro")
    $menuMobile.classList.remove("hidden")
  }
  if(e.target === $btnClose){
    console.log("entro")
    $menuMobile.classList.add("hidden")
    console.log($menuMobile)
  }

  },{
    passive:true
  })
  

  console.log($btnClose)


  return 
}

export default menu

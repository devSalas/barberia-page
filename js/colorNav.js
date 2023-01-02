
const colorNav = () => {
  const d = document
  const getHtml =(el)=> d.querySelector(el)

  const $nav = getHtml(".navDesktop");

  window.addEventListener("scroll",e=>{
    if(window.innerHeight-100 <window.scrollY){
      $nav.classList.add("bg-black")
    }
    if(window.innerHeight-100>window.scrollY){
      $nav.classList.remove("bg-black")
    }
  })

}

export default colorNav
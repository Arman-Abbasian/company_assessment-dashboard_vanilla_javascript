import Router from "./router.js";

const links=document.querySelectorAll(".link")
class View{
constructor(){
    [...links].forEach(link=>{
        link.addEventListener("click",(e)=>{
            e.preventDefault();
            history.pushState(null,null,e.target.parentElement.href);
            Router.router()
        })
    })
}
};
export default new View()
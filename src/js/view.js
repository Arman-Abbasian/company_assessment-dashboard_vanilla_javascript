import Router from "./router.js";

const links=document.querySelectorAll(".link")
class View{
constructor(){
    //add click event to link buttons
    [...links].forEach(link=>{
        link.addEventListener("click",(e)=>{
            //1- prenenting refreshing page
            e.preventDefault();
            //2- transfering between pages with (history.push)
            history.pushState(null,null,e.target.parentElement.href);
            //do the router function every time that we click on pages
            Router.router()
        })
    })
}
};
export default new View()
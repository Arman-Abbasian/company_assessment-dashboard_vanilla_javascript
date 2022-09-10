import mainPage from './pages/main.js';
const mainSection=document.querySelector(".main")

const routes=[
    {path:"/public/index.html",view:mainPage()},
    {path:"/public/index.html/personnel",view:()=>console.log("personnel")},
    {path:"/public/index.html/net",view:()=>console.log("net")},
    {path:"/public/index.html/*",view:()=>console.log("404")},
];
class Router{
    router(){
       const potertialRoutes=routes.map(item=>{
        if(item.path===location.pathname){
            return(item.isMatch=true)
        }else{
       return item.isMatch=false
    }
       }) ;
       const selectedRoute=routes.find(route=>route.isMatch==true);
       mainSection.innerHTML=selectedRoute.view
    };
};
export default new Router();
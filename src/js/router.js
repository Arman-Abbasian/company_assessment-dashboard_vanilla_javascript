//this three import is our pages
import mainPage from './pages/main.js';
import netPage from './pages/net.js';
import personnelPage from './pages/personnel.js';
import notFound from './pages/404.js';
//this is where we want show the pages of each route
const mainSection=document.querySelector(".main")

//make our routes as Array of objects --> 1-path , 2- view
const routes=[
    {path:"/public/index.html",view:mainPage()},
    {path:"/public/index.html/personnel",view:personnelPage()},
    {path:"/public/index.html/net",view:netPage()},
];

//make a Router class
class Router{
    //router funtion
    router(){
        //loop an the routes and add a property to that (isMatch=>boolean)
       const potertialRoutes=routes.map(item=>{
        if(item.path===location.pathname){
            return(item.isMatch=true)
        }else{
       return item.isMatch=false
    } 
       }) ;   
       //based on the routes array decision to show which page
       let selectedRoute=routes.find(route=>route.isMatch==true);
       if(!selectedRoute){
        selectedRoute={path:"/public/index.html/notFound",view:notFound(),isMatches:true}
       }
       mainSection.innerHTML=selectedRoute.view
    };
};
export default new Router();
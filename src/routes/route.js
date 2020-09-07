import Home from "../pages/Home.js"
import Error404 from "../pages/Error404.js"

const routes = {
    "/" : Home,

}

const router = async () => {
    const content =  null || document.getElementById('table-content')
     let render = routes["/"] ? routes["/"] : Error404;
    content.innerHTML = await render();

}

export default router;
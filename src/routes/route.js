import Home from "../pages/Home.js"
import Header from "../templates/Header.js"
import Error404 from "../pages/Error404.js"

const routes = {
    "/" : Home,

}

const router = async () => {
    const content =  null || document.getElementById('table-content')
    // const header =  null || document.getElementById('header')

    // header.innerHTML = await Header();
     let render = routes["/"] ? routes["/"] : Error404;
    content.innerHTML = await render();

}

export default router;
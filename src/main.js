import Navigo from "navigo";
import Homepage from "./pages/homepage";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import DetailPage from "./pages/detail";
import ProductEdit from "./pages/admin/productEdit";
import signin from "./pages/signin";
import signup from "./pages/signup";
import dashboard from "./pages/admin/dashboard";
import addPost from "./pages/admin/news/add";
import AdminNews from "./pages/admin/news";

const router = new Navigo("/", { linksSelector: "a" });

const render = (content, id) => {
    document.querySelector("#app").innerHTML = content.print(id);
};
router.on({
    "/": () => render(Homepage),
    "/about": () => render(AboutPage),
    "/signin": () => render(signin),
    "/signup": () => render(signup),
    "/product": () => render(ProductPage),
    "/product/:id": ({ data }) => render(DetailPage, data.id),
    "/admin/dashboard": () => render(dashboard),
    "/admin/news": () => render(AdminNews),
    "/admin/news/add": () => render(addPost),
    "/admin/news/:id/edit": ({ data }) => render(ProductEdit, data.id),

});
router.resolve();
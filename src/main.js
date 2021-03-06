import Navigo from "navigo";
import Homepage from "./pages/homepage";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import DetailPage from "./pages/detail";
import Signin from "./pages/signin";
import dashboard from "./pages/admin/dashboard";
import addPost from "./pages/admin/news/add";
import AdminNews from "./pages/admin/news";
import detailProduct from "./pages/detailProduct";
import PostEdit from "./pages/admin/news/postEdit";
import AdminProducts from "./pages/admin/products";
import AddProducts from "./pages/admin/products/addProduct";
import editProducts from "./pages/admin/products/productEdit";
import Signup from "./pages/signup";
import detailCart from "./pages/cart";
import checkout from "./pages/checkout/checkout";
import listOrderAdmin from "./pages/admin/order/order";
import listOrder from "./pages/checkout/listorder";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const render = async(content, id) => {
    document.querySelector("#app").innerHTML = await content.print(id);
    if (content.afterRender) await content.afterRender(id);
};
router.on("/admin/*/", () => {}, {
    before(done) {
        if (localStorage.getItem("user")) {
            const userId = JSON.parse(localStorage.getItem("user")).id;
            if (userId === 1) {
                done();
            } else {
                document.location.href = "/";
            }
        } else {
            document.location.href = "/signin";
        }
    },
});
router.on({
    "/": () => render(Homepage),
    "/about": () => render(AboutPage),
    "/signin": () => render(Signin),
    "/signup": () => render(Signup),
    "/carts": () => render(detailCart),
    "/checkout": () => render(checkout),
    "/products": () => render(ProductPage),
    "/listorder": () => render(listOrder),
    "/admin/order": () => render(listOrderAdmin),
    "/products/:id": ({ data }) => render(detailProduct, data.id),
    "/admin/products": () => render(AdminProducts),
    "/admin/products/add": () => render(AddProducts),
    "/admin/products/:id/edit": ({ data }) => render(editProducts, data.id),
    "/news/:id": ({ data }) => render(DetailPage, data.id),
    "/admin/dashboard": () => render(dashboard),
    "/admin/news": () => render(AdminNews),
    "/admin/news/add": () => render(addPost),
    "/admin/news/:id/edit": ({ data }) => render(PostEdit, data.id),

});
router.resolve();
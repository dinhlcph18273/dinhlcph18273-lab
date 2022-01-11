import Navigo from "navigo";
import Homepage from "./pages/homepage";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import DetailPage from "./pages/detail";
import AdminProductPage from "./pages/admin/products";
import ProductEdit from "./pages/admin/productEdit";
import signin from "./pages/signin";
import signup from "./pages/signup";
import dashboard from "./pages/admin/dashboard";
import addPost from "./pages/admin/add";

const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {
    document.querySelector("#app").innerHTML = content;
};
router.on({
    "/": () => {
        render(Homepage.print());
    },
    "/about": () => {
        render(AboutPage.print());
    },
    "/signin": () => {
        render(signin.print());
    },
    "/signup": () => {
        render(signup.print());
    },
    "/product": () => {
        render(ProductPage.print());
    },
    "/product/:id": ({ data }) => {
        const { id } = data;
        render(DetailPage.print(id));
    },
    "/admin/dashboard": () => {
        render(dashboard.print());
    },
    "/admin/news": () => {
        render(AdminProductPage.print());
    },
    "/admin/news/add": () => {
        render(addPost.print());
    },
    "/admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        render(ProductEdit.print(id));
    },

});
router.resolve();
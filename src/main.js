import Navigo from "navigo";
import Homepage from "./pages/homepage";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";

const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {
    document.querySelector("#app").innerHTML = content.print();
};
router.on({
    "/": () => {
        render(Homepage);
    },
    "/about": () => {
        render(AboutPage);
    },
    "/product": () => {
        render(ProductPage);
    },
});
router.resolve();
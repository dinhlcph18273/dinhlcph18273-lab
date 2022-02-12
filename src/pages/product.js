import footer from "../components/footer";
import header from "../components/header";
import logo from "../components/logo";
import products from "../components/product";

const ProductPage = {
    async print() {
        return /* html */ `
    <div class="max-w-7xl mx-auto">
        ${header.print()}
        <div class="bg-sky-900 text-center py-4">
            ${logo.print()}
        </div>
        <div>
            ${await products.print()}
        </div>
        ${footer.print()}
    </div>
        `;
    },
};
export default ProductPage;
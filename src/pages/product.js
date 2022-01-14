import footer from "../components/footer";
import header from "../components/header";
import logo from "../components/logo";

const ProductPage = {
    print() {
        return /* html */ `
        <div class="max-w-5xl mx-auto">
        ${header.print()}
    <div class="bg-sky-900 text-center py-4">
        ${logo.print()}
    </div>
    <h1>Product Page</h1>
        ${footer.print()}
    </div>
        `;
    },
};
export default ProductPage;
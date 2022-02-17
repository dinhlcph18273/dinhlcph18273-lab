import footer from "../components/footer";
import header from "../components/header";
import headerTop from "../components/headerTop";
// eslint-disable-next-line import/no-cycle
import listCaTe from "../components/listCaTe";
import products from "../components/product";

const ProductPage = {
    async print(arr) {
        return /* html */ `
        
        <header class = "shadow-md">
         <div class="max-w-7xl mx-auto">
            <div id = "header">
            ${headerTop.print()}
            </div>
            <div class="">
                ${header.print()}
            </div>
         </div>
        </header>
         <div class="max-w-7xl mx-auto mb-10">
            <h1 class = "text-2xl my-7"><span class = "opacity-70">Trang chủ</span> / Cửa hàng</h1>
            <div class = "flex">
                <div class = "">    
                ${listCaTe.print()}
                </div>
                <div class = "grid grid-cols-4 gap-8" id="product">
                    ${await products.print(arr)}
                </div>
            </div>
        </div>
        ${footer.print()}
        `;
    },
    async afterRender() {
        headerTop.afterRender();
        await listCaTe.afterRender();
        products.afterRender();
        await header.afterRender();
    },
};
export default ProductPage;
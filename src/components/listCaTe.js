import { getproductAll } from "../aip/product";
import ProductPage from "../pages/product";
import { filproduct, reRender } from "../utils";

const listCaTe = {
    print() {
        return /* html */ `
    <aside id="nav_menu-2" class="w-[280px] mt-3">
        <span class="text-[23px] text-white bg-lime-500 py-4 pl-3 pr-10 rounded-t-lg">Danh mục sản phẩm</span>
       <div class="mt-3">
            <ul id="menu-danh-muc-san-pham-vertical-menu" class="w-[240px]">
                <li id="menu-item-705" class="py-3 pl-2 hover:bg-lime-500 hover:text-white "><button data-category = "3" class="btn-category" href="">Rau củ</button></li>
                <li id="menu-item-706" class="py-3 pl-2 hover:bg-lime-500 hover:text-white" ><button data-category = "2" class="btn-category" href="">Hải sản</button></li>
                <li id="menu-item-707" class="py-3 pl-2 hover:bg-lime-500 hover:text-white " ><button data-category = "1" class="btn-category" href="">Trái cây</button></li>
                <li id="menu-item-708" class="py-3 pl-2 hover:bg-lime-500 hover:text-white " ><button href="">Đồ uống</button></li>
                <li id="menu-item-709" class="py-3 pl-2 hover:bg-lime-500 hover:text-white "><button href="">Đồ khô</button></li>
                <li id="menu-item-710" class="py-3 pl-2 hover:bg-lime-500 hover:text-white "><button data-category = "4" class="btn-category" href="">Thịt trứng</button></li>
            </ul>
        </div>
    </aside>
        `;
    },
    async afterRender() {
        const { data } = await getproductAll();
        const cate = document.querySelectorAll(".btn-category");
        console.log(cate);
        cate.forEach((item) => {
            item.addEventListener("click", () => {
                const { category } = item.dataset;
                console.log(filproduct(data, category));
                reRender(ProductPage, "#app", filproduct(data, category));
            });
        });
    },
};
export default listCaTe;
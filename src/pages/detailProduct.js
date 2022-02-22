import toastr from "toastr";
import { getproduct } from "../aip/product";
import footer from "../components/footer";
import header from "../components/header";
import headerTop from "../components/headerTop";
import { addToCart } from "../utils/cart";
import "toastr/build/toastr.min.css";

const detailProduct = {
    async print(id) {
        const { data } = await getproduct(id);
        return /* html */ `
        <div class=" shadow-md mb-10">
            <div class = "header">
                ${headerTop.print()}
            </div>
            ${header.print()}
        </div>
        <div class="grid grid-cols-2 gap-8 max-w-7xl mx-auto">
            <div class="mb-10">
                <img class = "w-[600px] h-[600px] mx-auto" src="${data.img}" alt="">
            </div>
            <div class="" >
                <p class="opacity-60 pb-5">TRANG CHỦ / SẢN PHẨM</p>
                <h1 class="text-3xl font-semibold">${data.title}</h1>
                <p class="text-2xl font-semibold text-lime-500 py-5">${data.price}đ</p>
                <div class="">
                    <p class="py-2 text-lg"><i class="fa-solid fa-check"></i> Gọi mua hàng 1900 636 648</p>
                    <p class="py-2 text-lg"><i class="fa-solid fa-check"></i> Đảm bảo tươi ngon</p>
                    <p class="py-2 text-lg"><i class="fa-solid fa-check"></i> Giaohàng trực tiếp từ vườn</p>
                    <p class="py-2 text-lg"><i class="fa-solid fa-check"></i> Đổi trả trong vòng 24h</p>
                    <p class = "text-xl text-lime-500 capitalize">${data.status}</p>
                    <div>
                    <p class="text-lg">Số lượng</p>
                    <input type="number" id="inputValue" class="border border-gray-500" />
                    </div>
                    <p class="py-4">${data.desc}</p>
                    <button id = "btnAddToCart" class = "px-8 py-2 bg-lime-500 text-white hover:bg-lime-600 my-5">Add Cart</button>
                </div>
            </div>
        </div>
        ${footer.print()}
        `;
    },
    afterRender(id) {
        headerTop.afterRender();
        const userid = JSON.parse(localStorage.getItem("user"));
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const inputvalue = document.querySelector("#inputValue");
        btnAddToCart.addEventListener("click", async() => {
            const { data } = await getproduct(id);
            addToCart({
                ...data,
                quantity: inputvalue.value ? +inputvalue.value : 1,
                user: userid.id,
            }, () => {
                toastr.success("Thêm Thành công");
            });
        });
    },
};

export default detailProduct;
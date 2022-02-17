import toastr from "toastr";
import { getproduct, getproductAll } from "../aip/product";
import "toastr/build/toastr.min.css";
import { addToCart } from "../utils/cart";

const products = {
        async print(fil) {
            let data = [];
            if (fil) {
                data = fil;
            } else {
                const response = await getproductAll();
                data = response.data;
            }

            return /* html */ `
        ${data.map((product) => `   
            <div class = "border text-center hover:shadow-2xl transition ease-in-out duration-500"> 
                <div class = "overflow-hidden">
                <a href="/#/products/${product.id}"><img class = "mx-auto hover:scale-125 transition ease-in-out duration-500 " src="${product.img}" alt="" /></a>
                </div>
                <div class = "">
                <p class = "text-center my-2 px-2 overflow-hidden text-ellipsis h-[27px]"><a href="/#/products/${product.id}" class = "text-[1.125rem] hover:text-lime-500">${product.title}</a></p >
                <p class = "text-center text-lime-600 text-lg mb-2">${product.price} đ</p>
                </div>
                <button data-id = "${product.id}" class = "btn-add px-6 py-1 bg-lime-500 text-white hover:bg-lime-600 my-5">Add Cart</button>
            </div>
                `).join("")}
    `;
    },
    afterRender() {
        const addCart = document.querySelectorAll(".btn-add");
        addCart.forEach((item) => {
            item.addEventListener("click", async () => {
                const { id } = item.dataset;
                const { data } = await getproduct(id);
                addToCart({ ...data, quantity: 1 }, () => {
                    toastr.success("Thêm Thành công");
                });
            });
        });
    },
};

export default products;
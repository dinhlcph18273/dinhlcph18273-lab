import toastr from "toastr";
import "toastr/build/toastr.min.css";
import footer from "../components/footer";
import header from "../components/header";
import headerTop from "../components/headerTop";
import {
    decreaseQuantityFromCart,
    getTotalPrice,
    increaseQuantityFromCart,
    removeItemFromCart,
} from "../utils/cart";
import { reRender } from "../utils";
// eslint-disable-next-line import/order
import $ from "jquery";
// eslint-disable-next-line import/order
import validate from "jquery-validation";

const detailCart = {
        print() {
            let cart = [];
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
            }
            return /* html */ `
            <header class = "shadow-md">
                <div class="max-w-7xl mx-auto">    
                    ${headerTop.print()}     
                    ${header.print()}
                </div>
            </header>
        <div class="max-w-7xl mx-auto py-10 grid grid-cols-2">
            <div>
            ${localStorage.getItem("cart") ? `
                <table>
                        <thead>
                            <tr class = "border-b-4">
                                <th class = "text-left text-lg">Sản phẩm</th>
                                <th class = "text-lg">Giá</th>
                                <th class = "text-lg">Số lượng</th>
                                <th class = "text-lg">Tổng</th>
                            </tr>
                        </thead>
                    ${cart.map((item) => `     
                    <tbody>
                        <tr class = "border-b py-4">
                            <td class = " text-center flex items-center py-4">
                            <button data-id=${item.id} class="btn btn-remove border px-1 rounded opacity-70 hover:opacity-100 hover:text-red-500 mx-2"><i class="fa-solid fa-xmark"></i></button>
                            <img class = "w-1/6 mr-2" src="${item.img}" alt="">
                            ${item.title}
                            </td>
                            <td class = " text-center py-4 text-lime-500">${item.price}đ</td>
                            <td class = " text-center py-4 px-4 flex "><button data-id="${item.id}" class="btn btn-decrease border"><i class="fa-solid fa-minus"></i></button><button class="px-2 border">${item.quantity}</button><button data-id="${item.id}" class="btn btn-increase border"><i class="fa-solid fa-plus"></i></button></td>
                            <td class = " text-center py-4 text-lime-500">${item.quantity * item.price}đ</td>
                        
                        </tr>
                    </tbody>
                    `).join(" ")}
                    </table>
                    <tr class=" text-center">
                            <td class="text-center"><h2 class="text-right pr-12 text-xl">Total: ${getTotalPrice()}đ</h2></td>
                    </tr>
            ` : `
                <h1 class="text-center text-3xl text-red-500">Giỏ hàng Trống!</h1>
            `}
            </div>
            <div>

            </div>
        </div>
        ${footer.print()}
        `;
    },
    afterRender() {
        headerTop.afterRender();
        header.afterRender();
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantityFromCart(id, () => {
                        reRender(detailCart, "#app");
                        toastr.success("Tăng thành công!!");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantityFromCart(id, () => {
                        reRender(detailCart, "#app");
                        toastr.success("Giảm thành công!!");
                    });
                } else {
                    removeItemFromCart(id, () => {
                        reRender(detailCart, "#app");
                    });
                }
            });
        });
    },
};

export default detailCart;
import toastr from "toastr";
import footer from "../components/footer";
import header from "../components/header";
import headerTop from "../components/headerTop";
import "toastr/build/toastr.min.css";
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
        <div class="py-10 ">
        ${localStorage.getItem("cart") ? `
            <table class = "box-border">
                    <thead>
                        <tr class = "border">
                            <th class = "border">STT</th>
                            <th class = "border">Tên</th>
                            <th class = "border">Ảnh</th>
                            <th class = "border">Số lượng</th>
                            <th class = "border">Giá</th>
                            <th class = "border">Action</th>
                        </tr>
                    </thead>
                ${cart.map((item, index) => `     
                <tbody>
                    <tr class = "border">
                        <td class = "border text-center">${index + 1}</td>
                        <td class = "border text-center">${item.title}</td>
                        <td class = "border text-center"><img class = "w-1/2 h-1/2 mx-auto" src="${item.img}" alt=""></td>
                        <td class = "border text-center"><button data-id="${item.id}" class="btn btn-decrease"><i class="fa-solid fa-minus"></i></button><button class="px-2">${item.quantity}</button><button data-id="${item.id}" class="btn btn-increase"><i class="fa-solid fa-plus"></i></button></td>
                        <td class = "border text-center money">${item.quantity * item.price}</td>
                        <td class = "border text-center ">
                            <button data-id=${item.id} class="btn btn-remove px-4 py-3 text-white rounded bg-indigo-500 hover:bg-indigo-800">Delete</button>
                        </td>
                    </tr>
                </tbody>
                `).join(" ")}
                </table>
                 <tr class="border text-center">
                        <td class="text-center"><h2 class="text-right pr-12 text-xl">Total: ${getTotalPrice()}đ</h2></td>
                </tr>
        ` : `
            <h1 class="text-center text-3xl text-red-500">Giỏ hàng Trống!</h1>
        `}
          
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
                        toastr.success("Xóa thành công");
                    });
                }
            });
        });
    },
};

export default detailCart;
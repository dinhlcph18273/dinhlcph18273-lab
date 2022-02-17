import toastr from "toastr";
import footer from "../components/footer";
import header from "../components/header";
import headerTop from "../components/headerTop";
import "toastr/build/toastr.min.css";
import { decreaseQuantityFromCart, increaseQuantityFromCart, removeItemFromCart } from "../utils/cart";
import { reRender } from "../utils";

const detailCart = {
        print() {
            let cart = [];
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
            }
            return /* html */ `
        <div class=" shadow-md mb-10">
            <div class = "header">
                ${headerTop.print()}
            </div>
            ${header.print()}
        </div>
        <div class="py-10 ">
        ${localStorage.getItem("cart") ? `
            <table class = "box-border">
                    <thead>
                        <tr class = "border">
                            <th class = "border">STT</th>
                            <th class = "border">Tên</th>
                            <th class = "border">Ảnh</th>
                            <th class = "border">Số lượng</th>
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
                        <td class = "border text-center ">
                            <button data-id=${item.id} class="btn btn-remove px-4 py-3 text-white rounded bg-indigo-500 hover:bg-indigo-800">Delete</button>
                        </td>
                    </tr>
                </tbody>
                `).join(" ")}
                </table>
        ` : `
            <h1 class="text-center text-3xl text-red-500">Giỏ hàng Trống!</h1>
        `}
          
        </div>
        ${footer.print()}
        `;
    },
    afterRender() {
        headerTop.afterRender();
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantityFromCart(id, () => {
                        reRender(detailCart, "#app");
                        toastr.success("Lên!!");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantityFromCart(id, () => {
                        reRender(detailCart, "#app");
                        toastr.success("Xuống!!");
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
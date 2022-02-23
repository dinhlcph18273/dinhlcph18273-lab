import $ from "jquery";
import emailjs, { init } from "@emailjs/browser";
import toastr from "toastr";
import footer from "../../components/footer";
import header from "../../components/header";
import headerTop from "../../components/headerTop";
import { getTotalPrice } from "../../utils/cart";
import "toastr/build/toastr.min.css";
// eslint-disable-next-line import/order
import validate from "jquery-validation";
import { addorder } from "../../aip/order";

init("user_BVA4LDJtLGzwKjk6uQZnR");

const checkout = {
        print() {
            let cart = "";
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
            }
            const user = JSON.parse(localStorage.getItem("user"));
            cart = cart.filter((item) => item.user === user.id);
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

        <div class="max-w-7xl mx-auto py-20 ">
    <form action="" class ="flex" id="form-checkout">
           <div class="w-[700px] border-t-2">
                <h2 class="text-xl font-semibold py-5">THÔNG TIN THANH TOÁN</h2>
                <p class="py-3" id="">
                    <label for="" class="font-semibold">Họ Tên *</label><br>
                    <span class="">
                    <input type="text" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 border py-2 pl-2" name="name" id="name1" placeholder="Họ tên..." >
                    </span>
                </p>
                <p class="py-3" id="">
                    <label for="" class="font-semibold">Địa chỉ *</label><br>
                    <span class="">
                    <input type="text" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 border py-2 pl-2" name="address" id="address" placeholder="Địa chỉ..." >
                    </span>
                </p>
                <p class="py-3" id="">
                    <label for="" class="font-semibold">Số điện thoại *</label><br>
                    <span class="">
                    <input type="text" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 border py-2 pl-2" name="phone" id="phone" placeholder="SĐT..." >
                    </span>
                </p>
                <p class="py-3" id="">
                    <label for="" class="font-semibold">Email *</label><br>
                    <span class="">
                    <input type="text" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 border py-2 pl-2" name="email" id="email" placeholder="Email...">
                    </span>
                </p>
                <p class="py-3" id="">
                    <label for="" class="font-semibold">Ghi chú đơn hàng (Tùy chọn) *</label><br>
                    <span class="">
                    <textarea name="" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 border py-4 pl-2"  id="note" placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn." rows="2" cols="5"></textarea>
                    </span>
                </p>
           </div>
            <div class="w-[500px] border-2 border-lime-500 ml-10 py-5 px-10">  
                <h2 class="text-xl font-semibold my-5">Đơn hàng của bạn</h2>
                <table class="w-full">
                    <thead>
                        <tr class="border-b-2">
                            <th class="text-left text-lg">Sản Phẩm</th>
                            <th class=" text-lg text-right">Tổng</th>
                        </tr>
                    </thead>
                    ${cart.map((item) => `
                        <tbody>
                            <tr class="border-b">
                                <td class="px-1 opacity-70 py-2">${item.title} x ${item.quantity}</td>
                                <td class="text-lime-500 py-2 text-right">${item.price} đ</td>
                            </tr>
                        </tbody>
                    `).join("")}
                    <tfoot>
                        <tr class="border-b">
                            <th class="text-left py-2">Tổng phụ</th>
                            <td class="text-right py-2"><span class="text-lime-500">${getTotalPrice()} đ</span></td>
                        </tr>
                        <tr class="border-b">
                            <th class="text-left py-2">Giao hàng</th>
                            <td class="text-right py-2"><span>Giao hàng miễn phí</span></td>
                        </tr>
                        <tr class="border-b-2">
                            <th class="text-left py-2">Tổng</th>
                            <td class="text-right py-2"><span class="text-lime-500" id = "total">${getTotalPrice()}</span></td>
                        </tr>
                    </tfoot>
                </table>
                <p class="pt-5">Người nhận: ${user.email}</p>
                <button type="submit" class="py-2 px-5 mt-5 bg-orange-500 hover:bg-orange-600 text-white">Đặt hàng</button>
           </div>  
    </form> 
        </div>

          ${footer.print()}
        `;
    },
    afterRender() {
        headerTop.afterRender();
        header.afterRender();
        let cart = "";
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        const user = JSON.parse(localStorage.getItem("user"));
        cart = cart.filter((item) => item.user === user.id);
        $("#form-checkout").validate({
            rules: {
                name: "required",
                address: "required",
                phone: {
                    required: true,
                    number: true,
                },
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                name: "Vui lòng điền Tên người nhận",
                address: "Vui lòng điền địa chỉ",
                phone: {
                    required: "Vui lòng nhập SĐT",
                    number: "Vui lòng nhập số",
                },
                email: {
                    required: "Vui lòng nhập địa chỉ email",
                    email: "Email sai định dạng",
                },
            },
            submitHandler: () => {
                async function addorrder() {
                    const data = {
                        products: cart,
                        information: {
                            name: document.querySelector("#name1").value,
                            address: document.querySelector("#address").value,
                            phone: document.querySelector("#phone").value,
                            email: document.querySelector("#email").value,
                            note: document.querySelector("#note").value,
                        },
                        status: 0,
                        total: +document.querySelector("#total").innerHTML,
                    };
                    try {
                        const reponse = await emailjs.send("service_k9lmbx9", "template_57nssvj", {
                            to_name: document.querySelector("#name1").value,
                            message: `Bạn có 1 đơn hàng mới từ Định! bao gồm:
                                ${cart.map((item) => `
                                    ${item.title}
                                `).join("")}
                                Tổng giá là: ${getTotalPrice()}đ
                            `,
                            email_kh: document.querySelector("#email").value,
                            reply_to: "dinhlcph18273@fpt.edu.vn",
                        });
                        if (reponse) {
                            alert("Vui lòng chechk email");
                        }
                        const response = await addorder(data);
                        toastr.success("Đặt hàng thành công");
                        cart = cart.filter((item) => item.user !== user.id);
                        localStorage.setItem("cart", JSON.stringify(cart));
                        window.location.href = "/#/listorder";
                    } catch (error) {
                        toastr.error("Đặt hàng thất bại");
                    }
                }
                addorrder();
            },
        });
    },
};

export default checkout;
import axios from "axios";
import toastr from "toastr";
import { getproduct, updateproduct } from "../../../aip/product";
import NavBarDas from "../../../components/Nav";
import { reRender } from "../../../utils";
import "toastr/build/toastr.min.css";
import AdminProducts from ".";
// eslint-disable-next-line import/order
import $ from "jquery";
// eslint-disable-next-line import/order
import validate from "jquery-validation";

const editProducts = {
    async print(id) {
        const { data } = await getproduct(id);
        return /* html */ `
        ${NavBarDas.print()}
        <form class = "border border-black max-w-lg mt-2 mx-auto rounded" id = "form-edit">
            <h1 class = "text-center text-3xl text-red-500">Add Products</h1>
            <div class = "">
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Titile</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="text" name="title" value="${data.title}" id="products-title" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="Title...">
                </div>
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Image</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="file" name="" id="products-img"  class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="">
                    <img id="preview-img" alt="" src="${data.img}"> 

                </div>
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Price</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="text" name="price" value="${data.price}"  id="products-price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="Price...">
                </div>
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Status</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="text" name="status" value="${data.status}" id="products-status" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="Status...">
                </div>
                <div class = "text-center">
                    <label for="price" class="block text-sm font-medium text-gray-700 mr-56">Desc</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <textarea name="desc" class="border mt-2"  cols="30" rows="10" id="products-desc">${data.desc}</textarea><br/>

                </div>
            </div>
            <div class="text-center mb-2">
            <button type = "submit"  class = "border rounded-md mt-5 px-5 py-2 text-sky-500">Cập nhật</button>
            </div>
        </form>
        <a href = "/#/admin/products" class = "text-red-500">Back</a>
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit");
        const productImg = document.querySelector("#preview-img");
        const imgProduct = document.querySelector("#products-img");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dinhlcph18273/image/upload";
        const CLOUDINARY_PRESET = "pjmg52aq";
        let productImglink = "";

        imgProduct.addEventListener("change", (e) => {
            productImg.src = URL.createObjectURL(e.target.files[0]);
        });
        $("#form-edit").validate({
            rules: {
                title: "required",
                price: {
                    required: true,
                    min: 0,
                },
                status: "required",
                desc: "required",

            },
            messages: {
                title: "Vui lòng nhập tiêu đề bài viết",
                price: {
                    required: "Vui lòng nhập giá",
                    min: "Giá phải lớn hơn 0",
                },
                status: "Vui lòng điền trạng thái",
                desc: "Vui lòng điền mô tả cho bài viết",
            },
            submitHandler: () => {
                async function editProductForm() {
                    const file = imgProduct.files[0];
                    if (file) {
                        const formData = new FormData();
                        formData.append("file", file);
                        formData.append("upload_preset", CLOUDINARY_PRESET);

                        const { data } = await axios.post(CLOUDINARY_API, formData, {
                            headers: {
                                "Content-Type": "application/form-data",
                            },
                        });
                        productImglink = data;
                    }
                    updateproduct({
                        id,
                        title: document.querySelector("#products-title").value,
                        img: productImglink ? productImglink.url : productImg.src,
                        price: document.querySelector("#products-price").value,
                        status: document.querySelector("#products-status").value,
                        desc: document.querySelector("#products-desc").value,
                    }).then(() => {
                        toastr.success("Sửa thành công!");
                    }).then(() => {
                        reRender(AdminProducts, "#app");
                    });
                }
                editProductForm();
            },
        });
    },
};

export default editProducts;
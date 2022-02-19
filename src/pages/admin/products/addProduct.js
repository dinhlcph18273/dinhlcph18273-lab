import axios from "axios";
import toastr from "toastr";
import AdminProducts from ".";
import { addproduct } from "../../../aip/product";
import NavBarDas from "../../../components/Nav";
import { reRender } from "../../../utils";
import "toastr/build/toastr.min.css";
// eslint-disable-next-line import/order
import $ from "jquery";
// eslint-disable-next-line import/order
import validate from "jquery-validation";

const AddProducts = {
    print() {
        return /* html */ `
        <div class="min-h-full">
        ${NavBarDas.print()}
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex-1 min-w-0">
                <h2
                class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                >
                Thêm mới sản phẩm
                </h2>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4">
                
            </div>
            </div>
        </div>
        </header>
        <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <div class="px-4 py-6 sm:px-0">
            <div class="">
            <form class = "border border-black max-w-lg mt-2 mx-auto rounded" id = "form-add-products">
            <h1 class = "text-center text-3xl text-red-500">Add Products</h1>
            <div class = "">
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Title</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="text" name="title" id="title-products" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="Title...">
                </div>
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Image</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="file" name="img" id="img-products" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="">
                    <img id="preview-img" class="mx-auto" alt="" src="https://media.istockphoto.com/vectors/no-thumbnail-image-vector-graphic-vector-id1147544806?k=20&m=1147544806&s=170667a&w=0&h=5rN3TBN7bwbhW_0WyTZ1wU_oW5Xhan2CNd-jlVVnwD0="> 
                </div>
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Price</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="text" name="price" id="price-products" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="Price...">
                </div>
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Status</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="text" name="status" id="status-products" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="Status...">
                </div>
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Desc</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="text" name="desc" id="desc-products" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="Desc...">
                </div>
            </div>
            <div class="text-center mb-2">
            <button type = "submit"  class = "border rounded-md mt-5 px-5 py-2 text-sky-500">Tạo mới</button>
            </div>
        </form>
            </div>
            </div>
            <!-- /End replace -->
        </div>
        </main>
    </div>
        <a href = "/#/admin/products" class = "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Back</a>
        `;
    },
    afterRender() {
        const imgAddProduct = document.querySelector("#img-products");
        const previewAddProduct = document.querySelector("#preview-img");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dinhlcph18273/image/upload";
        const CLOUDINARY_PRESET = "pjmg52aq";
        let productsImgLink = "";
        imgAddProduct.addEventListener("change", (e) => {
            previewAddProduct.src = URL.createObjectURL(e.target.files[0]);
        });
        $("#form-add-products").validate({
            rules: {
                title: "required",
                img: "required",
                price: {
                    required: true,
                    min: 0,
                },
                status: "required",
                desc: "required",

            },
            messages: {
                title: "Vui lòng nhập tiêu đề bài viết",
                img: "Vui lòng chọn ảnh",
                price: {
                    required: "Vui lòng nhập giá",
                    min: "Giá phải lớn hơn 0",
                },
                status: "Vui lòng điền trạng thái",
                desc: "Vui lòng điền mô tả cho bài viết",
            },
            submitHandler: () => {
                async function addProductForm() {
                    const file = imgAddProduct.files[0];

                    if (file) {
                        const formData = new FormData();
                        formData.append("file", file);
                        formData.append("upload_preset", CLOUDINARY_PRESET);
                        const { data } = await axios.post(CLOUDINARY_API, formData, {
                            headers: {
                                "Content-Type": "application/form-data",
                            },
                        });
                        productsImgLink = data.url;
                    }

                    addproduct({
                        title: document.querySelector("#title-products").value,
                        img: productsImgLink || "",
                        price: document.querySelector("#price-products").value,
                        status: document.querySelector("#status-products").value,
                        desc: document.querySelector("#desc-products").value,
                    }).then(() => {
                        toastr.success("Thêm thành công!");
                    }).then(() => {
                        reRender(AdminProducts, "#app");
                    });
                }
                addProductForm();
            },
        });
    },
};

export default AddProducts;
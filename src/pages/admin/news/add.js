import axios from "axios";
import toastr from "toastr";
import AdminNews from ".";
import { add } from "../../../aip/posts";
import NavBarDas from "../../../components/Nav";
import { reRender } from "../../../utils";
import "toastr/build/toastr.min.css";

const addPost = {
    async print() {
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
                Thêm mới bài viết
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
            <form class = "border border-black max-w-lg mt-2 mx-auto rounded" id = "form-add-post">
            <h1 class = "text-center text-3xl text-red-500">Add Post</h1>
            <div class = "">
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Titile</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="text" name="price" id="title-post" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="Title...">
                </div>
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Image</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="file" name="price" id="img-post" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="">
                    </div>
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Desc</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="text" name="price" id="desc-post" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="Desc...">
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
        <a href = "/#/admin/news" class = "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Back</a>
        `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add-post");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dinhlcph18273/image/upload";
        const CLOUDINARY_PRESET = "pjmg52aq";

        formAdd.addEventListener("submit", async(e) => {
            e.preventDefault();
            const file = document.querySelector("#img-post").files[0];

            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            const { data } = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            add({
                title: document.querySelector("#title-post").value,
                img: data.url,
                desc: document.querySelector("#desc-post").value,
            }).then(() => {
                toastr.success("thêm thành công!");
            }).then(() => {
                reRender(AdminNews, "#app");
            });
        });
    },
};

export default addPost;
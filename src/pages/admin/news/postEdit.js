import axios from "axios";
import toastr from "toastr";
import AdminNews from ".";
import {get, update } from "../../../aip/posts";
import NavBarDas from "../../../components/Nav";
import { reRender } from "../../../utils";
import "toastr/build/toastr.min.css";
// import { data } from "../../data";

const PostEdit = {
    async print(id) {
        const { data } = await get(id);
        // const result = data.find((post) => post.id === id);
        return /* html */ `
        ${NavBarDas.print()}
        <form class = "border border-black max-w-lg mt-2 mx-auto rounded" id = "form-edit">
            <h1 class = "text-center text-3xl text-red-500">Add Post</h1>
            <div class = "">
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Titile</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="text"  value="${data.title}" name="price" id="title-post" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="Title...">
                </div>
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Image</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="file" name="price" id="img-post" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="">
                    <input type="image" value = "${data.img}" name="price" id="img-preview" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="">
                    </div>
                <div class = "text-center">
                    <label for="price" class="block text-sm font-medium text-gray-700 mr-56">Desc</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <textarea name="" class="border mt-2 rounded"  cols="30" rows="10" id="desc-post">${data.desc}</textarea><br/>
                    
                </div>
            </div>
            <div class="text-center mb-2">
            <button type = "submit"  class = "border rounded-md mt-5 px-5 py-2 text-sky-500">Cập nhật</button>
            </div>
        </form>
        <a href = "/#/admin/news" class = "text-red-500">Back</a>
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dinhlcph18273/image/upload";
        const CLOUDINARY_PRESET = "pjmg52aq";

        formEdit.addEventListener("submit", async(e) => {
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
            update({
                id,
                title: document.querySelector("#title-post").value,
                img: data.url,
                desc: document.querySelector("#desc-post").value,
            }).then(() => {
                toastr.success("Sửa thành công!");
            }).then(() => {
                reRender(AdminNews, "#app");
            });
        });
    },
};

export default PostEdit;
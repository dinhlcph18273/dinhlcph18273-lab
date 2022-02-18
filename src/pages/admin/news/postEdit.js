import axios from "axios";
import toastr from "toastr";
import AdminNews from ".";
import {get, update } from "../../../aip/posts";
import NavBarDas from "../../../components/Nav";
import { reRender } from "../../../utils";
import "toastr/build/toastr.min.css";
// eslint-disable-next-line import/order
import $ from "jquery";
// eslint-disable-next-line import/order
import validate from "jquery-validation";

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
                    <input type="text"  value="${data.title}" name="title" id="title-post" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="Title...">
                </div>
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Image</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="file" name="price" id="img-post" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="">                
                    <img id="preview-img" class="mx-auto" alt="" src="${data.img}"> 
                    </div>
                <div class = "text-center">
                    <label for="price" class="block text-sm font-medium text-gray-700 mr-56">Desc</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <textarea name="desc" class="border mt-2 rounded"  cols="30" rows="10" id="desc-post">${data.desc}</textarea><br/>
                    
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
        const postImg = document.querySelector("#preview-img");
        const imgPost = document.querySelector("#img-post");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dinhlcph18273/image/upload";
        const CLOUDINARY_PRESET = "pjmg52aq";
        let postImgLink = "";
        imgPost.addEventListener("change", (e) => {
            postImg.src = URL.createObjectURL(e.target.files[0]);
        });

        $("#form-edit").validate({
            rules: {
                title: "required",
                desc: "required",

            },
            messages: {
                title: "Vui lòng nhập tiêu đề bài viết",
                desc: "Vui lòng điền mô tả cho bài viết",
            },
            submitHandler: () => {
                async function editPostForm() {
                    const file = imgPost.files[0];
                    if (file) {
                        const formData = new FormData();
                        formData.append("file", file);
                        formData.append("upload_preset", CLOUDINARY_PRESET);

                        const { data } = await axios.post(CLOUDINARY_API, formData, {
                            headers: {
                                "Content-Type": "application/form-data",
                            },
                        });
                        postImgLink = data;
                    }
                    update({
                        id,
                        title: document.querySelector("#title-post").value,
                        img: postImgLink ? postImgLink.url : postImg.src,
                        desc: document.querySelector("#desc-post").value,
                    }).then(() => {
                        toastr.success("Sửa thành công!");
                    }).then(() => {
                        reRender(AdminNews, "#app");
                    });
                }
                editPostForm();
            },
        });
    },
};

export default PostEdit;
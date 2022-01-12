import { data } from "../../data";

const ProductEdit = {
    print(id) {
        const result = data.find((post) => post.id === id);
        return /* html */ `
        
        <form class = "text-center mt-2">
            <input type="text" class="border mt-2" value="${result.title}" placeholder="Tiêu đề bài viết" id="post-title"/> <br/>
            <img class = "max-w-xs mx-auto mt-2" src="${result.img}" alt="" />
            <input type="text" class="border mt-2" placeholder="Ảnh" id="post-img" /><br/>
            <textarea name="" class="border mt-2"  id="" cols="30" rows="10" id="post-desc">${result.desc}</textarea><br/>
            <button class="btn border px-5 py-2 mt-2 bg-sky-500 text-white">Cập nhật</button>
        </form>
        <a href = "/admin/news">Back</a>
        `;
    },
};

export default ProductEdit;
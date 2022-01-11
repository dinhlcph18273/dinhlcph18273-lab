import { data } from "../../data";

const ProductEdit = {
    print(id) {
        const result = data.find((post) => post.id === id);
        return /* html */ `
        
        <form class = "text-center">
            <input type="text" class="border" value="${result.title}" placeholder="Tiêu đề bài viết" id="post-title"/> <br/>
            <img class = "max-w-xs mx-auto" src="${result.img}" alt="" />
            <input type="text" class="border" placeholder="Ảnh" id="post-img" /><br/>
            <textarea name="" class="border"  id="" cols="30" rows="10" id="post-desc">${result.desc}</textarea><br/>
            <button class="btn border px-5 py-2 bg-sky-500 text-white">Cập nhật</button>
        </form>
        `;
    },
};

export default ProductEdit;
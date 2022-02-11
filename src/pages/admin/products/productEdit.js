import { getproduct, updateproduct } from "../../../aip/product";
import NavBarDas from "../../../components/Nav";

const editProducts = {
    async print(id) {
        const { data } = await getproduct(id);
        return /* html */ `
        ${NavBarDas.print()}
        <form class = "text-center mt-2" id = "form-edit">
            <input type="text" class="border mt-2" value="${data.title}" placeholder="Tiêu đề bài viết" id="products-title"/> <br/>
            <input type="text" class="border mt-2" value = "${data.img}" placeholder="Ảnh" id="products-img" /><br/>
            <input type="text" class="border mt-2" value="${data.price}" placeholder="Tiêu đề bài viết" id="products-price"/> <br/>
            <input type="text" class="border mt-2" value="${data.status}" placeholder="Tiêu đề bài viết" id="products-status"/> <br/>
            <textarea name="" class="border mt-2"  cols="30" rows="10" id="products-desc">${data.desc}</textarea><br/>
            <button class="btn border px-5 py-2 mt-2 bg-sky-500 text-white">Cập nhật</button>
        </form>
        <a href = "/#/admin/news" class = "text-red-500">Back</a>
        `;
    },
    afterRender(id) {
        const editForm = document.querySelector("#form-edit");
        editForm.addEventListener("submit", (e) => {
            e.preventDefault();
            updateproduct({
                id,
                title: document.querySelector("#products-title").value,
                img: document.querySelector("#products-img").value,
                price: document.querySelector("#products-price").value,
                status: document.querySelector("#products-status").value,
                desc: document.querySelector("#products-desc").value,
            });
            window.location.assign("/#/admin/products");
        });
    },
};

export default editProducts;
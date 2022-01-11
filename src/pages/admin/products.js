import AdminProductList from "../../components/admin/produvtList";

const AdminProductPage = {
    print() {
        return /* html */ `<div>
            <h1 class = "text-2xl uppercase py-5">Quản lý Products</h1>
            <a href = "/admin/news/add" class = "border text-red-500">Thêm mới</a>
            ${AdminProductList.print()}
        </div>`;
    },
};

export default AdminProductPage;
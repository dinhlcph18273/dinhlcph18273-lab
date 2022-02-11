import toastr from "toastr";
import { getAll, remove } from "../../../aip/posts";
import NavBarDas from "../../../components/Nav";
import { reRender } from "../../../utils";
import "toastr/build/toastr.min.css";

const AdminNews = {
        async print() {
            const { data } = await getAll();
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
                        Quản lý tin tức
                        </h2>
                    </div>
                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/#/admin/news/add" class="sm:ml-3">
                            <button href = "/admin/news/add"
                                type="button"
                                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Thêm mới
                            </button>
                        </a>
                    </div>
                    </div>
                </div>
                </header>
                <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <!-- Replace with your content -->
                    <div class="px-4 py-6 sm:px-0">
                    <div class="border-4 border-dashed border-gray-200 rounded-lg ">
                    <table class = "box-border">
                    <thead>
                        <tr class = "border">
                            <th class = "border">STT</th>
                            <th class = "border">Tên</th>
                            <th class = "border">Ảnh</th>
                            <th class = "border">Mô tả</th>
                            <th class = "border">Action</th>
                        </tr>
                    </thead>
                ${data.map((list, index) => `     
                <tbody>
                    <tr class = "border">
                        <td class = "border text-center">${index + 1}</td>
                        <td class = "border text-center">${list.title}</td>
                        <td class = "border text-center"><img class = "w-1/2 h-1/2 mx-auto" src="${list.img}" alt=""></td>
                        <td class = "border">${list.desc}</td>
                        <td class = "border text-center ">
                            <a class = "btn btn-reomve px-6 py-4 text-white rounded bg-red-500 hover:bg-red-800" href="/#/admin/news/${list.id}/edit">Edit</a> 
                            <button data-id=${list.id} class="btn1 btn-remove px-4 py-3 text-white rounded bg-indigo-500 hover:bg-indigo-800">Delete</button>
                        </td>
                    </tr>
                </tbody>
           
                `).join(" ")}
                </table>
                    </div>
                    </div>
                    <!-- /End replace -->
                </div>
                </main>
            </div>
        `;
    },
    afterRender() {
        const buttons = document.querySelectorAll(".btn1");
        buttons.forEach((btn1) => {
            const { id } = btn1.dataset;
            btn1.addEventListener("click", () => {
                const confirm = window.confirm("Chú có muốn xóa bài này không?");
                if (confirm) {
                    remove(id).then(() => {
                        toastr.success("Xóa ok rồi nhá!");
                    }).then(() => {
                        reRender(AdminNews, "#app");
                    });
                }
            });
        });
    },
};

export default AdminNews;
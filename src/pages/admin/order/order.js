import toastr from "toastr";
import { getAllOrder, removeOrder, updatett } from "../../../aip/order";
import NavBarDas from "../../../components/Nav";
import { reRender } from "../../../utils";
import "toastr/build/toastr.min.css";

const listOrderAdmin = {
        async print() {
            const { data } = await getAllOrder();
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
                Quản Sản lý phẩm
                </h2>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4">
                <a href="/#/admin/products/add" class="sm:ml-3">
                    <button 
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
        <table class = "box-border w-full">
            <thead>
                <tr class = "border">
                    <th class = "border">STT</th>
                    <th class = "border">Tên</th>
                    <th class = "border">Tổng giá</th>
                    <th class = "border">Trạng thái</th>
                    <th class = "border">chú ý</th>
                    <th class = "border">Action</th>
                </tr>
            </thead>
        ${data.map((list, index) => `     
        <tbody>
            <tr class = "border">
                <td class = "border text-center">${index + 1}</td>
                <td class = "border text-center">${list.information.name}</td>
                <td class = "border text-center">${list.total}</td>
                <td class = "border text-center">
                    <select class="statusEdit" data-order="${list.id}">
                            <option value="0" ${list.status === 0 ? "selected" : ""}>Chưa xác nhận</option>
                            <option value="1" ${list.status === 1 ? "selected" : ""}>Xác nhận</option>
                    </select>
                </td>
                <td class = "border">${list.information.note}</td>
                <td class = "border text-center ">
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
        const editStatus = document.querySelectorAll(".statusEdit");
        const buttons = document.querySelectorAll(".btn1");
        editStatus.forEach((item) => {
            const { order } = item.dataset;
            item.addEventListener("change", async () => {
                try {
                    const response = await updatett(+order, { status: +item.value });
                    reRender(listOrderAdmin, "#app");
                } catch (error) {
                    alert(error);
                }
            });
        });
        buttons.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Xóa không?");
                if (confirm) {
                    removeOrder(id).then(() => {
                        toastr.success("xóa thành công");
                    }).then(() => {
                        reRender(listOrderAdmin, "#app");
                    });
                }
            });
        });
    },
};
export default listOrderAdmin;
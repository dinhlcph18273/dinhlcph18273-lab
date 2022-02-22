import toastr from "toastr";
import { getAllOrder, removeOrder } from "../../aip/order";
import footer from "../../components/footer";
import header from "../../components/header";
import headerTop from "../../components/headerTop";
import { reRender } from "../../utils";
import "toastr/build/toastr.min.css";

const listOrder = {
        async print() {
            const { data } = await getAllOrder();
            return /* html */ `
             <header class = "shadow-md">
                <div class="max-w-7xl mx-auto">    
                    ${headerTop.print()}     
                    ${header.print()}
                </div>
            </header>
                <div class="py-20">
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
                <td class = "border text-center">${list.status === 0 ? "Chưa xác nhận" : "Xác nhận"}</td>
                <td class = "border text-center">${list.information.note}</td>
                <td class = "border text-center ">
                    <button data-id=${list.id} class="btn1 btn-remove px-4 py-3 text-white rounded bg-indigo-500 hover:bg-indigo-800">Delete</button>
                </td>
            </tr>
        </tbody>
   
        `).join(" ")}
        </table>
                </div>

            ${footer.print()}
        `;
    },
    afterRender() {
        headerTop.afterRender();
        const buttons = document.querySelectorAll(".btn1");
        buttons.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Xóa không?");
                if (confirm) {
                    removeOrder(id).then(() => {
                        toastr.success("xóa thành công");
                    }).then(() => {
                        reRender(listOrder, "#app");
                    });
                }
            });
        });
    },
};
export default listOrder;
   
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
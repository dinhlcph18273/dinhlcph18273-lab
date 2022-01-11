import { data } from "../../data";

const AdminProductList = {
        print() {
            return /* html */ `
            <table class = "box-border">
            <thead>
                <tr class = "border">
                    <th class = "border">STT</th>
                    <th class = "border">Tên</th>
                    <th class = "border">Ảnh</th>
                    <th class = "border">Mô tả</th>
                    <th class = "border">Title</th>
                </tr>
            </thead>
        ${data.map((list) => `     
        <tbody>
            <tr class = "border">
                <td class = "border text-center">${list.id}</td>
                <td class = "border text-center">${list.title}</td>
                <td class = "border text-center"><img class = "w-1/2 h-1/2 mx-auto" src="${list.img}" alt=""></td>
                <td class = "border">${list.desc}</td>
                <td class = "border text-center">
                    <a class = "text-blue-500 " href="/admin/news/${list.id}/edit">Edit</a>
                    <button class="text-red-500">Delete</button>
                </td>
            </tr>
        </tbody>
   
        `).join(" ")}
        </table>
        `;
    },
};

export default AdminProductList;
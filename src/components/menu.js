import { menus } from "../data";

const newMenus = {
        print() {
            return `
            ${menus.map((menu) => `
                <li class = "inline-block px-3 "><a class = "text-white hover:underline" href="">${menu}</a></li>
            `).join("")}
            <form action="" class = "pr-2">
                    <input type="text">
                    <input type="submit" value="Tìm kiếm" class="border border-solid border-white bg-sky-900 text-white px-3">
            </form>
        `;
    },
};

export default newMenus;
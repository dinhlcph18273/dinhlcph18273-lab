import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const headerTop = {
        print() {
            return /* html */ `
            <div class="p-2 flex justify-between items-center">
            <ul class="flex">
                <li class="inline-block border-r px-3">
                    <a href=""><i class="fa-solid fa-envelope opacity-50 mr-1.5"></i>dinhlcph18273@fpt.edu.vn</a>
                </li>
                <li class="inline-block px-3">
                    <a href=""><i class="fa-solid fa-phone opacity-50 mr-1.5"></i>0372011308</a>
                </li>
            </ul>
             ${localStorage.getItem("user") ? `<ul class = "flex">
                    <li><a id = "account-email" class=" block px-4  hover:rounded hover:text-white hover:bg-sky-400" ></a></li>
                    <li><a id = "logout" class=" block px-4  hover:rounded hover:text-white hover:bg-sky-400" >Logout</a></li>
            </ul>` : `<ul class = "flex"><li><a class="block px-4  hover:rounded hover:text-white hover:bg-sky-400" href="/#/signup">Signup</a></li>
                <li><a class="block px-4  hover:rounded hover:text-white hover:bg-sky-400" href="/#/signin">Signin</a></li>
                </ul>`}
                
        </div>
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const logout = document.querySelector("#logout");

        document.querySelector("#account-email").innerHTML = user.email;

        logout.addEventListener("click", () => {
            toastr.success("Logout thành công!");
            localStorage.removeItem("user");
            reRender(headerTop, "#header");
        });
    },
};

export default headerTop;
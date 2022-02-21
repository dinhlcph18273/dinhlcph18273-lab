import { getproductAll } from "../aip/product";
// eslint-disable-next-line import/no-cycle
import ProductPage from "../pages/product";
import { reRender, search } from "../utils";

const header = {
    print() {
        return /* html */ `
        <div class=" p-2 flex items-center ">
            <a href="/#"><img src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/mona.png" width="300px" height="100px" alt=""></a>

            <ul class = "flex">
                <li><a class="block p-4 hover:text-white hover:rounded hover:bg-lime-500 text-lg opacity-60" href="/#">Home page</a></li>
                <li><a class="block p-4 hover:text-white hover:rounded hover:bg-lime-500 text-lg opacity-60" href="/#/about">About page</a></li>
                <li><a class="block p-4 hover:text-white hover:rounded hover:bg-lime-500 text-lg opacity-60" href="/#/products">Product page</a></li>
                <li><a class="block p-4 hover:text-white hover:rounded hover:bg-lime-500 text-lg opacity-60" href="/#/admin/dashboard">Dashboard page</a></li>
            </ul>   
             <form action="" id="search" class = "pr-2 ml-20 relative">
                    <input type="text" id="name" class = "border border-black rounded-xl px-3" placeholder = "Search...">
                    <button class = "absolute right-5"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
            <button  class = "ml-20 text-lg relative">
               Cart / <a href="/#/carts" ><i class="fa-solid fa-cart-shopping text-lg opacity-80" ></i><span class = "absolute top-0 text-red-500" id = "quantityCart"></span></a>
            </button>
            
         </div>
        `;
    },
    async afterRender() {
        const cart = JSON.parse(localStorage.getItem("cart"));
        let total = 0;
        if (cart) {
            cart.forEach((item) => {
                total += item.quantity;
            });
        }
        document.querySelector("#quantityCart").innerHTML = total;
        const { data } = await getproductAll();
        const formSearch = document.querySelector("#search");
        formSearch.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.querySelector("#name").value;
            // search(data, name);
            reRender(ProductPage, "#app", search(data, name));
        });
    },
};
export default header;
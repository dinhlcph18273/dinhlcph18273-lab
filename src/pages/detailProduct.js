import { getproduct } from "../aip/product";
import footer from "../components/footer";
import header from "../components/header";
import { addToCart } from "../utils/cart";

const detailProduct = {
    async print(id) {
        const { data } = await getproduct(id);
        return /* html */ `
        ${header.print()}
        <div class = "border border-black max-w-sm mt-2 mx-auto text-center p-5 rounded">                  
            <img class = "max-w-xs mx-auto" src="${data.img}" alt="" />
            <p class = "text-center text-red-900 text-xl">${data.price}đ</p>
            <p class = "text-center text-xl">${data.status}</p>
            <h1 class = "text-2xl mb-2 text-orange-500">${data.title}</h1>
            <p>${data.desc}</p>
            <button id = "btnAddToCart" class = "px-6 py-1 bg-lime-500 text-white hover:bg-lime-600 my-5">Add Cart</button>
        </div>
        ${footer.print()}
        `;
    },
    afterRender(id) {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        btnAddToCart.addEventListener("click", async() => {
            const { data } = await getproduct(id);
            addToCart({...data, quantity: 1 }, () => {
                console.log("ok");
            });
        });
    },
};

export default detailProduct;
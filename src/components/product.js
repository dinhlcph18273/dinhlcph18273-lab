import { getproductAll } from "../aip/product";

const products = {
        async print() {
            const { data } = await getproductAll();
            return /* html */ `
        ${data.map((product) => `   
            <div class = "border text-center hover:shadow-2xl transition ease-in-out duration-500"> 
                <div class = "overflow-hidden">
                <a href="/#/products/${product.id}"><img class = "mx-auto hover:scale-125 transition ease-in-out duration-500 " src="${product.img}" alt="" /></a>
                </div>
                <div class = "">
                <p class = "text-center my-2 px-2 overflow-hidden text-ellipsis h-[27px]"><a href="/#/products/${product.id}" class = "text-[1.125rem] hover:text-lime-500">${product.title}</a></p >
                <p class = "text-center text-lime-600 text-lg mb-2">${product.price} đ</p>
                </div>
                <button id = "addCart" class = "px-6 py-1 bg-lime-500 text-white hover:bg-lime-600 my-5">Add Cart</button>
            </div>
                `).join("")}
    `;
    },
};

export default products;
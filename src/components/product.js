import { getproductAll } from "../aip/product";

const products = {
        async print() {
            const { data } = await getproductAll();
            return /* html */ `
        <div class = "grid grid-cols-3 gap-8 mt-10">
        ${data.map((product) => `   
            <div class = "border p-5"> 
                <a href="/#/products/${product.id}"><img class = "mx-auto" src="${product.img}" alt="" /></a>
                <h3 class = "text-center"><a href="/#/products/${product.id}" class = "text-xl text-orange-400">${product.title}</a></h3>
                <p class = "text-center text-red-900 text-xl">${product.price}đ</p>
                <p class = "text-center text-xl">${product.status}</p>
                <p class = "text-center">${product.desc}</p>
                <a >Add Cart</a>
            </div>
                `).join("")}
      </div>
    `;
    },
};

export default products;
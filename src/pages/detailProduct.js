import axios from "axios";
import footer from "../components/footer";
import header from "../components/header";

const detailProduct = {
    async print(id) {
        const { data } = await axios.get(`http://localhost:3001/products/${id}`);
        return /* html */ `
        ${header.print()}
        <div class = "border border-black max-w-sm mt-2 mx-auto text-center p-5 rounded">                  
            <img class = "max-w-xs mx-auto" src="${data.img}" alt="" />
            <p class = "text-center text-red-900 text-xl">${data.price}đ</p>
            <p class = "text-center text-xl">${data.status}</p>
            <h1 class = "text-2xl mb-2 text-orange-500">${data.title}</h1>
            <p>${data.desc}</p>
        </div>
        ${footer.print()}
        `;
    },
};

export default detailProduct;
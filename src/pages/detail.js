import {get } from "../aip/posts";
import footer from "../components/footer";
import header from "../components/header";
import headerTop from "../components/headerTop";

const DetailPage = {
    async print(id) {
        const { data } = await get(id);
        // const result = data.find((post) => post.id === id);
        return /* html */ `
        <header class = "shadow-md">
         <div class="max-w-7xl mx-auto">    
            ${headerTop.print()}     
            ${header.print()}
         </div>
        </header>
            <div class = " max-w-sm mt-2 mx-auto text-center p-5 rounded my-10">          
                <h1 class = "text-2xl mb-2 text-orange-500">${data.title}</h1>          
                <img class = "max-w-xs mx-auto my-10" src="${data.img}" alt="" />
                <p>${data.desc}</p>
            </div>
            ${footer.print()}
        `;
    },
    afterRender() {
        headerTop.afterRender();
    },
};

export default DetailPage;
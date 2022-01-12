import { data } from "../data";

const DetailPage = {
    print(id) {
        const result = data.find((post) => post.id === id);
        return /* html */ `
            <div class = "border border-black max-w-sm mt-2 mx-auto text-center p-5 rounded">                  
                <img class = "max-w-xs" src="${result.img}" alt="" />
                <h1 class = "text-2xl mb-2 text-orange-500">${result.title}</h1>
                <p>${result.desc}</p>
            </div>
        `;
    },
};

export default DetailPage;
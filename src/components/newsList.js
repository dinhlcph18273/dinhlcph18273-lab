import { data } from "../data";

const NewsList = {
        print() {
            return /* html */ `          
            <h2 class="text-2xl uppercase">Tin tức học tập</h2>
            <div class = "grid grid-cols-3 gap-8 mt-10">
                ${data.map((post) => `   
                    <div class = "border p-5"> 
                    <img class = "mx-auto" src="${post.img}" alt="" />
                    <h3 class = "text-center"><a href="" class = "text-xl text-orange-400">${post.title}</a></h3>
                    <p class = "text-center">${post.desc}</p>
                    </div>
                        `).join("")}
            </div>
            
        `;
    },
};

export default NewsList;
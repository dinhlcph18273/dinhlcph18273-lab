import { getAll } from "../aip/posts";

const NewsList = {
        async print() {
            const { data } = await getAll();
            return /* htnl */ ` 
        <h2 class="text-2xl uppercase text-center">Kết nối nhà vườn và Hành trình Organic</h2>
        <div class = "grid grid-cols-4 gap-8 mt-10">
          ${data.map((post) => `   
            <div>
              <div class = "border w-[290px] h-[160px] overflow-hidden"> 
                <a href="/#/news/${post.id}"><img class = "" src="${post.img}" alt="" /></a>
              </div>
              
              <h3 class = "text-center hover:text-lime-400 py-4"><a href="/#/news/${post.id}" class = "text-xl ">${post.title}</a></h3>
              <a class = "text-center hover:text-lime-400" href = "/#/news/${post.id}">${post.desc}</a>
            </div>
                  `).join("")}
        </div>`;
    },
};

export default NewsList;
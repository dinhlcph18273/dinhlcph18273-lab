import { getAll } from "../aip/posts";

const NewsList = {
        async print() {
            const { data } = await getAll();
            return /* htnl */ ` 
        <h2 class="text-2xl uppercase">Bản tin sinh viên</h2>
        <div class = "grid grid-cols-3 gap-8 mt-10">
          ${data.map((post) => `   
              <div class = "border p-5"> 
              <a href="/#/news/${post.id}"><img class = "mx-auto" src="${post.img}" alt="" /></a>
              <h3 class = "text-center"><a href="/#/news/${post.id}" class = "text-xl text-orange-400">${post.title}</a></h3>
              <p class = "text-center">${post.desc}</p>
              </div>
                  `).join("")}
        </div>`;
    },
};

export default NewsList;
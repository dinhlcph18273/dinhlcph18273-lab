import Banner from "../components/banner";
import footer from "../components/footer";
import header from "../components/header";
import logo from "../components/logo";
import newMenus from "../components/menu";
import NewsList from "../components/newsList";

const Homepage = {
    async print() {
        return /* html */ `
        <div class="max-w-7xl mx-auto">
                <header>
                    <div id = "header">
                    ${header.print()}
                    </div>
                    <div class="bg-sky-900 text-center py-4">
                        ${logo.print()}
                    </div>
                    <ul class = "bg-orange-400 flex justify-between py-2">
                        ${newMenus.print()}
                    </ul>   
                    <div class="banner">
                        ${Banner.print()}
                    </div>
                </header>
               <main>
                    <div class="news mt-5">
                        ${await NewsList.print()}
                    </div>
                    <div class="news mt-5">
                        ${await NewsList.print()}
                    </div>
               </main>
                ${footer.print()}
        </div>
        `;
    },
    afterRender() {
        header.afterRender();
    },
};

export default Homepage;
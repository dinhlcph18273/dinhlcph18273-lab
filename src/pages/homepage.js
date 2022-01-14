import Banner from "../components/banner";
import footer from "../components/footer";
import header from "../components/header";
import logo from "../components/logo";
import newMenus from "../components/menu";
import NewsList1 from "../components/newList1";
import NewsList from "../components/newsList";

const Homepage = {
    print() {
        return /* html */ `
        <div class="max-w-5xl mx-auto">
                ${header.print()}
                <div class="bg-sky-900 text-center py-4">
                    ${logo.print()}
                </div>
                <ul class = "bg-orange-400 flex justify-between py-2">
                    ${newMenus.print()}
                </ul>   
                <div class="banner">
                    ${Banner.print()}
                </div>
                <div class="news mt-5">
                    ${NewsList.print()}
                </div>
                <div class="news mt-5">
                    ${NewsList1.print()}
                </div>
                ${footer.print()}
        </div>
        `;
    },
};

export default Homepage;
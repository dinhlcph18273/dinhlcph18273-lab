import Banner from "../components/banner";
import newMenus from "../components/menu";
import NewsList1 from "../components/newList1";
import NewsList from "../components/newsList";

const Homepage = {
    print() {
        return /* html */ `
        
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
            
        `;
    },
};

export default Homepage;
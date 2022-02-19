import Banner from "../components/banner";
import category from "../components/cate";
import commit from "../components/commitment";
import footer from "../components/footer";
import header from "../components/header";
import headerTop from "../components/headerTop";
import NewsList from "../components/newsList";
import products from "../components/product";

const Homepage = {
    async print() {
        return /* html */ `
        <div class="max-w-7xl mx-auto ">
                <header class = "">
                    <div id = "header">
                    ${headerTop.print()}
                    </div>
                    <div class="mt-5">
                        ${header.print()}   
                    </div>  
                </header>         
        </div>
        <div class="banner relative">
            ${Banner.print()}
        </div>5
        <div class="max-w-7xl mx-auto">
                <h1 class = "text-3xl capitalize text-center my-10 normal">Mua sản phẩm được lựa chọn từ vườn</h1>
                ${category.print()}
                <h1 class = "text-3xl capitalize text-center my-10 normal">Sản phẩm nổi bật</h1>
                    <div class = "grid grid-cols-6 gap-8">
                        ${await products.print()}
                    </div>
                    <div class = "text-center my-10"> 
                    <a href = "/#/products" class = "py-2 px-5 text-center bg-lime-500 text-white rounded-md hover:bg-lime-600">Xem thêm</a>
                    </div>
            <main>
                <div class="news mt-10">
                        ${await NewsList.print()}
                </div>
            </main>
                <h1 class = "text-3xl capitalize text-center my-10 normal">Cam kết của chúng tôi</h1>
                ${commit.print()}
        </div>
                ${footer.print()}
        `;
    },
    async afterRender() {
        headerTop.afterRender();
        products.afterRender();
        await header.afterRender();
    },
};

export default Homepage;
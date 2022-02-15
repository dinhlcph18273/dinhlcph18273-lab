import footer from "../components/footer";
import header from "../components/header";
import headerTop from "../components/headerTop";

const AboutPage = {
    print() {
        return /* html */ `
        <div class="max-w-7xl mx-auto">
            ${headerTop.print()}
        <div class="">
            ${header.print()}
        </div>
        </div>
          <h1>About page</h1>
            ${footer.print()}
        `;
    },
};

export default AboutPage;
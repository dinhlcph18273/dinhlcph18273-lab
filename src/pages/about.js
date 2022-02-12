import footer from "../components/footer";
import header from "../components/header";
import logo from "../components/logo";

const AboutPage = {
    print() {
        return /* html */ `
        <div class="max-w-7xl mx-auto">
            ${header.print()}
        <div class="bg-sky-900 text-center py-4">
            ${logo.print()}
        </div>
        <h1>About page</h1>
            ${footer.print()}
        </div>
        `;
    },
};

export default AboutPage;
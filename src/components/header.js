const header = {
    print() {
        return /* html */ `
        <div class="bg-orange-500 p-2">
                <a class="px-4 text-white hover:uppercase hover:bg-sky-400" href="/">Home page</a>
                <a class="px-4 text-white hover:uppercase hover:bg-sky-400" href="/about">About page</a>
                <a class="px-4 text-white hover:uppercase hover:bg-sky-400" href="/product">Product page</a>
                <a class="px-4 text-white hover:uppercase hover:bg-sky-400" href="/admin/dashboard">Dashboard</a>
                <a class="px-4 text-white hover:uppercase hover:bg-sky-400" href="/signup">Signup</a>
                <a class="px-4 text-white hover:uppercase hover:bg-sky-400" href="/signin">Signin</a>
         </div>
        `;
    },
};
export default header;
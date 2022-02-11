const header = {
    print() {
        return /* html */ `
        <div class="bg-orange-500 p-2 flex justify-between items-center">
            <ul class = "flex">
                <li><a class="block px-4 text-white hover:uppercase hover:bg-sky-400" href="/#">Home page</a></li>
                <li><a class="block px-4 text-white hover:uppercase hover:bg-sky-400" href="/#/about">About page</a></li>
                <li><a class="block px-4 text-white hover:uppercase hover:bg-sky-400" href="/#/products">Product page</a></li>
                <li><a class="block px-4 text-white hover:uppercase hover:bg-sky-400" href="/#/admin/dashboard">Dashboard page</a></li>
                <li><a class="block px-4 text-white hover:uppercase hover:bg-sky-400" href="/#/signup">Signup</a></li>
                <li><a class="block px-4 text-white hover:uppercase hover:bg-sky-400" href="/#/signin">Signin</a></li>
            </ul>
             <ul class = "flex">
                    <li><a id = "account-email" class=" block px-4 text-white hover:uppercase hover:bg-sky-400" ></a></li>
            </ul>
         </div>
           
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        document.querySelector("#account-email").innerHTML = user.email;
    },
};
export default header;
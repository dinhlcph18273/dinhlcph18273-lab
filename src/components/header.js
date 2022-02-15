const header = {
    print() {
        return /* html */ `
        <div class=" p-2 flex items-center ">
            <a href=""><img src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/mona.png" width="300px" height="100px" alt=""></a>

            <ul class = "flex">
                <li><a class="block p-4 hover:text-white hover:rounded hover:bg-lime-500 text-lg opacity-60" href="/#">Home page</a></li>
                <li><a class="block p-4 hover:text-white hover:rounded hover:bg-lime-500 text-lg opacity-60" href="/#/about">About page</a></li>
                <li><a class="block p-4 hover:text-white hover:rounded hover:bg-lime-500 text-lg opacity-60" href="/#/products">Product page</a></li>
                <li><a class="block p-4 hover:text-white hover:rounded hover:bg-lime-500 text-lg opacity-60" href="/#/admin/dashboard">Dashboard page</a></li>
            </ul>   
             <form action="" class = "pr-2 ml-20 relative">
                    <input type="text" class = "border border-black rounded-xl px-3" placeholder = "Search...">
                    <button type = "submit" class = "absolute right-5"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
            <button class = "ml-20 text-lg">
               Cart / <button id = "quantityCart"><i class="fa-solid fa-cart-shopping text-lg opacity-80"></i></button>
                
            </button>
            
         </div>
        `;
    },
};
export default header;
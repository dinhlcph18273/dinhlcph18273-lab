const addPost = {
    print() {
        return /* html */ `
       
        <form class = "border border-black max-w-lg mt-2 mx-auto">
            <h1 class = "text-center">Add Post</h1>
            <div class = "">
                <div class = "">
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">ID</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="id...">
                </div>
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Titile</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="Title...">
                </div>
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Image</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="file" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="">
                </div>
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 ml-32">Desc</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border mx-auto" placeholder="Desc...">
                </div>
            </div>
            <div class="text-center mb-2">
            <button type = "submit" class = "border rounded-md mt-5 px-5 py-2 text-sky-500">Tạo mới</button>
            </div>
        </form>
        `;
    },
};

export default addPost;
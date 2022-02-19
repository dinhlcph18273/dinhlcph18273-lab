import toastr from "toastr";
import { signin } from "../aip/user";
import footer from "../components/footer";
import header from "../components/header";
import "toastr/build/toastr.min.css";
// eslint-disable-next-line import/order
import $ from "jquery";
// eslint-disable-next-line import/order
import validate from "jquery-validation";
import headerTop from "../components/headerTop";

const Signin = {
    print() {
        return /* html */ `
        <div  class = "bg-[url('https://res.cloudinary.com/dinhlcph18273/image/upload/v1645244628/nam_van_chi_2_n5a79k.jpg')]">
        <div class="max-w-7xl mx-auto">
        <div class="text-white">
          ${headerTop.print()}
          ${header.print()}
        </div>
          <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8 border p-10 rounded-lg bg-white">
              <div>
                <img class="mx-auto h-12 w-auto" src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/mona.png" alt="Workflow">
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Sign in to your account
                </h2>
              </div>
              <form class="mt-8 space-y-6" action="#" method="POST" id = "formSingin">
                <input type="hidden" name="remember" value="true">
                <div class="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label for="email-address" class="sr-only">Email address</label>
                    <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
                  </div>
                  <div>
                    <label for="password" class="sr-only">Password</label>
                    <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
                  </div>
                </div>
          
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                    <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>
          
                  <div class="text-sm">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
          
                <div>
                  <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                      <!-- Heroicon name: solid/lock-closed -->
                      <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    Sign in
                  </button>
                </div>
              </form>
            </div>
        </div>
      </div>
      </div>
        ${footer.print()}
        `;
    },
    afterRender() {
        $("#formSingin").validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                },
                password: "required",

            },
            messages: {
                email: {
                    required: "Vui lòng nhập tiêu đề bài viết",
                    email: "Email chưa đúng định dạng",
                },
                password: "Vui lòng nhập PassWord",
            },
            submitHandler: () => {
                async function loginForm() {
                    try {
                        const { data } = await signin({
                            email: document.querySelector("#email").value,
                            password: document.querySelector("#password").value,
                        });
                        localStorage.setItem("user", JSON.stringify(data.user));
                        toastr.success("Đăng nhập thành công, chờ chút để chuyển trang!");
                        setTimeout(() => {
                            if (data.user.id === 1) {
                                document.location.href = "#/admin/dashboard";
                            } else {
                                document.location.href = "/#/";
                            }
                        }, 3000);
                    } catch (error) {
                        toastr.error(error.response.data);
                    }
                }
                loginForm();
            },
        });
    },
};

export default Signin;
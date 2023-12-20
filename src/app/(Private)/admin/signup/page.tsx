import SignupForm from "@/components/pages/admin/signupForm";
import { setMetaData } from "@/utility/updateTitle/updateTitle";
import Image from "next/image";
import Link from "next/link";

export const metadata = setMetaData("Signup");

const SignUpPage = async () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full sm:w-11/12 md:w-3/4 lg:w-4/12">
        <div className="bg-white shadow-xl shadow-[#124a6663] border rounded-xl p-10 relative">
          <div className="text-center">
            <Image
              width={80}
              height={80}
              className="w-20 h-12 m-auto"
              src="/img/webtricker-logo-black.jpg"
              alt=""
            />
            <h1 className="text-xl text-gray-950 font-semibold mt-4">
              Welcome to WebTricker
            </h1>
          </div>

          <SignupForm />

          <div className="my-6 flex justify-between items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-xs text-gray-700">Remember Me</span>
            </label>
            <a href="#" className="text-xs text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* dont have accout */}

          <div className="w-full absolute bottom-4 left-0 px-8 flex items-center justify-between">
            <Link href="/" className="text-xs text-gray-700 hover:underline">
              Go To Home
            </Link>
            <Link
              href="/admin/login"
              className="text-xs text-gray-700 hover:underline"
            >
              Already have an account?
              <span className="text-sm font-semibold text-pink-600">
                {" "}
                Longin{" "}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

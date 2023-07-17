import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="flex  text-primary ">
      <div className="hidden lg:block relative w-[600px] h-[600px] ">
        <h2 className="text-2xl font-bold text-center"></h2>
        <Image src="/img/about-banner-2.png" fill={true} alt="product" />
      </div>
      <div className="flex-1 sm:w-[600px] p-10 shadow-xl lg:shadow-none">
        <div className="text-center text-4xl font-bold underline decoration-wavy">
          Sign In
        </div>
        <div className="mt-16">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">User Name</label>
            <input placeholder="enter user name" className="border p-2" />
            <span className="text-red-500 text-sm mt-2">
              *enter a valid password
            </span>
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-semibold mb-1 flex justify-between">
              <span>Password</span>
              <Link href="/forgotpassword">Forgot Password?</Link>
            </label>
            <input placeholder="enter user name" className="border p-2" />
          </div>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <div>
            <p>
              Don&apos;t have an account?{" "}
              <Link href="/signup">
                <span className="font-bold">sign up</span>
              </Link>
            </p>
          </div>
          <button className="bg-primary border-none text-white px-8 py-2 rounded">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

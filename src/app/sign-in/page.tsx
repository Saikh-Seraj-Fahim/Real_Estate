import Image from "next/image";

export default function SignIn() {
    return (
        <div className="w-full h-screen flex">
            <div className="w-1/2 h-screen flex items-center justify-center">
                <form action="" className="flex flex-col">
                    <h1 className="text-[#000000] font-poppins font-medium text-3xl">
                        Welcome back!</h1>

                    <p className={`text-[#000000] pt-8 font-poppins`}>Email address</p>
                    <input type="text" placeholder="Enter your email" className={`text-[black] 
                        font-poppins outline-none w-[400px] h-[35px] pl-6 mt-3 ring-2 ring-[#D9D9D9] 
                        rounded-md`} />

                    <p className={`text-[#000000] pt-4 font-poppins`}>Password</p>
                    <input type="password" placeholder="Enter your password" className={`text-[black] 
                        font-poppins outline-none w-[400px] h-[35px] pl-6 mt-3 ring-2 ring-[#D9D9D9] 
                        rounded-md`} />


                    <a href="" className="text-blue-700 text-sm font-poppins mt-4 pr-0">forgot password?</a>


                    <button className="text-[#FFFFFF] font-poppins bg-[#000000] w-[400px] h-[40px] 
                            rounded-md mt-4">Log In</button>

                    <div className="flex gap-2 pt-8">
                        <div className="w-[180px] h-[1px] bg-gray-300" />
                        <p className="text-[#000000] font-poppins -translate-y-1/2">Or</p>
                        <div className="w-[180px] h-[1px] bg-gray-300" />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 pt-6">
                        <button className={`text-[#000000] ring-2 ring-[#D9D9D9] w-[180px] h-[40px] 
                                            rounded-md font-poppins`}>
                            <div className="flex gap-3">
                                <Image src="/Google_Icon.svg" alt="google_icon" height={10} width={15}
                                    className="ml-4" />
                                <p className={`text-[#000000] text-xs font-poppins`}>Sign in with
                                    Google</p>
                            </div>
                        </button>

                        <button className={`text-[#000000] ring-2 ring-[#D9D9D9] w-[180px] h-[40px] 
                                            rounded-md font-poppins`}>
                            <div className="flex gap-3">
                                <Image src="/Apple_Icon.svg" alt="apple_icon" height={10} width={15}
                                    className="ml-4" />
                                <p className={`text-[#000000] text-xs font-poppins`}>Sign in with
                                    Apple</p>
                            </div>
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 pt-6">
                        <p className="text-[#000000] font-poppins">Don’t have an account?</p>
                        <a href="" className="text-blue-700 font-poppins">Sign Up</a>
                    </div>
                </form>
            </div>

            <div className="w-1/2 h-screen bg-[url(/sign-up-side-photo.jpg)] bg-cover 
                rounded-tl-[30px] rounded-bl-[30px] hidden lg:block"/>
        </div>
    );
}
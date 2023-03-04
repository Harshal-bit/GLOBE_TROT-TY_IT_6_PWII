import React from "react";
import Phone from "./Phone"
import Image from "next/image";
import {
    HomeIcon,
    SearchIcon,
    ViewGridIcon,
    UserCircleIcon,
    UserIcon,
} from "@heroicons/react/solid";
// import { XMarkIcon } from 'path/to/XMarkIcon';
// import { XMarkIcon } from '../../../node_modules/icons';



function Login() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-300">
            <div className="bg-white rounded-2xl shadow-2xl w-1/3 max-w-2xl">
                <div className="p-2">
                    <div className="flex flex-1 justify-end">
                        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                            <span className="sr-only">Dismiss</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="p-10">
                    <div className="p-5">
                        <h2 className="text-3xl font-bold mb-2">Login / SignUp</h2>
                    </div>
                    {/* Input for Phone number */}
                    <div className="flex my-2 px-5 ">
                        <Phone />
                    </div>
                    {/* Verify button */}
                    <div className="px-5">
                        <button
                            type="submit"
                            className="group relative flex w-auto justify-center rounded-2xl border border-transparent bg-indigo-600 py-2 px-2  text-xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4"
                        >
                            Verify Numbers
                        </button>
                    </div>
                    {/* <p className="d-text16 loginCard__passwordHeading">Prefer to Sign in with password instead?<button type="button" className="loginCard__changeLogin" data-logintype="password">Click here</button></p> */}
                    <div className="oyo-row oyo-row--no-spacing loginCard__extraLinksBlock">
                        <div className="loginCard__extraLinksHeading--left">

                        </div>
                        <div className="loginCard__extraLinksHeading">Or sign in as
                        </div>
                        <div className="loginCard__extraLinksHeading--right">
                        </div>
                    </div>


                </div>
            </div>
        </main>

    );
}

export default Login;

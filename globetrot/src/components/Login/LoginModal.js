import React from "react";
import Phone from "./Phone";

const Modal = ({ inVisible, onClose }) => {
  if (!inVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center shadow-2xl rounded-2xl">
      <div className="flex flex-col justify-center ">
        <div className="w-full max-w-xl  p-4 rounded-2xl  bg-white">
          <div className="flex flex-1 justify-end">
            <button
              type="button"
              onClick={() => onClose()}
              className="-m-3 p-2 focus-visible:outline-offset-[-4px]"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div>
            <h2 className="p-3 text-start text-3xl font-bold tracking-tight text-gray-900">
              Login / Sign Up
            </h2>
          </div>
          <div>
            <h2 className="px-3 py-2 text-base font-bold">
              Please enter your phone number to continue
            </h2>
          </div>
          <div className="flex px-3 py-1 ">
            <Phone />
          </div>
          <form>
            <div className=" px-3 justify-start !imp">
              <button
                type="submit"
                className="group relative flex w-auto justify-center rounded-2xl border border-transparent bg-indigo-600 p-3  text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4"
              >
                Verify Numbers
              </button>
            </div>
          </form>
          <p className="p-3 font-bold">
            Prefer to Sign in with password instead?
            <button
              type="button"
              className="text-blue-500"
              data-logintype="password"
            >
              Click here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from 'react';
import Phone from './Phone'

const Modal = ({ inVisible, onClose }) => {
  if (!inVisible) return null;


  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center shadow-2xl rounded-2xl'>
      <div className='flex flex-col items-center justify-center bg-white rounded-2xl'>
        <div className="w-full max-w-xl space-y-8  p-5" >
          <div className="p-2">
            <div className="flex flex-1 justify-end">
              <button type="button" onClick={() => onClose()} className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                <span className="sr-only">Dismiss</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>


          <div>
            <h2 className="mt-4 text-start text-4xl font-bold tracking-tight text-gray-900">
              Login / Sign Up
            </h2>
          </div>
          <div>
            <h2 className="text-lg font-bold">
              Please enter your phone number to continue
            </h2>
          </div>
          <div className="flex my-2  ">
            <Phone />
          </div>
          <form>

            <div className="justify-start !imp">

              <button
                type="submit"
                className="group relative flex w-auto justify-center rounded-2xl border border-transparent bg-indigo-600 py-2 px-2  text-xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4"
              >
                Verify Numbers
              </button>
            </div>
          </form>
          <p className="font-bold">
            Prefer to Sign in with password instead?
            <button type="button" className="text-blue-500" data-logintype="password">Click here</button>
          </p>
          

        </div>
      </div>
    </div>
  )
}

export default Modal;
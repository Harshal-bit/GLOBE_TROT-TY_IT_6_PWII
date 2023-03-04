import React from 'react';

const Modal = ({inVisible, onClose}) => {
  if(!inVisible) return null;


  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div>
        <div className="w-full max-w-xl space-y-8  bg-slate-100 p-10" >
        <div className='flex items-center justify-end'>
          <button className='text-xl place-self-end' onClick={()=> onClose()}>x</button>
        </div>
          <div>
            <h2 className="mt-4 text-start text-5xl font-bold tracking-tight text-gray-900">
              Login / Sign Up
            </h2>
          </div>
          <div>
            <h2 className="text-lg">
              Please enter your phone number to continue
            </h2>
          </div>
          <form>
            <div className="flex my-8">
              {/* <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label> */}
              <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-2 text-xl font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">+91 <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
              <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                  </li>
                </ul>
              </div>
              <div className="relative w-full">
                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-xl text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                {/* <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button> */}
              </div>

            </div>
            <div className="justify-start !imp">

              <button
                type="submit"
                className="group relative flex w-auto justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-2  text-xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4"
              >
                Verify Numbers
              </button>
            </div>
          </form>
          <p className="d-text16 loginCard__passwordHeading">Prefer to Sign in with password instead?<button type="button" className="loginCard__changeLogin" data-logintype="password">Click here</button></p>
          <div className="oyo-row oyo-row--no-spacing loginCard__extraLinksBlock"><div className="loginCard__extraLinksHeading--left"></div><div className="loginCard__extraLinksHeading">Or sign in as</div><div className="loginCard__extraLinksHeading--right"></div></div>

        </div>
      </div>
    </div>
  )
}

export default Modal;
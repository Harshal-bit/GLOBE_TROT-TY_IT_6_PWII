import React, { Fragment } from "react";
import {
  ViewGridIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { useEffect, useRef, useState } from 'react'
import Modal from "../Login/LoginModal";


function Flyout(props) {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false); //to set menu open or close
  const menuRef = useRef(null);
  const divRef = useRef(null);

  const handleToggle = (event) => {

    setIsOpen(!isOpen);

  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(divRef)


      if (divRef.current && !divRef.current.contains(event.target) && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      event.stopImmediatePropagation();
    }
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }


    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyPress)

    }


  }, [menuRef])


  return (
    <>
      {/* Menu Button */}
      <button
        ref={divRef}
        onClick={() => { setIsOpen(!isOpen) }}
        className="hover:shadow-lg  active:scale-90 transition duration-150 flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer"
      >
        <ViewGridIcon className="h-6 " />
        <UserCircleIcon className="h-6" />
      </button>
      {/*Menu Button */}

      {isOpen && (
        <div ref={menuRef} className="absolute right-[20px] w-52 z-50 bg-white rounded-xl shadow-lg top-[85px]">
          <ul className="cursor-pointer my-3">
            <li className="px-4 py-2 my-1 hover:bg-slate-100">
            <button onClick={() => setShowModal(true)}>Sign Up</button>
            </li>
            <li className="px-4 py-2 my-1 hover:bg-slate-100">
              <button onClick={() => setShowModal(true)}>Log in</button>
            </li>
            <li className="px-4 py-2 my-1 hover:bg-slate-100">Help</li>
          </ul>

          <Fragment>
            <Modal inVisible={showModal} onClose={() => setShowModal(false)} />
          </Fragment>
        </div>
      )}
    </>
  );
}





export default Flyout;

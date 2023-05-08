'use client';

import { useSearchParams,useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from "react";
import qs from 'query-string';
import dynamic from 'next/dynamic'


import {
  HomeIcon,
  SearchIcon,
} from "@heroicons/react/solid";


const Search = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [location, setLocation] = useState("");
  


  return (
    <div className="flex items-center md:w-1/3  my-auto  md:border-2 rounded-full h-10  py-2 md:shadow-sm">
          <input
            type="text"
            className="flex-grow pl-5 bg-transparent outline-none text-gray-600 text-sm"
            placeholder="Start your search here"
          ></input>
          <div className='p-1'>
            <SearchIcon className="hidden md:inline-flex h-8 flex-shrink-0 bg-blue-500 p-2 text-white rounded-full cursor-pointer md:mx-auto" />
          </div>
    </div>
  );
  }
 
export default Search;
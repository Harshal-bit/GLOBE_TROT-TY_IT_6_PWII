'use client';

import { useSearchParams,useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from "react";
import qs from 'query-string';
import dynamic from 'next/dynamic'


import {
  HomeIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import Button from '../Button';


const Search = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [city, setCity] = useState<string>("");
  
  
  const onSubmit = useCallback(async () => {
    
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      city:city
    };

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery,
    }, { skipNull: true });
    router.push(url);
  }, 
  [
    router, 
    city,
    params
  ]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setCity(event.target.value);
  }


  return (
    <div className="flex items-center md:w-1/3  my-auto  md:border-2 rounded-full h-10  py-2 md:shadow-sm">
          <input value={city}
            onChange={handleChange}
            type="text"
            className="flex-grow pl-5 bg-transparent outline-none text-gray-600 text-sm"
            placeholder="Start your search here"
          ></input>
          <button className='p-1'>
            <SearchIcon onClick={onSubmit} className="hidden md:inline-flex h-8 flex-shrink-0 bg-blue-500 p-2 text-white rounded-full cursor-pointer md:mx-auto" />
          </button>
    </div>
  );
  }
 
export default Search;
"use client"
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import {useCallback} from "react";
import qs from "query-string";
interface CategoryBoxProps {
  img: string;
  city: string;
  distance: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  img,
  city,
  distance,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(()=>{

    let currentQuery = {};

    if(params){
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      city:city
    }

    if(params?.get('city') === city){
      delete updatedQuery.city;
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    },{skipNull:true})

    router.push(url);
  },[city, params, router])
  
  return (
    <div 
      onClick={handleClick}
      className=
        {`flex
        
        h-auto
        w-auto
        gap-2 
        item-center 
        m-2 mt-5 
        space-x-4 
        rounded-xl 
        hover:bg-gray-200
        hover:scale-105 
        trasition 
        transform 
        duration-200 
        ease-in-out
        ${selected ? 'bg-gray-200 text-neutral-800' : 'border-transparent text-neutral-500 '}
        `}
        
    >
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={img} alt={city} className="rounded-lg" fill />
      </div>
      {/* Right */}
      <div>
        <h2>{city}</h2>
        <h3 className=" text-sm text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default CategoryBox;

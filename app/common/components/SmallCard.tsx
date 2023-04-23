'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import React from "react";
import Image from "next/image";


interface SmallCardProps {
  img: string,
  location: string;
  distance : string;
}

const SmallCard: React.FC<SmallCardProps> = ({
   img, 
   location, 
   distance }) => {

    const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    const newQuery: any = {
      locationValue: params?.get('locationValue'),
      guestCount: params?.get('guestCount'),
      roomCount: params?.get('roomCount'),
      bathroomCount: params?.get('bathroomCount'),
      startDate: params?.get('startDate'),
      endDate: params?.get('endDate'),
      location: location
    }

    if (params?.get('location') === location) {
      delete newQuery.category;
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: newQuery
    }, { skipNull: true });

    router.push(url);
  }, [location, router, params]);

  return (
    <div className="flex item-center m-2 mt-5 space-x-4 rounded-xl hover:bg-gray-200 hover:scale-105 trasition transform duration-200 ease-in-out">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={img} alt={location} className = "rounded-lg" fill />
      </div>
      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className=" text-gray-500">{distance }</h3>
      </div>
    </div>
  );
}

export default SmallCard;

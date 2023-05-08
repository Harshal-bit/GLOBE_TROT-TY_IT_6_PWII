"use client"
import { usePathname, useSearchParams } from "next/navigation";
import CategoryBox from "../CategoryBox";
import Container from "../layout/Container";

export const categories = [
    {
        "id": "64071fbc8ca5e55fa3912b41",
        "img": "https://ik.imagekit.io/4w4l90bx9/smallTiles/manali.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677874751038",
        "city": "Manali",
        "distance": "16 hours drive"
    },
    {
        "id": "64071fbc8ca5e55fa3912b3e",
        "img": "https://ik.imagekit.io/4w4l90bx9/smallTiles/goa.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677874751656",
        "city": "Goa",
        "distance": "6 hours drive"
    },
    {
        "id": "64071fbc8ca5e55fa3912b44",
        "img": "https://ik.imagekit.io/4w4l90bx9/smallTiles/pune.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677874749466",
        "city": "Pune",
        "distance": "45 minutes drive"
    },
    {
        "id": "64071fbc8ca5e55fa3912b42",
        "img": "https://ik.imagekit.io/4w4l90bx9/smallTiles/nagpur.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677874750211",
        "city": "Nagpur",
        "distance": "10 hours drive"
    },
    {
        "id": "64071fbc8ca5e55fa3912b3d",
        "img": "https://ik.imagekit.io/4w4l90bx9/smallTiles/nashik.webp",
        "city": "Nashik",
        "distance": "3 hours drive"
    },
    {
        "id": "64071fbc8ca5e55fa3912b3f",
        "img": "https://ik.imagekit.io/4w4l90bx9/smallTiles/kashi.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677874751614",
        "city": "Kashi",
        "distance": "1 day drive"
    },
    {
        "id": "64071fbc8ca5e55fa3912b40",
        "img": "https://ik.imagekit.io/4w4l90bx9/smallTiles/mumbai.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677874751415",
        "city": "Mumbai",
        "distance": "45 minute drive"
    },
    {
        "id": "64071fbc8ca5e55fa3912b43",
        "img": "https://ik.imagekit.io/4w4l90bx9/smallTiles/matheran.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677874750053",
        "city": "Matheran",
        "distance": "8 hours drive"
    }
]


const Categories = () => {
    const params = useSearchParams();
    const city = params?.get('city');

    const pathname = usePathname();

    const isMainPage = pathname === '/'

    if(!isMainPage){
        return null;
    }
    return ( 
        <Container>
            <div
            className ="flex flex-row items-center justify-between overflow-x-auto"
            >
                {categories.map((item) => (
                    <CategoryBox 
                    key={item.id}
                    img = {item.img}
                    city={item.city}
                    distance ={item.distance} 
                    selected = {city === item.city}
                    />
                    
                )
                    
                )}
                
            </div>
        </Container>
     );
}
 
export default Categories;
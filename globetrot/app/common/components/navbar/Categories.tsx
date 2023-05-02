"use client"
import { usePathname, useSearchParams } from "next/navigation";
import CategoryBox from "../CategoryBox";
import Container from "../layout/Container";

export const categories = [
    {
        "id": "64071fbc8ca5e55fa3912b41",
        "img": "https://ik.imagekit.io/4w4l90bx9/smallTiles/manali.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677874751038",
        "location": "Manali",
        "distance": "16 hours drive"
    },
    {
        "id": "64071fbc8ca5e55fa3912b3e",
        "img": "https://ik.imagekit.io/4w4l90bx9/smallTiles/goa.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677874751656",
        "location": "Goa",
        "distance": "6 hours drive"
    },
    {
        "id": "64071fbc8ca5e55fa3912b44",
        "img": "https://ik.imagekit.io/4w4l90bx9/smallTiles/pune.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677874749466",
        "location": "Pune",
        "distance": "45 minutes drive"
    },
    {
        "id": "64071fbc8ca5e55fa3912b42",
        "img": "https://ik.imagekit.io/4w4l90bx9/smallTiles/nagpur.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677874750211",
        "location": "Nagpur",
        "distance": "10 hours drive"
    },
    {
        "id": "64071fbc8ca5e55fa3912b3d",
        "img": "https://ik.imagekit.io/4w4l90bx9/smallTiles/nashik.webp",
        "location": "Nashik",
        "distance": "3 hours drive"
    },
    {
        "id": "64071fbc8ca5e55fa3912b3f",
        "img": "https://ik.imagekit.io/4w4l90bx9/smallTiles/kashi.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677874751614",
        "location": "Kashi",
        "distance": "1 day drive"
    },
    {
        "id": "64071fbc8ca5e55fa3912b40",
        "img": "https://ik.imagekit.io/4w4l90bx9/smallTiles/mumbai.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677874751415",
        "location": "Mumbai",
        "distance": "45 minute drive"
    },
    {
        "id": "64071fbc8ca5e55fa3912b43",
        "img": "https://ik.imagekit.io/4w4l90bx9/smallTiles/matheran.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677874750053",
        "location": "Matheran",
        "distance": "8 hours drive"
    }
]


const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');

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
                    location={item.location}
                    distance ={item.distance} 
                    selected = {category === item.location}
                    />
                    
                )
                    
                )}
                
            </div>
        </Container>
     );
}
 
export default Categories;
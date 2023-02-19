import Image from "next/image";

function Banner() {
    return ( 
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full">
            <Image 
                
                alt ="Banner of jungle image"
                src="https://raw.githubusercontent.com/Harshal-bit/GLOBE_TROT-TY_IT_6_PWII/main/blob/cover.jpg"
                fill='true'
                style={{objectFit:"cover"}}
            />
            <div className="absolute  top-1/2 w-full text-center text-sm">
                <p className="text-sm font-medium sm:text-base">Not sure where to stay? Perfect.</p>
                <button className=" text-purple-500 bg-transparent px-5 py-2 rounded-full font-bold my-3 hover:shadow-2xl active:-scale-150 transition duration-150">
                We are here to help
                </button>
            </div>



        </div>

     );
}

export default Banner;
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselItem, CarouselNext, CarouselPrevious, CarouselContent } from "../ui/carousel";

const Projects = () => {

    const products = [
        {
          "name": "SauriMobile",
          "description": "SauriMobile is a comprehensive travel platform designed to simplify your transportation bookings across multiple modes—whether by bus, train, or flight. Users can easily search for routes, compare ticket prices, and make reservations, all within the app. SauriMobile partners with a range of travel providers to offer a broad selection of options, ensuring travelers find the best deals. Features like real-time seat selection, mobile payments, and instant ticket delivery make it ideal for both casual travelers and business users. The app’s multi-platform availability on Android and iOS ensures accessibility and convenience.",
          "image_url": "/imgs/products/saurimobile.png",
          "platforms": {
            "Google Play Store": "https://play.google.com/store/apps/details?id=com.qiittech.saurimobile",
            "Apple App Store": "https://apps.apple.com/us/app/sauri/id6523431260"
          },
          "tags": ["travel app", "ticket booking", "flight comparison", "bus tickets", "train tickets", "transportation"]
        },
        {
          "name": "HelloSauri",
          "description": "HelloSauri is an all-in-one digital platform that revolutionizes travel planning by offering streamlined ticket booking for trains, buses, and flights. The platform allows users to easily search, compare, and book tickets from various providers, all in one place. Whether you’re planning a daily commute or a long-haul journey, HelloSauri simplifies the entire process by providing clear pricing, route options, and discounts. Integration with trusted partners ensures reliable service and smooth travel experiences. With a mobile-friendly interface and responsive design, HelloSauri caters to users seeking hassle-free travel planning across multiple transportation methods​(Hello Sauri).",
          "image_url": "/imgs/products/hellosauri.png",
          "website": "https://hellosauri.com",
          "tags": ["travel companion", "ticket comparison", "flight booking", "bus tickets", "train tickets", "travel deals"]
        },
        {
          "name": "Qiit Technologies",
          "description": "Qiit Technologies is a tech-forward company specializing in digital transformation for businesses through cutting-edge software solutions. Their expertise spans mobile app development, AI, machine learning, and cloud services, offering end-to-end solutions tailored to the specific needs of each client. Qiit Technologies collaborates closely with businesses to design scalable applications, enhance operational efficiency, and drive technological innovation. From custom app development to enterprise-level digital infrastructure, Qiit Technologies ensures that every project aligns with client goals, supporting growth and competitive advantage through modern tech implementations.",
          "image_url": "/imgs/products/qiit.png",
          "website": "https://weareqiit.com",
          "tags": ["digital solutions", "mobile apps", "machine learning", "custom software", "cloud computing", "innovation"]
        },
        {
          "name": "Sockets Luxury",
          "description": "Sockets Luxury is an upscale online boutique specializing in high-end luxury items, ranging from fashion accessories to bespoke home decor. With a focus on timeless elegance and superior craftsmanship, Sockets Luxury provides discerning customers with an exclusive shopping experience. The platform features a carefully curated collection of premium brands and unique products, catering to those with a refined taste for luxury. Sockets Luxury combines personalized service with a seamless online shopping experience, offering secure transactions, detailed product descriptions, and high-quality visuals, making it the go-to destination for luxury enthusiasts.",
          "image_url": "/imgs/products/socketsluxe.png",
          "website": "https://socketsluxe.com",
          "tags": ["luxury store", "fashion accessories", "home decor", "high-end products", "luxury shopping", "elegant design"]
        }
      ]
      
      

    return ( <>
            <div className="px-2 sm:px-5 md:px-10 lg:px-[20%] py-8">
                <div className="mb-6 pb-4 tech-border-bottom">
                    <h2 className="text-xl md:text-2xl font-bold glow-cyan font-mono tracking-widest">≈ PROJECTS</h2>
                </div>
            </div>
   
        <div className="border-y-2 border-cyan-500 py-8 px-2 sm:px-5 md:px-10 lg:px-[20%] mb-5 font-mono">


                                        <Carousel  className="w-full ">
      <CarouselContent >
        {products.map((product, index) => (
          <CarouselItem key={index}>
                        <div className=" rounded w-full">
            <div className="lg:flex mt-5 gap-4">
                <div className="mb-5  lg:w-5/12 p-4  rounded-md">
               <Image src={product.image_url} width={1000} height={100} className="w-fill h-fit object-contain"/>

                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-mono glow-cyan">{product.name}</h3>
                    <div className="flex gap-2 flex-wrap my-2">  {product.tags.map((tag, index)=>{
                        return(
                            <p className="text-xs font-mono rounded text-nowrap bg-cyan-900 text-cyan-200 px-2 py-1 border border-cyan-500" key={index}>{tag}</p>
                        )
                    })}</div>
                    {/* <div className="icons mt-1 flex gap-2">
                        <div className="bg-gray-700 w-6 aspect-square rounded-[50%]"></div>
                        <div className="bg-gray-700 w-6 aspect-square rounded-[50%]"></div>

                        <div className="bg-gray-700 w-6 aspect-square rounded-[50%]"></div>

                        <div className="bg-gray-700 w-6 aspect-square rounded-[50%]"></div>


                        <div className="bg-gray-700 w-6 aspect-square rounded-[50%]"></div>


                                           </div> */}

                </div>
               
            </div>
            </div>

            <div className="py-5 font-mono text-sm md:text-base text-justify text-cyan-100">
              {product.description}
            </div>
            <div className="">
                {product.website?
                <a className="w-full flex" target="_" href={product.website}>
                    <button className="border-2 border-cyan-500 px-6 py-2 my-5 font-mono text-cyan-300 hover:bg-cyan-500 hover:text-black transition m-auto mr-0 glow-text">
                        [VISIT_PROJECT]
                    </button>
                </a>
                :<></>}
               
</div>
            <div className="icons mt-1 flex gap-2 justify-center">
                        <div className="bg-gray-700 w-2 aspect-square rounded-[50%]"></div>
                        <div className="bg-gray-700 w-2 aspect-square rounded-[50%]"></div>
                        <div className="bg-gray-500 w-2 aspect-square rounded-[50%]"></div>
                        <div className="bg-gray-700 w-2 aspect-square rounded-[50%]"></div>
                        <div className="bg-gray-700 w-2 aspect-square rounded-[50%]"></div>


                                           </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-cyan-600 hover:bg-cyan-500 text-black hidden md:flex border-2 border-cyan-500" />
      <CarouselNext className="bg-cyan-600 hover:bg-cyan-500 text-black hidden md:flex border-2 border-cyan-500"/>
    </Carousel>
        </div>
         </>
     );
}
 
export default Projects;

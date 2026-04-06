import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselItem, CarouselNext, CarouselPrevious, CarouselContent } from "../ui/carousel";

const Projects = () => {

  const products = [

    {
      "name": "Eslatra",
      "description": "Eslatra is a cutting-edge software solution designed to streamline digital workflows and enhance productivity for modern businesses. Our platform integrates seamlessly with existing systems, offering a comprehensive suite of tools for project management, collaboration, and data analysis. With a focus on user experience and technological excellence, Eslatra empowers teams to achieve their goals more efficiently and effectively.",
      "image_url": "/imgs/products/eslatra.png",
      "website": "https://eslatra.com",
      "tags": ["project management", "collaboration", "data analysis", "productivity", "digital transformation", "innovation"]
    },
    {
      "name": "Uwa",
      "description": "Uwa is a revolutionary platform that empowers users to create, share, and discover unique content in a vibrant community. With a focus on creativity and collaboration, Uwa provides an intuitive interface for users to showcase their talents, connect with like-minded individuals, and participate in exciting challenges. The platform leverages cutting-edge technology to deliver a seamless experience, ensuring that every user can express themselves freely and build meaningful connections.",
      "image_url": "/imgs/products/uwa.png",
      "website": "https://uwaoriginals.com",
      "tags": ["content creation", "community building", "collaboration", "creativity", "social media", "innovation"]
    },
    {
      "name": "TheRunClub",
      "description": "TheRunClub is a dynamic platform dedicated to promoting running and fitness within the community. It offers a range of services including event organization, training resources, and a supportive network for runners of all levels. The platform fosters a sense of belonging and encourages individuals to embrace an active lifestyle through engaging activities and competitions.",
      "image_url": "/imgs/products/trc.png",
      "website": "https://trc.eslatra.com",
      "tags": ["running", "fitness", "community", "events", "training", "health"]
    },
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
      "name": "M-Idris autos",
      "description": "M-Idris autos is a modern automotive platform that connects car buyers and sellers in a seamless online environment. The platform offers a wide range of vehicles for sale, detailed listings, and a user-friendly interface for browsing and purchasing cars. With features like virtual tours, financing options, and expert advice, M-Idris autos makes the car buying process efficient and enjoyable.",
      "image_url": "/imgs/products/midris.png",
      "website": "https://midrisautos.vercel.app/",
      "tags": ["car sales", "automotive", "online marketplace", "vehicle listings", "car buying", "auto dealership"]
    },
    {
      "name": "HelloSauri",
      "description": "HelloSauri is an all-in-one digital platform that revolutionizes travel planning by offering streamlined ticket booking for trains, buses, and flights. The platform allows users to easily search, compare, and book tickets from various providers, all in one place. Whether you’re planning a daily commute or a long-haul journey, HelloSauri simplifies the entire process by providing clear pricing, route options, and discounts. Integration with trusted partners ensures reliable service and smooth travel experiences. With a mobile-friendly interface and responsive design, HelloSauri caters to users seeking hassle-free travel planning across multiple transportation methods​(Hello Sauri).",
      "image_url": "/imgs/products/hellosauri.png",
      "website": "https://hellosauri.com",
      "tags": ["travel companion", "ticket comparison", "flight booking", "bus tickets", "train tickets", "travel deals"]
    },
  ]



  return (<>
    <div className="px-2 sm:px-5 md:px-10 lg:px-[20%] py-8">
      <div className="mb-2 pb-2">
        <h2 className="text-xl md:text-2xl font-bold glow-cyan font-mono tracking-widest">≈ PROJECTS</h2>
      </div>
    </div>

    <div className="border-y-2 border-cyan-500 py-8 px-2 sm:px-5 md:px-10 lg:px-[20%] mb-5 font-mono">


      <Carousel className="w-full ">
        <CarouselContent >
          {products.map((product, index) => (
            <CarouselItem key={index}>
              <div className=" rounded w-full">
                <div className="mt-5 ">
                  <div className="mb-5 md:flex gap-4   rounded-md">
                    <Image src={product.image_url} width={1000} height={100} className="md:w-3/5  object-contain" />
                    <div className="flex md:w-1/2 flex-col justify-center">
                      <h3 className="text-3xl font-mono glow-cyan">{product.name}</h3>
                      <div className="flex gap-2  flex-wrap my-2">  {product.tags.map((tag, index) => {
                        return (
                          <p className="text-[8px] capitalize font-mono rounded text-nowrap bg-cyan-900 text-cyan-200 px-2 py-1 border border-cyan-500" key={index}>{tag}</p>
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
              </div>

              <div className="py-2 font-mono text-sm md:text-base text-justify text-cyan-100">
                {product.description}
              </div>
              <div className="">
                {product.website ?
                  <a className="w-full flex" target="_" href={product.website}>
                    <button className="border-2 border-cyan-500 px-6 py-2 my-3 font-mono text-cyan-300 hover:bg-cyan-500 hover:text-black transition m-auto mr-0 glow-text">
                      [VISIT_PROJECT]
                    </button>
                  </a>
                  : <></>}

              </div>
              <div className="icons mt-1 flex gap-2 justify-center">
                <div className="bg-cyan-100 w-2 aspect-square rounded-[50%]"></div>
                <div className="bg-cyan-100 w-2 aspect-square rounded-[50%]"></div>
                <div className="bg-cyan-500 w-2 aspect-square rounded-[50%]"></div>
                <div className="bg-cyan-100 w-2 aspect-square rounded-[50%]"></div>
                <div className="bg-cyan-100 w-2 aspect-square rounded-[50%]"></div>


              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-cyan-600 hover:bg-cyan-500 text-black hidden md:flex border-2 border-cyan-500" />
        <CarouselNext className="bg-cyan-600 hover:bg-cyan-500 text-black hidden md:flex border-2 border-cyan-500" />
      </Carousel>
    </div>
  </>
  );
}

export default Projects;

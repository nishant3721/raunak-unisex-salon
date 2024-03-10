"use client"
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"
import Image from "next/image";
import galleryOne from "@/assets/images/gallery/g1.jpeg"
import galleryTwo from "@/assets/images/gallery/g2.jpeg"
import galleryThree from "@/assets/images/gallery/g3.jpeg"
import galleryFour from "@/assets/images/gallery/g4.jpeg"
import galleryFive from "@/assets/images/gallery/g5.jpeg"
import gallerySix from "@/assets/images/gallery/g6.jpeg"

const Index = () => {
    const _galleryArray = [
        { "id": 1, "images": [galleryOne, galleryTwo, galleryThree, galleryFour, galleryFour, galleryFive, gallerySix] },
    ]

    return (
        <section
            className="jobs-section py-10 text-center px-36 max-[486px]:px-2 bg-gray-900"
        >
            <h2 className="mb-4 font-semibold leading-none tracking-tight text-white lg:text-4xl capitalize">
                Our Gallery
            </h2>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                infiniteLoop
                interval={2000}
                className="mt-10"
            >
                {_galleryArray.map((item, index) => (
                    <div key={index} className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                            <Image className="h-auto max-w-full rounded-lg" src={item.images[0] as any} alt="" />
                        </div>
                        <div>
                            <Image className="h-auto max-w-full rounded-lg" src={item.images[1] as any} alt="" />
                        </div>
                        <div>
                            <Image className="h-auto max-w-full rounded-lg" src={item.images[2] as any} alt="" />
                        </div>
                        <div>
                            <Image className="h-auto max-w-full rounded-lg" src={item.images[3] as any} alt="" />
                        </div>
                        <div>
                            <Image className="h-auto max-w-full rounded-lg" src={item.images[4] as any} alt="" />
                        </div>
                        <div>
                            <Image className="h-auto max-w-full rounded-lg" src={item.images[5] as any} alt="" />
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

export default Index;

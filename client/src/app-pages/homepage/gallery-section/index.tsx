"use client"
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"
import Image from "next/image";

const Index = () => {
    const _gridContentArray = [
        {
            name: "Sales & Marketing",
            price: 0,
            border: "border-b-[1px] border-e-[1px]",
        },
        {
            name: "HR",
            price: 0,
            border: "border-b-[1px] border-e-[1px]",
        },
        {
            name: "Fresher",
            price: 0,
            border: "border-b-[1px] border-e-[1px]",
        },
        {
            name: "Technical",
            price: 0,
            border: "border-b-[1px]",
        },
        {
            name: "Accounts",
            price: 0,
            border: "border-e-[1px]",
        },
        {
            name: "Software Engineer",
            price: 0,
            border: "border-e-[1px]",
        },
        {
            name: "Production/QA/QC",
            price: 0,
            border: "border-e-[1px]",
        },
        {
            name: "Backend",
            price: 0,
        },
    ];

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
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <div key={index} className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="" />
                        </div>
                    </div>

                ))}
            </Carousel>
        </section>
    );
};

export default Index;

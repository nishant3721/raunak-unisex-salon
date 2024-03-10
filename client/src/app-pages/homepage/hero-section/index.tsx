"use client";
import "./style.css";
import { motion } from "framer-motion"

const Index = () => {
    return (
        <div className="relative isolate lg:px-8">
            <div className="mx-auto max-w-2xl py-24 z-10 relative">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white hover:text-tertiary-color ring-1 ring-white hover:ring-tertiary-color transition">
                        Welcome to Raunak Unisex Salon
                    </div>
                </div>
                <div className="text-center">
                    <motion.h1 animate={{ scale: [1.5, 0.8, 1], transition: { duration: 0.8 } }} className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl gradient--primary">
                        Elevate Your Style, Embrace Your Beauty
                    </motion.h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Step into luxury at <span className="text-tertiary-color">Raunak Unisex Salon.</span> Our expert stylists are here to craft your perfect look, whether it&apos;s a chic haircut, vibrant color, or indulgent spa treatment. With premium products and personalized service, discover the allure of our Salon today!
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Contact Us
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-300">
                            Explore More <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-0">
                <video autoPlay muted loop className="object-cover w-full h-full opacity-50">
                    <source src={"/hero-section.mp4"} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay for darkness */}
            </div>
        </div>
    );
};

export default Index;

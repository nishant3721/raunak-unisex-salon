"use client"
import "./style.css"
import Image from 'next/image'
import harCare from "@/assets/images/hair-care.png"
import beauty from "@/assets/images/beauty.png"
import spa from "@/assets/images/spa.png"
import specialCare from "@/assets/images/special.png"


const features = [
    {
        name: 'Hair Care',
        description:
            'Indulge in our expertly tailored haircuts and color services. Revitalize your locks with nourishing treatments.',
        icon: harCare,
    },
    {
        name: 'Beauty',
        description:
            'Experience luxury with our radiant facials and precise waxing. Achieve flawless brows with threading.',
        icon: beauty,
    },
    {
        name: 'Spa',
        description:
            'Relax with therapeutic massages. Treat yourself to manicures, pedicures, and rejuvenating body treatments.',
        icon: spa,
    },
    {
        name: 'Occasional Services',
        description:
            'Look stunning on your special day with bridal hair and makeup. Shine at any event with our party makeup services.',
        icon: specialCare,
    },
]


const Index = () => {
    return (
        <div className="bg-gray-900 py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto lg:text-center">
                    {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Our Services
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-200">
                        At <span className='text-tertiary-color'>Raunak Unisex Salon,</span> Our team of professionals is dedicated to providing top-notch service, ensuring that every visit leaves you feeling refreshed, confident, and ready to take on the world. From trendy haircuts to relaxing spa treatments, Explore our services below:
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-20">
                                <dt className="text-base font-semibold leading-7 text-gray-200">
                                    <div className="absolute left-[-20px] top-0 flex p-3 items-center justify-center rounded-lg bg-indigo-600">
                                        <Image src={feature.icon as any} alt='services' />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-300">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Index
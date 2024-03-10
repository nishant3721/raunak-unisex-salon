"use client"
import "./style.css";

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
                Our Packages
            </h2>
            <p className="font-semibold text-gray-500 capitalize">
                Find the best package for you
            </p>
            <div className="job-section-grid grid grid-cols-4 mt-10 max-[486px]:grid-cols-2">
                {_gridContentArray.map((element, index) => (
                    <div
                        className={`p-10 group transition cursor-pointer hover:shadow-2xl ${element.border}`}
                        key={index}
                    >
                        <h3 className="font-bold capitalize text-gray-200">{element.name}</h3>
                        <p className="text-[#fb236a] font-medium capitalize">
                            Rs.{element.price}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Index;

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Brand from "../Brand/Brand";

const BrandDetails = () => {
    //const brandInfo = useLoaderData();// for json data
    const { brand_name } = useParams();
    const brandNameLower = brand_name.toLowerCase();


    // use database data and json data to compare and display brand items as per needed
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrands(data));
    }, [])

    //slider code
    const slides = [
        {
            url: 'https://i.ibb.co/qd7q5xX/GTR.png',
        },
        {
            url: 'https://i.ibb.co/2gL1Ydh/honda.png',
        },
        {
            url: 'https://i.ibb.co/df7hR6J/landcruser.png',
        },
        {
            url: 'https://i.ibb.co/CQhQ3n2/Acura.png',
        },
        {
            url: 'https://i.ibb.co/1Mnb5yX/mitsubishi.png',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };


    return (
        <div className="mx-2">
            <div className="container mx-auto">

                {/* trying slider */}
                <div className="relative">
                    <div className='h-[780px] w-full m-auto pt-4 pb-16 relative group'>
                        <div
                            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                        ></div>

                        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                            <BsChevronCompactLeft onClick={prevSlide} size={30} />
                        </div>
                        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                            <BsChevronCompactRight onClick={nextSlide} size={30} />
                        </div>
                        <div className='flex top-4 justify-center py-2'>
                            {slides.map((slide, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    className='text-2xl cursor-pointer'
                                >
                                    <RxDotFilled />
                                </div>
                            ))}
                        </div>
                    </div>
                    <h1 className="text-lg sm:text-2xl p-4 shadow-xl tracking-tighter glass bg-none absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-amber-500 text-center font-semibold italic font-mono">Drive Dreams Home! Explore Top Car Deals at JDM Automobiles. Performance, Luxury, and Savings Await – Start Your Journey Now!</h1>
                </div>
                <div className="text-center mb-8 text-xl sm:text-2xl font-mono tracking-tighter">
                    <h2>This is product lists of <span className="text-purple-700 font-semibold">{brand_name}</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        brands.filter((item) => {
                            return brandNameLower === ''
                                ? item
                                : item.brandName.toLowerCase() === brandNameLower;
                        }).map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandDetails;
import { useLoaderData } from 'react-router-dom';
import layout1 from '../../assets/layout1.jpg'
import layout2 from '../../assets/layout2.jpg'
import layout3 from '../../assets/layout3.jpg'
import BrandCategory from '../BrandCategory/BrandCategory';

const Home = () => {
    const brandLists = useLoaderData();
    // const { id } = brandLists
    // const brandList =
    console.log(brandLists);


    return (
        <main>
            <section>
                <h1>add banner</h1>
            </section>
            {/* add 6 categories */}
            <section>
                <div className="text-center">
                    <h1 className="text-6xl text-fuchsia-800">Are you in search for a new car?</h1>
                    <p>Experience automotive excellence at its finest with JDM Automobiles. Our curated selection of cars combines cutting-edge technology and sleek design for an unparalleled driving experience. From fuel-efficient compacts to luxurious SUVs, we have the perfect vehicle for every lifestyle. Choose JDM Automobiles for quality, reliability, and exceptional service. Elevate your drive with us - where excellence meets the road.</p>
                    <p>Look no further, We provide wide collection of japanese cars ranging from various brands.</p>
                </div>
                {/* 6 brand image */}

                <div className="container mx-auto">
                    <div className="mx-2">
                    <div className="w-auto lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            brandLists.map(brand => <BrandCategory brand={brand} key={brand.id}></BrandCategory>)
                        }
                    </div>
                    </div>
                </div>


            </section>
            {/* add 3 image layout */}
            <section className='mt-20'>
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="w-full lg:w-2/4">
                        {/* img 1 */}
                        <img src={layout1} />
                    </div>
                    <div className="w-full lg:w-2/4">
                        {/* 4 */}
                        <div className="flex flex-col md:flex-row items-center bg-slate-900">
                            {/* r8 */}
                            <div className="w-full md:w-2/4">
                                <img src={layout2} />
                            </div>
                            <div className="w-full md:w-2/4 ps-4 space-y-2 py-4">
                                <h1 className="text-orange-50 text-xl">Check Out Civic Trims</h1>
                                <button className="btn px-6 rounded-none bg-[#db545a] text-lg text-white font-normal border-0">See Details</button>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center bg-[#db545a]">
                            {/* civic */}
                            <div className="w-full md:w-2/4 px-4 py-4 md:py-0">
                                <h1 className="text-xl text-orange-50 mb-4">The Heritage of Honda</h1>
                                <p className="text-orange-50 text-sm line-clamp-3 lg:line-clamp-none">
                                    The Honda Civic: a sleek and reliable icon renowned for its efficient design and advanced technology, delivering a dynamic driving experience.</p>
                            </div>
                            <div className="w-full md:w-2/4">
                                <img src={layout3} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* add faq */}
            <section>

            </section>
        </main>
    );
};

export default Home;
import { Link, useLoaderData } from 'react-router-dom';
import layout1 from '../../assets/layout1.jpg'
import layout2 from '../../assets/layout2.jpg'
import layout3 from '../../assets/layout3.jpg'
import BrandCategory from '../BrandCategory/BrandCategory';
import banner from '../../assets/banner.jpg'
import faq from '../../assets/faq1.jpg'

const Home = () => {
    const brandLists = useLoaderData();
    // const { id } = brandLists
    // const brandList =
    // console.log(brandLists);


    return (
        <main>
            <section style={{ backgroundImage: `url(${banner})` }} className="bg-cover flex justify-end bg-center h-screen mb-20">
                <div className="mr-8 sm:mr-16 md:mr-28 lg:mr-40 text-end pt-10 md:pt-16 lg:pt-36 w-full md:w-1/2 space-y-6">
                    <h1 className='text-5xl uppercase font-semibold'><span className="text-indigo-50">get your</span> <br /><span className="text-fuchsia-600">dream car</span></h1>
                    <p className='text-indigo-100 text-xl font-mono ps-24 font-semibold'>Discover excellence on wheels at our premier car-selling website. From sleek sedans to robust SUVs, find your perfect ride seamlessly. Unleash automotive satisfaction with our curated selection and exceptional service.</p>
                    <p><Link to="https://www.hotcars.com/jdm-cars-everyone-should-drive-at-least-once/#mitsubishi-lancer-evolution-ii" target='blank'><button className="btn bg-fuchsia-700 hover:bg-fuchsia-600 text-indigo-50 font-semibold border-none rounded-none">Learn more</button></Link></p>
                </div>
            </section>
            {/* add 6 categories */}
            <section>
                <div className="text-center px-6 sm:px-20 md:px-36 mb-10">
                    <h1 className="text-xl sm:text-3xl md:text-5xl font-semibold  text-fuchsia-800 mb-6">Are you in search for a new car?</h1>
                    <p className="text-gray-800">Experience automotive excellence at its finest with JDM Automobiles. Our curated selection of cars combines cutting-edge technology and sleek design for an unparalleled driving experience. From fuel-efficient compacts to luxurious SUVs, we have the perfect vehicle for every lifestyle. Choose JDM Automobiles for quality, reliability, and exceptional service. Elevate your drive with us - where excellence meets the road. Look no further, We provide wide collection of japanese cars ranging from various brands.</p>
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
            <section className='mt-20 mb-20'>
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
                <div className="flex justify-center flex-col md:flex-row gap-10">
                    <div className='w-full md:w-1/5 px-24 sm:px-40 md:px-0'>
                        {/* add img */}
                        <img className='rounded-md' src={faq} alt="faq image" />
                    </div>
                    <div className='w-full md:w-2/5 px-14 sm:px-28 md:px-0'>
                        {/* faq */}
                        <div className='text-center mb-6'>
                            <h1 className='uppercase text-5xl font-semibold text-fuchsia-800 mb-4'>faq</h1>
                            <p className='capitalize font-semibold text-zinc-500'>some frequently asked question</p>
                        </div>
                        <div>
                            <div className="collapse collapse-arrow bg-stone-100">
                                <input type="radio" name="my-accordion-2" checked="checked" />
                                <div className="collapse-title text-xl font-semibold text-fuchsia-900">
                                    What should I consider when buying a used car?
                                </div>
                                <div className="collapse-content">
                                    <p>Prioritize a thorough inspection, review the vehicle history report, and, if possible, have a trusted mechanic assess the car&rsquo;s condition to ensure a smart purchase.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-stone-100">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-semibold text-fuchsia-900">
                                    How often should I service my vehicle for optimal performance?
                                </div>
                                <div className="collapse-content">
                                    <p>Regular maintenance is crucial. Follow the manufacturer&rsquo;s recommended service intervals for oil changes, tire rotations, brake inspections, and other essential checks to keep your vehicle running smoothly.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-stone-100">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-semibold text-fuchsia-900">
                                    Are electric vehicles a practical choice for daily commuting?
                                </div>
                                <div className="collapse-content">
                                    <p>Absolutely. Electric vehicles are increasingly popular for daily commuting, offering environmental benefits, lower operating costs, and advancements in charging infrastructure that make them a practical and sustainable choice.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-stone-100">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-semibold text-fuchsia-900">
                                    What features should I prioritize for a family-friendly car?
                                </div>
                                <div className="collapse-content">
                                    <p>Look for spacious interiors, advanced safety features, ample cargo space, and user-friendly entertainment systems to ensure a comfortable and secure ride for your family</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-stone-100">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-semibold text-fuchsia-900">
                                    How can I improve my car&rsquo;s fuel efficiency?
                                </div>
                                <div className="collapse-content">
                                    <p> Regularly maintain your vehicle, keep tires properly inflated, avoid aggressive driving, and consider using higher-octane fuel for improved efficiency. Following these practices can contribute to better fuel economy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
};

export default Home;
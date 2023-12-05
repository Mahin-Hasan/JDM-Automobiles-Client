import formbg from '../../assets/formbg.png'


const AddProduct = () => {
    const handleAddCar = event => {

        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const brandName = form.brandName.value;
        const carName = form.carName.value;
        const carType = form.carType.value;
        const carPrice = form.carPrice.value;
        const carRating = form.rating.value;
        const carDescription = form.carDescription.value;

        const newCar = { image, brandName, carName, carType, carPrice, carRating, carDescription };
        console.log(newCar);

    }


    return (
        <section className="container mx-auto">
            <div className="text-center mb-6">
                <h1 className="text-2xl sm:text-4xl  uppercase text-stone-500 font-medium leading-none sm:leading-tight">Add your brand</h1>
            </div>
            <div style={{ backgroundImage: `url(${formbg})` }} className="bg-cover bg-center rounded-none sm:rounded-lg my-16">
                <div className="py-24">
                    <h1 className='text-fuchsia-100 mb-12 text-center text sm:text-3xl'>Provide all the necessary inforamtion regarding your car brand.</h1>
                    <div className="bg-white border-4 border-fuchsia-800 p-14 max-w-4xl mx-auto">
                        <form onSubmit={handleAddCar}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="label text-purple-700 text-lg font-medium">
                                        Brand Image
                                    </label>
                                    <input
                                        placeholder="Image URL"
                                        type="text"
                                        name="image"
                                        className="form-control bg-[#fcf7ff] w-full border-2 py-3"
                                    />
                                </div>
                                <div>
                                    <label className="label text-purple-700 text-lg font-medium">
                                        Brand Name
                                    </label>
                                    <input
                                        placeholder="Brand Name"
                                        type="text"
                                        name="brandName"
                                        className="form-control bg-[#fcf7ff] w-full border-2 py-3"
                                    />
                                </div>
                            </div>
                            {/* 2nd */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="label text-purple-700 text-lg font-medium">
                                        Car Name
                                    </label>
                                    <input
                                        placeholder="Name"
                                        type="text"
                                        name="carName"
                                        className="form-control bg-[#fcf7ff] w-full border-2 py-3"
                                    />
                                </div>
                                <div>
                                    <label className="label text-purple-700 text-lg font-medium">
                                        Car Type
                                    </label>
                                    <input
                                        placeholder="type"
                                        type="text"
                                        name="carType"
                                        className="form-control bg-[#fcf7ff] w-full border-2 py-3"
                                    />
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="label text-purple-700 text-lg font-medium">
                                        Car Price
                                    </label>
                                    <input
                                        placeholder="Price"
                                        type="text"
                                        name="carPrice"
                                        className="form-control bg-[#fcf7ff] w-full border-2 py-3"
                                    />
                                </div>
                                <div>
                                    <label className="label text-purple-700 text-lg font-medium">
                                        Product Rating
                                    </label>
                                    <div className="rating space-x-1 block mt-3">
                                        <input type="radio" name="rating" value="1" className="mask mask-star-2 bg-purple-400" />
                                        <input type="radio" name="rating" value="2" className="mask mask-star-2 bg-purple-400" />
                                        <input type="radio" name="rating" value="3" className="mask mask-star-2 bg-purple-400" />
                                        <input type="radio" name="rating" value="4" className="mask mask-star-2 bg-purple-400" />
                                        <input type="radio" name="rating" value="5" className="mask mask-star-2 bg-purple-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <label className="label text-purple-700 text-lg font-medium">
                                    Car Description
                                </label>
                                <textarea
                                    placeholder="Enter detailed information of the car"
                                    className="bg-[#fcf7ff] w-full border-2 py-4"
                                    name="carDescription"
                                />
                            </div>
                            <div className="form-control mt-6">
                                {/* <button className="btn btn-neutral text-lg text-fuchsia-500">Add Car Details</button> */}
                            </div>
                            <input className="btn btn-outline bg-fuchsia-900 hover:bg-purple-600 text-white w-full rounded-md" type="submit" value="Add Car Details" />
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AddProduct;
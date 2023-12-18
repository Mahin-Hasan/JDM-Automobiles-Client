import { useLoaderData } from 'react-router-dom';
import updatebg from '../../assets/updatebg.jpg'
import Swal from 'sweetalert2';

const EditBrand = () => {

    const brands = useLoaderData();
    const { _id, image, brandName, carName, carType, carPrice, carDescription } = brands;


    const handleUpdateBrand = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const brandName = form.brandName.value;
        const carName = form.carName.value;
        const carType = form.carType.value;
        const carPrice = form.carPrice.value;
        const carRating = form.rating.value;
        const carDescription = form.carDescription.value;

        const editedCar = { image, brandName, carName, carType, carPrice, carRating, carDescription };
        console.log(editedCar);

        //update previous stored details
        fetch(`http://localhost:5000/brands/${_id}`, {
            method: 'PUT', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editedCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Brand Details Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }



    return (
        <section className="container my-20 mx-auto">
            <div className="text-center mb-6">
                <h1 className="text-2xl sm:text-4xl uppercase text-stone-500 font-medium leading-none sm:leading-tight">Edit brand details of {carName}</h1>
            </div>
            <div style={{ backgroundImage: `url(${updatebg})`}} className="bg-cover bg-center rounded-none sm:rounded-lg my-16">
                <div className="py-24">
                    <h1 className='text-amber-200 mb-12 text-center text sm:text-3xl'>Make necessary changes to the stored brands.</h1>
                    <div className="bg-white border-4 border-amber-700 p-14 max-w-4xl mx-auto">
                        <form onSubmit={handleUpdateBrand}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="label text-orange-700 text-lg font-medium">
                                        Brand Image
                                    </label>
                                    <input
                                        placeholder="Image URL"
                                        type="text"
                                        name="image"
                                        className="form-control bg-[#fcf7ff] w-full border-2 py-3"
                                        defaultValue={image}
                                    />
                                </div>
                                <div>
                                    <label className="label text-orange-700 text-lg font-medium">
                                        Brand Name
                                    </label>
                                    <input
                                        placeholder="Brand Name"
                                        type="text"
                                        name="brandName"
                                        defaultValue={brandName}
                                        className="form-control bg-[#fcf7ff] w-full border-2 py-3"
                                    />
                                </div>
                            </div>
                            {/* 2nd */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="label text-orange-700 text-lg font-medium">
                                        Car Name
                                    </label>
                                    <input
                                        placeholder="Name"
                                        type="text"
                                        name="carName"
                                        defaultValue={carName}
                                        className="form-control bg-[#fcf7ff] w-full border-2 py-3"
                                    />
                                </div>
                                <div>
                                    <label className="label text-orange-700 text-lg font-medium">
                                        Car Type
                                    </label>
                                    <input
                                        placeholder="type"
                                        type="text"
                                        name="carType"
                                        defaultValue={carType}
                                        className="form-control bg-[#fcf7ff] w-full border-2 py-3"
                                    />
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="label text-orange-700 text-lg font-medium">
                                        Car Price
                                    </label>
                                    <input
                                        placeholder="Price"
                                        type="text"
                                        name="carPrice"
                                        defaultValue={carPrice}
                                        className="form-control bg-[#fcf7ff] w-full border-2 py-3"
                                    />
                                </div>
                                <div>
                                    <label className="label text-orange-700 text-lg font-medium">
                                        Product Rating
                                    </label>
                                    <div className="rating space-x-1 block mt-3">
                                        <input type="radio" name="rating" value="1" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating" value="2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating" value="3" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating" value="4" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating" value="5" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <label className="label text-orange-700 text-lg font-medium">
                                    Car Description
                                </label>
                                <textarea
                                    placeholder="Enter detailed information of the car"
                                    defaultValue={carDescription}
                                    className="bg-[#fcf7ff] w-full border-2 py-4"
                                    name="carDescription"
                                />
                            </div>
                            <input className="btn btn-outline mt-6 bg-amber-700 hover:bg-orange-600 text-white w-full rounded-md" type="submit" value="Update Car Details" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditBrand;
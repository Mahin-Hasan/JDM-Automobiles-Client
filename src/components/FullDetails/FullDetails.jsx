import { useLoaderData } from "react-router-dom";
import { FaShoppingCart, FaDollarSign } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import Swal from "sweetalert2";

const FullDetails = () => {
    const brandDetails = useLoaderData();
    const { _id, image, brandName, carName, carRating, carType, carPrice, carDescription } = brandDetails;
    // console.log(_id, image, brandName, carName, carRating, carType, carPrice, carDescription);
    const handleAddToCart = () => {
        const newCartItem = { image, brandName, carName, carType, carPrice };
        console.log(newCartItem);
        //adding to cart
        fetch('https://jdm-automobiles-server.onrender.com/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCartItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="h-screen flex items-center justify-center mt-10 lg:mt-0">
            <div className="card lg:card-side bg-base-100 shadow-xl mx-2">
                <figure><img className="w-[430px] h-full" src={image} alt="car img" /></figure>
                <div className="card-body">
                    <div className="flex-1 space-y-1">
                        <h2 className="card-title text-purple-700 text-2xl">Brand: {brandName}</h2>
                        <h3 className="text-xl ">Model: {carName}</h3>
                        <h3 className="text-xl ">Vehicle Category: {carType}</h3>
                        <span className="flex items-center text-xl"><h3>User rating: {carRating}</h3><IoIosStar className="text-amber-400" /></span>
                        <span className="flex items-center text-xl"><h3>Price: {carPrice}</h3><FaDollarSign className="text-green-600" /></span>
                        <span className="line-clamp-6 text-xl">Highlight: <span className="text-sm">{carDescription}</span></span>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={handleAddToCart} className="btn bg-fuchsia-800 hover:bg-fuchsia-700 text-indigo-50 font-semibold border-none rounded-md"><FaShoppingCart />Add to cart</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default FullDetails;
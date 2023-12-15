import { useLoaderData } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";

const FullDetails = () => {
    const brandDetails = useLoaderData();
    const { _id, image, brandName, carName, carRating, carType, carPrice, carDescription } = brandDetails;
    // console.log(_id, image, brandName, carName, carRating, carType, carPrice, carDescription);
    const handleAddToCart = () =>{
        const newCartItem = {image,brandName,carName, carType,carPrice};
        console.log(newCartItem);
        //adding to cart
        fetch('http://localhost:5000/cart', {
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
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="car img" /></figure>
            <div className="card-body">
                <h2 className="card-title">Brand: {brandName}</h2>
                <h3>Model: {carName}</h3>
                <h3>User rating: {carRating} add star icon</h3>
                <h3>Vehicle Category: {carType}</h3>
                <h3>Price: {carPrice} add dollar icon</h3>
                <h3 className="line-clamp-6">Additional Information: {carDescription}</h3>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToCart} className="btn btn-primary"><FaShoppingCart />Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FullDetails;
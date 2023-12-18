import Swal from "sweetalert2";
import { ImCross } from "react-icons/im";
import { FaDollarSign } from "react-icons/fa";



const CartItem = ({ item, cartItems, setCartItems }) => {
    const { _id, image, brandName, carName, carPrice, carType } = item;

    //try delete implementation
    const handleDelete = _id => {
        console.log('clicked', _id);
        Swal.fire({
            title: "Are you sure?",
            text: "Once deleted cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your added car has been deleted.",
                                icon: "success"
                            })
                            const leftOvers = cartItems.filter(cart => cart._id !== _id);
                            setCartItems(leftOvers);
                        }
                    })
            }
        });
    }

    return (
        <div className="flex justify-center">
            <div className="flex border-2 border-purple-700 rounded-2xl gap-4 mx-2 mb-3">
                <div>
                    <img className="w-[180px] sm:w-[220px] h-[140px] sm:h-[160px] rounded-s-xl" src={image} alt="car image" />
                </div>
                <div className="w-36 text-base sm:text-lg font-semibold">
                    <h1 className="text-purple-700">{brandName}</h1>
                    <h2 className="text-neutral-500">{carName}</h2>
                    <span className="flex items-center text-neutral-500"><p>{carPrice}</p><FaDollarSign className="text-green-600" /></span>
                    <h2 className="text-neutral-500">{carType}</h2>
                </div>
                <div className="flex items-center">
                    <button onClick={() => handleDelete(_id)} className="btn bg-[#db545a] hover:bg-rose-700 rounded-s-none rounded-e-xl text-lg text-white hover:text-black font-normal border-0 h-full"><ImCross /></button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
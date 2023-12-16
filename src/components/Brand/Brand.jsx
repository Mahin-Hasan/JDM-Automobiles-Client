import { FaDollarSign } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { LiaEditSolid } from "react-icons/lia";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";


const Brand = ({ brand }) => {
    

    // console.log(brand);
    const { _id, image, carName, carType, carPrice, carRating } = brand;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img className="w-full h-96" src={image} alt="car img" /></figure>
            <div className="p-10 flex">
                <div className="flex-1">
                    <h2 className="text-3xl font-semibold text-purple-800">{carName}</h2>
                    <p className="text-2xl">Vehicle : {carType}</p>
                    <span className="flex items-center text-2xl"><p>Price: {carPrice}</p><FaDollarSign className="text-green-600" /></span>
                    <span className="flex items-center text-2xl"><p className="">Rating: {carRating}</p> <IoIosStar className="text-amber-400 ms-1" /></span>
                </div>
                <div className="card-actions justify-end">
                    <div className="flex flex-col gap-2">
                        <Link to={`/editBrand/${_id}`}><button className="btn bg-lime-500 hover:bg-lime-700"><LiaEditSolid className="text-2xl text-white" />
                        </button></Link>
                        <Link to={`/fullDetails/${_id}`}><button className="btn bg-amber-500 hover:bg-amber-700"><AiFillEye className="text-2xl text-white" />
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;
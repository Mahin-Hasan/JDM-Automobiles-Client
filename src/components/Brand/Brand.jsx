import { FaRegStar, FaDollarSign } from "react-icons/fa";
import { LiaEditSolid } from "react-icons/lia";
import { AiFillEye } from "react-icons/ai";


const Brand = ({ brand }) => {
    // console.log(brand);
    const { _id, image, carName, carType, carPrice, carRating } = brand;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img className="w-full h-96" src={image} alt="Shoes" /></figure>
            <div className="p-10 flex">
                <div className="flex-1">
                    <h2 className="card-title">{carName}</h2>
                    <p>{carType}</p>
                    <span className="flex items-center text-2xl"> <p>{carPrice}</p><FaDollarSign /></span>
                    <span className="flex items-center text-2xl"><p className="">{carRating}</p> <FaRegStar className="inline" /></span>
                </div>
                <div className="card-actions justify-end">
                    <div className="flex flex-col gap-2">
                        <button className="btn"><LiaEditSolid className="text-2xl text-purple-700" />
                        </button>
                        <button className="btn"><AiFillEye className="text-2xl text-purple-700" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;
import { Link } from "react-router-dom";

const BrandCategory = ({ brand }) => {
    const { id, brand_image, brand_name } = brand;
    return (
        <div className="card p-2 card-side items-center bg-zinc-50 shadow-xl">
            <figure><img className="w-40" src={brand_image} alt="car logo" /></figure>
            <div className="card-body">
                <h2 className="font-bold text-end text-2xl">{brand_name}</h2>
                <div className="card-actions justify-end">
                    <Link to={`brandDetails/${brand_name}`}><button className="btn bg-fuchsia-800 hover:bg-fuchsia-700 text-indigo-50 font-semibold border-none rounded-md">View Products</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BrandCategory;
import { Link } from "react-router-dom";

const BrandCategory = ({ brand }) => {
    const { id, brand_image, brand_name } = brand;
    console.log(brand);
    return (
        <div className="card p-2 card-side items-center bg-base-100 shadow-xl">
            <figure><img className="w-40" src={brand_image} alt="car logo" /></figure>
            <div className="card-body">
                <h2 className="font-bold text-end text-2xl">{brand_name}</h2>
                <div className="card-actions justify-end">
                    <Link to={`brandDetails/${brand_name}`}><button className="btn btn-primary">View Products</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BrandCategory;
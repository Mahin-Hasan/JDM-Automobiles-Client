import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Brand from "../Brand/Brand";

const BrandDetails = () => {
    //const brandInfo = useLoaderData();// for json data
    const { brand_name } = useParams();
    const brandNameLower = brand_name.toLowerCase();

    console.log(brand_name, brandNameLower);

    // use database data and json data to compare and display brand items as per needed
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrands(data));
    }, [])
    console.log(brands);


    return (
        <div className="mx-2">
            <div className="container mx-auto">
            <h2>List of total Products: {brands.length}</h2>
            <h2>This is brand details of {brand_name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    brands.filter((item) => {
                        return brandNameLower === ''
                            ? item
                            : item.brandName.toLowerCase() === brandNameLower;
                    }).map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                }
            </div>
        </div>
        </div>
    );
};

export default BrandDetails;
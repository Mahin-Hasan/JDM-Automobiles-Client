import { useLoaderData } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useState } from "react";

const MyCart = () => {
    const addedItems = useLoaderData();
    //fix state delete issue
    const [cartItems, setCartItems] = useState(addedItems)

    const { image, brandName, carName, carType, carPrice } = addedItems;
    console.log(addedItems);
    return (
        <div>
            <h1>Total added products: {addedItems.length}</h1>
            {
                cartItems.map(item => <CartItem 
                    key={item._id} 
                    item={item}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    ></CartItem>)
            }
        </div>
    );
};

export default MyCart;
import { useLoaderData } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useState } from "react";

const MyCart = () => {
    const addedItems = useLoaderData();
    //fix state delete issue
    const [cartItems, setCartItems] = useState(addedItems)


    return (
        <div>
            <div className="text-center mb-8 text-xl sm:text-2xl capitalize font-mono tracking-tighter">
                <h2>Total added cart items <span className="text-purple-700 font-semibold">{cartItems.length}</span></h2>
            </div>
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
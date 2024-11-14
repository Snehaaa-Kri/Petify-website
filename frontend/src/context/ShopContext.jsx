import React,{createContext, useState, useEffect} from "react";
// import all_product from '../components/assets/all_product'

export const ShopContext = createContext(null);






//logic to create the cart 
const getDefaultCart = () => {
    let cart = {};
    for(let idx =0; idx < 300+1; idx++){
        cart[idx] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {


    // to bring data from db instead of local file
    const [all_product, setAll_Product] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
        .then((Response) => Response.json())
        .then((data) => setAll_Product(data))
    },[])



    const [CartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}));
        console.log(CartItems);
        // alert("Item added successfully");
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}));
    }


    //To calculte the total cart amount - STARTS
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in CartItems){
            if(CartItems[item]>0){
                let itemInfo = all_product.find((product) => product.id===Number(item));
                totalAmount += itemInfo.new_price * CartItems[item];
            }
        }
        return totalAmount;
    }
    
    //To calculte the total cart amount-ENDS

    //CART ITEM COUNT FUNCTION - STARTS
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in CartItems){
            if(CartItems[item]>0){
                totalItem += CartItems[item];
            }
        }
        return totalItem;
    }
    //CART ITEM COUNT FUNCTION - ENDS


    //
    


    const contextValue = {all_product, CartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
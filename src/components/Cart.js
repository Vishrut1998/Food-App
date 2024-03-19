import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems + "Hi cart")
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    //let cart = cartItems.filter((ele,ind) => ind === cartItems.findIndex((elem) => elem.id === ele.id));
    const totalPrice = cartItems.reduce((totalPrice, item) => totalPrice += item.card.info.price,0);

    

    //let total = 0;
    return (
        <div>
            <div className="flex">
            <h1 className="p-2 m-2 font-bold text-3xl">Cart - {cartItems.length} items</h1>
            {/* <h1 className="font-bold text-3xl">Total Amount : {cartItems.map(item => item.card.info.price.array.forEach(element => {
               total += element
            }))}</h1> */}
            <h1 className="p-2 m-2 font-bold text-3xl">Total Amount : {totalPrice/100 + ' ₹'}</h1>
            <button className="bg-green-100 p-2 m-2 top-4" onClick={() => handleClearCart()}>Clear Cart</button>
            </div>
            <div className="flex">{cartItems.map(item =>  <FoodItem key={item.card.info.id} {...item.card.info}/>)}</div>
           
         
        </div>
    )

}

export default Cart;
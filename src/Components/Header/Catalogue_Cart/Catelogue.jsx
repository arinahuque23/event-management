import { useEffect, useState } from "react";


import CartsDisplay from "./CartsDisplay";
import {MdOutlineRemoveShoppingCart} from 'react-icons/md';


const Catelogue = () => {
    const [carts,setCarts] = useState([])

    const [noFound,setNoFound] = useState(false)


    useEffect(()=>{
        const cartItems = JSON.parse(localStorage.getItem("carts"));
        
        if (cartItems) {
            setCarts (cartItems)
        }

        else{
            setNoFound('Here Is No Carts Found  ! ')
        }

    },[])

    const handleRemove = ()=>{
        localStorage.clear()
        setCarts([])
        setNoFound("No Data Found");
    }




    return <div>{ noFound ? <p className="h-[80vh] flex justify-center items-center" >{noFound}</p> 
    : 
    <div>
        {
            carts.length > 0 && <button onClick={handleRemove}  className="px-6 p-2 flex rounded-sm border border-black text-xl font-serif bg-[#F08080] mx-auto gap-1 mt-5" > Remove Carts <MdOutlineRemoveShoppingCart className="mt-1" ></MdOutlineRemoveShoppingCart> </button>
        }

        <div className="grid grid-cols-2 h-[220px] ">
            { carts.map(event => <CartsDisplay key={event.id}  event={event} ></CartsDisplay> ) }
        </div>

    </div>}</div> ;
};

export default Catelogue;
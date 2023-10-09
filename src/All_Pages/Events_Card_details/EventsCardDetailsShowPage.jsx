/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import swal from 'sweetalert';



const EventsCardDetailsShowPage = ({event}) => {
    const {id,title,picture,price,rating,description } = event ||{}
    
    const handleEventToCarts =()=>{

        const addedEventsArray = [];

        const cartItems = JSON.parse(localStorage.getItem('carts'))

        if(!cartItems) {
            addedEventsArray.push(event)
            localStorage.setItem('carts',JSON.stringify([event]))
            swal("Good job!", "Thanks For Adding Items Successfully !", "success")
        }

        else {

            const isExits = cartItems.find(event => event.id == id)

            if(!isExits){
                addedEventsArray.push(cartItems,event)
                localStorage.setItem('carts',JSON.stringify([...cartItems,event]))
                swal("Good job!", " Thanks For Adding Items Successfully ! ", "success")


            }

            else {

                swal("No Duplicates Allow !", "This Items Already Add to Carts , Please Check ! ", "error")
                
            }

          }


    };

    return (
        <div  className="mt-[100px] pl-[200px] pr-[200px] mb-[100px]  "  >
           
           <div className="card lg:card-side bg-base-100 border border-black shadow-xl pl-4" style={{backgroundImage: 'url(https://i.ibb.co/vcTwW3w/1.jpg)'}}>
  <figure><img className="h-[270px]  mt-4 mb-4 border border-gray-300 w-[600px]" src={picture} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl pl-6 ">{title}</h2>
    <p className="pl-6 text-xl font-mono"> Low Price : {price} BDT</p>
    <h2 className="pl-6 pr-6 font-medium ">
        {description}
    </h2>
    <div className="card-actions justify-end pt-4">
      <button onClick={handleEventToCarts} className="btn text-black border-none hover:bg-[#e87c5a] bg-[#e8bfb3]">Add To Cart</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default EventsCardDetailsShowPage;
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const CartsDisplay = ({event}) => {
    const {id,title,picture,price,rating,description } = event || {};


    return (
        <div  className=" "  >
           
           <div className="card w-[500px] h-[450px] mt-10 ml-[120px] mb-10 bg-base-100 shadow-xl">
 
           <figure><img src={picture} alt="" /></figure>
            <div className="card-body">
             <h2 className="card-title">Shoes!</h2>
           <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
       </div>
      </div>
            </div>

     </div>
    );
};

export default CartsDisplay;
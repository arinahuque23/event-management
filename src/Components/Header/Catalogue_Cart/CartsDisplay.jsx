/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const CartsDisplay = ({event}) => {
    const {id,title,picture,price,rating,description } = event || {};


    return (
        <div  className=" "  >
           
           <div className="card w-[500px] h-[450px] mt-10 ml-[120px] mb-10 bg-base-100 shadow-xl">
 
           <figure><img src={picture} alt="" /></figure>
            <div className="card-body">
             <h2 className="card-title">{title}</h2>
           <p> Low Price : {price}</p>
           <p> Ratings : {rating}</p>
              
      </div>
            </div>

     </div>
    );
};

export default CartsDisplay;
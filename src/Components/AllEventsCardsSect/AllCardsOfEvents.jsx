/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { FcViewDetails } from 'react-icons/fc'
import { AiFillEye } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const AllCardsOfEvents = ({ event }) => {

    const {id,title,picture,price,rating,description } = event ||{}


    return (
        <div>

             <div style={{backgroundImage: 'url(https://i.ibb.co/TgHQZ2S/Minimalist-Aesthetic-Beauty-Line-Art-Video-Logo.jpg)'}}  className="card  w-96 shadow-lg border border-gray-400 h-[380px]">
                    <figure className="px-10 pt-10">
                         <img src={picture} alt="Shoes" className="rounded-xl" />
                    </figure>
                <div className="card-body items-center text-center">
                     <h2 className="card-title">  </h2>
                     <p className='text-xl font-serif' >{title}</p>
                     <p className='font-mono'> Low Price : {price} BDT </p>
                        <div className="card-actions">
                            <Link to={`/events/${id}`}>
                            <button className="btn bg-[#f8bb66] "> <FcViewDetails  ></FcViewDetails> Details </button>
                            </Link>
                             <button className="btn bg-[#ee9e86] "> <AiFillEye></AiFillEye> Preview </button>
                         </div>
                </div>
            </div>
            
        </div>
    );
};

export default AllCardsOfEvents;
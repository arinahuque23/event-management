/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../Components/Header/Footer/Footer";
import EventsCardDetailsShowPage from "./EventsCardDetailsShowPage";


const EventsCardsDetails = () => {
    const [event,setEvent] = useState({});

    const {id} = useParams();
   
    
    const events = useLoaderData();
    


    useEffect(()=> {
        const findEvent = events?.find(event =>event.id == id);
        setEvent(findEvent);

        console.log(findEvent);

    },[ id, events ]);



    return (
        <div>
         <EventsCardDetailsShowPage  event={event}  ></EventsCardDetailsShowPage>
        <Footer></Footer>
        </div>
    );
};

export default EventsCardsDetails;
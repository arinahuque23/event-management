/* eslint-disable react/prop-types */
import AllCardsOfEvents from "./AllCardsOfEvents";


const AllEventsCard = ({events}) => {

    console.log(events);



    return (
        <div className="py-10">
            <h2 className=" text-2xl hover:text-orange-300 text-center">All Events Sections</h2>

                <div className="grid gap-9  py-12 pl-16 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

                    {
                        events?.map(event => <AllCardsOfEvents key={event.id} event={event} ></AllCardsOfEvents> )
                    }

                </div>


        </div>
    );
};

export default AllEventsCard;
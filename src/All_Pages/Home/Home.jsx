import { useLoaderData } from "react-router-dom";
import AllEventsCard from "../../Components/AllEventsCardsSect/AllEventsCard";
import Banner from "../../Components/Header/Banner/Banner";
import Footer from "../../Components/Header/Footer/Footer";
import TeamMember from "../../Components/Header/ForAosTeam/TeamMember";
import TestiMonial from "../../Components/TestiMonial/TestiMonial";


const Home = () => {

    const events = useLoaderData()
    console.log(events);


    return (
        <div>
            
          <Banner></Banner>
          <AllEventsCard events={events} ></AllEventsCard>
          <TeamMember></TeamMember>
          <TestiMonial></TestiMonial>
          <Footer></Footer>
        </div>
    );
};

export default Home;<h3>home</h3>
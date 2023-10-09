import Footer from "../Footer/Footer";


const EventCordinator = () => {
    return (
        <div>
        <div className="bg-base-100 pr-[200px] pl-[200px] ">
           <h2 className="text-3xl text-center text-red-300 hover:text-orange-600 mt-10">EVENT COORDINATOR</h2>

           <p className="text-xl font-mono mt-6 text-blue-500">Save yourself a lot of time and stress by hiring our trusted and professional event coordinator who will ensure that your event takes place without any hindrance. Our event coordinator will take on the task of</p> <br />
            <h2 className="text-2xl font-semibold hover:text-red-200">Creating a checklist according to your plans</h2><br />
            <h2 className="text-2xl font-semibold hover:text-red-200">Checking up with service providers on a regular basis</h2><br />
            <h2 className="text-2xl font-semibold hover:text-red-200">Making sure your plan is being executed</h2><br />
            <h2 className="text-2xl font-semibold hover:text-red-200">Ensuring deadlines of services are met</h2><br /> 
            <h2 className="text-2xl font-semibold hover:text-red-200">Effective organizing of decoration, catering, seating arrangement etc.</h2><br />
            <p className="text-xl font-serif mt-6 hover:text-red-200">More than often it has been the case that on the day of the wedding, 
                the father, son or a relative cannot be found as they have to run 
                around and make sure all the guests have been served food or whether
                the catering service has been started in due time. This takes out a lot of time and makes them
                unable to enjoy the event itself, like socializing with guests or being in photographs with the 
                bride and groom a time that is better spent on something more useful. This is where our event coordinator steps
                 in and takes on these responsibilities ensuring that you have a stress free event.</p>
            
        
        </div>
        <div className="mt-3">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default EventCordinator;
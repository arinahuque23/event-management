import Navbar from "../../Components/Header/Navbar/Navbar";
import {BiError} from 'react-icons/bi'



const ErrorPage = () => {
    return (
        <div className=" justify-center items-center  " >
            <Navbar></Navbar> 
            
            <div className="toast toast-top toast-center  pt-[300px]">
  <div className="alert alert-info flex ">
    <p className="p-6 pl-8 text-2xl text-red-900">
    <BiError className="w-[200px]" >
    </BiError>
    OMG this is disaster 
    
    </p>
    
    
  </div>
  
</div>
            
        </div>
    );
};

export default ErrorPage;
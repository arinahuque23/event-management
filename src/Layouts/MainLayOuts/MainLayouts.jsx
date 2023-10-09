import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar/Navbar";


const MainLayouts = () => {
    return (
        <div className="max-w[1300px] mx-auto">
            <Navbar></Navbar>
            
           <div className="py-6">
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLayouts;<h2>main layouts</h2>
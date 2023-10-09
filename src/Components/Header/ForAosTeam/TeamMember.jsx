import {BsInstagram} from 'react-icons/bs'
import {BiLogoLinkedinSquare} from 'react-icons/bi'
import {FaFacebook, FaGithub} from 'react-icons/fa'

const TeamMember = () => {
    return (
        <div className="mb-4">
            <h4 className=' justify-center text-2xl mb-8 underline font-bold hover:text-orange-200 text-center'>Our Team Member</h4>
           <div className="grid grid-cols-2 gap-6 ml-[70px]">
                 {/*for team or fade design */}
            <div data-aos="fade-right" className="ml-10 ">
            <div className="card card-side bg-base-200 border border-black h-[300px] w-[500px]  shadow-xl">
        <figure className="pl-3"><img className="h-[200px] w-[250px] border " src="https://i.ibb.co/L1Fwwph/1200x1800-Landscape-Sample.jpg" alt="Movie"/></figure>
         <div className="card-body mt-[70px]">
         <h2 className="card-title text-blue-500">Arina Huque</h2>
         <h2 className="card-title text-blue-500">Creative Leader</h2>
         <div className='flex' >
         <p > <BsInstagram ></BsInstagram> </p>
         <p><BiLogoLinkedinSquare></BiLogoLinkedinSquare></p>
         <p><FaFacebook></FaFacebook></p>
         <p> <FaGithub></FaGithub> </p>

         </div>
        
       
           
        </div>
        </div>
            </div>
            {/*2nd card */}
            <div>
            <div data-aos="fade-left" className="ml-7 mt-[300px]">
            <div className="card card-side bg-base-200 border border-black h-[300px] w-[500px]  shadow-xl">
        <figure className="pl-3"><img className="h-[200px] w-[250px] border " src="https://i.ibb.co/4YrhJ4W/Pixelstudioproductions-com-5.jpg" alt="Movie"/></figure>
         <div className="card-body  mt-[70px]">
         <h2 className="card-title text-blue-500">Anika Mahmud</h2>
         <h2 className="card-title text-blue-500">Manager</h2>
         <div className='flex' >
         <p > <BsInstagram></BsInstagram> </p>
         <p><BiLogoLinkedinSquare></BiLogoLinkedinSquare></p>
         <p><FaFacebook></FaFacebook></p>
         <p> <FaGithub></FaGithub> </p>

         </div>
            
        </div>
        </div>
            </div>
            </div>
            {/*----3rd card--- */}
            <div>
            <div data-aos="fade-up-right" className="ml-7 mt-[200px]">
            <div className="card card-side bg-base-200 border border-black h-[300px] w-[500px]  shadow-xl">
        <figure className="pl-3"><img className="h-[200px] w-[250px] border " src="https://i.ibb.co/Bn1Xp7S/photo-1613.jpg" alt="Movie"/></figure>
         <div className="card-body">
         <h2 className="card-title text-blue-500 mt-[70px]">Mahrab Khan</h2>
         <h2 className="card-title text-blue-500">Sales Manager</h2>
         <div className='flex' >
         <p > <BsInstagram></BsInstagram> </p>
         <p><BiLogoLinkedinSquare></BiLogoLinkedinSquare></p>
         <p><FaFacebook></FaFacebook></p>
         <p> <FaGithub></FaGithub> </p>

         </div>
            
        </div>
        </div>
            </div>
            </div>
            {/*-----4rth cards---*/}
            <div>
            <div data-aos="fade-up-left" className="ml-7 mt-[350px]">
            <div className="card card-side border border-black h-[300px] w-[500px] bg-base-200 shadow-xl">
        <figure className="pl-3"><img className="h-[200px] w-[250px] border " src="https://i.ibb.co/L1Fwwph/1200x1800-Landscape-Sample.jpg" alt="Movie"/></figure>
         <div className="card-body mt-[70px]">
         <h2 className="card-title text-blue-500 ">Bushra Hossain</h2>
         <h2 className="card-title text-blue-500">Advertising Manager</h2>
         <div className='flex' >
         <p > <BsInstagram></BsInstagram> </p>
         <p><BiLogoLinkedinSquare></BiLogoLinkedinSquare></p>
         <p><FaFacebook></FaFacebook></p>
         <p> <FaGithub></FaGithub> </p>

         </div>
            
        </div>
        </div>
            </div>
            </div>
           </div>
        </div>
    );
};

export default TeamMember;
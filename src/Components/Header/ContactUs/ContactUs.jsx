import Footer from "../Footer/Footer";


const ContactUs = () => {
    return (
        <div>
            <div className="justify-center items-center  pl-[670px] text-center   ">
            <h2 className="text-2xl mt-[50px] p-3 rounded-lg  absolute bg-gray-300">Contact Us</h2>
            </div>
             
            
            <div className="hero min-h-screen ">
            
                
             <div className="hero-content  ">
            
   
            <div className="card  w-full max-w-sm shadow-2xl bg-base-50">
             <form className="card-body ">
              <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Number</span>
          </label>
          <input type="text" placeholder="number" className="input input-bordered"  />
        </div>
        
        <div>
        <textarea className="textarea textarea-success w-[220px] " placeholder="massage"></textarea>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default ContactUs;
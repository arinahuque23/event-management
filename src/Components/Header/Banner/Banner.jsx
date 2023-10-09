

const Banner = () => {
    return (
        <div className="">
            
            <div className="hero  h-[70vh] " style={{backgroundImage: 'url(https://i.ibb.co/VVgSmjt/Beige-Rustic-Flower-Floral-Watercolor-Save-The-Date-Wedding-Banner.png)'}}>
               
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl hover:text-pink-300 font-bold">Hello <span className="text-orange-400">Guys</span></h1>
      <p className="mb-5 text-4xl hover:text-green-200">Be Creative With Us</p>
      
      {/*for seacrh input*/}
      <div className="form-control pr-8 pl-[50px] pb-4">
          <div className="input-group">
             <input type="text" placeholder="Search…" className="input input-bordered" />
           <button className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
           </button>
         </div>
        </div>

     
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
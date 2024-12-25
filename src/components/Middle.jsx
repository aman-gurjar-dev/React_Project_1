const Middle=()=>{
    return(
    <>
    <div className="flex max-w-[1125px] max-h-[613px] m-auto justify-center mt-10">
        <div >
        <div className=" font-bold text-8xl ">
          <h1>YOUR FEET</h1>
          <h1>DESERVE </h1>
          <h1>THE BEST</h1>
        </div>
        <div className="py-4">
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES.</p>
        </div>
        <div>
             <button className=" bg-red-600 rounded-md text-white mr-4 py-1 px-4">Shop now</button>
        
         <button className=" border-2 border-black rounded-md ml-2 py-1 px-4">catagory</button>
         </div>

        <div className="my-4"><p>also available on </p></div>

        <div className="flex my-4">
          <img src="/Images/amazon.png" alt="Amazon" className="mr-3" />
          <img src="/Images/flipkart.png" alt=" Flipcart" />
        </div>

        
        </div >
        <div className=" mx-5">
          <img src="/Images/shoe_image.png" alt="Shoe" />
        </div>
      </div>
    </>
    )
}
export default Middle;
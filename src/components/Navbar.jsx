const Navbar=()=>{
    return(
        <>
        <nav className="flex justify-between py-5 max-w-[1280px] m-auto max-h-[72px]">
        <span>
          <img src="/Images/brand_logo.png" alt="LOGO" />
        </span>
        <ul className=" flex">
          <li className=" px-2">
            
            <a href="">MENU</a>
          </li>
          <li className=" px-2">
            <a href="">LOCATION</a>
          </li>
          <li className=" px-2">
            <a href="">ABOUT</a>
          </li>
          <li className=" px-2">
            <a href="">CONTACT</a>
          </li>
        </ul>

        <span className=" bg-red-600 rounded-md text-white py-1 px-4">
          <input type="button" value="Login" className=" px-5" />
        </span>
      </nav>
      </>
    )
}
export default Navbar
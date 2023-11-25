// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav>
//       <div className="flex justify-between z-50 lg:py-5 px-6 lg:px-20 py-4">
//         <Link to="/">
//           <div className="flex items-center flex-1">
//             <span className="">
//               <img className="" src="/logo.png" alt="" />
//             </span>
//           </div>
//         </Link>
//         <div className="lg:flex md:flex lg:flex-1  font-bold hidden">
//           <div className="flex-10">
//             <ul className="flex gap-8 mr-6 text-[18px]">
//               <Link to="Solutions">
//                 <li className="">Solutions</li>
//               </Link>
//               <Link to="Features">
//                 <li className="">Features</li>
//               </Link>
//               <Link to="Blogs">
//                 <li className="">Blogs</li>
//               </Link>
//               <Link to="About">
//                 <li className="">About</li>
//               </Link>
//               <Link to="Contact">
//                 <li className="">Contact</li>
//               </Link>
//               <button
//                 type="button"
//                 className="border-[1.5px] text-[#0076CE] font-bold rounded-[10px] text-sm px-5 py-2.5 mr-2 mb-2 dark:hover:text-[#0076CE] dark:hover:ring-[#0076CE] ring-blue-500 ring-[1.5px] focus:outline-none"
//               >
//                 Login
//               </button>
//               <button
//                 type="button"
//                 className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 focus:outline-none"
//               >
//                 Register
//               </button>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between z-50 lg:py-5 px-6 lg:px-20 py-4">
        <Link to="/">
          <div className="flex items-center flex-1">
            <span className="">
              <img className="" src="/logo.png" alt="" />
            </span>
          </div>
        </Link>
        {/* <div className="lg:flex md:flex lg:flex-1  font-bold hidden"> */}
          {/* <div className="flex-10"> */}
            <ul className="flex gap-8 mr-6 text-[18px]">
              <Link to="Solutions">
                <li className="">Solutions</li>
              </Link>
              <Link to="Features">
                <li className="">Features</li>
              </Link>
              <Link to="Blogs">
                <li className="">Blogs</li>
              </Link>
              <Link to="About">
                <li className="">About</li>
              </Link>
              <Link to="Contact">
                <li className="">Contact</li>
              </Link>
            </ul>
          {/* </div> */}
        {/* // </div> */}

              <div className="flex items-center justify-end">
              <button
                type="button"
                className="border-[1.5px] text-[#0076CE] font-bold rounded-[10px] text-sm px-5 py-2.5 mr-2 mb-2 dark:hover:text-[#0076CE] dark:hover:ring-[#0076CE] ring-blue-500 ring-[1.5px] focus:outline-none"
              >
                Login
              </button>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 focus:outline-none"
              >
                Register
              </button>
              </div>
      </div>
    </nav>
  );
};

export default Navbar;







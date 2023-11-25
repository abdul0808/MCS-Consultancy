import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar";
import { useState } from "react";
import { SearchResult } from "../SearchResult";
import Navbar from "../nav/Navbar";

const LandingPage = () => {
    const content = <>
      <div>LandingPage</div>
    </>
    const [results, setResults] = useState([]);
    const [profiles, setProfiles] = useState([]);


  return (
    <>
    {/* main div */}
    <div className="" style={{background:"linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)"}}>

       <Navbar />
      {/* left+right */}
       <div className="flex flex-row grad h-[493px] w-[1536]">

        {/* left */}
        <div className=" flex flex-col h-[883px] " >
        <p className="text-black-900 font-bold text-[65px] leading-[80px] px-[120px] pt-[130px] ">Find 
        <span className="px-2 bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text">Partners</span>
        <span className="px-2">(CAs)</span>
        <p>available online</p>
        </p>

        <p className="text-[#616161] text-xl font-bold px-[120px] pt-[15px] leading-[30px] ">CONNECT
        
            <span className="text-[#616161] font-normal text-xl px-[4px] pt-[10px] leading-[30px]">with us where your services are listed and visible to a myriad</span>
        </p>
            <p className="text-[#616161] font-normal text-xl px-[120px] pb-[10px] leading-[30px]">of businesses seeking CA's for compliance support</p>
       <div>  
          <SearchBar setResults={setResults} />
          <SearchResult results={results} />
       </div>  
        </div>


        {/* right */}
        <div className="flex flex-row pr-[40px]">
            <div className="pt-[150px] px-[10px]">
               <span className="px-[10px]">
                <img className="h-[403px] w-[198.7px]" src="./Picture3.png" alt="" />
               </span>
             </div>
            <div className="pt-[100px] px-[10px]">
               <span className="px-[10px] ">
                <img className="h-[403px]" src="./Picture1.png" alt="" />
               </span>
             </div>
            <div className="pt-[120px] px-[10px]">
               <span className="px-[10px] ">
                <img className="h-[403px]" src="./Picture2.png" alt="" />
               </span>
             </div>
        </div>

     </div>
     <div className="w-full" style={{backgroundImage: "url(./homeBTM.svg)", height:"210px", width:"100%", backgroundRepeat:"no-repeat"}}></div>
    </div>
    </>
  )
}

export default LandingPage;


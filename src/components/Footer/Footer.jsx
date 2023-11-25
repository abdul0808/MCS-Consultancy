import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const content = <>

    </>

    return (
        <>
        <div className="h-[341]">
        <div className=" py-[41px] px-[127px] " 
         style={{background:"linear-gradient(96deg, #0076CE -7.82%, #9400D3 143.96%)"}}>

         <div className="flex justify-between text-[#FFF]">
            <div className="">
                <img className="h-[45px] w-[138px] " src="/footerLogo.png" alt="" />

                <div className="w-[272px] text-[14px] not-italic font-normal leading-[22px] py-[15px]">
                    <p></p>India's first platform dedicated to<p/>
                    <p></p> simplifying partner search<p/>
                </div>
            </div>

            <div className="">
            <div className="text-[14px] not-italic font-bold leading-normal">COMPANY</div>
            <div>About</div>
            <div>Pricing</div>
            <div>Careers</div>
            </div>

            <div>
            <div className="text-[14px] not-italic leading-normal font-bold">SOLUTIONS</div>
            <div>Search</div>
            <div>Connect</div>
            <div>Research</div>
            <div>Academy</div>
            </div>

            <div>
            <div className="text-[14px] not-italic leading-normalfont-bold">RESOURCES</div>
            <div>Blogs</div>
            <div>Forms</div>
            </div>

            <div>
            <div className="text-[14px] not-italic leading-normal font-bold">SUPPORT</div>
            <div>Help</div>
            <div>Contact Us</div>
            </div>

            <div>
            <div className="text-[14px] not-italic leading-normal font-bold">LEGAL</div>
            <div>Privacy</div>
            <div>Terms</div>
            <div>Accessibility</div>
            </div>

        </div>
      
        <div className="py-5">
            <img src="/FooterLine.svg" className="" alt="" />
        </div>

        <div className="flex justify-between">
            <div className="text-white">Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</div>

            <div className="flex">
                <div className=" h-[24px] w-[24px] mx-[24px]">
                    <img src="/fb.svg" alt="" />
                </div>
                <div className=" h-[24px] w-[24px] mx-[24px]">
                    <img src="/insta.svg" alt="" />
                </div>
                <div className=" h-[24px] w-[24px] mx-[24px]">
                    <img src="/linkedin.svg" alt="" />
                </div>
               <Link> <div to="google.com" className=" h-[24px] w-[24px] mx-[24px]">
                    <img src="/whatsapp.svg" alt="" />
                </div> </Link>
            </div>
        </div>

     </div>

      <div className="h-[57px] bg-[#000] text-[#FFF] text-center py-5">
      Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved
      </div>      
    
      </div>
        </>
    )
}

export default Footer;
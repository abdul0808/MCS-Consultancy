import React, { useEffect, useState } from "react";
import Homepage from "../nav/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";

export const Article = () =>{

    const [articleData, setArticleData] = useState(null);
    const {id} = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://client-data-jar8.onrender.com/partners/${id}`);
            const data = await response.json();
            setArticleData(data);
          } catch (error) {
            console.error('Error fetching data:', error);
            // Set an error state if needed
            <div>No Data Available</div>
          }
        };
      
        fetchData();
      }, [id]);

    if (!articleData) {
        return <div className="bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text h-[500px] font-bold text-[50px] flex items-center justify-center">Loading...</div>;
      }
   
    
return (
    <>
    <Homepage />
        
       <div className="w-full" >
        <div className="flex py-[80px] px-[127px] justify-between h-[1258px] w-full ">
            <div className=" w-[515px] h-[960px]">
                <div className="py-[16px] text-[35px] font-bold leading-normal not-italic text-[#000]" >
                   {articleData.name}
                </div>
                <div className="w-[515px] py-[16px] text-[20px] font-normal leading-[32px] text-[#000] not-italic">
                {articleData.intro}
                </div>

                <div className="py-[16px] flex">
                   <div> <img src="/star.svg" alt="" /> </div>
                    <span className="text-[20px] font-bold leading-normal text-[#0076CE]">
                    
                    {articleData.rating}
                    </span>
                    <span className="text-[20px] font-normal leading-normal text-[#000]">
                    
                    ({articleData.reviewCount})
                    </span>
                </div>

                <div className=" h-[216px] w-[515px] rounded-[20px] my-[16px]" style={{boxShadow: "2px 4px 15px 0px rgba(133, 133, 167, 0.25)"}}>
                    <div className="flex justify-between pl-[27px]">
                        <div>
                            <p className="py-[28px] font-normal text-[20px] text-[#000]">
                            
                            {articleData.taskComplexity}
                            </p>
                        </div>
                        <div>
                            <p className="font-bold text-[#000] text-[24px] leading-normal py-[28px] pr-[23px]">
                           
                            {articleData.price}
                            </p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="pt-[10px] pl-[27px] pr-[10px]">
                            <img className="h-[24px] w-[24px]" src="/calender.svg" alt="" />
                        </div>
                        <div>
                        <p className="pt-[4px] w-[422px] font-normal leading-[32px] text-[20px]">
                        
                        {articleData.deliveryTime}
                        </p>
                        </div>
                    </div>

                    <div className="flex pl-[27px] py-[23px]">
                        <div className="bg-[#0076CE] rounded-[10px] py-[10px] px-[20px] justify-center text-center w-[220px] text-white font-bold dark:hover:bg-blue-800">
                        <input type="button" value="Request Proposal" />
                        </div>
                        <div className="pl-[25px]">
                            <div className="py-[10px] px-[20px] text-center w-[220px] ring-[1.5px] dark:hover:ring-blue-800 text-[#0076CE] font-bold rounded-[10px] ring-[#0076CE] dark:hover:text-blue-800">
                               <input type="button" value="Chat with me" />
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="w-[515px] rounded-[20px] h-[412px] my-[32px]" style={{boxShadow: "2px 4px 15px 0px rgba(133, 133, 167, 0.25)"}}>
                    <div className="font-bold w-[463px] text-[35px] not-italic leading-normal pl-[29px] pr-[23px] pt-[28px] pb-[16px]">
                        <p>What people say?</p>
                    </div>
                    <div className="w-[463px] text-[20px] not-italic font-normal leading-[32px] pl-[29px] pr-[23px] pb-[91px]">
                        <p>
                        
                           {articleData.testimonial.text}
                           </p>
                    </div>
                </div>

            </div>

            <div className="w-[733px] pl-[33px]">
               <div>
                <img className="h-[412px] w-[733px] rounded-[20px]" src={articleData.image} alt=""/> 
               
                <div className="text-[35px] font-bold leading-normal text-[#000] pt-[32px] pb-[22px]">About {articleData.name}</div>
               </div> 

               <div className="flex justify-between">
                <div className="">
                    <p className="text-[#999] text-[16px] font-bold not-italic leading-[34px]">FROM</p>
                    <p className=" text-[20px] font-normal leading-[34px]">
                    
                    {articleData.about.from}
                    </p>
                </div>
                <div className="">
                    <p className=" text-[16px] font-bold not-italic leading-[34px] text-[#999]">PARTNER SINCE</p>
                    <p className=" text-[20px] font-normal leading-[34px]">
                   
                    {articleData.about.partnerSince}
                    </p>
                </div>
                <div className="">
                    <p className="font-bold text-[#999] not-italic leading-[34px] text-[16px] not-italic">AVERAGE RESPONSE TIME</p>
                    <p className=" text-[20px] font-normal leading-[34px]">
                   
                    {articleData.about.averageResponseTime}
                    </p>
                </div>
               </div>

               <div className="text-[#999] text-[16px] font-bold not-italic leading-[34px] pt-[32px]">
                <p>ABOUT</p>
               </div>

               <div className="text-[20px] font-normal leading-[34px] text-[#000] not-italic pb-[32px]">
                <p>
                
                 {articleData.about.description}
                 </p>
               </div>

               <div className="flex justify-between pb-[132px]">
                <div className="">
                    <p className=" text-[#999] text-[16px] font-bold leading-[34px]">SERVICES | OFFER</p>
                    <div className=" text-[20px] font-normal leading-[36px] text-[#000] not-italic">
                        {articleData.about.services.map((service, index) =>(
                            <div key={index}>
                               <li>
                               {service}
                               </li> 
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="">
                    <p className=" text-[#999] text-[16px] font-bold leading-[34px]">WHY ME</p>
                    <div className=" text-[20px] font-normal leading-[36px] text-[#000] not-italic">
                       {articleData.about.benefits.map((benefit, index) =>(
                        <div key={index}>
                         <li>
                          {benefit}
                         </li>
                        </div>
                       ))}
                    </div>
                </div>
               </div>

            </div>

        </div>

        <div className="px-[127px] py-[32px]">
            <p className="font-bold text-[#000] text-[50px]">Recommended for you</p>

            <div className="flex pb-[132px] pt-[32px] ">
            
            <div className="w-[405px] h-[477px] rounded-[20px] mr-[32px]"  style={{boxShadow: "2px 4px 15px 0px rgba(133, 133, 167, 0.25)"}}>
                <div className="h-[244px] rounded-[20px]">
                    <img src="/article.png"  alt="" />
                </div>
                    <div className="flex justify-between pb-[5px]">
                        <p className="font-bold pl-[23px] text-[20px] leading-normal text-[#000]" >Michael Jackson</p>
                        <p className="font-bold pr-[17px] text-[20px] leading-normal text-[#000]">₹4,370</p>
                    </div>
                <div className="w-[365px] text-[16px] text-[#000] font-normal leading-normal pl-[23px] pb-[13px]">
                    <p>I will do business evaluation and corporate services</p>
                </div>
                <div className="py-[16px] flex pl-[21px] ">
                   <div> <img src="/star.svg" alt="" /> </div>
                    <span className="text-[20px] font-bold leading-normal text-[#0076CE]">4.8</span>
                    <span className="text-[20px] font-normal leading-normal text-[#000]">(89)</span>
                </div>
                <div className="mx-[21px] text-center rounded-[10px] bg-[#0076CE] hover:bg-blue-900 text-white text-[16px] font-bold leading-[26px]">
                    <button className=" py-[10px] px-[20px]">View Services</button>
                </div>
            </div>

            <div className="w-[405px] h-[477px] rounded-[20px] mr-[32px]"  style={{boxShadow: "2px 4px 15px 0px rgba(133, 133, 167, 0.25)"}}>
                <div className="h-[244px] rounded-[20px]">
                    <img src="/article.png" alt="" />
                </div>
                    <div className="flex justify-between pb-[5px]">
                        <p className="font-bold pl-[23px] text-[20px] leading-normal text-[#000]" >Stevie Wonder</p>
                        <p className="font-bold pr-[17px] text-[20px] leading-normal text-[#000]">₹4,263</p>
                    </div>
                <div className="w-[365px] text-[16px] text-[#000] font-normal leading-normal pl-[23px] pb-[13px]">
                    <p>I will do business evaluation and corporate services</p>
                </div>
                <div className="py-[16px] flex pl-[21px] ">
                   <div> <img src="/star.svg" alt="" /> </div>
                    <span className="text-[20px] font-bold leading-normal text-[#0076CE]">5.0</span>
                    <span className="text-[20px] font-normal leading-normal text-[#000]">(62)</span>
                </div>
                <div className="mx-[21px] text-center rounded-[10px] bg-[#0076CE] hover:bg-blue-900 text-white text-[16px] font-bold leading-[26px]">
                    <button className=" py-[10px] px-[20px]">View Services</button>
                </div>
            </div>

            <div className="w-[405px] h-[477px] rounded-[20px] mr-[32px]"  style={{boxShadow: "2px 4px 15px 0px rgba(133, 133, 167, 0.25)"}}>
                <div className="h-[244px] rounded-[20px]">
                    <img src="/article.png" alt="" />
                </div>
                    <div className="flex justify-between pb-[5px]">
                        <p className="font-bold pl-[23px] text-[20px] leading-normal text-[#000]" >Ray Charles</p>
                        <p className="font-bold pr-[17px] text-[20px] leading-normal text-[#000]">₹2,586</p>
                    </div>
                <div className="w-[365px] text-[16px] text-[#000] font-normal leading-normal pl-[23px] pb-[13px]">
                    <p>I will do business evaluation and corporate services</p>
                </div>
                <div className="py-[16px] flex pl-[21px] ">
                   <div> <img src="/star.svg" alt="" /> </div>
                    <span className="text-[20px] font-bold leading-normal text-[#0076CE]">4.3</span>
                    <span className="text-[20px] font-normal leading-normal text-[#000]">(189)</span>
                </div>
                <div className="mx-[21px] text-center rounded-[10px] bg-[#0076CE] hover:bg-blue-900 text-white text-[16px] font-bold leading-[26px]">
                    <button className=" py-[10px] px-[20px]">View Services</button>
                </div>
            </div>
            </div>

        </div>
        
     </div>
    
        <Footer />
        </>
   
 
)
  }
export default Article;

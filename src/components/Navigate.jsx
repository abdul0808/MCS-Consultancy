import React from 'react'
import { useEffect, useState } from 'react';
import Article from './Article/Article';
import { NavLink } from 'react-router-dom';
// export const Navigate = () => {


  export const Navigate = () => {
    
        
        
        return (
          <>
          <div>
              <div className='h-96  flex items-center justify-center bg-gradient-to-r from-[#0076CE] to-[#9400D3]'>
                <div className='text-[120px] text-black font-bold'> Hello World</div>
              </div>

              <div>
                <div className='h-96 flex items-center justify-center' style={{background:"linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)", filter:"blur(2px)"}}>
                  <h1 className=' text-[120px] font-normal'>Abdul Rahman Yahiya</h1>
                </div>
              </div>

              <div className="-z-50 h-96 sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex items-center justify-center" style={{ background: "linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)", filter: "blur(2px)" }}>
                <div className="">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal">
                    Abdul Rahman Yahiya
                  </h1>
                </div>
              </div>

              <div className="h-96 sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] relative overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)",
                  filter: "blur(250px)", // Adjust the blur intensity as needed
                }}
              />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal z-10 text-black">
                      Abdul Rahman Yahiya
                    </h1>
                  </div>

                  <div>
                    <img className='w-full' src="/join.svg" alt=""  />
                  </div>
            </div>
                  <div className='h-[500px] w-[100%] text-[200px] bg-blue-200' 
                  >Hello
                  <div className=''style={{background: "linear-gradient(180deg, #FAFBFC 11.67%, rgba(250, 251, 252, 0.08) 100%)"}}>
                    <h1>hi</h1>
                  </div>
                  </div>





          </div>
          
          </>

        )
      };
      // }
      


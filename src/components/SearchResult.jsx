import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Article from './Article/Article';

export const SearchResult = ({ results }) => {
 
      
  return (
   <>
    {
      results && results.map((result) => {
       return <NavLink to={{pathname: `/article/${result.id}`, state: { ...result } }} className='ml-[120px] text-center w-[484px] bg-white rounded-[5px] text-[#AEB0B4] font-[600] flex flex-col shadow-md max-h-[200px] overflow-y-auto'>
             <div className='py-[7px] text-[20px] hover:bg-[#efefef]' 
            key={result.id}
            >
            {result.name}
            
            </div>
    </NavLink>
        })
        }
        </>
  )
}

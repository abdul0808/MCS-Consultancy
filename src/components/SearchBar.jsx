import React, {useState} from 'react'
import { Link } from "react-router-dom";

export const SearchBar = ({setResults}) => {

    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://client-data-jar8.onrender.com/partners")
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((partner) => {
                return (
                    value &&
                    // partner && 
                    // partner.name &&
                    //  partner.id &&
                    // partner.intro &&
                    // partner.rating && partner.reviewCount && partner.taskComplexity &&
                    // partner.price &&
                    partner.name.toLowerCase().includes(value)
                );
            });
            setResults(results);
            // console.log(results)
        });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

  return (
    <div className='input-wrapper'>
    
    <div className="flex-col pl-[120px] pt-[20px]">
                <input className="h-[73px] w-[484px] rounded-[10px] outline outline-[1.5px] focus:outline:bg-[#BFBFBF] px-[30px] text-[#AEB0B4] font-bold text-[18px] leading-normal" type="text" placeholder="Search by name"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
              <Link to="search">
                <span>
                    <button className="h-[73px] w-[156px] pr-[100px] bg-[#0076CE] rounded-[10px] pl-[50px] text-[16px] text-white font-bold leading-normal ">Search</button>
                </span>
                </Link>
        </div>

    </div>
  )
}

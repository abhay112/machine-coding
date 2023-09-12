import React, { useEffect, useState, useRef } from "react"
export default function APP() {

  const countries = [
    {name:'India', value:'IN', cities:['delhi','mumbai']},
    {name:'Pakistan', value:'PK', cities:['Lahore','Karachi']},
    {name:'BanglaDesh', value:'BG', cities:['DHAKA','CHi']}
  ]
  const [current,setCurrent] = useState();
  console.log(current);
  return (
   
    <div>
        <select onChange={(e)=>{
          console.log(e.target.value,'asasd');
          setCurrent(e.target.value);
        }}>
          {countries.map((country,idx)=>{
            return (<option value={idx} key={idx}>{country.name}</option>)
          }
          )}
        </select>
        {current&&
        <select onChange={(e)=>{
          console.log(e.target.value,'asasd');
        }}>
          {countries[current]?.cities.map((country,idx)=>{
            return (<option value={country}>{country}</option>)
          }
          )}
        </select>
        }
    </div>
  )
}

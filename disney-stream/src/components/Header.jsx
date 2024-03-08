import React, { useState } from 'react'
import logo from "../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import {HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const [toggle,setToggle]=useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className='flex md:items-center justify-between p-5'>
    <div className='md:flex gap-4 md:gap-8 items-center'>
    <img src={logo} className='w-[100px] 
    md:w-[115px] object-cover' />
    <div className='hidden md:flex gap-4 md:gap-8'>
    {menu.map((item)=>(
        <HeaderItem name={item.name} Icon={item.icon} />
    ))}
    </div>
      <div className='hidden gap-5'>
    {menu.map((item,index)=>index<3&&(
        <HeaderItem name={''} Icon={item.icon} />
    ))}
     <div className='hidden' onClick={()=>setToggle(!toggle)}>       
        <HeaderItem name={''} Icon={HiDotsVertical} />
       {toggle? <div className='absolute mt-3 bg-[#121212] 
        border-[1px] border-gray-700 p-3 px-5 py-4'>
        {menu.map((item,index)=>index>2&&(
        <HeaderItem name={item.name} Icon={item.icon} />
        ))}
        </div>:null}
        </div> 
    </div>
    </div>
    <img src=""
    className='w-[40px] rounded-full'/>
</div>
)
};

export default Header;

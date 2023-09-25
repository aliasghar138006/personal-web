import Button from "@elements/Button"
import Particle from "@templates/Particles"
import { DataContext } from "context/Context";
import Image from "next/image";

import { useContext, useEffect, useState } from "react";
export default function HomePage() {

  const {data} = useContext(DataContext);

  
  
  
  return (
    <div className='h-[800px] max-md:h-[1000px] relative overflow-hidden'>

        <Particle />
        <div>
          <div >

          <div className="absolute -top-[100px] -left-[100px] opacity-60 z-0 w-[500px] h-[500px] bg-[#0b0b13] rounded-full"></div>
          <div className="absolute top-[150px] md:flex w-full p-[30px] md:justify-around">

            <div className="">
            
                <h1 className="text-[5rem] text-white">{data.fullName}</h1>
              
              <h3 className="text-[1.5rem] mb-5 text-white">برنامه نویس و مدرس مورد تایید مایکروسافت</h3>
              <Button title='دریافت رزومه' href='/home' />
            </div>
            <div>
              <img src={data.image} className="w-[400px] h-[400px] rounded-full max-md:mt-[50px]" />
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}



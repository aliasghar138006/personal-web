import LeftArrow from 'public/icons/LeftArrow';
import React from 'react';


function Exprience({title , descriptions , startYear , endYear=0 , icon=''}) {
    return (
        <div className='flex relative max-sm:flex-col p-5 justify-around items-center w-full h-fit mt-[20px] rounded-lg bg-[#0b0b13]'>
        <div className='w-[50px] h-[50px] max-md:hidden'>
            {icon.length ? 
            <img src={icon} alt='icon' />
             : <LeftArrow />}

        </div>
        <hr className='max-sm:hidden w-[70px] h-[5px] rotate-90'></hr>
        
        <div className='w-[70%]'>
            <h2 className=''>{title}</h2>
            <h4 className='text-xs'>{title}</h4>
            <p className='text-sm text-[#9c9c9f] text-justify mt-[15px]'>{descriptions}</p>
            <span className='absolute top-[5px] left-[5px] bg-green-500 px-3 rounded-sm'>از {startYear}  تا {!endYear ? 'کنون' : endYear}</span>
        </div>
        
        
    </div>
    );
}

export default Exprience;
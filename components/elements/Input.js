import React, { useState } from 'react';

function Input({placeholder , value , onChange , name}) {
    
    return (
        <div className='font-bnazanin'>
            <input className='bg-transparent w-full p-[5px] pl-[50px] pr-[5px] border border-s-[#5f676f] focus:outline-none' placeholder={placeholder} type='text' name={name} value={value} onChange={onChange} />
        </div>
    );
}

export default Input;
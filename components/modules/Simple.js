import Link from 'next/link';
import React from 'react';

function Simple({title , image , url=''}) {
    return (
        <Link href={url}>
            <div className='inline-block overflow-hidden relative mt-[20px] mx-1'>
                <img className='hover:scale-110 hover:grayscale' src={image} width='400px' height='200px' alt='them' style={{transition:'all ease .5s'}} />
                <div className='absolute bottom-0 right-0 w-full p-[20px] opacity-80  bg-[#666666] text-right'>
                {title} 
                </div>
            </div>
        </Link>
    );
}

export default Simple;
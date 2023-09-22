import Link from 'next/link';
import React from 'react';

function Course({image , url}) {
    return (
        <Link href={url}>
            <div className='inline-block overflow-hidden mt-[30px] ml-3 hover:grayscale'>
                <img className='hover:scale-110 transition ease-in-out duration-300' src={image} width='' height='' alt='course' />
            </div>
        </Link>
    );
}

export default Course;
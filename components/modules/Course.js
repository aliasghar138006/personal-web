import Link from 'next/link';
import React from 'react';

function Course({image , url=''}) {
    return (
        <Link href={url}>
            <div className='inline-block overflow-hidden mt-[20px] mx-1 hover:grayscale'>
                <img className='hover:scale-110 transition ease-in-out duration-300' src={image} width='400px' height='200px' alt='course' />
            </div>
        </Link>
    );
}

export default Course;
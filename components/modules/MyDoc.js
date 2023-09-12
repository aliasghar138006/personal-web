import Link from 'next/link';
import Search from 'public/icons/Search';
import { useState } from 'react';

function MyDoc({title , image , url}) {
    const [show , setShow] = useState(false)
    const hoverHandler = () => {
        setShow(true);
    }

    const leaveHandler = () => {
        setShow(false);
    }
    return (
        <div className='relative inline-block mt-5 ml-2' onMouseEnter={hoverHandler} onMouseLeave={leaveHandler}>
                <img src={image} width='400px' height='200px' alt='mcab'/>
                {show ? 
                   <div style={{transition:'all ease 3s'}} >
                     <div className='absolute top-2 right-[10%] w-[80%] text-center  bg-[#0c0c14] p-5 opacity-90'>
                    {title}
                    </div>
                    <Link href={url}>
                        <div className='absolute cursor-pointer bottom-2 left-3 bg-green-600 text-white w-[50px] h-[50px] p-3' >
                            <Search />
                        </div> 
                    </Link>
                   </div>
                :
                null
                }
            </div>
    );
}

export default MyDoc;
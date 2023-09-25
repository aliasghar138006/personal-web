import Link from "next/link";
import { DataContext } from "@context/Context";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import RightArrow from "public/icons/RightArrow";


function Sidebar({open , setOpen , windowWidth , setWindowWidth}) {

    const {menuData , data} = useContext(DataContext);
    const router = useRouter();

    

    if(router.route == '/dashboard' || router.route == '/admin'){
        return(<></>)
    }else {
        return (
        
            <div className='absolute md:block top-0 right-0 bg-[#0c0c14] h-[800px] w-[50%] sm:w-[25%] overflow-x-hidden z-20'>
                <div className='absolute -right-12 bg-[#2fbf71] w-[150%] h-[120px] rounded-b-[70%] z-0'>
                    
                </div>
                <div className='absolute top-[50px] right-[27%] bg-white w-[100px] h-[100px] border-[5px] border-s-violet-50 overflow-hidden rounded-full'>
                    <img src={data.image} alt='aliasghar' className='-my-2' />
                </div>
                <span className='absolute top-[170px] right-[30%] text-white'>علی اصغر شحنه</span>
                <ul className="my-[250px] mr-5">
                    {menuData.map(item => <Link key={item.id} href={`/${item.name}`}>
                        <div className="flex transition ease-in-out duration-1 items-center active:text-[#2cb66c] text-[#87878b] hover:text-white">
                            <div className=" w-[30px] h-[30px]">
    
                            {item.icon}
                            </div>
                            <li className="my-4 cursor-pointer mr-[10px]">{item.title}</li>
                        </div>
                    </Link> )}
                </ul>
            </div>
        );
    }
}

export default Sidebar;
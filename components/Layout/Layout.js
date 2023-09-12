import { useEffect, useState } from "react";
import Sidebar from "@modules/Sidebar";



function Layout({children}) {
    const [open , setOpen] = useState(false);
    
    const resizeHandler = () => {
        // const width = window.innerWidth;
        // if (width >= 768){
        //     setOpen(true);
        // }
    }
    
    

    
    return (
        <div className="font-laleh z-1000" onMouseEnter={resizeHandler} onClick={() => setOpen(!open)}>
            <div id="nav" className="fixed md:hidden flex p-4 bg-[#10101a] top-0 w-full items-center z-10">
                <div className="flex-auto">
                    <span className="text-white text-[25px]">علی اصغر شحنه</span>
                </div>
                <div className="bg-[#2fbf71] p-3 rounded-full cursor-pointer w-fit h-[55px]" onClick={() => setOpen(!open)}>
                    {
                        open ? <div className="mt-4">
                            <div className="bg-white w-8 h-0.5 my-1.5 rotate-45"></div>
                            <div className="bg-white w-8 h-0.5 -my-2 -rotate-45"></div>
                        </div> :
                        <>
                            <div className="bg-white w-8 h-0.5 my-1.5"></div>
                            <div className="bg-white w-8 h-0.5 my-1.5"></div>
                            <div className="bg-white w-8 h-0.5 my-1.5"></div>
                        </>

                        
                    }
                </div>
            </div>
            
            <div>
                {
                    open  ?
                    <Sidebar />
                     :null
                }
                <div className={open ? 'fixed w-full opacity-70' : null}>
                    {children}      
                </div>
            </div>
        </div>
    );
}

export default Layout;
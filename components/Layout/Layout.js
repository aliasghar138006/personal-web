import { useContext, useEffect, useState } from "react";
import Sidebar from "@modules/Sidebar";
import { DataContext } from "context/Context";
import { DetectResize } from "utils/detectResize";
import { useRouter } from "next/router";
import RightArrow from "public/icons/RightArrow";
import LeftArrow from "public/icons/LeftArrow";

function Layout({ children }) {
  const { open, setOpen } = useContext(DataContext);
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  // const clickHandler = () => {
  //     const width = window.innerWidth;
  //     if (width >= 768){
  //         setOpen(!open);
  //     }
  // }

  return (
    <div className="font-laleh z-1000">
      {router.route == "/dashboard" || router.route == "/admin" ? null : (
        <div
          id="nav"
          className="fixed md:hidden flex p-4 bg-[#10101a] top-0 w-full items-center z-10"
        >
          <div className="flex-auto">
            <span className="text-white text-[25px]">علی اصغر شحنه</span>
          </div>
          <div
            className="bg-[#2fbf71] p-3 rounded-full cursor-pointer w-fit h-[55px]"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <div className="mt-4">
                <div className="bg-white w-8 h-0.5 my-1.5 rotate-45"></div>
                <div className="bg-white w-8 h-0.5 -my-2 -rotate-45"></div>
              </div>
            ) : (
              <>
                <div className="bg-white w-8 h-0.5 my-1.5"></div>
                <div className="bg-white w-8 h-0.5 my-1.5"></div>
                <div className="bg-white w-8 h-0.5 my-1.5"></div>
              </>
            )}
          </div>
        </div>
      )}

      <div>
       {(!open && windowWidth < 768) && (router.pathname !=='/admin' && router.pathname !== '/dashboard') ?
         <div
         onClick={() => {
           setOpen(true);
           setWindowWidth(768);
         }}
         className="absolute max-md:hidden cursor-pointer bg-opacity-80 w-[40px] h-[40px] rounded-full p-2  top-[50px] right-[10px] z-10 bg-gray-400"
       >
         {/* <div className="bg-white w-[100%] mt-1 h-[3px] mx-auto"></div>
         <div className="bg-white w-[100%] mt-1 h-[3px] mx-auto"></div>
         <div className="bg-white w-[100%] mt-1 h-[3px] mx-auto"></div> */}
         <LeftArrow />
       </div>
        :null}

        {open || windowWidth >= 768 ? (
          <div>
            {windowWidth >= 768 ? (
              <div
                onClick={() => {
                  setOpen(false);
                  setWindowWidth(0);
                }}
                className="absolute cursor-pointer bg-opacity-80 w-[40px] h-[40px] rounded-full p-2  top-[50px] right-[23%] z-50 bg-gray-400"
              >
                {/* <div className="bg-white w-[35%] mt-2 h-[3px] mx-auto"></div>
                      <div className="bg-white w-[35%] mt-2 h-[3px] mx-auto"></div>
                      <div className="bg-white w-[35%] mt-2 h-[3px] mx-auto"></div> */}
                <RightArrow />
              </div>
            ) : null}

            <Sidebar
              open={open}
              setOpen={setOpen}
              windowWidth={windowWidth}
              setWindowWidth={setWindowWidth}
            />
          </div>
        ) : null}

        <div
          className={
            (open || windowWidth >= 768) &&
            router.route !== "/dashboard" &&
            router.route !== "/admin"
              ? "fixed w-full opacity-70"
              : null
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;

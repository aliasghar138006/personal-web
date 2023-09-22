import EditData from "components/modules/EditData";
import { useRouter } from "next/router";
import Edit from "public/icons/Edit";
import Eye from "public/icons/Eye";
import Logout from "public/icons/Logout";
import React from "react";

function DashboardPage() {
  const router = useRouter();
  const logoutHandler = () => {
    fetch('/api/auth/logout').then(res => res.json()).then(data => {
      if(data.status == 'success') router.push('/admin');
    })
  }
  return (
    <div className="flex bg-green-300 w-full h-fit">
      <div className="mx-auto w-[70%]">
        <EditData />
      </div>
      <div style={{transition:'all ease .5s'}} className="fixed bg-white w-[50px]  md:hover:w-[230px] transition ease-in-out duration-3000 h-full">
        <div className="block cursor-pointer h-[50px] overflow-hidden mt-[50px] items-center">
          <div className="absolute w-[30px] h-[30px] m-0 right-[8px]">
            <Edit />
          </div>
          <div className="mr-[80px] w-[80px]">
            <span className="">تغییر اطلاعات</span>
             </div>
        </div>
        <div className="block cursor-pointer h-[50px] overflow-hidden mt-[50px] items-center">
          <div className="absolute w-[30px] h-[30px] m-0 right-[8px]">
            <Eye />
          </div>
          <div className="mr-[80px] w-[90px]">
            <span className=""> مشاهده پیام ها</span>
             </div>
        </div>
        <div onClick={logoutHandler} className="block cursor-pointer h-[50px] overflow-hidden mt-[50px] items-center">
          <div className="absolute w-[30px] h-[30px] m-0 right-[8px]">
            <Logout />
          </div>
          <div className="mr-[80px] w-[90px]">
            <span className="">خروج</span>
             </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;

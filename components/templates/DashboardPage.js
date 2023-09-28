import EditData from "components/modules/EditData";
import Message from "components/modules/Message";
import { useRouter } from "next/router";
import Edit from "public/icons/Edit";
import Eye from "public/icons/Eye";
import Logout from "public/icons/Logout";
import React, { useState } from "react";

function DashboardPage() {
  const [page , setPage] = useState('edit');
  const router = useRouter();
  const logoutHandler = () => {
    fetch('/api/auth/logout').then(res => res.json()).then(data => {
      if(data.status == 'success') router.push('/admin');
    })
  }
  return (
    <div className="flex bg-green-300 w-full h-[100%]">
      <div className="mx-auto w-[70%] h-full">
        {page == 'edit' ? <EditData /> :<Message />}
        
      </div>
      <div style={{transition:'all ease .5s'}} className="fixed bg-white w-[50px]  md:hover:w-[230px] transition ease-in-out duration-3000 h-full">
        <div onClick={() => setPage('edit')} className="block cursor-pointer h-[50px] overflow-hidden mt-[50px] items-center">
          <div className="absolute w-[30px] h-[30px] m-0 right-[8px]">
            <Edit />
          </div>
          <div className="mr-[80px] w-[80px]">
            <span className="">تغییر اطلاعات</span>
             </div>
        </div>
        <div onClick={() => setPage('message')} className="block cursor-pointer h-[50px] overflow-hidden mt-[50px] items-center">
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

import { useContext, useEffect, useState } from "react";
import Account from "@public/icons/Account";
import { useRouter } from "next/router";
import { DataContext } from "context/Context";
import { toast } from "react-toastify";


function LoginPage() {
    const router = useRouter();
    const [user , setUser] = useState('');
    const [password , setPassword] = useState('');
  
   
    const loginHandler = async() => {
        const res = await fetch('/api/auth/login' , {
            method:'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({user , password})
        })

        const data = await res.json();
        console.log(data);
        if(data.status == 'success'){
            // setData(data.data);
            router.push('/dashboard');
            
        }else{
            toast.error("نام کاربری یا کلمه عبور اشتباه است")
        }

        
       
    }
    return (
        <div dir="rtl" className='block mx-auto pt-[10%] w-full h-[800px] font-laleh bg-nature'>
            <div className="block mx-auto px-[50px] py-[40px] rounded-[30px] bg-opacity-80 bg-white border border-green-700 w-fit">
                <div className="flex flex-col mx-auto my-auto items-center text-center">
                    <div className="text-gray-500 w-[50px] h-[50px]">
                        <Account />
                    </div>
                    <div className="mt-[20px] text-[1.1rem] text-lg font-bold">
                        صفحه ورود به حساب کاربری
                    </div>
                </div>
                <div className="flex flex-col mx-auto my-auto items-center text-center">
                    <input placeholder="نام کاربری" className="outline-none focus:border-green-800 border border-gray-400 bg-white text-start px-[15px] py-[5px] rounded-full mt-[30px]" type="text" value={user} onChange={(e) => setUser(e.target.value)} />
                    <input placeholder="رمز عبور" className="outline-none focus:border-green-800 border border-gray-400 bg-white text-start px-[15px] py-[5px] rounded-full mt-[30px]" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div onClick={loginHandler} className="block border cursor-pointer w-fit text-center font-bold mt-[20px] mx-auto py-[10px] px-[50px] rounded-full bg-green-400 hover:bg-white hover:text-green-800 hover:border-green-800">
                    ورود
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
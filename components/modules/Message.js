import { DataContext } from "context/Context";
import { useRouter } from "next/router";
import Cancell from "public/icons/Cancell";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

function Message(props) {
  const { data , setData } = useContext(DataContext);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");

  const showHandler = (index) => {
    const content = data.message[index].content;
    const length = content.length;
    const newContent = content.slice(3 , length-4);
    setShow(true);
    setContent(newContent);
  };

  const deleteHandler = async (index) => {
    const res = await fetch('/api/edit' , {
      method:"DELETE",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({index})
    });
    const data = await res.json();
    console.log(data);
    if(data.status == "success") {
      toast.success("پیام با موفقیت حذف شد");
      setData(data.data);
    }else{
      toast.error("خطا در پاک کردن پیام")
    }
  }
  return (
    <div className="w-[100%] h-[1000px] border-2 mt-[50px] mb-[50px] p-5 border-black rounded-xl mx-auto text-center">
      <h1>لیست پیام ها</h1>
      <div className="relative mt-[50px]">
        {show && content ? (
          <div className="absolute overflow-scroll w-[90%] h-[500px] right-[7%] p-5 bg-white bg-opacity-90 rounded-xl text-center border-3 border-green-800">
            <div>
              <div onClick={() => setShow(false)} className="w-[30px] h-[30px] text-red-600 cursor-pointer">
                <Cancell />
              </div>
              <div className="text-justify text-[1.5rem] mt-[40px] p-5">{content}</div>
            </div>
          </div>
        ) : null}
        {!data.message.length && <h1>پیامی موجود نیست</h1>}
        {data && data.message.map((item, index) => (
          <div
            className="flex max-sm:block w-[100%] h-fit items-center mt-[30px] border p-3 rounded-xl border-gray-500"
            key={index}
          >
            <div className="flex w-[60%] items-center">
              <div className="mr-[20px] bg-green-900 rounded-full w-[30px] h-[30px] px-3 p-1">
                {index + 1}
              </div>
              <div className="mr-[10px] w-[25%]">
                <sapn>عنوان:</sapn>
                <span>{item.title}</span>
              </div>
              <div className="mr-[30px] w-[25%]">
                <span>فرستنده:</span>
                <span>{item.fullName}</span>
              </div>
            </div>
            <div className="flex w-[40%] h-[40px] overflow-hidden max-sm:mr-[10%] max-lg:mr-[15%] mr-[50%] max-sm:w-[100%] max-sm:mt-[20px]">
              <button
                onClick={() => showHandler(index)}
                className="bg-green-700 p-2 rounded-xl"
              >
                مشاهده پیام
              </button>
              <button
                onClick={() => deleteHandler(index)}
                className="mr-[10px] bg-red-400 rounded-xl p-2"
              >
                حذف پیام
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Message;

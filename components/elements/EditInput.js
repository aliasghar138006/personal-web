import React from "react";

function EditInput({label , type='text' , placeholder=''  , value , name ,  onChange}) {
  return (
    <div className="flex md:mr-[100px] max-md:block mx-auto items-center p-5 w-full mt-[20px]">
      <div className="w-[10%]">
        <label htmlFor="fullname">{label}</label>
      </div>
      <input
        name={name}
        placeholder={placeholder}
        className="w-[70%] max-md:w-full md:mr-[20px] px-5 h-[40px] bg-transparent border-2 rounded-xl outline-none border-green-950"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default EditInput;

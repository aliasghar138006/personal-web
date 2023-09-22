import Dashboardbtn from "components/elements/Dashboardbtn";
import EditInput from "components/elements/EditInput";
import { DataContext } from "context/Context";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

function EditData() {
  
  const {data} = useContext(DataContext);
  
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        city: "",
        shortDescription: "",
        descriptions: "",
        image: "",
        skills: [{ title: "", width: "" }],
        educations: [{title:'' , university:'' , year:''}],
        exprience: [],
        documents: [],
        commendations: [],
        simples: [],
        courses: [],
      });

      

  const editHandler = async () => {
    const res = await fetch("/api/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ form }),
    });

    const data = await res.json();
    console.log(data);
  };

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const skillsHandler = (e , index) => {
    const {skills} = form;
    const {name , value} = e.target;
    const newSkills = [...skills];
    newSkills[index][name] = value; 
    setForm({ ...form, skills:newSkills });
  };

  const educationsHandler = (e , index) => {
    const {educations} = form;
    const {name , value} = e.target;
    const newEducations = [...educations];
    newEducations[index][name] = value; 
    setForm({ ...form, educations:newEducations });
    console.log(form.educations);
  };

  const addSkillHandler = () => {
    const {skills} = form;
    setForm({...form , skills:[...skills , {title:'' , width:''}]});
    console.log(form.skills);
  }

  const addEducationsHandler = () => {
    const {educations} = form;
    setForm({...form , educations:[...educations , {title:'' , university:'' , year:''}]});
  }

  

  if(form.password) {
    return (
      <div>
        <EditInput
          label="نام و نام خانوادگی"
          name="fullName"
          value={form.fullName}
          onChange={(e) => changeHandler(e)}
        />
        <EditInput
          label="ایمیل"
          name="email"
          value={form.email}
          onChange={(e) => changeHandler(e)}
        />
        <EditInput
          label="َشهر"
          name="city"
          value={form.city}
          onChange={(e) => changeHandler(e)}
        />
        <EditInput
          label="معرفی کوتاه"
          name="shortDescription"
          value={form.shortDescription}
          onChange={(e) => changeHandler(e)}
        />
        <EditInput
          label="معرفی کامل"
          name="descriptions"
          value={form.descriptions}
          onChange={(e) => changeHandler(e)}
        />
        <EditInput
          label="لینک تصویر پروفایل"
          name="image"
          value={form.image}
          onChange={(e) => changeHandler(e)}
        />
        
        {/* skills */}
        <div className="w-[80%] mt-[10px] py-[30px] mx-auto rounded-xl  border-2 border-green-800">
        <h2 className="text-[1.3rem] text-center">مهارت ها</h2>
          {form.skills.map((item, index) => (
           <div key={index}>
            <EditInput label='عنوان' placeholder="فتوشاپ" value={item.title} onChange={(e) => skillsHandler(e , index)} name='title'/>
            <EditInput label='سطح تسلط' placeholder="80" type="number" value={item.width} onChange={(e) => skillsHandler(e , index)} name='width'/>
            <hr></hr>
           </div>
          ))}
          <Dashboardbtn title='افزودن مورد جدید' onClick={addSkillHandler} />
        </div>
  
        {/* educations */}
        <div className="w-[80%] mt-[10px] py-[30px] mx-auto rounded-xl  border-2 border-green-800">
        <h2 className="text-[1.3rem] text-center">تحصیلات</h2>
          {form.educations.map((item, index) => (
           <div key={index}>
            <EditInput label='عنوان' placeholder="کارشناسی مکانیک" value={item.title} onChange={(e) => educationsHandler(e , index)} name='title'/>
            <EditInput label='محل تحصیل' placeholder="دانشگاه تهران" value={item.university} onChange={(e) => educationsHandler(e , index)} name='university'/>
            <EditInput label='سال فارغ التحصیلی' placeholder="1398" value={item.year} onChange={(e) => educationsHandler(e , index)} name='year'/>
            <hr></hr>
           </div>
          ))}
          <Dashboardbtn title='افزودن مورد جدید' onClick={addEducationsHandler} />
        </div>
  
        <Dashboardbtn title='ویرایش' onClick={editHandler} />
      </div>
    );
  }else{
    return(
      <div onClick={() => setForm(data)} className="bg-green-600 w-[50%] mx-auto text-center text-[2rem] p-2 cursor-pointer my-[400px] rounded-xl">
        نمایش اطلاعات
      </div>
    )
  }
  
}

export default EditData;

import Dashboardbtn from "components/elements/Dashboardbtn";
import EditInput from "components/elements/EditInput";
import { DataContext } from "context/Context";
import { useRouter } from "next/router";
import Cancell from "public/icons/Cancell";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import SkillsEdit from "./SkillsEdit";
import EducationsEdit from "./EducationsEdit";
import LeftArrow from "public/icons/LeftArrow";
import ExperienceEdit from "./ExperienceEdit";
import DocumentEdit from "./DocumentEdit";
import CommendationsEdit from "./CommendationsEdit";
import SimplesEdit from "./SimplesEdit";
import CoursesEdit from "./CoursesEdit";


function EditData() {


  
  const {data} = useContext(DataContext);
  
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone:"",
        telegram:'',
        instagram:'',
        resume:'',
        city: "",
        shortDescription: "",
        descriptions: "",
        image: "",
        skills: [{ title: "", width: "" }],
        educations: [{title:'' , university:'' , year:''}],
        experience: [{title:'' , descriptions:'' , startyear:'' , endYear:'' , icon:<LeftArrow />}],
        documents: [{title:'' , image:''  , url:''}],
        commendations: [{image:'' , url:''}],
        simples: [{title:'' , image:'' , url:''}],
        courses: [{image:'' , url:''}],
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
    if(data.status == 'success') {
      toast.success("اطلاعات با موفقیت ویرایش شدند", {

        autoClose: 3000,
  
        hideProgressBar: false,
  
        closeOnClick: true,
  
        pauseOnHover: true,
  
        draggable: false,
  
        progress: undefined,
  
     });
    }else{
      toast.error("خطایی رخ داده است" , {
        autoClose: 3000,
  
        hideProgressBar: false,
  
        closeOnClick: true,
  
        pauseOnHover: true,
  
        draggable: false,
  
        progress: undefined,
      })
    }
   
  };

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
          label="لینک تلگرام"
          name="telegram"
          value={form.telegram}
          onChange={(e) => changeHandler(e)}
        />
         <EditInput
          label="لینک اینستاگرام"
          name="instagram"
          value={form.instagram}
          onChange={(e) => changeHandler(e)}
        />
        <EditInput
          label="شماره تلفن"
          name="phone"
          value={form.phone}
          onChange={(e) => changeHandler(e)}
        />
        <EditInput
          label="لینک فایل رزومه"
          name="resume"
          value={form.resume}
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
       <SkillsEdit form={form} setForm={setForm} />
  
        {/* educations */}
       <EducationsEdit form={form} setForm={setForm} />

       {/* experience */}
       <ExperienceEdit form={form} setForm={setForm} />

       {/* documents */}
       <DocumentEdit form={form} setForm={setForm} />

       {/* commendations */}
       <CommendationsEdit form={form} setForm={setForm} />

       {/* simples */}
       <SimplesEdit form={form} setForm={setForm} />

       {/* courses */}
       <CoursesEdit form={form} setForm={setForm} />
  
        <Dashboardbtn title='ویرایش' onClick={editHandler} />
        
      </div>
    );
  }else{
    return(
      <div onClick={() => setForm(data)} className="bg-green-600 w-[50%] max-md:w-[100%] max-md:mr-2 mx-auto text-center text-[2rem] p-2 cursor-pointer my-[400px] rounded-xl">
        نمایش اطلاعات
      </div>
    )
  }
  
}

export default EditData;

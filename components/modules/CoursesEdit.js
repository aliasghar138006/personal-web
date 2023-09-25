import Dashboardbtn from 'components/elements/Dashboardbtn';
import EditInput from 'components/elements/EditInput';
import Cancell from 'public/icons/Cancell';
import React from 'react';

function CoursesEdit({form , setForm}) {
    const coursesHandler = (e , index) => {
        const {courses} = form;
        const {name , value} = e.target;
        const newCourses = [...courses];
        newCourses[index][name] = value; 
        setForm({ ...form, courses:newCourses });
        console.log(form.courses);
      };
    
      
    
      const addCoursesHandler = () => {
        const {courses} = form;
        setForm({...form , courses:[...courses , {image:'' , url:''}]});
      }
    
      
    
      const cancelCoursesHandler = (index) => {
        const {courses} = form;
        const newCourses = [...courses];
        newCourses.splice(index , 1);
        setForm({...form , courses:newCourses})
      }
    return (
        <div className="w-[80%] mt-[10px] py-[30px] mx-auto rounded-xl  border-2 border-green-800">
        <h2 className="text-[1.3rem] text-center">دوره ها</h2>
          {form.courses.map((item, index) => (
           <div className="relative" key={index}>
            <EditInput label='لینک تصویر دوره' placeholder="" value={item.image} onChange={(e) => coursesHandler(e , index)} name='image'/>
            <EditInput label='لینک تایید دوره' placeholder="" value={item.url} onChange={(e) => coursesHandler(e , index)} name='url'/>
            <div onClick={() => cancelCoursesHandler(index)} className="absolute cursor-pointer -top-[10px] right-[10px] w-[30px] h-[30px] text-red-700">
              <Cancell />
            </div>
            <hr></hr>
           </div>
          ))}
          <Dashboardbtn title='افزودن مورد جدید' onClick={addCoursesHandler} />
        </div>
    );
}

export default CoursesEdit;
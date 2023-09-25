import Dashboardbtn from 'components/elements/Dashboardbtn';
import EditInput from 'components/elements/EditInput';
import Cancell from 'public/icons/Cancell';
import React from 'react';

function DocumentEdit({form , setForm}) {
    const documentsHandler = (e , index) => {
        const {documents} = form;
        const {name , value} = e.target;
        const newDocuments = [...documents];
        newDocuments[index][name] = value; 
        setForm({ ...form, documents:newDocuments });
        console.log(form.documents);
      };
    
      
    
      const addDoucumentsHandler = () => {
        const {documents} = form;
        setForm({...form , documents:[...documents , {title:'' , university:'' , year:''}]});
      }
    
      
    
      const cancelDoucumentsHandler = (index) => {
        const {documents} = form;
        const newDocuments = [...documents];
        newDocuments.splice(index , 1);
        setForm({...form , documents:newDocuments})
      }
    return (
        <div className="w-[80%] mt-[10px] py-[30px] mx-auto rounded-xl  border-2 border-green-800">
        <h2 className="text-[1.3rem] text-center">مدارک</h2>
          {form.documents.map((item, index) => (
           <div className="relative" key={index}>
            <EditInput label='عنوان' placeholder="کارشناسی مکانیک" value={item.title} onChange={(e) => documentsHandler(e , index)} name='title'/>
            <EditInput label='لینک تصویر مدرک' placeholder="" value={item.image} onChange={(e) => documentsHandler(e , index)} name='image'/>
            <EditInput label='لینک تایید مدرک' placeholder="می توانید این فیلد را خالی بگذارید" value={item.url} onChange={(e) => documentsHandler(e , index)} name='url'/>
            <div onClick={() => cancelDoucumentsHandler(index)} className="absolute cursor-pointer -top-[10px] right-[10px] w-[30px] h-[30px] text-red-700">
              <Cancell />
            </div>
            <hr></hr>
           </div>
          ))}
          <Dashboardbtn title='افزودن مورد جدید' onClick={addDoucumentsHandler} />
        </div>
    );
}

export default DocumentEdit;
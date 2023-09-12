import { createContext } from 'react';
import MyApp from '../pages/_app';
import Home from '../public/icons/Home';
import AboutUs from '../public/icons/AboutUs';
import Documents from '../public/icons/Documents';
import Commendations from '../public/icons/Commendations';
import Simples from '../public/icons/Simples';
import Courses from '../public/icons/Courses';
import Contact from '../public/icons/Contact';
import Cooperations from '../public/icons/Cooperations';
import Teach from '../public/icons/Teach';

export const DataContext = createContext(null)
function Context({children}) {
    const menuData = [
        {id:1 , title : "خانه" , name: '' , icon:<Home />},
        {id:2 , title : "درباره من" , name: 'about-me' , icon:<AboutUs />},
        {id:3 , title : "مدارک" , name: 'documents' , icon:<Documents />},
        {id:4 , title : "تقدیرنامه ها" , name: 'commendations' , icon:<Commendations />},
        {id:5 , title : "نمونه کارها" , name: 'simples' , icon:<Simples />},
        {id:6 , title : "دوره ها" , name: 'coureses' , icon:<Courses />},
        {id:7 , title : "ارتباط با من" , name: 'contact' , icon:<Contact />},
    ]

    const skillsData = [
        {id:1 , title:'html' , width:'100%'},
        {id:2 , title:'css' , width:'100%'},
        {id:3 , title:'js' , width:'90%'},
        {id:4 , title:'React' , width:'90%'},
        {id:5 , title:'Next' , width:'83%'},
        {id:6 , title:'python' , width:'90%'},
        {id:7 , title:'Django' , width:'90%'},
    ]

    const educationData = [
        {id:1 , title:'کاردانی مکانیک خودرو' , university:'دانشکده فنی پسران سمنان' , year:'1398'},
        {id:2 , title:'کارشناسی مکانیک خودرو' , university:'دانشکده فنی پسران سمنان' , year:'1400'},
    ]

    const exprienceData = [
        {id:1 , title:'مشاور برنامه نویسی و مدیریت پروژه' , descriptions:'پس از دریافت تاییدیه از کمپانی مایکروسافت ، به عنوان مشاور و مدیر پروژه مشغول به فعالیت شدم.' , startDate:1398 , icon:<Cooperations />},
        {id:2 , title:'تدریس آنلاین' , descriptions:'با پیاده سازی سایت تاپ لرن و فراخوان مدرسین ، فعالیت خود را در این سایت به صورت رسمی شروع کرده و تا کنون مدرس بیش از 10 هزار دانشجو بوده ام.' , startDate:1395 , endDate:1398 , icon:<Teach />},
    ]

    const documentsData = [
        {id:1 , title:'مدرک MCT از مایکروسافت' , image:'/images/mct.webp' , url:'https://toplearn.com' },
        {id:1 , title:'مدرک MCT از مایکروسافت' , image:'/images/mcab.webp' , url:'https://toplearn.com' },
        {id:1 , title:'مدرک MCT از مایکروسافت' , image:'/images/mcc.webp' , url:'https://toplearn.com' },
        {id:1 , title:'مدرک MCT از مایکروسافت' , image:'/images/mcsd.webp' , url:'https://toplearn.com' },
        {id:1 , title:'مدرک MCT از مایکروسافت' , image:'/images/mcsa.webp' , url:'https://toplearn.com' },
    ]

    return (
        <DataContext.Provider value={{menuData , exprienceData , skillsData , educationData , documentsData}}>
            {children}
        </DataContext.Provider>
    );
}

export default Context;
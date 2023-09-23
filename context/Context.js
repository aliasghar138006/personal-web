import { createContext } from "react";
import { useState , useEffect } from "react";
import MyApp from "../pages/_app";
import Home from "../public/icons/Home";
import AboutUs from "../public/icons/AboutUs";
import Documents from "../public/icons/Documents";
import Commendations from "../public/icons/Commendations";
import Simples from "../public/icons/Simples";
import Courses from "../public/icons/Courses";
import Contact from "../public/icons/Contact";
import Cooperations from "../public/icons/Cooperations";
import Teach from "../public/icons/Teach";
import { useRouter } from "next/router";

export const DataContext = createContext(null);
function Context({ children }) {
  const router = useRouter();
  
  const [data , setData] = useState({})

  useEffect(() => {
    if(router.pathname !== 'admin'){
      fetch('/api/userdata').then(res => res.json()).then(data => setData(data.data))
    }
  } , [])
  const [open, setOpen] = useState(false);
  const menuData = [
    { id: 1, title: "خانه", name: "", icon: <Home /> },
    { id: 2, title: "درباره من", name: "about-me", icon: <AboutUs /> },
    { id: 3, title: "مدارک", name: "documents", icon: <Documents /> },
    {
      id: 4,
      title: "تقدیرنامه ها",
      name: "commendations",
      icon: <Commendations />,
    },
    { id: 5, title: "نمونه کارها", name: "simples", icon: <Simples /> },
    { id: 6, title: "دوره ها", name: "courses", icon: <Courses /> },
    { id: 7, title: "ارتباط با من", name: "contact-me", icon: <Contact /> },
  ];

  const skillsData = data.skills;

  const educationData = data.educations;
  

  const exprienceData = [
    {
      id: 1,
      title: "مشاور برنامه نویسی و مدیریت پروژه",
      descriptions:
        "پس از دریافت تاییدیه از کمپانی مایکروسافت ، به عنوان مشاور و مدیر پروژه مشغول به فعالیت شدم.",
      startDate: 1398,
      icon: <Cooperations />,
    },
    {
      id: 2,
      title: "تدریس آنلاین",
      descriptions:
        "با پیاده سازی سایت تاپ لرن و فراخوان مدرسین ، فعالیت خود را در این سایت به صورت رسمی شروع کرده و تا کنون مدرس بیش از 10 هزار دانشجو بوده ام.",
      startDate: 1395,
      endDate: 1398,
      icon: <Teach />,
    },
  ];

  const documentsData = [
    {
      id: 1,
      title: "مدرک MCT از مایکروسافت",
      image: "/images/mct.webp",
      url: "https://toplearn.com",
    },
    {
      id: 2,
      title: "مدرک MCT از مایکروسافت",
      image: "/images/mcab.webp",
      url: "https://toplearn.com",
    },
    {
      id: 3,
      title: "مدرک MCT از مایکروسافت",
      image: "/images/mcc.webp",
      url: "https://toplearn.com",
    },
    {
      id: 4,
      title: "مدرک MCT از مایکروسافت",
      image: "/images/mcsd.webp",
      url: "https://toplearn.com",
    },
    {
      id: 5,
      title: "مدرک MCT از مایکروسافت",
      image: "/images/mcsa.webp",
      url: "https://toplearn.com",
    },
  ];

  const commendationsData = [
    { id: 1, image: "/images/coma.bmp", url: "https://toplearn.com" },
    { id: 2, image: "/images/comb.bmp", url: "https://toplearn.com" },
    { id: 3, image: "/images/comc.bmp", url: "https://toplearn.com" },
  ];

  const simplesData = [
    {
      id: 1,
      title: "گت ورک",
      image: "/images/simple1.webp",
      url: "https://toplearn.com",
    },
    {
      id: 2,
      title: "آموزشگاه برنامه نویسان",
      image: "/images/simple2.webp",
      url: "https://toplearn.com",
    },
    {
      id: 3,
      title: "سایت آموزشی تاپ لرن",
      image: "/images/simple3.webp",
      url: "https://toplearn.com",
    },
    {
      id: 4,
      title: "فروشگاه قالب تم شاپ",
      image: "/images/simple4.webp",
      url: "https://toplearn.com",
    },
    {
      id: 5,
      title: "انجمن پرسش و پاسخ برنامه نویسان",
      image: "/images/simple5.webp",
      url: "https://toplearn.com",
    },
  ];

  const coursesData = [
    { id: 1, image: "/images/python.webp", url: "https://toplearn.com" },
    { id: 2, image: "/images/django.webp", url: "https://toplearn.com" },
    { id: 3, image: "/images/core.webp", url: "https://toplearn.com" },
    { id: 4, image: "/images/csharp.webp", url: "https://toplearn.com" },
    { id: 5, image: "/images/drf.webp", url: "https://toplearn.com" },
  ];

  return (
    <DataContext.Provider
      value={{
        menuData,
        exprienceData,
        skillsData,
        educationData,
        documentsData,
        commendationsData,
        simplesData,
        coursesData,
        open,
        data,
        setOpen
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default Context;

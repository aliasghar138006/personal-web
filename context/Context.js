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
    if(router.pathname !== '/admin'){
      fetch('/api/userdata').then(res => res.json()).then(data => setData(data.data))
    }
    // process.env.NEXT_PUBLIC_USERNAME = 'javad';
    
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
  

  const exprienceData = data.experience;
 

  const documentsData = data.documents;
    
  

  const commendationsData = data.commendations;
    

  const simplesData = data.simples;

  const coursesData = data.courses;

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
        setData,
        setOpen
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default Context;

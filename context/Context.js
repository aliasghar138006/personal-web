import { createContext } from 'react';
import MyApp from '../pages/_app';
import Home from '../public/icons/Home';
import AboutUs from '../public/icons/AboutUs';
import Documents from '../public/icons/Documents';
import Commendations from '../public/icons/Commendations';
import Simples from '../public/icons/Simples';
import Courses from '../public/icons/Courses';
import Contact from '../public/icons/Contact';

export const DataContext = createContext(null)
function Context({children}) {
    const data = [
        {id:1 , title : "خانه" , name: 'Home' , icon:<Home />},
        {id:2 , title : "درباره من" , name: 'AboutUs' , icon:<AboutUs />},
        {id:3 , title : "مدارک" , name: 'Documents' , icon:<Documents />},
        {id:4 , title : "تقدیرنامه ها" , name: 'Commendations' , icon:<Commendations />},
        {id:5 , title : "نمونه کارها" , name: 'Simples' , icon:<Simples />},
        {id:6 , title : "دوره ها" , name: 'Coureses' , icon:<Courses />},
        {id:7 , title : "ارتباط با من" , name: 'Contact' , icon:<Contact />},
    ]

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
}

export default Context;
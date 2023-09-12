import { useContext } from "react";
import Education from "@elements/Education";
import { DataContext } from "@context/Context";


function MyEducation(props) {
    const {educationData} = useContext(DataContext)
    return (
        <div>
            <h2 className="text-[2rem] my-[30px]">تحصیلات من</h2>
            {educationData.map(item => (
                <Education key={item.id} title={item.title} university={item.university} year={item.year} />
            ))}
            <hr className="w-full"></hr>
        </div>
    );
}

export default MyEducation;
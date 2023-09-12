import AboutSec from '@modules/AboutSec';
import MyEducation from '@modules/MyEducation';
import MyExprience from '@modules/MyExprience';
import MySkills from '@modules/MySkills';

function AboutMe() {
    return (
        <div className="my-[100px] w-[80%] mx-auto text-white">
           <AboutSec />
           <MySkills />
           <MyEducation />
           <MyExprience />
        </div>
    );
}

export default AboutMe;
import Title from "components/elements/Title";
import Course from "components/modules/Course";
import { DataContext } from "context/Context";
import React, { useContext } from "react";
import { Flip, Hinge, Zoom } from "react-awesome-reveal";

function MyCourses(props) {
  const { coursesData } = useContext(DataContext);
  return (
    <div className="my-[100px] w-[80%] mx-auto text-white">
      <Title title="برخی از دوره های من" />
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {coursesData &&
          coursesData.map((course) => (
            <Zoom key={course.id}>
              <Course image={course.image} url={course.url} />
            </Zoom>
          ))}
      </div>
    </div>
  );
}

export default MyCourses;

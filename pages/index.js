import Button from "@elements/Button";
import Particle from "@templates/Particles";
import { DataContext } from "context/Context";
import { Fade, Slide , Bounce , Flip ,Hinge , JackInTheBox , Roll , Rotate , Zoom } from "react-awesome-reveal";

import { useContext, useEffect, useState } from "react";
export default function HomePage() {
  const { data } = useContext(DataContext);

  if (data.image) {
    return (
      <div className="h-[800px] max-md:h-[1000px] relative overflow-hidden">
        <Particle />
        <div>
          <div>
            <div className="absolute -top-[100px] -left-[100px] opacity-60 z-0 w-[500px] h-[500px] bg-[#0b0b13] rounded-full"></div>
            <div className="absolute top-[150px] md:flex w-full p-[30px] md:justify-around">
              <div className="">
                <Rotate>
                  <h1 className="text-[5rem] text-white">{data.fullName}</h1>

                  <h3 className="text-[1.5rem] mb-5 text-white">
                    {data.shortDescription}
                  </h3>
                  <Button title="دریافت رزومه" href="/home" />
                </Rotate>
              </div>
              <div>
                <Zoom>
                  <img
                    src={data.image}
                    className="w-[400px] h-[400px] rounded-full max-md:mt-[50px]"
                  />
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <div className="w-[200px] h-[200px] text-white bg-green-800">
      Loading ...
    </div>;
  }
}

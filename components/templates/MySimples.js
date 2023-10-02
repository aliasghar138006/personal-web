import Title from "components/elements/Title";
import Simple from "components/modules/Simple";
import { DataContext } from "context/Context";
import React, { useContext } from "react";
import { Bounce } from "react-awesome-reveal";

function MySimples(props) {
  const { simplesData } = useContext(DataContext);
  return (
    <div className="my-[100px] w-[80%] mx-auto text-white">
      <Title title="نمونه کارهای من" />
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2">
      {simplesData &&
        simplesData.map((simple) => (
          <Bounce key={simple.id}>
            <Simple
              title={simple.title}
              image={simple.image}
              url={simple.url}
            />
          </Bounce>
        ))}
      </div>
    </div>
  );
}

export default MySimples;

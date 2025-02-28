import React from "react";
import ChildComponent from "./ChildComponent";

function PropsEg() {
  return (
    <div>
      <ChildComponent
        title={"This is Props"}
        description={
          "Props is a react feature which is mainly use to pass the data from one component to the other component"
        }
      />
    </div>
  );
}

export default PropsEg;

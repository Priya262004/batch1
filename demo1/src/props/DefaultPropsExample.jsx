import React from "react";


const Greeting = ({ name }) => {
  return <h2>Hello, {name}!</h2>;
};


Greeting.defaultProps = {
  name: "Guest", 
};

const DefaultPropsExample = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Greeting name="Alice" /> {/* Uses "Alice" */}
      <Greeting /> {/* Uses default "Guest" */}
    </div>
  );
};

export default DefaultPropsExample;

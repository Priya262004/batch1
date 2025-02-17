import React, { createContext, useContext } from "react";


const MessageContext = createContext();


const Child = () => {
  const message = useContext(MessageContext);
  return <h2>{message}</h2>;
};


const Parent = () => {
  return <Child />;
};

const MainComponent = () => {
  return (
    <MessageContext.Provider value="Hello from Context API!">
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Parent />
      </div>
    </MessageContext.Provider>
  );
};

export default MainComponent;



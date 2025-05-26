import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Tạo các styled components
const StyledButton = styled.button`
  background-color: ${props => props.primary ? "#4CAF50" : "#f44336"};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

const ChildWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
`;

const ParentWrapper = styled.div`
  border: 2px solid #2196F3;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
`;

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    console.log("22222");
  }, [isLoading]);

  return (
    <div>
      <ExamplePage toggle={toggle} setToggle={setToggle} />
      {console.log(11111)}
      <ParentPage toggle={toggle}>
        <Child1Page />
      </ParentPage>
    </div>
  );
};
export default Home;

export function ExamplePage({ toggle, setToggle }) {
  const [a, setA] = useState(0);
  return (
    <>
      <StyledButton onClick={() => setA(a + 1)}>count: {a}</StyledButton>
      <StyledButton primary={toggle} onClick={() => setToggle(!toggle)}>
        {toggle ? "Close Toggle" : "Open Toggle"}
      </StyledButton>
      <div>{console.log(toggle)}</div>
    </>
  );
}

export function Child1Page() {
  return (
    <ChildWrapper>
      <div>Child111</div>
    </ChildWrapper>
  );
}

export function ParentPage({ children, toggle }) {
  return (
    <ParentWrapper>
      <div>Parent: {toggle ? children : null}</div>
    </ParentWrapper>
  );
}

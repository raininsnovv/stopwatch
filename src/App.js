import Timer from "./components/Timer";
import styled from "styled-components";
import Header from "./components/Header";
import { BreakContext } from "./providers/BreakProvider";
import { useEffect, useRef, useState } from "react";
import Counter from "./components/Counter";

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: ${(props) =>
    props.relax2
      ? "#251749"
      : "#217074" && props.longRelax2
      ? "#630606"
      : "#217074"};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [relax2, setRelax2] = useState(false);
  const [longRelax2, setLongRelax2] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <BreakContext.Provider>
      <AppWrapper relax2={relax2} longRelax2={longRelax2}>
        <Header relax2={relax2} longRelax2={longRelax2} />
        <Timer
          count={count}
          setCount={setCount}
          AppWrapper={AppWrapper}
          relax2={relax2}
          setRelax2={setRelax2}
          longRelax2={longRelax2}
          setLongRelax2={setLongRelax2}
        />
        <Counter count={count} />
      </AppWrapper>
    </BreakContext.Provider>
  );
}

export default App;

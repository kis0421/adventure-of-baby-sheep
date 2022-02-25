import React, { useEffect, useState } from "react";
const Sheep = (props: { positionX: number, positionY: number, direction: "right" | "left" }) => {
  const { positionX, positionY, direction } = props;
  return <pre
    id="sheep"
    style={{
      left: positionX,
      top: positionY,
      transform: direction === "right" ? "scaleX(-1)" : "scaleX(1)",
    }}> {`⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒
⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒
Ꮚ･ꈊ･Ꮚ ⌒⌒⌒⌒⌒⌒⌒⌒3
⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒
⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒
∏ ∏         ∏ ∏`}</pre >
}
const App = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [dir, setDir] = useState("right")

  const setMoveEventHandler = (e: any) => {
    if (e.clientX > x) {
      setDir("right")
    } else {
      setDir("left")
    }
    setX(e.clientX)
    setY(e.clientY)
  }
  window.addEventListener("click", setMoveEventHandler);
  return <>
    <Sheep positionX={x} positionY={y} direction={dir as "left" | "right"} />
  </>;
}
export default App;

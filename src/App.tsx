import * as React from "react";
const Sheep = () => {
  return <pre style={{
    fontSize: 4,
    transform: "scaleX(-1)",
    display: "inline-block"
  }}> {`
 ⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒
⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒
Ꮚ･ꈊ･Ꮚ ⌒⌒⌒⌒⌒⌒⌒⌒3
⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒
⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒
∏ ∏         ∏ ∏

  `}</pre >
}
const App = () => {
  return <>
    <Sheep />
  </>;
}
export default App;

import { useState } from "react";
import ColorList from "./components/ColorList";
import Form from "./components/Form";
import Values from "values.js";
const App = () => {
  const [colors, setColors] = useState(new Values("#6ca7e2").all());

  const addColor = (color) => {
    setColors(new Values(color).all());
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;

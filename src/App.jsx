import { useState } from "react";
import ColorList from "./components/ColorList";
import Form from "./components/Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  // toast.success("🦄 Wow so easy!");
  // toast.error("🦄 Wow so easy!");


  const [colors, setColors] = useState(new Values("#6ca7e2").all());

  const addColor = (color) => {
    try {
      setColors(new Values(color).all())
    } catch (error) {
      toast.error(`Unable to parse color from string:  ${color}`)
    }

  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;

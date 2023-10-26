import { useState } from "react";
const Form = ({addColor}) => {
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
    console.log(selectedColor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color)
  };
  return (
    <section className="container">
      <h4>color generator</h4>
      <form action="" className="color-form" onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={handleChange} />
        <input
          type="text"
          value={color}
          placeholder="#f15025"
          onChange={handleChange}
        />
        <button
          className="btn"
          type="submit"
          style={{ backgroundColor: color }}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;

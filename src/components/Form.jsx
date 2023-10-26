const Form = () => {
  return <section className="container">
    <h4>color generator</h4>
    <form action="" className="color-form">
        <input type="color" />
        <input type="text" placeholder="#f15025" />
        <button className="btn" type="submit">Submit</button>
    </form>
  </section>;
};

export default Form;

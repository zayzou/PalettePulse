const SingleColor = ({ color }) => {
  return (
    <article
      className={`color ${color.type === "tint" ? "false" : "color-light"}`}
      style={{ backgroundColor: color.hexString() }}
    >
      <p className={"percent-value"}>{color.weight}</p>
      <p className={"color-value"}>{color.hexString()}</p>
    </article>
  );
};

export default SingleColor;

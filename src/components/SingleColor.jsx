import { toast } from "react-toastify";

const SingleColor = ({ color }) => {
  const copy = (hex) => {
    console.log(hex);
    navigator.clipboard.writeText(hex).then(() => {
      toast(`${hex} copied to clipboard 🎨`);
    });
  };
  return (
    <article
      className={`color ${color.type === "tint" ? "false" : "color-light"}`}
      style={{ backgroundColor: color.hexString() }}
      onClick={() => copy(color.hexString())}
    >
      <p className={"percent-value"}>{color.weight}</p>
      <p className={"color-value"}>{color.hexString()}</p>
    </article>
  );
};

export default SingleColor;

import RigthArrow from "./RightArrow";

type ButtonProps = {
  text: string;
};

function Button(props: ButtonProps) {
  return (
    <button className="btn btn-neutral bg-black text-white">
      <h3 className="text-md pr-2">{props.text}</h3>
      <RigthArrow />
    </button>
  );
}

export default Button;

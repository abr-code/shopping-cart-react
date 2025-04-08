import "./MyButton.css";
type MyButtonProps = {
  text: string;
  onClick: () => void;
};

function MyButton({ text, onClick }: MyButtonProps) {
  const handleClick = () => {
    onClick();
  };

  return (
    <button onClick={handleClick} className="myButton">
      {text}
    </button>
  );
}

export { MyButton };

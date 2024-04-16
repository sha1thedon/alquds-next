type ButtonProps = {
  btnText: string;
  btnFnc?: any;
};

const Button: React.FC<ButtonProps> = ({ btnText, btnFnc }) => {
  return (
    <button
      onClick={btnFnc}
      className="bg-blue text-white font-extrabold text-xl py-3 px-5 rounded-lg"
    >
      {btnText}
    </button>
  );
};

export default Button;

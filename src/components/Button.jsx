const Button = ({ text, disabled }) => {
  return (
    <button className="primary-btn" disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;

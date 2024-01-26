"use client";

const CustomButton = ({
  title,
  containerStyles,
  btnType,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      className={`flex flex-row relative items-center justify-center py-3 px-6 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;

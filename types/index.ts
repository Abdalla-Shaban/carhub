type CustomButtonProps = {
  title: string;
  containerStyles: string;
  btnType?: "button" | "submit";
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

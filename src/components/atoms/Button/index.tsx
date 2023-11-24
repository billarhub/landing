interface ButtonCustomProps {
    onClick?: any;
    children: React.ReactNode;
    fullWidth?: boolean;
    outlined?: boolean;
    disabled?: boolean;
    type?: "button" | "submit";
  }
  
  const Button = ({ children,type='submit',disabled, onClick, fullWidth, outlined }: ButtonCustomProps) => {
    return (
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`${
          fullWidth && "w-full"
        } ${outlined && 'bg-white border border-primary !text-primary'} 
        rounded-md disabled:opacity-50 shadow-slate-500 uppercase box-border text-center text-white font-semibold hover:opacity-80 hover:transition bg-primary  h-[45px] px-8 appearance-none`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  
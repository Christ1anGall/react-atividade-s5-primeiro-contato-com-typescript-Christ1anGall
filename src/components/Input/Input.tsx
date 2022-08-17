import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

const Input = ({ label, placeholder, ...rest }: InputProps) => {
  return (
    <div>
      {label}
      <input type="text" placeholder={placeholder} {...rest} />
    </div>
  );
};

export default Input;

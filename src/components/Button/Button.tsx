import React from 'react'
import './Button.scss'

export interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button className="xu-button">{label}</button>
}
export default Button

// const Button: FC<ButtonProps> = ({ label }): JSX.Element => {
//   return <button>{label}</button>;
// };
// export default Button;

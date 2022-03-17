import React from 'react'
import './Button.scss'

export interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }): JSX.Element => {
  return <button className="xu-button">{label}</button>
}
export default Button

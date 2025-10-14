import React, { ReactNode } from "react";

// Button Props Interface
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  className?: string;
}

// Reusable Button Component
export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  type = "button", 
  icon = null,
  variant = "primary",
  fullWidth = false,
  className = ""
}) => {
  const baseStyles = "font-manrope text-xl font-bold py-4 px-8 rounded-xl transform transition-all duration-200 shadow-lg flex items-center justify-center gap-3";
  
  const variants = {
    primary: "bg-white text-black hover:bg-slate-600 hover:text-white",
    secondary: "bg-slate-800 text-white hover:bg-slate-700",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
  };
  
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {icon && <span className="text-2xl">{icon}</span>}
      {children}
    </button>
  );
};
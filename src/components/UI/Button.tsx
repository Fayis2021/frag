import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseStyles = "px-8 py-3 font-medium transition-all duration-300 ease-in-out tracking-wide text-sm rounded-full";

  const variants = {
    primary: "bg-[var(--color-rose-gold)] text-[var(--color-white)] hover:bg-[var(--color-dusty-rose)] hover:shadow-md",
    outline: "border-2 border-[var(--color-rose-gold)] text-[var(--color-rose-gold)] hover:bg-[var(--color-rose-gold)] hover:text-[var(--color-white)]",
    text: "text-[var(--color-black)] hover:text-[var(--color-rose-gold)] px-4"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      style={{
        backgroundColor: variant === 'primary' ? 'var(--color-rose-gold)' : 'transparent',
        color: variant === 'primary' ? 'var(--color-black)' : variant === 'outline' ? 'var(--color-rose-gold)' : 'var(--color-cream)',
        border: variant === 'outline' ? '1px solid var(--color-rose-gold)' : 'none',
        padding: '0.8rem 2.2rem',
        cursor: 'pointer',
        fontSize: '0.9rem',
        borderRadius: '50px',
        fontWeight: 500
      }}
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'b1' | 'b2' | 'b3';

export interface ButtonProps {
  label?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  variant?: ButtonVariant;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  label,
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  href,
  className = '',
  style,
  ariaLabel,
  icon,
  iconPosition = 'right',
}) => {
  const variantClassMap: Record<ButtonVariant, string> = {
    primary: 'b1',
    b1: 'b1',
    secondary: 'b2',
    b2: 'b2',
    outline: 'b3',
    b3: 'b3',
  };

  const selectedVariantClass = variantClassMap[variant] || 'b1';
  const combinedClassName = `btn ${selectedVariantClass} ${className}`.trim();
  const labelText = label || children;

  const content = (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        verticalAlign: 'middle',
      }}
    >
      {icon && iconPosition === 'left' && (
        <span style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>{icon}</span>
      )}
      {labelText && <span>{labelText}</span>}
      {icon && iconPosition === 'right' && (
        <span style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>{icon}</span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        style={style}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClassName}
      style={style}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

export default Button;

import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { CheckmarkCircle02Icon } from '@hugeicons/core-free-icons';

export interface ChecklistItemProps {
  text: string;
  className?: string;
  iconColor?: string;
}

export const ChecklistItem: React.FC<ChecklistItemProps> = ({
  text,
  className = '',
  iconColor = '#5551ff',
}) => {
  return (
    <div className={`li ${className}`.trim()}>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 'none',
          marginTop: '2px',
          color: iconColor,
        }}
        aria-hidden="true"
      >
        <HugeiconsIcon
          icon={CheckmarkCircle02Icon}
          size={19}
          color={iconColor}
          strokeWidth={1.8}
        />
      </span>
      <span>{text}</span>
    </div>
  );
};

export default ChecklistItem;

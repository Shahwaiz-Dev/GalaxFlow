import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { SparklesIcon } from '@hugeicons/core-free-icons';

export interface AnnouncementBarProps {
  message?: string;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  message = 'Now booking Q3 builds — limited slots',
}) => {
  return (
    <div
      style={{
        background: 'linear-gradient(50deg, #f7c8ed 50px, #e4e9ff 130px, #e4e9ff 100%)',
        padding: '9px 24px',
        textAlign: 'center',
        fontSize: '13px',
        lineHeight: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        color: '#27272b',
      }}
    >
      <HugeiconsIcon icon={SparklesIcon} size={15} color="#a95ef8" strokeWidth={1.6} />
      <span>{message}</span>
    </div>
  );
};

export default AnnouncementBar;

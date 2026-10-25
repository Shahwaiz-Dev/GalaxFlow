'use client';

import React from 'react';
import BeamWordmarkFooter, { FooterColumn, FooterSocial } from '@/components/ui/beam-wordmark-footer';
import { HugeiconsIcon } from '@hugeicons/react';
import { NewTwitterIcon, Linkedin01Icon, GithubIcon } from '@hugeicons/core-free-icons';

export interface FooterProps {
  brandName?: string;
  year?: number;
}

const GALAXFLOW_COLUMNS: FooterColumn[] = [
  {
    title: 'Solutions & Services',
    links: [
      { label: 'AI Automation & Agents', href: '#ai' },
      { label: 'High-Speed Websites', href: '#web' },
      { label: 'Native Mobile Apps', href: '#mobile' },
      { label: 'Architecture & Tech Stack', href: '#contact' },
    ],
  },
  {
    title: 'Company & Process',
    links: [
      { label: 'How We Work (Process)', href: '#process' },
      { label: 'Book Discovery Session', href: '#contact' },
      { label: 'Frequently Asked Questions', href: '#faq' },
      { label: 'Direct Engineering Lead Contact', href: '#contact' },
    ],
  },
];

const GALAXFLOW_SOCIALS: FooterSocial[] = [
  { label: 'X', href: 'https://x.com', icon: <HugeiconsIcon icon={NewTwitterIcon} size={18} strokeWidth={1.6} /> },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: <HugeiconsIcon icon={Linkedin01Icon} size={18} strokeWidth={1.6} /> },
  { label: 'GitHub', href: 'https://github.com', icon: <HugeiconsIcon icon={GithubIcon} size={18} strokeWidth={1.6} /> },
];

export const Footer: React.FC<FooterProps> = ({
  brandName = 'GalaxFlow',
  year = 2026,
}) => {
  return (
    <BeamWordmarkFooter
      brand={brandName}
      wordmark="GALAXFLOW"
      company={`${brandName} Inc.`}
      year={year}
      columns={GALAXFLOW_COLUMNS}
      socials={GALAXFLOW_SOCIALS}
      credits={[
        { lead: 'Engineered with precision by ', label: brandName, href: '#top' },
        { lead: 'AI automation, high-performance websites & mobile apps under one roof.' },
      ]}
      background="#060814"
      ink="#f2f5fd"
      muted="#8a92aa"
      accent="#5551ff"
      wordTop="#4f4bff"
      wordFoot="#060814"
      fontSans='var(--font-poppins), "DM Sans", -apple-system, sans-serif'
      wordWeight={600}
      cut={0.14}
    />
  );
};

export default Footer;

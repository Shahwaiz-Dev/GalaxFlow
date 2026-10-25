'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Button from './Button';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { HugeiconsIcon } from '@hugeicons/react';
import { OrbitIcon, ArrowRight01Icon } from '@hugeicons/core-free-icons';

export interface HeaderProps {
  brandName?: string;
}

export const Header: React.FC<HeaderProps> = ({ brandName = 'GalaxFlow' }) => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -15',
        end: 99999,
        toggleClass: {
          className: 'header-scrolled',
          targets: headerRef.current,
        },
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: '#ffffff',
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        {/* Brand Logo & Name */}
        <Link
          href="#top"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: 600,
            fontSize: '20px',
            letterSpacing: '-0.02em',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: '#e4e9ff',
            }}
          >
            <HugeiconsIcon icon={OrbitIcon} size={20} color="#27272b" strokeWidth={1.6} />
          </span>
          {brandName}
        </Link>

        {/* Navigation Links */}
        <nav
          className="nl"
          aria-label="Main Navigation"
          style={{
            display: 'flex',
            gap: '28px',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          <Link href="#ai">AI automation</Link>
          <Link href="#web">Websites</Link>
          <Link href="#mobile">Mobile apps</Link>
          <Link href="#process">Process</Link>
          <Link href="#faq">FAQ</Link>
        </nav>

        {/* Action Button */}
        <div>
          <Button
            href="#contact"
            variant="primary"
            label="Book a discovery call"
            icon={<HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={1.6} />}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Button from './Button';
import { gsap } from '@/lib/gsap';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  AiBrain01Icon,
  Globe02Icon,
  SmartPhone01Icon,
  SparklesIcon,
  Calendar03Icon,
  Layers01Icon,
} from '@hugeicons/core-free-icons';

export interface ServicePreviewItem {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subcopyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const serviceCards: ServicePreviewItem[] = [
    {
      id: 'ai',
      step: '01',
      title: 'AI automation',
      description: 'Voice and chat agents that answer calls, book appointments, and sync to your database.',
      icon: <HugeiconsIcon icon={AiBrain01Icon} size={26} color="#27272b" strokeWidth={1.5} />,
    },
    {
      id: 'web',
      step: '02',
      title: 'Website development',
      description: 'Next.js sites built for sub-second loads, search ranking, and checkout conversion.',
      icon: <HugeiconsIcon icon={Globe02Icon} size={26} color="#27272b" strokeWidth={1.5} />,
    },
    {
      id: 'mobile',
      step: '03',
      title: 'Mobile apps',
      description: 'Native iOS and Android apps with push notifications and one-tap checkout.',
      icon: <HugeiconsIcon icon={SmartPhone01Icon} size={26} color="#27272b" strokeWidth={1.5} />,
    },
  ];

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { reduceMotion } = context.conditions!;

        if (reduceMotion) {
          gsap.set([badgeRef.current, headlineRef.current, subcopyRef.current, ctaRef.current], {
            autoAlpha: 1,
            y: 0,
          });
          if (cardsContainerRef.current) {
            gsap.set(cardsContainerRef.current.children, { autoAlpha: 1, y: 0 });
          }
          return;
        }

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from(badgeRef.current, {
          y: -18,
          autoAlpha: 0,
          duration: 0.5,
        })
          .from(
            headlineRef.current,
            {
              y: 35,
              autoAlpha: 0,
              duration: 0.8,
              ease: 'power3.out',
            },
            '-=0.25'
          )
          .from(
            subcopyRef.current,
            {
              y: 20,
              autoAlpha: 0,
              duration: 0.6,
            },
            '-=0.45'
          )
          .from(
            ctaRef.current,
            {
              y: 18,
              autoAlpha: 0,
              scale: 0.96,
              duration: 0.5,
            },
            '-=0.35'
          );

        if (cardsContainerRef.current) {
          tl.from(
            cardsContainerRef.current.children,
            {
              y: 40,
              autoAlpha: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: 'power2.out',
            },
            '-=0.3'
          );
        }
      },
      heroRef
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 24px 0',
        textAlign: 'center',
      }}
    >
      <p
        ref={badgeRef}
        className="eb"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '999px',
          background: '#f2f4ff',
          border: '1px solid #dbe2ff',
        }}
      >
        <HugeiconsIcon icon={SparklesIcon} size={14} color="#5551ff" strokeWidth={1.6} />
        <span>AI agents • Websites • Mobile apps</span>
      </p>
      <h1
        ref={headlineRef}
        style={{
          margin: '24px auto 0',
          maxWidth: '920px',
          fontWeight: 500,
          fontSize: 'clamp(38px, 5.5vw, 62px)',
          lineHeight: 1.08,
          letterSpacing: '-0.031em',
        }}
      >
        One engineering team for your web, mobile, and AI systems{' '}
        <span style={{ color: '#a95ef8' }}>under one roof</span>.
      </h1>
      <p
        ref={subcopyRef}
        className="sr"
        style={{
          margin: '28px auto 0',
          maxWidth: '680px',
          color: '#2d2d2d',
        }}
      >
        We build fast websites, native apps, and autonomous AI agents that plug into your existing stack. One team. One codebase. One Slack channel.
      </p>

      {/* Hero CTA buttons */}
      <div
        ref={ctaRef}
        style={{
          margin: '36px 0 0',
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
        }}
      >
        <Button
          href="#contact"
          variant="primary"
          label="Book a 20-min planning call"
          icon={<HugeiconsIcon icon={Calendar03Icon} size={16} strokeWidth={1.6} />}
        />
        <Button
          href="#process"
          variant="outline"
          label="See how we deliver"
          icon={<HugeiconsIcon icon={Layers01Icon} size={16} strokeWidth={1.6} />}
        />
      </div>

      {/* Services Grid */}
      <div
        id="services"
        ref={cardsContainerRef}
        style={{
          marginTop: '72px',
          background: '#e4e9ff',
          borderRadius: '12px',
          padding: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
        }}
      >
        {serviceCards.map((card) => (
          <Link key={card.id} href={`#${card.id}`} className="hx">
            <div className="ico">{card.icon}</div>
            <p className="eb" style={{ marginTop: '20px', color: '#666' }}>
              {card.step}
            </p>
            <h3 style={{ margin: '8px 0 6px', fontSize: '20px', fontWeight: 600 }}>
              {card.title}
            </h3>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.55, color: '#2d2d2d' }}>
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;

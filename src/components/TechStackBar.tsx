'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  AiBrain01Icon,
  Calling02Icon,
  Globe02Icon,
  ReactIcon,
  StripeIcon,
  Database01Icon,
} from '@hugeicons/core-free-icons';

export const TechStackBar: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const pillsContainerRef = useRef<HTMLDivElement>(null);

  const integrations = [
    { name: 'OpenAI & Claude', category: 'LLM Reasoning', icon: AiBrain01Icon },
    { name: 'Twilio', category: 'Voice & SMS', icon: Calling02Icon },
    { name: 'Next.js', category: 'Web Platform', icon: Globe02Icon },
    { name: 'React Native', category: 'iOS & Android', icon: ReactIcon },
    { name: 'Stripe', category: 'Payments & Billing', icon: StripeIcon },
    { name: 'PostgreSQL', category: 'Database & Sync', icon: Database01Icon },
  ];

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { reduceMotion } = context.conditions!;

        if (reduceMotion) {
          gsap.set([titleRef.current], { autoAlpha: 1, y: 0 });
          if (pillsContainerRef.current) {
            gsap.set(pillsContainerRef.current.children, { autoAlpha: 1, y: 0, scale: 1 });
          }
          return;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });

        tl.from(titleRef.current, {
          y: 16,
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power2.out',
        });

        if (pillsContainerRef.current) {
          tl.from(
            pillsContainerRef.current.children,
            {
              y: 20,
              autoAlpha: 0,
              scale: 0.93,
              stagger: 0.07,
              duration: 0.5,
              ease: 'back.out(1.4)',
            },
            '-=0.25'
          );
        }
      },
      sectionRef
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        maxWidth: '1200px',
        margin: '64px auto 0',
        padding: '0 24px',
        textAlign: 'center',
      }}
      aria-label="Supported Technologies and Integrations"
    >
      <p
        ref={titleRef}
        className="eb"
        style={{
          color: '#666',
          fontSize: '11px',
          letterSpacing: '0.15em',
        }}
      >
        Engineered to integrate with your existing software and data
      </p>

      <div
        ref={pillsContainerRef}
        style={{
          marginTop: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px',
        }}
      >
        {integrations.map((item) => (
          <div key={item.name} className="tech-pill">
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#5551ff',
              }}
            >
              <HugeiconsIcon icon={item.icon} size={16} strokeWidth={1.6} />
            </span>
            <span>{item.name}</span>
            <span style={{ color: '#888', fontSize: '11px', fontWeight: 400 }}>
              • {item.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackBar;

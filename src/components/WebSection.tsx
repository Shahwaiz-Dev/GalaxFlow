'use client';

import React, { useEffect, useRef } from 'react';
import Button from './Button';
import ChecklistItem from './ChecklistItem';
import { gsap } from '@/lib/gsap';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  LockKeyIcon,
  FlashIcon,
  ChartHistogramIcon,
  Globe02Icon,
  ArrowRight01Icon,
} from '@hugeicons/core-free-icons';

export const WebSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const checklistRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const skeletonRef = useRef<HTMLDivElement>(null);

  const checklist = [
    'Sub-second loads and top Core Web Vitals scores',
    'Stripe payments, lead capture, and booking flows built in',
    'Headless CMS so your team updates content without a developer',
  ];

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 900px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { reduceMotion, isDesktop } = context.conditions!;

        if (reduceMotion) {
          gsap.set([textColRef.current, mockupRef.current], { autoAlpha: 1, y: 0 });
          return;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        });

        // Content Column entrance
        tl.from(textColRef.current?.querySelectorAll('.eb, .h2, .sr, .btn') || [], {
          y: 28,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 0.65,
          ease: 'power2.out',
        });

        if (checklistRef.current) {
          tl.from(
            checklistRef.current.children,
            {
              x: -18,
              autoAlpha: 0,
              stagger: 0.08,
              duration: 0.5,
              ease: 'power2.out',
            },
            '-=0.35'
          );
        }

        // Browser mockup entrance
        tl.from(
          mockupRef.current,
          {
            y: 35,
            autoAlpha: 0,
            scale: 0.97,
            duration: 0.7,
            ease: 'power2.out',
          },
          '-=0.5'
        );

        // Simulated page load wireframe elements
        if (skeletonRef.current) {
          tl.from(
            skeletonRef.current.children,
            {
              autoAlpha: 0,
              scaleX: 0.85,
              transformOrigin: 'left center',
              stagger: 0.08,
              duration: 0.4,
              ease: 'power1.out',
            },
            '-=0.2'
          );
        }

        // Parallax scrub on desktop
        if (isDesktop && mockupRef.current) {
          gsap.to(mockupRef.current, {
            y: -24,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          });
        }
      },
      sectionRef
    );

    return () => mm.revert();
  }, []);

  return (
    <section id="web" ref={sectionRef} className="row rv">
      {/* Content Column */}
      <div ref={textColRef}>
        <p className="eb" style={{ color: '#666' }}>
          02 • Website development
        </p>
        <h2 className="h2">Websites that load fast, rank high, and convert</h2>
        <p className="sr" style={{ margin: '20px 0 0', color: '#2d2d2d' }}>
          A slow site leaks qualified buyers. We build Next.js platforms with sub-second page loads,
          clean checkout flows, and direct integration with your backend.
        </p>
        <div ref={checklistRef} style={{ marginTop: '20px' }}>
          {checklist.map((item, idx) => (
            <ChecklistItem key={idx} text={item} />
          ))}
        </div>
        <Button
          href="#contact"
          variant="outline"
          style={{ marginTop: '32px' }}
          label="Scope your web platform"
          icon={<HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={1.6} />}
        />
      </div>

      {/* Browser Wireframe Mockup */}
      <div
        ref={mockupRef}
        style={{
          background: '#e4e9ff',
          borderRadius: '12px',
          padding: '32px',
          willChange: 'transform',
        }}
        aria-hidden="true"
      >
        <div
          style={{
            background: '#fff',
            border: '1px solid #e4e7ed',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 24px -6px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* Browser Top Window Bar with 3 Dots & URL */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 16px',
              borderBottom: '1px solid #e4e7ed',
              background: '#fafafb',
            }}
          >
            <div style={{ display: 'flex', gap: '6px' }}>
              <i style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
              <i style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
              <i style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
            </div>
            <div
              style={{
                flex: 1,
                maxWidth: '220px',
                margin: '0 auto',
                background: '#ffffff',
                border: '1px solid #e4e7ed',
                borderRadius: '6px',
                padding: '3px 8px',
                fontSize: '11px',
                color: '#666',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <HugeiconsIcon icon={LockKeyIcon} size={13} color="#16a34a" strokeWidth={1.5} />
              <span>galaxflow.com/app</span>
            </div>
          </div>

          {/* Browser Window Body */}
          <div ref={skeletonRef} style={{ padding: '28px 24px' }}>
            <div style={{ height: '18px', width: '62%', borderRadius: '9px', background: '#27272b' }} />
            <div className="sk" style={{ width: '90%', marginTop: '16px' }} />
            <div className="sk" style={{ width: '70%' }} />
            <div
              style={{
                marginTop: '20px',
                width: '124px',
                height: '34px',
                borderRadius: '60px',
                background: '#5551ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '12px',
                fontWeight: 500,
                gap: '6px',
              }}
            >
              <HugeiconsIcon icon={FlashIcon} size={15} color="#fff" strokeWidth={1.6} />
              <span>Instant Buy</span>
            </div>
            <div
              style={{
                marginTop: '28px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
              }}
            >
              <div
                style={{
                  height: '76px',
                  borderRadius: '12px',
                  background: '#f4f6ff',
                  border: '1px solid #e4e9ff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <HugeiconsIcon icon={FlashIcon} size={20} color="#5551ff" strokeWidth={1.6} />
                <span style={{ fontSize: '11px', fontWeight: 500, color: '#27272b' }}>99+ Vitals</span>
              </div>
              <div
                style={{
                  height: '76px',
                  borderRadius: '12px',
                  background: '#f4f6ff',
                  border: '1px solid #e4e9ff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <HugeiconsIcon icon={ChartHistogramIcon} size={20} color="#5551ff" strokeWidth={1.6} />
                <span style={{ fontSize: '11px', fontWeight: 500, color: '#27272b' }}>Stripe Flow</span>
              </div>
              <div
                style={{
                  height: '76px',
                  borderRadius: '12px',
                  background: '#f4f6ff',
                  border: '1px solid #e4e9ff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <HugeiconsIcon icon={Globe02Icon} size={20} color="#5551ff" strokeWidth={1.6} />
                <span style={{ fontSize: '11px', fontWeight: 500, color: '#27272b' }}>Edge CDN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebSection;

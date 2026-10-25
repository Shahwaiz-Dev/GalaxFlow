'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  HierarchyIcon,
  CursorPointer01Icon,
  SourceCodeIcon,
  Rocket01Icon,
} from '@hugeicons/core-free-icons';

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: any;
}

export const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  const steps: ProcessStep[] = [
    {
      step: '01',
      title: 'Architecture & Scope',
      description: 'We map your workflows, data requirements, and API connections into a fixed-scope technical blueprint.',
      icon: HierarchyIcon,
    },
    {
      step: '02',
      title: 'Interactive Prototype',
      description: 'You test clickable screen designs and sample AI conversation flows before we write production code.',
      icon: CursorPointer01Icon,
    },
    {
      step: '03',
      title: 'Sprint Build & Sync',
      description: 'We develop the code, database schema, and agent logic with weekly staging demos for your review.',
      icon: SourceCodeIcon,
    },
    {
      step: '04',
      title: 'Launch & Handoff',
      description: 'We handle production deployment, store approvals, team training, and full transfer of code repositories.',
      icon: Rocket01Icon,
    },
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
          if (headerRef.current) gsap.set(headerRef.current.children, { autoAlpha: 1, y: 0 });
          if (stepsContainerRef.current) {
            gsap.set(stepsContainerRef.current.children, { autoAlpha: 1, y: 0, scale: 1 });
          }
          return;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        });

        if (headerRef.current) {
          tl.from(headerRef.current.children, {
            y: 28,
            autoAlpha: 0,
            stagger: 0.1,
            duration: 0.65,
            ease: 'power2.out',
          });
        }

        if (stepsContainerRef.current) {
          tl.from(
            stepsContainerRef.current.children,
            {
              y: 40,
              autoAlpha: 0,
              scale: 0.95,
              stagger: 0.12,
              duration: 0.7,
              ease: 'power2.out',
            },
            '-=0.3'
          );
        }
      },
      sectionRef
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      style={{
        marginTop: '112px',
        background: '#27272b',
        color: '#fff',
        padding: '100px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={headerRef} style={{ textAlign: 'center' }}>
          <p className="eb">Delivery roadmap</p>
          <h2
            style={{
              margin: '20px auto 0',
              maxWidth: '760px',
              fontWeight: 500,
              fontSize: 'clamp(32px, 4vw, 44px)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#fff',
            }}
          >
            Four sprints from signed scope to live product
          </h2>
          <p
            className="sr"
            style={{
              margin: '20px auto 0',
              maxWidth: '600px',
              color: '#d2d4d7',
            }}
          >
            Weekly staging demos so you see what's built, what's next, and when you launch.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div
          ref={stepsContainerRef}
          style={{
            marginTop: '56px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          {steps.map((item) => (
            <div key={item.step} className="process-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p className="eb" style={{ color: '#666' }}>
                  {item.step}
                </p>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: '#f2f4ff',
                    color: '#5551ff',
                  }}
                >
                  <HugeiconsIcon icon={item.icon} size={20} strokeWidth={1.6} />
                </span>
              </div>
              <h3 style={{ margin: '16px 0 8px', fontSize: '20px', fontWeight: 600 }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#2d2d2d' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

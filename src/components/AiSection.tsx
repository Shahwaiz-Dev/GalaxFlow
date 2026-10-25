'use client';

import React, { useEffect, useRef } from 'react';
import Button from './Button';
import ChecklistItem from './ChecklistItem';
import { gsap } from '@/lib/gsap';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  SecurityCheckIcon,
  Database01Icon,
  CheckmarkCircle02Icon,
  Message01Icon,
  ArrowRight01Icon,
  Calling02Icon,
} from '@hugeicons/core-free-icons';

export const AiSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const checklistRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const tasksRef = useRef<HTMLDivElement>(null);

  const checklist = [
    'Sub-second voice agents for inbound calls',
    'SMS, WhatsApp, and webchat on one platform',
    'Two-way sync with your CRM, POS, and booking software',
  ];

  const agentTasks = [
    { label: 'Verified inquiry and customer account', icon: SecurityCheckIcon },
    { label: 'Checked real-time availability and pricing in your system', icon: Database01Icon },
    { label: 'Confirmed booking and recorded details in database', icon: CheckmarkCircle02Icon },
    { label: 'Dispatched instant SMS confirmation to the customer', icon: Message01Icon },
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

        // Left column entrance
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

        // Right column mockup entrance
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

        if (tasksRef.current) {
          tl.from(
            tasksRef.current.children,
            {
              y: 12,
              autoAlpha: 0,
              stagger: 0.12,
              duration: 0.45,
              ease: 'back.out(1.2)',
            },
            '-=0.2'
          );
        }

        // Subtle desktop parallax on mockup
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
    <section id="ai" ref={sectionRef} className="row">
      {/* Content Column */}
      <div ref={textColRef}>
        <p className="eb" style={{ color: '#666' }}>
          01 • AI automation
        </p>
        <h2 className="h2">AI agents that pick up the phone, book the job, and update your CRM</h2>
        <p className="sr" style={{ margin: '20px 0 0', color: '#2d2d2d' }}>
          Every missed call costs you a booked job. We deploy voice and messaging agents that handle
          customer requests, update your systems in real time, and hand off edge cases with full context.
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
          label="Scope your AI agent"
          icon={<HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={1.6} />}
        />
      </div>

      {/* Visual Mockup Card */}
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
            padding: '24px',
            boxShadow: '0 8px 24px -6px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ fontSize: '16px', fontWeight: 600 }}>Live workflow: customer request</div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                color: '#16a34a',
                fontWeight: 500,
                background: '#dcfce7',
                padding: '4px 10px',
                borderRadius: '999px',
              }}
            >
              <HugeiconsIcon icon={Calling02Icon} size={14} strokeWidth={1.6} />
              Active Agent
            </span>
          </div>
          <p style={{ margin: '6px 0 20px', fontSize: '14px', color: '#666' }}>
            Resolved autonomously in under 45 seconds.
          </p>
          <div
            ref={tasksRef}
            style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px' }}
          >
            {agentTasks.map((task, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: '#e4e9ff',
                    color: '#5551ff',
                    flexShrink: 0,
                  }}
                >
                  <HugeiconsIcon icon={task.icon} size={15} strokeWidth={1.6} />
                </span>
                <span>{task.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSection;

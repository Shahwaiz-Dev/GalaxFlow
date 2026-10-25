'use client';

import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { gsap } from '@/lib/gsap';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  SparklesIcon,
  CheckmarkCircle02Icon,
  Mail01Icon,
  ArrowRight01Icon,
  SecurityCheckIcon,
} from '@hugeicons/core-free-icons';

export const CtaSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState('All Three');
  const [submitted, setSubmitted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const formRowRef = useRef<HTMLDivElement>(null);

  const services = ['AI Automation', 'Website', 'Mobile App', 'All Three'];

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { reduceMotion } = context.conditions!;

        if (reduceMotion) {
          if (cardRef.current) gsap.set(cardRef.current, { autoAlpha: 1, scale: 1, y: 0 });
          return;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });

        // Banner card entrance
        tl.from(cardRef.current, {
          scale: 0.96,
          y: 35,
          autoAlpha: 0,
          duration: 0.75,
          ease: 'power2.out',
        });

        // Content reveal
        if (textRef.current) {
          tl.from(
            textRef.current.children,
            {
              y: 20,
              autoAlpha: 0,
              stagger: 0.1,
              duration: 0.55,
              ease: 'power2.out',
            },
            '-=0.4'
          );
        }

        // Service chips pop
        if (chipsRef.current) {
          tl.from(
            chipsRef.current.children,
            {
              scale: 0.9,
              autoAlpha: 0,
              stagger: 0.06,
              duration: 0.45,
              ease: 'back.out(1.4)',
            },
            '-=0.25'
          );
        }

        // Form row
        if (formRowRef.current) {
          tl.from(
            formRowRef.current.children,
            {
              y: 16,
              autoAlpha: 0,
              stagger: 0.1,
              duration: 0.5,
              ease: 'power2.out',
            },
            '-=0.2'
          );
        }
      },
      sectionRef
    );

    return () => mm.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        maxWidth: '1200px',
        margin: '112px auto',
        padding: '0 24px',
      }}
    >
      <div
        ref={cardRef}
        style={{
          background: '#e4e9ff',
          borderRadius: '12px',
          padding: '72px 24px',
          textAlign: 'center',
          boxShadow: '0 12px 36px -12px rgba(85, 81, 255, 0.12)',
        }}
      >
        <div ref={textRef}>
          <p
            className="eb"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <HugeiconsIcon icon={SparklesIcon} size={14} color="#5551ff" strokeWidth={1.6} />
            <span>Start a conversation</span>
          </p>
          <h2
            style={{
              margin: '20px auto 0',
              maxWidth: '720px',
              fontWeight: 500,
              fontSize: 'clamp(32px, 4vw, 44px)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Let’s map your architecture and timeline
          </h2>
          <p
            className="sr"
            style={{
              margin: '20px auto 0',
              maxWidth: '560px',
              color: '#2d2d2d',
            }}
          >
            20-minute call with our engineering lead. We review your stack, spot automation gaps,
            and outline a fixed build scope.
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              marginTop: '32px',
              padding: '16px 28px',
              background: '#ffffff',
              borderRadius: '72px',
              display: 'inline-block',
              fontWeight: 500,
              fontSize: '15px',
              color: '#27272b',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            }}
          >
            <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} color="#16a34a" strokeWidth={1.8} />
            <span>Thank you! We received your request and will follow up with calendar options within 24 hours.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              margin: '32px auto 0',
              maxWidth: '620px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            {/* Service Interest Chips */}
            <div
              ref={chipsRef}
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {services.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setSelectedService(item)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '999px',
                    border: '1px solid',
                    borderColor: selectedService === item ? '#27272b' : '#c9d1ec',
                    background: selectedService === item ? '#27272b' : '#ffffff',
                    color: selectedService === item ? '#ffffff' : '#27272b',
                    fontSize: '13px',
                    fontWeight: 500,
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            <div
              ref={formRowRef}
              style={{
                width: '100%',
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  flex: '1 1 220px',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: '18px',
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#888',
                  }}
                >
                  <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={1.6} />
                </span>
                <input
                  className="in"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email"
                  aria-label="Your work email"
                  style={{ paddingLeft: '48px', width: '100%' }}
                  required
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                label="Request planning session"
                icon={<HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={1.6} />}
              />
            </div>

            <p
              style={{
                margin: '4px 0 0',
                fontSize: '13px',
                color: '#666',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <HugeiconsIcon icon={SecurityCheckIcon} size={14} color="#16a34a" strokeWidth={2} />
              <span>Direct reply from an engineer within 24 hours.</span>
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default CtaSection;

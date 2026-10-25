'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { HugeiconsIcon } from '@hugeicons/react';
import { HelpCircleIcon, ArrowDown01Icon } from '@hugeicons/core-free-icons';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const faqListRef = useRef<HTMLDivElement>(null);

  const faqs: FaqItem[] = [
    {
      question: 'Can we hire you for just one service?',
      answer:
        'Yes. Every system is modular — start with one, add others later without rewriting code.',
    },
    {
      question: 'Who owns the code?',
      answer:
        'You own 100% of the code, designs, and IP. Repos, server access, and credentials transfer at launch.',
    },
    {
      question: 'How do AI agents connect to our software?',
      answer:
        'We build custom API connectors into your CRM, booking tools, POS, and databases. If it has an API, our agents read and write to it in real time.',
    },
    {
      question: 'How long does a project take?',
      answer:
        'AI agents: 2–3 weeks. Full web or mobile builds: 6–8 weeks from signed scope to production.',
    },
    {
      question: 'What support is included after launch?',
      answer:
        '30-day post-launch warranty for bug fixes. Optional monthly retainers for monitoring, security patches, and feature updates.',
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
          if (faqListRef.current) gsap.set(faqListRef.current.children, { autoAlpha: 1, y: 0 });
          return;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });

        if (headerRef.current) {
          tl.from(headerRef.current.children, {
            y: 25,
            autoAlpha: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
          });
        }

        if (faqListRef.current) {
          tl.from(
            faqListRef.current.children,
            {
              y: 28,
              autoAlpha: 0,
              stagger: 0.08,
              duration: 0.55,
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

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      style={{
        maxWidth: '960px',
        margin: '112px auto 0',
        padding: '0 24px',
      }}
    >
      <div ref={headerRef} style={{ textAlign: 'center' }}>
        <p
          className="eb"
          style={{
            color: '#666',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <HugeiconsIcon icon={HelpCircleIcon} size={14} color="#5551ff" strokeWidth={1.6} />
          <span>Common questions</span>
        </p>
        <h2 className="h2" style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}>
          Before you book a call
        </h2>
        <p className="sr" style={{ margin: '16px auto 0', maxWidth: '580px', color: '#2d2d2d' }}>
          Code ownership, integration scope, timelines, and post-launch support.
        </p>
      </div>

      <div
        ref={faqListRef}
        style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                border: '1px solid #e4e7ed',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                boxShadow: isOpen ? '0 8px 20px -6px rgba(0, 0, 0, 0.06)' : 'none',
              }}
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#27272b',
                  fontFamily: 'inherit',
                }}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: isOpen ? '#5551ff' : '#f2f4ff',
                    color: isOpen ? '#ffffff' : '#5551ff',
                    marginLeft: '16px',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease, background 0.2s ease, color 0.2s ease',
                    flexShrink: 0,
                  }}
                >
                  <HugeiconsIcon icon={ArrowDown01Icon} size={15} strokeWidth={1.8} />
                </span>
              </button>

              {isOpen && (
                <div
                  style={{
                    padding: '0 24px 20px',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: '#555555',
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;

'use client';

import React, { useEffect, useRef } from 'react';
import Button from './Button';
import ChecklistItem from './ChecklistItem';
import { gsap } from '@/lib/gsap';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Wifi01Icon,
  BatteryFullIcon,
  Message01Icon,
  ShoppingBag01Icon,
  SecurityCheckIcon,
  SmartPhone01Icon,
  ArrowRight01Icon,
} from '@hugeicons/core-free-icons';

export const MobileSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const checklistRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const phoneItemsRef = useRef<HTMLDivElement>(null);

  const checklist = [
    'Native iOS and Android with shared codebase',
    'Push notifications for order updates and repeat offers',
    'Apple Pay, Google Pay, and biometric login',
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

        // Phone mockup entrance
        tl.from(
          mockupRef.current,
          {
            y: 40,
            autoAlpha: 0,
            scale: 0.95,
            duration: 0.75,
            ease: 'power2.out',
          },
          '-=0.5'
        );

        // App list items entrance
        if (phoneItemsRef.current) {
          tl.from(
            phoneItemsRef.current.children,
            {
              x: 24,
              autoAlpha: 0,
              stagger: 0.12,
              duration: 0.5,
              ease: 'back.out(1.2)',
            },
            '-=0.3'
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
    <section id="mobile" ref={sectionRef} className="row">
      {/* Content Column */}
      <div ref={textColRef}>
        <p className="eb" style={{ color: '#666' }}>
          03 • Mobile apps
        </p>
        <h2 className="h2">Native apps that bring customers back</h2>
        <p className="sr" style={{ margin: '20px 0 0', color: '#2d2d2d' }}>
          Web traffic finds new buyers. A mobile app turns them into regulars with push notifications,
          saved preferences, and one-tap reorders.
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
          label="Scope your mobile app"
          icon={<HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={1.6} />}
        />
      </div>

      {/* Smartphone Frame Mockup */}
      <div
        ref={mockupRef}
        style={{
          background: '#e4e9ff',
          borderRadius: '12px',
          padding: '32px',
          display: 'flex',
          justifyContent: 'center',
          willChange: 'transform',
        }}
        aria-hidden="true"
      >
        <div
          style={{
            width: '230px',
            background: '#fff',
            border: '1px solid #e4e7ed',
            borderRadius: '24px',
            padding: '16px 14px',
            boxShadow: '0 16px 36px -10px rgba(0, 0, 0, 0.12)',
          }}
        >
          {/* Phone Top Notch & Status */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '11px',
              fontWeight: 600,
              color: '#27272b',
              padding: '0 4px',
            }}
          >
            <span>9:41</span>
            <div style={{ height: '10px', width: '60px', borderRadius: '5px', background: '#27272b' }} />
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <HugeiconsIcon icon={Wifi01Icon} size={14} color="#27272b" strokeWidth={1.5} />
              <HugeiconsIcon icon={BatteryFullIcon} size={15} color="#27272b" strokeWidth={1.5} />
            </div>
          </div>

          <div ref={phoneItemsRef} style={{ marginTop: '16px' }}>
            {/* Item 1 */}
            <div
              style={{
                marginTop: '12px',
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                padding: '8px',
                borderRadius: '10px',
                background: '#fafafb',
                border: '1px solid #f0f2f6',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: '#e4e9ff',
                  color: '#5551ff',
                  flex: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <HugeiconsIcon icon={Message01Icon} size={18} strokeWidth={1.6} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#27272b' }}>Order Alert</div>
                <div style={{ fontSize: '10px', color: '#888' }}>Delivered via Push</div>
              </div>
            </div>

            {/* Item 2 */}
            <div
              style={{
                marginTop: '10px',
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                padding: '8px',
                borderRadius: '10px',
                background: '#fafafb',
                border: '1px solid #f0f2f6',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: '#dcfce7',
                  color: '#16a34a',
                  flex: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <HugeiconsIcon icon={ShoppingBag01Icon} size={18} strokeWidth={1.6} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#27272b' }}>1-Tap Pay</div>
                <div style={{ fontSize: '10px', color: '#888' }}>Apple Pay Confirmed</div>
              </div>
            </div>

            {/* Item 3 */}
            <div
              style={{
                marginTop: '10px',
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                padding: '8px',
                borderRadius: '10px',
                background: '#fafafb',
                border: '1px solid #f0f2f6',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: '#fef3c7',
                  color: '#d97706',
                  flex: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <HugeiconsIcon icon={SecurityCheckIcon} size={18} strokeWidth={1.6} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#27272b' }}>Biometrics</div>
                <div style={{ fontSize: '10px', color: '#888' }}>FaceID Verified</div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div
              style={{
                marginTop: '20px',
                height: '38px',
                borderRadius: '60px',
                background: '#27272b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '12px',
                fontWeight: 500,
                gap: '6px',
              }}
            >
              <HugeiconsIcon icon={SmartPhone01Icon} size={15} color="#fff" strokeWidth={1.6} />
              <span>Launch App</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;

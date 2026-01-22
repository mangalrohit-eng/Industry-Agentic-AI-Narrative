'use client';

import { useEffect, useState } from 'react';

interface TableOfContentsProps {
  sections: { id: string; label: string }[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show TOC after scrolling past header
      setIsVisible(window.scrollY > 200);

      // Find active section
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (!isVisible) return null;

  return (
    <nav className="fixed right-4 xl:right-8 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="rounded-lg border border-primary-200 bg-white/95 backdrop-blur-sm p-4 shadow-lg">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary-500">
          Contents
        </h3>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left text-xs transition-colors ${
                  activeSection === section.id
                    ? 'font-semibold text-accent'
                    : 'text-primary-600 hover:text-accent'
                }`}
              >
                <span
                  className={`block truncate ${
                    activeSection === section.id
                      ? 'border-l-2 border-accent pl-2'
                      : 'pl-3'
                  }`}
                >
                  {section.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

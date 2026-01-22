'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface HeaderTOCProps {
  sections: { id: string; label: string }[];
}

function HeaderTOC({ sections }: HeaderTOCProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
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
    handleScroll();

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

  return (
    <nav className="hidden lg:flex items-center space-x-1 border-l border-primary-200 pl-6 ml-6">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
            activeSection === section.id
              ? 'text-accent bg-accent-50 border-b-2 border-accent'
              : 'text-primary-600 hover:text-accent hover:bg-primary-50'
          }`}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
}

export default function IndustryHeader() {
  const pathname = usePathname();
  const isProcessPage = pathname?.match(/^\/(telecom|media)\/[^/]+$/);

  // Define sections for process pages
  const tocSections = isProcessPage ? [
    { id: 'overview', label: 'Overview' },
    { id: 'impact', label: '4W Impact' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'risks', label: 'Risks' },
  ] : [];

  return (
    <header className="sticky top-0 z-50 border-b border-primary-200 bg-white/95 backdrop-blur-sm transition-shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center space-x-2 sm:space-x-3 group transition-opacity hover:opacity-80"
          >
            <div className="h-6 sm:h-8 w-1 bg-accent transition-all group-hover:w-1.5"></div>
            <h1 className="text-sm sm:text-lg font-semibold tracking-tight text-primary-900">
              <span className="hidden sm:inline">Agentic AI Industry Transformation Explorer</span>
              <span className="sm:hidden">Agentic AI Explorer</span>
            </h1>
          </Link>
          <div className="flex items-center space-x-4 sm:space-x-8">
            <nav className="flex items-center space-x-4 sm:space-x-8">
              <Link
                href="/"
                className={`text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-md px-2 py-1 ${
                  pathname === '/'
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-primary-700 hover:text-accent'
                }`}
              >
                Home
              </Link>
              <Link
                href="/telecom"
                className={`text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-md px-2 py-1 ${
                  pathname?.startsWith('/telecom') && !isProcessPage
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-primary-700 hover:text-accent'
                }`}
              >
                Telecom
              </Link>
              <Link
                href="/media"
                className={`text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-md px-2 py-1 ${
                  pathname?.startsWith('/media') && !isProcessPage
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-primary-700 hover:text-accent'
                }`}
              >
                Media
              </Link>
            </nav>
            {isProcessPage && <HeaderTOC sections={tocSections} />}
          </div>
        </div>
      </div>
    </header>
  );
}

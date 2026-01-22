export default function Footer() {
  return (
    <footer className="border-t border-primary-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="mb-6 flex justify-center">
          <div className="h-1 w-16 bg-accent"></div>
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-primary-900 mb-2">
            Agentic AI Industry Transformation Explorer
          </p>
          <p className="text-xs text-primary-600 mb-6 max-w-2xl mx-auto">
            A comprehensive framework for enterprise transformation across Telecom and Media industries. 
            Built on proven methodologies and real-world implementations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="text-xs font-medium text-accent hover:text-accent-400 transition-colors"
            >
              Contact Us
            </a>
            <span className="hidden sm:inline text-primary-300">•</span>
            <a
              href="#"
              className="text-xs font-medium text-accent hover:text-accent-400 transition-colors"
            >
              Request Framework
            </a>
            <span className="hidden sm:inline text-primary-300">•</span>
            <a
              href="#"
              className="text-xs font-medium text-accent hover:text-accent-400 transition-colors"
            >
              Schedule Discussion
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

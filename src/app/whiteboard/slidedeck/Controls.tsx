interface ControlsProps {
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

export default function Controls({ onPrev, onNext, onClose, canGoPrev, canGoNext }: ControlsProps) {
  return (
    <>
      {/* Close button - top right */}
      <button
        onClick={onClose}
        aria-label="Close deck"
        className="fixed top-4 right-4 z-50 p-3 text-white opacity-70 hover:opacity-100 focus:opacity-100 transition-opacity duration-150 focus:outline-none focus:ring-2 focus:ring-white rounded"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Previous button - left side */}
      {canGoPrev && (
        <button
          onClick={onPrev}
          aria-label="Previous slide"
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white opacity-70 hover:opacity-100 focus:opacity-100 transition-opacity duration-150 focus:outline-none focus:ring-2 focus:ring-white rounded"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Next button - right side */}
      {canGoNext && (
        <button
          onClick={onNext}
          aria-label="Next slide"
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white opacity-70 hover:opacity-100 focus:opacity-100 transition-opacity duration-150 focus:outline-none focus:ring-2 focus:ring-white rounded"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </>
  );
}

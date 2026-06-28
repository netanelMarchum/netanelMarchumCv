// Shared Framer Motion variants + easings.
// Calm, editorial motion in keeping with the Anthropic aesthetic:
// gentle springs, soft slow-in/slow-out, subtle stagger.

export const EASE = [0.22, 1, 0.36, 1]; // expo-ish slow-in/slow-out

export const spring = { type: "spring", stiffness: 260, damping: 26, mass: 0.9 };

// Section / element reveal on scroll.
// Slow-in/slow-out (ease-out) reveal at ~600ms so it settles into place
// while the user keeps scrolling — per the scroll-animation guidelines.
export const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

// Container that staggers its children into view (follow-through / overlapping
// action — elements arrive in reading order, not all at once).
export const stagger = (delay = 0, each = 0.08) => ({
  hidden: {},
  show: {
    transition: { delayChildren: delay, staggerChildren: each },
  },
});

// Default viewport for whileInView: fire early (when ~15% of the element is
// visible) so the reveal finishes before the element is fully in view and
// never blocks reading. once = play a single time.
export const viewport = { once: true, amount: 0.15 };

// Small lift used on hover for cards
export const lift = {
  rest: { y: 0 },
  hover: { y: -6, transition: spring },
};

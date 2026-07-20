// Shared Framer Motion variants + easings.
// Premium, editorial motion in keeping with award-winning portfolio aesthetic:
// gentle springs, soft slow-in/slow-out, subtle stagger, depth, and parallax.

export const EASE = [0.22, 1, 0.36, 1]; // expo-ish slow-in/slow-out
export const EASE_IN = [0.42, 0, 1, 1]; // cubic-in
export const EASE_OUT = [0, 0, 0.58, 1]; // cubic-out
export const EASE_INOUT = [0.42, 0, 0.58, 1]; // cubic-in-out

export const spring = { type: "spring", stiffness: 260, damping: 26, mass: 0.9 };
export const springBouncy = { type: "spring", stiffness: 380, damping: 40, mass: 0.6 };
export const springGentle = { type: "spring", stiffness: 80, damping: 20, mass: 1.2 };

// ============ Section / Element Reveals ============
// Slow-in/slow-out (ease-out) reveal at ~600ms
export const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

// Fade in only (no motion)
export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

// Slide up with fade
export const slideUp = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

// Slide down with fade
export const slideDown = {
  hidden: { opacity: 0, y: -48 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

// Slide left with fade
export const slideLeft = {
  hidden: { opacity: 0, x: 48 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

// Slide right with fade
export const slideRight = {
  hidden: { opacity: 0, x: -48 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

// Scale + fade (zoom in)
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

// Blur reveal (premium text animation)
export const blurReveal = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

// Container that staggers its children into view
export const stagger = (delay = 0, each = 0.08) => ({
  hidden: {},
  show: {
    transition: { delayChildren: delay, staggerChildren: each },
  },
});

// Stagger with more dramatic spacing
export const staggerLarge = (delay = 0, each = 0.12) => ({
  hidden: {},
  show: {
    transition: { delayChildren: delay, staggerChildren: each },
  },
});

// Default viewport for whileInView
export const viewport = { once: true, amount: 0.15 };
export const viewportFull = { once: true, amount: 0.5 };

// ============ Hover States ============
// Small lift used on hover for cards
export const lift = {
  rest: { y: 0 },
  hover: { y: -6, transition: spring },
};

// Enhanced lift with scale
export const liftEnhanced = {
  rest: { y: 0, scale: 1 },
  hover: { y: -8, scale: 1.02, transition: spring },
};

// Hover brightness shift (for images)
export const imageBrighten = {
  rest: { filter: "brightness(1) saturate(1)" },
  hover: { filter: "brightness(1.1) saturate(1.05)", transition: { duration: 0.3 } },
};

// Button hover state
export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: springGentle },
  tap: { scale: 0.98 },
};

// Link hover state
export const linkHover = {
  rest: { y: 0, color: "inherit" },
  hover: { y: -2, transition: { duration: 0.2 } },
};

// Chip/Tag hover
export const chipHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.05, y: -2, transition: springGentle },
};

// ============ Container Animations ============
// Staggered children with lift
export const staggerWithLift = (delay = 0) => ({
  hidden: {},
  show: {
    transition: {
      delayChildren: delay,
      staggerChildren: 0.1,
    },
  },
});

// Child element for stagger (with reveal + lift)
export const staggerChild = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

// ============ Parallax Helpers ============
export const parallaxY = (offset = 50) => ({
  initial: { y: 0 },
  variants: {
    initial: { y: 0 },
    animate: { y: offset },
  },
});

// ============ Loading/Skeleton ============
export const pulse = {
  initial: { opacity: 0.6 },
  animate: {
    opacity: 1,
    transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
  },
};

// ============ Text Animations ============
// Character-by-character reveal
export const charReveal = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

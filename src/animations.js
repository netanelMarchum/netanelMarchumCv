import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============ Section Reveals ============
export const createSectionReveal = (element, options = {}) => {
  if (!element) return;
  const { delay = 0, duration = 0.8, stagger = 0 } = options;

  gsap.from(element, {
    opacity: 0,
    y: 80,
    duration,
    delay,
    scrollTrigger: {
      trigger: element,
      start: "top 70%",
      once: true,
      markers: false
    }
  });
};

// ============ Staggered Text Animation ============
export const createStaggeredText = (elements, options = {}) => {
  const { delay = 0.1, duration = 0.5 } = options;

  gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration,
    stagger: delay,
    scrollTrigger: {
      trigger: elements[0]?.parentElement,
      start: "top 75%",
      once: true
    }
  });
};

// ============ Parallax Effect ============
export const createParallax = (element, strength = 50) => {
  if (!element) return;

  gsap.to(element, {
    y: () => (Math.random() - 0.5) * strength * 2,
    ease: "none",
    scrollTrigger: {
      trigger: element.parentElement,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.8,
      onUpdate: (self) => {
        gsap.set(element, {
          y: self.getVelocity() * 0.1
        });
      }
    }
  });
};

// ============ Scale & Fade on Scroll ============
export const createScaleFade = (element, options = {}) => {
  const { triggerElement, startScale = 0.8, duration = 0.8 } = options;

  gsap.from(element, {
    opacity: 0,
    scale: startScale,
    duration,
    scrollTrigger: {
      trigger: triggerElement || element,
      start: "top 65%",
      once: true
    }
  });
};

// ============ Hover Micro-interactions ============
export const createHoverEffect = (element) => {
  if (!element) return;

  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      scale: 1.02,
      y: -10,
      boxShadow: "0 20px 40px rgba(142, 190, 255, 0.2)",
      duration: 0.3,
      overwrite: "auto"
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      scale: 1,
      y: 0,
      boxShadow: "0 0px 0px rgba(142, 190, 255, 0)",
      duration: 0.3,
      overwrite: "auto"
    });
  });
};

// ============ Animated Typography ============
export const createAnimatedHeadline = (element) => {
  if (!element) return;

  const letters = element.textContent.split("");
  element.innerHTML = letters.map(letter =>
    letter === " " ? "<span style='width: 0.3em;'></span>" : `<span>${letter}</span>`
  ).join("");

  gsap.from(element.querySelectorAll("span"), {
    opacity: 0,
    y: 50,
    rotationZ: 10,
    duration: 0.6,
    stagger: 0.03,
    scrollTrigger: {
      trigger: element,
      start: "top 75%",
      once: true
    }
  });
};

// ============ Layered Depth Animation ============
export const createDepthLayers = (layers) => {
  layers.forEach((layer, idx) => {
    const depth = (idx + 1) * 0.5;
    gsap.to(layer, {
      y: () => Math.sin(gsap.getProperty(layer, "y")) * -depth * 40,
      ease: "none",
      scrollTrigger: {
        trigger: layer.parentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        onUpdate: (self) => {
          gsap.set(layer, {
            y: self.progress * depth * 100
          });
        }
      }
    });
  });
};

// ============ Page Transition ============
export const createPageTransition = (targetElement) => {
  gsap.from(targetElement, {
    opacity: 0,
    y: 100,
    duration: 0.8,
    ease: "power3.out"
  });
};

// ============ Number Counter Animation ============
export const createCounterAnimation = (element, endValue, duration = 2) => {
  if (!element) return;

  const counter = { value: 0 };
  gsap.to(counter, {
    value: endValue,
    duration,
    snap: { value: 1 },
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      once: true
    },
    onUpdate: () => {
      element.textContent = Math.floor(counter.value);
    }
  });
};

// ============ Image Reveal with Parallax ============
export const createImageReveal = (imageElement) => {
  const wrapper = imageElement.parentElement;

  // Reveal animation
  gsap.from(imageElement, {
    opacity: 0,
    scale: 1.1,
    duration: 1,
    scrollTrigger: {
      trigger: wrapper,
      start: "top 60%",
      once: true
    }
  });

  // Parallax on scroll
  gsap.to(imageElement, {
    y: -100,
    ease: "none",
    scrollTrigger: {
      trigger: wrapper,
      start: "top center",
      end: "bottom center",
      scrub: 0.8
    }
  });
};

// ============ Cleanup ============
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(t => t.kill());
};

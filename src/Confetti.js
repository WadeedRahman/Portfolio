// Confetti.js
import confetti from "canvas-confetti";

export const fireConfetti = () => {
  const duration = 2 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 70,
      origin: { x: 0 },
      colors: ["#FFD700", "#FFC300", "#FFDF00"] // gold colors
    });

    confetti({
      particleCount: 5,
      angle: 120,
      spread: 70,
      origin: { x: 1 },
      colors: ["#FFD700", "#FFC300", "#FFDF00"]
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
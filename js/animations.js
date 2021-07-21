// INDEX PAGE
const introImg = anime({
  targets: document.querySelector('#introImg'),
  translateY: [50, 0],
  duration: 1000,
  easing: 'linear',
  opacity: [0, 1],
});

const introText = anime({
  targets: document.querySelectorAll('.intro-text-el'),
  translateX: [-50, 0],
  easing: 'linear',
  duration: 500,
  delay: (el, i) => {
    return i * 500;
  },
  opacity: [0, 1],
});

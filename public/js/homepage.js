
anime({
    targets: '#animateMe',
    translateY: 270,
    translateY: -80,
    direction: 'alternate',
    delay: anime.stagger(100) 
  });

  
  anime({
    targets: '.card',
    translateX: 250,
    translateX: -8,
  });
  
  anime({
    targets: '.mockup-code, .code-card',
    keyframes: [
      {translateY: -20},
      {translateX: 250},
      {translateY: 40},
      {translateX: 0},
      {translateY: 0}
    ],
    duration: 2000,
    easing: 'easeOutElastic(1, .8)',
  });

 
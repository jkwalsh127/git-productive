
anime({
    targets: '#animateMe',
    translateY: 270,
    translateY: -100,
    direction: 'alternate',
    delay: anime.stagger(100) // increase delay by 100ms for each elements.
  });

  
  anime({
    targets: '.card',
    translateX: 250,
    translateX: -8,
    // scale: 2,
    
  });
  
  anime({
    targets: '.infocard',
    translateX: 250,
    translateX: -5,
    // scale: 2,
    rotate: '1turn'
  });
  
  anime({
    targets: '.mockup-code, .code-card',
    keyframes: [
      {translateY: -40},
      {translateX: 250},
      {translateY: 40},
      {translateX: 0},
      {translateY: 0}
    ],
    duration: 2000,
    easing: 'easeOutElastic(1, .8)',
  });

 
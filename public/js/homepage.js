
anime({
    targets: '#animateMe',
    translateY: 270,
    translateY: -150,
    delay: anime.stagger(100) // increase delay by 100ms for each elements.
  });

  anime({
    targets: '.card',
    translateX: 250,
    translateX: -5,
    // scale: 2,
    rotate: '1turn'
  });
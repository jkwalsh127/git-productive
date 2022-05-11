
// import anime from 'animejs/lib/anime.es.js';
//get title to animate

console.log('hello')
// anime({
//     targets: '#animateMe',
//     translateX: 250,
//     // rotate: '1turn',
//     // duration: 800
//   });

  var animation = anime.timeline({
    targets: test.listAll,
    delay: anime.stagger(50),
    loop: true
  });

  animation
    .add({
      translateY: -40
    })
    .add({
      translateY: 0
    });
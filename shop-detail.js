

var splide = new Splide( '.c11Splide', {
  type   : 'loop',
  padding: '5rem',
} );

splide.mount();


var vsplide = new Splide('.itemsplide', {
  type: 'loop',
  perPage: 3,
  perMove: 1,
});

vsplide.mount();


var splide = new Splide('.tienSplide', {
  type: 'loop',
  perPage: 3,
  perMove: 1,
});

splide.mount();
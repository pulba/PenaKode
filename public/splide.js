var splides = document.querySelectorAll('.splide');
if (splides.length) {
  for (var i = 0; i < splides.length; i++) {
    var splideElement = splides[i];
    var splideDefaultOptions = {
      type: 'slide',
      rewind: true,
      perPage: 4,
      breakpoints: {
        1024: {
          perPage: 2,
        },
        640: {
          perPage: 1,
        },
      },
      autoplay: false,
      arrows: true,
      pagination: true,
      drag: true,
      keyboard: true,
      cover: true,
      width: '100%',
      height: '100%',
      gap: '1rem',
    };

    var splide = new Splide(splideElement, splideDefaultOptions);
    splide.mount();
  }
}

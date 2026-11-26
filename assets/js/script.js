document.addEventListener( 'DOMContentLoaded', function() {
    
    var splide = new Splide( '.splide', {
      perPage: 4,
      perMove: 4,
      type: 'loop',
      autoplay: true,
      interval: 5000,
      arrows: true,
      gap: '36px',
      breakpoints: {
        1024: { perPage: 3, perMove: 3 },
        768: { perPage: 2, perMove: 2 },
        568: { perPage: 1, perMove: 1, pagination: false },
      }
    });
    
    splide.mount();

} );

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answerDiv = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {

      const isOpen = item.classList.contains('active');

      item.classList.toggle('active');

      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      if (!isOpen) {
        answerDiv.style.maxHeight = answerDiv.scrollHeight + 'px';
      } else {
        answerDiv.style.maxHeight = null;
      }
    });
  });
});

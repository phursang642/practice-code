//const button = document.getElementById('myButton');
const button = document.querySelector('#myButton');
button.addEventListener('click', function() {
  alert('Button clicked!');
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true, // infinite loop
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
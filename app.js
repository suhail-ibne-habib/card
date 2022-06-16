$('.cards').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 1000,
    prevArrow: '<h1 id="card-prev" class="card-arrow"><i class="fa fa-caret-left" aria-hidden="true"></i></h1>',
    nextArrow: '<h1 id="card-next" class="card-arrow"><i class="fa fa-caret-right" aria-hidden="true"></i></h1>',
    draggable: false,
    focusOnSelect: false,
    pauseOnHover: false,
    pauseOnClick: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });
      

const lis = document.querySelectorAll( '#faq li' );

lis.forEach( li => {
  li.addEventListener( 'click', (e)=>{
    removeClass();
    e.currentTarget.classList.add('show');
  } )
} )

function removeClass(){
  lis.forEach( li =>{
    li.classList.remove('show');
  } )
}
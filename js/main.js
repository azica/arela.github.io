"use strict"

var regExpName = /^[a-z0-9_-]{3,16}$/;
var regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

var regExpPassword = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
var RegExpTel = /^\+[1-9]{1}[0-9]{3,14}$/;


document.addEventListener('DOMContentLoaded', ()=> {
  const formContact = document.getElementById('contactForm');
  const validateElem = (elem) => {
    if (elem.name == "username") {
     if (!regExpName.test(elem.value)) {
       console.log("oioioi");
     }
    }
    if (elem.name == "email") {
      if (!regExpEmail.test(elem.value) && elem.value == "") {
        elem.nextElementSibling.textContent ="insert write name";
      } else {
        elem.nextElementSibling.textContent ="";
      }
    }
    if (elem.name == "password") {
      if (!regExpPassword.test(elem.value)) {
        elem.nextElementSibling.textContent ="insert write password";
      }else {
        elem.nextElementSibling.textContent ="";
      }
    }
    if (elem.name == "confPassword") {
      if (!regExpPassword.test(elem.value)) {
        elem.nextElementSibling.textContent ="insert write confpassword";
      }else {
        elem.nextElementSibling.textContent ="";
      }
    }
    if (elem.name == "phone") {
      if (!regExptel.test(elem.value)) {
        elem.nextElementSibling.textContent ="insert write phone";
      }else {
        elem.nextElementSibling.textContent ="";
      }
    }
  }
  
  for (let elem of formContact.elements) {
    elem.addEventListener('blur', () => {
      validateElem(elem);
    });
  }

  formContact.addEventListener('submit', (e) => {
    e.preventDefault();
    for (let elem of formContact.elements) {

      if (elem.classList.contains('_req')) {
        if(elem.value == '') {   
        elem.nextElementSibling.textContent = 'The column is empty';
        } else {
          elem.nextElementSibling.textContent = '';
        }
      }
    }
  });
});

// ===========================================================================

// HEADER SLIDER
$('.header__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesTiScroll: 1,
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>'
  
  });
  //==========================================================================
  
  // TEAM SLIDER
  $('.team__slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
          
        }
      }
    ]
  });
  //==========================================================================
  
  // PRODUCTS slider
  $('.product__slider').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  //==========================================================================

  // FEATURE SLIDER
  $('.feature__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesTiScroll: 1,
    prevArrow: '<button id="prev" type="button"><i class="fas fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button id="next" type="button"><i class="fas fa-angle-right" aria-hidden="true"></i></button>'
  
  });
  // =========================================================================

  // TESTIMONAIL SLIDER
  $('.testimonial__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesTiScroll: 1,
    prevArrow: '<button id="prev" type="button"><i class="fas fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button id="next" type="button"><i class="fas fa-angle-right" aria-hidden="true"></i></button>',
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,  
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
  
    ]
  
  });
  // =========================================================================

  // BRANDS SLIDER
  $('.brands__slider').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
  // =========================================================================
 
  // Tab 
  function tabFunc(evt, tabName) {
    evt.preventDefault();
    var i, tabContent, tabItem;
    tabContent = document.getElementsByClassName("tab__content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    tabItem = document.getElementsByClassName("tab__nav-item");
    for (i = 0; i < tabItem.length; i++) {
      tabItem[i].className = tabItem[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  };
  // =========================================================================
  
  // SELECT STYLE 
  $('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
  // =========================================================================

  // ARTICLE SLIDER
 $('.article__slider').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button id="next" type="button"><i class="fas fa-angle-right" aria-hidden="true"></i></button>'
});
  // =========================================================================

  // PROPERTY SLIDER
  $('.property__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesTiScroll: 1,
    asNavFor: '.property__slider-nav',
    prevArrow: '<button id="prev" type="button"><i class="fas fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button id="next" type="button"><i class="fas fa-angle-right" aria-hidden="true"></i></button>'
  
  });
   // =========================================================================
  
   // PROPERTY SLIDER NAV
  $('.property__slider-nav').slick({
    centerPadding: '0px',
    dots: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.property__slider',
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });
   // =========================================================================

  //  TESTIMONIAL PAGE SLIDER
  $('.testimonial-page__slider').slick({
    centerPadding: '0px',
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonial-page__slider-content',
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  // =========================================================================
  
  // TESTIMONIAL PAGE SLIDER CONTENT 
  $('.testimonial-page__slider-content').slick({
    centerPadding: '0px',
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.testimonial-page__slider',
    centerMode: true,
    focusOnSelect: true
  });
  // =========================================================================
  
  //  GOOGLE MAP FUNCTION
  function initMap() {
      var hotels = [
        ["Radisson Royal Hotel",  55.751423, 37.565601, 4],
        ["Hilton", 55.784776, 37.663313, 5],
        ["Hayat", 55.774718, 37.651848, 3],
      ];
      var russia = { lat: 55.751244, lng: 37.618423 };
      var map = new google.maps.Map(document.getElementById('google__map'), {
          zoom: 11,
          center: russia,
      });
      const contentString =
         ' <div class="map__info info-map">'+
                '<div class="info-map__cart">'+
                   '<a href="#" class="info-map__img">'+
                      '<img src="img/products/01.jpg" alt="">'+
                    '</a>'+
                   '<aside class="info-map__aside">'+
                      '<div class="item__labels">'+
                           '<div class="item__label rent">'+'for sold'+'</div>'+
                           '<a href="#" class="item__price">'+'$ 289.0'+ '<span>'+ 'month'+'</span>'+'</a>'+
                      '</div>'+
                      '<div class="item__title">'+'Great Palladian Villas'+'</div>'+
                      '<div class="item__location">'+'<i class="fas fa-map-marker-alt"></i>' + '3 Middle Winchendon Rd, Rindge, NH  034'+'</div>'+
                       ' <ul class="item__signs">'+
                           '<li>' + '<i class="fas fa-vector-square"></i>'+'2.283'+'</li>'+
                           '<li>' + '<i class="fa fa-bath"></i>'+' 03'+ '</li>'+
                           '<li>'+ '<i class="fa fa-bed"></i>'+'05'+'</li>'+
                           '<li>'+ '<i class="fa fa-car"></i>'+ '01' + '</li>'+
                       ' </ul>'+
                   '</aside>'+
               '</div>'+
         '</div>';
         var iconMaker = {url:'./img/map__maker.png'};
            
      var infowindow = new google.maps.InfoWindow();
        
  
      for (var i = 0; i < hotels.length; i++) {
  
          var newMarker = new google.maps.Marker({
              position: new google.maps.LatLng(hotels[i][1], hotels[i][2]),
              map: map,
              icon: iconMaker,
          });
          google.maps.event.addListener(newMarker, 'click', (function (newMarker, i) {
              return function () {
                  infowindow.setContent(contentString);
                  infowindow.open(map, newMarker);
              }
          })(newMarker, i));
  
          markers.push(newMarker);
      }
  }
 // =========================================================================

  // FIXED TOP HEADER
  function myFunction() {
    window.onscroll = function() {myFunction()};
    var header = document.querySelector('.header');
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add("header-sticky");
    } else {
      header.classList.remove("header-sticky");
    }
  }
  myFunction();
  // =========================================================================
    
  // isMobile
  var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

let body = document.querySelector('body');

if(isMobile.any()){
  body.classList.add('touch');
  let arrow = document.querySelectorAll('.arrow');
  
  for (let i = 0; i < arrow.length; i++) {
    let thisLink = arrow[i].previousElementSibling;
    let subMenu = arrow[i].nextElementSibling;
    let thisArrow = arrow[i];
    
    thisLink.classList.add('parent');
    arrow[i].addEventListener('click', function() {
      subMenu.classList.toggle('open');
      thisArrow.classList.toggle('active');
    });
    }
  }  else {
    body.classList.add('mouse');
  }
   // TOGGLE MENU
   $('.toggle-menu').click(function () {
    $('.menu').toggleClass('menu-open', 400);
    $('.toggle-menu').toggleClass('active', 200);
  });
  // =========================================================================
 

  // ANIMATION 
  const animItems = document.querySelectorAll('.anim-items');
  if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;
        

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if ( animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < ( animItemOffset + animItemHeight)) {
          animItem.classList.add('_active');
        } else {
          if (!animItem.classList.contains('anim-hide')) {
            animItem.classList.remove('_active');
          }
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.lect + screenLeft}
      
    }
    setTimeout(() => {
      animOnScroll();
    }, 300);
    
  }
  // =========================================================================


//PROPERTY SUBMIT 
new FroalaEditor('#editor', {
  iconsTemplate: 'font_awesome_5',
  toolbarButtons: {
    'moreText': {
      'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
    },
    'moreParagraph': {
      'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
    },
    'moreRich': {
      'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']
    },
    'moreMisc': {
      'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
      'align': 'right',
      'buttonsVisible': 2
    }
  },
  toolbarButtonsMD: {
    'moreText': {
      'buttons': ['bold', 'italic', 'underline', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting', 'insertImage'],
      'buttonsVisible': 11
    }
  },
  toolbarButtonsSM: {
    'moreText': {
      'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting'],
      'buttonsVisible': 8
    }
  },
  toolbarButtonsXS: {
    'moreMisc': {
      'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
      'align': 'right',
      'buttonsVisible': 4
    }
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('submit__form');
 
  form.addEventListener('submit', formSend);
  // FUNCTION TO PREVENT DEFAULT UPLOAD
  async function formSend (e) {
    e.preventDefault();
    let error = formValidate(form);
  }
  
  // FUCNTION TO CHECK VALIDATION
  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');
    console.log(formReq);

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailText(input)) {
          formAddError(input);
          error++;
        } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
          formAddError(input);
          error++;
        }
      } else {
        if(input.value === '') {
          formAddError(input);
          error++;
        }
      } 
    }
    // FUCNTION TO ADD ERROR CLASS
    function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
    }
    // FUNCTION TO REMOVE ERROR CLASS
    function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
    }
    // FUNCTION TO CHECK EMAIL
    function emailText(input) {
      return !/ ^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(input.value);
    }

  }
});



  // noUiSlide
  var sizeValue = document.getElementById('form__range-slider-value');
  noUiSlider.create(sizeValue, {
      start: [200, 500],
      connect: true,
      range: {
          'min': [0],
          '10%': [100, 200],
          '30%': [300, 400],
          '50%': [500, 600],
          '70%': [700, 800],
          '90%': [900, 1000],
          '100%': [1200, 1400],
          'max': [1500]
      }
  });
  var sizeLabel = document.getElementById('form__range-slider-label');

  sizeValue.noUiSlider.on('update', function (values) {
      sizeLabel.innerHTML = values.join(' - ');

  });

  // PRICE RANGE SLIDER
  var sizeValue = document.getElementById('price__range-slider-value');
  noUiSlider.create(sizeValue, {
      start: [200, 500],
      connect: true,
      range: {
          'min': [0],
          '10%': [100, 200],
          '30%': [300, 400],
          '50%': [500, 600],
          '70%': [700, 800],
          '90%': [900, 1000],
          '100%': [1200, 1400],
          'max': [1500]
      }
  });
  var sizeLabel = document.getElementById('price__range-slider-label');

  sizeValue.noUiSlider.on('update', function (values) {
      sizeLabel.innerHTML = values.join(' - ');
  });
  // =========================================================================
  

  //  GRID AND LIST toggle
  $(document).ready(function() {
    $('#grid').click(function(event){
      event.preventDefault();
      $('#grid').addClass('btn-active');
      $('#list').removeClass('btn-active');
      $('.property-product__column').addClass('product-grid');
    });
    $('#list').click(function(event){
      event.preventDefault();
      $('#list').addClass('btn-active');
      $('#grid').removeClass('btn-active');
      $('.property-product__column').removeClass('product-grid');
  });
});



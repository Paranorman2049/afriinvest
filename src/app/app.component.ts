import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

declare var HSHeader: any;
declare var HSMegaMenu: any;
declare var HSShowAnimation: any;
declare var HSBsValidation: any;
declare var HSBsDropdown: any;
declare var HSGoTo: any;
declare var AOS: any;
declare var HSCore: any;
declare var Swiper: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Afriinvest';

  constructor(private readonly elementRef: ElementRef, 
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    new HSHeader('#header').init();

    // INITIALIZATION OF MEGA MENU
      // =======================================================
      new HSMegaMenu('.js-mega-menu', {
        desktop: {
          position: 'left'
        }
      })


    // INITIALIZATION OF SHOW ANIMATIONS
    // =======================================================
    new HSShowAnimation('.js-animation-link')


    // INITIALIZATION OF BOOTSTRAP VALIDATION
    // =======================================================
    HSBsValidation.init('.js-validate', {
      onSubmit: (data: { event: { preventDefault: () => void; }; }) => {
        data.event.preventDefault()
        alert('Submited')
      }
    })


    // INITIALIZATION OF BOOTSTRAP DROPDOWN
    // =======================================================
    HSBsDropdown.init()


    // INITIALIZATION OF GO TO
    // =======================================================
    new HSGoTo('.js-go-to')


    // INITIALIZATION OF AOS
    // =======================================================
    AOS.init({
      duration: 650,
      once: true
    });


    // INITIALIZATION OF TEXT ANIMATION (TYPING)
    // =======================================================
    HSCore.components.HSTyped.init('.js-typedjs')


    // INITIALIZATION OF SWIPER
    // =======================================================
    var sliderThumbs = new Swiper('.js-swiper-thumbs', {
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      history: false,
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
      on: {
        'afterInit': function (swiper: { el: { querySelectorAll: (arg0: string) => any[]; }; params: { autoplay: { delay: any; }; }; }) {
          swiper.el.querySelectorAll('.js-swiper-pagination-progress-body-helper')
          .forEach($progress => $progress.style.transitionDuration = `${swiper.params.autoplay.delay}ms`)
        }
      }
    });

    var sliderMain = new Swiper('.js-swiper-main', {
      effect: 'fade',
      autoplay: true,
      loop: true,
      thumbs: {
        swiper: sliderThumbs
      }
    })
  }
}

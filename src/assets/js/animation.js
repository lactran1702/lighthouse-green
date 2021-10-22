//
// animation.js
// Theme module
//
'use strict';

var animFn = (function () {

  //
  // Variables
  //
  var tl = new TimelineLite();

  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      // triggerHook: "onEnter",
      // triggerHook: 0.9, // show, when scrolled 10% into view
      // duration: "90%", // hide 10% before exiting view (80% + 10% from bottom)
      reverse: true,
      ease: Circ.easeInOut,
    }
  });

  // var itemAwPageU = $('.stagger-up:visible');
  // var itemAwPageL = $('.stagger-left:visible');
  // var itemAwPageR = $('.stagger-right:visible');
  // var itemAwPageD = $('.stagger-down:visible');
  var staggerSection = $('.animate');

  //
  // Functions
  //
  function init() {
    // tl.set(itemAwPageU, { visibility: 'visible' });
    // tl.set(itemAwPageL, { visibility: 'visible' });
    // tl.set(itemAwPageR, { visibility: 'visible' });
    // tl.set(itemAwPageD, { visibility: 'visible' });
    // tl.staggerFrom(itemAwPageD, 2, { y: -50, autoAlpha: 0, ease: Power4.easeOut }, 0.2)
    // tl.staggerFrom(itemAwPageU, 2, { y: 50, autoAlpha: 0, ease: Power4.easeOut }, 0.2, '-=2')

    $('.animateSection').each(function (index, el) {
      var currentItem = this;
      let directChildren = $(currentItem).children();
      TweenMax.set($(directChildren), { y: 50, autoAlpha: 0 });

      directChildren.each(function (index, child) {
        let tween = TweenLite.to(child, 2, { y: 0, autoAlpha: 1, })

        var scene = new ScrollMagic.Scene({ triggerElement: child })
          .setTween(tween)
          // .addIndicators()
          .addTo(controller);
      })

    });

    initSectionAnimation();
  }


  function initSectionAnimation() {
    staggerSection.each(function (index, el) {
      
      let tlSection = new TimelineLite();
      let currentSection = $(this);
      var itemU = currentSection.find('.stagger-up:visible');
      var itemL = currentSection.find('.stagger-left:visible');
      var itemR = currentSection.find('.stagger-right:visible');
      var itemD = currentSection.find('.stagger-down:visible');

      tlSection.set(itemU, { y: 50, autoAlpha: 0 });
      tlSection.set(itemL, { x: -50, autoAlpha: 0 });
      tlSection.set(itemR, { x: 50, autoAlpha: 0 });
      tlSection.set(itemD, { y: -50, autoAlpha: 0 });
      // tlSection.staggerFrom(itemAwPageU, 2, { y: 50, autoAlpha: 0, ease: Power4.easeOut }, 0.2, '-=2')
      let tweenUp = TweenMax.staggerTo(itemU, 1, { y: 0, autoAlpha: 1 }, 0.25)
      let tweenDown = TweenMax.staggerTo(itemD, 1, { y: 0, autoAlpha: 1 }, 0.25)
      let tweenLeft = TweenMax.staggerTo(itemL, 1, { x: 0, autoAlpha: 1 }, 0.25)
      let tweenRight = TweenMax.staggerTo(itemR, 1, { x: 0, autoAlpha: 1 }, 0.25)

      tlSection.add([tweenUp, tweenDown, tweenLeft, tweenRight]);

      var scene = new ScrollMagic.Scene({ triggerElement: el })
        .setTween(tlSection)
        .addIndicators({ name: "section" + index })
        .addTo(controller)
    })
  }
  //
  // Event
  //
  // init scroll decor-el
  init();

  //
  // Return
  //
})();
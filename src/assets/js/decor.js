//
// decor.js
// Theme module
//
'use strict';

var decorFn = (function () {

  //
  // Variables
  //

  var decorElements = document.getElementsByClassName("decor-el");
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      // triggerHook: "onEnter",
      triggerHook: 0.9, // show, when scrolled 10% into view
      // duration: "90%", // hide 10% before exiting view (80% + 10% from bottom)
      reverse: true,
    }
  });
  //
  // Functions
  //

  function initDecorElements() {

    [].forEach.call(decorElements, function (ele) {
      var circle = $(ele).find(".circle");
      var main = $(ele).find(".main");
      var wrap = $(ele).find(".wrap");
      var closestPin = $(ele).prev(".pin")[0];
      var parentDuration = $(ele).parent().innerHeight();
      
      let tl = new TimelineLite({ paused: true });
      let moving = false;
      const isAnimate = !$(ele).hasClass("static");

      if ($(ele).hasClass("left")) {

        TweenLite.set(ele, { autoAlpha: 0, x: -200, rotation: 11.5 });
      } else {
        TweenLite.set(ele, { autoAlpha: 0, x: 200, rotation: 11.5 });

      }
      TweenLite.set(main, { autoAlpha: 0, scale: 0.2, rotation: 11.5 });


      tl.to(ele, 1, { autoAlpha: 1, x: 0, scale: 1, rotation: 0, });
      tl.addLabel("done")
      tl.to(main, 0.8, { autoAlpha: 1, scale: 1, rotation: 0, }, "done-=0.8");
      // let tween = TweenLite.to(ele, 1, { autoAlpha: 1, scale: 1 });

      var scene = new ScrollMagic.Scene({
        triggerElement: closestPin,
        // offset: 50, // move trigger to center of element,
        // duration: "200px",
        duration: parseInt(parentDuration) / 2,
      })
        // .setClassToggle(circle, "visible")
        // .setPin(ele)
        // .setTween(tl.play())
        .on("enter", function (e) {
          if(isAnimate) {
            moving = true;
            
          }
          tl.play();
        })
        .on("leave", function () {
          moving = false;
        })
        .on("update", function (event) {
          let scrolled = event.scrollPos - event.startPos;
          if (scrolled > 0 && moving) {
            TweenLite.to(ele, 3, { y: scrolled, delay: 0.08, ease: Sine.easeInOut })
          }

        })
        // .addIndicators()
        .addTo(controller);

    });

  }

  //
  // Event
  //
  // init scroll decor-el
  initDecorElements();

  //
  // Return
  //

  return true;
})();
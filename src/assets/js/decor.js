//
// decor.js
// Theme module
//
'use strict';

var decorFn = (function () {

  //
  // Variables
  //

  var decorElements = document.getElementsByClassName("ele");
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      // triggerHook: "onEnter",
      triggerHook: 0.9, // show, when scrolled 10% into view
      // duration: "90%", // hide 10% before exiting view (80% + 10% from bottom)
      reverse: false,
    }
  });
  //
  // Functions
  //

  function initDecorElements() {

    [].forEach.call(decorElements, function (ele) {
      var circle = $(ele).find(".circle");
      var main = $(ele).find(".main");
      let tl = new TimelineLite();
      if ($(ele).hasClass("left")) {

        TweenLite.set(ele, { autoAlpha: 0, x: -200, rotation: 11.5 });
      } else {
        TweenLite.set(ele, { autoAlpha: 0, x: 200, rotation: 11.5 });

      }
      TweenLite.set(main, { autoAlpha: 0, scale: 0.2, rotation: 11.5 });


      tl.to(ele, 1, { autoAlpha: 1, x: 0, scale: 1, rotation: 0, });
      tl.addLabel("done")
      tl.to(main, 0.8, { autoAlpha: 1, scale: 1, rotation: 0, }, "done-=0.8");
      // let tween = TweenLite.to(ele, 1 { autoAlpha: 1, scale: 1 });

      var scene = new ScrollMagic.Scene({
        triggerElement: ele,
        // offset: 50, // move trigger to center of element,
      })
        // .setClassToggle(circle, "visible")
        .setTween(tl)
        // .on("enter", function (e) {
        //   circle.addClass("visible");

        // })
        // .on("leave", function () {
        //   circle.removeClass("visible");
        // })
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
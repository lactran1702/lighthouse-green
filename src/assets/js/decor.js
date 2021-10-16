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

  //
  // Functions
  //

  function initDecorElements() {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        // triggerHook: "onEnter",
        triggerHook: 0.9, // show, when scrolled 10% into view
        duration: "90%", // hide 10% before exiting view (80% + 10% from bottom)
        reverse: true,
      }
    });
    [].forEach.call(decorElements, function (ele) {
      var circle = $(ele).find(".circle");

      var scene = new ScrollMagic.Scene({
        triggerElement: ele,
        // offset: 50, // move trigger to center of element,
      })
        // .setClassToggle(circle, "visible")

        .on("enter", function (e) {
          circle.addClass("visible");

        })
        .on("leave", function () {
          circle.removeClass("visible");

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
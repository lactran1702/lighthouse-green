//
// pShoppingBag.js
// Page module
//

'use strict';

var pShoppingBag = (function () {

  //
  // Variables
  //
  var toggles = document.querySelectorAll('[data-toggle="tab-toggler"]');
  var steps = document.querySelectorAll('.shopping-bag-foot li');

  //
  // Functions
  //
  function init() {
    console.log('<pShoppingBag> => INIT!');
    $(window).on('resize', onResize);
    onResize();
    // PRELOADER.hide();
    // alert('Ok!');
    initTabPane();

  }

  function onResize(e) {
    // do your fucking resizing
    console.log('Browser size: ' + window.innerWidth + 'x' + window.innerHeight);
  }

  function initTabPane() {
    [].forEach.call(toggles, function (toggle) {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        // remove all active
        $(steps).removeClass("active");
        
        // active from this backward
        const parent = $(this).parent("li");
        parent.addClass("active");
        parent.prevAll().addClass("active");
        // Toggle tab
        $(toggle).tab('show').removeClass('active');
      });
    });
  }

  //
  // Event
  //

  init();
  //
  // Return
  //

  return true;

})();
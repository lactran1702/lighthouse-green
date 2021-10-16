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
        $(this).parent("li").addClass("active");
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
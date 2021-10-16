

//
// pAccount.js
// Page module
//

'use strict';

var pAccount = (function () {

  //
  // Variables
  //
  var toggles = document.querySelectorAll('[data-toggle="tab-toggler"]');
  var logoutBtn = document.getElementsByClassName("logout-btn")[0];
  //
  // Functions
  //
  function init() {
    console.log('<pAccount> => INIT!');
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
        $(toggles).removeClass("active");
        // Toggle tab + set this active
        $(toggle).tab('show').addClass('active');

        // enable logoutbutton
        toggleLogoutBtn($(this).attr("href"));

      });
    });
  }

  function toggleLogoutBtn(id) {

    if (id == "#accountProfile") {

      $(logoutBtn).show();
    } else {

      $(logoutBtn).hide();
    }
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
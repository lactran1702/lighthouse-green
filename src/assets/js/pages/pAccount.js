

//
// pAccount.js
// Page module
//

'use strict';

var pAccount = (function () {

  //
  // Variables
  //
  var tabToggles = document.querySelectorAll('[data-toggle="tab-toggler"]');
  var tableToggles = document.querySelectorAll('[data-toggle="order-history"]');
  var logoutBtn = document.getElementsByClassName("logout-btn")[0];
  var orderStates = document.querySelectorAll('.state .item');
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
    initOrderTable();

    $(orderStates).on('classChange', updateOrderStates);
    
    updateOrderStates();
  }

  function onResize(e) {
    // do your fucking resizing
    console.log('Browser size: ' + window.innerWidth + 'x' + window.innerHeight);
  }

  function initTabPane() {
    [].forEach.call(tabToggles, function (toggle) {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();

        // remove all active
        $(tabToggles).removeClass("active");
        // Toggle tab + set this active
        $(toggle).tab('show').addClass('active');

        // enable logoutbutton
        toggleLogoutBtn($(this).attr("href"));

      });
    });
  }

  function initOrderTable() {
    [].forEach.call(tableToggles, function (toggle) {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();

        // remove all active
        $(tableToggles).removeClass("active");
        // Toggle tab + set this active
        $(toggle).tab('show').addClass('active');

      });
    });
  }

  function updateOrderStates() {
    
    [].forEach.call(orderStates, function (item) {
      if ($(item).hasClass("activated")) {
        $(item).prev().addClass("activated");
      } else {
        $(item).prev().removeClass("activated");
      }
    })
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
"use strict";var pShoppingBag=function(){var e=document.querySelectorAll('[data-toggle="tab-toggler"]');function n(e){console.log("Browser size: "+window.innerWidth+"x"+window.innerHeight)}return console.log("<pShoppingBag> => INIT!"),$(window).on("resize",n),n(),[].forEach.call(e,(function(e){e.addEventListener("click",(function(n){n.preventDefault(),$(this).parent("li").addClass("active"),$(e).tab("show").removeClass("active")}))})),!0}();
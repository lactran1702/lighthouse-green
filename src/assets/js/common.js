//
// common.js
// Theme module
//

'use strict';

// count input

(function () {
  var countInputs = document.getElementsByClassName('count-input');

  if (countInputs.length > 0) {
    for (let i = 0; i < countInputs.length; i++) {
      const inputWrap = countInputs[i];
      const buttonDesc = $(inputWrap).find("[data-toggle='count']:first-child");
      const buttonInc = $(inputWrap).find("[data-toggle='count']:last-child");
      const inp = $(inputWrap).find("input");
      let currentVal = $(inp).val();

      buttonDesc.on("click", function (event) {
        event.preventDefault();
        let _nextVal = Math.max(parseInt(currentVal) - 1, 0);
        currentVal = _nextVal;
        inp.val(_nextVal);
      })

      buttonInc.on("click", function (event) {
        event.preventDefault();
        let _nextVal = parseInt(currentVal) + 1;
        currentVal = _nextVal;
        inp.val(_nextVal);
      })

    }
  }
})();
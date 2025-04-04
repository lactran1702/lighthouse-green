'use strict';
var pMain = (function () {

  //
  // Variables
  //
  //
  // const path_resource = "assets/";
  // Functions
  //
  let _path = "";
  if (typeof path_resource == "undefined") {
    _path = "assets/";
  } else {
    _path = path_resource;
  }

  function init() {

    console.log('<pMain> => INIT!');

    // inject page script (if any):
    const mainTag = document.getElementsByTagName("main")[0];
    if (!mainTag) {
      console.warn("[MAIN] Thẻ <main> trong HTML của bạn đâu?");
      return;
    }

    const pageID = mainTag.getAttribute("id");
    if (!pageID) {
      console.warn("[MAIN] Thẻ <main> hình như chưa có 'id' kìa. Mà nếu không cần thì thôi cũng chả sao!");
      //return;
    }
    if (pageID) {
      GLoader.loadScript(_path + "js/pages/" + pageID + ".js", function (script) {
        // if (GLOBAL[pageID] && typeof GLOBAL[pageID].init != "undefined") {
        //   GLOBAL[pageID].init();
        // }
        console.info("page script loading status: ", script);
      });

    }
    document.body.classList.add("loaded");
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
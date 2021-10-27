
/* GLoader - version 1.2
- Description: preload external Image, JS & CSS files
- Date: Aug 12, 2017
- Author: Goon Nguyen
================================================== */

function randomVersion() {
  return "?v=" + Math.round(Math.random() * 999999);
}

var GLoader = {
  version: 1.2,

  // Load script: JS or CSS
  loadScript: function (url, callback) {
    var done = false;
    var fileType = (url.indexOf('.js') > -1) ? "js" : "css";
    var result = { status: false, message: "" };
    var script = (fileType == "js") ? document.createElement('script') : document.createElement('link');

    script.setAttribute('data-loader', 'GLoader');
    if (fileType == "js") {
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src', url + randomVersion());
    } else {
      script.setAttribute('rel', 'stylesheet');
      script.setAttribute('type', 'text/css');
      script.setAttribute('href', url);
    }
    // events
    script.onload = handleLoad;
    script.onreadystatechange = handleReadyStateChange;
    script.onerror = handleError;

    if (fileType == "js") {
      document.body.appendChild(script);
    } else {
      document.head.appendChild(script);
    }

    function handleLoad() {
      if (!done) {
        done = true;

        result.status = true;
        result.message = "Script was loaded successfully";

        if (callback) callback(result);
      }
    }

    function handleReadyStateChange() {
      var state;

      if (!done) {
        state = script.readyState;
        if (state === "complete") {
          handleLoad();
        }
      }
    }

    function handleError() {
      //console.log("error");
      if (!done) {
        done = true;
        result.status = false;
        result.message = "Failed to load script.";
        if (callback) callback(result);
      }
    }
  },

  // check file existed:
  isExisted: function (filename) {
    var scripts = document.getElementsByTagName("script");
    var existed = false;
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].src) {
        var src = scripts[i].src;
        if (String(src).toLowerCase().indexOf(filename.toLowerCase()) >= 0) {
          existed = true;
        }
        //console.log(i,scripts[i].src)
      } else {
        //console.log(i,scripts[i].innerHTML)
      }
    }
    return existed;
  },

  // Load list of scripts:
  loadScripts: function (array, callback) {
    var result = { status: false, message: "" };
    var count = 0;
    var total = array.length;
    //console.log("loadScripts")
    this.loadScript(array[count], onComplete);

    function onComplete(result) {
      count++;
      //console.log(count, total)
      if (count == total) {
        result.status = true;
        result.message = "All scripts were loaded.";
        if (callback) callback(result);
      } else {
        if (GLoader.isExisted(array[count])) {
          console.log("[GLoader] The script \"" + array[count] + "\" was existed -> Skipped.");
        } else {
          GLoader.loadScript(array[count], onComplete);
        }
      }
    }
  },

  // load single photos
  // url: String, options: Object
  loadPhoto: function (url, options, callback) {
    var img = new Image();
    img.onload = function () {
      if (typeof callback != "undefined") callback(url);
    };
    img.onerror = function () {
      if (typeof callback != "undefined") callback(null);
    };
    img.src = url;
  },

  // load multiple photos
  // urls: Array, options: Object
  loadPhotos: function (urls, options, callback) {
    var array = urls;
    var count = 0;
    var total = array.length;
    var result = { status: false, message: "" };
    var photos = [];

    var currentURL = array[count];
    this.loadPhoto(currentURL, options, onComplete);

    function onComplete(url) {
      count++;
      //console.log(count, total)
      if (count == total) {
        result.status = true;
        result.message = "All photos were loaded.";
        result.photos = photos;
        if (callback) callback(result);
      } else {
        photos.push(url);
        currentURL = array[count];
        GLoader.loadPhoto(currentURL, options, onComplete);
      }
    }
  }
};
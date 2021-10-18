//
// slider.js
// Additional module
//

'use strict';

// const { default: KeenSlider } = require("keen-slider");

(function () {

    //
    // Variables
    //

    var sliders = document.querySelectorAll(".keen-slider");


    //
    // Function
    //

    function init(el) {
        var slider = new KeenSlider(el, {
            created: function (instance) {
                el
                    .parentNode
                    .getElementsByClassName("keen-slider-prev")[0]
                    .addEventListener("click", function () {
                        instance.prev()
                    })

                el
                    .parentNode
                    .getElementsByClassName("keen-slider-next")[0]
                    .addEventListener("click", function () {
                        instance.next()
                    })
                var dots_wrapper = el.parentNode.getElementsByClassName("keen-slider-dots")[0]
                var slides = el.querySelectorAll(".keen-slider__slide")
                slides.forEach(function (t, idx) {
                    var dot = document.createElement("li")
                    dot.classList.add("dot")
                    dots_wrapper.appendChild(dot)
                    dot.addEventListener("click", function () {
                        instance.moveToSlide(idx)
                    })
                })
                updateClasses(instance, el)
            },
            slideChanged(instance) {
                updateClasses(instance, el)
            },
            rubberband: false,
        })
    }

    //
    // Method
    //

    function updateClasses(instance, el) {
        var slide = instance.details().relativeSlide
        var arrowLeft = el.parentNode.getElementsByClassName("keen-slider-prev")[0]
        var arrowRight = el.parentNode.getElementsByClassName("keen-slider-next")[0]
        slide === 0
            ? arrowLeft.classList.add("disabled")
            : arrowLeft.classList.remove("disabled")
        slide === instance.details().size - 1
            ? arrowRight.classList.add("disabled")
            : arrowRight.classList.remove("disabled")

        var dots = el.parentNode.querySelectorAll(".dot")
        dots.forEach(function (dot, idx) {
            idx === slide
                ? dot.classList.add("active")
                : dot.classList.remove("active")
        })
    }

    //
    // Event
    //

    if (typeof autosize !== 'undefined' && sliders) {
        [].forEach.call(sliders, function (el) {
            init(el);
        });
    }

})();
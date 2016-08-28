/**
 * Created by Stan on 28.08.2016.
 */
(function () {
    "use strict";

    var elements = {
        $range: document.getElementById("range"),
        $product : document.getElementById("product")
    },
    defaultVal = elements.$range.defaultValue;


    elements.$range.oninput = function() {
        console.log(elements.$range.value);
        elements.$product.style.backgroundPositionY = -218 * elements.$range.value + "px";
    };
}());
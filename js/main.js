/**
 * Created by Stan on 28.08.2016.
 */

/**
 * Start config for video player
 */
var tag = document.createElement('script'),
    player,
    firstScriptTag = document.getElementsByTagName('script')[0];

tag.src = "https://www.youtube.com/iframe_api";
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/**
 * Function run autoplay
 * video player
 */
function onPlayerReady(event) {
    event.target.playVideo();
}

/**
 * Function play video player
 */
function playVideo() {
    player.playVideo();
}

/**
 * Function stop video player
 */
function stopVideo() {
    player.pauseVideo();
}

/**
 * Function set config
 * to video player
 */
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-frame', {
        height: '356',
        width: '202',
        videoId: '9xKR8Vcjias',
        events: {
            'onReady': onPlayerReady
        }
    });
}
/**
 * End config for video player
 */

(function () {
    "use strict";

    /**
     * Constructor module of Banner
     *
     * @constructor Banner
     * @return {Object}
     */
    (function Banner() {
        var elements = {
                $range: document.getElementById("range"),
                $product : document.getElementById("product"),
                $video : document.getElementById("video"),
                $productText : document.getElementById("product-text"),
                $flashlight : document.getElementById("flashlight"),
                $memoryLightning : document.getElementById("memory-lightning"),
                $memorySocket : document.getElementById("memory-socket")
            },
            opts = {
                stepSize: -221
            },
            defaultVal = elements.$range.defaultValue,
            productTexts = [
                {
                    text: "Rethink what a phone can do"
                },
                {
                    text: "Water and dust resistant: Real world ready"
                },
                {
                    text: "Capture picture perfect moments in all conditions"
                },
                {
                    text: "Expandable memory: Fit more of what you love"
                }
            ];

        /**
         * Method generate random number
         *
         * @method randomNumber
         * @returns {number}
         */
        function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        /**
         * Method toggle video state
         *
         * @method isDefaultState
         * @returns {boolean}
         */
        function isDefaultState() {
            return defaultVal === elements.$range.value;
        }

        /**
         * Method toggle video state
         *
         * @method toggleVideo
         * @param state {boolean} - state of video
         * @returns {void}
         */
        function toggleVideo(state) {
            if (state) {
                elements.$video.style.display = "block";
                playVideo();
            } else {
                elements.$video.style.display = "none";
                stopVideo();
            }
        }

        /**
         * Method change image
         *
         * @method changeImage
         * @returns {void}
         */
        function changeImage() {
            elements.$product.style.backgroundPositionY = opts.stepSize * elements.$range.value + "px";
        }

        /**
         * Method show product text
         *
         * @method showProductText
         * @param position {number} - position of range slider
         * @returns {void}
         */
        function showProductText(position) {
            if (position >= 0 && position < 3) {
                elements.$productText.innerHTML = productTexts[0].text;
            } else if (position >= 3 && position < 21) {
                elements.$productText.innerHTML = productTexts[1].text;
            } else if (position >= 21 && position < 45) {
                elements.$productText.innerHTML = productTexts[2].text;
            } else if (position >= 45) {
                elements.$productText.innerHTML = productTexts[3].text;
            }
        }

        /**
         * Method slide rain to bottom
         *
         * @method rainSlideDown
         * @param rainItem {object} - object of rain item
         * @returns {void}
         */
        function rainSlideDown(rainItem) {
            setTimeout(function () {
                rainItem.style.top = "300px";
            }, 500);
        }

        /**
         * Method render item
         *
         * @method renderRainItem
         * @param item {object} - array of rain drops
         * @returns {void}
         */
        function renderRainItem(item) {
            var rainItem = document.createElement("div");

            rainItem.className = "rain-drop-" + item.rainDropType;
            rainItem.style.top = item.startPositionY + "px";
            rainItem.style.left = item.startPositionX + "px";

            elements.$product.appendChild(rainItem);
            rainSlideDown(rainItem);
        }

        /**
         * Method render items of rain
         *
         * @method renderRainItems
         * @param items {object} - array of rain drops
         * @returns {void}
         */
        function renderRainItems(items) {
            for (var i = 0; i < items.length; i++) {
                renderRainItem(items[i]);
            }
        }

        /**
         * Method generate rain
         *
         * @method generateRain
         * @param position {number} - position of range slider
         * @returns {void}
         */
        function generateRain(position) {
            var i = 0,
                rainItemsCount = randomNumber(1, 9),
                rainItems = [];

            if (position >= 3 && position <= 21) {
                for (i = 0; i <= rainItemsCount; i++) {
                    rainItems.push({
                        rainDropType: randomNumber(1, 4),
                        startPositionX: randomNumber(1, 450),
                        startPositionY: randomNumber(1, 190)
                    });
                }
                renderRainItems(rainItems);
            }
        }

        /**
         * Method show flashlight camera
         *
         * @method flashlight
         * @param position {number} - position of range slider
         * @returns {void}
         */
        function flashlight(position) {
            if (position == 30) {
                elements.$flashlight.style.display = "block";

                setTimeout(function () {
                    elements.$flashlight.style.backgroundSize = "130%";
                    setTimeout(function () {
                        elements.$flashlight.style.display = "none";
                        elements.$flashlight.style.backgroundSize = "40%";
                    }, 200);
                }, 70);
            }
        }

        /**
         * Method show memory lightning
         *
         * @method memoryLightning
         * @param position {number} - position of range slider
         * @returns {void}
         */
        function memoryLightning(position) {
            if (position == 59) {
                elements.$memorySocket.style.display = "block";
                setTimeout(function () {
                    elements.$memoryLightning.style.backgroundPosition = "55px 0px";
                    setTimeout(function () {
                        elements.$memoryLightning.style.backgroundPosition = "-45px 0px";
                    }, 150);
                }, 150);
            } else {
                elements.$memorySocket.style.display = "none";
            }
        }

        /**
         * Method sets handlers for events
         *
         * @method setEventHandlers
         * @returns {void}
         */
        function setEventHandlers() {
            elements.$range.oninput = function () {

                toggleVideo(isDefaultState());
                changeImage();
                showProductText(elements.$range.value);
                generateRain(elements.$range.value);
                flashlight(elements.$range.value);
                memoryLightning(elements.$range.value);
            };
        }

        /**
         * Method init of this module
         *
         * @method init
         * @return {void}
         */
        (function init() {
            setEventHandlers();
            showProductText(0);
        }());

        return Banner;
    }());

}());
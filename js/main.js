/**
 * Created by Stan on 28.08.2016.
 */

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-frame', {
        height: '363',
        width: '202',
        videoId: '9xKR8Vcjias',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.pauseVideo();
}
function playVideo() {
    player.playVideo();
}


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
                $video : document.getElementById("video")
            },
            opts = {
                stepSize: -221
            },
            defaultVal = elements.$range.defaultValue;

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
         * Method sets handlers for events
         *
         * @method setEventHandlers
         * @returns {void}
         */
        function setEventHandlers() {
            elements.$range.oninput = function () {
                changeImage();
                toggleVideo(isDefaultState());
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
        }());

        return Banner;
    }());

}());
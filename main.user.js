// ==UserScript==
// @name         4399 Cracker
// @namespace    http://blcrt.github.io/4399
// @version      43.99
// @description  4399人性化，一键破解防沉迷，一键跳转到游戏页面
// @author       Belli_666
// @match        https://www.4399.com/*
// @grant        none
// @icon         data:image/png;base64,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
// ==/UserScript==

(function() {
    'use strict';
    const pattern = /.*_.*\.htm$/i;
    if (pattern.test(window.location.href)) {
        var intervalId = setInterval(function() {
                var elementsToRemove = ["#Anti_open", "#Anti_mask", "#pusher"];

                elementsToRemove.forEach(function(selector) {
                    var element = document.querySelector(selector);

                    if (element) {
                        element.remove();
                        clearInterval(intervalId);
                    }
                });


                if (!document.querySelector("#Anti_open") && !document.querySelector("#Anti_mask") && !document.querySelector("#pusher")) {
                    clearInterval(intervalId);
                }
            }

            , 300);
    } else {
        setInterval(function() {
            var links = document.getElementsByTagName('a');
            for (var i = 0; i < links.length; i++) {
                if (links[i].href && links[i].href.match(/^https?:\/\/www.4399\.com\/flash\/[^"]*_[^"]\.htm$/)) {
                    console.log('Found match, redirecting to:', links[i].href);
                    window.location.href = links[i].href;
                    return;
                }
            }
        }, 125);
    }
})();

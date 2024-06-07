// ==UserScript==
// @name         4399 Cracker
// @namespace    http://blcrt.github.io/4399/main.js
// @version      43.99
// @description  Crack 4399
// @author       Belli_666
// @match        https://www.4399.com/*
// @grant        none
// ==/UserScript==

(function() {
        'use strict';

        var intervalId=setInterval(function() {
                var elementsToRemove=["#Anti_open", "#Anti_mask", "#pusher"];

                elementsToRemove.forEach(function(selector) {
                        var element=document.querySelector(selector);

                        if (element) {
                            element.remove();
                            clearInterval(intervalId);
                        }
                    });


                if ( !document.querySelector("#Anti_open") && !document.querySelector("#Anti_mask") && !document.querySelector("#pusher")) {
                    clearInterval(intervalId);
                }
            }

            , 300);
    })();

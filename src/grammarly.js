// ==UserScript==
// @name         grammarly
// @namespace    https://github.com/puritys
// @version      0.1
// @description  login grammarly
// @author       puritys
// @match        https://www.grammarly.com/signin*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var account = "";
    var password = "";
    var s;
    s = document.querySelector("input[type=email]");
    console.log("tset");
    s.value = account;
    e2(s, account);

    s = document.querySelector("input[type=password]");
    s.value = password;
    e2(s, password);
    document.querySelector("button[type=submit]").click();

    function keydown(elm, letter) {
        var type = "keydown";
        for(var i = 0 ; i < letter.length; i++) {
            var event; // The custom event that will be created
            var char = letter.substr(i, 1);
            if (document.createEvent) {
                event = document.createEvent("HTMLEvents");
                event.initEvent(type, true, true);
            } else {
                event = document.createEventObject();
                event.eventType = type;
            }
            event.code = event.keyCode = char.charCodeAt(0);
            event.data = event.char = char;
            event.insertType = "insertText";
            //event.isTrusted = true;
            //event.eventPhase = 3;
            console.log(event);
            if (document.createEvent) {
                elm.dispatchEvent(event);
            } else {
                elm.fireEvent("on" + event.eventType, event);
            }
        }
    }

    function e2(elm, value) {
        var event;
        event = document.createEvent("HTMLEvents");
        event.initEvent("input", true, true);
        if (document.createEvent) {
            elm.dispatchEvent(event);
        } else {
            elm.fireEvent("on" + event.eventType, event);
        }
    }
 })();

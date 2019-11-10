// ==UserScript==
// @name         Google Login
// @namespace    https://github.com/puritys
// @version      0.1
// @description  To login google
// @author       puritys
// @match        https://accounts.google.com/signin/*
// @match        https://accounts.google.com/ServiceLogin*
// ==/UserScript==

(function() {
   'use strict';
    console.log("To auto login google account");
    var account = "zzz";
    var passwords = {
       "zzz": "ccc"
    };

    var typeAccount = function () {
        console.log("Check and type google account");
        if (document.querySelector("#identifierId")) {
             var form = document.querySelector("form");
             console.log(form, "action = " + form.action);
             if (form.action.match(/^https:\/\/accounts.google.com\/signin\//)) {
                 var email = document.querySelector("input[type=email]");
                 console.log(email);
                 if (email) {
                     console.log("type account = " + account);
                     email.value = account;
                     document.querySelector("#identifierId").parentNode.querySelectorAll("*")[1].innerHTML = account;
                     fireEvent(email, "focus");
                     document.querySelector("#identifierNext").click();
                 }
             }

        }

    };

    var typePassword = function () {
        console.log("Check and type google password");
        if (document.querySelector("#password")) {
             var form = document.querySelector("form");
             console.log(form, "action = " + form.action);
             if (form.action.match(/\/signin\/v[0-9]\/challenge\/password\//)) {
                 var pswd = document.querySelector("input[type=password]");
                 console.log(pswd);
                 if (pswd) {
                     var p = passwords[account];
                     pswd.value = p;
                     fireEvent(pswd, "focus");
                     document.querySelector("#passwordNext").click();
                 }
             }

        }

    };


    setTimeout(typeAccount, 600);
    setTimeout(typePassword, 3200);

    function fireEvent(elm, type) {
       var event; // The custom event that will be created

        if (document.createEvent) {
            event = document.createEvent("HTMLEvents");
            event.initEvent(type, true, true);
        } else {
            event = document.createEventObject();
            event.eventType = type;
        }
        if (document.createEvent) {
            elm.dispatchEvent(event);
        } else {
            elm.fireEvent("on" + event.eventType, event);
        }
        console.log("fire event", event);
    }

 })();

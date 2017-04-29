// ==UserScript==
// @name         Auto login Facebook
// @namespace    https://github.com/puritys/tampermonkeyScript
// @version      0.1
// @description  login facebook
// @author       https://github.com/puritys
// @match        https://zh-tw.facebook.com/login/*
// @match        https://www.facebook.com/email/unreachable/*
// @match        https://www.facebook.com/login/reauth.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var tmpNode;
    var account = ""; // put your facebook account
    var password = ""; // put your facebook password
    tmpNode = document.getElementById("email");
    if (tmpNode) {
        // login
        tmpNode.value = account;
        document.getElementById("pass").value = password;
        document.getElementById("loginbutton").click();
    }
    
    tmpNode = document.querySelector(".uiInterstitialContent");
    if (tmpNode) {
        tmpNode = document.querySelector("input[name=pass]");
        if (tmpNode) {
            tmpNode.value = password;
            document.querySelector(".uiInterstitialBar input[type=submit]").click();
        } else {
            // skip unreachable page
            document.querySelector("input[name=ignore]").click();
        }
    }
})();

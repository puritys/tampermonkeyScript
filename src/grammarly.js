// ==UserScript==
// @name         grammarly
// @namespace    https://github.com/puritys
// @version      0.1
// @description  login grammarly
// @author       puritys
// @match        https://www.grammarly.com/signin?page=free*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var account = "";
    var password = "";
    document.querySelectorAll("form input")[0].value = account;
    document.querySelectorAll("form input")[1].value = password;
    document.querySelector("input[type=submit]").click();
 })();

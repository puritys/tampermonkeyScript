// ==UserScript==
// @name         NPM Login
// @namespace    https://github.com/puritys
// @version      0.1
// @description  login npm
// @author       puritys
// @match        https://www.npmjs.com/login*
// @grant        none
// ==/UserScript==

(function() {
   'use strict';
    var login = "yyy";
    var password = "kkk";

    var func = function () {
        if (document.querySelector("#login")) {
             var name = document.querySelector("#login #login_username");
             if (name) {
                name.value = login;
             }
             document.querySelector("#login #login_password").value = password;
             document.querySelector("#login button[type=submit]").click();
        }
    };
    setTimeout(func, 50);

})();

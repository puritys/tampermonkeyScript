// ==UserScript==
// @name         TML Keyboard
// @namespace    https://github.com/puritys/tampermonkeyScript
// @version      0.1
// @description  Auto load my tmk keyboard setting, You have to login gist first for access token. Attention, you can not reqeust 20 times per minute or gist will block your requests for cople of hours.
// @author       https://github.com/puritys
// @match        https://tkg.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function dispatchEvent(el, event) {
       var event = new Event(event);
       el.dispatchEvent(event);
    }
    function go() {
        var layoutMode = 0;
        appendLayers(0);
        var layouts = ["http://www.keyboard-layout-editor.com/#/gists/efdc2cb943f6aa2f65b400eaa8d9e041",// 0
                      "http://www.keyboard-layout-editor.com/#/gists/07f76440b08d147a7263078f9ee561ea", // 1
                      "http://www.keyboard-layout-editor.com/#/gists/a96c6d27e292e2d2f6ecc693e2a610cc",  //2
                      "http://www.keyboard-layout-editor.com/#/gists/bcd967981e6548918f6335b6a1d4a624",  //3
                      "http://www.keyboard-layout-editor.com/#/gists/11d429406d60c1d3d7ebd1a8a77ed574",  //4
                      "http://www.keyboard-layout-editor.com/#/gists/7377b5802c293459c0d71eda67e29996",  //5
                      "http://www.keyboard-layout-editor.com/#/gists/d9919a774b4e9b71de5ca64b0f4b83c1"];
        document.querySelector("#layer-num").value = layouts.length;
        loadGist(layouts, 0);
    }


    function loadGist(layouts, index) {
        if (index > 0)  addAfterLastLayer();
        var layout = document.querySelector("#layer" + index);
        layout.value = layouts[index];
        dispatchEvent(layout, "blur");
        index++;
        if (index < layouts.length) {
            var callback = loadGist.bind(window, layouts, index);
            setTimeout(callback, 100);
        }
    }
    var t = go.bind();
    setTimeout(t, 1000);
})();


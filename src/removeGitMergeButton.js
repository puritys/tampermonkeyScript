// ==UserScript==
// @name         Remove git merge button
// @namespace    https://github.com/puritys/tampermonkeyScript
// @version      0.1
// @description  Remove git merge button if the PR without any comments.
// @author       https://github.com/puritys
// @match        https://git*
// @grant        none
// ==/UserScript==

var author = document.querySelector('.author.pull-header-username');
if (author) {
    author = author.innerHTML.replace(/[\n\r]+/g, '');
    author = author.replace(/[^0-9a-z]+/ig,'');

}
console.log("author = " + author);

// get comment
var commentNodes = document.querySelectorAll('.timeline-comment-header .timeline-comment-header-text .author');

var name, canMerge = false;
for (var index in commentNodes) {
    if (parseInt(index) != index) continue;
    if (!commentNodes.hasOwnProperty(index)) continue;
    name = commentNodes[index].innerHTML.replace(/[^0-9a-z]+/i, '');
    if (!name) continue;
    if (name == author) continue;
    console.log("-" + name + "- -" + author + "-");
    canMerge = true;
}


if (canMerge == false) {
    hideButton();
}

function hideButton() {
    var btn = document.querySelector('.merge-branch-action');
    if (btn) btn.parentNode.removeChild(btn);
    var pr = document.querySelector('.merge-pr');
    if (pr) {
        pr.style.width = "0px";
        pr.style.height = "0px";
        pr.style.display = 'none';
    }
    setTimeout(hideButton, 1000);
}

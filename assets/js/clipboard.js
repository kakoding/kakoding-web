$(document).ready(function () {

    // clipboard.js
    const clipboard = new ClipboardJS('.kak-copy-link');
    $('.kak-copy-link').popover();
    setInterval(function() {
        $('.kak-copy-link').popover('hide');
    }, 5000);

});

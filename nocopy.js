$(function () {
    $('body').bind('contextmenu', function () {
        return false;
    });
    $('body').bind("selectstart", function () { return false; });
});


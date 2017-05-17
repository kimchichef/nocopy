(function () {
  document.oncontextmenu = function () {
    return false;
  };
  document.onselectstart = function () {
    return false;
  };
  document.onkeydown = function (e) {
    if (e.ctrlKey == true || e.shiftKey == true || e.key=="F12") {
      return false;
    }
  };
})();

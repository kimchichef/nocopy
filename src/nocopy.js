(function () {
  document.oncontextmenu = function () {
    console.log('contextmenudetected');
    return false;
  };
  document.onselectstart = function () {
    console.log('selectstartdetected');
    return false;
  };
  document.onkeydown = function (e) {
    if (e.ctrlKey == true
      || e.shiftKey == true
      || e.key=='F12'
      || e.key=='PrintScreen') {
        console.log('keydetected');
      return false;
    }
    if (e.code=='PrintScreen') {
        console.log('PrintScreendetected');
      return false;
    }
  };
})();
